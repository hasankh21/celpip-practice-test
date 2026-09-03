// Reading Practice Test 4 — original content modeled on the official CELPIP-General format
// (Part 1: 11 blanks, Part 2: 8 questions, Part 3: 9 questions, Part 4: 10 questions — 38 total).
// Part 1 blanks are rendered as inline drop-downs directly inside the reply text (true cloze format),
// using the ___(n)___ markers below.

(function () {
  const test = {
    testNumber: 4,
    parts: [
      {
        id: "t4_r1",
        partLabel: "Part 1",
        name: "Reading Correspondence",
        instructions:
          "Read the email below, then read the reply. Some words in the reply are missing. Choose the best option to fill each numbered blank — the blanks appear directly in the reply text, just like on the real test.",
        suggestedMinutes: 16,
        passageTitle: "Original Email",
        passage: `From: Rosalind Chetwynd, Customer Care, Bluepeak Utilities
To: Yusuf Kadeer
Subject: Response to Your Billing Inquiry

Dear Mr. Kadeer,

Thank you for contacting Bluepeak Utilities about the unusually high charge on your August water bill. After reviewing your account, we found that a faulty meter reader recorded an inflated reading on July 30th, which caused the spike in your bill.

We have corrected the reading using your average usage from the previous six months, and a credit of $86.40 will appear on your next statement. We apologize for the inconvenience this may have caused.

To help prevent future billing errors, we recommend registering for our online account portal, where you can track your own meter readings and compare them against your monthly statement.

Please let us know if you have any further questions about this adjustment.

Sincerely,
Rosalind Chetwynd
Customer Care
Bluepeak Utilities`,
        replyTitle: "Reply (fill in each numbered blank)",
        replyTemplate: [
          "Dear Ms. Chetwynd,",
          "Thank you for looking into this so ___(1)___ and for correcting the error. I do have a few remaining questions.",
          "First, will the $86.40 credit appear as a separate line item, or will it simply be ___(2)___ from the total amount owed on my next bill?",
          "Second, could you please ___(3)___ whether this same faulty meter reader visited any of my neighbors, since a few of them mentioned high bills as well?",
          "Third, I'd like to ___(4)___ for the online account portal you mentioned. Could you send me a link or instructions to get started?",
          "I also wondered whether the physical meter itself needs to be ___(5)___ for accuracy, or whether the issue was limited to the reader's error alone.",
          "Fourth, is there a way to ___(6)___ automatic alerts if my usage suddenly spikes again in the future, so I can catch errors sooner?",
          "I would also like to know whether the credit will be applied before or after the ___(7)___ due date on my next statement.",
          "I would like to ___(8)___ that Bluepeak consider sending a brief text message alert whenever a bill is unusually higher than average, to help other customers catch errors like mine.",
          "Finally, could you please ___(9)___ that no late fee was charged on the original, incorrect amount while this was being resolved?",
          "I appreciate the ___(10)___ your team showed in resolving this quickly, and I hope future billing goes more ___(11)___.",
          "Sincerely,",
          "Yusuf Kadeer",
        ],
        blanks: [
          {
            num: 1,
            options: ["promptly", "rudely", "rarely", "expensively"],
            correct: 0,
            explain:
              "Yusuf is thanking Ms. Chetwynd for handling the issue quickly — \"promptly\" means without delay, fitting his appreciation for the fast resolution.",
          },
          {
            num: 2,
            options: ["deducted", "invented", "hidden", "doubled"],
            correct: 0,
            explain:
              "Yusuf is asking whether the credit will be subtracted from his total — \"deducted\" means taken away or subtracted, matching this billing context.",
          },
          {
            num: 3,
            options: ["confirm", "deny", "sell", "delay"],
            correct: 0,
            explain:
              "Yusuf wants Ms. Chetwynd to verify whether the same meter reader visited his neighbors — \"confirm\" fits a request to check and verify a fact.",
          },
          {
            num: 4,
            options: ["register", "resign", "apologize", "complain"],
            correct: 0,
            explain:
              "Yusuf wants to sign up for the online portal — \"register\" means to formally sign up for a service, matching his request for instructions to get started.",
          },
          {
            num: 5,
            options: ["inspected", "sold", "painted", "removed"],
            correct: 0,
            explain:
              "Yusuf is asking whether the physical meter should be examined for accuracy — \"inspected\" means checked or examined, fitting a question about equipment reliability.",
          },
          {
            num: 6,
            options: ["set up", "cancel", "forbid", "erase"],
            correct: 0,
            explain:
              "Yusuf wants to arrange automatic alerts for future usage spikes — \"set up\" means to arrange or establish something, matching his request to enable a new feature.",
          },
          {
            num: 7,
            options: ["payment", "birth", "arrival", "delivery"],
            correct: 0,
            explain:
              "Yusuf is asking about the due date for paying his bill — \"payment due date\" is the standard collocation referring to the deadline for submitting payment.",
          },
          {
            num: 8,
            options: ["suggest", "forbid", "delete", "ignore"],
            correct: 0,
            explain:
              "Yusuf is politely proposing an idea (a text alert system) — \"suggest\" is the appropriate verb for offering a recommendation in formal correspondence.",
          },
          {
            num: 9,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Yusuf is asking Ms. Chetwynd to verify that no late fee was applied — \"confirm\" fits a request for verification of a specific fact.",
          },
          {
            num: 10,
            options: ["efficiency", "silence", "invoice", "complaint"],
            correct: 0,
            explain:
              "Yusuf is thanking the team for resolving the issue quickly and competently — \"efficiency\" refers to acting effectively without wasted time, fitting this appreciative context.",
          },
          {
            num: 11,
            options: ["smoothly", "badly", "rarely", "loudly"],
            correct: 0,
            explain:
              "Yusuf is expressing hope that future billing will proceed without problems — \"go smoothly\" is the standard collocation for a process happening without difficulty.",
          },
        ],
      },
      {
        id: "t4_r2",
        partLabel: "Part 2",
        name: "Reading to Apply a Diagram",
        instructions:
          "Study the information below, then answer the questions by applying the details shown.",
        suggestedMinutes: 13,
        passageTitle: "Elmwood District — Curbside Waste & Recycling Pickup Schedule",
        diagramHtml: `
        <table class="diagram-table">
          <thead><tr><th>Zone</th><th>Garbage</th><th>Recycling</th><th>Organics (Green Bin)</th><th>Yard Waste</th></tr></thead>
          <tbody>
            <tr><td>Zone A (North)</td><td>Every Monday</td><td>Every 2nd Monday</td><td>Every Monday</td><td>Apr–Nov, every 4th Monday</td></tr>
            <tr><td>Zone B (South)</td><td>Every Tuesday</td><td>Every 2nd Tuesday</td><td>Every Tuesday</td><td>Apr–Nov, every 4th Tuesday</td></tr>
            <tr><td>Zone C (East)</td><td>Every Wednesday</td><td>Every 2nd Wednesday</td><td>Every Wednesday</td><td>Apr–Nov, every 4th Wednesday</td></tr>
            <tr><td>Zone D (West)</td><td>Every Thursday</td><td>Every 2nd Thursday</td><td>Every Thursday</td><td>Apr–Nov, every 4th Thursday</td></tr>
          </tbody>
        </table>
        <table class="diagram-table">
          <thead><tr><th>Item</th><th>Accepted Bin</th><th>Special Notes</th></tr></thead>
          <tbody>
            <tr><td>Glass bottles/jars</td><td>Recycling</td><td>Rinse before placing in bin</td></tr>
            <tr><td>Pizza boxes (greasy)</td><td>Organics</td><td>Not accepted in recycling due to grease</td></tr>
            <tr><td>Batteries</td><td>None of the above</td><td>Drop off at municipal depot only</td></tr>
            <tr><td>Grass clippings</td><td>Yard Waste</td><td>Must be in paper bags, not plastic</td></tr>
            <tr><td>Broken dishware</td><td>Garbage</td><td>Wrap in newspaper before disposal</td></tr>
          </tbody>
        </table>
        <p class="diagram-note">Note: If a scheduled pickup day falls on a statutory holiday, collection is delayed by one full day for the rest of that week. All bins must be placed curbside by 7:00 a.m.</p>
      `,
        questions: [
          {
            q: "A resident in Zone C has a greasy pizza box to dispose of. Which bin should they use?",
            options: ["Garbage", "Recycling", "Organics", "Yard Waste"],
            correct: 2,
            explain:
              "The special notes table states greasy pizza boxes go in Organics and are not accepted in recycling due to the grease.",
          },
          {
            q: "A resident in Zone B places their garbage bin curbside at 8:00 a.m. on collection day. What is the likely outcome?",
            options: [
              "The garbage will be collected as normal.",
              "The garbage may be missed, since bins must be curbside by 7:00 a.m.",
              "The resident will receive a bonus recycling pickup.",
              "The collection schedule will be permanently changed.",
            ],
            correct: 1,
            explain:
              "The note states all bins must be placed curbside by 7:00 a.m., so a bin placed out at 8:00 a.m. risks being missed by the collection crew.",
          },
          {
            q: "A resident wants to dispose of used household batteries. Where should they take them?",
            options: [
              "The recycling bin",
              "The garbage bin",
              "The municipal depot, since batteries are not accepted in any curbside bin",
              "The organics bin",
            ],
            correct: 2,
            explain:
              "The table specifies batteries are 'None of the above' for curbside bins and must be dropped off at the municipal depot only.",
          },
          {
            q: "Zone D's garbage day (Thursday) falls on a statutory holiday this week. When will collection likely occur?",
            options: [
              "It will be cancelled entirely for the week.",
              "It will be delayed by one full day, to Friday.",
              "It will move to the following Monday.",
              "It will happen a day early, on Wednesday.",
            ],
            correct: 1,
            explain:
              "The note states that if a scheduled pickup day falls on a statutory holiday, collection is delayed by one full day for the rest of that week.",
          },
          {
            q: "A resident in Zone A wants to dispose of grass clippings in a plastic bag. Is this acceptable?",
            options: [
              "Yes, any bag material is accepted for yard waste.",
              "No, grass clippings must be in paper bags, not plastic.",
              "Yes, but only during winter months.",
              "No, grass clippings are not accepted at all in Elmwood.",
            ],
            correct: 1,
            explain:
              "The special notes table specifies that grass clippings must be in paper bags, not plastic, for yard waste collection.",
          },
          {
            q: "In which months is yard waste collection unavailable in all zones?",
            options: ["December through March", "June through August", "January through June", "September through November"],
            correct: 0,
            explain:
              "All four zones show yard waste collection only occurring 'Apr–Nov,' meaning it is unavailable from December through March.",
          },
          {
            q: "A resident in Zone A has broken dishware to dispose of. What should they do?",
            options: [
              "Place it directly in the recycling bin.",
              "Wrap it in newspaper and place it in the garbage bin.",
              "Take it to the municipal depot.",
              "Place it in the organics bin.",
            ],
            correct: 1,
            explain:
              "The table indicates broken dishware belongs in the Garbage bin and should be wrapped in newspaper before disposal.",
          },
          {
            q: "How often is recycling collected in Zone D compared to garbage?",
            options: [
              "Recycling and garbage are collected with equal frequency.",
              "Recycling is collected half as often as garbage, since it occurs every 2nd Thursday versus every Thursday.",
              "Recycling is collected twice as often as garbage.",
              "Recycling is only collected once a year.",
            ],
            correct: 1,
            explain:
              "Zone D's garbage is collected every Thursday while recycling is collected every 2nd Thursday, meaning recycling occurs half as frequently as garbage.",
          },
        ],
      },
      {
        id: "t4_r3",
        partLabel: "Part 3",
        name: "Reading for Information",
        instructions: "Read the passage, then answer the questions based on the information given.",
        suggestedMinutes: 14,
        passageTitle: "Why Sleep Quality Matters More Than Sleep Quantity",
        passage: `For decades, public health advice about sleep has centered on a single number: eight hours per night. While total sleep duration remains important, a growing body of research suggests that sleep quality, how efficiently and deeply a person sleeps, may matter just as much, if not more, for overall health and daytime functioning.

Sleep researchers now commonly describe sleep as occurring in cycles, each lasting roughly ninety minutes and consisting of several distinct stages, including light sleep, deep sleep, and rapid eye movement (REM) sleep. Deep sleep, which occurs mostly in the earlier cycles of the night, is when the body performs much of its physical repair work, including muscle recovery and immune system strengthening. REM sleep, which becomes more prominent later in the night, is closely associated with memory consolidation and emotional processing. A person who sleeps a full eight hours but is frequently interrupted, whether by noise, an uncomfortable mattress, or an untreated sleep disorder, may cycle through these stages inefficiently, missing out on much of the restorative deep and REM sleep even though their total time in bed appears adequate.

One condition drawing increasing attention from researchers is sleep apnea, a disorder in which breathing repeatedly stops and starts during sleep, sometimes dozens of times per hour without the sleeper being consciously aware of it. Because these interruptions are often brief, sufferers may not remember waking up at all, yet their sleep architecture, the pattern of cycling through sleep stages, is significantly disrupted. Many people with undiagnosed sleep apnea report feeling exhausted despite logging what looks like a normal night's sleep, a mismatch that puzzled doctors for years before better diagnostic tools became widely available.

Sleep quality is also heavily influenced by lifestyle factors that many people underestimate. Consuming caffeine even six hours before bedtime can measurably reduce the amount of deep sleep a person gets, since caffeine's effects last far longer than most people realize. Exposure to bright screens in the hour before sleep can delay the release of melatonin, the hormone that signals to the body that it's time to rest, pushing back the onset of sleep and shortening the overall cycle count for the night. Room temperature matters as well; research suggests a slightly cool bedroom, generally between 16 and 19 degrees Celsius, supports deeper sleep than a warm one.

Wearable sleep trackers have made this distinction between quantity and quality more visible to the average consumer than ever before, with many devices now estimating time spent in each sleep stage. While these consumer devices are not as precise as clinical sleep studies, researchers note they have at least succeeded in shifting public conversation away from a narrow focus on hours slept and toward a broader understanding of what actually makes sleep restorative.`,
        questions: [
          {
            q: "According to the passage, what has traditional public health advice about sleep focused on?",
            options: [
              "Sleep quality exclusively",
              "A single number: eight hours of sleep per night",
              "The temperature of the bedroom",
              "The use of wearable sleep trackers",
            ],
            correct: 1,
            explain:
              "The passage opens by stating traditional advice has centered on a single number: eight hours per night.",
          },
          {
            q: "What happens during deep sleep, according to the passage?",
            options: [
              "Memory consolidation occurs primarily.",
              "The body performs physical repair work, including muscle recovery and immune strengthening.",
              "Dreams occur most vividly.",
              "Blood pressure rises sharply.",
            ],
            correct: 1,
            explain:
              "The passage states deep sleep is when the body performs much of its physical repair work, including muscle recovery and immune system strengthening.",
          },
          {
            q: "What is REM sleep closely associated with?",
            options: [
              "Muscle recovery",
              "Memory consolidation and emotional processing",
              "Immune system strengthening",
              "Lowering body temperature",
            ],
            correct: 1,
            explain:
              "The passage states REM sleep is closely associated with memory consolidation and emotional processing.",
          },
          {
            q: "What is sleep apnea, as described in the passage?",
            options: [
              "A disorder in which breathing repeatedly stops and starts during sleep",
              "A condition causing excessive dreaming",
              "A disorder that only affects children",
              "A condition caused by drinking too much caffeine",
            ],
            correct: 0,
            explain:
              "The passage defines sleep apnea as a disorder in which breathing repeatedly stops and starts during sleep, sometimes dozens of times per hour.",
          },
          {
            q: "Why did undiagnosed sleep apnea puzzle doctors for years, according to the passage?",
            options: [
              "Because sufferers often appeared to log a normal night's sleep yet reported feeling exhausted",
              "Because it only affects people who sleep too much",
              "Because no treatment existed at all",
              "Because it was confused with caffeine sensitivity",
            ],
            correct: 0,
            explain:
              "The passage describes a mismatch that puzzled doctors: sufferers report exhaustion despite what looks like a normal night's sleep, due to undiagnosed sleep apnea.",
          },
          {
            q: "How can caffeine consumed six hours before bedtime affect sleep, according to the passage?",
            options: [
              "It has no measurable effect at that distance from bedtime.",
              "It can measurably reduce the amount of deep sleep a person gets.",
              "It only affects REM sleep, not deep sleep.",
              "It improves sleep quality significantly.",
            ],
            correct: 1,
            explain:
              "The passage states that consuming caffeine even six hours before bedtime can measurably reduce the amount of deep sleep a person gets.",
          },
          {
            q: "What effect does bright screen exposure before bed have, according to the passage?",
            options: [
              "It increases melatonin release immediately.",
              "It can delay melatonin release, pushing back sleep onset and shortening overall cycle count.",
              "It has no effect on sleep hormones.",
              "It only affects people over age 50.",
            ],
            correct: 1,
            explain:
              "The passage explains that bright screens can delay melatonin release, pushing back sleep onset and shortening the number of sleep cycles for the night.",
          },
          {
            q: "What room temperature range does research suggest supports deeper sleep?",
            options: ["25–28 degrees Celsius", "20–24 degrees Celsius", "16–19 degrees Celsius", "10–15 degrees Celsius"],
            correct: 2,
            explain:
              "The passage states research suggests a slightly cool bedroom, generally between 16 and 19 degrees Celsius, supports deeper sleep than a warm one.",
          },
          {
            q: "What contribution have wearable sleep trackers made, according to the passage?",
            options: [
              "They have replaced clinical sleep studies entirely.",
              "They have shifted public conversation toward understanding what makes sleep restorative, despite being less precise than clinical studies.",
              "They have proven sleep quality is unimportant.",
              "They have eliminated the need for sleep at all.",
            ],
            correct: 1,
            explain:
              "The passage states that while wearable trackers are less precise than clinical studies, they have succeeded in shifting public conversation toward a broader understanding of restorative sleep.",
          },
        ],
      },
      {
        id: "t4_r4",
        partLabel: "Part 4",
        name: "Reading for Viewpoints",
        instructions:
          "Read the passage, which presents differing viewpoints, then answer the questions.",
        suggestedMinutes: 14,
        passageTitle: "Should High Schools Start Later in the Morning?",
        passage: `A proposal to shift high school start times from 8:00 a.m. to 9:15 a.m. has become a heated topic at Ridgemont School District board meetings, drawing passionate arguments from parents, students, teachers, and researchers alike.

Dr. Farid Behrouz, a sleep researcher who has advised the board, strongly supports the change. "Adolescent biology shifts sleep-wake cycles later during the teenage years. It's not laziness, it's biology," he explains. He cites multiple studies showing that districts which delayed start times saw measurable improvements in student attendance, grades, and even reductions in car accidents involving teen drivers, who researchers believe were previously driving to school while dangerously sleep-deprived. "We're essentially asking teenagers to function at their biological equivalent of 5 a.m., and then we wonder why so many struggle to stay awake in first period," he adds.

Parent association leader Colette Marchetti opposes the proposed change, citing logistical concerns for working families. "A later start time means a later end time, which throws off after-school sports schedules, part-time jobs, and childcare arrangements for younger siblings who still need to be picked up from elementary school," she argues. She also points out that bus routes are often shared between elementary and high schools, and shifting one schedule without the other could require the district to purchase additional buses, a cost she believes hasn't been fully accounted for in the proposal.

High school teacher Marcus Whitfield offers a mixed perspective grounded in his classroom experience. "I've seen firsthand how exhausted my first-period students look, and I don't doubt the research," he says. However, he worries about the transition period. "If we don't also adjust after-school tutoring, club schedules, and coordinate with neighboring districts for shared sports leagues, we could create as many problems as we solve." He suggests the board consider a phased pilot, perhaps starting with a single grade level, and gathering a full year of attendance and grade data before extending the change district-wide.

The school board chair has acknowledged the competing concerns and proposed forming a joint committee, including representatives from transportation, athletics, and childcare stakeholders, to develop an implementation plan before any final vote, which is now expected to be delayed until at least the following school year.`,
        questions: [
          {
            q: "What is Dr. Behrouz's main argument for shifting start times later?",
            options: [
              "Teenagers are naturally lazy and need to be pushed harder.",
              "Adolescent biology shifts sleep-wake cycles later, and delayed start times have shown measurable benefits.",
              "It will reduce the school district's budget.",
              "It is required by new government regulations.",
            ],
            correct: 1,
            explain:
              "Dr. Behrouz argues that adolescent biology shifts sleep-wake cycles later, not due to laziness, and cites studies showing improvements in attendance, grades, and reduced car accidents.",
          },
          {
            q: "What specific improvements does Dr. Behrouz cite from districts that delayed start times?",
            options: [
              "Improved attendance, grades, and reduced teen driver car accidents",
              "Lower property taxes",
              "Increased school funding from the government",
              "Reduced need for school buses",
            ],
            correct: 0,
            explain:
              "Dr. Behrouz cites studies showing measurable improvements in student attendance, grades, and reductions in car accidents involving teen drivers.",
          },
          {
            q: "What is Colette Marchetti's main concern about the proposed change?",
            options: [
              "That it will improve student grades too much",
              "Logistical concerns for working families, including after-school schedules and childcare",
              "That sleep research is entirely inaccurate",
              "That teachers will refuse to adapt",
            ],
            correct: 1,
            explain:
              "Marchetti argues a later start time creates logistical problems for working families, disrupting after-school sports, part-time jobs, and childcare arrangements.",
          },
          {
            q: "What specific transportation issue does Marchetti raise?",
            options: [
              "That buses are too old to be rerouted",
              "That bus routes shared between elementary and high schools could require purchasing additional buses",
              "That the district has no buses at all",
              "That bus drivers are opposed to the change",
            ],
            correct: 1,
            explain:
              "Marchetti points out that bus routes are often shared between elementary and high schools, and shifting one schedule without the other could require additional buses, an unaccounted-for cost.",
          },
          {
            q: "What does Marcus Whitfield say about the sleep research?",
            options: [
              "He completely dismisses it as inaccurate.",
              "He does not doubt it, based on his classroom observations of exhausted students.",
              "He has never heard of it.",
              "He believes it only applies to elementary students.",
            ],
            correct: 1,
            explain:
              "Whitfield says he has seen firsthand how exhausted his first-period students look and does not doubt the research.",
          },
          {
            q: "What is Whitfield's main worry about implementing the change?",
            options: [
              "That students will become too well-rested",
              "That without adjusting related schedules and coordinating with other districts, the change could create as many problems as it solves",
              "That the research is entirely fabricated",
              "That parents will boycott the schools",
            ],
            correct: 1,
            explain:
              "Whitfield worries that without adjusting tutoring, club schedules, and coordinating with neighboring districts on shared sports leagues, the change could create as many problems as it solves.",
          },
          {
            q: "What does Whitfield suggest the board consider?",
            options: [
              "Immediately applying the change to all grade levels",
              "A phased pilot starting with a single grade level, gathering a year of data before expanding",
              "Cancelling the proposal permanently",
              "Letting individual teachers decide their own start times",
            ],
            correct: 1,
            explain:
              "Whitfield suggests a phased pilot, starting with a single grade level, and gathering a full year of attendance and grade data before extending the change district-wide.",
          },
          {
            q: "What has the school board chair proposed in response to the competing concerns?",
            options: [
              "Cancelling the proposal entirely",
              "Forming a joint committee with transportation, athletics, and childcare stakeholders to develop an implementation plan",
              "Holding an immediate final vote",
              "Delegating the decision entirely to Dr. Behrouz",
            ],
            correct: 1,
            explain:
              "The final paragraph states the board chair proposed forming a joint committee including transportation, athletics, and childcare stakeholders to develop an implementation plan.",
          },
          {
            q: "When is the final vote now expected to occur?",
            options: [
              "Immediately, within the week",
              "Delayed until at least the following school year",
              "It has already taken place",
              "In exactly one month",
            ],
            correct: 1,
            explain:
              "The final paragraph states the vote is now expected to be delayed until at least the following school year.",
          },
          {
            q: "Which statement best summarizes the overall passage?",
            options: [
              "All parties fully agree the change should happen immediately.",
              "The passage presents supporting, opposing, and mixed viewpoints on delaying school start times, moving toward a collaborative planning process.",
              "The proposal has already been implemented successfully.",
              "Only the researcher's viewpoint is presented in the passage.",
            ],
            correct: 1,
            explain:
              "The passage presents Dr. Behrouz in favor, Marchetti opposed, and Whitfield offering a mixed view, ending with the board proposing a joint committee rather than an immediate decision.",
          },
        ],
      },
    ],
  };

  window.__readingTests = window.__readingTests || [];
  window.__readingTests.push(test);
})();
