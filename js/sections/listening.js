// Listening section controller: intro -> preview (timed) -> audio playback (TTS) -> answer (timed) -> next part.

function renderListening(app) {
  const data = listeningData;
  let partIndex = 0;
  let answers = {};
  let timer = null;

  const wrap = el(`<div></div>`);
  app.appendChild(wrap);

  function currentPart() {
    return data.parts[partIndex];
  }

  function stopTimer() {
    if (timer) timer.stop();
  }

  function updateClock(remaining, total) {
    const clock = document.getElementById("clockDisplay");
    if (!clock) return;
    clock.textContent = Timer.format(remaining);
    clock.classList.toggle("low", remaining <= total * 0.3 && remaining > 10);
    clock.classList.toggle("critical", remaining <= 10);
  }

  function timerBarHtml(phaseLabel) {
    return `
      <div class="timer-bar">
        <div class="phase-label">${phaseLabel}</div>
        <div class="clock" id="clockDisplay">00:00</div>
      </div>
    `;
  }

  function questionListHtml(part) {
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
              <input type="radio" name="${key}" value="${oi}" ${
                selected === oi ? "checked" : ""
              } onchange="window.__listeningAnswer('${key}', ${oi})" />
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

  window.__listeningAnswer = (key, oi) => {
    answers[key] = oi;
    document.querySelectorAll(`input[name="${key}"]`).forEach((inp, idx) => {
      inp.closest(".option-row").classList.toggle("selected", idx === oi);
    });
  };

  function renderIntro() {
    stopTimer();
    const part = currentPart();
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${data.title} — ${part.partLabel} of ${data.parts.length}</span>
        <h1>${part.name}</h1>
        <p>${part.instructions}</p>
        <p class="small-muted">You'll have ${part.previewSeconds}s to preview the questions, then the audio plays once, followed by ${part.answerSeconds}s to finish your answers.</p>
        <div class="actions">
          <button onclick="window.__listeningStart()">Start ${part.partLabel}</button>
          <button class="secondary" onclick="Router.go('home')">Exit</button>
        </div>
      </div>
    `;
    window.__listeningStart = startPreview;
  }

  function startPreview() {
    const part = currentPart();
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${part.partLabel} — Preview</span>
        <h2>${part.name}</h2>
      </div>
      ${timerBarHtml("Reading time — preview the questions before the audio starts")}
      <div class="card">${questionListHtml(part)}</div>
    `;
    timer = new Timer({
      seconds: part.previewSeconds,
      onTick: (r) => updateClock(r, part.previewSeconds),
      onComplete: startPlaying,
    });
    timer.start();
  }

  function startPlaying() {
    const part = currentPart();
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${part.partLabel} — Now Playing</span>
        <h2>${part.name}</h2>
        <p>🔊 Listen carefully. On the real test, the audio plays only once.</p>
        <div class="progress-track"><div class="progress-fill" id="playProgress" style="width:0%"></div></div>
      </div>
      <div class="card">${questionListHtml(part)}</div>
    `;
    speak(part.transcript, startAnswering);
  }

  function speak(text, onDone) {
    const estSeconds = Math.max(20, text.split(/\s+/).length / 2.4);
    animateProgress(estSeconds);
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      onDone();
    };
    if (!("speechSynthesis" in window)) {
      setTimeout(finish, estSeconds * 1000);
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.onend = finish;
    utter.onerror = finish;
    window.speechSynthesis.speak(utter);
    setTimeout(finish, (estSeconds + 20) * 1000);
  }

  function animateProgress(estSeconds) {
    let elapsed = 0;
    const iv = setInterval(() => {
      elapsed += 0.5;
      const bar = document.getElementById("playProgress");
      if (!bar) {
        clearInterval(iv);
        return;
      }
      bar.style.width = Math.min(100, (elapsed / estSeconds) * 100) + "%";
      if (elapsed >= estSeconds) clearInterval(iv);
    }, 500);
  }

  function startAnswering() {
    const part = currentPart();
    const isLast = partIndex === data.parts.length - 1;
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${part.partLabel} — Answer Time</span>
        <h2>${part.name}</h2>
      </div>
      ${timerBarHtml("Finish answering before time runs out")}
      <div class="card">${questionListHtml(part)}</div>
      <div class="actions">
        <button onclick="window.__listeningNext()">${
          isLast ? "Finish Listening Section" : "Next Part"
        }</button>
      </div>
    `;
    window.__listeningNext = goNext;
    timer = new Timer({
      seconds: part.answerSeconds,
      onTick: (r) => updateClock(r, part.answerSeconds),
      onComplete: goNext,
    });
    timer.start();
  }

  function goNext() {
    stopTimer();
    if (partIndex < data.parts.length - 1) {
      partIndex += 1;
      renderIntro();
    } else {
      finishSection();
    }
  }

  function finishSection() {
    let score = 0,
      total = 0;
    data.parts.forEach((part) => {
      part.questions.forEach((q, qi) => {
        total += 1;
        const key = `${part.id}_${qi}`;
        if (answers[key] === q.correct) score += 1;
      });
    });
    Store.set("listening", { answers, score, total, completedAt: Date.now() });
    renderResults(score, total);
  }

  function renderResults(score, total) {
    const flow = Store.get("fullTestFlow");
    wrap.innerHTML = `
      <div class="card score-hero">
        <span class="badge">Listening Complete</span>
        <div class="score-num">${score} / ${total}</div>
        <p>Correct answers</p>
        <div class="actions" style="justify-content:center;">
          <button onclick="Router.go('answer-key/listening')">Review Answer Key</button>
          ${
            flow && flow.active
              ? `<button onclick="Router.go('break/reading/${encodeURIComponent(
                  "Reading"
                )}')">Continue to Reading</button>`
              : `<button class="secondary" onclick="Router.go('home')">Back to Home</button>`
          }
        </div>
      </div>
    `;
  }

  renderIntro();
}
