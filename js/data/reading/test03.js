// Reading Practice Test 3 — original content modeled on the official CELPIP-General format
// (Part 1: 11 blanks, Part 2: 8 questions, Part 3: 9 questions, Part 4: 10 questions — 38 total).
// Part 1 blanks are rendered as inline drop-downs directly inside the reply text (true cloze format),
// using the ___(n)___ markers below.

(function () {
  const test = {
    testNumber: 3,
    parts: [
      {
        id: "t3_r1",
        partLabel: "Part 1",
        name: "Reading Correspondence",
        instructions:
          "Read the email below, then read the reply. Some words in the reply are missing. Choose the best option to fill each numbered blank — the blanks appear directly in the reply text, just like on the real test.",
        suggestedMinutes: 16,
        passageTitle: "Original Email",
        passage: `From: Sandra Ibekwe, Registrar's Office
To: Marcus Fontaine
Subject: Fall Semester Course Registration Confirmation

Dear Mr. Fontaine,

This email confirms that your daughter, Lily Fontaine, has been successfully registered for the following courses at Cedar Grove Elementary for the upcoming fall semester: Grade 4 Homeroom, French Immersion, and the After-School Robotics Club.

Please note that the Robotics Club meets Tuesdays and Thursdays from 3:15 to 4:30 p.m. and requires a signed permission form, which must be submitted by August 25th. There is also a one-time $40 materials fee for the club, payable online or at the front office.

If Lily has any food allergies or medical conditions that staff should be aware of, please update her file through the parent portal before the first day of school on September 3rd.

Please let us know if you have any questions about the registration.

Warm regards,
Sandra Ibekwe
Registrar's Office
Cedar Grove Elementary`,
        replyTitle: "Reply (fill in each numbered blank)",
        replyTemplate: [
          "Dear Ms. Ibekwe,",
          "Thank you for the ___(1)___ regarding Lily's registration. I have a few questions before the semester begins.",
          "First, since I work until 4 p.m. most days, would it be possible to ___(2)___ someone else, like her grandmother, to pick her up after Robotics Club?",
          "Second, I noticed the permission form is due by August 25th. Could you please ___(3)___ whether it can be submitted a few days late, since we'll be travelling until August 27th?",
          "Third, regarding the $40 materials fee, is it possible to pay in two ___(4)___ instalments rather than all at once?",
          "I also wanted to ask whether the French Immersion class would ___(5)___ any additional homework beyond the regular homeroom workload.",
          "Fourth, I noticed the notice didn't mention whether Lily's homeroom teacher has already been ___(6)___, since we'd like to introduce ourselves before the first day.",
          "Could the school please ___(7)___ me a copy of the Robotics Club supply list, so I can purchase anything needed ahead of time?",
          "I would also like to ___(8)___ that the school consider offering a virtual option for parents who cannot attend the September orientation night in person.",
          "Finally, I updated Lily's allergy information on the portal, but could you please ___(9)___ that the cafeteria staff have received this update as well?",
          "I appreciate the ___(10)___ your office has provided so far, and I hope the school year gets off to a ___(11)___ start.",
          "Sincerely,",
          "Marcus Fontaine",
        ],
        blanks: [
          {
            num: 1,
            options: ["notice", "invoice", "complaint", "apology"],
            correct: 0,
            explain:
              "Marcus is thanking Ms. Ibekwe for the registration confirmation email — \"notice\" refers to a formal message informing someone of something, fitting the context of the original email.",
          },
          {
            num: 2,
            options: ["authorize", "forbid", "ignore", "punish"],
            correct: 0,
            explain:
              "Marcus wants to give permission for another person to pick Lily up — \"authorize\" means to formally give permission for someone to do something, matching this request.",
          },
          {
            num: 3,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Marcus is asking Ms. Ibekwe to verify whether late submission is acceptable — \"confirm\" fits a request for a definite answer to a yes/no question.",
          },
          {
            num: 4,
            options: ["separate", "identical", "cancelled", "hidden"],
            correct: 0,
            explain:
              "Marcus is asking about splitting the fee into two distinct payments — \"separate instalments\" is the natural collocation for individual, split payments made over time.",
          },
          {
            num: 5,
            options: ["require", "forbid", "delete", "sell"],
            correct: 0,
            explain:
              "Marcus is asking whether the French Immersion class would demand extra homework — \"require\" means to need or demand something, fitting this context of asking about workload.",
          },
          {
            num: 6,
            options: ["assigned", "fired", "cancelled", "forgotten"],
            correct: 0,
            explain:
              "Marcus wants to know if a teacher has been designated for Lily's homeroom — \"assigned\" means designated to a role, fitting the context of teacher placement.",
          },
          {
            num: 7,
            options: ["forbid", "send", "erase", "sell"],
            correct: 1,
            explain:
              "Marcus is asking for the supply list to be provided to him — \"send\" is the natural verb for delivering a document or list to someone by mail or email.",
          },
          {
            num: 8,
            options: ["suggest", "forbid", "ignore", "delete"],
            correct: 0,
            explain:
              "Marcus is politely proposing an idea (a virtual orientation option) — \"suggest\" is the appropriate verb for offering a recommendation in formal correspondence.",
          },
          {
            num: 9,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Marcus is asking Ms. Ibekwe to verify that the cafeteria staff received the allergy update — \"confirm\" fits a request for verification of a fact.",
          },
          {
            num: 10,
            options: ["support", "silence", "invoice", "complaint"],
            correct: 0,
            explain:
              "Marcus is thanking the registrar's office for its helpfulness throughout the registration process — \"support\" refers to assistance or help provided, fitting this appreciative context.",
          },
          {
            num: 11,
            options: ["smooth", "rough", "silent", "incorrect"],
            correct: 0,
            explain:
              "Marcus is expressing hope for a good beginning to the school year — \"smooth start\" is the standard collocation for a beginning without problems or difficulties.",
          },
        ],
      },
      {
        id: "t3_r2",
        partLabel: "Part 2",
        name: "Reading to Apply a Diagram",
        instructions:
          "Study the information below, then answer the questions by applying the details shown.",
        suggestedMinutes: 13,
        passageTitle: "Brightwood Community College — Continuing Education Course Catalog",
        diagramHtml: `
        <table class="diagram-table">
          <thead><tr><th>Course</th><th>Format</th><th>Duration</th><th>Cost</th><th>Prerequisite</th></tr></thead>
          <tbody>
            <tr><td>Intro to Bookkeeping</td><td>Online, self-paced</td><td>6 weeks</td><td>$180</td><td>None</td></tr>
            <tr><td>Advanced Excel for Business</td><td>In-person, evenings</td><td>4 weeks</td><td>$220</td><td>Intro to Bookkeeping or equivalent</td></tr>
            <tr><td>Conversational Spanish I</td><td>In-person, evenings</td><td>8 weeks</td><td>$260</td><td>None</td></tr>
            <tr><td>Conversational Spanish II</td><td>In-person, evenings</td><td>8 weeks</td><td>$260</td><td>Conversational Spanish I</td></tr>
            <tr><td>Digital Photography Basics</td><td>Hybrid (online + 2 in-person labs)</td><td>5 weeks</td><td>$195</td><td>None</td></tr>
            <tr><td>Project Management Essentials</td><td>Online, live sessions</td><td>6 weeks</td><td>$310</td><td>None</td></tr>
          </tbody>
        </table>
        <table class="diagram-table">
          <thead><tr><th>Discount Type</th><th>Reduction</th><th>Eligibility</th></tr></thead>
          <tbody>
            <tr><td>Senior (65+)</td><td>20% off</td><td>Valid photo ID showing age</td></tr>
            <tr><td>Alumni</td><td>15% off</td><td>Must have graduated from Brightwood</td></tr>
            <tr><td>Two-course bundle</td><td>10% off total</td><td>Register for two courses in the same term</td></tr>
            <tr><td>Early bird</td><td>$25 off</td><td>Register at least 3 weeks before start date</td></tr>
          </tbody>
        </table>
        <p class="diagram-note">Note: Discounts cannot be combined; only one discount may be applied per registration. All in-person evening courses require a minimum of 8 registrants to run.</p>
      `,
        questions: [
          {
            q: "A student wants to take Conversational Spanish II without having completed Spanish I. What must they do?",
            options: [
              "Nothing, there is no prerequisite.",
              "They cannot enroll until they complete Conversational Spanish I.",
              "They must take Advanced Excel first instead.",
              "They must be a senior citizen.",
            ],
            correct: 1,
            explain:
              "The catalog lists Conversational Spanish I as a prerequisite for Conversational Spanish II, so the student must complete Level I first.",
          },
          {
            q: "A 67-year-old retiree wants to register for Digital Photography Basics with a valid photo ID. What discount applies, and what is the final cost?",
            options: ["15% off, $165.75", "20% off, $156.00", "10% off, $175.50", "$25 off, $170.00"],
            correct: 1,
            explain:
              "The retiree qualifies for the Senior discount (20% off, ages 65+) with valid ID. 20% of $195 is $39, so $195 minus $39 equals $156.00.",
          },
          {
            q: "A Brightwood alumna wants to register for two courses in the same term, hoping to combine her alumni discount with the two-course bundle discount. Is this possible?",
            options: [
              "Yes, discounts can always be combined.",
              "No, only one discount may be applied per registration.",
              "Yes, but only for online courses.",
              "No, alumni are not eligible for any discounts.",
            ],
            correct: 1,
            explain:
              "The note explicitly states that discounts cannot be combined and only one discount may be applied per registration.",
          },
          {
            q: "Only 5 people register for Advanced Excel for Business, an in-person evening course. What will happen?",
            options: [
              "The course will run as scheduled.",
              "The course will not run, since a minimum of 8 registrants is required for in-person evening courses.",
              "The price will double for each registrant.",
              "The course will automatically move online.",
            ],
            correct: 1,
            explain:
              "The note states all in-person evening courses require a minimum of 8 registrants to run, so with only 5 registrants the course would not proceed.",
          },
          {
            q: "A student wants to take a course entirely from home with no in-person component and no live scheduled sessions. Which course fits best?",
            options: ["Intro to Bookkeeping", "Digital Photography Basics", "Project Management Essentials", "Conversational Spanish I"],
            correct: 0,
            explain:
              "Intro to Bookkeeping is listed as 'Online, self-paced,' meaning no in-person component and no fixed live sessions, unlike the hybrid photography course or the live-session project management course.",
          },
          {
            q: "A student registers exactly 3 weeks before Project Management Essentials begins to claim the early bird discount. What is the final price?",
            options: ["$285.00", "$279.00", "$310.00", "$248.00"],
            correct: 0,
            explain:
              "The early bird discount gives $25 off for registering at least 3 weeks ahead. $310 minus $25 equals $285.00.",
          },
          {
            q: "A student has completed Intro to Bookkeeping. Which course can they now enroll in that they could not have before?",
            options: ["Conversational Spanish I", "Digital Photography Basics", "Advanced Excel for Business", "Project Management Essentials"],
            correct: 2,
            explain:
              "Advanced Excel for Business lists Intro to Bookkeeping or equivalent as its prerequisite, so completing that course now allows enrollment in Advanced Excel.",
          },
          {
            q: "Which course has the longest duration?",
            options: ["Digital Photography Basics", "Advanced Excel for Business", "Conversational Spanish I", "Intro to Bookkeeping"],
            correct: 2,
            explain:
              "Conversational Spanish I runs for 8 weeks, longer than Digital Photography Basics (5 weeks), Advanced Excel (4 weeks), and Intro to Bookkeeping (6 weeks).",
          },
        ],
      },
      {
        id: "t3_r3",
        partLabel: "Part 3",
        name: "Reading for Information",
        instructions: "Read the passage, then answer the questions based on the information given.",
        suggestedMinutes: 14,
        passageTitle: "Home Battery Storage: Powering the Next Energy Shift",
        passage: `As solar panels have become increasingly common on residential rooftops, a related technology has quietly been gaining ground alongside them: home battery storage systems. These units, roughly the size of a large suitcase mounted on a garage wall, store excess electricity generated during the day for use after the sun goes down, and they are reshaping how many households think about energy independence.

The basic appeal is straightforward. Solar panels generate the most electricity at midday, but household energy demand often peaks in the early evening when families return home, turn on lights, and start cooking dinner. Without storage, any solar electricity produced beyond what a home uses immediately is typically sent back to the grid, often at a lower compensation rate than what the homeowner pays to draw power back later. A battery system captures that midday surplus and releases it during the evening peak, allowing homeowners to rely less on grid electricity when it's most expensive.

Beyond daily savings, batteries offer a valuable safeguard during power outages. In regions prone to storms or wildfires that can knock out grid power for extended periods, a sufficiently sized battery paired with solar panels can keep essential appliances, such as refrigerators and medical equipment, running for days rather than hours. This resilience factor has become a major selling point in areas where utility companies have begun proactively shutting off power during high-risk weather conditions.

However, the technology is not without drawbacks. The upfront cost remains substantial, often ranging from several thousand to well over ten thousand dollars depending on capacity, even after available government rebates or incentives are applied. Battery capacity also degrades gradually over time, similar to a cellphone battery losing its ability to hold a full charge after years of use, meaning most systems carry a warranty of ten to fifteen years rather than promising indefinite performance. Additionally, the environmental footprint of manufacturing batteries, including the mining of lithium and other materials, has drawn scrutiny from some environmental groups who argue the industry must improve recycling infrastructure to fully justify the technology's clean-energy credentials.

Utility companies themselves have taken a mixed stance. Some have introduced special reduced electricity rates for battery owners who agree to let the utility draw a small amount of stored power during periods of extremely high regional demand, a practice known as a "virtual power plant" arrangement. Other utilities have been slower to embrace these programs, citing concerns about managing thousands of small, distributed batteries reliably.

Industry analysts largely agree that as manufacturing scales up and prices continue to fall, home battery storage will likely become a standard companion to residential solar installations within the next decade, much as solar panels themselves moved from a niche investment to a mainstream home upgrade over the past twenty years.`,
        questions: [
          {
            q: "Why do household batteries help address the mismatch between solar generation and energy demand?",
            options: [
              "Solar panels generate the most electricity in the evening when demand peaks.",
              "Batteries store midday surplus solar electricity for use during the evening demand peak.",
              "Batteries generate their own electricity independent of solar panels.",
              "Household demand is highest at midday when solar output peaks.",
            ],
            correct: 1,
            explain:
              "The passage explains that solar panels generate the most electricity at midday while demand peaks in the evening, and batteries capture the midday surplus for release during the evening peak.",
          },
          {
            q: "What typically happens to excess solar electricity without a battery system?",
            options: [
              "It is wasted entirely.",
              "It is sent back to the grid, often at a lower compensation rate.",
              "It is stored indefinitely at no cost.",
              "It powers streetlights automatically.",
            ],
            correct: 1,
            explain:
              "The passage states that without storage, excess solar electricity is typically sent back to the grid, often at a lower compensation rate than what the homeowner pays to draw power later.",
          },
          {
            q: "What benefit do batteries provide during power outages, according to the passage?",
            options: [
              "They can keep essential appliances running for days rather than hours.",
              "They eliminate the need for grid power permanently.",
              "They automatically repair power lines.",
              "They increase the length of outages.",
            ],
            correct: 0,
            explain:
              "The passage states that a sufficiently sized battery paired with solar panels can keep essential appliances running for days rather than hours during outages.",
          },
          {
            q: "Why has battery resilience become a major selling point in some regions?",
            options: [
              "Because batteries are required by law in those regions.",
              "Because utility companies there have begun proactively shutting off power during high-risk weather.",
              "Because solar panels don't work in those regions.",
              "Because those regions have no grid electricity at all.",
            ],
            correct: 1,
            explain:
              "The passage explains this resilience factor is a major selling point in areas where utility companies proactively shut off power during high-risk weather like storms or wildfires.",
          },
          {
            q: "How does battery capacity change over time, according to the passage?",
            options: [
              "It increases steadily each year.",
              "It degrades gradually, similar to a cellphone battery.",
              "It remains exactly the same for the battery's entire lifespan.",
              "It resets automatically every five years.",
            ],
            correct: 1,
            explain:
              "The passage compares battery degradation to a cellphone battery losing its ability to hold a full charge over years of use.",
          },
          {
            q: "What concern have some environmental groups raised about home batteries?",
            options: [
              "That they use too much electricity",
              "That manufacturing them, including lithium mining, raises concerns the industry must address through better recycling",
              "That they are too quiet",
              "That they interfere with solar panel performance",
            ],
            correct: 1,
            explain:
              "The passage states environmental groups have scrutinized the manufacturing footprint, including lithium mining, and argue the industry must improve recycling infrastructure.",
          },
          {
            q: "What is a \"virtual power plant\" arrangement, as described in the passage?",
            options: [
              "A computer simulation of a power plant",
              "An arrangement where a utility draws small amounts of stored power from battery owners during high demand, in exchange for reduced rates",
              "A type of solar panel",
              "A backup generator system",
            ],
            correct: 1,
            explain:
              "The passage describes this as utilities offering reduced rates to battery owners who let the utility draw stored power during periods of extremely high regional demand.",
          },
          {
            q: "Why have some utilities been slower to adopt virtual power plant programs?",
            options: [
              "They are legally prohibited from doing so.",
              "They have concerns about managing thousands of small, distributed batteries reliably.",
              "They believe batteries are unsafe.",
              "They have no interest in reducing electricity costs.",
            ],
            correct: 1,
            explain:
              "The passage states other utilities have been slower to embrace these programs, citing concerns about managing thousands of small, distributed batteries reliably.",
          },
          {
            q: "What do industry analysts largely predict about home battery storage?",
            options: [
              "It will disappear within five years.",
              "It will likely become a standard companion to residential solar within the next decade.",
              "It will remain a rare, niche product indefinitely.",
              "It will replace solar panels entirely.",
            ],
            correct: 1,
            explain:
              "The final paragraph states industry analysts largely agree home battery storage will likely become a standard companion to residential solar installations within the next decade.",
          },
        ],
      },
      {
        id: "t3_r4",
        partLabel: "Part 4",
        name: "Reading for Viewpoints",
        instructions:
          "Read the passage, which presents differing viewpoints, then answer the questions.",
        suggestedMinutes: 14,
        passageTitle: "Should the Town Introduce a Local Tourism Tax?",
        passage: `As visitor numbers to the lakeside town of Birchwood Falls continue climbing each summer, the town council is considering a proposal to introduce a two percent tourism tax on hotel stays and short-term vacation rentals. The proposal has generated considerable debate among residents, business owners, and local officials.

Councillor Renata Fields, who introduced the proposal, argues that the tax is a fair way to fund infrastructure strained by seasonal visitors. "Our roads, public washrooms, and waste collection services are all designed for a town of eight thousand people, but in July and August, our population effectively triples," she explains. She notes that similar tourism taxes in other lakeside communities have generated hundreds of thousands of dollars annually, funds she says could be directed toward expanding parking, hiring seasonal maintenance staff, and repairing trails damaged by heavy foot traffic.

Hotel owner Desmond Okafor opposes the measure, arguing it could discourage visitors at a time when the local tourism industry is still recovering from a difficult few years. "Guests already pay provincial and federal taxes on their rooms. Adding another line item makes our town look more expensive compared to nearby destinations that don't have this extra charge," he says. He also worries about the administrative burden of collecting and remitting a new tax, particularly for smaller bed-and-breakfast operators who lack dedicated accounting staff.

Economist Dr. Helena Marsh, who has studied tourism taxation in several municipalities, offers a more nuanced perspective. "The research is fairly consistent that a small tax, in the range of one to three percent, has a negligible effect on whether tourists choose to visit," she explains. "Travellers rarely comparison-shop destinations based on a tax that small; they're far more influenced by weather, attractions, and overall trip cost." However, she cautions that the town should be transparent about exactly how the revenue is spent, since public support for such taxes tends to erode quickly if residents perceive the funds are being absorbed into general revenue rather than visible improvements. She recommends the council commit, in writing, to spending the tax revenue exclusively on tourism-related infrastructure, with an annual public report detailing exactly where the money went.

Councillor Fields has indicated she is open to Dr. Marsh's recommendation and may introduce an amendment requiring an annual spending report before the proposal goes to a final vote next spring.`,
        questions: [
          {
            q: "What is Councillor Fields's main argument for the tourism tax?",
            options: [
              "It will reduce the number of tourists visiting.",
              "It is a fair way to fund infrastructure strained by seasonal visitors.",
              "It is required by provincial law.",
              "It will replace all other town taxes.",
            ],
            correct: 1,
            explain:
              "Fields argues the tax is fair because infrastructure like roads and waste services is strained by the town's population tripling during peak tourist season.",
          },
          {
            q: "What does Fields say the tax revenue could fund?",
            options: [
              "Expanding parking, hiring seasonal maintenance staff, and repairing trails",
              "Building a new town hall",
              "Reducing residents' property taxes",
              "Funding a new hockey arena",
            ],
            correct: 0,
            explain:
              "Fields states the funds could be directed toward expanding parking, hiring seasonal maintenance staff, and repairing trails damaged by heavy foot traffic.",
          },
          {
            q: "What is Desmond Okafor's main concern about the proposed tax?",
            options: [
              "That it could discourage visitors and make the town look more expensive than competing destinations.",
              "That it is too small to generate meaningful revenue.",
              "That it will only affect large hotel chains.",
              "That the town council lacks authority to introduce it.",
            ],
            correct: 0,
            explain:
              "Okafor worries the tax could discourage visitors and make the town appear more expensive compared to nearby destinations without such a charge.",
          },
          {
            q: "What additional worry does Okafor raise regarding smaller accommodation operators?",
            options: [
              "That they will be exempt from the tax entirely",
              "That the administrative burden of collecting and remitting the tax could be difficult for those without dedicated accounting staff",
              "That they will be forced to close permanently",
              "That they will need to raise room rates by fifty percent",
            ],
            correct: 1,
            explain:
              "Okafor worries about the administrative burden of collecting and remitting a new tax, particularly for smaller bed-and-breakfast operators lacking dedicated accounting staff.",
          },
          {
            q: "According to Dr. Marsh's research, what effect does a small tourism tax typically have on visitor decisions?",
            options: [
              "It has a negligible effect on whether tourists choose to visit.",
              "It causes most tourists to cancel their trips.",
              "It doubles the cost of an average trip.",
              "It has no effect on any type of business decision.",
            ],
            correct: 0,
            explain:
              "Dr. Marsh explains that research is fairly consistent that a small tax in the one to three percent range has a negligible effect on tourist visitation decisions.",
          },
          {
            q: "What does Dr. Marsh say tourists are more influenced by than a small tax?",
            options: [
              "Weather, attractions, and overall trip cost",
              "The exact percentage of the local sales tax",
              "The town's population size",
              "The number of hotels in the area",
            ],
            correct: 0,
            explain:
              "Dr. Marsh states travellers are far more influenced by weather, attractions, and overall trip cost than by a small tax.",
          },
          {
            q: "What does Dr. Marsh caution could cause public support for the tax to erode?",
            options: [
              "If tourists stop visiting entirely",
              "If residents perceive the funds are being absorbed into general revenue rather than visible improvements",
              "If the tax rate is reduced too much",
              "If hotel owners raise their prices",
            ],
            correct: 1,
            explain:
              "Dr. Marsh cautions that public support tends to erode quickly if residents perceive tax revenue is absorbed into general revenue rather than spent on visible improvements.",
          },
          {
            q: "What does Dr. Marsh recommend the council commit to?",
            options: [
              "Cancelling the tax proposal entirely",
              "Spending the revenue exclusively on tourism-related infrastructure with an annual public report",
              "Doubling the tax rate immediately",
              "Removing the tax after one year regardless of outcome",
            ],
            correct: 1,
            explain:
              "Dr. Marsh recommends the council commit in writing to spending revenue exclusively on tourism-related infrastructure, with an annual public report on where the money went.",
          },
          {
            q: "How has Councillor Fields responded to Dr. Marsh's recommendation?",
            options: [
              "She has rejected it outright.",
              "She is open to it and may introduce an amendment requiring an annual spending report.",
              "She has resigned from the council over the disagreement.",
              "She has postponed the vote indefinitely.",
            ],
            correct: 1,
            explain:
              "The final paragraph states Fields is open to Dr. Marsh's recommendation and may introduce an amendment requiring an annual spending report before the final vote.",
          },
          {
            q: "Which statement best summarizes the overall passage?",
            options: [
              "All three individuals fully agree the tax should be implemented immediately.",
              "The passage presents supporting, opposing, and expert-analytical viewpoints on a proposed tourism tax, with movement toward compromise.",
              "The tax proposal has already failed and been withdrawn.",
              "Only the hotel owner's opinion is presented in the passage.",
            ],
            correct: 1,
            explain:
              "The passage presents Fields in favor, Okafor opposed, and Dr. Marsh offering an evidence-based middle position, ending with Fields open to a compromise amendment before a final vote.",
          },
        ],
      },
    ],
  };

  window.__readingTests = window.__readingTests || [];
  window.__readingTests.push(test);
})();
