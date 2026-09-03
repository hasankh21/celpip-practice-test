// Speaking section: jump to any task anytime, separate manual Prep/Response timers, and
// fully manual Start/Stop recording — start and stop whenever you want, independent of the timers.
// Recordings stay in memory for this browser session only; nothing is uploaded or persisted.

function renderSpeaking(app) {
  const wrap = el(`<div></div>`);
  app.appendChild(wrap);

  let currentTaskIdx = 0;
  let activeTimers = [];
  let mediaStream = null;
  let mediaRecorder = null;
  let recordedChunks = [];
  let recordingUrl = null;
  let isRecording = false;

  function testNum() {
    return AppState.get();
  }
  function getTest() {
    return speakingTests.find((t) => t.testNumber === testNum());
  }
  function stateKey() {
    return `speaking_${testNum()}`;
  }
  function loadState() {
    return Store.get(stateKey()) || { completed: {} };
  }
  function markCompleted(taskId) {
    const st = loadState();
    st.completed[taskId] = true;
    Store.set(stateKey(), st);
  }

  function destroyTimers() {
    activeTimers.forEach((t) => t.destroy());
    activeTimers = [];
  }

  function stopMediaTracks() {
    if (mediaStream) {
      mediaStream.getTracks().forEach((t) => t.stop());
      mediaStream = null;
    }
  }

  async function startRecording() {
    if (isRecording) return;
    recordedChunks = [];
    const statusEl = document.getElementById("recStatus");
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) recordedChunks.push(e.data);
      };
      mediaRecorder.onstop = () => {
        if (recordedChunks.length > 0) {
          if (recordingUrl) URL.revokeObjectURL(recordingUrl);
          const blob = new Blob(recordedChunks, { type: "audio/webm" });
          recordingUrl = URL.createObjectURL(blob);
          renderPlayback();
        }
        stopMediaTracks();
      };
      mediaRecorder.start();
      isRecording = true;
      updateRecordingUi();
    } catch (e) {
      if (statusEl)
        statusEl.textContent = "Microphone access denied or unavailable — you can still practice speaking out loud.";
    }
  }

  function stopRecording() {
    if (!isRecording) return;
    isRecording = false;
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }
    updateRecordingUi();
  }

  function updateRecordingUi() {
    const statusEl = document.getElementById("recStatus");
    const startBtn = document.getElementById("recStartBtn");
    const stopBtn = document.getElementById("recStopBtn");
    if (!statusEl) return;
    if (isRecording) {
      statusEl.innerHTML = `<span class="rec-dot"></span> Recording...`;
      startBtn.disabled = true;
      stopBtn.disabled = false;
    } else {
      statusEl.textContent = "Not recording";
      startBtn.disabled = false;
      stopBtn.disabled = true;
    }
  }

  function renderPlayback() {
    const box = document.getElementById("playbackBox");
    if (!box) return;
    if (recordingUrl) {
      box.innerHTML = `
        <audio controls src="${recordingUrl}" style="width:100%;"></audio>
        <p class="small-muted">This recording exists only in your browser for this session — it is not saved or uploaded anywhere.</p>
      `;
    } else {
      box.innerHTML = `<p class="small-muted">No recording yet for this task.</p>`;
    }
  }

  function render() {
    destroyTimers();
    stopRecording();
    stopMediaTracks();
    recordedChunks = [];
    if (recordingUrl) {
      URL.revokeObjectURL(recordingUrl);
      recordingUrl = null;
    }

    const test = getTest();
    if (!test) {
      wrap.innerHTML = notAvailableHtml("Speaking", testNum());
      return;
    }
    if (currentTaskIdx >= test.tasks.length) currentTaskIdx = 0;
    const task = test.tasks[currentTaskIdx];

    const prepWidget = createTimerWidget(task.prepSeconds, "Preparation Timer");
    const responseWidget = createTimerWidget(task.responseSeconds, "Response Timer");

    wrap.innerHTML = `
      <div class="card">
        <span class="badge">Speaking — Test ${test.testNumber} — ${task.partLabel} of ${test.tasks.length}</span>
        <h1>${task.name}</h1>
      </div>
      <div class="section-nav">${tabStripHtml(test.tasks, currentTaskIdx)}</div>
      <div class="two-col">
        <div>${prepWidget.html}</div>
        <div>${responseWidget.html}</div>
      </div>
      <div class="card">
        <div class="passage">${escapeHtml(task.prompt)}</div>
      </div>
      <div class="card">
        <div class="speaking-record-box">
          <div class="actions" style="justify-content:center; margin-top:0;">
            <button type="button" id="recStartBtn">🎙 Start Recording</button>
            <button type="button" class="secondary" id="recStopBtn" disabled>■ Stop Recording</button>
          </div>
          <p id="recStatus" class="small-muted">Not recording</p>
          <p class="small-muted">Recording is fully manual — start and stop it whenever you're ready, independent of the timers above.</p>
        </div>
        <div id="playbackBox" style="margin-top:12px;"></div>
      </div>
      <div class="actions">
        <button class="secondary" onclick="window.__speakingMarkDone('${task.id}')">Mark Task Complete</button>
        <button class="secondary" onclick="Router.go('answer-key/speaking/${task.id}')">View Sample Answer for This Task</button>
      </div>
    `;

    prepWidget.mount();
    responseWidget.mount();
    activeTimers.push(prepWidget, responseWidget);

    wireTabStrip(wrap, (idx) => {
      currentTaskIdx = idx;
      render();
    });
    document.getElementById("recStartBtn").addEventListener("click", startRecording);
    document.getElementById("recStopBtn").addEventListener("click", stopRecording);
    renderPlayback();
  }

  window.__speakingMarkDone = (taskId) => {
    markCompleted(taskId);
    const btn = wrap.querySelector(`button[onclick="window.__speakingMarkDone('${taskId}')"]`);
    if (btn) btn.textContent = "✓ Marked Complete";
  };

  render();
}
