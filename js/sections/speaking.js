// Speaking section controller: timed prep + response per task, with optional mic recording for self-review.
// Recordings stay in memory only for this session (never uploaded or persisted to storage).

function renderSpeaking(app) {
  const data = speakingData;
  let taskIndex = 0;
  let timer = null;
  let mediaStream = null;
  let mediaRecorder = null;
  let recordedChunks = [];
  let completed = {};

  const wrap = el(`<div></div>`);
  app.appendChild(wrap);

  function currentTask() {
    return data.tasks[taskIndex];
  }

  function updateClock(remaining, total) {
    const clock = document.getElementById("clockDisplay");
    if (!clock) return;
    clock.textContent = Timer.format(remaining);
    clock.classList.toggle("low", remaining <= total * 0.25 && remaining > 5);
    clock.classList.toggle("critical", remaining <= 5);
  }

  function stopMedia() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      try {
        mediaRecorder.stop();
      } catch (e) {}
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach((t) => t.stop());
      mediaStream = null;
    }
  }

  function renderIntro() {
    if (timer) timer.stop();
    stopMedia();
    const task = currentTask();
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${data.title} — ${task.partLabel} of ${data.tasks.length}</span>
        <h1>${task.name}</h1>
        <p class="small-muted">Preparation time: ${task.prepSeconds}s · Response time: ${task.responseSeconds}s</p>
        <p>When you click start, the task prompt will appear along with your preparation timer, just like the real test.</p>
        <div class="actions">
          <button onclick="window.__speakingStart()">Start ${task.partLabel}</button>
          <button class="secondary" onclick="Router.go('home')">Exit</button>
        </div>
      </div>
    `;
    window.__speakingStart = startPrep;
  }

  function startPrep() {
    const task = currentTask();
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${task.partLabel} — Preparation</span>
        <h2>${task.name}</h2>
      </div>
      <div class="timer-bar">
        <div class="phase-label">Preparation time — plan your response, don't speak yet</div>
        <div class="clock" id="clockDisplay">00:00</div>
      </div>
      <div class="card">
        <div class="passage">${escapeHtml(task.prompt)}</div>
      </div>
    `;
    timer = new Timer({
      seconds: task.prepSeconds,
      onTick: (r) => updateClock(r, task.prepSeconds),
      onComplete: startResponse,
    });
    timer.start();
  }

  async function startResponse() {
    const task = currentTask();
    const isLast = taskIndex === data.tasks.length - 1;
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${task.partLabel} — Speak Now</span>
        <h2>${task.name}</h2>
      </div>
      <div class="timer-bar">
        <div class="phase-label">Response time — speak your answer out loud now</div>
        <div class="clock" id="clockDisplay">00:00</div>
      </div>
      <div class="card">
        <div class="passage">${escapeHtml(task.prompt)}</div>
        <div class="speaking-record-box" id="recBox">
          <span class="small-muted">Checking microphone access...</span>
        </div>
      </div>
    `;
    timer = new Timer({
      seconds: task.responseSeconds,
      onTick: (r) => updateClock(r, task.responseSeconds),
      onComplete: finishResponse,
    });
    timer.start();
    await tryStartRecording();
  }

  async function tryStartRecording() {
    const box = document.getElementById("recBox");
    recordedChunks = [];
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) recordedChunks.push(e.data);
      };
      mediaRecorder.start();
      if (box)
        box.innerHTML = `<span class="rec-dot"></span> Recording your response for playback...`;
    } catch (e) {
      if (box)
        box.innerHTML = `<span class="small-muted">Microphone not available — speak your answer out loud; recording is skipped this time.</span>`;
    }
  }

  function finishResponse() {
    const task = currentTask();
    const isLast = taskIndex === data.tasks.length - 1;
    completed[task.id] = true;

    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.onstop = () => renderReview(task, isLast);
      mediaRecorder.stop();
    } else {
      renderReview(task, isLast);
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach((t) => t.stop());
      mediaStream = null;
    }
  }

  function renderReview(task, isLast) {
    let playbackHtml = `<p class="small-muted">No recording available for this attempt.</p>`;
    if (recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      playbackHtml = `<audio controls src="${url}" style="width:100%; margin-top:10px;"></audio>
        <p class="small-muted">This recording exists only in your browser for this session — it is not saved or uploaded anywhere.</p>`;
    }
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${task.partLabel} — Time's Up</span>
        <h2>${task.name}</h2>
        <p>Listen back to your response and compare it with the sample answer on the answer key page.</p>
        ${playbackHtml}
        <div class="actions">
          <button onclick="window.__speakingNext()">${isLast ? "Finish Speaking Section" : "Next Task"}</button>
          <button class="secondary" onclick="Router.go('answer-key/speaking/${task.id}')">View Sample Answer for This Task</button>
        </div>
      </div>
    `;
    window.__speakingNext = goNext;
  }

  function goNext() {
    if (timer) timer.stop();
    if (taskIndex < data.tasks.length - 1) {
      taskIndex += 1;
      renderIntro();
    } else {
      finishSection();
    }
  }

  function finishSection() {
    Store.set("speaking", { completed, completedAt: Date.now() });
    renderResults();
  }

  function renderResults() {
    const flow = Store.get("fullTestFlow");
    wrap.innerHTML = `
      <div class="card score-hero">
        <span class="badge">Speaking Complete</span>
        <p>Great work finishing all 8 speaking tasks. Speaking is scored holistically — review the sample answers and notes on the answer key page to compare your approach.</p>
        <div class="actions" style="justify-content:center;">
          <button onclick="Router.go('answer-key/speaking')">View Sample Answers</button>
          ${
            flow && flow.active
              ? `<button onclick="finishFullTest()">Finish Full Test</button>`
              : `<button class="secondary" onclick="Router.go('home')">Back to Home</button>`
          }
        </div>
      </div>
    `;
  }

  renderIntro();
}

function finishFullTest() {
  Store.set("fullTestFlow", { active: false });
  Router.go("answer-key");
}
