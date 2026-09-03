// Writing Practice Test 10 — original content modeled on the official CELPIP-General format.
// Writing is free-response, so the "answer key" is a model response plus a scoring explanation.

(function () {
  const test = {
    testNumber: 10,
    tasks: [
      {
        id: "t10_w1",
        partLabel: "Task 1",
        name: "Writing an Email",
        seconds: 27 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `You live in an apartment building, and the tenant in the unit directly above yours regularly plays loud music and moves furniture late at night, disturbing your sleep. Write an email to your building's property manager.

In your email:
- Explain the problem and how long it has been happening (invent reasonable details)
- Describe what you have already tried to do to resolve it yourself
- Say what you would like the property manager to do about it

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — addresses all three bullet points clearly (nature and duration of the problem, steps already taken, requested action)",
          "Vocabulary — uses precise, neutral language appropriate for a formal complaint to building management",
          "Readability — clear structure moving from problem to prior attempts to request, with a polite closing",
          "Task-specific grammar — correct use of present perfect and past tense to describe an ongoing and recurring problem",
        ],
        modelAnswer: `Subject: Ongoing Noise Disturbance — Unit 4B

Dear Mr. Alvarez,

I am writing to report an ongoing noise problem coming from the unit directly above mine, Unit 5B. For roughly the past three weeks, the tenant there has played loud music and moved furniture around almost every night between 11 p.m. and 1 a.m., which has made it very difficult for me to sleep before work.

I first knocked on their door politely to explain the situation, but no one answered. I then left a friendly note under their door asking if they could keep noise down after 10 p.m., which helped for only two or three nights before the pattern returned.

Since speaking with them directly has not resolved the issue, I would like building management to send a formal written notice reminding the tenant of the quiet hours policy. If the noise continues afterward, I would appreciate knowing what further steps, such as a warning or a fine, might be available under my lease.

I have kept a log of the dates and times, which I am happy to share if useful.

Thank you for your help with this matter.

Sincerely,
Maria Santos`,
        whyItWorks:
          "This response covers all three bullet points with specific, credible detail: an exact unit number and a three-week timeframe for the problem, two concrete steps already attempted (knocking and leaving a note), and a clear, escalating request (a formal notice first, with a question about further options if needed). Mentioning a kept log of dates and times adds practical evidence that supports the complaint without sounding accusatory. The calm, solution-focused tone, combined with accurate present perfect and past tense forms to distinguish the ongoing problem from completed actions, reflects the grammar control and organization CELPIP raters reward in Task 1.",
      },
      {
        id: "t10_w2",
        partLabel: "Task 2",
        name: "Responding to Survey Questions",
        seconds: 26 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your city's library board is running a survey about how to use its budget increase this year. You are given this question:

"The library board is deciding how to spend its limited budget increase this year. One option is to extend the opening hours of the existing central library, including adding evening and weekend hours. The other option is to open a small new branch library in an underserved neighborhood. Which option do you support?"

Write a response giving your opinion. Support your opinion with reasons and, if useful, personal examples.

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — takes a clear position and supports it with developed reasons",
          "Vocabulary — uses persuasive and precise language, avoids repetition",
          "Readability — clear opinion stated early, logically ordered supporting points, brief conclusion",
          "Task-specific grammar — correct use of opinion language and complex sentences to link reasons",
        ],
        modelAnswer: `I support using the library board's budget increase to open a small new branch in an underserved neighborhood rather than extending the central library's hours.

My main reason is accessibility. Many residents in outlying neighborhoods do not have reliable transportation to reach the central library at all, regardless of how many hours it stays open. A nearby branch, even a small one, would let children walk there after school and allow parents to visit without needing a car or a long bus ride. When I lived in the Brookdale area years ago, the nearest library was over forty minutes away by bus, and I rarely made the trip despite wanting to.

Extending hours at the central library, by contrast, mainly benefits people who already live close enough to use it, which does little to address the larger gap in access across the city.

A new branch would also bring library programs, computer access, and study space directly into a community that currently has none of these resources nearby.

For these reasons, I believe a new branch would serve far more residents than longer hours at one existing location.`,
        whyItWorks:
          "The response takes a clear position immediately and builds a focused argument around a single strong theme, accessibility, rather than scattering several unrelated points. The personal example from living in Brookdale gives the argument real-world weight, and the response directly contrasts the two options by explaining specifically why extended hours would help a narrower group than a new branch would. Ending with a direct comparison back to the original question ties the conclusion tightly to the prompt, which is exactly the kind of focused, well-supported reasoning that scores well on CELPIP's Task 2 content and coherence criteria.",
      },
    ],
  };

  window.__writingTests = window.__writingTests || [];
  window.__writingTests.push(test);
})();
