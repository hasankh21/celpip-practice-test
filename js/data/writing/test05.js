// Writing Practice Test 5 — original content modeled on the official CELPIP-General format.
// Writing is free-response, so the "answer key" is a model response plus a scoring explanation.

(function () {
  const test = {
    testNumber: 5,
    tasks: [
      {
        id: "t5_w1",
        partLabel: "Task 1",
        name: "Writing an Email",
        seconds: 27 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `You recently held your sister's wedding reception at a rented banquet hall. On the day of the event, the catering was served nearly two hours late and the sound system for the speeches malfunctioned repeatedly. Write an email to the venue's events manager.

In your email:
- Explain what event you booked and describe the problems that occurred on the day
- Describe how these problems affected the event and your guests (invent reasonable details)
- Say what you would like the venue to do about it

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — addresses all three bullet points clearly",
          "Vocabulary — uses varied, precise word choices appropriate for a formal complaint about an event",
          "Readability — logical paragraph structure with clear organization (greeting, problem, impact, request, closing)",
          "Task-specific grammar — correct use of past tense for narrating events and polite forms for requests",
        ],
        modelAnswer: `Subject: Issues During Reception on August 23 — Booking #1145

Dear Mr. Osei,

I am writing about my sister's wedding reception held at your venue on August 23 (Booking #1145). Although the hall itself looked lovely, two significant problems affected the evening.

First, the catering, which was scheduled for 7:00 p.m., was not served until nearly 9:00 p.m., leaving many of our 120 guests visibly hungry and restless. Second, the sound system cut out three separate times during the speeches, forcing my father to restart his toast twice and causing several guests at the back to miss most of what was said.

These delays disrupted the evening's flow considerably and took away from what should have been a joyful, well-organized celebration for my sister and her husband.

Given the scale of these problems, I would like to request a partial refund reflecting the late catering and equipment failures, or a credit toward a future booking at your venue. I would appreciate hearing back from you within the next week.

Thank you for addressing this matter promptly.

Sincerely,
Camille Dubois`,
        whyItWorks:
          "This response fulfills all three bullets: it names the specific event and booking, details two distinct, well-described problems, and explains their concrete impact on guests (hunger, missed speeches) rather than a general complaint. It maintains a formal but reasonable tone throughout, ends with two specific and proportionate resolution requests, and sets a clear timeframe for a reply — this precision and fairness in the request are exactly what CELPIP raters look for in a strong Task 1 complaint email.",
      },
      {
        id: "t5_w2",
        partLabel: "Task 2",
        name: "Responding to Survey Questions",
        seconds: 26 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your city's parks department is running a survey about a proposed addition to Elmwood Park. You are given this question:

"Some residents want to build a skate park in the unused corner of Elmwood Park. Others want to build a splash pad for younger children instead. Which option do you support?"

Write a response giving your opinion. Support your opinion with reasons and, if useful, personal examples.

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — takes a clear position and supports it with developed reasons",
          "Vocabulary — uses persuasive and precise language, avoids repetition",
          "Readability — clear opinion stated early, logically ordered supporting points, brief conclusion",
          "Task-specific grammar — correct use of opinion language and complex sentences to link reasons",
        ],
        modelAnswer: `In my opinion, Elmwood Park should build a splash pad rather than a skate park in its unused corner.

The main reason is that our neighborhood already has a skate park about fifteen minutes away by bike, while there is no splash pad or similar water feature anywhere nearby for young children. Last summer, I watched my niece and her friends beg to run through a splash pad in a neighborhoring district because nothing like it existed closer to home, which meant an entire afternoon spent driving instead of simply walking to a local park.

A splash pad would also be usable by a broader range of ages, since toddlers, young children, and even parents cooling off on a hot day could all benefit, whereas a skate park mainly serves a narrower group of older children and teenagers who are already served by the existing facility.

Additionally, splash pads generally require less structural upkeep and pose fewer safety concerns than skate park equipment, which could make it an easier addition for the city to maintain long-term.

For these reasons, I support building a splash pad in Elmwood Park.`,
        whyItWorks:
          "The response states its position early and supports it with reasons that build logically: an existing gap in nearby amenities, a broader potential user base, and a practical maintenance consideration. The personal example involving a niece grounds the argument in a real situation rather than a generic claim, and the response directly acknowledges that a skate park already exists nearby, which strengthens the comparison instead of ignoring the opposing option — this kind of comparative reasoning is what raises a Task 2 response above a simple preference statement.",
      },
    ],
  };

  window.__writingTests = window.__writingTests || [];
  window.__writingTests.push(test);
})();
