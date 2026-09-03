// Writing Practice Test 9 — original content modeled on the official CELPIP-General format.
// Writing is free-response, so the "answer key" is a model response plus a scoring explanation.

(function () {
  const test = {
    testNumber: 9,
    tasks: [
      {
        id: "t9_w1",
        partLabel: "Task 1",
        name: "Writing an Email",
        seconds: 27 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `You missed the submission deadline for a major assignment in one of your college courses because of a personal emergency. Write an email to your instructor.

In your email:
- Explain which assignment you missed and why you were unable to submit it on time (invent reasonable details)
- Describe what you have done so far to try to complete the work
- Say what you would like the instructor to do (e.g., an extension or an alternative arrangement)

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — addresses all three bullet points clearly (reason for missing the deadline, progress made, requested arrangement)",
          "Vocabulary — uses appropriately formal, respectful language suited to writing to an instructor",
          "Readability — clear apology, explanation, and request presented in a logical order",
          "Task-specific grammar — correct use of past tense for the explanation and polite modal forms for the request",
        ],
        modelAnswer: `Subject: Late Submission — Research Essay, ENGL 210

Dear Professor Whitfield,

I am writing to apologize for missing yesterday's deadline for the research essay in ENGL 210. On the night before it was due, my grandmother was taken to the hospital, and I spent most of the evening and the following morning there with my family rather than finishing the assignment.

Before this happened, I had already completed my research and written a full first draft, including all required sources and citations. I have continued working on it since returning home two days ago and have now finished revising the introduction and conclusion, though the body paragraphs still need proofreading and formatting.

I understand that late work is not normally accepted without prior notice, and I apologize for not contacting you sooner. I am hoping you might allow me a short three-day extension so that I can submit a complete, carefully proofread essay rather than a rushed one. I would also be glad to provide documentation from the hospital if that would be helpful.

Thank you for considering my situation, and I apologize again for the inconvenience.

Sincerely,
Daniel Osei`,
        whyItWorks:
          "This response fulfills all three bullet points: it names the exact assignment and gives a specific, reasonable explanation for the missed deadline, describes concrete progress already made (a completed draft, revised introduction and conclusion), and closes with a clear, modest request for a three-day extension rather than an open-ended one. The respectful, apologetic tone and offer of supporting documentation suit the instructor-student relationship, and consistent past-tense narration sequences events clearly. This mix of honesty, evidence of effort, and a specific, reasonable request is what distinguishes a strong Task 1 email from a vague excuse.",
      },
      {
        id: "t9_w2",
        partLabel: "Task 2",
        name: "Responding to Survey Questions",
        seconds: 26 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your city's parks department is running a survey about a new water amenity. You are given this question:

"The parks department is planning a new water amenity in Fairview Park and is deciding between two options: a full community swimming pool with lifeguards and swimming lessons, or a smaller, unsupervised splash pad with water jets and fountains. Which option do you support?"

Write a response giving your opinion. Support your opinion with reasons and, if useful, personal examples.

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — takes a clear position and supports it with developed reasons",
          "Vocabulary — uses persuasive and precise language, avoids repetition",
          "Readability — clear opinion stated early, logically ordered supporting points, brief conclusion",
          "Task-specific grammar — correct use of opinion language and complex sentences to link reasons",
        ],
        modelAnswer: `I believe Fairview Park should get a full community swimming pool rather than a smaller splash pad.

The strongest reason is that a pool serves far more purposes than a splash pad does. Beyond simple play, a pool allows for swimming lessons, which teach an essential safety skill, as well as fitness swimming and organized activities for seniors and people with mobility limitations who cannot use a splash pad comfortably. My youngest cousin learned to swim through community pool lessons two summers ago, and that skill has already kept her safe on several family lake trips since then.

I also think the lack of supervision at a splash pad is a genuine concern for parents of young children, since there would be no lifeguard present if something went wrong.

While a pool costs more to build and maintain, it also generates revenue through lesson fees and admission charges, which a splash pad cannot offset in the same way.

For these reasons, I support building a full community pool in Fairview Park, even though it requires a larger initial investment than a splash pad.`,
        whyItWorks:
          "The response states its position immediately, then supports it with three distinct reasons: the broader range of uses a pool offers, a safety concern with the alternative, and a financial counterpoint to the higher cost. The personal example about a cousin learning to swim adds a concrete, human dimension to an otherwise practical argument, and the response fairly acknowledges the pool's higher cost before explaining why it is still worthwhile. This combination of a firm stance, varied and specific supporting points, and honest engagement with the drawbacks of the chosen option reflects the depth CELPIP raters expect in a strong Task 2 response.",
      },
    ],
  };

  window.__writingTests = window.__writingTests || [];
  window.__writingTests.push(test);
})();
