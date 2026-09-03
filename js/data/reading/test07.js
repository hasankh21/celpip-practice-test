// Reading Practice Test 7 — original content modeled on the official CELPIP-General format
// (Part 1: 11 blanks, Part 2: 8 questions, Part 3: 9 questions, Part 4: 10 questions — 38 total).
// Part 1 blanks are rendered as inline drop-downs directly inside the reply text (true cloze format),
// using the ___(n)___ markers below.

(function () {
  const test = {
    testNumber: 7,
    parts: [
      {
        id: "t7_r1",
        partLabel: "Part 1",
        name: "Reading Correspondence",
        instructions:
          "Read the email below, then read the reply. Some words in the reply are missing. Choose the best option to fill each numbered blank — the blanks appear directly in the reply text, just like on the real test.",
        suggestedMinutes: 16,
        passageTitle: "Original Email",
        passage: `From: Grace Whitfield, Facilities Coordinator
To: All Program Members, Elmwood Community Center
Subject: Parking Lot Resurfacing Project

Dear Members,

I'm writing to inform you that the community center's main parking lot will be closed for resurfacing from Monday, November 3rd through Friday, November 7th. During this period, please use the overflow lot on Birch Street, located about two blocks north of the center.

Members attending evening classes should allow extra time to walk from the overflow lot, as it is not currently lit after dark. We are arranging for a temporary lighting unit to be installed by November 3rd, and a staff member will be posted at the main entrance each evening from 5 to 8 p.m. to escort anyone who would feel safer walking with company.

If you have accessibility needs and require closer parking, please contact the front desk so we can arrange a designated space near the side entrance.

Thank you for your patience while we complete this improvement project.

Best regards,
Grace Whitfield
Facilities Coordinator`,
        replyTitle: "Reply (fill in each numbered blank)",
        replyTemplate: [
          "Dear Ms. Whitfield,",
          "Thank you for letting us know ___(1)___ of time. I attend the Tuesday evening pottery class, so I have a few questions about the overflow arrangements.",
          "First, will the temporary lighting unit be ___(2)___ before the first evening class on November 3rd, or is there a chance it might not be ready in time?",
          "Second, since I sometimes ___(3)___ home right after class around 8:15 p.m., will the staff escort still be available a little past the 8 p.m. cutoff, or should I plan to leave earlier that week?",
          "Third, I have a knee injury that makes the two-block walk from Birch Street difficult, so I would like to ___(4)___ a space near the side entrance, as you mentioned for accessibility needs.",
          "Fourth, will the overflow lot be ___(5)___ to prevent vehicle break-ins, since it isn't part of the center's regular property?",
          "I also wanted to ask whether the resurfacing work is ___(6)___ to be completed strictly within the five days, or whether delays are possible if the weather doesn't cooperate.",
          "Fifth, could you ___(7)___ me whether the main entrance will remain open as usual during the project, since the notice only mentions the parking lot?",
          "I would also like to ___(8)___ that the center place a temporary sign at the Birch Street lot directing new visitors, since it might be hard for first-time guests to find on their own.",
          "Finally, will members who normally pay for reserved parking receive a ___(9)___ for the days the main lot is unavailable?",
          "I appreciate the ___(10)___ the center has taken to plan around members' safety and accessibility. Please let me know if there is anything I can do to help this transition go ___(11)___.",
          "Sincerely,",
          "Dana Okafor, Pottery Program Member",
        ],
        blanks: [
          {
            num: 1,
            options: ["ahead", "behind", "front", "back"],
            correct: 0,
            explain:
              "'Ahead of time' is the natural collocation meaning 'in advance.' The email was sent before the resurfacing began, so this fits the context of advance notice.",
          },
          {
            num: 2,
            options: ["installed", "sold", "cancelled", "ignored"],
            correct: 0,
            explain:
              "The email states a temporary lighting unit is being arranged for installation by November 3rd, so Dana is reasonably asking whether it will be 'installed' in time.",
          },
          {
            num: 3,
            options: ["head", "sell", "paint", "forget"],
            correct: 0,
            explain:
              "'Head home' is a common phrase meaning to leave for home. It fits the context of Dana leaving class and walking toward the parking area.",
          },
          {
            num: 4,
            options: ["request", "refuse", "cancel", "avoid"],
            correct: 0,
            explain:
              "The email explicitly invites residents with accessibility needs to contact the front desk to arrange closer parking, so Dana is asking to 'request' such a space.",
          },
          {
            num: 5,
            options: ["monitored", "sold", "painted", "ignored"],
            correct: 0,
            explain:
              "Dana is asking about security measures against break-ins in a lot that isn't part of the center's regular property — 'monitored' fits a question about surveillance or supervision.",
          },
          {
            num: 6,
            options: ["expected", "forbidden", "cancelled", "forgotten"],
            correct: 0,
            explain:
              "Dana is asking whether the five-day timeline is the anticipated schedule — 'expected to be completed' is the natural collocation for a planned timeline.",
          },
          {
            num: 7,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Dana is asking Ms. Whitfield to verify a fact (whether the entrance stays open) — 'confirm' fits a request for a definite answer.",
          },
          {
            num: 8,
            options: ["suggest", "delete", "forbid", "ignore"],
            correct: 0,
            explain:
              "Dana is politely proposing an idea (a temporary sign) — 'suggest' is the appropriate verb for offering a recommendation in formal correspondence.",
          },
          {
            num: 9,
            options: ["refund", "invoice", "warning", "fine"],
            correct: 0,
            explain:
              "Dana is asking whether members who pay for reserved parking will get money back for days they can't use it — 'refund' matches this context of reimbursement.",
          },
          {
            num: 10,
            options: ["steps", "complaints", "invoices", "apologies"],
            correct: 0,
            explain:
              "'Steps taken' is the standard collocation for actions a person or organization has carried out toward a goal, fitting Dana's appreciation for the planning effort.",
          },
          {
            num: 11,
            options: ["smoothly", "loudly", "slowly", "incorrectly"],
            correct: 0,
            explain:
              "Dana is offering to help the process succeed without problems — 'go smoothly' is the standard collocation for a process happening without difficulty.",
          },
        ],
      },
      {
        id: "t7_r2",
        partLabel: "Part 2",
        name: "Reading to Apply a Diagram",
        instructions:
          "Study the information below, then answer the questions by applying the details shown.",
        suggestedMinutes: 13,
        passageTitle: "Skyline Airport Shuttle — Routes, Schedule & Fare Options",
        diagramHtml: `
        <table class="diagram-table">
          <thead><tr><th>Route</th><th>Stops</th><th>Frequency</th><th>Travel Time</th><th>Fare</th></tr></thead>
          <tbody>
            <tr><td>Downtown Express</td><td>Airport → Central Station → Downtown Hotel District</td><td>Every 30 min</td><td>45 min</td><td>$12</td></tr>
            <tr><td>North Loop</td><td>Airport → Riverside Mall → North Loop Business Park</td><td>Every 60 min</td><td>55 min</td><td>$15</td></tr>
            <tr><td>University Connector</td><td>Airport → Tech Campus → State University</td><td>Every 45 min</td><td>40 min</td><td>$10</td></tr>
            <tr><td>Late Night Direct</td><td>Airport → Downtown Hotel District only</td><td>Every 90 min (11 p.m.–5 a.m. only)</td><td>35 min</td><td>$18</td></tr>
          </tbody>
        </table>
        <table class="diagram-table">
          <thead><tr><th>Pass Type</th><th>Price</th><th>Details</th></tr></thead>
          <tbody>
            <tr><td>Single Ride</td><td>As listed above</td><td>Valid for one route, one direction</td></tr>
            <tr><td>Round-Trip Pass</td><td>10% off combined one-way fares</td><td>Valid 14 days</td></tr>
            <tr><td>Group Pass (4+ riders)</td><td>20% off per person</td><td>Must book together</td></tr>
            <tr><td>Frequent Flyer Card holders</td><td>Free single ride</td><td>Downtown Express only, one per calendar month</td></tr>
          </tbody>
        </table>
        <p class="diagram-note">Note: All shuttles depart from Ground Transportation Level 1, Bay 3. Children under 5 ride free when accompanied by a paying adult. Reservations required for Late Night Direct at least 2 hours before departure.</p>
      `,
        questions: [
          {
            q: "A family of two adults and one 4-year-old child wants to take the Downtown Express. How much will they pay in total?",
            options: ["$12", "$24", "$18", "$36"],
            correct: 1,
            explain:
              "The fare is $12 per adult, and the note states children under 5 ride free with a paying adult. Two adults at $12 each totals $24.",
          },
          {
            q: "A business traveler wants to reach North Loop Business Park. Which route should they take, and how long does the trip take?",
            options: [
              "North Loop route, 55 minutes",
              "Downtown Express, 45 minutes",
              "University Connector, 40 minutes",
              "Late Night Direct, 35 minutes",
            ],
            correct: 0,
            explain:
              "The table shows North Loop Business Park is a stop on the North Loop route, which has a listed travel time of 55 minutes.",
          },
          {
            q: "A group of 5 friends wants to travel together on the University Connector. Which pricing option should they use?",
            options: [
              "Single Ride at $10 each",
              "Round-Trip Pass",
              "Group Pass, since they qualify with 4 or more riders",
              "Frequent Flyer discount",
            ],
            correct: 2,
            explain:
              "The Group Pass applies to 4 or more riders booking together and offers a 20% discount per person, making it the best fit for a group of 5.",
          },
          {
            q: "A passenger lands at 1 a.m. and needs to get to the Downtown Hotel District. Which shuttle can they take, and what must they do beforehand?",
            options: [
              "Downtown Express, no reservation needed",
              "Late Night Direct, must reserve at least 2 hours ahead",
              "North Loop, arrive early",
              "University Connector, pay in cash only",
            ],
            correct: 1,
            explain:
              "At 1 a.m., only Late Night Direct operates (11 p.m.–5 a.m.), and the note specifies reservations are required at least 2 hours before departure.",
          },
          {
            q: "Where do all shuttles depart from, according to the diagram?",
            options: [
              "Ground Transportation Level 1, Bay 3",
              "Level 2 Departures curb",
              "Long-term parking Lot C",
              "The main terminal entrance",
            ],
            correct: 0,
            explain:
              "The note explicitly states that all shuttles depart from Ground Transportation Level 1, Bay 3.",
          },
          {
            q: "A Frequent Flyer Card holder wants a free ride to State University. Is this possible?",
            options: [
              "Yes, on any route",
              "No, the free ride only applies to Downtown Express",
              "Yes, but only twice a month",
              "No, Frequent Flyer holders never get free rides",
            ],
            correct: 1,
            explain:
              "The table specifies the free single ride for Frequent Flyer Card holders applies only to the Downtown Express, not the University Connector.",
          },
          {
            q: "Which route takes passengers to a university campus?",
            options: ["Downtown Express", "North Loop", "University Connector", "Late Night Direct"],
            correct: 2,
            explain:
              "The stops for University Connector include State University, unlike the other three routes.",
          },
          {
            q: "A couple wants to buy a Round-Trip Pass on the North Loop route, where the regular one-way fare is $15. Approximately how much will the round trip cost per person after the 10% discount?",
            options: ["$27", "$30", "$24", "$33"],
            correct: 0,
            explain:
              "A round trip at the regular fare would be $15 × 2 = $30. A 10% discount removes $3, leaving a total of $27 per person.",
          },
        ],
      },
      {
        id: "t7_r3",
        partLabel: "Part 3",
        name: "Reading for Information",
        instructions: "Read the passage, then answer the questions based on the information given.",
        suggestedMinutes: 14,
        passageTitle: "The Hidden Network Beneath the Forest Floor",
        passage: `For centuries, foresters assumed that trees competed with one another purely as isolated individuals, each fighting alone for sunlight, water, and soil nutrients. Research over the past three decades has complicated this picture considerably. Beneath nearly every healthy forest lies an extensive web of thread-like fungal filaments, known as mycorrhizal networks, that connect the root systems of neighboring trees, sometimes across species lines.

The relationship between trees and these fungi is fundamentally an exchange. The fungus extends its fine filaments, called hyphae, far beyond the reach of a tree's own roots, drawing in water and mineral nutrients such as phosphorus and nitrogen from soil the tree could not otherwise access. In return, the tree supplies the fungus with sugars produced through photosynthesis, since fungi cannot photosynthesize on their own. This arrangement benefits both partners, which is why ecologists describe it as mutualistic rather than parasitic.

What has surprised researchers most, however, is evidence that these fungal networks can also link separate trees together, allowing carbon, water, and even chemical warning signals to pass from one tree to another through the shared fungal threads. In one well-known set of experiments, researchers tagged carbon atoms in one tree with a traceable isotope and later detected that same carbon inside a neighboring tree of a different species, suggesting that resources genuinely moved between them via the fungal connections.

Some scientists have proposed that older, larger trees — sometimes called "hub" or "mother" trees because of how many fungal connections radiate outward from their root systems — may preferentially send surplus nutrients toward smaller, struggling seedlings nearby, including their own offspring. If accurate, this would suggest a level of cooperation within forests that goes well beyond simple competition for resources.

Not every researcher accepts every claim made about these networks, however. Critics point out that some popularized accounts have overstated how deliberate or organized this resource-sharing actually is, cautioning that fungi are, after all, pursuing their own reproductive interests rather than acting as neutral messengers for the trees. Movement of nutrients through a shared network, they argue, could sometimes be an incidental side effect of the fungus's own foraging behavior rather than evidence of intentional tree-to-tree cooperation.

Regardless of how the debate is eventually settled, the discovery of these underground connections has already reshaped forest management practices in some regions. Logging operations increasingly try to preserve a scattering of large, well-connected trees within a harvested area, on the theory that doing so helps the surrounding fungal network — and the seedlings that depend on it — recover more quickly after disturbance.`,
        questions: [
          {
            q: "What is the main function mycorrhizal fungi provide to trees, according to the passage?",
            options: [
              "Producing sugars through photosynthesis for the tree",
              "Extending reach to draw in water and nutrients from soil the tree's roots cannot access",
              "Protecting trees from insect damage",
              "Producing oxygen for the surrounding forest",
            ],
            correct: 1,
            explain:
              "The passage states the fungus extends its hyphae far beyond a tree's own roots, drawing in water and mineral nutrients the tree could not otherwise access.",
          },
          {
            q: "Why do ecologists describe the tree-fungus relationship as mutualistic?",
            options: [
              "Because only the fungus benefits",
              "Because only the tree benefits",
              "Because both partners exchange benefits",
              "Because the relationship harms both partners",
            ],
            correct: 2,
            explain:
              "The passage explains this is an exchange: the fungus gains sugars, and the tree gains access to water and nutrients, so both partners benefit.",
          },
          {
            q: "What did researchers discover when they tagged carbon atoms in one tree with a traceable isotope?",
            options: [
              "The carbon disappeared entirely",
              "The same carbon was later detected inside a neighboring tree of a different species",
              "The tree died shortly afterward",
              "The fungus absorbed all of the carbon permanently",
            ],
            correct: 1,
            explain:
              "The passage describes exactly this experiment, noting the tagged carbon was later found in a neighboring tree of a different species.",
          },
          {
            q: "What is a 'hub' or 'mother' tree, as described in the passage?",
            options: [
              "A tree that produces the most seeds",
              "A young sapling with no fungal connections",
              "An older, larger tree with many fungal connections radiating outward",
              "A tree that has been removed from the forest",
            ],
            correct: 2,
            explain:
              "The passage defines hub or mother trees as older, larger trees with many fungal connections radiating outward from their root systems.",
          },
          {
            q: "According to some scientists, what might mother trees do with surplus nutrients?",
            options: [
              "Store them permanently and never release them",
              "Preferentially send them toward smaller, struggling nearby seedlings",
              "Sell them to other forests",
              "Release them into the atmosphere",
            ],
            correct: 1,
            explain:
              "The passage states some scientists propose that mother trees may preferentially send surplus nutrients toward smaller, struggling seedlings nearby.",
          },
          {
            q: "What criticism do some researchers raise about claims of forest cooperation?",
            options: [
              "They argue mycorrhizal networks do not exist at all",
              "They caution some accounts overstate how deliberate the resource-sharing is",
              "They argue trees have no root systems",
              "They argue fungi never interact with trees",
            ],
            correct: 1,
            explain:
              "The passage states critics point out that some popularized accounts have overstated how deliberate or organized the resource-sharing actually is.",
          },
          {
            q: "What alternative explanation do critics offer for nutrient movement through the network?",
            options: [
              "It could be an incidental side effect of the fungus's own foraging behavior",
              "It is always fully intentional",
              "It never actually happens",
              "It's caused by tree roots merging directly",
            ],
            correct: 0,
            explain:
              "The passage states critics argue the movement of nutrients could sometimes be an incidental side effect of the fungus's own foraging behavior.",
          },
          {
            q: "How has the discovery of mycorrhizal networks affected forest management, according to the passage?",
            options: [
              "It has ended commercial logging entirely",
              "Logging operations increasingly preserve some large, well-connected trees to help the network recover",
              "It has had no measurable effect on practices",
              "It has led to the removal of all fungi before logging",
            ],
            correct: 1,
            explain:
              "The final paragraph states logging operations increasingly try to preserve a scattering of large, well-connected trees to help the fungal network recover.",
          },
          {
            q: "What do hyphae allow the fungus to do?",
            options: [
              "Photosynthesize independently",
              "Extend far beyond a tree's roots to draw in water and mineral nutrients",
              "Produce seeds for the tree",
              "Replace the tree's root system entirely",
            ],
            correct: 1,
            explain:
              "The passage describes hyphae as fine filaments that extend far beyond a tree's own roots, allowing the fungus to draw in water and nutrients.",
          },
        ],
      },
      {
        id: "t7_r4",
        partLabel: "Part 4",
        name: "Reading for Viewpoints",
        instructions:
          "Read the passage, which presents differing viewpoints, then answer the questions.",
        suggestedMinutes: 14,
        passageTitle: "Is a Four-Day Work Week the Future?",
        passage: `As several companies experiment with compressed schedules, the idea of a four-day work week — typically 32 hours over four days instead of 40 hours over five, for the same pay — has moved from a fringe proposal to a genuine topic of debate among employers and employees alike.

Renata Ford, human resources director at a mid-sized software firm that piloted the schedule for six months, is an enthusiastic supporter. "We tracked productivity closely, and it barely dropped at all, while sick days fell by almost a third," she says. She credits the extra day off with giving employees more time to rest, handle personal errands, and return to work more focused. "People were less likely to spend Monday morning exhausted and distracted," she adds, noting that employee retention also improved noticeably during the trial.

Not all business leaders share her optimism. Victor Alaniz, who runs a chain of retail stores, argues that a four-day week simply doesn't translate to every industry. "My employees can't get their work done in four days if the store still needs to be staffed for customers six days a week," he says. He worries that businesses relying on continuous customer service or manufacturing schedules would need to hire significantly more staff to cover the missing hours, raising costs beyond what smaller companies can absorb.

Economist Priya Deshmukh has studied several pilot programs across different sectors and urges caution before drawing broad conclusions. "The industries where this has worked best tend to be office-based, knowledge-work environments where output isn't tied directly to hours physically staffed," she explains. She notes that in her research, hourly-wage retail and healthcare settings saw far more mixed results, with some locations reporting increased strain on remaining staff during the fifth day. "It isn't that a shorter week is a bad idea," she says, "but treating it as one policy that fits every workplace equally is probably a mistake."

Ford acknowledges the limits of her own experience but maintains that even a partial shift — such as allowing some departments to try compressed schedules while others remain on a traditional week — could offer benefits worth exploring. Alaniz remains skeptical that his industry will ever adopt the model widely, though he says he would reconsider if a competitor found a workable staffing solution first. For now, most economists agree that broader adoption will likely depend on trial results from a wider range of industries than the mostly white-collar pilots conducted so far.`,
        questions: [
          {
            q: "What is Renata Ford's main argument in favor of the four-day work week?",
            options: [
              "It reduced company profits significantly",
              "Productivity barely dropped while sick days and retention improved",
              "It eliminated the need for weekends entirely",
              "It only benefits retail businesses",
            ],
            correct: 1,
            explain:
              "Ford states that productivity barely dropped, sick days fell by almost a third, and retention improved during the trial.",
          },
          {
            q: "What specific data point does Ford mention about sick days?",
            options: [
              "They increased by a third",
              "They fell by almost a third",
              "They stayed exactly the same",
              "They doubled during the trial",
            ],
            correct: 1,
            explain: "Ford says sick days fell by almost a third during the six-month pilot.",
          },
          {
            q: "What is Victor Alaniz's main concern about a four-day work week?",
            options: [
              "That employees would spend too much time resting",
              "That his retail stores need continuous staffing six days a week",
              "That software companies shouldn't offer any days off",
              "That his employees are already underpaid",
            ],
            correct: 1,
            explain:
              "Alaniz says his employees can't get work done in four days if the store still needs to be staffed for customers six days a week.",
          },
          {
            q: "According to Alaniz, what would businesses like his need to do to cover the missing hours?",
            options: [
              "Close permanently",
              "Hire significantly more staff, raising costs",
              "Reduce customer service hours to zero",
              "Automate all positions immediately",
            ],
            correct: 1,
            explain:
              "Alaniz worries businesses would need to hire significantly more staff to cover the missing hours, raising costs beyond what smaller companies can absorb.",
          },
          {
            q: "What does economist Priya Deshmukh caution against?",
            options: [
              "Ever considering a shorter work week",
              "Treating the four-day week as one policy that fits every workplace equally",
              "Studying pilot programs at all",
              "Only researching office environments",
            ],
            correct: 1,
            explain:
              "Deshmukh says a shorter week isn't a bad idea, but treating it as one policy that fits every workplace equally is probably a mistake.",
          },
          {
            q: "According to Deshmukh, which types of environments have seen the best results with compressed schedules?",
            options: [
              "Hourly-wage retail settings",
              "Manufacturing environments",
              "Office-based, knowledge-work environments",
              "Healthcare settings",
            ],
            correct: 2,
            explain:
              "Deshmukh explains that office-based, knowledge-work environments, where output isn't tied directly to hours physically staffed, have seen the best results.",
          },
          {
            q: "What did Deshmukh's research find about hourly-wage retail and healthcare settings?",
            options: [
              "They saw uniformly excellent results",
              "They saw far more mixed results, with increased strain on some staff",
              "They were not studied at all",
              "They immediately adopted four-day weeks nationwide",
            ],
            correct: 1,
            explain:
              "Deshmukh notes hourly-wage retail and healthcare settings saw far more mixed results, with some locations reporting increased strain during the fifth day.",
          },
          {
            q: "What compromise does Ford suggest might be worth exploring?",
            options: [
              "Ending the pilot program immediately",
              "Allowing some departments to try compressed schedules while others stay on a traditional week",
              "Requiring all industries to adopt the same schedule",
              "Reducing pay for a four-day week",
            ],
            correct: 1,
            explain:
              "Ford maintains that a partial shift, letting some departments try compressed schedules while others remain traditional, could offer benefits.",
          },
          {
            q: "Under what circumstance does Alaniz say he might reconsider his position?",
            options: [
              "If the government mandated it",
              "If a competitor found a workable staffing solution first",
              "If his employees quit",
              "If Ford's company failed",
            ],
            correct: 1,
            explain:
              "Alaniz says he would reconsider if a competitor found a workable staffing solution first.",
          },
          {
            q: "What do most economists agree broader adoption will likely depend on, according to the passage?",
            options: [
              "A single national law",
              "Trial results from a wider range of industries than mostly white-collar pilots",
              "Complete elimination of retail jobs",
              "Immediate universal adoption without further study",
            ],
            correct: 1,
            explain:
              "The final sentence states most economists agree broader adoption will depend on trial results from a wider range of industries than the mostly white-collar pilots conducted so far.",
          },
        ],
      },
    ],
  };

  window.__readingTests = window.__readingTests || [];
  window.__readingTests.push(test);
})();
