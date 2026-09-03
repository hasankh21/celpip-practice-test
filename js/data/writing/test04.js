// Writing Practice Test 4 — original content modeled on the official CELPIP-General format.
// Writing is free-response, so the "answer key" is a model response plus a scoring explanation.

(function () {
  const test = {
    testNumber: 4,
    tasks: [
      {
        id: "t4_w1",
        partLabel: "Task 1",
        name: "Writing an Email",
        seconds: 27 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your child's school has scheduled a parent-teacher conference at a time that conflicts with an important commitment at your workplace. Write an email to your child's teacher.

In your email:
- Explain the scheduling conflict and why you are unable to attend at the assigned time
- Describe briefly why this conference is important to you (invent reasonable details)
- Propose an alternative time or arrangement that would work for you

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — addresses all three bullet points clearly",
          "Vocabulary — uses varied, precise word choices appropriate for a polite request to a teacher",
          "Readability — logical paragraph structure with clear organization (greeting, conflict, explanation, proposal, closing)",
          "Task-specific grammar — correct use of future forms and polite modal verbs for proposing alternatives",
        ],
        modelAnswer: `Subject: Scheduling Conflict — Parent-Teacher Conference for Noah Bennett

Dear Ms. Ferreira,

I am writing about the parent-teacher conference scheduled for Thursday, October 8, at 2:00 p.m. Unfortunately, I have just learned that my workplace has scheduled a mandatory training session that same afternoon, and I am unable to reschedule it or send someone in my place.

This conference matters a great deal to me, since Noah mentioned that his recent math test did not go as well as he had hoped, and I would like to understand how he is progressing and what I can do at home to support him before the next term begins.

Would it be possible to meet instead on Friday, October 9, any time after 3:30 p.m., or alternatively, could we arrange a short phone call sometime next week if an in-person meeting is not available? I am happy to work around whichever option is more convenient for you.

Thank you for your understanding, and I apologize for any inconvenience this causes.

Sincerely,
David Bennett`,
        whyItWorks:
          "The response fulfills all three bullets: it states the specific conflict clearly, gives a genuine, concrete reason the conference matters (the math test and wanting to support Noah at home), and offers two realistic alternatives rather than simply asking to reschedule with no suggestion. Polite modal phrasing ('would it be possible,' 'could we arrange') keeps the tone appropriately deferential toward a teacher, and the closing apology shows awareness of the inconvenience — this consideration and concrete alternative-planning are what elevate the response for CELPIP's content and readability criteria.",
      },
      {
        id: "t4_w2",
        partLabel: "Task 2",
        name: "Responding to Survey Questions",
        seconds: 26 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your city's transit authority is running a survey about how to spend a new budget increase. You are given this question:

"Some residents want the extra funding used to extend bus and train service later into the night. Others want it used to lower fares for all riders. Which option do you support?"

Write a response giving your opinion. Support your opinion with reasons and, if useful, personal examples.

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — takes a clear position and supports it with developed reasons",
          "Vocabulary — uses persuasive and precise language, avoids repetition",
          "Readability — clear opinion stated early, logically ordered supporting points, brief conclusion",
          "Task-specific grammar — correct use of opinion language and complex sentences to link reasons",
        ],
        modelAnswer: `In my opinion, the city should use the extra funding to extend bus and train service later into the night rather than lowering fares.

The main reason is that a lack of late-night service creates real safety and accessibility problems that lower fares would not solve. Buses on my route currently stop running at 11:00 p.m., which means anyone working an evening shift, including a friend of mine who closes a restaurant downtown, is often forced to pay for an expensive taxi just to get home safely.

Extended hours would also support a wider range of workers, such as hospital staff, cleaners, and retail employees, whose shifts frequently end well after regular transit hours, unlike a fare reduction, which mainly benefits people who already ride during the day.

Lower fares would certainly be welcome, but the savings for any individual rider would likely be small, while the benefit of having a safe, reliable way home at night would be significant for those who currently have no good option at all.

For these reasons, I support extending service hours over reducing fares.`,
        whyItWorks:
          "The response takes a clear position immediately and builds its case around who is affected and how, contrasting the concrete problem of no late-night service with the more diffuse benefit of lower fares. It uses a specific, relatable example (a friend who closes a restaurant) to ground the argument, directly compares the two options rather than discussing them separately, and closes with a brief, confident restatement — this direct comparison and prioritization of impact is exactly what strong Task 2 responses do.",
      },
    ],
  };

  window.__writingTests = window.__writingTests || [];
  window.__writingTests.push(test);
})();
