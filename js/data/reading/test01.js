// Reading Practice Test 1 — original content modeled on the official CELPIP-General format
// (Part 1: 11 blanks, Part 2: 8 questions, Part 3: 9 questions, Part 4: 10 questions — 38 total).
// Part 1 blanks are rendered as inline drop-downs directly inside the reply text (true cloze format),
// using the ___(n)___ markers below.

(function () {
  const test = {
    testNumber: 1,
    parts: [
      {
        id: "t1_r1",
        partLabel: "Part 1",
        name: "Reading Correspondence",
        instructions:
          "Read the email below, then read the reply. Some words in the reply are missing. Choose the best option to fill each numbered blank — the blanks appear directly in the reply text, just like on the real test.",
        suggestedMinutes: 16,
        passageTitle: "Original Email",
        passage: `From: Heather Nolan, Building Manager
To: All Residents, Maple Court Apartments
Subject: Upcoming Elevator Maintenance

Dear Residents,

I'm writing to let you know that the west elevator will be out of service from Monday, October 6th to Wednesday, October 8th for scheduled motor maintenance. The east elevator will remain in service throughout this period, so please use it if you need elevator access.

Residents on the upper floors, particularly those with mobility concerns, may want to plan grocery deliveries or appointments around this schedule to minimize inconvenience. We will also have building staff available in the lobby each morning from 8 to 10 a.m. to assist anyone who needs help carrying items up the stairs.

If you have any questions or concerns about this maintenance work, please don't hesitate to reach out.

Best regards,
Heather Nolan
Building Manager`,
        replyTitle: "Reply (fill in each numbered blank)",
        replyTemplate: [
          "Dear Ms. Nolan,",
          "Thank you for letting us know ahead of ___(1)___. I live on the ninth floor, so I wanted to ask a couple of follow-up questions.",
          "First, will the east elevator be able to ___(2)___ the extra traffic from both towers during those three days, or should we expect longer wait times?",
          "Second, I have a delivery of new furniture scheduled for Tuesday morning. Since I won't be able to use the stairs easily, could the building staff possibly ___(3)___ me when the delivery arrives?",
          "Third, I noticed the notice didn't mention whether the stairwell lighting will be ___(4)___ beforehand, since more residents than usual will likely be using the stairs this week.",
          "I also wondered whether residents could be given a ___(5)___ parking pass near the loading dock, in case we need to carry heavy items directly from a vehicle rather than through the main lobby.",
          "Fourth, I noticed the notice didn't mention whether the elevator maintenance is ___(6)___ to happen again later this year, since we had similar work done back in the spring.",
          "For residents who use mobility devices, will extra staff be ___(7)___ beyond the 8 to 10 a.m. window you mentioned, in case someone needs help later in the day?",
          "I would also like to ___(8)___ that the building consider posting a sign near the east elevator reminding residents to be patient, since tempers can run short when people are in a hurry.",
          "Finally, could you please ___(9)___ whether the maintenance work will cause any unusual noise that might be noticeable in units near the elevator shaft?",
          "I appreciate the ___(10)___ you've given us, and I understand maintenance is sometimes unavoidable. Please let me know if there's anything residents can do to help this process go ___(11)___.",
          "Sincerely,",
          "Tomas Reyes, Unit 908",
        ],
        blanks: [
          {
            num: 1,
            options: ["time", "money", "food", "weather"],
            correct: 0,
            explain:
              "\"Ahead of time\" is the natural collocation meaning 'in advance.' The email was sent before the maintenance began, so this fits the context of advance notice.",
          },
          {
            num: 2,
            options: ["handle", "sell", "paint", "measure"],
            correct: 0,
            explain:
              "The question is about whether the single elevator can manage the increased number of people using it — \"handle\" means to cope with or manage a load, fitting the context of extra traffic.",
          },
          {
            num: 3,
            options: ["forget", "assist", "charge", "avoid"],
            correct: 1,
            explain:
              "Tomas is asking for help carrying his delivery since he can't use the stairs easily — \"assist\" (help) matches the building staff's stated role of helping residents.",
          },
          {
            num: 4,
            options: ["checked", "sold", "ignored", "painted"],
            correct: 0,
            explain:
              "With more residents using the stairs, Tomas is reasonably asking whether the lighting will be inspected/verified — \"checked\" fits a safety-related follow-up question.",
          },
          {
            num: 5,
            options: ["permanent", "temporary", "expensive", "illegal"],
            correct: 1,
            explain:
              "Tomas is asking about a pass just for the duration of the maintenance work, so \"temporary\" (short-term) is the logical fit, not a permanent arrangement.",
          },
          {
            num: 6,
            options: ["expected", "forbidden", "cancelled", "forgotten"],
            correct: 0,
            explain:
              "Tomas is asking if similar maintenance is anticipated again later this year. \"Expected to happen\" is the correct collocation for something planned or likely in the future.",
          },
          {
            num: 7,
            options: ["scheduled", "cancelled", "fired", "ignored"],
            correct: 0,
            explain:
              "Tomas is asking whether additional staff hours will be arranged/planned beyond the stated window — \"scheduled\" is the natural word for arranging staff coverage.",
          },
          {
            num: 8,
            options: ["suggest", "delete", "forbid", "ignore"],
            correct: 0,
            explain:
              "Tomas is politely proposing an idea (a sign near the elevator) — \"suggest\" is the appropriate verb for offering a recommendation in formal correspondence.",
          },
          {
            num: 9,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Tomas is asking Ms. Nolan to verify a fact (whether there will be noise) — \"confirm\" fits a request for a definite answer.",
          },
          {
            num: 10,
            options: ["complaint", "notice", "invoice", "apology"],
            correct: 1,
            explain:
              "Tomas is thanking Ms. Nolan for informing residents in advance — this refers back to the original email, which was a \"notice\" about the maintenance schedule.",
          },
          {
            num: 11,
            options: ["smoothly", "loudly", "slowly", "incorrectly"],
            correct: 0,
            explain:
              "Tomas is offering to help the process succeed without problems — \"go smoothly\" is the standard collocation for a process happening without difficulty.",
          },
        ],
      },
      {
        id: "t1_r2",
        partLabel: "Part 2",
        name: "Reading to Apply a Diagram",
        instructions:
          "Study the information below, then answer the questions by applying the details shown.",
        suggestedMinutes: 13,
        passageTitle: "Riverside Community Centre — Fitness Class Schedule & Membership Options",
        diagramHtml: `
        <table class="diagram-table">
          <thead><tr><th>Membership Tier</th><th>Monthly Cost</th><th>Classes Included</th><th>Guest Passes</th><th>Booking Window</th></tr></thead>
          <tbody>
            <tr><td>Basic</td><td>$29</td><td>Gym floor access only, no group classes</td><td>0 / month</td><td>N/A</td></tr>
            <tr><td>Standard</td><td>$49</td><td>Up to 8 group classes / month</td><td>1 / month</td><td>3 days ahead</td></tr>
            <tr><td>Premium</td><td>$79</td><td>Unlimited group classes</td><td>4 / month</td><td>7 days ahead</td></tr>
            <tr><td>Student</td><td>$25</td><td>Up to 4 group classes / month</td><td>1 / month</td><td>2 days ahead</td></tr>
          </tbody>
        </table>
        <table class="diagram-table">
          <thead><tr><th>Class</th><th>Day</th><th>Time</th><th>Level</th><th>Room</th></tr></thead>
          <tbody>
            <tr><td>Morning Yoga</td><td>Mon / Wed / Fri</td><td>7:00–7:45 a.m.</td><td>All levels</td><td>Studio A</td></tr>
            <tr><td>Spin Cycle</td><td>Tue / Thu</td><td>6:00–6:45 p.m.</td><td>Intermediate</td><td>Studio B</td></tr>
            <tr><td>Beginner Strength</td><td>Mon / Wed</td><td>5:30–6:15 p.m.</td><td>Beginner</td><td>Weight Room</td></tr>
            <tr><td>Advanced HIIT</td><td>Sat</td><td>9:00–9:45 a.m.</td><td>Advanced</td><td>Studio A</td></tr>
            <tr><td>Aqua Fitness</td><td>Tue / Thu / Sat</td><td>10:00–10:45 a.m.</td><td>All levels</td><td>Pool</td></tr>
          </tbody>
        </table>
        <p class="diagram-note">Note: The centre is closed on public holidays. Guest passes must be booked at the same time as the member's own class reservation.</p>
      `,
        questions: [
          {
            q: "Priya is a full-time university student on a tight budget who only wants to attend two classes per week. Which membership best fits her needs?",
            options: ["Basic", "Standard", "Premium", "Student"],
            correct: 3,
            explain:
              "The Student tier costs the least ($25), allows up to 4 classes per month (enough for two classes a week), and Priya qualifies as a student.",
          },
          {
            q: "Which class would someone with no prior fitness experience most likely avoid?",
            options: ["Morning Yoga", "Beginner Strength", "Advanced HIIT", "Aqua Fitness"],
            correct: 2,
            explain:
              "Advanced HIIT is labeled 'Advanced' level, making it unsuitable for someone with no prior fitness experience, unlike the other classes which are for beginners or all levels.",
          },
          {
            q: "A Standard member wants to bring 2 guests to one class this month. Is this possible under their plan?",
            options: [
              "Yes, Standard members get 2 guest passes per month.",
              "No, Standard members only get 1 guest pass per month.",
              "Yes, but only for Aqua Fitness.",
              "No, Standard members get 0 guest passes.",
            ],
            correct: 1,
            explain:
              "The table shows the Standard tier includes only 1 guest pass per month, so bringing 2 guests would exceed the plan's allowance.",
          },
          {
            q: "A Premium member wants to book Spin Cycle for next Thursday. It is currently Wednesday of the previous week (8 days before). Can they book it now?",
            options: [
              "Yes, Premium members can book up to 7 days ahead, and 8 days is within range.",
              "No, they must wait one more day since the booking window is exactly 7 days.",
              "No, Premium members cannot book Spin Cycle at all.",
              "Yes, but only if they are also a Standard member.",
            ],
            correct: 1,
            explain:
              "Premium members may book 7 days ahead. Since the class is 8 days away, the member must wait one more day until it falls within the 7-day window.",
          },
          {
            q: "Which class is offered on a public-holiday-sensitive Saturday schedule and would most likely be cancelled if Saturday falls on a public holiday?",
            options: ["Morning Yoga", "Advanced HIIT and Aqua Fitness", "Beginner Strength", "Spin Cycle"],
            correct: 1,
            explain:
              "Both Advanced HIIT and Aqua Fitness are scheduled on Saturdays, and the note states the centre is closed on public holidays, so both would be affected.",
          },
          {
            q: "A Basic member wants to attend Beginner Strength this week. What must they do?",
            options: [
              "Nothing, it's included in their plan.",
              "Upgrade to a plan that includes group classes, since Basic has gym floor access only.",
              "Bring a guest pass.",
              "Book 7 days in advance.",
            ],
            correct: 1,
            explain:
              "The table shows the Basic tier includes gym floor access only, with no group classes, so the member would need to upgrade to attend Beginner Strength.",
          },
          {
            q: "Which class is best suited to a member recovering from a knee injury who still wants an all-levels, low-impact workout?",
            options: ["Advanced HIIT", "Spin Cycle", "Aqua Fitness", "Beginner Strength"],
            correct: 2,
            explain:
              "Aqua Fitness takes place in the pool and is listed as all levels, making it the lowest-impact option for someone recovering from a joint injury, unlike the other listed classes.",
          },
          {
            q: "How many membership tiers does Riverside Community Centre offer in total?",
            options: ["Two", "Three", "Four", "Five"],
            correct: 2,
            explain:
              "The membership table lists four tiers: Basic, Standard, Premium, and Student.",
          },
        ],
      },
      {
        id: "t1_r3",
        partLabel: "Part 3",
        name: "Reading for Information",
        instructions: "Read the passage, then answer the questions based on the information given.",
        suggestedMinutes: 14,
        passageTitle: "The Rise of Urban Beekeeping",
        passage: `Over the past decade, beekeeping has moved from a strictly rural activity to a growing trend in cities around the world. Rooftops, community gardens, and even office building terraces have become home to buzzing hives, as urban residents seek both a hobby and a way to support declining pollinator populations.

Proponents of urban beekeeping point to several benefits. Bees kept in cities often produce more honey than their rural counterparts, a fact that surprises many newcomers to the hobby. Researchers attribute this to the sheer diversity of flowering plants available in urban parks, gardens, and street trees, compared to the sometimes limited variety found in large-scale agricultural areas planted with a single crop. Urban hives also tend to be more sheltered from certain pesticides that are more heavily used in some farming regions, since city gardeners often favor organic methods.

However, the trend has not been without controversy. Some urban ecologists warn that a rapid increase in managed honeybee colonies within a city can actually crowd out native wild bee species, which compete for the same limited flowers, especially in the densest neighborhoods. Native bees, many of which are solitary and don't produce honey, play a distinct ecological role and are already under pressure from habitat loss. A city block that supports two or three honeybee hives might unintentionally leave too little pollen and nectar for the native bumblebees and mason bees that were there first.

City governments have responded in different ways. Some have introduced permit systems requiring beekeepers to register their hives, maintain a certain distance from property lines, and provide a water source so bees don't gather at neighbors' pools or birdbaths. Other cities have taken a more hands-off approach, only stepping in when a specific complaint is filed about aggressive bees or property damage.

For those considering the hobby, experts recommend starting with a mentor or a local beekeeping association, since first-year colonies require regular attention and mistakes can be costly, both financially and in terms of the bees' survival. Despite the challenges, most people who try urban beekeeping report that watching a hive develop over a season gives them a new appreciation for the insects most people rarely think about.`,
        questions: [
          {
            q: "According to the passage, why do urban bees often produce more honey than rural bees?",
            options: [
              "Cities have warmer weather year-round.",
              "Urban areas offer a greater diversity of flowering plants.",
              "Urban beekeepers use special feeding supplements.",
              "Rural bees are more often affected by predators.",
            ],
            correct: 1,
            explain:
              "The passage states researchers attribute higher honey production to the diversity of flowering plants in cities compared to single-crop agricultural areas.",
          },
          {
            q: "What concern do some urban ecologists raise about the trend?",
            options: [
              "Honeybees produce too much honey to sell.",
              "Managed honeybee colonies may crowd out native wild bee species.",
              "Beekeeping is too expensive for most hobbyists.",
              "Cities lack enough beekeeping mentors.",
            ],
            correct: 1,
            explain:
              "The passage explains that a rapid increase in managed honeybee colonies can crowd out native wild bees that compete for the same flowers.",
          },
          {
            q: "How do native bees mentioned in the passage differ from honeybees?",
            options: [
              "They are larger in size.",
              "Many are solitary and do not produce honey.",
              "They only live in rural areas.",
              "They require permits to keep.",
            ],
            correct: 1,
            explain:
              "The passage states that many native bees are solitary and don't produce honey, distinguishing them from honeybees.",
          },
          {
            q: "What is one requirement some cities impose through permit systems?",
            options: [
              "Beekeepers must sell their honey locally.",
              "Hives must maintain a certain distance from property lines and provide a water source.",
              "Beekeepers must have five years of experience.",
              "Hives must be removed in winter.",
            ],
            correct: 1,
            explain:
              "The passage says permit systems can require beekeepers to maintain distance from property lines and provide a water source for the bees.",
          },
          {
            q: "What do experts recommend for beginners interested in urban beekeeping?",
            options: [
              "Starting with multiple hives immediately",
              "Avoiding any contact with local associations",
              "Starting with a mentor or a local beekeeping association",
              "Only keeping bees in winter",
            ],
            correct: 2,
            explain:
              "The passage recommends beginners start with a mentor or local beekeeping association since first-year colonies require regular attention.",
          },
          {
            q: "What approach do some cities take instead of a permit system?",
            options: [
              "Banning beekeeping outright",
              "A hands-off approach, stepping in only when a complaint is filed",
              "Requiring a public vote for every hive",
              "Charging a high annual tax",
            ],
            correct: 1,
            explain:
              "The passage says other cities take a more hands-off approach, only stepping in when a specific complaint is filed about aggressive bees or property damage.",
          },
          {
            q: "Where does the competition between honeybees and native bees become most significant, according to the passage?",
            options: [
              "In the densest neighborhoods",
              "Only in rural farmland",
              "In areas with no flowers at all",
              "Nowhere — there is no competition",
            ],
            correct: 0,
            explain:
              "The passage specifies that colonies crowd out native bees 'especially in the densest neighborhoods,' where competition for limited flowers is highest.",
          },
          {
            q: "What does watching a hive develop over a season give most hobbyists, according to the passage?",
            options: [
              "A significant financial profit",
              "A new appreciation for insects most people rarely think about",
              "A guarantee their hive will survive",
              "An exemption from city permits",
            ],
            correct: 1,
            explain:
              "The final sentence states that watching a hive develop over a season gives most hobbyists a new appreciation for insects most people rarely think about.",
          },
          {
            q: "Why can mistakes in a beekeeper's first year be especially costly?",
            options: [
              "Because of legal fines only",
              "Because they can be costly both financially and in terms of the bees' survival",
              "Because insurance never covers beekeeping",
              "Because first-year beekeepers must pay double fees",
            ],
            correct: 1,
            explain:
              "The passage states that mistakes in the first year can be costly both financially and in terms of the bees' survival.",
          },
        ],
      },
      {
        id: "t1_r4",
        partLabel: "Part 4",
        name: "Reading for Viewpoints",
        instructions:
          "Read the passage, which presents differing viewpoints, then answer the questions.",
        suggestedMinutes: 14,
        passageTitle: "Should City Centers Restrict Cars?",
        passage: `As downtown congestion worsens in many mid-sized cities, a growing number of urban planners are proposing to restrict private vehicle access to central shopping and business districts. The debate has divided residents, business owners, and city officials alike.

Marta Chen, a city councillor who supports the proposal, argues that reducing car traffic downtown would improve air quality, reduce noise, and make streets safer for pedestrians and cyclists. She points to several European cities that implemented similar restrictions and later saw increases in foot traffic and outdoor dining once streets were freed from vehicles. "People linger longer and spend more when they're not dodging cars," she says, citing a study from one such city showing a fifteen percent increase in retail sales along a converted pedestrian corridor.

Not everyone agrees. Daniel Osei, who owns a hardware store downtown, worries that restricting cars will hurt businesses that depend on customers being able to drive in, load bulky purchases, and leave easily. "My customers buy lumber, paint, tools — heavy things. They're not going to carry a fifty-pound bag of concrete on a bicycle," he says. He also raises concerns about delivery trucks needing continued access for restocking shelves.

Councillor Chen responds that the proposal includes exceptions for delivery vehicles during early morning hours and a loading zone system for larger purchases, addressing at least part of Osei's concern. She also notes that a shuttle service is being considered to help customers without cars reach downtown businesses more easily.

A third voice in the debate, urban planning researcher Dr. Aisha Kapoor, cautions that the outcome depends heavily on execution. "The cities that saw success invested heavily in alternative transit before restricting cars, not after," she notes. "If a city removes car access without first building reliable buses, bike lanes, or shuttle options, it risks simply driving customers to competitors in the suburbs instead of onto the sidewalks." She recommends a phased pilot program, limited to a few blocks initially, with data collected on sales and traffic before any broader rollout.

The city council is expected to vote on a pilot proposal, incorporating some of Dr. Kapoor's phased suggestions, later this year.`,
        questions: [
          {
            q: "What is Marta Chen's main argument in favor of restricting cars downtown?",
            options: [
              "It will increase parking revenue.",
              "It will improve air quality, safety, and potentially boost retail activity.",
              "It will reduce the number of downtown businesses.",
              "It is required by federal law.",
            ],
            correct: 1,
            explain:
              "Chen argues the restriction would improve air quality, reduce noise, improve pedestrian safety, and cites a study showing increased retail sales.",
          },
          {
            q: "What is Daniel Osei's main concern?",
            options: [
              "That restrictions will hurt businesses relying on customers driving in with bulky purchases.",
              "That the streets are already too quiet.",
              "That bike lanes are unsafe.",
              "That the shuttle service will be too expensive to ride.",
            ],
            correct: 0,
            explain:
              "Osei worries about customers who need to drive in to carry heavy items like lumber, paint, and tools, and about delivery truck access.",
          },
          {
            q: "How does Chen respond to concerns about deliveries and bulky purchases?",
            options: [
              "She dismisses the concern entirely.",
              "She proposes exceptions for early-morning deliveries and a loading zone system.",
              "She suggests all such businesses relocate to the suburbs.",
              "She proposes banning all trucks permanently.",
            ],
            correct: 1,
            explain:
              "Chen notes the proposal includes delivery exceptions during early morning hours and a loading zone system for larger purchases.",
          },
          {
            q: "According to Dr. Kapoor, what determined whether similar restrictions succeeded in other cities?",
            options: [
              "Whether the mayor personally supported the plan",
              "Whether alternative transit was built before restricting cars",
              "The size of the city's population",
              "Whether the restriction was permanent from the start",
            ],
            correct: 1,
            explain:
              "Dr. Kapoor states that successful cities invested in alternative transit before restricting cars, not after.",
          },
          {
            q: "What does Dr. Kapoor recommend the city do?",
            options: [
              "Immediately restrict cars city-wide",
              "Abandon the proposal entirely",
              "Start with a phased pilot program on a few blocks, collecting data before expanding",
              "Let each business decide individually",
            ],
            correct: 2,
            explain:
              "Dr. Kapoor recommends a phased pilot program limited to a few blocks with data collection before any broader rollout.",
          },
          {
            q: "Which statement best summarizes the overall passage?",
            options: [
              "All parties fully agree the plan should proceed immediately.",
              "The passage presents supporting, opposing, and cautious expert viewpoints on a proposed downtown car restriction.",
              "The plan has already failed and been cancelled.",
              "Only business owners were asked for their opinion.",
            ],
            correct: 1,
            explain:
              "The passage presents three distinct viewpoints — Chen in favor, Osei opposed, and Kapoor offering a cautious, conditional perspective — without a final resolution beyond an upcoming vote.",
          },
          {
            q: "What is the city council expected to do, according to the final paragraph?",
            options: [
              "Reject the proposal outright",
              "Vote on a pilot proposal incorporating phased suggestions later this year",
              "Delay any decision indefinitely",
              "Hand the decision entirely to Dr. Kapoor",
            ],
            correct: 1,
            explain:
              "The final paragraph states the city council is expected to vote on a pilot proposal incorporating some of Dr. Kapoor's phased suggestions later this year.",
          },
          {
            q: "What does Chen say is being considered to help customers without cars?",
            options: [
              "Free parking downtown",
              "A shuttle service",
              "Discount vouchers",
              "A ride-sharing subsidy",
            ],
            correct: 1,
            explain:
              "Chen notes that a shuttle service is being considered to help customers without cars reach downtown businesses more easily.",
          },
          {
            q: "What specific worry does Osei raise about delivery trucks?",
            options: [
              "That they cause too much noise",
              "That they will need continued access for restocking shelves",
              "That they are too large for downtown streets",
              "That they pollute more than cars",
            ],
            correct: 1,
            explain: "Osei raises concerns about delivery trucks needing continued access for restocking shelves.",
          },
          {
            q: "What percentage increase in retail sales does the study cited by Chen show?",
            options: ["Five percent", "Ten percent", "Fifteen percent", "Twenty-five percent"],
            correct: 2,
            explain:
              "Chen cites a study showing a fifteen percent increase in retail sales along a converted pedestrian corridor.",
          },
        ],
      },
    ],
  };

  window.__readingTests = window.__readingTests || [];
  window.__readingTests.push(test);
})();
