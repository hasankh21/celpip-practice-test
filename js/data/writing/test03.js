// Writing Practice Test 3 — original content modeled on the official CELPIP-General format.
// Writing is free-response, so the "answer key" is a model response plus a scoring explanation.

(function () {
  const test = {
    testNumber: 3,
    tasks: [
      {
        id: "t3_w1",
        partLabel: "Task 1",
        name: "Writing an Email",
        seconds: 27 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `The heating system in your rented apartment has stopped working properly, and the temperature indoors has dropped noticeably over the past few days. Write an email to your landlord.

In your email:
- Explain the problem with the heating and when you first noticed it
- Describe how it has affected your daily life at home (invent reasonable details)
- Say what you would like the landlord to do and by when

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — addresses all three bullet points clearly",
          "Vocabulary — uses varied, precise word choices appropriate for a formal request to a landlord",
          "Readability — logical paragraph structure with clear organization (greeting, problem, impact, request, closing)",
          "Task-specific grammar — correct use of present perfect and past tense to describe an ongoing problem, and polite request forms",
        ],
        modelAnswer: `Subject: Heating Problem — Apartment 4B

Dear Mr. Alvarez,

I am writing to report a problem with the heating system in my apartment. I first noticed on Monday that the radiators were only lukewarm instead of hot, and by Wednesday morning several of them had stopped producing any heat at all, even with the thermostat set to 22 degrees.

This has made it difficult to keep the apartment comfortable, especially in the evenings and overnight. I have had to sleep in a sweater and extra blankets for the past three nights, and my two-year-old daughter has started waking up because her room feels cold. I have also noticed a slight increase in condensation on the windows, which concerns me.

Since the temperature is expected to drop further this week, I would appreciate it if you could send a technician to inspect and repair the heating system as soon as possible, ideally within the next two days. Please let me know a convenient time for access.

Thank you for your prompt attention to this matter.

Sincerely,
Elena Kowalski`,
        whyItWorks:
          "The response covers all three bullets: it pinpoints when the problem began and how it progressed, describes concrete effects on daily life (sleeping arrangements, a child waking up, condensation) rather than a vague complaint, and closes with a specific, time-bound request. The present perfect ('has made,' 'have had to') correctly frames the ongoing nature of the problem, while the closing paragraph remains polite but firm about urgency — this combination of specificity, appropriate tense use, and a clear deadline is what distinguishes a strong Task 1 response from a merely adequate one.",
      },
      {
        id: "t3_w2",
        partLabel: "Task 2",
        name: "Responding to Survey Questions",
        seconds: 26 * 60,
        minWords: 150,
        maxWords: 200,
        prompt: `Your city's transportation department is running a survey about a proposal for Maple Street. You are given this question:

"Some residents want to remove street parking on one side of Maple Street to install a protected bike lane. Others want to keep the parking spaces as they are. Which option do you support?"

Write a response giving your opinion. Support your opinion with reasons and, if useful, personal examples.

Your response should be 150-200 words.`,
        scoringCriteria: [
          "Content/Task Fulfillment — takes a clear position and supports it with developed reasons",
          "Vocabulary — uses persuasive and precise language, avoids repetition",
          "Readability — clear opinion stated early, logically ordered supporting points, brief conclusion",
          "Task-specific grammar — correct use of opinion language and complex sentences to link reasons",
        ],
        modelAnswer: `In my opinion, the city should remove the street parking on Maple Street and install a protected bike lane instead.

The most important reason is safety. Maple Street currently has no dedicated space for cyclists, so bikes and cars share a narrow lane, which feels dangerous both as a driver and as a cyclist. Last spring, I witnessed a delivery van swerve into the cycling lane to avoid a parked car door that had just opened, narrowly missing a cyclist. A protected lane would prevent exactly this kind of situation.

I also think the parking loss is manageable, since there is a public parking lot two blocks away that residents and visitors could use instead, and most of the affected spaces are used only sporadically throughout the day based on what I have observed while walking the street.

Finally, encouraging cycling by making it safer could reduce car traffic on Maple Street over time, benefiting everyone, including drivers, through less congestion.

For these reasons, I support converting the parking spaces into a protected bike lane, while directing residents to the nearby lot as an alternative.`,
        whyItWorks:
          "The response opens with a clear stance, then builds a logical case around safety as the central reason, supported by a specific, vivid personal example (the delivery van incident) rather than a generalization. It anticipates the natural objection about lost parking and offers a concrete alternative (the nearby lot), then adds a secondary benefit (reduced congestion) before closing with a brief restatement of the position — this structure of stance, evidence, counterargument, and conclusion is precisely what CELPIP Task 2 rewards.",
      },
    ],
  };

  window.__writingTests = window.__writingTests || [];
  window.__writingTests.push(test);
})();
