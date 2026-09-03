// Listening Practice Test 8 — original content modeled on the official CELPIP-General format
// (Part 1: 8 questions, Part 2: 5, Part 3: 6, Part 4: 5, Part 5: 8, Part 6: 6 — 38 total, matching
// the officially documented question counts for each part).

(function () {
  const test = {
    testNumber: 8,
    parts: [
      {
        id: "t8_l1",
        partLabel: "Part 1",
        name: "Listening to Problem Solving",
        instructions:
          "You will hear a conversation about a problem. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Nadia: Liam, we have a serious problem. The shipment with our banners and brochures for the trade show is stuck in customs and won't be released until tomorrow afternoon.
Liam: But the show opens at nine tomorrow morning. We can't have an empty booth for half the day.
Nadia: Exactly. I called the shipping company, and they said the delay is due to a paperwork issue, not something we caused, but it still won't be fixed in time.
Liam: Do we have any backup materials? Maybe from a previous event?
Nadia: I checked storage. We have some banners from last year's show, but they still show our old logo, so that won't look professional.
Liam: What if we get something printed locally overnight? Is there a print shop near the convention center?
Nadia: There's one called QuickPrint downtown that does rush orders. I called them, and they can print new banners and one hundred brochures by six a.m. tomorrow if we send the files tonight.
Liam: How much extra will that cost us?
Nadia: About two hundred dollars more than our original printing cost, since it's a rush order, but it's worth it to avoid an empty booth.
Liam: Agreed. Can you send them the design files right now?
Nadia: Yes, I'll email them within the hour. I'll also ask if someone can pick up the order at six, since the show starts at nine and we'll still need time to set up.
Liam: I can do the six a.m. pickup since I live closer to downtown. You focus on getting the booth furniture set up early.
Nadia: Perfect. I'll also email the show organizers to give them a heads-up in case our booth looks a little bare for the first hour.
Liam: Good call. Better they hear it from us than notice it themselves.`,
        questions: [
          {
            q: "What is the main problem?",
            options: [
              "The booth space was cancelled",
              "The shipment with banners and brochures is stuck in customs",
              "Liam forgot to book the show",
              "The printer is closed permanently",
            ],
            correct: 1,
            explain:
              "Nadia says the shipment with their banners and brochures is stuck in customs and won't be released until tomorrow afternoon.",
          },
          {
            q: "Why is the shipment delayed?",
            options: [
              "Bad weather",
              "A paperwork issue",
              "The truck broke down",
              "It was sent to the wrong address",
            ],
            correct: 1,
            explain: "Nadia says the shipping company told her the delay is due to a paperwork issue.",
          },
          {
            q: "Why can't they use last year's banners?",
            options: [
              "They were damaged",
              "They show the old logo",
              "They are the wrong size",
              "They were never printed",
            ],
            correct: 1,
            explain: "Nadia says last year's banners still show their old logo, so they won't look professional.",
          },
          {
            q: "What solution do they find?",
            options: [
              "Cancel the trade show",
              "Get new banners and brochures rush-printed locally overnight",
              "Ask another company to share a booth",
              "Postpone setup until the afternoon",
            ],
            correct: 1,
            explain:
              "Nadia arranges for QuickPrint downtown to print new banners and one hundred brochures overnight.",
          },
          {
            q: "How much extra will the rush order cost?",
            options: ["$50", "$100", "$200", "$500"],
            correct: 2,
            explain: "Nadia says the rush order will cost about two hundred dollars more than the original printing cost.",
          },
          {
            q: "What time can QuickPrint have the order ready?",
            options: ["6 a.m.", "8 a.m.", "9 a.m.", "Noon"],
            correct: 0,
            explain: "Nadia says QuickPrint can have the order ready by six a.m. if the files are sent tonight.",
          },
          {
            q: "Who will pick up the printed order?",
            options: ["Nadia", "Liam", "A delivery driver", "The show organizer"],
            correct: 1,
            explain: "Liam volunteers to do the six a.m. pickup since he lives closer to downtown.",
          },
          {
            q: "What does Nadia plan to tell the show organizers?",
            options: [
              "Nothing",
              "That the booth may look bare for the first hour",
              "That they are withdrawing from the show",
              "That they need a refund",
            ],
            correct: 1,
            explain:
              "Nadia says she will email the show organizers to give them a heads-up in case the booth looks bare for the first hour.",
          },
        ],
      },
      {
        id: "t8_l2",
        partLabel: "Part 2",
        name: "Listening to a Daily Life Conversation",
        instructions:
          "You will hear a conversation between two friends. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 35,
        answerSeconds: 65,
        transcript: `Holly: Are we still doing the yard sale Saturday? I've got so many boxes of stuff to get rid of.
Derek: Yes, I think so, though I saw the forecast says a fifty percent chance of rain in the morning.
Holly: Ugh, really? Should we push it to Sunday instead?
Derek: Sunday looks clearer, actually, so that might be smarter. Let me check if the community bulletin board post can be edited.
Holly: I already posted flyers around the block for Saturday, so I'd need to go update those too if we switch.
Derek: True. Or we could just start Saturday afternoon instead of morning, once the rain clears, according to the forecast.
Holly: That could work. I'll change the flyers to say "starting at one p.m." instead of crossing out the whole day.
Derek: Good idea. Now, about pricing — should we price everything individually or just have a few price categories, like a dollar table and a five dollar table?
Holly: Categories would save us time tagging everything. Let's do a one-dollar table, a five-dollar table, and then a few bigger items priced separately, like my old bookshelf.
Derek: Sounds good. I also have a folding table and a cash box we can use. Do you have enough change to start with?
Holly: I'll grab forty dollars in small bills and coins from the bank Friday.
Derek: Perfect. Should we split whatever we earn evenly, or keep our own items' earnings separate?
Holly: Let's keep it separate, since I have way more stuff than you this time. We can just share table space.
Derek: Fair enough. I'll bring my things over Saturday morning so we're ready to set up as soon as the rain stops.`,
        questions: [
          {
            q: "Why do they consider changing the sale day?",
            options: [
              "The venue is unavailable",
              "A 50% chance of rain is forecast for Saturday morning",
              "Holly is busy Saturday",
              "The city requires a permit",
            ],
            correct: 1,
            explain: "Derek mentions the forecast shows a fifty percent chance of rain Saturday morning.",
          },
          {
            q: "What do they decide to do instead of switching days entirely?",
            options: [
              "Cancel the sale",
              "Start Saturday afternoon once the rain clears",
              "Move the sale indoors",
              "Sell everything online instead",
            ],
            correct: 1,
            explain:
              "Derek suggests starting Saturday afternoon once the rain clears, and Holly agrees, updating her flyers to say one p.m.",
          },
          {
            q: "What pricing method do they choose?",
            options: [
              "Price every item individually",
              "Use price categories like a dollar table and five-dollar table",
              "Give everything away for free",
              "Use an auction system",
            ],
            correct: 1,
            explain:
              "Holly suggests categories like a one-dollar table and a five-dollar table to save time tagging everything.",
          },
          {
            q: "Who will bring the folding table and cash box?",
            options: ["Holly", "Derek", "Both of them", "Neither; they'll rent one"],
            correct: 1,
            explain: "Derek says he has a folding table and a cash box they can use.",
          },
          {
            q: "How will they split the earnings?",
            options: [
              "Evenly, regardless of whose items sold",
              "Keep earnings from their own items separate",
              "Donate everything to charity",
              "Holly keeps all the earnings",
            ],
            correct: 1,
            explain:
              "Holly suggests keeping earnings separate since she has way more stuff than Derek this time, just sharing table space.",
          },
        ],
      },
      {
        id: "t8_l3",
        partLabel: "Part 3",
        name: "Listening for Information",
        instructions:
          "You will hear a conversation in which someone asks for information. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 40,
        answerSeconds: 75,
        transcript: `Caller: Hi, I just moved to the area and I'm looking for a family doctor. Can you tell me how your clinic works?
Receptionist: Of course. We're a walk-in and family practice clinic. For walk-ins, we're open Monday to Friday from eight a.m. to six p.m., and Saturdays from nine to one.
Caller: Do I need an appointment for a regular check-up?
Receptionist: For a check-up with an assigned family doctor, yes, you'd need an appointment, but we currently have three doctors accepting new patients.
Caller: Oh good. How long is the wait to get a first appointment with a new doctor?
Receptionist: Right now it's about three weeks for a first appointment, but if it's urgent, you can always come in as a walk-in in the meantime.
Caller: That's helpful. Do you accept health cards from other provinces?
Receptionist: Yes, we accept out-of-province health cards for the first three months after you move, but after that you'll need to register with the local health plan.
Caller: Good to know. What about lab work, like blood tests? Do I need to go elsewhere?
Receptionist: No, we have an on-site lab that's open the same hours as the walk-in clinic, so blood work can usually be done right after your appointment.
Caller: Perfect. Is there parking at the clinic?
Receptionist: There's a small lot in front with about fifteen spaces, free for the first hour, then two dollars per additional hour.
Caller: Last question, can I request appointment reminders by text?
Receptionist: Yes, just give us your mobile number when you register, and our system sends a reminder twenty-four hours before your appointment.
Caller: That's great, thank you so much for the information.`,
        questions: [
          {
            q: "What are the walk-in clinic hours on Saturday?",
            options: ["8 a.m. to 6 p.m.", "9 a.m. to 1 p.m.", "Closed", "24 hours"],
            correct: 1,
            explain: "The receptionist says the clinic is open Saturdays from nine to one.",
          },
          {
            q: "How many doctors are currently accepting new patients?",
            options: ["One", "Two", "Three", "None"],
            correct: 2,
            explain: "The receptionist says there are currently three doctors accepting new patients.",
          },
          {
            q: "How long is the wait for a first appointment with a new doctor?",
            options: ["Same day", "About 3 weeks", "6 months", "1 year"],
            correct: 1,
            explain: "The receptionist says the current wait is about three weeks for a first appointment.",
          },
          {
            q: "How long can the caller use an out-of-province health card at the clinic?",
            options: ["1 month", "3 months", "1 year", "Indefinitely"],
            correct: 1,
            explain:
              "The receptionist says out-of-province health cards are accepted for the first three months after moving.",
          },
          {
            q: "Where can lab work be done?",
            options: [
              "Only at a separate hospital",
              "On-site at the clinic",
              "Only downtown",
              "Nowhere nearby",
            ],
            correct: 1,
            explain: "The receptionist says the clinic has an on-site lab open the same hours as the walk-in clinic.",
          },
          {
            q: "How does the clinic send appointment reminders?",
            options: [
              "By mail",
              "By text, 24 hours before the appointment",
              "By phone call only",
              "They don't send reminders",
            ],
            correct: 1,
            explain:
              "The receptionist says their system sends a text reminder twenty-four hours before the appointment.",
          },
        ],
      },
      {
        id: "t8_l4",
        partLabel: "Part 4",
        name: "Listening to a News Item",
        instructions:
          "You will hear a short news report. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 30,
        answerSeconds: 65,
        transcript: `The city council approved a new curbside composting program yesterday that will roll out to all residential neighborhoods beginning in January. Under the program, households will receive a small kitchen bin along with a larger outdoor cart for collecting food scraps and yard waste, which will be picked up weekly, separate from the regular garbage and recycling schedule. City officials estimate the program could divert up to forty percent of household waste currently sent to the landfill, extending its lifespan by several years. The initiative follows a successful year-long pilot project in two neighborhoods, where participation rates reached nearly seventy percent. Some residents have raised concerns about odor and pests, but city officials say the sealed bins and weekly pickup schedule are designed specifically to address those issues. The program will cost the city an estimated one point eight million dollars in its first year, covered mostly by a provincial grant aimed at reducing landfill waste. Residents can expect their new bins delivered starting in early December, ahead of the January launch.`,
        questions: [
          {
            q: "What new program was approved?",
            options: [
              "A curbside composting program",
              "A bike-share program",
              "A bottle deposit program",
              "A solar panel subsidy",
            ],
            correct: 0,
            explain: "The report says the city council approved a new curbside composting program.",
          },
          {
            q: "When will the program begin citywide?",
            options: ["This month", "In January", "Next summer", "In two years"],
            correct: 1,
            explain: "The report says the program will roll out to all residential neighborhoods beginning in January.",
          },
          {
            q: "What percentage of household waste could be diverted from the landfill?",
            options: ["10%", "25%", "40%", "70%"],
            correct: 2,
            explain: "The report states officials estimate the program could divert up to forty percent of household waste.",
          },
          {
            q: "What concern have some residents raised?",
            options: ["Cost of the bins", "Odor and pests", "The pickup day", "Bin size"],
            correct: 1,
            explain: "The report says some residents have raised concerns about odor and pests.",
          },
          {
            q: "How was the pilot project's participation rate described?",
            options: ["Below 10%", "Around 30%", "Nearly 70%", "Exactly 50%"],
            correct: 2,
            explain: "The report says the pilot project saw participation rates reach nearly seventy percent.",
          },
        ],
      },
      {
        id: "t8_l5",
        partLabel: "Part 5",
        name: "Listening to a Discussion",
        instructions:
          "You will hear two coworkers discussing a workplace topic. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Farah: Did you see the plans for the office redesign? They want to remove most of the private offices and go fully open-concept.
Deepak: I did. Honestly, I have concerns. I take a lot of client calls, and it's hard to do that without some kind of private space.
Farah: That's a fair point. I read they're planning a few small phone booths scattered around for calls, but I'm not sure there will be enough for everyone.
Deepak: How many booths are they planning?
Farah: The plan mentions six phone booths for a floor of about eighty employees, which honestly sounds like it could get crowded at peak times.
Deepak: That does sound tight. On the positive side, I think open seating could help with collaboration. Our team has struggled to communicate quickly since everyone's behind closed doors right now.
Farah: True, and I've heard open layouts can make it easier for new employees to ask quick questions instead of feeling like they're interrupting someone in an office.
Deepak: That's a real benefit. My other worry is noise. Open spaces can get loud, especially near the kitchen area.
Farah: They're actually planning to add sound-absorbing panels and move the kitchen further from the main desks, according to the memo.
Deepak: That helps a little. I also wonder about storage. Right now I keep a lot of files and materials in my office cabinet.
Farah: The plan includes personal lockers for each employee, though smaller than what people currently have, so some downsizing will be needed.
Deepak: Sounds like there will be some adjustment either way. I guess I'd support it if the phone booth shortage gets addressed before the move.
Farah: Agreed, that seems like the biggest practical issue left to solve.`,
        questions: [
          {
            q: "What redesign is being discussed?",
            options: [
              "Adding more private offices",
              "Moving to a fully open-concept layout",
              "Closing the office permanently",
              "Expanding the parking lot",
            ],
            correct: 1,
            explain:
              "Farah says the plans would remove most private offices and go fully open-concept.",
          },
          {
            q: "What is Deepak's initial concern?",
            options: [
              "He dislikes his current desk",
              "He takes client calls that need privacy",
              "He wants a window view",
              "He doesn't like new furniture",
            ],
            correct: 1,
            explain: "Deepak says he takes a lot of client calls and it's hard to do that without some private space.",
          },
          {
            q: "How many phone booths are planned for about eighty employees?",
            options: ["Two", "Four", "Six", "Ten"],
            correct: 2,
            explain: "Farah says the plan mentions six phone booths for a floor of about eighty employees.",
          },
          {
            q: "What collaboration benefit does Farah mention?",
            options: [
              "Faster internet",
              "It's easier for new employees to ask quick questions",
              "More free snacks",
              "Shorter meetings",
            ],
            correct: 1,
            explain:
              "Farah says open layouts can make it easier for new employees to ask quick questions instead of feeling like they're interrupting.",
          },
          {
            q: "What is Deepak's second concern?",
            options: [
              "Parking availability",
              "Noise levels near the kitchen",
              "Lack of natural light",
              "Elevator wait times",
            ],
            correct: 1,
            explain: "Deepak says his other worry is noise, especially near the kitchen area.",
          },
          {
            q: "What solution addresses the noise concern?",
            options: [
              "Banning talking",
              "Sound-absorbing panels and relocating the kitchen",
              "Closing the kitchen entirely",
              "Adding more desks",
            ],
            correct: 1,
            explain:
              "Farah says the memo mentions adding sound-absorbing panels and moving the kitchen further from the main desks.",
          },
          {
            q: "What storage solution is planned?",
            options: [
              "No storage at all",
              "Personal lockers smaller than current office cabinets",
              "A shared storage room only",
              "Everyone keeps their office cabinet",
            ],
            correct: 1,
            explain:
              "Farah says the plan includes personal lockers for each employee, though smaller than what people currently have.",
          },
          {
            q: "What would make Deepak support the redesign?",
            options: [
              "Getting his own office back",
              "Addressing the phone booth shortage",
              "Cancelling the move",
              "Adding a rooftop patio",
            ],
            correct: 1,
            explain:
              "Deepak says he would support it if the phone booth shortage gets addressed before the move.",
          },
        ],
      },
      {
        id: "t8_l6",
        partLabel: "Part 6",
        name: "Listening to Viewpoints",
        instructions:
          "You will hear three people give their opinions on a topic during a radio call-in segment. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 45,
        answerSeconds: 80,
        transcript: `Host: Today we're asking, should elementary schools limit or eliminate homework? Let's start with Naomi.
Naomi: I think homework for young kids causes way more stress than benefit. My daughter comes home exhausted from a full day at school, and then we spend another hour fighting over worksheets. Family time and play matter more at that age.
Host: Strong feelings there. Patrick, what's your view?
Patrick: I disagree. Homework, even a little, helps reinforce what's taught in class and builds study habits early. Without any practice at home, some concepts just don't stick, especially in math.
Host: And Sherry, where do you stand?
Sherry: I'm in between. I think a small, age-appropriate amount, like ten minutes per grade level, can help without overwhelming kids. The problem is when schools assign the same heavy load to a six-year-old as to a twelve-year-old.
Host: Naomi, how would you respond to Patrick's point about study habits?
Naomi: I'd say reading together at home or doing hands-on activities builds those habits just as well, without the stress of formal assignments.
Host: And Patrick, what about Sherry's age-appropriate suggestion?
Patrick: Actually, I think that's reasonable. I was more arguing against eliminating homework completely, not against making it lighter for younger grades.
Host: Sounds like there's some room for agreement there. Thanks to all three of you for calling in.`,
        questions: [
          {
            q: "What is Naomi's main argument?",
            options: [
              "Homework improves grades",
              "Homework causes stress and reduces family and play time",
              "Homework is too easy",
              "Homework should double",
            ],
            correct: 1,
            explain:
              "Naomi says homework for young kids causes more stress than benefit and that family time and play matter more.",
          },
          {
            q: "What is Patrick's main argument?",
            options: [
              "Homework has no benefit",
              "Homework reinforces learning and builds study habits",
              "Homework should be banned",
              "Homework is only for high schoolers",
            ],
            correct: 1,
            explain:
              "Patrick says homework, even a little, helps reinforce what's taught in class and builds study habits early.",
          },
          {
            q: "What is Sherry's proposed compromise?",
            options: [
              "No homework ever",
              "Unlimited homework",
              "A small age-appropriate amount, like ten minutes per grade level",
              "Only homework on weekends",
            ],
            correct: 2,
            explain:
              "Sherry says a small, age-appropriate amount, like ten minutes per grade level, could help without overwhelming kids.",
          },
          {
            q: "How does Naomi respond to Patrick's study-habits point?",
            options: [
              "She agrees completely",
              "She suggests reading together and hands-on activities can build habits without stress",
              "She says habits don't matter",
              "She refuses to answer",
            ],
            correct: 1,
            explain:
              "Naomi says reading together at home or hands-on activities can build study habits just as well without the stress of formal assignments.",
          },
          {
            q: "How does Patrick respond to Sherry's suggestion?",
            options: [
              "He rejects it outright",
              "He says it's reasonable and clarifies he opposes total elimination, not lighter homework",
              "He changes the topic",
              "He says he agrees only for high schoolers",
            ],
            correct: 1,
            explain:
              "Patrick says Sherry's idea is reasonable and clarifies he was arguing against eliminating homework completely, not against lighter homework for younger grades.",
          },
          {
            q: "What can be concluded about the discussion?",
            options: [
              "No common ground exists",
              "There is some room for agreement around lighter, age-appropriate homework",
              "Naomi changes her mind completely",
              "The host ends the segment in open disagreement",
            ],
            correct: 1,
            explain:
              "The host notes there is some room for agreement, and Patrick's final response supports lighter homework for younger grades.",
          },
        ],
      },
    ],
  };

  window.__listeningTests = window.__listeningTests || [];
  window.__listeningTests.push(test);
})();
