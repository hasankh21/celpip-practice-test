// Writing Practice Test 8 — original content modeled on the official CELPIP-General format.
// Writing is free-response, so the "answer key" is a model response plus a scoring explanation.

(function () {
  const test = {
    testNumber: 8,
    tasks: [
      {
        id: "t8_w1",
        partLabel: "Task 1",
        name: "Writing an Email",
        seconds: 27 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `You recently flew with SkyBridge Airlines, and your checked suitcase arrived badly damaged, with a broken wheel and a torn side panel. Write an email to the airline's customer relations department.

In your email:
- Explain your flight details and describe the damage you found (invent reasonable details)
- Describe what you did when you discovered the damage at the airport
- Say what you would like the airline to do about it (e.g., repair, replacement, compensation)

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — addresses all three bullet points clearly (flight/damage details, action taken at the airport, requested resolution)",
          "Vocabulary — uses precise, formal vocabulary appropriate for a travel-related complaint",
          "Readability — clear subject line and logical order (what happened, what you did, what you want)",
          "Task-specific grammar — correct use of past tense for narrating a sequence of events",
        ],
        modelAnswer: `Subject: Damaged Checked Baggage — Flight SB482, September 14

Dear Customer Relations Team,

I am writing to report damage to my checked suitcase following Flight SB482 from Calgary to Ottawa on September 14. When I collected my bag from the carousel, I noticed that one of the wheels had snapped off completely and the side panel was torn open along a seam, exposing some of my clothing inside.

I reported the damage immediately at the baggage service desk before leaving the airport and was given a claim reference number, 88213-SB, along with a photocopy of my baggage tag. The staff member on duty photographed the suitcase but explained that any resolution would need to be handled through your online claims department.

Since the suitcase is now unusable for travel, I would like the airline to either replace it with a comparable model or provide compensation covering its full replacement cost. I have attached photos of both damaged areas along with my original baggage tag and boarding pass for reference.

I would appreciate a response within two weeks. Thank you for your attention to this matter.

Sincerely,
Priya Nathan`,
        whyItWorks:
          "This response addresses all three bullet points with concrete, specific details: exact flight number and date, a precise description of both damaged areas, the claim reference number obtained at the airport, and a clear request offering two acceptable outcomes (replacement or compensation). The chronological structure — flight and damage, action taken, desired resolution — makes the email easy to follow, and consistent past-tense narration accurately sequences the events. Attaching supporting documentation and requesting a response within a specific timeframe demonstrate the kind of practical, well-organized problem-solving that raises a Task 1 response above a generic complaint.",
      },
      {
        id: "t8_w2",
        partLabel: "Task 2",
        name: "Responding to Survey Questions",
        seconds: 26 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your city council is running a survey about parking downtown. You are given this question:

"The city is considering introducing paid, metered parking along Main Street downtown, replacing the current free on-street parking. Some residents support this change, believing it will increase parking availability for shoppers. Others oppose it, believing it will discourage people from visiting downtown businesses. Which option do you support?"

Write a response giving your opinion. Support your opinion with reasons and, if useful, personal examples.

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — takes a clear position and supports it with developed reasons",
          "Vocabulary — uses persuasive and precise language, avoids repetition",
          "Readability — clear opinion stated early, logically ordered supporting points, brief conclusion",
          "Task-specific grammar — correct use of opinion language and complex sentences to link reasons",
        ],
        modelAnswer: `I support introducing paid, metered parking along Main Street rather than keeping the current free on-street parking.

The main reason is that free parking downtown has made spaces very difficult to find. Employees of nearby stores often park on Main Street for entire shifts, leaving few open spots for actual shoppers. A small hourly fee would encourage quicker turnover, meaning more customers could park close to the businesses they want to visit. Last month, I circled the block three times looking for a spot before giving up and parking several streets away, which cost me time I would rather have spent shopping.

I also think concerns about discouraging visitors are somewhat overstated. Many nearby cities already use metered parking downtown, and their shopping districts remain busy, since a small fee is rarely the deciding factor for most shoppers.

Additionally, revenue collected from the meters could be reinvested directly into downtown improvements, such as better sidewalks or lighting, benefiting everyone who visits the area.

For these reasons, I support metered parking on Main Street, provided the first thirty minutes remain free for quick errands.`,
        whyItWorks:
          "The response opens with a clear position and builds three well-developed reasons: the practical problem with free parking, a rebuttal to the main counterargument, and an added civic benefit. The personal anecdote about circling the block gives the argument a concrete, relatable foundation rather than relying on generalizations, and the opposing viewpoint is acknowledged and addressed rather than dismissed outright. The conclusion restates the position while adding a reasonable condition (free short-term parking), showing the kind of nuanced, well-supported opinion that scores strongly on CELPIP's Task 2 content and coherence criteria.",
      },
    ],
  };

  window.__writingTests = window.__writingTests || [];
  window.__writingTests.push(test);
})();
