// Reading Practice Test 8 — original content modeled on the official CELPIP-General format
// (Part 1: 11 blanks, Part 2: 8 questions, Part 3: 9 questions, Part 4: 10 questions — 38 total).
// Part 1 blanks are rendered as inline drop-downs directly inside the reply text (true cloze format),
// using the ___(n)___ markers below.

(function () {
  const test = {
    testNumber: 8,
    parts: [
      {
        id: "t8_r1",
        partLabel: "Part 1",
        name: "Reading Correspondence",
        instructions:
          "Read the email below, then read the reply. Some words in the reply are missing. Choose the best option to fill each numbered blank — the blanks appear directly in the reply text, just like on the real test.",
        suggestedMinutes: 16,
        passageTitle: "Original Email",
        passage: `From: Marcus Webb, Property Manager
To: All Tenants, Building C, Sunview Apartments
Subject: Scheduled Water Shut-Off for Pipe Repairs

Dear Tenants,

Please be advised that the water supply to Building C will be shut off on Thursday, January 15th, from 9:00 a.m. to approximately 3:00 p.m., while our maintenance crew repairs a section of corroded pipe in the basement. This will affect all units in the building, including both cold and hot water lines.

We recommend filling a few containers with water the night before for drinking, cooking, and basic hygiene needs during the shut-off. Building staff will be on-site throughout the repair and will notify residents by text message once water service has been restored.

If you have a medical device or health condition that requires uninterrupted water access, please contact the management office as soon as possible so we can discuss alternative arrangements.

We apologize for the inconvenience and appreciate your understanding.

Sincerely,
Marcus Webb
Property Manager`,
        replyTitle: "Reply (fill in each numbered blank)",
        replyTemplate: [
          "Dear Mr. Webb,",
          "Thank you for the ___(1)___ regarding Thursday's shut-off. I live in unit 4B and wanted to ask a few questions before then.",
          "First, will the shut-off ___(2)___ the laundry room in the basement, since I was planning to do a load of laundry that morning?",
          "Second, I work from home and rely on my kettle throughout the day — will there be any way to ___(3)___ a small amount of water in advance through the building staff, in case my containers run low?",
          "Third, since the repair is taking place in the basement, could pipes on the upper floors be ___(4)___ during the work, or is the repair fully isolated to that one section?",
          "Fourth, I noticed the notice didn't say whether the shut-off might need to be ___(5)___ if the repair takes longer than expected, and I'd like to plan accordingly.",
          "I would like to ___(6)___ whether hot water specifically will return at the same time as cold water, or whether the hot water tank might take longer to refill afterward.",
          "Fifth, will building staff be ___(7)___ near the entrance that afternoon in case residents have questions once the work is finished?",
          "I would also like to ___(8)___ that the building post a printed notice on each floor, since not everyone checks text messages regularly during the day.",
          "Finally, could you please ___(9)___ that Thursday's date hasn't changed, since I want to make sure I fill containers on the correct night?",
          "I appreciate the ___(10)___ you've given tenants, and I understand these repairs are sometimes unavoidable. Please let me know if there's anything I can do to help the day go ___(11)___.",
          "Sincerely,",
          "Leila Haddad, Unit 4B",
        ],
        blanks: [
          {
            num: 1,
            options: ["notice", "invoice", "complaint", "apology"],
            correct: 0,
            explain:
              "Leila is thanking Mr. Webb for informing tenants in advance — this refers back to the original email, which was a 'notice' about the water shut-off.",
          },
          {
            num: 2,
            options: ["affect", "sell", "paint", "ignore"],
            correct: 0,
            explain:
              "Since the whole building's water supply is being shut off, Leila is reasonably asking whether this will 'affect' (impact) the laundry room as well.",
          },
          {
            num: 3,
            options: ["reserve", "cancel", "spill", "refuse"],
            correct: 0,
            explain:
              "Leila wants staff to set aside or arrange a small amount of water for her in advance — 'reserve' fits this request for something to be held for later use.",
          },
          {
            num: 4,
            options: ["disturbed", "sold", "painted", "praised"],
            correct: 0,
            explain:
              "Leila is asking whether the basement repair might unintentionally impact plumbing on other floors — 'disturbed' fits a question about unwanted side effects on the pipes.",
          },
          {
            num: 5,
            options: ["extended", "cancelled", "forgotten", "sold"],
            correct: 0,
            explain:
              "Leila is asking whether the shut-off period might need to last longer than planned — 'extended' is the correct word for lengthening a scheduled time period.",
          },
          {
            num: 6,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Leila is asking Mr. Webb to verify a fact about the timing of hot water's return — 'confirm' fits a request for a definite answer.",
          },
          {
            num: 7,
            options: ["stationed", "fired", "ignored", "sold"],
            correct: 0,
            explain:
              "Leila is asking whether staff will be positioned near the entrance to help residents — 'stationed' is the natural word for someone assigned to remain at a particular location.",
          },
          {
            num: 8,
            options: ["suggest", "delete", "forbid", "ignore"],
            correct: 0,
            explain:
              "Leila is politely proposing an idea (a printed notice) — 'suggest' is the appropriate verb for offering a recommendation in formal correspondence.",
          },
          {
            num: 9,
            options: ["verify", "deny", "cancel", "delay"],
            correct: 0,
            explain:
              "Leila wants Mr. Webb to double-check that the date is still accurate — 'verify' fits a request to confirm that information is correct.",
          },
          {
            num: 10,
            options: ["consideration", "complaint", "invoice", "warning"],
            correct: 0,
            explain:
              "'Consideration' refers to thoughtfulness toward others' needs, matching Leila's appreciation for how tenants' circumstances were taken into account.",
          },
          {
            num: 11,
            options: ["smoothly", "loudly", "slowly", "incorrectly"],
            correct: 0,
            explain:
              "Leila is offering to help the process succeed without problems — 'go smoothly' is the standard collocation for a process happening without difficulty.",
          },
        ],
      },
      {
        id: "t8_r2",
        partLabel: "Part 2",
        name: "Reading to Apply a Diagram",
        instructions:
          "Study the information below, then answer the questions by applying the details shown.",
        suggestedMinutes: 13,
        passageTitle: "Fairview Public Library — Weekly Event Calendar & Meeting Room Booking Policy",
        diagramHtml: `
        <table class="diagram-table">
          <thead><tr><th>Event</th><th>Day</th><th>Time</th><th>Location</th><th>Age Group</th></tr></thead>
          <tbody>
            <tr><td>Toddler Storytime</td><td>Monday</td><td>10:00–10:30 a.m.</td><td>Children's Corner</td><td>Ages 0–3</td></tr>
            <tr><td>Homework Help Drop-In</td><td>Tuesday & Thursday</td><td>3:30–5:00 p.m.</td><td>Study Room B</td><td>Ages 6–12</td></tr>
            <tr><td>Teen Writers' Circle</td><td>Wednesday</td><td>4:00–5:30 p.m.</td><td>Meeting Room A</td><td>Ages 13–18</td></tr>
            <tr><td>Book Club: Coffee & Chapters</td><td>First Friday of the month</td><td>6:00–7:30 p.m.</td><td>Meeting Room A</td><td>Adults</td></tr>
            <tr><td>Job Search Workshop</td><td>Saturday</td><td>11:00 a.m.–12:30 p.m.</td><td>Meeting Room B</td><td>Adults</td></tr>
          </tbody>
        </table>
        <table class="diagram-table">
          <thead><tr><th>Room</th><th>Capacity</th><th>Max Booking Length</th><th>Advance Booking</th><th>Fee</th></tr></thead>
          <tbody>
            <tr><td>Meeting Room A</td><td>20 people</td><td>2 hours</td><td>14 days ahead</td><td>Free for library card holders</td></tr>
            <tr><td>Meeting Room B</td><td>12 people</td><td>2 hours</td><td>7 days ahead</td><td>Free for library card holders</td></tr>
            <tr><td>Study Room B</td><td>4 people</td><td>1 hour</td><td>Same-day only</td><td>Free</td></tr>
            <tr><td>Community Hall</td><td>60 people</td><td>4 hours</td><td>30 days ahead</td><td>$25 non-refundable fee</td></tr>
          </tbody>
        </table>
        <p class="diagram-note">Note: Rooms already reserved for a scheduled library event (see calendar) cannot be double-booked by patrons. Community Hall bookings require approval from the branch manager at least 5 business days before the event.</p>
      `,
        questions: [
          {
            q: "A parent wants to bring their 2-year-old to a library program. Which event should they attend?",
            options: [
              "Homework Help Drop-In",
              "Toddler Storytime",
              "Teen Writers' Circle",
              "Job Search Workshop",
            ],
            correct: 1,
            explain:
              "Toddler Storytime is listed for ages 0–3, which matches a 2-year-old, unlike the other events which target older age groups.",
          },
          {
            q: "A patron wants to book Meeting Room A for a community group of 25 people. What is the problem?",
            options: [
              "Meeting Room A only holds 20 people, so the group exceeds capacity",
              "Meeting Room A cannot be booked by patrons at all",
              "Meeting Room A requires a $25 fee",
              "Meeting Room A is not available any day of the week",
            ],
            correct: 0,
            explain:
              "The table lists Meeting Room A's capacity as 20 people, so a group of 25 would exceed the room's limit.",
          },
          {
            q: "A student wants to reserve Study Room B for a group project meeting next Tuesday. How far in advance can they book it?",
            options: ["30 days ahead", "14 days ahead", "7 days ahead", "Same-day only"],
            correct: 3,
            explain:
              "The table specifies Study Room B can only be booked on the same day as the meeting, not in advance.",
          },
          {
            q: "Can a patron book Meeting Room A on the first Friday of the month from 6:00 to 7:30 p.m.?",
            options: [
              "Yes, as long as they book 14 days ahead",
              "No, because Book Club: Coffee & Chapters already occupies that room and time",
              "Yes, but only for adults",
              "No, Meeting Room A is never available on Fridays",
            ],
            correct: 1,
            explain:
              "The calendar shows Book Club: Coffee & Chapters uses Meeting Room A on the first Friday from 6:00–7:30 p.m., and the note states scheduled events cannot be double-booked.",
          },
          {
            q: "A community organization wants to host a 60-person fundraiser lasting 3 hours. Which space fits, and what is required?",
            options: [
              "Meeting Room A, free for cardholders",
              "Community Hall, requiring branch manager approval at least 5 business days ahead and a $25 fee",
              "Meeting Room B, no approval needed",
              "Study Room B, same-day booking only",
            ],
            correct: 1,
            explain:
              "Only the Community Hall holds 60 people and allows bookings up to 4 hours, and the note requires branch manager approval at least 5 business days ahead along with the $25 fee.",
          },
          {
            q: "A teenager wants to attend a writing-focused program. Which event and age group matches?",
            options: [
              "Homework Help Drop-In, ages 6–12",
              "Teen Writers' Circle, ages 13–18",
              "Book Club: Coffee & Chapters, adults",
              "Job Search Workshop, adults",
            ],
            correct: 1,
            explain:
              "Teen Writers' Circle is the writing-focused program and is listed for ages 13–18, matching a teenager.",
          },
          {
            q: "What is the maximum length of time a patron can book Meeting Room B for?",
            options: ["1 hour", "2 hours", "4 hours", "Unlimited"],
            correct: 1,
            explain: "The table lists Meeting Room B's maximum booking length as 2 hours.",
          },
          {
            q: "A patron submits a Community Hall booking request 3 business days before their event. What will happen?",
            options: [
              "The booking will be automatically approved",
              "The request does not meet the required 5-business-day notice for manager approval",
              "The fee will be waived as a courtesy",
              "The event will be moved to Meeting Room A automatically",
            ],
            correct: 1,
            explain:
              "The note requires Community Hall bookings to be approved by the branch manager at least 5 business days ahead, so a request made only 3 days in advance falls short of this requirement.",
          },
        ],
      },
      {
        id: "t8_r3",
        partLabel: "Part 3",
        name: "Reading for Information",
        instructions: "Read the passage, then answer the questions based on the information given.",
        suggestedMinutes: 14,
        passageTitle: "Why E-Bikes Are Reshaping Urban Commuting",
        passage: `A decade ago, electric bicycles were a niche product, associated mainly with recreational riders or people with mobility limitations. Today, e-bikes are among the fastest-growing categories in personal transportation, with sales in many cities now rivaling or even surpassing traditional bicycles.

Part of the appeal lies in how e-bikes change the practical calculus of commuting. A battery-assisted motor reduces the physical effort needed to climb hills or cover longer distances, making cycling a realistic option for commuters who might otherwise dismiss a bike ride as too exhausting or too far. Delivery workers have also adopted e-bikes rapidly, since the motor assistance allows them to complete more deliveries per shift without arriving at each stop overheated and fatigued.

City planners have taken notice. Several municipalities have expanded bike lane networks specifically in response to rising e-bike ridership, arguing that keeping these faster-moving bikes separated from both pedestrians and car traffic improves safety for everyone involved. Some cities have also introduced purchase subsidies, reasoning that every commuter who switches from a car to an e-bike represents one fewer vehicle contributing to congestion and emissions.

Not everyone views the trend so favorably. Pedestrian safety advocates have raised concerns about e-bikes traveling at higher speeds than traditional bicycles, sometimes exceeding 30 kilometers per hour, particularly on shared multi-use paths where cyclists and pedestrians occupy the same space. Several cities have responded by setting speed limits specific to multi-use paths or by requiring certain classes of more powerful e-bikes to stay on roads rather than pedestrian-heavy trails.

There are also safety questions specific to the batteries themselves. Lithium-ion battery packs, if damaged, improperly charged, or purchased from unregulated manufacturers, have occasionally caused fires, prompting some fire departments to issue public guidance on safe charging practices, such as avoiding overnight charging unattended and using only chargers designed for the specific battery model.

Despite these concerns, most transportation researchers expect e-bike adoption to keep climbing, particularly as battery costs continue to fall and cities continue investing in the infrastructure needed to accommodate them safely. Some researchers argue that e-bikes may end up doing more to reduce short-distance car trips than electric cars themselves, since e-bikes are cheaper, require no charging infrastructure beyond a standard outlet, and can often complete a short urban trip faster than a car stuck in traffic.

For city dwellers weighing whether to make the switch, most experts suggest test-riding several models first, since the weight, motor placement, and handling can vary considerably between brands and significantly affect comfort on longer routes.`,
        questions: [
          {
            q: "According to the passage, how has e-bike adoption changed over the past decade?",
            options: [
              "It has declined sharply",
              "Sales now rival or surpass traditional bicycles in many cities",
              "E-bikes remain a niche product only for people with mobility limitations",
              "E-bikes have been banned in most cities",
            ],
            correct: 1,
            explain:
              "The passage states e-bike sales in many cities now rival or even surpass traditional bicycles, a major shift from a decade ago.",
          },
          {
            q: "Why have delivery workers adopted e-bikes rapidly, according to the passage?",
            options: [
              "E-bikes are cheaper to purchase than regular bicycles",
              "Motor assistance allows more deliveries per shift without becoming overheated and fatigued",
              "Delivery companies require it by law",
              "E-bikes can carry more passengers",
            ],
            correct: 1,
            explain:
              "The passage states motor assistance allows delivery workers to complete more deliveries per shift without arriving overheated and fatigued.",
          },
          {
            q: "Why have some municipalities expanded bike lane networks?",
            options: [
              "To reduce the number of pedestrians",
              "In response to rising e-bike ridership, to separate faster bikes from pedestrians and cars",
              "Because bike lanes are cheaper than roads",
              "Because of a decline in bicycle sales",
            ],
            correct: 1,
            explain:
              "The passage states municipalities expanded bike lanes in response to rising e-bike ridership, to keep faster-moving bikes separated from pedestrians and cars.",
          },
          {
            q: "What is one reason some cities offer purchase subsidies for e-bikes?",
            options: [
              "To increase tax revenue",
              "Because every commuter who switches from a car represents one fewer vehicle contributing to congestion and emissions",
              "Because e-bike companies pay cities to do so",
              "To reduce the number of cyclists on the road",
            ],
            correct: 1,
            explain:
              "The passage states cities reason that every commuter who switches from a car to an e-bike represents one fewer vehicle contributing to congestion and emissions.",
          },
          {
            q: "What concern do pedestrian safety advocates raise?",
            options: [
              "E-bikes are too quiet to hear",
              "E-bikes travel at higher speeds than traditional bicycles, sometimes over 30 km/h, on shared paths",
              "E-bikes cannot be ridden in rain",
              "E-bikes require a special license",
            ],
            correct: 1,
            explain:
              "The passage states pedestrian safety advocates are concerned about e-bikes traveling at higher speeds, sometimes exceeding 30 kilometers per hour, on shared multi-use paths.",
          },
          {
            q: "How have some cities responded to concerns about e-bike speed on multi-use paths?",
            options: [
              "By banning all bicycles",
              "By setting path-specific speed limits or requiring powerful e-bikes to stay on roads",
              "By closing all multi-use paths permanently",
              "By requiring pedestrians to wear reflective vests",
            ],
            correct: 1,
            explain:
              "The passage states several cities have set speed limits specific to multi-use paths or required certain classes of more powerful e-bikes to stay on roads.",
          },
          {
            q: "What safety issue is associated with e-bike batteries?",
            options: [
              "They wear out too quickly to be useful",
              "Lithium-ion batteries can occasionally cause fires if damaged or improperly charged",
              "They are too heavy to lift",
              "They cannot hold a charge for more than an hour",
            ],
            correct: 1,
            explain:
              "The passage states lithium-ion battery packs, if damaged, improperly charged, or from unregulated manufacturers, have occasionally caused fires.",
          },
          {
            q: "What guidance have some fire departments issued regarding e-bike batteries?",
            options: [
              "Charge batteries only in direct sunlight",
              "Avoid overnight unattended charging and use chargers designed for the specific battery model",
              "Remove the battery before every ride",
              "Charge batteries only using a car battery charger",
            ],
            correct: 1,
            explain:
              "The passage states fire departments have advised avoiding overnight charging unattended and using only chargers designed for the specific battery model.",
          },
          {
            q: "According to some researchers, why might e-bikes reduce short-distance car trips more than electric cars?",
            options: [
              "E-bikes are more expensive than electric cars",
              "E-bikes are cheaper, need no special charging infrastructure, and can be faster than cars in traffic for short trips",
              "Electric cars are being banned in cities",
              "E-bikes have longer range than electric cars",
            ],
            correct: 1,
            explain:
              "The passage states e-bikes are cheaper, require no charging infrastructure beyond a standard outlet, and can often complete a short urban trip faster than a car stuck in traffic.",
          },
        ],
      },
      {
        id: "t8_r4",
        partLabel: "Part 4",
        name: "Reading for Viewpoints",
        instructions:
          "Read the passage, which presents differing viewpoints, then answer the questions.",
        suggestedMinutes: 14,
        passageTitle: "Should Single-Use Plastic Bags Be Banned?",
        passage: `As plastic waste accumulates in landfills and waterways, a growing number of municipalities have debated whether to ban single-use plastic shopping bags outright, and if so, what should replace them.

Councillor Simone Beaulieu has championed a proposed city-wide ban, citing environmental data. "We collected over four thousand plastic bags from our shoreline cleanup last summer alone," she says. "Reusable bags are not a burden — they're a small habit change with a large cumulative benefit." She points to a neighboring city that saw a sharp drop in bag litter within a year of implementing a similar ban, crediting a modest fee on paper bags for encouraging shoppers to bring their own reusable totes rather than simply switching to a different disposable option.

Grocery store owner Felix Nakamura supports reducing plastic waste in principle but worries about the practical burden on small retailers. "Larger chains can absorb the cost of switching packaging or subsidizing reusable bags for customers. A corner store like mine operates on thinner margins," he explains. He is particularly concerned about customers who arrive without a bag and forget one regularly, arguing that a ban without an affordable fallback option could simply push customers toward competitors who still offer some kind of bag, even if less convenient than plastic.

Environmental economist Dr. Naomi Okonkwo, who has studied bag bans in several jurisdictions, offers a more nuanced view. "The evidence on bans alone is mixed," she notes. "Some studies find that when plastic bags are banned without a fee on paper alternatives, consumption of paper bags increases so much that the environmental benefit shrinks considerably, since paper production has its own significant carbon footprint." She argues that pairing a ban with a fee on any disposable bag, rather than banning plastic exclusively, tends to produce the clearest reduction in overall bag consumption, since it nudges shoppers toward reusable bags rather than simply substituting one disposable material for another.

Beaulieu says the current proposal under consideration would include such a fee on paper bags, addressing at least part of Dr. Okonkwo's concern. Nakamura remains cautious, saying he would like to see a longer transition period and possibly a small-business exemption or subsidy before the ban takes full effect. The city council is expected to review a revised version of the proposal, incorporating a paper bag fee and an extended small-business transition period, at its next session.`,
        questions: [
          {
            q: "What is Councillor Beaulieu's main argument for banning single-use plastic bags?",
            options: [
              "Reusable bags are too expensive for most shoppers",
              "A shoreline cleanup collected thousands of plastic bags, and reusable habits offer a large cumulative benefit",
              "Plastic bags are needed for recycling programs",
              "Banning bags will increase city tax revenue",
            ],
            correct: 1,
            explain:
              "Beaulieu cites collecting over four thousand plastic bags from a shoreline cleanup and argues reusable habits offer a large cumulative benefit.",
          },
          {
            q: "What does Beaulieu credit for the drop in bag litter in a neighboring city?",
            options: [
              "A complete ban on all bags, including reusable ones",
              "A modest fee on paper bags encouraging reusable bag use",
              "A total ban on grocery shopping",
              "Free plastic bags for low-income shoppers",
            ],
            correct: 1,
            explain:
              "Beaulieu credits a modest fee on paper bags for encouraging shoppers to bring their own reusable totes.",
          },
          {
            q: "What is Felix Nakamura's main concern about the proposed ban?",
            options: [
              "That reusable bags are bad for the environment",
              "That small retailers may struggle to absorb costs compared to larger chains",
              "That plastic bags should be mandatory",
              "That the ban doesn't go far enough",
            ],
            correct: 1,
            explain:
              "Nakamura says larger chains can absorb switching costs, but a corner store like his operates on thinner margins.",
          },
          {
            q: "What does Nakamura worry could happen to customers who forget a bag?",
            options: [
              "They would be banned from the store",
              "They might be pushed toward competitors offering some kind of bag",
              "They would receive a free reusable bag automatically",
              "They would be charged a criminal fine",
            ],
            correct: 1,
            explain:
              "Nakamura argues a ban without an affordable fallback option could push customers toward competitors who still offer some kind of bag.",
          },
          {
            q: "According to Dr. Okonkwo, what happens when plastic bags are banned without a fee on paper alternatives?",
            options: [
              "Paper bag use decreases dramatically",
              "Paper bag consumption can increase so much that the environmental benefit shrinks",
              "No bags are used at all",
              "Plastic bag production increases instead",
            ],
            correct: 1,
            explain:
              "Dr. Okonkwo notes that without a fee on paper alternatives, paper bag consumption can increase so much that the environmental benefit shrinks considerably.",
          },
          {
            q: "What does Dr. Okonkwo argue produces the clearest reduction in overall bag consumption?",
            options: [
              "Banning plastic bags exclusively with no fee",
              "Pairing a ban with a fee on any disposable bag, including paper",
              "Offering free paper bags to replace plastic ones",
              "Allowing unlimited plastic bag use",
            ],
            correct: 1,
            explain:
              "Dr. Okonkwo argues pairing a ban with a fee on any disposable bag, rather than banning plastic exclusively, produces the clearest reduction in overall consumption.",
          },
          {
            q: "How does the current proposal address Dr. Okonkwo's concern, according to the passage?",
            options: [
              "It ignores her research entirely",
              "It would include a fee on paper bags as well",
              "It bans reusable bags",
              "It removes all fees on bags",
            ],
            correct: 1,
            explain:
              "Beaulieu says the current proposal would include a fee on paper bags, addressing at least part of Dr. Okonkwo's concern.",
          },
          {
            q: "What does Nakamura say he would like to see before the ban takes full effect?",
            options: [
              "An immediate ban with no transition period",
              "A longer transition period and possibly a small-business exemption or subsidy",
              "A complete cancellation of the proposal",
              "A ban on reusable bags instead",
            ],
            correct: 1,
            explain:
              "Nakamura says he would like to see a longer transition period and possibly a small-business exemption or subsidy.",
          },
          {
            q: "What is the city council expected to do next, according to the passage?",
            options: [
              "Reject the proposal outright",
              "Review a revised version with a paper bag fee and extended small-business transition period",
              "Implement the ban immediately without changes",
              "Delay any decision indefinitely",
            ],
            correct: 1,
            explain:
              "The final sentence states the city council is expected to review a revised proposal incorporating a paper bag fee and extended small-business transition period.",
          },
          {
            q: "Which best summarizes the overall passage?",
            options: [
              "All parties fully oppose any bag ban",
              "The passage presents supporting, concerned, and research-based perspectives on a proposed plastic bag ban",
              "The ban has already failed",
              "Only economists were consulted on the issue",
            ],
            correct: 1,
            explain:
              "The passage presents three distinct viewpoints — Beaulieu in favor, Nakamura concerned about small business impact, and Dr. Okonkwo offering research-based nuance — without a final resolution beyond an upcoming council review.",
          },
        ],
      },
    ],
  };

  window.__readingTests = window.__readingTests || [];
  window.__readingTests.push(test);
})();
