// Core app shell: state store, current-test selector, router, shared helpers, and home page.

const Store = {
  KEY: "celpip_progress_v2",
  load() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  save(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },
  get(key) {
    const all = this.load();
    return all[key] || null;
  },
  set(key, value) {
    const all = this.load();
    all[key] = value;
    this.save(all);
  },
};

// The single "which practice test (1-10) am I on" selector, shared across every skill and the
// Answer Key page, so switching skills via the nav bar keeps you on the same numbered test.
const AppState = {
  KEY: "celpip_current_test",
  MAX_TESTS: 10,
  get() {
    const n = parseInt(localStorage.getItem(this.KEY) || "1", 10);
    return Number.isFinite(n) && n >= 1 && n <= this.MAX_TESTS ? n : 1;
  },
  set(n) {
    localStorage.setItem(this.KEY, String(n));
    const select = document.getElementById("testSelect");
    if (select) select.value = String(n);
  },
};

const Router = {
  routes: {},
  register(path, renderFn) {
    this.routes[path] = renderFn;
  },
  start() {
    window.addEventListener("hashchange", () => this.resolve());
    this.resolve();
  },
  resolve() {
    const hash = window.location.hash.replace(/^#\/?/, "") || "home";
    const [path, ...rest] = hash.split("/");
    const fn = this.routes[path] || this.routes["home"];
    const app = document.getElementById("app");
    app.innerHTML = "";
    window.scrollTo(0, 0);
    fn(app, rest);
  },
  go(path) {
    window.location.hash = "#/" + path;
  },
};

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Shared tab strip used by every skill to jump directly to any part/task at any time.
function tabStripHtml(items, activeIdx) {
  return items
    .map(
      (it, i) =>
        `<button type="button" class="tab ${i === activeIdx ? "active" : ""}" data-idx="${i}">${escapeHtml(
          it.partLabel
        )}</button>`
    )
    .join("");
}

function wireTabStrip(container, onSelect) {
  container.querySelectorAll(".section-nav button.tab").forEach((btn) => {
    btn.addEventListener("click", () => onSelect(parseInt(btn.dataset.idx, 10)));
  });
}

function notAvailableHtml(skillName, testNum) {
  return `
    <div class="card">
      <span class="badge muted">Test ${testNum}</span>
      <h1>${skillName} — Test ${testNum} isn't ready yet</h1>
      <p>This practice test hasn't been added yet. Use the Test selector in the header to switch to one that's available (Test 1 is ready now).</p>
    </div>
  `;
}

function testSelectHtml(current, max) {
  let opts = "";
  for (let i = 1; i <= max; i++) {
    opts += `<option value="${i}" ${i === current ? "selected" : ""}>Test ${i}</option>`;
  }
  return `<select id="testSelect" title="Choose which practice test to work on">${opts}</select>`;
}

function renderHome(app) {
  app.appendChild(
    el(`
      <div>
        <div class="card">
          <span class="badge">CELPIP Practice</span>
          <h1>CELPIP Practice Test Bank</h1>
          <p>Practice all four skills with timing modeled on the official CELPIP-General test format, or focus on one skill at a time. Every objective question includes an answer key with a plain-English explanation.</p>
          <div class="disclaimer">This is an independent, unofficial practice tool. It is not produced or endorsed by CELPIP / Paragon Testing Enterprises. Content and timings are modeled on publicly documented test formats for practice purposes only.</div>
          <p><strong>How it works:</strong> Use the <strong>Test</strong> selector in the header to choose which of the 10 practice tests you're working on. Jump between Listening, Reading, Writing, and Speaking anytime using the nav bar — your answers save automatically as you go. Within each skill, click any part/task tab to jump straight to it, and use the Start / Pause / Reset buttons to control every timer yourself.</p>
          <div class="actions">
            <button onclick="Router.go('listening')">Start Listening</button>
            <button class="secondary" onclick="Router.go('answer-key')">View Answer Key</button>
          </div>
        </div>

        <h2>Practice One Skill</h2>
        <div class="grid">
          ${skillTile("listening", "Listening", "6 parts · 38 questions", "Conversations and monologues read aloud (text-to-speech) that you can play, pause, and replay freely.")}
          ${skillTile("reading", "Reading", "4 parts · 38 questions", "Correspondence (fill-in-the-blank), a diagram, an information passage, and a viewpoints passage.")}
          ${skillTile("writing", "Writing", "2 tasks · 53 min", "Write an email (27 min) and respond to a survey question (26 min), with a live word counter.")}
          ${skillTile("speaking", "Speaking", "8 tasks · ~17 min", "Manual prep/response timers for each task, plus start/stop microphone recording whenever you want, for self-review.")}
        </div>
      </div>
    `)
  );
}

function skillTile(route, title, meta, desc) {
  return `
    <a class="skill-tile" onclick="Router.go('${route}')">
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="meta">${meta}</div>
    </a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const testSelectContainer = document.getElementById("testSelectContainer");
  if (testSelectContainer) {
    testSelectContainer.innerHTML = testSelectHtml(AppState.get(), AppState.MAX_TESTS);
    testSelectContainer.querySelector("#testSelect").addEventListener("change", (e) => {
      AppState.set(parseInt(e.target.value, 10));
      Router.resolve();
    });
  }

  Router.register("home", renderHome);
  Router.register("listening", (app) => renderListening(app));
  Router.register("reading", (app) => renderReading(app));
  Router.register("writing", (app) => renderWriting(app));
  Router.register("speaking", (app) => renderSpeaking(app));
  Router.register("answer-key", (app, rest) => renderAnswerKey(app, rest));
  Router.start();
});
