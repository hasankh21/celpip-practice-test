// Answer Key page: shows correct answers + explanations for every section, and (where available)
// the user's own saved answers/responses for comparison.

function renderAnswerKey(app, rest) {
  const initialTab = (rest && rest[0]) || "listening";
  const focusId = rest && rest[1];

  const wrap = el(`
    <div>
      <div class="card">
        <span class="badge">Answer Key</span>
        <h1>Answer Key &amp; Explanations</h1>
        <p>Every objective question below shows the correct answer and a plain-English explanation of why it's correct. Writing and Speaking include model/sample responses with notes on what makes them strong, since those skills are scored holistically rather than with a single correct answer.</p>
      </div>
      <div class="section-nav" id="akTabs"></div>
      <div id="akContent"></div>
    </div>
  `);
  app.appendChild(wrap);

  const tabs = [
    { id: "listening", label: "Listening" },
    { id: "reading", label: "Reading" },
    { id: "writing", label: "Writing" },
    { id: "speaking", label: "Speaking" },
  ];

  const tabsEl = wrap.querySelector("#akTabs");
  tabs.forEach((t) => {
    const btn = el(`<button class="tab">${t.label}</button>`);
    btn.addEventListener("click", () => setActive(t.id));
    btn.dataset.tabId = t.id;
    tabsEl.appendChild(btn);
  });

  function setActive(id) {
    tabsEl.querySelectorAll("button.tab").forEach((b) => {
      b.classList.toggle("active", b.dataset.tabId === id);
    });
    const content = wrap.querySelector("#akContent");
    if (id === "listening") content.innerHTML = listeningKeyHtml();
    if (id === "reading") content.innerHTML = readingKeyHtml();
    if (id === "writing") content.innerHTML = writingKeyHtml();
    if (id === "speaking") content.innerHTML = speakingKeyHtml();
    if (focusId) {
      const target = content.querySelector(`#focus_${focusId}`);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }

  function optionRowHtml(opt, oi, correctIndex, userIndex) {
    let cls = "";
    if (oi === correctIndex) cls = "correct";
    else if (oi === userIndex) cls = "incorrect";
    const tag =
      oi === correctIndex
        ? ` <span class="tag-correct">✓ Correct answer</span>`
        : oi === userIndex
        ? ` <span class="tag-incorrect">✗ Your answer</span>`
        : "";
    return `<div class="option-row ${cls}"><span>${escapeHtml(opt)}${tag}</span></div>`;
  }

  function listeningKeyHtml() {
    const saved = Store.get("listening");
    const userAnswers = (saved && saved.answers) || {};
    let html = "";
    if (saved) {
      html += `<div class="card"><strong>Your last attempt score: ${saved.score} / ${saved.total}</strong></div>`;
    }
    listeningData.parts.forEach((part) => {
      html += `<div class="card"><h2>${part.partLabel}: ${part.name}</h2>`;
      part.questions.forEach((q, qi) => {
        const key = `${part.id}_${qi}`;
        const userIdx = userAnswers[key];
        html += `
          <div class="question-block" id="focus_${part.id}">
            <strong>${qi + 1}. ${escapeHtml(q.q)}</strong>
            ${q.options.map((opt, oi) => optionRowHtml(opt, oi, q.correct, userIdx)).join("")}
            <div class="explain-box"><strong>Why:</strong> ${escapeHtml(q.explain)}</div>
          </div>
        `;
      });
      html += `</div>`;
    });
    return html;
  }

  function readingKeyHtml() {
    const saved = Store.get("reading");
    const userAnswers = (saved && saved.answers) || {};
    let html = "";
    if (saved) {
      html += `<div class="card"><strong>Your last attempt score: ${saved.score} / ${saved.total}</strong></div>`;
    }
    readingData.parts.forEach((part) => {
      html += `<div class="card" id="focus_${part.id}"><h2>${part.partLabel}: ${part.name}</h2>`;
      if (part.id === "r1") {
        part.blanks.forEach((b) => {
          const key = `${part.id}_b${b.num}`;
          const userIdx = userAnswers[key];
          html += `
            <div class="question-block">
              <strong>Blank (${b.num})</strong>
              ${b.options.map((opt, oi) => optionRowHtml(opt, oi, b.correct, userIdx)).join("")}
              <div class="explain-box"><strong>Why:</strong> ${escapeHtml(b.explain)}</div>
            </div>
          `;
        });
      } else {
        part.questions.forEach((q, qi) => {
          const key = `${part.id}_${qi}`;
          const userIdx = userAnswers[key];
          html += `
            <div class="question-block">
              <strong>${qi + 1}. ${escapeHtml(q.q)}</strong>
              ${q.options.map((opt, oi) => optionRowHtml(opt, oi, q.correct, userIdx)).join("")}
              <div class="explain-box"><strong>Why:</strong> ${escapeHtml(q.explain)}</div>
            </div>
          `;
        });
      }
      html += `</div>`;
    });
    return html;
  }

  function writingKeyHtml() {
    const saved = Store.get("writing");
    const userResponses = (saved && saved.responses) || {};
    let html = "";
    writingData.tasks.forEach((task) => {
      const mine = userResponses[task.id];
      html += `
        <div class="card" id="focus_${task.id}">
          <h2>${task.partLabel}: ${task.name}</h2>
          <div class="passage">${escapeHtml(task.prompt)}</div>
          <h3>Scoring focuses on</h3>
          <ul>${task.scoringCriteria.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
          <div class="two-col">
            <div>
              <h3>Model Answer</h3>
              <div class="passage">${escapeHtml(task.modelAnswer)}</div>
            </div>
            <div>
              <h3>Your Response ${mine ? "" : '<span class="small-muted">(not attempted yet)</span>'}</h3>
              <div class="passage">${mine ? escapeHtml(mine) : "—"}</div>
            </div>
          </div>
          <div class="explain-box"><strong>Why the model answer works:</strong> ${escapeHtml(task.whyItWorks)}</div>
        </div>
      `;
    });
    return html;
  }

  function speakingKeyHtml() {
    let html = "";
    speakingData.tasks.forEach((task) => {
      html += `
        <div class="card" id="focus_${task.id}">
          <h2>${task.partLabel}: ${task.name}</h2>
          <div class="passage">${escapeHtml(task.prompt)}</div>
          <h3>Sample Answer</h3>
          <div class="passage">${escapeHtml(task.sampleAnswer)}</div>
          <div class="explain-box"><strong>Why this response works:</strong> ${escapeHtml(task.whyItWorks)}</div>
        </div>
      `;
    });
    return html;
  }

  setActive(initialTab);
}
