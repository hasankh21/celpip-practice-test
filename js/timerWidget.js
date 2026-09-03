// A self-contained, manually-controlled timer widget: Start/Pause + Reset, used anywhere a
// section needs a timer the user can start, pause, or reset on their own (no auto-start,
// no forced auto-advance to another screen when it hits zero).

let __timerWidgetSeq = 0;

function createTimerWidget(seconds, label) {
  const uid = "tw" + ++__timerWidgetSeq;
  const total = seconds;
  let zeroReached = false;

  const timer = new Timer({
    seconds,
    beepOnComplete: true,
    onTick: (remaining) => {
      const clock = document.getElementById(uid + "_clock");
      if (!clock) return;
      clock.textContent = Timer.format(remaining);
      clock.classList.toggle("low", remaining <= total * 0.25 && remaining > 10);
      clock.classList.toggle("critical", remaining <= 10);
    },
    onComplete: () => {
      zeroReached = true;
      const startBtn = document.getElementById(uid + "_start");
      if (startBtn) startBtn.textContent = "Start";
      const wrapEl = document.getElementById(uid);
      if (wrapEl) wrapEl.classList.add("time-up");
    },
  });

  const html = `
    <div class="timer-widget" id="${uid}">
      <div class="timer-widget-label">${escapeHtml(label)}</div>
      <div class="clock" id="${uid}_clock">${Timer.format(seconds)}</div>
      <div class="timer-controls">
        <button type="button" id="${uid}_start">Start</button>
        <button type="button" class="secondary" id="${uid}_reset">Reset</button>
      </div>
    </div>
  `;

  function mount() {
    const startBtn = document.getElementById(uid + "_start");
    const resetBtn = document.getElementById(uid + "_reset");
    if (!startBtn || !resetBtn) return;
    startBtn.addEventListener("click", () => {
      const wrapEl = document.getElementById(uid);
      if (timer.isRunning()) {
        timer.stop();
        startBtn.textContent = "Resume";
      } else {
        if (zeroReached && timer.remaining <= 0) return;
        timer.start();
        startBtn.textContent = "Pause";
        if (wrapEl) wrapEl.classList.remove("time-up");
      }
    });
    resetBtn.addEventListener("click", () => {
      timer.stop();
      timer.remaining = total;
      zeroReached = false;
      startBtn.textContent = "Start";
      const clock = document.getElementById(uid + "_clock");
      if (clock) {
        clock.textContent = Timer.format(total);
        clock.classList.remove("low", "critical");
      }
      const wrapEl = document.getElementById(uid);
      if (wrapEl) wrapEl.classList.remove("time-up");
    });
  }

  function destroy() {
    timer.stop();
  }

  return { html, mount, destroy, getRemaining: () => timer.remaining };
}
