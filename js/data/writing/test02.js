// Writing Practice Test 2 — original content modeled on the official CELPIP-General format.
// Writing is free-response, so the "answer key" is a model response plus a scoring explanation.

(function () {
  const test = {
    testNumber: 2,
    tasks: [
      {
        id: "t2_w1",
        partLabel: "Task 1",
        name: "Writing an Email",
        seconds: 27 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `You hired a company to deep-clean the carpets in your home. After the technicians left, you noticed the carpet in your living room was left with a large discoloured patch, and a wooden side table had a fresh scratch on it that was not there before. Write an email to the cleaning company's manager.

In your email:
- Explain which service you booked and describe the problems you discovered afterward
- Describe how you contacted the technicians on-site or shortly after, and what they said (invent reasonable details)
- Say what you would like the company to do to resolve the issue

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — addresses all three bullet points clearly",
          "Vocabulary — uses varied, precise word choices appropriate for a formal complaint about a service",
          "Readability — logical paragraph structure with clear organization (greeting, problem, follow-up, request, closing)",
          "Task-specific grammar — correct use of past tense for narrating events and polite conditional forms for requests",
        ],
        modelAnswer: `Subject: Damage Following Carpet Cleaning on August 14

Dear Ms. Patterson,

I am writing about the deep-cleaning service I booked for my living room and hallway carpets on August 14 (Booking #7729). Shortly after your technicians left, I noticed a large discoloured patch near the window where the carpet appears bleached, and a fresh scratch across the top of my wooden side table that was not there before.

I called the technicians within the hour, and one of them, Marco, returned briefly to look at the carpet. He suggested the discolouration might fade once the carpet dried fully, but two days later it remains just as visible, and no one addressed the scratched table at all.

Given that the patch has not improved and the furniture damage was never acknowledged, I would like the company to send a specialist to properly treat the carpet and to either repair or compensate me for the damaged table. Please let me know how you would like to proceed.

I look forward to your response.

Sincerely,
Priya Nandakumar`,
        whyItWorks:
          "This response addresses all three required points: it names the exact service and both problems discovered, narrates the on-site follow-up with a specific technician and his (unsuccessful) explanation, and closes with two distinct, reasonable requests rather than a vague complaint. Time markers ('shortly after,' 'within the hour,' 'two days later') keep the sequence of events clear, the subject line and booking number make the email easy to route, and the polite but firm closing request models exactly the tone CELPIP raters expect from a formal service complaint.",
      },
      {
        id: "t2_w2",
        partLabel: "Task 2",
        name: "Responding to Survey Questions",
        seconds: 26 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your local library is running a survey about how to use its recently vacated second-floor reading room. You are given this question:

"Some residents want the space converted into a Makerspace with 3D printers, sewing machines, and craft tools available to the public. Others want it kept as a quiet, traditional reading and study room. Which option do you support?"

Write a response giving your opinion. Support your opinion with reasons and, if useful, personal examples.

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — takes a clear position and supports it with developed reasons",
          "Vocabulary — uses persuasive and precise language, avoids repetition",
          "Readability — clear opinion stated early, logically ordered supporting points, brief conclusion",
          "Task-specific grammar — correct use of opinion language and complex sentences to link reasons",
        ],
        modelAnswer: `In my opinion, the library should convert the second-floor room into a Makerspace rather than keeping it as a traditional reading room.

My main reason is that quiet study space is not actually scarce in our library; the main floor already has a large reading area and several private study rooms that are rarely full, even during exam season. A Makerspace, on the other hand, would offer something the community currently lacks. When I needed to use a 3D printer for a school project last year, I had to travel across town to a university that allowed public access, which was inconvenient and time-consuming.

A Makerspace would also attract a wider range of visitors, including teenagers and hobbyists who might not otherwise use the library regularly, and exposing them to new tools could spark interests in design, engineering, or crafts they would not discover on their own.

Since existing quiet space would remain untouched elsewhere in the building, converting this one room seems like a low-risk way to expand what the library offers. For these reasons, I support the Makerspace proposal.`,
        whyItWorks:
          "The response states its position immediately, then develops two distinct, logically ordered reasons — that quiet space is already well-supplied elsewhere, and that a Makerspace fills a genuine community gap — instead of repeating one idea. It supports the second reason with a specific personal example (traveling across town for a 3D printer), preempts the obvious objection by noting existing study space would remain untouched, and ends with a brief, confident restatement of the position, which is exactly the balance of stance, evidence, and concession that raises a Task 2 response above a generic one.",
      },
    ],
  };

  window.__writingTests = window.__writingTests || [];
  window.__writingTests.push(test);
})();
