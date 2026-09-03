# CELPIP Practice Test

An independent, unofficial browser-based practice tool for the CELPIP-General test. It simulates the structure and timing of all four skills — **Listening, Reading, Writing, and Speaking** — and includes a full answer key with plain-English explanations for every objective question, plus model/sample answers for Writing and Speaking.

> This project is not affiliated with, produced, or endorsed by CELPIP or Paragon Testing Enterprises. Content and timings are modeled on the publicly known structure of the official test, for practice purposes only.

## Features

- **Practice one skill at a time**, or run a **Full Test Simulation** that chains all four sections in the official order with break screens in between.
- **Accurate section/task timers** for each part, matching the real exam's pacing (e.g., Writing Task 1 = 27 min, Task 2 = 26 min; Speaking tasks each have their own prep + response time).
- **Listening audio** is generated in-browser using the Web Speech API (`speechSynthesis`) — no audio files or external services needed. It plays once, like the real test.
- **Speaking practice** can optionally record your voice via the microphone (`MediaRecorder`) so you can play back and self-review your response. Recordings stay in your browser for that session only — nothing is uploaded or saved to disk.
- **Answer Key page** (accessible any time from the nav bar) with:
  - The correct answer highlighted for every Listening/Reading question, your last attempt's answer for comparison, and a written explanation of *why* it's correct.
  - Model answers for both Writing tasks and sample answers for all 8 Speaking tasks, each with notes on what makes the response strong.
- Progress (scores/responses) is saved locally in your browser (`localStorage`) so the Answer Key can show your answers next to the correct ones.

## Structure

| Skill | Parts | Approx. Time |
|---|---|---|
| Listening | 6 parts (Problem Solving, Daily Life Conversation, Listening for Information, News Item, Discussion, Viewpoints) | ~47 min |
| Reading | 4 parts (Correspondence, Diagram, Information, Viewpoints) | ~55 min |
| Writing | 2 tasks (Email, Survey Response) | 53 min |
| Speaking | 8 tasks (Advice, Personal Experience, Describing a Scene, Predictions, Comparing & Persuading, Difficult Situation, Opinion, Unusual Situation) | ~17 min |

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
index.html              Entry point / page shell
css/styles.css          All styling
js/app.js               Router + home page + app state (localStorage)
js/timer.js             Reusable countdown timer (with beep)
js/answerkey.js         Answer key page (all sections)
js/data/                Practice content: listening.js, reading.js, writing.js, speaking.js
js/sections/            Section controllers: listening.js, reading.js, writing.js, speaking.js
```

## Notes on authenticity

- Timings are modeled closely on the publicly documented CELPIP-General format (e.g., published prep/response seconds for each Speaking task, and the well-known 27/26-minute Writing tasks). They are practice approximations, not verbatim official secret timings.
- Listening audio uses your browser's built-in text-to-speech rather than professionally recorded audio, since no official audio can be reproduced here.
- All Listening/Reading questions, Writing prompts, and Speaking prompts are **original content** written to mirror the test's format and difficulty — none of it is copied from official CELPIP materials.
