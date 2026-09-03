# CELPIP Practice Test

An independent, unofficial browser-based practice tool for the CELPIP-General test. It simulates the structure and timing of all four skills — **Listening, Reading, Writing, and Speaking** — across **10 full practice tests per skill**, with a full answer key with plain-English explanations for every objective question, plus model/sample answers for Writing and Speaking.

> This project is not affiliated with, produced, or endorsed by CELPIP or Paragon Testing Enterprises. Content and timings are modeled on the publicly known structure of the official test, for practice purposes only.

## Features

- **10 independent practice tests per skill** (40 total), selectable anytime via the **Test** dropdown in the header — the same selector applies across Listening, Reading, Writing, Speaking, and the Answer Key, so switching skills keeps you on the same numbered test.
- **Free navigation** — a tab strip lets you jump straight to any part/task within a test at any time; there's no forced linear order.
- **Fully manual timers** — every timer (Preview/Answer for Listening, one per Reading part, one per Writing task, separate Prep/Response for Speaking) is a Start / Pause / Reset widget you control yourself. Nothing auto-starts or auto-advances.
- **Listening audio** is generated in-browser using the Web Speech API (`speechSynthesis`) — no audio files needed. Play, stop, and replay it as many times as you want.
- **Speaking recording** is fully manual — independent Start/Stop Recording buttons, decoupled from the prep/response timers, so you record only when you're ready. Recordings stay in your browser for that session only — nothing is uploaded or saved to disk.
- **Reading Part 1 (Correspondence)** renders as true inline fill-in-the-blank drop-downs embedded directly in the reply text — the same cloze format as the real test — not a separate question list.
- **Answer Key page** (accessible any time from the nav bar, respects the header's Test selector) with:
  - The correct answer highlighted for every Listening/Reading question, your last saved answer for comparison, and a written explanation of *why* it's correct.
  - Model answers for both Writing tasks and sample answers for all 8 Speaking tasks, each with notes on what makes the response strong.
- **Autosave** — every answer/response saves to `localStorage` immediately, per test number, so jumping between skills or tests never loses progress.

## Structure (per test; ×10 tests per skill)

| Skill | Parts | Questions/Tasks |
|---|---|---|
| Listening | 6 parts (Problem Solving, Daily Life Conversation, Listening for Information, News Item, Discussion, Viewpoints) | 38 questions (8/5/6/5/8/6) |
| Reading | 4 parts (Correspondence cloze, Diagram, Information, Viewpoints) | 38 questions/blanks (11/8/9/10) |
| Writing | 2 tasks (Email, Survey Response) | 27 min + 26 min |
| Speaking | 8 tasks (Advice, Personal Experience, Describing a Scene, Predictions, Comparing & Persuading, Difficult Situation, Opinion, Unusual Situation) | Individual prep/response timers per task |

## Running it

No build step or server required — it's plain HTML/CSS/JS.

1. Clone the repo.
2. Open `index.html` directly in a modern browser (Chrome or Edge recommended for the best Web Speech API and microphone support).

Optionally, serve it locally for a nicer experience with browser autoplay/mic permissions:

```bash
npx serve .
```

Or enable **GitHub Pages** (Settings → Pages → deploy from the `main` branch) to get a shareable link.

## Project layout

```
index.html              Entry point / page shell, loads all 40 test data files
css/styles.css          All styling
js/app.js               Router + Test # selector (AppState) + home page + Store (localStorage)
js/timer.js             Timer class (countdown + beep)
js/timerWidget.js        Manual Start/Pause/Reset timer widget used throughout
js/answerkey.js         Answer key page (all sections, respects the Test selector)
js/data/aggregate.js    Combines each skill's per-test files into sorted arrays
js/data/<skill>/testNN.js   One file per test (1-10) per skill — each pushes itself into window.__<skill>Tests
js/sections/            Section controllers: listening.js, reading.js, writing.js, speaking.js
```

Adding an 11th test for a skill just means dropping in a new `testNN.js` file following the same schema and adding one `<script>` tag in `index.html` — no other file needs to change.

## Notes on authenticity

- Question/blank counts per part match the officially documented CELPIP-General format (Listening 8/5/6/5/8/6 = 38, Reading 11/8/9/10 = 38). Per-part timings are practice approximations based on publicly documented total section times (Paragon doesn't publish an exact per-part breakdown); Writing's 27/26-minute split and Speaking's per-task prep/response seconds are the well-documented official values.
- Listening audio uses your browser's built-in text-to-speech rather than professionally recorded audio, since no official audio can be reproduced here.
- All content — every Listening transcript, Reading passage, Writing prompt, and Speaking prompt across all 10 tests — is **original**, written to mirror the real test's format and difficulty. None of it is copied from official CELPIP materials or third-party prep sites.
