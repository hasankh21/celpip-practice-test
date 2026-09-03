// Reusable countdown timer used across all sections.

class Timer {
  /**
   * @param {object} opts
   * @param {number} opts.seconds - total countdown duration
   * @param {(remaining:number)=>void} opts.onTick - called every second with remaining seconds
   * @param {()=>void} opts.onComplete - called once when timer reaches zero
   * @param {boolean} [opts.beepOnComplete] - play a beep when timer finishes
   */
  constructor({ seconds, onTick, onComplete, beepOnComplete = true }) {
    this.total = seconds;
    this.remaining = seconds;
    this.onTick = onTick || (() => {});
    this.onComplete = onComplete || (() => {});
    this.beepOnComplete = beepOnComplete;
    this._handle = null;
    this._running = false;
  }

  start() {
    if (this._running) return;
    this._running = true;
    this.onTick(this.remaining);
    this._handle = setInterval(() => {
      this.remaining -= 1;
      this.onTick(this.remaining);
      if (this.remaining <= 0) {
        this.stop();
        if (this.beepOnComplete) Timer.beep();
        this.onComplete();
      }
    }, 1000);
  }

  stop() {
    this._running = false;
    if (this._handle) clearInterval(this._handle);
    this._handle = null;
  }

  addSeconds(n) {
    this.remaining = Math.max(0, this.remaining + n);
    this.onTick(this.remaining);
  }

  isRunning() {
    return this._running;
  }

  static format(totalSeconds) {
    const s = Math.max(0, Math.round(totalSeconds));
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  // Short beep using Web Audio API — no external asset needed.
  static beep() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
      osc.onended = () => ctx.close();
    } catch (e) {
      // Audio not available; fail silently.
    }
  }
}
