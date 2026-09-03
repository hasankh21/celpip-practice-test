// Reading Practice Test 9 — original content modeled on the official CELPIP-General format
// (Part 1: 11 blanks, Part 2: 8 questions, Part 3: 9 questions, Part 4: 10 questions — 38 total).
// Part 1 blanks are rendered as inline drop-downs directly inside the reply text (true cloze format),
// using the ___(n)___ markers below.

(function () {
  const test = {
    testNumber: 9,
    parts: [
      {
        id: "t9_r1",
        partLabel: "Part 1",
        name: "Reading Correspondence",
        instructions:
          "Read the email below, then read the reply. Some words in the reply are missing. Choose the best option to fill each numbered blank — the blanks appear directly in the reply text, just like on the real test.",
        suggestedMinutes: 16,
        passageTitle: "Original Email",
        passage: `From: Diane Marchetti, Operations Director
To: All Staff, Crestline Consulting
Subject: Office Relocation to Birchwood Tower

Dear Team,

I'm writing to confirm that our office will relocate from the current Harbor Street location to the fifth floor of Birchwood Tower on Elm Avenue, effective Monday, February 2nd. The moving crew will pack most workstation items over the final weekend of January, so please clear personal belongings from your desk by end of day Friday, January 30th.

The new building offers underground parking, a larger break room, and several small meeting rooms that can be reserved through the shared calendar system. IT staff will be on-site during the first week at the new location to help resolve any technical issues with phone lines or network connections.

Please let me know if you have any questions or specific concerns about the move.

Best,
Diane Marchetti
Operations Director`,
        replyTitle: "Reply (fill in each numbered blank)",
        replyTemplate: [
          "Dear Diane,",
          "Thank you for the ___(1)___ about the move. I have a few questions before the relocation weekend.",
          "First, will the moving crew ___(2)___ larger shared equipment like the printers and filing cabinets, or are those being handled separately from personal desk items?",
          "Second, I currently keep several boxes of client files in a locked cabinet — should I ___(3)___ these myself, or will the movers handle locked furniture as well?",
          "Third, since the new building has underground parking, will spots be ___(4)___ to employees, or will it be first-come, first-served each morning?",
          "Fourth, I noticed the notice didn't mention whether our current desk phone extensions will be ___(5)___ automatically at the new office, or whether we'll need to set them up again.",
          "I would like to ___(6)___ whether the meeting room booking calendar will be shared with the same login we currently use, or if a new system is being introduced.",
          "Fifth, will IT staff be ___(7)___ only during business hours that first week, or should we expect coverage if problems come up early in the morning?",
          "I would also like to ___(8)___ that the company post building access instructions in advance, since several of us have never been to Birchwood Tower.",
          "Finally, could you please ___(9)___ whether the break room will be stocked before our first day there, or whether we should bring our own supplies initially?",
          "I appreciate the ___(10)___ you've put into planning this move. Please let me know if there's anything I can do to help the transition go ___(11)___.",
          "Best regards,",
          "Samuel Grant",
        ],
        blanks: [
          {
            num: 1,
            options: ["notice", "invoice", "complaint", "warning"],
            correct: 0,
            explain:
              "Samuel is thanking Diane for informing staff in advance — this refers back to the original email, which was a 'notice' about the relocation.",
          },
          {
            num: 2,
            options: ["pack", "sell", "paint", "ignore"],
            correct: 0,
            explain:
              "The email states the moving crew will pack workstation items — Samuel is reasonably asking whether the same crew will also 'pack' larger shared equipment.",
          },
          {
            num: 3,
            options: ["transport", "forget", "sell", "ignore"],
            correct: 0,
            explain:
              "Samuel is asking whether he needs to move the locked cabinet's contents himself — 'transport' fits the context of physically moving items to the new location.",
          },
          {
            num: 4,
            options: ["assigned", "sold", "painted", "forbidden"],
            correct: 0,
            explain:
              "Samuel is asking whether specific parking spots will be designated for employees — 'assigned' fits a question about allocation of a limited resource.",
          },
          {
            num: 5,
            options: ["transferred", "sold", "cancelled", "forgotten"],
            correct: 0,
            explain:
              "Samuel is asking whether phone extensions will move automatically to the new office — 'transferred' is the correct word for moving a service from one location to another.",
          },
          {
            num: 6,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Samuel is asking Diane to verify a fact about the booking calendar system — 'confirm' fits a request for a definite answer.",
          },
          {
            num: 7,
            options: ["available", "fired", "forbidden", "sold"],
            correct: 0,
            explain:
              "Samuel is asking about the hours IT staff can be reached for help — 'available' fits a question about accessibility of support.",
          },
          {
            num: 8,
            options: ["suggest", "delete", "forbid", "ignore"],
            correct: 0,
            explain:
              "Samuel is politely proposing an idea (posting access instructions) — 'suggest' is the appropriate verb for offering a recommendation in formal correspondence.",
          },
          {
            num: 9,
            options: ["verify", "deny", "cancel", "delay"],
            correct: 0,
            explain:
              "Samuel wants Diane to double-check whether the break room will be ready — 'verify' fits a request to confirm that something is true.",
          },
          {
            num: 10,
            options: ["effort", "complaint", "invoice", "warning"],
            correct: 0,
            explain:
              "'Effort' refers to the work and planning someone has invested in a task, matching Samuel's appreciation for Diane's planning of the move.",
          },
          {
            num: 11,
            options: ["smoothly", "loudly", "slowly", "incorrectly"],
            correct: 0,
            explain:
              "Samuel is offering to help the process succeed without problems — 'go smoothly' is the standard collocation for a process happening without difficulty.",
          },
        ],
      },
      {
        id: "t9_r2",
        partLabel: "Part 2",
        name: "Reading to Apply a Diagram",
        instructions:
          "Study the information below, then answer the questions by applying the details shown.",
        suggestedMinutes: 13,
        passageTitle: "Coastal Car Rentals — Vehicle Categories, Rates & Insurance Options",
        diagramHtml: `
        <table class="diagram-table">
          <thead><tr><th>Vehicle Category</th><th>Daily Rate</th><th>Free Mileage/Day</th><th>Extra Mileage Fee</th><th>Seats</th></tr></thead>
          <tbody>
            <tr><td>Economy</td><td>$35</td><td>150 km</td><td>$0.20/km over</td><td>4</td></tr>
            <tr><td>Midsize</td><td>$48</td><td>200 km</td><td>$0.25/km over</td><td>5</td></tr>
            <tr><td>SUV</td><td>$65</td><td>200 km</td><td>$0.30/km over</td><td>7</td></tr>
            <tr><td>Luxury Sedan</td><td>$89</td><td>Unlimited</td><td>N/A</td><td>5</td></tr>
          </tbody>
        </table>
        <table class="diagram-table">
          <thead><tr><th>Insurance Plan</th><th>Daily Cost</th><th>Coverage</th></tr></thead>
          <tbody>
            <tr><td>Basic (included free)</td><td>$0</td><td>Theft only, $1500 deductible</td></tr>
            <tr><td>Standard</td><td>$12</td><td>Theft & collision, $500 deductible</td></tr>
            <tr><td>Premium</td><td>$22</td><td>Theft, collision & interior damage, $0 deductible</td></tr>
          </tbody>
        </table>
        <p class="diagram-note">Note: Renters under 25 pay a young-driver surcharge of $15/day on all vehicle categories except Economy. A valid credit card is required at pickup for all rentals. Luxury Sedan rentals require the Standard or Premium insurance plan; Basic coverage is not available for this category.</p>
      `,
        questions: [
          {
            q: "A 22-year-old wants to rent a Midsize car for 3 days. What additional fee will they pay beyond the daily rate?",
            options: [
              "No additional fee",
              "A $15/day young-driver surcharge",
              "A $500 deductible fee upfront",
              "An extra mileage fee automatically",
            ],
            correct: 1,
            explain:
              "The note states renters under 25 pay a $15/day young-driver surcharge on all categories except Economy, and Midsize is not exempt.",
          },
          {
            q: "A renter plans to drive an SUV 250 km in one day. How much will they owe in extra mileage fees for that day?",
            options: [
              "$0, since SUVs include unlimited mileage",
              "$15, for 50 km over the 200 km limit at $0.30/km",
              "$50",
              "$0.30 total",
            ],
            correct: 1,
            explain:
              "SUVs include 200 km free per day at $0.30/km over. Driving 250 km means 50 km over the limit, so 50 × $0.30 = $15.",
          },
          {
            q: "Which vehicle category includes unlimited free mileage?",
            options: ["Economy", "Midsize", "SUV", "Luxury Sedan"],
            correct: 3,
            explain: "The table lists Luxury Sedan as the only category with unlimited free mileage.",
          },
          {
            q: "A customer wants to rent a Luxury Sedan and asks for Basic insurance coverage. Is this possible?",
            options: [
              "Yes, Basic is available for all categories",
              "No, Luxury Sedan requires Standard or Premium insurance",
              "Yes, but only for renters over 25",
              "No, Luxury Sedan cannot be rented with any insurance",
            ],
            correct: 1,
            explain:
              "The note states Luxury Sedan rentals require the Standard or Premium plan, and Basic coverage is not available for this category.",
          },
          {
            q: "A family of 6 needs a rental car. Which categories can accommodate them?",
            options: ["Economy only", "Midsize only", "SUV only, since it seats 7", "Economy or Midsize"],
            correct: 2,
            explain:
              "Only the SUV, with 7 seats, can accommodate a family of 6; Economy (4 seats), Midsize (5 seats), and Luxury Sedan (5 seats) all fall short.",
          },
          {
            q: "What deductible applies under the Standard insurance plan?",
            options: ["$0", "$500", "$1500", "$22"],
            correct: 1,
            explain: "The table lists the Standard plan's deductible as $500.",
          },
          {
            q: "A 30-year-old is renting an Economy car for a week. Do they pay the young-driver surcharge?",
            options: [
              "Yes, all renters pay it",
              "No, because they are over 25, and Economy is exempt from the surcharge regardless of age",
              "Yes, because Economy always includes surcharges",
              "No, but only because it's a week-long rental",
            ],
            correct: 1,
            explain:
              "The surcharge only applies to renters under 25, and even then it excludes the Economy category, so a 30-year-old renting Economy pays no surcharge for either reason.",
          },
          {
            q: "Which insurance plan is included at no extra cost with every rental?",
            options: ["Standard", "Premium", "Basic", "None, all plans cost extra"],
            correct: 2,
            explain: "The table labels Basic as 'included free' with a daily cost of $0.",
          },
        ],
      },
      {
        id: "t9_r3",
        partLabel: "Part 3",
        name: "Reading for Information",
        instructions: "Read the passage, then answer the questions based on the information given.",
        suggestedMinutes: 14,
        passageTitle: "The Science Behind the Perfect Power Nap",
        passage: `For much of the twentieth century, napping during the day carried a mild stigma in many workplaces, often seen as a sign of laziness rather than a legitimate strategy for managing fatigue. Sleep researchers have spent the past several decades pushing back against that assumption, and a growing body of evidence now suggests that a well-timed short nap can measurably improve alertness, mood, and cognitive performance.

The key word, researchers emphasize, is short. Naps lasting between ten and twenty minutes generally allow a person to wake up refreshed, since this window keeps the sleeper in the lighter stages of sleep. Once a nap extends past thirty minutes, the body often begins transitioning into deeper, slow-wave sleep, and waking up during this deeper stage tends to produce a groggy, disoriented feeling known as sleep inertia that can last anywhere from several minutes to nearly an hour.

Timing matters almost as much as duration. Most people experience a natural dip in alertness in the early afternoon, roughly seven to nine hours after waking, driven by the body's internal circadian rhythm rather than simply how much food was eaten at lunch. Napping during this window tends to align with the body's existing sleep pressure, making it easier to fall asleep quickly and wake up within the ideal short window. Napping too late in the afternoon or evening, on the other hand, can interfere with a person's ability to fall asleep at their normal bedtime.

One curious strategy researchers have studied is the "coffee nap," which involves drinking a cup of coffee immediately before lying down for a fifteen-to-twenty-minute nap. Caffeine typically takes about twenty minutes to be absorbed and take effect, so a person who naps for that same window wakes up just as the caffeine begins working, combining the restorative effect of the nap with the stimulant effect of the caffeine.

Napping habits also vary considerably by culture and occupation. In some countries, a midday rest period is a long-standing social custom, while shift workers in other regions increasingly rely on short strategic naps during breaks to offset the effects of irregular sleep schedules. Airlines and some large employers have begun installing dedicated nap pods or quiet rooms, recognizing that a brief, well-timed rest period can reduce workplace errors, particularly in jobs requiring sustained attention.

Not every study reaches identical conclusions, however. Some researchers caution that individual responses to napping vary widely, and that people who already sleep well at night may see smaller benefits from daytime naps than those who are chronically sleep-deprived. For habitual poor sleepers, experts generally recommend addressing the underlying causes of nighttime sleep loss rather than relying on naps as a long-term substitute.`,
        questions: [
          {
            q: "According to the passage, what has research over recent decades shown about daytime napping?",
            options: [
              "It has no effect on performance",
              "A well-timed short nap can improve alertness, mood, and cognitive performance",
              "It always causes grogginess",
              "It is only useful for shift workers",
            ],
            correct: 1,
            explain:
              "The passage states research now suggests a well-timed short nap can measurably improve alertness, mood, and cognitive performance.",
          },
          {
            q: "Why do naps lasting ten to twenty minutes tend to leave a person feeling refreshed?",
            options: [
              "They allow entry into deep, slow-wave sleep",
              "They keep the sleeper in the lighter stages of sleep",
              "They require caffeine beforehand",
              "They match the length of a full night's sleep",
            ],
            correct: 1,
            explain:
              "The passage states this short window keeps the sleeper in the lighter stages of sleep, avoiding grogginess upon waking.",
          },
          {
            q: "What happens when a nap extends past thirty minutes, according to the passage?",
            options: [
              "The sleeper wakes up more alert than a short nap",
              "The body may enter deep sleep, causing grogginess known as sleep inertia",
              "The nap has no measurable effect",
              "The sleeper cannot wake up at all",
            ],
            correct: 1,
            explain:
              "The passage explains that past thirty minutes, the body transitions into deep sleep, and waking from this stage produces sleep inertia, a groggy feeling.",
          },
          {
            q: "What primarily causes the natural afternoon dip in alertness, according to the passage?",
            options: [
              "Eating a large lunch",
              "The body's internal circadian rhythm",
              "Drinking too much coffee in the morning",
              "Excessive daytime napping",
            ],
            correct: 1,
            explain:
              "The passage states the afternoon dip is driven by the body's internal circadian rhythm rather than simply how much food was eaten at lunch.",
          },
          {
            q: "What can happen if someone naps too late in the afternoon or evening?",
            options: [
              "It always improves nighttime sleep",
              "It can interfere with falling asleep at the normal bedtime",
              "It guarantees a groggy morning",
              "It has no effect on nighttime sleep",
            ],
            correct: 1,
            explain:
              "The passage states napping too late in the afternoon or evening can interfere with a person's ability to fall asleep at their normal bedtime.",
          },
          {
            q: "How does a 'coffee nap' work, according to the passage?",
            options: [
              "Coffee is drunk after waking from the nap",
              "Coffee is drunk immediately before a short nap, so caffeine takes effect around waking time",
              "Coffee replaces the need to nap entirely",
              "Coffee is avoided completely before napping",
            ],
            correct: 1,
            explain:
              "The passage describes drinking coffee immediately before a fifteen-to-twenty-minute nap so that caffeine begins working just as the person wakes.",
          },
          {
            q: "What have some airlines and large employers done in response to napping research?",
            options: [
              "Banned napping during work hours",
              "Installed dedicated nap pods or quiet rooms",
              "Required all employees to nap daily",
              "Eliminated break times entirely",
            ],
            correct: 1,
            explain:
              "The passage states some airlines and large employers have begun installing dedicated nap pods or quiet rooms.",
          },
          {
            q: "According to some researchers, who tends to see smaller benefits from daytime naps?",
            options: [
              "Chronically sleep-deprived people",
              "People who already sleep well at night",
              "Shift workers",
              "People who drink coffee",
            ],
            correct: 1,
            explain:
              "The passage states people who already sleep well at night may see smaller benefits from daytime naps than those who are chronically sleep-deprived.",
          },
          {
            q: "What do experts generally recommend for habitual poor sleepers, rather than relying on naps long-term?",
            options: [
              "Sleeping only on weekends",
              "Addressing the underlying causes of nighttime sleep loss",
              "Drinking more caffeine",
              "Avoiding all forms of rest during the day",
            ],
            correct: 1,
            explain:
              "The final sentence recommends addressing the underlying causes of nighttime sleep loss rather than relying on naps as a long-term substitute.",
          },
        ],
      },
      {
        id: "t9_r4",
        partLabel: "Part 4",
        name: "Reading for Viewpoints",
        instructions:
          "Read the passage, which presents differing viewpoints, then answer the questions.",
        suggestedMinutes: 14,
        passageTitle: "Do Standardized Tests Measure What Matters?",
        passage: `As school districts review how student progress is assessed, the role of standardized testing has become a persistent point of disagreement among educators, parents, and policy researchers.

Principal Yusuf Karimi, who oversees a large public high school, defends the current testing system as an imperfect but necessary tool. "Without some common measure, we have no consistent way to compare how students across different schools and neighborhoods are actually performing," he argues. He notes that standardized results have historically helped identify schools that need additional funding or support, since gaps in performance can reveal underlying resource inequalities that might otherwise go unnoticed by district administrators.

Veteran teacher Colette Fontaine sees the picture differently. "I've watched my curriculum narrow year after year, because so much class time goes toward preparing students for one specific type of exam," she says. She worries that an overreliance on standardized scores pushes teachers to prioritize easily testable skills, like memorization and quick multiple-choice reasoning, over deeper skills such as creative problem-solving, collaboration, and written argumentation that are harder to measure on a timed exam. "I want to teach students to think, not just to guess efficiently," she adds.

Education researcher Dr. Malia Fitzgerald has reviewed testing outcomes across multiple school systems and offers a more measured take. "Standardized tests can provide useful, comparable data, but only when they're one input among several, not the primary basis for high-stakes decisions like graduation or school funding," she explains. She points out that test scores correlate strongly with a student's socioeconomic background, meaning that using scores alone to judge school quality risks unfairly penalizing schools serving lower-income communities rather than accurately measuring teaching effectiveness.

Karimi acknowledges the socioeconomic critique but maintains that removing standardized measures entirely would leave districts with no objective way to track long-term trends, especially across schools that don't share the same grading standards. Fontaine counters that qualitative assessments, such as portfolios of student work reviewed by trained evaluators, could supplement or partially replace standardized scores without abandoning objectivity altogether, though she admits such systems are more time-consuming and expensive to administer fairly.

Dr. Fitzgerald recommends a hybrid approach already being piloted in a handful of districts: combining standardized test data with classroom-based portfolio assessments and student growth measured over time, rather than a single test score, to build a fuller picture of both student learning and school performance. The school board is expected to review pilot results from these hybrid programs before deciding whether to adjust district-wide assessment policy next year.`,
        questions: [
          {
            q: "What is Principal Karimi's main argument in favor of standardized testing?",
            options: [
              "It eliminates the need for teachers",
              "It provides a consistent way to compare student performance across schools and identify funding needs",
              "It guarantees equal funding for every school",
              "It replaces the need for any curriculum",
            ],
            correct: 1,
            explain:
              "Karimi argues that without a common measure, there is no consistent way to compare student performance, and results have historically helped identify schools needing additional support.",
          },
          {
            q: "What is Colette Fontaine's main concern about standardized testing?",
            options: [
              "That it makes grading too objective",
              "That an overreliance on scores narrows the curriculum and prioritizes easily testable skills over deeper thinking",
              "That tests are too difficult for most students",
              "That testing costs too much money",
            ],
            correct: 1,
            explain:
              "Fontaine says her curriculum has narrowed because so much class time goes toward exam preparation, prioritizing easily testable skills over deeper thinking.",
          },
          {
            q: "What skills does Fontaine believe are harder to measure on a timed standardized exam?",
            options: [
              "Memorization and quick multiple-choice reasoning",
              "Creative problem-solving, collaboration, and written argumentation",
              "Basic arithmetic",
              "Reading comprehension",
            ],
            correct: 1,
            explain:
              "Fontaine names creative problem-solving, collaboration, and written argumentation as deeper skills that are harder to measure on a timed exam.",
          },
          {
            q: "What does Dr. Fitzgerald say standardized test scores correlate strongly with?",
            options: [
              "Teacher salaries",
              "A student's socioeconomic background",
              "School building size",
              "Class scheduling",
            ],
            correct: 1,
            explain: "Fitzgerald points out that test scores correlate strongly with a student's socioeconomic background.",
          },
          {
            q: "What risk does Fitzgerald identify with using test scores alone to judge school quality?",
            options: [
              "It could unfairly penalize schools serving lower-income communities",
              "It would make all schools appear identical",
              "It would eliminate the need for teachers",
              "It would increase school funding unfairly",
            ],
            correct: 0,
            explain:
              "Fitzgerald warns that using scores alone risks unfairly penalizing schools serving lower-income communities rather than accurately measuring teaching effectiveness.",
          },
          {
            q: "What condition does Dr. Fitzgerald say standardized tests should meet to be useful?",
            options: [
              "They should be the sole basis for high-stakes decisions",
              "They should be one input among several, not the primary basis for high-stakes decisions",
              "They should be eliminated entirely",
              "They should only be given to younger students",
            ],
            correct: 1,
            explain:
              "Fitzgerald explains tests can provide useful data, but only when they're one input among several, not the primary basis for high-stakes decisions.",
          },
          {
            q: "What alternative or supplement does Fontaine propose?",
            options: [
              "Eliminating all forms of assessment",
              "Portfolios of student work reviewed by trained evaluators",
              "Increasing the number of standardized tests",
              "Removing teachers from the grading process",
            ],
            correct: 1,
            explain:
              "Fontaine counters that portfolios of student work reviewed by trained evaluators could supplement or partially replace standardized scores.",
          },
          {
            q: "What downside does Fontaine admit about her proposed alternative?",
            options: [
              "It would be less fair than testing",
              "It is more time-consuming and expensive to administer fairly",
              "It cannot be implemented at all",
              "It would eliminate objectivity completely",
            ],
            correct: 1,
            explain: "Fontaine admits such portfolio systems are more time-consuming and expensive to administer fairly.",
          },
          {
            q: "What hybrid approach does Dr. Fitzgerald recommend?",
            options: [
              "Using only classroom portfolios",
              "Combining standardized test data with portfolio assessments and growth measured over time",
              "Doubling the number of standardized tests",
              "Removing all objective measures",
            ],
            correct: 1,
            explain:
              "Fitzgerald recommends combining standardized test data with classroom-based portfolio assessments and student growth measured over time.",
          },
          {
            q: "What is the school board expected to do, according to the final paragraph?",
            options: [
              "Immediately abolish standardized testing",
              "Review pilot results from hybrid programs before deciding on policy changes next year",
              "Ignore all research on the topic",
              "Increase standardized testing frequency immediately",
            ],
            correct: 1,
            explain:
              "The final paragraph states the school board is expected to review pilot results from hybrid programs before deciding whether to adjust policy next year.",
          },
        ],
      },
    ],
  };

  window.__readingTests = window.__readingTests || [];
  window.__readingTests.push(test);
})();
