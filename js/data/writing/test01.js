// Writing Practice Test 1 — original content modeled on the official CELPIP-General format.
// Writing is free-response, so the "answer key" is a model response plus a scoring explanation.

(function () {
  const test = {
    testNumber: 1,
    tasks: [
      {
        id: "t1_w1",
        partLabel: "Task 1",
        name: "Writing an Email",
        seconds: 27 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `You recently ordered a piece of furniture (a desk) online. When it arrived, you discovered it was the wrong color and one panel was scratched. Write an email to the company's customer service department.

In your email:
- Explain what you ordered and what problem occurred
- Describe what happened when you tried to assemble it (invent reasonable details)
- Say what you would like the company to do about it (e.g., replacement, refund, discount)

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — addresses all three bullet points clearly",
          "Vocabulary — uses varied, precise word choices appropriate for a formal complaint",
          "Readability — logical paragraph structure with clear organization (greeting, problem, request, closing)",
          "Task-specific grammar — correct use of past tense for narrating events and conditional/polite forms for requests",
        ],
        modelAnswer: `Subject: Incorrect Item and Damage — Order #48213

Dear Customer Service Team,

I am writing regarding an order I placed last week for a walnut-finish writing desk (Order #48213). When the package arrived yesterday, I discovered two problems.

First, the desk delivered was finished in light oak rather than the walnut I had selected at checkout. Second, when I began assembling it, I noticed a visible scratch running across the top panel, which appears to have happened during manufacturing or shipping rather than during my assembly, since the protective wrapping around that panel was already torn when I opened the box.

I attempted to continue assembling the rest of the frame in case the panel could simply be swapped later, but I stopped once I realized the color mismatch would need to be resolved regardless.

Given these two issues, I would like to request a full replacement in the correct walnut finish, with an undamaged top panel, shipped at no additional cost. If a replacement will take longer than two weeks, I would appreciate the option of a full refund instead.

I have attached photos of both the incorrect color and the scratch for your reference. Please let me know how you would like to proceed.

Thank you for your prompt attention to this matter.

Sincerely,
Alex Morgan`,
        whyItWorks:
          "This response covers all three required points (what was ordered/the problem, what happened during assembly, and a clear request for resolution). It stays within the word range, uses a clear subject line and formal greeting/closing appropriate for customer service correspondence, sequences events logically with time markers ('when the package arrived,' 'when I began assembling'), and offers two concrete, reasonable solutions (replacement or refund with a timeframe) rather than a vague complaint — this specificity and structure are what raise a response from average to strong under CELPIP's content and coherence criteria.",
      },
      {
        id: "t1_w2",
        partLabel: "Task 2",
        name: "Responding to Survey Questions",
        seconds: 26 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your city council is running a survey about a proposed change to a local park. You are given this question:

"Some residents want to convert the large open field in Riverside Park into a fenced dog park. Others want the field to remain open for general use (picnics, sports, events). Which option do you support?"

Write a response giving your opinion. Support your opinion with reasons and, if useful, personal examples.

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — takes a clear position and supports it with developed reasons",
          "Vocabulary — uses persuasive and precise language, avoids repetition",
          "Readability — clear opinion stated early, logically ordered supporting points, brief conclusion",
          "Task-specific grammar — correct use of opinion language and complex sentences to link reasons",
        ],
        modelAnswer: `In my opinion, Riverside Park's open field should remain available for general use rather than being converted into a fenced dog park.

The main reason is flexibility. An open field can host picnics, informal sports games, community events, and family gatherings, all of which serve a much wider range of residents than a dog park would. Last summer, my neighborhood held an outdoor movie night on that exact field, drawing well over a hundred people; a fenced dog park would make that kind of large gathering impossible in the same space.

I also think dog owners already have reasonable alternatives nearby. There is a smaller, currently underused grassy area near the park's east entrance that could be converted into a dog park instead, without displacing the activities that depend on open space.

Finally, converting shared space into a single-purpose area for one group, however valid their interest, tends to create division within a community rather than shared enjoyment. Public parks work best when as many residents as possible can find a way to use them.

For these reasons, I support keeping Riverside Park's field open, while exploring the smaller east-entrance area as an alternative site for a dog park.`,
        whyItWorks:
          "The response states a clear position in the first sentence, then develops three distinct, logically ordered reasons (flexibility of use, an alternative solution for the other side, and a broader community principle) rather than repeating one idea. It includes a concrete personal example (the movie night) to support the argument with specifics, acknowledges the opposing view fairly instead of dismissing it, and closes with a brief restatement of the position plus a compromise — this balance of a firm stance, varied support, and reasoned acknowledgment of the other side is exactly what CELPIP raters reward in Task 2.",
      },
    ],
  };

  window.__writingTests = window.__writingTests || [];
  window.__writingTests.push(test);
})();
