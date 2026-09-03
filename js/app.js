// Core app shell: state store, router, and home page.

const Store = {
  KEY: "celpip_progress_v1",
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
  get(section) {
    const all = this.load();
    return all[section] || null;
  },
  set(section, value) {
    const all = this.load();
    all[section] = value;
    this.save(all);
  },
  clearAll() {
    localStorage.removeItem(this.KEY);
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

function renderHome(app) {
  app.appendChild(
    el(`
      <div>
        <div class="card">
          <span class="badge">CELPIP Practice</span>
          <h1>Full CELPIP-Style Practice Test</h1>
          <p>Practice all four skills with timing modeled closely on the official CELPIP-General test format, or focus on one skill at a time. Every objective question includes an answer key with a plain-English explanation.</p>
          <div class="disclaimer">This is an independent, unofficial practice tool. It is not produced or endorsed by CELPIP / Paragon Testing Enterprises. Content and timings are modeled on publicly known test formats for practice purposes only.</div>
          <div class="actions">
            <button onclick="Router.go('full-test')">Start Full Test Simulation</button>
            <button class="secondary" onclick="Router.go('answer-key')">View Answer Key</button>
          </div>
        </div>

        <h2>Practice One Skill</h2>
        <div class="grid">
          ${skillTile("listening", "Listening", "6 parts · ~47 min", "Conversations and monologues read aloud (text-to-speech), with comprehension questions.")}
          ${skillTile("reading", "Reading", "4 parts · ~55 min", "Correspondence, a diagram, an information passage, and a viewpoints passage.")}
          ${skillTile("writing", "Writing", "2 tasks · 53 min", "Write an email (27 min) and respond to a survey question (26 min).")}
          ${skillTile("speaking", "Speaking", "8 tasks · ~17 min", "Timed prep + response for each task, with optional microphone recording for self-review.")}
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

function renderFullTest(app) {
  app.appendChild(
    el(`
      <div class="card">
        <span class="badge">Full Test</span>
        <h1>Full Test Simulation</h1>
        <p>You'll go through all four skills in the official order, with each section's own timing: <strong>Listening → Reading → Writing → Speaking</strong>. There is a short break screen between sections, just like the real test administration.</p>
        <div class="actions">
          <button onclick="startFullTest()">Begin with Listening</button>
          <button class="secondary" onclick="Router.go('home')">Back</button>
        </div>
      </div>
    `)
  );
}

function startFullTest() {
  Store.set("fullTestFlow", { active: true, next: "reading" });
  Router.go("listening");
}

function renderBreak(app, nextRoute, nextLabel) {
  app.appendChild(
    el(`
      <div class="card" style="text-align:center;">
        <span class="badge muted">Section Complete</span>
        <h1>Take a short break</h1>
        <p>In the real exam, a brief pause separates sections. When you're ready, continue to <strong>${nextLabel}</strong>.</p>
        <div class="actions" style="justify-content:center;">
          <button onclick="Router.go('${nextRoute}')">Continue to ${nextLabel}</button>
          <button class="secondary" onclick="Router.go('home')">Exit to Home</button>
        </div>
      </div>
    `)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  Router.register("home", renderHome);
  Router.register("full-test", renderFullTest);
  Router.register("listening", (app) => renderListening(app));
  Router.register("reading", (app) => renderReading(app));
  Router.register("writing", (app) => renderWriting(app));
  Router.register("speaking", (app) => renderSpeaking(app));
  Router.register("answer-key", (app, rest) => renderAnswerKey(app, rest));
  Router.register("break", (app, rest) => {
    const [nextRoute, nextLabel] = rest;
    renderBreak(app, nextRoute, decodeURIComponent(nextLabel || ""));
  });
  Router.start();
});
