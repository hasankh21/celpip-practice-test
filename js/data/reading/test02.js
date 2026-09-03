// Reading Practice Test 2 — original content modeled on the official CELPIP-General format
// (Part 1: 11 blanks, Part 2: 8 questions, Part 3: 9 questions, Part 4: 10 questions — 38 total).
// Part 1 blanks are rendered as inline drop-downs directly inside the reply text (true cloze format),
// using the ___(n)___ markers below.

(function () {
  const test = {
    testNumber: 2,
    parts: [
      {
        id: "t2_r1",
        partLabel: "Part 1",
        name: "Reading Correspondence",
        instructions:
          "Read the email below, then read the reply. Some words in the reply are missing. Choose the best option to fill each numbered blank — the blanks appear directly in the reply text, just like on the real test.",
        suggestedMinutes: 16,
        passageTitle: "Original Email",
        passage: `From: Corey Blackwood, Member Services Manager
To: Dana Whitfield
Subject: Your Recent Membership Freeze Request

Dear Ms. Whitfield,

Thank you for contacting Summit Peak Fitness regarding your request to freeze your membership. I'm writing to confirm that your account has been placed on hold starting September 15th, as you requested, due to your upcoming relocation for work.

While your membership is frozen, you will not be charged the regular monthly fee, but a small $5 administrative fee will apply each month to keep your account and workout history on file. Your freeze can last up to three months before the account is automatically reactivated at your previous rate.

Please note that any personal training sessions you had prepaid will remain valid for use once your membership resumes, and they do not expire during the freeze period.

If your plans change or you have any questions, please contact us at your convenience.

Best regards,
Corey Blackwood
Member Services Manager
Summit Peak Fitness`,
        replyTitle: "Reply (fill in each numbered blank)",
        replyTemplate: [
          "Dear Mr. Blackwood,",
          "Thank you for confirming the freeze on ___(1)___ notice. I wanted to ask a few follow-up questions before the freeze begins.",
          "First, since I don't yet know exactly how long my relocation will take, is it possible to ___(2)___ the freeze by an extra month if three months isn't quite enough?",
          "Second, will the $5 administrative fee be ___(3)___ automatically from the card currently on file, or do I need to arrange a separate payment method?",
          "Third, I still have four personal training sessions left. Could you please ___(4)___ that these sessions will indeed carry over once my membership is reactivated?",
          "I would also like to know whether my current membership rate is ___(5)___ once the freeze ends, or whether new members' pricing would apply instead.",
          "Fourth, is it possible to ___(6)___ the reactivation date slightly, in case my move takes a week or two longer than planned?",
          "I also wondered whether the gym could ___(7)___ my account number the same as before, since I'd rather not deal with a new login for the mobile app.",
          "I would like to ___(8)___ that the gym send a reminder email about two weeks before the freeze is set to expire, so I'm not caught off guard.",
          "Finally, could you please ___(9)___ whether the administrative fee applies even if I choose to shorten the freeze period myself?",
          "I appreciate the ___(10)___ your team has shown throughout this process, and I hope the transition goes ___(11)___ for both of us.",
          "Sincerely,",
          "Dana Whitfield",
        ],
        blanks: [
          {
            num: 1,
            options: ["short", "long", "no", "false"],
            correct: 0,
            explain:
              "\"Short notice\" is the standard collocation meaning the request was made and processed quickly. Dana is thanking Corey for acting promptly on her recent request.",
          },
          {
            num: 2,
            options: ["extend", "shrink", "cancel", "sell"],
            correct: 0,
            explain:
              "Dana is asking about adding extra time to the freeze period — \"extend\" means to make something longer in duration, matching her request for an extra month.",
          },
          {
            num: 3,
            options: ["deducted", "returned", "invented", "hidden"],
            correct: 0,
            explain:
              "The fee is a charge, so it would be \"deducted\" (taken out) from the card on file — this fits the context of an automatic monthly payment.",
          },
          {
            num: 4,
            options: ["deny", "confirm", "erase", "postpone"],
            correct: 1,
            explain:
              "Dana wants Corey to verify a fact stated in the original email (that sessions carry over) — \"confirm\" is the correct verb for asking someone to verify information.",
          },
          {
            num: 5,
            options: ["preserved", "forgotten", "doubled", "cancelled",],
            correct: 0,
            explain:
              "Dana is asking whether her current rate will be kept/maintained rather than replaced — \"preserved\" fits the idea of keeping something unchanged.",
          },
          {
            num: 6,
            options: ["delay", "erase", "publish", "duplicate"],
            correct: 0,
            explain:
              "Dana wants the reactivation date pushed back slightly if her move takes longer — \"delay\" means to postpone something to a later time, matching her request.",
          },
          {
            num: 7,
            options: ["keep", "change", "sell", "delete"],
            correct: 0,
            explain:
              "Dana wants her account number to remain the same rather than be reassigned — \"keep\" fits her preference to avoid a new login for the app.",
          },
          {
            num: 8,
            options: ["forbid", "suggest", "ignore", "delete"],
            correct: 1,
            explain:
              "Dana is politely proposing an idea (a reminder email) — \"suggest\" is the appropriate verb for offering a recommendation in formal correspondence.",
          },
          {
            num: 9,
            options: ["hide", "clarify", "delay", "deny"],
            correct: 1,
            explain:
              "Dana is asking Corey to make a point clearer — \"clarify\" fits a request for more detail about whether the fee applies in a specific situation.",
          },
          {
            num: 10,
            options: ["flexibility", "silence", "invoice", "complaint"],
            correct: 0,
            explain:
              "Dana is thanking Corey's team for accommodating her changing circumstances and multiple requests — \"flexibility\" refers to a willingness to adapt, fitting this context.",
          },
          {
            num: 11,
            options: ["smoothly", "badly", "loudly", "rarely"],
            correct: 0,
            explain:
              "Dana is expressing hope that the process will happen without difficulty for both her and the gym — \"go smoothly\" is the standard collocation for a process without problems.",
          },
        ],
      },
      {
        id: "t2_r2",
        partLabel: "Part 2",
        name: "Reading to Apply a Diagram",
        instructions:
          "Study the information below, then answer the questions by applying the details shown.",
        suggestedMinutes: 13,
        passageTitle: "Lakeshore Transit — Route 12 Weekday & Weekend Schedule",
        diagramHtml: `
        <table class="diagram-table">
          <thead><tr><th>Stop</th><th>Weekday AM Peak (6–9 a.m.)</th><th>Weekday Midday</th><th>Weekday PM Peak (4–7 p.m.)</th><th>Weekend</th></tr></thead>
          <tbody>
            <tr><td>Harborview Terminal</td><td>Every 10 min</td><td>Every 20 min</td><td>Every 10 min</td><td>Every 30 min</td></tr>
            <tr><td>Elm Street Station</td><td>Every 10 min</td><td>Every 20 min</td><td>Every 10 min</td><td>Every 30 min</td></tr>
            <tr><td>College Avenue</td><td>Every 15 min</td><td>Every 20 min</td><td>Every 15 min</td><td>Every 30 min</td></tr>
            <tr><td>Riverside Mall</td><td>Every 15 min</td><td>Every 20 min</td><td>Every 15 min</td><td>Every 45 min</td></tr>
            <tr><td>North Industrial Park</td><td>Every 10 min</td><td>No service</td><td>Every 10 min</td><td>No service</td></tr>
          </tbody>
        </table>
        <table class="diagram-table">
          <thead><tr><th>Fare Type</th><th>Single Ride</th><th>Day Pass</th><th>Monthly Pass</th><th>Eligibility</th></tr></thead>
          <tbody>
            <tr><td>Adult</td><td>$3.25</td><td>$9.00</td><td>$95.00</td><td>Ages 18–64</td></tr>
            <tr><td>Youth</td><td>$2.00</td><td>$6.00</td><td>$60.00</td><td>Ages 13–17</td></tr>
            <tr><td>Senior</td><td>$1.75</td><td>$5.00</td><td>$45.00</td><td>Ages 65+</td></tr>
            <tr><td>Child</td><td>Free</td><td>Free</td><td>N/A</td><td>Ages 12 and under, with paying adult</td></tr>
          </tbody>
        </table>
        <p class="diagram-note">Note: North Industrial Park service operates only during weekday peak hours, as it primarily serves shift workers. All fares must be paid with exact change or a reloadable transit card; the driver cannot provide change.</p>
      `,
        questions: [
          {
            q: "A factory worker needs to reach North Industrial Park for a shift starting at 1:00 p.m. on a Tuesday. Can they take Route 12 directly there?",
            options: [
              "Yes, buses run every 10 minutes at that time.",
              "No, North Industrial Park has no midday weekday service.",
              "Yes, but only on weekends.",
              "No, that stop has been permanently closed.",
            ],
            correct: 1,
            explain:
              "The table shows North Industrial Park has 'No service' during weekday midday hours, and the note confirms it only operates during weekday peak hours for shift workers.",
          },
          {
            q: "A family with two adults and a 9-year-old child wants to buy day passes for a Saturday outing. What is the total cost?",
            options: ["$18.00", "$27.00", "$24.00", "$9.00"],
            correct: 0,
            explain:
              "Two adult day passes cost $9.00 each ($18.00 total), and the child rides free since children 12 and under are free when accompanied by a paying adult.",
          },
          {
            q: "A 16-year-old student wants to travel from Elm Street Station to College Avenue every weekday for a month. Which fare option is most economical?",
            options: ["Adult Monthly Pass", "Youth Monthly Pass", "Senior Day Pass", "Child Single Ride"],
            correct: 1,
            explain:
              "The student is 16, which falls in the Youth eligibility range (13–17), so the Youth Monthly Pass at $60.00 is the correct and most economical option for daily travel.",
          },
          {
            q: "It is 5:30 p.m. on a Wednesday. How frequently do buses run between Harborview Terminal and Elm Street Station at this time?",
            options: ["Every 10 minutes", "Every 15 minutes", "Every 20 minutes", "Every 30 minutes"],
            correct: 0,
            explain:
              "5:30 p.m. on a weekday falls within the PM Peak window (4–7 p.m.), during which both Harborview Terminal and Elm Street Station have buses every 10 minutes.",
          },
          {
            q: "A rider wants to pay their fare with a $20 bill on board the bus. What will happen?",
            options: [
              "The driver will provide change.",
              "The driver cannot provide change, since exact fare or a transit card is required.",
              "The ride will be free.",
              "The fare will be doubled as a penalty.",
            ],
            correct: 1,
            explain:
              "The note explicitly states that all fares must be paid with exact change or a reloadable transit card, and the driver cannot provide change.",
          },
          {
            q: "A 70-year-old wants to ride from Riverside Mall to College Avenue once on a weekend. Which fare applies, and how much?",
            options: ["Adult, $3.25", "Senior, $1.75", "Youth, $2.00", "Senior, $9.00"],
            correct: 1,
            explain:
              "At age 70, the rider qualifies for the Senior fare category (ages 65+), and a single ride under that category costs $1.75.",
          },
          {
            q: "Which stop has the least frequent weekend service?",
            options: ["Harborview Terminal", "Elm Street Station", "College Avenue", "Riverside Mall"],
            correct: 3,
            explain:
              "The schedule shows Riverside Mall has weekend buses every 45 minutes, less frequent than the every-30-minute service at the other listed stops.",
          },
          {
            q: "Why does North Industrial Park have limited service compared to other stops?",
            options: [
              "It is scheduled for permanent closure.",
              "It primarily serves shift workers during weekday peak hours.",
              "It only allows senior riders.",
              "It has no bus shelter.",
            ],
            correct: 1,
            explain:
              "The note explains that North Industrial Park service operates only during weekday peak hours because it primarily serves shift workers, unlike the other stops with all-day service.",
          },
        ],
      },
      {
        id: "t2_r3",
        partLabel: "Part 3",
        name: "Reading for Information",
        instructions: "Read the passage, then answer the questions based on the information given.",
        suggestedMinutes: 14,
        passageTitle: "The Hidden Lives of Migratory Songbirds",
        passage: `Every autumn, billions of songbirds abandon their summer breeding grounds in North America and journey thousands of kilometres south, some travelling as far as the rainforests of South America. For centuries, the exact mechanics of this migration puzzled scientists, but recent advances in tracking technology have finally begun to reveal the extraordinary details of this annual journey.

One of the most surprising discoveries involves timing. Many songbirds migrate almost entirely at night, a behavior researchers believe evolved for several reasons. Nighttime air is typically cooler and calmer than daytime air, reducing the energy a bird must expend to stay airborne and helping prevent overheating during sustained flight. Darkness also offers some protection from predators such as hawks, which hunt primarily by sight during daylight hours. Migrating birds typically fly for several hours after sunset, then descend before dawn to rest and refuel in whatever habitat they happen to find below.

This reliance on finding suitable stopover habitat has become a growing concern for conservationists. A bird that flies all night may exhaust nearly half its body fat reserves and desperately needs a safe patch of forest or wetland to recover before continuing. Unfortunately, urban development has fragmented many of the traditional stopover sites along major migration corridors, forcing exhausted birds to either travel further before resting or settle for lower-quality habitat with less food and more predators.

Researchers have also identified a phenomenon called "light pollution disorientation." Artificial lighting from cities can confuse migrating birds, drawing them off their intended flight paths and, in the worst cases, causing fatal collisions with illuminated buildings. Some cities have responded by launching "lights out" programs, encouraging office buildings to dim or turn off non-essential lighting during peak migration weeks in spring and fall. Early data from participating cities suggests these programs can meaningfully reduce collision deaths.

Beyond city lights, climate change presents another layer of difficulty. Many songbird species have evolved to time their migration so that their arrival at breeding grounds coincides precisely with the peak abundance of insects, which are essential for feeding their chicks. As spring temperatures shift earlier in many regions, some insect populations are emerging sooner, while the birds' migration timing, cued partly by day length rather than temperature, has not always shifted at the same pace. This growing mismatch, sometimes called a "phenological mismatch," can leave chicks hatching after the peak food supply has already passed, reducing their chances of survival.

Despite these mounting pressures, songbird migration remains one of the most remarkable feats of endurance in the animal kingdom, and ongoing research continues to uncover new details about how these small travelers navigate such immense distances.`,
        questions: [
          {
            q: "According to the passage, why do many songbirds migrate primarily at night?",
            options: [
              "Nighttime air is cooler and calmer, and darkness offers some protection from predators.",
              "Birds can see the stars better at night for navigation.",
              "Airports are closed at night, reducing collision risk.",
              "Insects are more abundant at night.",
            ],
            correct: 0,
            explain:
              "The passage states nighttime migration reduces energy expenditure due to cooler, calmer air and offers protection from predators like hawks that hunt by sight during the day.",
          },
          {
            q: "What happens to a bird's body fat reserves during a long night of flight?",
            options: [
              "They remain completely unchanged.",
              "They may be reduced by nearly half.",
              "They double in preparation for landing.",
              "They convert entirely into muscle.",
            ],
            correct: 1,
            explain:
              "The passage states a bird that flies all night may exhaust nearly half its body fat reserves and needs a safe place to recover.",
          },
          {
            q: "How has urban development affected traditional stopover sites?",
            options: [
              "It has expanded them significantly.",
              "It has fragmented many of them along migration corridors.",
              "It has had no measurable effect.",
              "It has relocated them to rural areas.",
            ],
            correct: 1,
            explain:
              "The passage explains that urban development has fragmented many traditional stopover sites, forcing birds to fly further or settle for lower-quality habitat.",
          },
          {
            q: "What is \"light pollution disorientation\"?",
            options: [
              "A disease affecting bird eyesight",
              "A phenomenon where artificial city lighting confuses migrating birds and can lead to fatal collisions",
              "A navigation technique birds use intentionally",
              "A term for daytime migration",
            ],
            correct: 1,
            explain:
              "The passage defines this as artificial lighting from cities confusing migrating birds, drawing them off course, and sometimes causing fatal building collisions.",
          },
          {
            q: "What have some cities done in response to light pollution disorientation?",
            options: [
              "Banned all nighttime construction",
              "Launched 'lights out' programs encouraging dimmed lighting during peak migration weeks",
              "Required all birds to be tagged",
              "Built new stopover habitats downtown",
            ],
            correct: 1,
            explain:
              "The passage states some cities have launched 'lights out' programs encouraging office buildings to dim or turn off non-essential lighting during peak migration weeks.",
          },
          {
            q: "What is a \"phenological mismatch,\" as described in the passage?",
            options: [
              "A mismatch between a bird's feather colors and its habitat",
              "A gap between when chicks hatch and when peak insect food supply is available",
              "A disagreement among researchers about migration routes",
              "A mismatch between male and female migration timing",
            ],
            correct: 1,
            explain:
              "The passage describes this as a growing mismatch where chicks hatch after the peak food supply has passed, because insect emergence has shifted earlier while bird migration timing has not kept pace.",
          },
          {
            q: "According to the passage, what primarily cues birds' migration timing?",
            options: [
              "Temperature alone",
              "Day length, rather than temperature",
              "Insect population counts",
              "Random chance"
            ],
            correct: 1,
            explain:
              "The passage states migration timing is cued partly by day length rather than temperature, which is why it hasn't shifted at the same pace as earlier insect emergence.",
          },
          {
            q: "What do early results from 'lights out' programs suggest?",
            options: [
              "They have no measurable impact.",
              "They can meaningfully reduce collision deaths.",
              "They increase the number of collisions.",
              "They are too costly to continue.",
            ],
            correct: 1,
            explain:
              "The passage states that early data from participating cities suggests these programs can meaningfully reduce collision deaths.",
          },
          {
            q: "What overall impression does the passage leave about songbird migration?",
            options: [
              "It is a simple process well understood for centuries.",
              "It is a remarkable feat of endurance facing mounting modern pressures.",
              "It has been entirely solved by conservation efforts.",
              "It no longer occurs due to climate change.",
            ],
            correct: 1,
            explain:
              "The final paragraph describes migration as one of the most remarkable feats of endurance in the animal kingdom, while the passage as a whole discusses mounting pressures like habitat loss, light pollution, and climate change.",
          },
        ],
      },
      {
        id: "t2_r4",
        partLabel: "Part 4",
        name: "Reading for Viewpoints",
        instructions:
          "Read the passage, which presents differing viewpoints, then answer the questions.",
        suggestedMinutes: 14,
        passageTitle: "Should Companies Require Employees to Return to the Office Full-Time?",
        passage: `Four years after remote work became widespread, many companies are now debating whether to require employees to return to the office full-time. The issue has sparked heated discussion among executives, employees, and workplace researchers.

Vincent Alaric, CEO of a mid-sized software firm, believes a full return to the office is necessary for the company's long-term health. "Innovation happens in hallway conversations and spontaneous whiteboard sessions, not over video calls," he argues. He points to a noticeable drop in cross-team collaboration since his company shifted to a hybrid model, claiming that new employees in particular struggle to build relationships and absorb company culture without regular in-person contact. He has announced that, starting in January, all staff must work from the office five days a week.

Employee representative Farrah Osman strongly disagrees with a full return. "People proved during the pandemic that they could do their jobs just as well, if not better, from home," she says. She cites internal productivity metrics that stayed flat or improved during the fully remote period, and argues that a rigid five-day mandate ignores the real gains many employees made in work-life balance, particularly parents and those with long commutes. "Forcing everyone back five days a week isn't about productivity — it's about control," she states, adding that several skilled employees have already threatened to resign if the policy takes effect.

Workplace researcher Dr. Priya Nandakumar offers a more measured view, drawing on data from dozens of companies she has studied. "The evidence doesn't support either extreme," she explains. Her research suggests that hybrid arrangements, with two or three in-office days per week, tend to preserve most of the collaboration benefits Alaric describes while retaining much of the flexibility Osman champions. However, she cautions that hybrid models only succeed when in-office days are coordinated across teams. "If everyone comes in on different days, you get the downsides of both models and the benefits of neither," she notes. She recommends that companies considering a policy change pilot it with one department first and measure specific outcomes, such as employee retention and project completion times, before rolling it out company-wide.

Alaric has stated he is open to reviewing the policy after six months if retention numbers suffer, but insists that a trial period with mixed schedules "sends a confusing message" to staff about the company's expectations.`,
        questions: [
          {
            q: "What is Vincent Alaric's main reason for requiring a full return to the office?",
            options: [
              "He believes it will reduce company costs.",
              "He believes innovation and culture-building happen best through in-person contact.",
              "He wants to reduce the number of employees.",
              "He is required to by government regulation.",
            ],
            correct: 1,
            explain:
              "Alaric argues that innovation happens in hallway conversations and whiteboard sessions, and that new employees struggle to build relationships and absorb culture without in-person contact.",
          },
          {
            q: "What evidence does Farrah Osman cite to support her position?",
            options: [
              "A drop in cross-team collaboration",
              "Internal productivity metrics that stayed flat or improved during fully remote work",
              "A survey of new employees",
              "A study from a rival company",
            ],
            correct: 1,
            explain:
              "Osman cites internal productivity metrics that stayed flat or improved during the fully remote period as evidence that a full return isn't necessary.",
          },
          {
            q: "According to Osman, what is the real motivation behind the five-day mandate?",
            options: [
              "Improving productivity",
              "Control, rather than productivity",
              "Saving money on office space",
              "Meeting client demands",
            ],
            correct: 1,
            explain:
              "Osman states directly, \"Forcing everyone back five days a week isn't about productivity — it's about control.\"",
          },
          {
            q: "What does Dr. Nandakumar's research suggest about hybrid arrangements?",
            options: [
              "They fail in every case studied.",
              "Two or three in-office days per week tend to preserve most collaboration benefits while retaining flexibility.",
              "They only work for small companies.",
              "They are more expensive than full remote work.",
            ],
            correct: 1,
            explain:
              "Nandakumar's research suggests hybrid arrangements with two or three in-office days preserve most collaboration benefits while retaining much of the flexibility of remote work.",
          },
          {
            q: "According to Dr. Nandakumar, when do hybrid models fail to work well?",
            options: [
              "When employees are paid too much",
              "When in-office days are not coordinated across teams",
              "When companies are too small",
              "When employees have long commutes",
            ],
            correct: 1,
            explain:
              "Nandakumar cautions that hybrid models only succeed when in-office days are coordinated; otherwise, \"you get the downsides of both models and the benefits of neither.\"",
          },
          {
            q: "What does Dr. Nandakumar recommend companies do before rolling out a policy change company-wide?",
            options: [
              "Survey competitors",
              "Pilot the policy with one department and measure outcomes like retention and completion times",
              "Immediately apply it to all departments",
              "Wait five years before deciding",
            ],
            correct: 1,
            explain:
              "Nandakumar recommends piloting a policy change with one department first and measuring specific outcomes such as employee retention and project completion times.",
          },
          {
            q: "How has Alaric responded to the idea of a trial period with mixed schedules?",
            options: [
              "He fully supports it.",
              "He says it sends a confusing message about the company's expectations.",
              "He has already implemented one.",
              "He has resigned over the disagreement.",
            ],
            correct: 1,
            explain:
              "The passage states Alaric insists that a trial period with mixed schedules 'sends a confusing message' to staff about the company's expectations.",
          },
          {
            q: "What has Alaric said he is open to doing after six months?",
            options: [
              "Reviewing the policy if retention numbers suffer",
              "Immediately reversing the policy regardless of outcomes",
              "Increasing the mandate to six days a week",
              "Selling the company",
            ],
            correct: 0,
            explain:
              "The final paragraph states Alaric has stated he is open to reviewing the policy after six months if retention numbers suffer.",
          },
          {
            q: "What group does Osman say is particularly affected by a rigid five-day mandate?",
            options: [
              "Senior executives only",
              "Parents and those with long commutes",
              "New employees only",
              "Employees who live near the office",
            ],
            correct: 1,
            explain:
              "Osman argues the mandate ignores gains in work-life balance made by employees, particularly parents and those with long commutes.",
          },
          {
            q: "Which statement best summarizes the overall passage?",
            options: [
              "All three individuals agree that full remote work should continue permanently.",
              "The passage presents opposing executive and employee viewpoints alongside a researcher's more measured, evidence-based perspective.",
              "The company has already reversed its return-to-office policy.",
              "Only one viewpoint on the issue is presented.",
            ],
            correct: 1,
            explain:
              "The passage presents Alaric's pro-office-return view, Osman's pro-remote view, and Dr. Nandakumar's measured, data-based middle position, without a final resolution.",
          },
        ],
      },
    ],
  };

  window.__readingTests = window.__readingTests || [];
  window.__readingTests.push(test);
})();
