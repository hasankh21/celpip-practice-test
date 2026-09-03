// Reading section: jump to any part anytime, one manually-controlled timer per part.
// Part 1 (Correspondence) renders its blanks as inline drop-downs directly inside the reply text.

function renderReading(app) {
  const wrap = el(`<div></div>`);
  app.appendChild(wrap);

  let currentPartIdx = 0;
  let showResults = false;
  let activeTimers = [];

  function testNum() {
    return AppState.get();
  }
  function getTest() {
    return readingTests.find((t) => t.testNumber === testNum());
  }
  function stateKey() {
    return `reading_${testNum()}`;
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

  function standardQuestionsHtml(part, answers) {
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

  // Renders the reply text with each ___(n)___ marker replaced by an inline <select> — the
  // authentic CELPIP Part 1 cloze format, rather than a separate question list.
  function correspondenceHtml(part, answers) {
    const blanksByNum = {};
    part.blanks.forEach((b) => (blanksByNum[b.num] = b));

    const paragraphsHtml = part.replyTemplate
      .map((paragraph) => {
        const withSelects = paragraph.replace(/___\((\d+)\)___/g, (match, numStr) => {
          const num = parseInt(numStr, 10);
          const b = blanksByNum[num];
          if (!b) return match;
          const key = `${part.id}_b${num}`;
          const selected = answers[key];
          const options = b.options
            .map(
              (opt, oi) =>
                `<option value="${oi}" ${selected === oi ? "selected" : ""}>${escapeHtml(opt)}</option>`
            )
            .join("");
          return `<select class="inline-blank ans-select" data-key="${key}" data-blank-num="${num}"><option value="" ${
            selected === undefined ? "selected" : ""
          } disabled>(${num})</option>${options}</select>`;
        });
        return `<p>${withSelects}</p>`;
      })
      .join("");

    const legendHtml = part.blanks
      .map((b) => `<span class="blank-legend-item">(${b.num})</span>`)
      .join(" ");

    return `
      <div class="two-col">
        <div>
          <h3>${part.passageTitle}</h3>
          <div class="passage">${escapeHtml(part.passage)}</div>
        </div>
        <div>
          <h3>${part.replyTitle}</h3>
          <div class="passage cloze-passage">${paragraphsHtml}</div>
        </div>
      </div>
      <p class="small-muted">Blanks in this reply: ${legendHtml} — choose the best option for each one from its drop-down.</p>
    `;
  }

  function diagramHtml(part, answers) {
    return `
      <h3>${part.passageTitle}</h3>
      ${part.diagramHtml}
      ${standardQuestionsHtml(part, answers)}
    `;
  }

  function passageHtml(part, answers) {
    return `
      <h3>${part.passageTitle}</h3>
      <div class="passage">${escapeHtml(part.passage)}</div>
      ${standardQuestionsHtml(part, answers)}
    `;
  }

  function bodyForPart(part, answers) {
    if (part.blanks) return correspondenceHtml(part, answers);
    if (part.diagramHtml) return diagramHtml(part, answers);
    return passageHtml(part, answers);
  }

  function wireInputs() {
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
    wrap.querySelectorAll(".ans-select").forEach((sel) => {
      sel.addEventListener("change", () => {
        const key = sel.dataset.key;
        const oi = parseInt(sel.value, 10);
        saveAnswer(key, oi);
      });
    });
  }

  window.__readingFinish = () => {
    showResults = true;
    render();
  };
  window.__readingBackToTest = () => {
    showResults = false;
    render();
  };

  function computeScore(test, answers) {
    let score = 0,
      total = 0;
    test.parts.forEach((part) => {
      if (part.blanks) {
        part.blanks.forEach((b) => {
          total += 1;
          if (answers[`${part.id}_b${b.num}`] === b.correct) score += 1;
        });
      } else {
        part.questions.forEach((q, qi) => {
          total += 1;
          if (answers[`${part.id}_${qi}`] === q.correct) score += 1;
        });
      }
    });
    return { score, total };
  }

  function renderResults(test) {
    const state = loadState();
    const { score, total } = computeScore(test, state.answers);
    Store.set(stateKey(), { ...state, score, total, completedAt: Date.now() });
    wrap.innerHTML = `
      <div class="card score-hero">
        <span class="badge">Reading — Test ${test.testNumber} Complete</span>
        <div class="score-num">${score} / ${total}</div>
        <p>Correct answers</p>
        <div class="actions" style="justify-content:center;">
          <button onclick="window.__readingBackToTest()">Back to Test</button>
          <button class="secondary" onclick="Router.go('answer-key/reading')">Review Answer Key</button>
        </div>
      </div>
    `;
  }

  function render() {
    destroyTimers();
    const test = getTest();
    if (!test) {
      wrap.innerHTML = notAvailableHtml("Reading", testNum());
      return;
    }
    if (showResults) {
      renderResults(test);
      return;
    }
    if (currentPartIdx >= test.parts.length) currentPartIdx = 0;
    const state = loadState();
    const part = test.parts[currentPartIdx];
    const seconds = part.suggestedMinutes * 60;
    const timerWidget = createTimerWidget(seconds, `Suggested time for this part: ${part.suggestedMinutes} min`);

    wrap.innerHTML = `
      <div class="card">
        <span class="badge">Reading — Test ${test.testNumber} — ${part.partLabel} of ${test.parts.length}</span>
        <h1>${part.name}</h1>
        <p>${part.instructions}</p>
      </div>
      <div class="section-nav">${tabStripHtml(test.parts, currentPartIdx)}</div>
      ${timerWidget.html}
      <div class="card">${bodyForPart(part, state.answers)}</div>
      <div class="actions">
        <button onclick="window.__readingFinish()">Finish &amp; See Score for Test ${test.testNumber}</button>
      </div>
    `;

    timerWidget.mount();
    activeTimers.push(timerWidget);
    wireTabStrip(wrap, (idx) => {
      currentPartIdx = idx;
      render();
    });
    wireInputs();
  }

  render();
}
