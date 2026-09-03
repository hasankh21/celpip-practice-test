// Reading section controller: each part has its own countdown timer matching the suggested exam pacing.

function renderReading(app) {
  const data = readingData;
  let partIndex = 0;
  let answers = {}; // key -> selected option index (works for both `questions` and `blanks`)
  let timer = null;

  const wrap = el(`<div></div>`);
  app.appendChild(wrap);

  function currentPart() {
    return data.parts[partIndex];
  }

  function updateClock(remaining, total) {
    const clock = document.getElementById("clockDisplay");
    if (!clock) return;
    clock.textContent = Timer.format(remaining);
    clock.classList.toggle("low", remaining <= total * 0.25 && remaining > 30);
    clock.classList.toggle("critical", remaining <= 30);
  }

  function timerBarHtml() {
    return `
      <div class="timer-bar">
        <div class="phase-label">Time remaining for this part</div>
        <div class="clock" id="clockDisplay">00:00</div>
      </div>
    `;
  }

  window.__readingAnswer = (key, oi) => {
    answers[key] = oi;
    document.querySelectorAll(`input[name="${key}"]`).forEach((inp, idx) => {
      inp.closest(".option-row").classList.toggle("selected", idx === oi);
    });
  };

  function standardQuestionsHtml(part) {
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
              } onchange="window.__readingAnswer('${key}', ${oi})" />
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

  function correspondenceHtml(part) {
    const replyText = part.replyTemplate.join("\n\n");
    const blanksHtml = part.blanks
      .map((b) => {
        const key = `${part.id}_b${b.num}`;
        const selected = answers[key];
        return `
        <div class="question-block">
          <strong>Blank (${b.num})</strong>
          ${b.options
            .map(
              (opt, oi) => `
            <label class="option-row ${selected === oi ? "selected" : ""}">
              <input type="radio" name="${key}" value="${oi}" ${
                selected === oi ? "checked" : ""
              } onchange="window.__readingAnswer('${key}', ${oi})" />
              <span>${escapeHtml(opt)}</span>
            </label>
          `
            )
            .join("")}
        </div>
      `;
      })
      .join("");
    return `
      <div class="two-col">
        <div>
          <h3>${part.passageTitle}</h3>
          <div class="passage">${escapeHtml(part.passage)}</div>
        </div>
        <div>
          <h3>${part.replyTitle}</h3>
          <div class="passage">${escapeHtml(replyText)}</div>
        </div>
      </div>
      <h3>Choose the best option for each blank</h3>
      ${blanksHtml}
    `;
  }

  function diagramHtml(part) {
    return `
      <h3>${part.passageTitle}</h3>
      ${part.diagramHtml}
      ${standardQuestionsHtml(part)}
    `;
  }

  function passageHtml(part) {
    return `
      <h3>${part.passageTitle}</h3>
      <div class="passage">${escapeHtml(part.passage)}</div>
      ${standardQuestionsHtml(part)}
    `;
  }

  function bodyForPart(part) {
    if (part.id === "r1") return correspondenceHtml(part);
    if (part.id === "r2") return diagramHtml(part);
    return passageHtml(part);
  }

  function renderIntro() {
    if (timer) timer.stop();
    const part = currentPart();
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${data.title} — ${part.partLabel} of ${data.parts.length}</span>
        <h1>${part.name}</h1>
        <p>${part.instructions}</p>
        <p class="small-muted">Suggested time for this part: ${part.suggestedMinutes} minutes.</p>
        <div class="actions">
          <button onclick="window.__readingStart()">Start ${part.partLabel}</button>
          <button class="secondary" onclick="Router.go('home')">Exit</button>
        </div>
      </div>
    `;
    window.__readingStart = startPart;
  }

  function startPart() {
    const part = currentPart();
    const isLast = partIndex === data.parts.length - 1;
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${part.partLabel}</span>
        <h2>${part.name}</h2>
      </div>
      ${timerBarHtml()}
      <div class="card">${bodyForPart(part)}</div>
      <div class="actions">
        <button onclick="window.__readingNext()">${
          isLast ? "Finish Reading Section" : "Next Part"
        }</button>
      </div>
    `;
    window.__readingNext = goNext;
    const seconds = part.suggestedMinutes * 60;
    timer = new Timer({
      seconds,
      onTick: (r) => updateClock(r, seconds),
      onComplete: goNext,
    });
    timer.start();
  }

  function goNext() {
    if (timer) timer.stop();
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
      if (part.id === "r1") {
        part.blanks.forEach((b) => {
          total += 1;
          const key = `${part.id}_b${b.num}`;
          if (answers[key] === b.correct) score += 1;
        });
      } else {
        part.questions.forEach((q, qi) => {
          total += 1;
          const key = `${part.id}_${qi}`;
          if (answers[key] === q.correct) score += 1;
        });
      }
    });
    Store.set("reading", { answers, score, total, completedAt: Date.now() });
    renderResults(score, total);
  }

  function renderResults(score, total) {
    const flow = Store.get("fullTestFlow");
    wrap.innerHTML = `
      <div class="card score-hero">
        <span class="badge">Reading Complete</span>
        <div class="score-num">${score} / ${total}</div>
        <p>Correct answers</p>
        <div class="actions" style="justify-content:center;">
          <button onclick="Router.go('answer-key/reading')">Review Answer Key</button>
          ${
            flow && flow.active
              ? `<button onclick="Router.go('break/writing/${encodeURIComponent(
                  "Writing"
                )}')">Continue to Writing</button>`
              : `<button class="secondary" onclick="Router.go('home')">Back to Home</button>`
          }
        </div>
      </div>
    `;
  }

  renderIntro();
}
