// Writing Practice Test 7 — original content modeled on the official CELPIP-General format.
// Writing is free-response, so the "answer key" is a model response plus a scoring explanation.

(function () {
  const test = {
    testNumber: 7,
    tasks: [
      {
        id: "t7_w1",
        partLabel: "Task 1",
        name: "Writing an Email",
        seconds: 27 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `You cancelled your membership at a fitness center (FlexFit Gym) two months ago, following the cancellation procedure listed on their website, but you have continued to be charged every month since then. Write an email to the gym's membership services department.

In your email:
- Explain when and how you cancelled your membership
- Describe the charges you have noticed since cancelling (invent reasonable details)
- Say what you would like the gym to do about it (e.g., refund, stop charges, written confirmation)

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — addresses all three bullet points clearly (cancellation details, charges noticed, requested resolution)",
          "Vocabulary — uses precise billing and account-related terminology appropriate for a formal dispute",
          "Readability — logical structure with clear subject line, greeting, explanation, request, and closing",
          "Task-specific grammar — correct use of past tense for narrating events and polite request forms for asking for action",
        ],
        modelAnswer: `Subject: Continued Charges After Membership Cancellation — Account #7729

Dear Membership Services Team,

I am writing about my FlexFit Gym membership, account number 7729, which I cancelled on July 3rd. At that time, I followed the procedure listed on your website: I submitted the cancellation form online and received an automatic confirmation email stating that my membership would end immediately and that no further payments would be taken.

Despite this, I have since been charged the full monthly fee of $54.99 on both August 1st and September 1st, for a total of $109.98 in charges after cancellation. I only noticed the second charge when reviewing my bank statement last week, since I no longer check that account regularly.

I would like these two charges refunded to my original payment method as soon as possible. I would also appreciate written confirmation that my account is now fully closed and that no further charges will be processed going forward.

I have attached a copy of my cancellation confirmation email for your records. Please let me know if you need any further information.

Thank you for resolving this promptly.

Sincerely,
Jordan Lee`,
        whyItWorks:
          "This response fulfills all three bullet points by clearly stating when and how the membership was cancelled, specifying the exact dates and amounts of the erroneous charges, and making two concrete requests (a refund and written confirmation). Precise details — the account number, dates, and dollar amounts — replace vague references and strengthen credibility, while a polite but firm tone runs through the formal opening and closing. The logical progression from cancellation to problem to request, combined with accurate past-tense narration and courteous request language ('I would like,' 'I would also appreciate'), reflects the organization and grammar control CELPIP raters reward in Task 1.",
      },
      {
        id: "t7_w2",
        partLabel: "Task 2",
        name: "Responding to Survey Questions",
        seconds: 26 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your city council is running a survey about a proposed change to a downtown lot. You are given this question:

"Some residents want to convert the small municipal parking lot on Elm Street into a public green space with benches and trees. Others want the lot to remain as parking for downtown shoppers and workers. Which option do you support?"

Write a response giving your opinion. Support your opinion with reasons and, if useful, personal examples.

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — takes a clear position and supports it with developed reasons",
          "Vocabulary — uses persuasive and precise language, avoids repetition",
          "Readability — clear opinion stated early, logically ordered supporting points, brief conclusion",
          "Task-specific grammar — correct use of opinion language and complex sentences to link reasons",
        ],
        modelAnswer: `In my opinion, the city should convert the Elm Street parking lot into a public green space rather than keeping it as parking.

The most important reason is that downtown currently has almost no place for people to sit, relax, or gather outdoors. Nearby office workers and shoppers have nowhere pleasant to eat lunch or take a short break, and a small park with benches and trees would fill that gap. When my sister visited last spring, we searched for over fifteen minutes just to find a shaded spot to sit downtown, which shows how limited outdoor space already is.

I also believe the parking concern is manageable. The lot in question is small, holding only about thirty vehicles, and there is a larger public garage two blocks away that rarely fills to capacity, even on busy weekday afternoons.

Finally, green spaces tend to attract more foot traffic to nearby businesses than parking lots do, since people linger rather than simply parking and leaving.

For these reasons, I support turning the Elm Street lot into a green space, while directing displaced drivers toward the nearby garage.`,
        whyItWorks:
          "The response states its position in the opening sentence, then develops three distinct, logically sequenced reasons: an unmet community need, a practical answer to the parking objection, and a broader economic benefit. A specific personal example (searching for a shaded spot downtown) grounds the argument in real experience rather than abstract claims, and the opposing concern about parking is addressed directly rather than ignored. The closing sentence restates the position while offering a workable compromise, which is exactly the combination of clear stance, varied support, and balanced reasoning that CELPIP raters look for in Task 2.",
      },
    ],
  };

  window.__writingTests = window.__writingTests || [];
  window.__writingTests.push(test);
})();
