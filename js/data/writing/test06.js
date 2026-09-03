// Writing Practice Test 6 — original content modeled on the official CELPIP-General format.
// Writing is free-response, so the "answer key" is a model response plus a scoring explanation.

(function () {
  const test = {
    testNumber: 6,
    tasks: [
      {
        id: "t6_w1",
        partLabel: "Task 1",
        name: "Writing an Email",
        seconds: 27 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `You would like to change your regular work schedule to include two days working from home each week. Write an email to your manager.

In your email:
- Explain why you would like to make this change
- Describe how you would ensure your work is not affected (invent reasonable details)
- Propose a plan and ask for your manager's approval

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — addresses all three bullet points clearly",
          "Vocabulary — uses varied, precise word choices appropriate for a professional workplace request",
          "Readability — logical paragraph structure with clear organization (greeting, reason, plan, request, closing)",
          "Task-specific grammar — correct use of conditional and future forms for proposing a plan",
        ],
        modelAnswer: `Subject: Request for a Hybrid Work Schedule

Dear Mr. Whitfield,

I am writing to ask whether I could adjust my schedule to work from home on Tuesdays and Thursdays, while continuing to come into the office the remaining three days each week. My commute has become significantly longer since the recent transit changes, and this adjustment would give me more consistent time to focus on tasks that require deep concentration, such as preparing quarterly reports.

To ensure my work is not affected, I would remain fully reachable by phone and email during regular hours, join all scheduled meetings by video, and continue meeting every deadline as usual. I would also make myself available to come into the office on short notice if an urgent matter required it.

If this arrangement works for you, I would propose starting on a trial basis for one month, after which we could review together whether it is meeting the team's needs. I would welcome the chance to discuss this further at your convenience.

Thank you for considering my request.

Sincerely,
Tomasz Nowak`,
        whyItWorks:
          "The response addresses all three bullets directly: it gives a specific, credible reason for the request, outlines concrete steps to guarantee availability and productivity, and proposes a clear, time-bound plan with a built-in review point rather than an open-ended demand. The conditional structure ('would remain,' 'would propose') keeps the tone appropriately tentative and respectful of the manager's authority to decide, while the trial-period framing shows flexibility — this combination of justification, reassurance, and a low-risk proposal is what makes a workplace request persuasive under CELPIP's scoring criteria.",
      },
      {
        id: "t6_w2",
        partLabel: "Task 2",
        name: "Responding to Survey Questions",
        seconds: 26 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your city council is running a survey about a proposal for Fairview Park. You are given this question:

"Some residents want to allow licensed food trucks to operate in Fairview Park on weekends. Others want to keep the park free of any commercial vendors. Which option do you support?"

Write a response giving your opinion. Support your opinion with reasons and, if useful, personal examples.

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — takes a clear position and supports it with developed reasons",
          "Vocabulary — uses persuasive and precise language, avoids repetition",
          "Readability — clear opinion stated early, logically ordered supporting points, brief conclusion",
          "Task-specific grammar — correct use of opinion language and complex sentences to link reasons",
        ],
        modelAnswer: `In my opinion, Fairview Park should allow licensed food trucks to operate on weekends.

The main reason is that food trucks would make the park a more attractive destination without requiring the city to build any permanent structures. When I visited a nearby park that already allows food trucks, I noticed families staying for hours longer than usual, treating the visit as a full afternoon outing rather than a quick walk, simply because they could get a meal without leaving.

I also think the concern about commercial activity is manageable if the city limits the number of licensed vendors and requires them to operate only in a designated area near the parking lot, which would prevent the park from feeling overly commercialized while still offering the convenience.

Finally, food trucks could generate modest licensing revenue for the city, which could then be reinvested into maintaining the park's trails and playgrounds, benefiting everyone who uses the space, including those who never buy anything from the vendors.

For these reasons, I support allowing food trucks in Fairview Park on weekends, provided their numbers and location are reasonably limited.`,
        whyItWorks:
          "The response opens with a clear stance and develops three distinct reasons — increased attractiveness of the park, a practical way to address the commercialization concern, and an added revenue benefit — rather than repeating a single point. It uses a specific comparative observation (the nearby park with longer family visits) instead of a vague generalization, directly addresses the opposing view by proposing a limit on vendors, and closes with a qualified but confident restatement of the position, which is the kind of balanced, evidence-based argument CELPIP Task 2 rewards.",
      },
    ],
  };

  window.__writingTests = window.__writingTests || [];
  window.__writingTests.push(test);
})();
