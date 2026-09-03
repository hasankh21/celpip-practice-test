// Writing section: jump to either task anytime, one manually-controlled timer per task.

function renderWriting(app) {
  const wrap = el(`<div></div>`);
  app.appendChild(wrap);

  let currentTaskIdx = 0;
  let activeTimers = [];

  function testNum() {
    return AppState.get();
  }
  function getTest() {
    return writingTests.find((t) => t.testNumber === testNum());
  }
  function stateKey() {
    return `writing_${testNum()}`;
  }
  function loadState() {
    return Store.get(stateKey()) || { responses: {} };
  }
  function saveResponse(taskId, text) {
    const st = loadState();
    st.responses[taskId] = text;
    Store.set(stateKey(), st);
  }

  function destroyTimers() {
    activeTimers.forEach((t) => t.destroy());
    activeTimers = [];
  }

  function wordCount(text) {
    const trimmed = text.trim();
    return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  }

  function render() {
    destroyTimers();
    const test = getTest();
    if (!test) {
      wrap.innerHTML = notAvailableHtml("Writing", testNum());
      return;
    }
    if (currentTaskIdx >= test.tasks.length) currentTaskIdx = 0;
    const state = loadState();
    const task = test.tasks[currentTaskIdx];
    const existingText = state.responses[task.id] || "";
    const timerWidget = createTimerWidget(task.seconds, `Writing Timer — recommended ${Math.round(task.seconds / 60)} min`);

    wrap.innerHTML = `
      <div class="card">
        <span class="badge">Writing — Test ${test.testNumber} — ${task.partLabel} of ${test.tasks.length}</span>
        <h1>${task.name}</h1>
        <p class="small-muted">Target length: ${task.minWords}-${task.maxWords} words.</p>
      </div>
      <div class="section-nav">${tabStripHtml(test.tasks, currentTaskIdx)}</div>
      ${timerWidget.html}
      <div class="card">
        <div class="passage">${escapeHtml(task.prompt)}</div>
      </div>
      <div class="card">
        <textarea class="essay" id="essayBox" placeholder="Start typing your response here...">${escapeHtml(
          existingText
        )}</textarea>
        <div class="word-count" id="wordCountLabel"></div>
      </div>
      <div class="actions">
        <button class="secondary" onclick="Router.go('answer-key/writing/${task.id}')">View Model Answer for This Task</button>
      </div>
    `;

    timerWidget.mount();
    activeTimers.push(timerWidget);
    wireTabStrip(wrap, (idx) => {
      currentTaskIdx = idx;
      render();
    });

    const box = document.getElementById("essayBox");
    const label = document.getElementById("wordCountLabel");
    function refreshCount() {
      const wc = wordCount(box.value);
      label.textContent = `${wc} words (target ${task.minWords}-${task.maxWords})`;
      label.classList.toggle("warn", wc < task.minWords || wc > task.maxWords);
    }
    box.addEventListener("input", () => {
      saveResponse(task.id, box.value);
      refreshCount();
    });
    refreshCount();
  }

  render();
}
