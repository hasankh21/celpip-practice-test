// Combines the individually-loaded test files (js/data/<skill>/testNN.js, each pushing into
// window.__<skill>Tests) into sorted arrays used by the rest of the app. Any number of tests
// (1-10) can be present; the UI adapts to however many are actually loaded.

function sortedTests(rawArrayName) {
  const arr = window[rawArrayName] || [];
  return arr.slice().sort((a, b) => a.testNumber - b.testNumber);
}

const listeningTests = sortedTests("__listeningTests");
const readingTests = sortedTests("__readingTests");
const writingTests = sortedTests("__writingTests");
const speakingTests = sortedTests("__speakingTests");
