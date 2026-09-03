// Listening section: jump to any part anytime, control your own Preview/Answer timers,
// and play/stop/replay the audio (via speech synthesis) whenever you like.

function renderListening(app) {
  const wrap = el(`<div></div>`);
  app.appendChild(wrap);

  let currentPartIdx = 0;
  let showResults = false;
  let activeTimers = [];
  let progressInterval = null;

  function testNum() {
    return AppState.get();
  }
  function getTest() {
    return listeningTests.find((t) => t.testNumber === testNum());
  }
  function stateKey() {
    return `listening_${testNum()}`;
  }
  function loadState() {
    return Store.get(stateKey()) || { answers: {} };
  }
  function saveAnswer(key, oi) {
    const st = loadState();
    st.answers[key] = oi;
    Store.set(stateKey(), st);
  }

  function destroyTimers() {
    activeTimers.forEach((t) => t.destroy());
    activeTimers = [];
  }

  function stopAudio() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (progressInterval) clearInterval(progressInterval);
    const bar = document.getElementById("playProgress");
    if (bar) bar.style.width = "0%";
    const status = document.getElementById("audioStatus");
    if (status) status.textContent = "Stopped";
  }

  function playAudio(text) {
    stopAudio();
    const estSeconds = Math.max(15, text.split(/\s+/).length / 2.4);
    let elapsed = 0;
    const status = document.getElementById("audioStatus");
    if (status) status.textContent = "Playing...";
    progressInterval = setInterval(() => {
      elapsed += 0.5;
      const bar = document.getElementById("playProgress");
      if (!bar) {
        clearInterval(progressInterval);
        return;
      }
      bar.style.width = Math.min(100, (elapsed / estSeconds) * 100) + "%";
      if (elapsed >= estSeconds) clearInterval(progressInterval);
    }, 500);
    if (!("speechSynthesis" in window)) {
      if (status) status.textContent = "Text-to-speech isn't supported in this browser.";
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.onend = () => {
      const s = document.getElementById("audioStatus");
      if (s) s.textContent = "Finished playing";
    };
    window.speechSynthesis.speak(utter);
  }

  function questionListHtml(part, answers) {
    return part.questions
      .map((q, qi) => {
        const key = `${part.id}_${qi}`;
        const selected = answers[key];
        return `
        <div class="question-block">
          <strong>${qi + 1}. ${escapeHtml(q.q)}</strong>
          ${q.options
            .map(
              (opt, oi) => `
            <label class="option-row ${selected === oi ? "selected" : ""}">
              <input type="radio" name="${key}" data-key="${key}" data-oi="${oi}" class="ans-radio" ${
                selected === oi ? "checked" : ""
              } />
              <span>${escapeHtml(opt)}</span>
            </label>
          `
            )
            .join("")}
        </div>
      `;
      })
      .join("");
  }

  function wireQuestionInputs() {
    wrap.querySelectorAll(".ans-radio").forEach((inp) => {
      inp.addEventListener("change", () => {
        const key = inp.dataset.key;
        const oi = parseInt(inp.dataset.oi, 10);
        saveAnswer(key, oi);
        wrap.querySelectorAll(`input[name="${key}"]`).forEach((other, idx) => {
          other.closest(".option-row").classList.toggle("selected", idx === oi);
        });
      });
    });
  }

  window.__listeningFinish = () => {
    showResults = true;
    render();
  };
  window.__listeningBackToTest = () => {
    showResults = false;
    render();
  };

  function computeScore(test, answers) {
    let score = 0,
      total = 0;
    test.parts.forEach((part) => {
      part.questions.forEach((q, qi) => {
        total += 1;
        if (answers[`${part.id}_${qi}`] === q.correct) score += 1;
      });
    });
    return { score, total };
  }

  function renderResults(test) {
    const state = loadState();
    const { score, total } = computeScore(test, state.answers);
    Store.set(stateKey(), { ...state, score, total, completedAt: Date.now() });
    wrap.innerHTML = `
      <div class="card score-hero">
        <span class="badge">Listening — Test ${test.testNumber} Complete</span>
        <div class="score-num">${score} / ${total}</div>
        <p>Correct answers</p>
        <div class="actions" style="justify-content:center;">
          <button onclick="window.__listeningBackToTest()">Back to Test</button>
          <button class="secondary" onclick="Router.go('answer-key/listening')">Review Answer Key</button>
        </div>
      </div>
    `;
  }

  function render() {
    destroyTimers();
    stopAudio();
    const test = getTest();
    if (!test) {
      wrap.innerHTML = notAvailableHtml("Listening", testNum());
      return;
    }
    if (showResults) {
      renderResults(test);
      return;
    }
    if (currentPartIdx >= test.parts.length) currentPartIdx = 0;
    const state = loadState();
    const part = test.parts[currentPartIdx];

    const previewWidget = createTimerWidget(part.previewSeconds, "Preview Timer — read the questions first");
    const answerWidget = createTimerWidget(part.answerSeconds, "Answer Timer");

    wrap.innerHTML = `
      <div class="card">
        <span class="badge">Listening — Test ${test.testNumber} — ${part.partLabel} of ${test.parts.length}</span>
        <h1>${part.name}</h1>
        <p>${part.instructions}</p>
      </div>
      <div class="section-nav">${tabStripHtml(test.parts, currentPartIdx)}</div>
      <div class="two-col">
        <div>${previewWidget.html}</div>
        <div>${answerWidget.html}</div>
      </div>
      <div class="card">
        <div class="audio-controls">
          <button type="button" id="playAudioBtn">▶ Play Audio</button>
          <button type="button" class="secondary" id="stopAudioBtn">■ Stop</button>
          <span class="small-muted" id="audioStatus">Not started</span>
          <div class="progress-track"><div class="progress-fill" id="playProgress" style="width:0%"></div></div>
          <p class="small-muted">You control playback here — play, pause by stopping, and replay as many times as you like. (On the real test, the audio plays only once.)</p>
        </div>
      </div>
      <div class="card">${questionListHtml(part, state.answers)}</div>
      <div class="actions">
        <button onclick="window.__listeningFinish()">Finish &amp; See Score for Test ${test.testNumber}</button>
      </div>
    `;

    previewWidget.mount();
    answerWidget.mount();
    activeTimers.push(previewWidget, answerWidget);

    wireTabStrip(wrap, (idx) => {
      currentPartIdx = idx;
      render();
    });
    document.getElementById("playAudioBtn").addEventListener("click", () => playAudio(part.transcript));
    document.getElementById("stopAudioBtn").addEventListener("click", stopAudio);
    wireQuestionInputs();
  }

  render();
}
