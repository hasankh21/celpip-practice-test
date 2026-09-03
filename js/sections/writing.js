// Writing section controller: two timed free-response tasks with word count and a model-answer answer key.

function renderWriting(app) {
  const data = writingData;
  let taskIndex = 0;
  let responses = {};
  let timer = null;

  const wrap = el(`<div></div>`);
  app.appendChild(wrap);

  function currentTask() {
    return data.tasks[taskIndex];
  }

  function wordCount(text) {
    const trimmed = text.trim();
    return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  }

  function updateClock(remaining, total) {
    const clock = document.getElementById("clockDisplay");
    if (!clock) return;
    clock.textContent = Timer.format(remaining);
    clock.classList.toggle("low", remaining <= total * 0.2 && remaining > 60);
    clock.classList.toggle("critical", remaining <= 60);
  }

  function renderIntro() {
    if (timer) timer.stop();
    const task = currentTask();
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${data.title} — ${task.partLabel} of ${data.tasks.length}</span>
        <h1>${task.name}</h1>
        <p class="small-muted">You will have ${Math.round(task.seconds / 60)} minutes. Target length: ${task.minWords}-${task.maxWords} words.</p>
        <div class="passage">${escapeHtml(task.prompt)}</div>
        <div class="actions">
          <button onclick="window.__writingStart()">Start ${task.partLabel}</button>
          <button class="secondary" onclick="Router.go('home')">Exit</button>
        </div>
      </div>
    `;
    window.__writingStart = startTask;
  }

  function startTask() {
    const task = currentTask();
    const isLast = taskIndex === data.tasks.length - 1;
    const existingText = responses[task.id] || "";
    wrap.innerHTML = `
      <div class="card">
        <span class="badge">${task.partLabel}</span>
        <h2>${task.name}</h2>
      </div>
      <div class="timer-bar">
        <div class="phase-label">Writing time remaining</div>
        <div class="clock" id="clockDisplay">00:00</div>
      </div>
      <div class="card">
        <div class="passage">${escapeHtml(task.prompt)}</div>
      </div>
      <div class="card">
        <textarea class="essay" id="essayBox" placeholder="Start typing your response here...">${escapeHtml(existingText)}</textarea>
        <div class="word-count" id="wordCountLabel">0 words</div>
      </div>
      <div class="actions">
        <button onclick="window.__writingNext()">${isLast ? "Finish Writing Section" : "Next Task"}</button>
      </div>
    `;
    const box = document.getElementById("essayBox");
    const label = document.getElementById("wordCountLabel");
    function refreshCount() {
      const wc = wordCount(box.value);
      label.textContent = `${wc} words (target ${task.minWords}-${task.maxWords})`;
      label.classList.toggle("warn", wc < task.minWords || wc > task.maxWords);
      responses[task.id] = box.value;
    }
    box.addEventListener("input", refreshCount);
    refreshCount();

    window.__writingNext = goNext;
    timer = new Timer({
      seconds: task.seconds,
      onTick: (r) => updateClock(r, task.seconds),
      onComplete: () => {
        box.disabled = true;
        goNext();
      },
    });
    timer.start();
  }

  function goNext() {
    if (timer) timer.stop();
    const box = document.getElementById("essayBox");
    if (box) responses[currentTask().id] = box.value;
    if (taskIndex < data.tasks.length - 1) {
      taskIndex += 1;
      renderIntro();
    } else {
      finishSection();
    }
  }

  function finishSection() {
    Store.set("writing", { responses, completedAt: Date.now() });
    renderResults();
  }

  function renderResults() {
    const flow = Store.get("fullTestFlow");
    wrap.innerHTML = `
      <div class="card score-hero">
        <span class="badge">Writing Complete</span>
        <p>Writing is scored holistically, not with a single correct answer. Compare your responses with the model answers and scoring notes on the answer key page.</p>
        <div class="actions" style="justify-content:center;">
          <button onclick="Router.go('answer-key/writing')">View Model Answers</button>
          ${
            flow && flow.active
              ? `<button onclick="Router.go('break/speaking/${encodeURIComponent("Speaking")}')">Continue to Speaking</button>`
              : `<button class="secondary" onclick="Router.go('home')">Back to Home</button>`
          }
        </div>
      </div>
    `;
  }

  renderIntro();
}
