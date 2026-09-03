// Listening Practice Test 4 — original content modeled on the official CELPIP-General format
// (Part 1: 8 questions, Part 2: 5, Part 3: 6, Part 4: 5, Part 5: 8, Part 6: 6 — 38 total, matching
// the officially documented question counts for each part).

(function () {
  const test = {
    testNumber: 4,
    parts: [
      {
        id: "t4_l1",
        partLabel: "Part 1",
        name: "Listening to Problem Solving",
        instructions:
          "You will hear a conversation about a problem. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Elena: Marco, we have a serious problem. The convection oven just died, and we have the Hendricks anniversary catering order due out in four hours.
Marco: What happened to it?
Elena: I don't know, it just stopped heating. I already called the repair company, but they said the earliest they can send someone is tomorrow.
Marco: Tomorrow's no good, we need forty trays of lasagna and roasted vegetables done by two. Can we use the smaller oven upstairs?
Elena: It only fits eight trays at a time, so it would take way too many rounds to get through everything by two.
Marco: What if we call Antonio's down the street? I know their kitchen isn't in use in the afternoons.
Elena: That's actually a great idea. I'll call and ask if we can rent their kitchen for a few hours.
Marco: While you do that, I'll start prepping everything here so it's ready to go the moment we have an oven.
Elena: Good thinking. If Antonio's says no, what's our backup?
Marco: We could also split the order, use our small oven for half and see if the deli next door would let us use theirs for the other half.
Elena: That's more complicated with staff running between two locations, but it beats not delivering at all.
Marco: Agreed, let's hope Antonio's says yes so we don't have to juggle two kitchens.
Elena: I'm calling now. If he agrees, I'll need you to load the van with all the trays and ingredients right away.
Marco: Understood. And should we tell the Hendricks family about the situation?
Elena: Not unless it becomes unavoidable. I'd rather solve it quietly and deliver on time than worry them for nothing.
Marco: Fair enough. Let's get moving.`,
        questions: [
          {
            q: "What is the main problem in the conversation?",
            options: [
              "The catering order was cancelled.",
              "The convection oven broke down hours before a big catering order is due.",
              "The delivery van won't start.",
              "The Hendricks family changed their order.",
            ],
            correct: 1,
            explain:
              "Elena explains the convection oven died and the Hendricks catering order is due in four hours.",
          },
          {
            q: "What did the repair company say?",
            options: [
              "They can fix it within the hour.",
              "The earliest they can send someone is tomorrow.",
              "They no longer service that type of oven.",
              "They need the oven brought to their shop.",
            ],
            correct: 1,
            explain: "Elena says she already called the repair company, and the earliest they can come is tomorrow.",
          },
          {
            q: "Why won't the upstairs oven solve the problem in time?",
            options: [
              "It isn't working either.",
              "It only fits eight trays at a time, requiring too many rounds by two o'clock.",
              "It's reserved for another order.",
              "It's too far from the kitchen.",
            ],
            correct: 1,
            explain:
              "Elena explains the smaller upstairs oven only fits eight trays, which would take too many rounds to finish by two.",
          },
          {
            q: "What is Marco's suggestion for a nearby kitchen?",
            options: [
              "Renting a food truck",
              "Calling Antonio's, since their kitchen is unused in the afternoons",
              "Using the deli's oven exclusively",
              "Borrowing an oven from a customer",
            ],
            correct: 1,
            explain: "Marco suggests calling Antonio's down the street since their kitchen isn't in use in the afternoons.",
          },
          {
            q: "What does Marco do while Elena makes the phone call?",
            options: [
              "He goes home for the day.",
              "He starts prepping everything so it's ready once an oven is available.",
              "He calls the Hendricks family.",
              "He drives to the repair shop.",
            ],
            correct: 1,
            explain: "Marco says he will start prepping everything so it's ready the moment they have an oven.",
          },
          {
            q: "What is the backup plan if Antonio's says no?",
            options: [
              "Cancel the order entirely",
              "Split the order between the small oven and the deli next door",
              "Ask the Hendricks family to reschedule",
              "Use only paper trays without baking",
            ],
            correct: 1,
            explain:
              "Marco proposes splitting the order, using their small oven for half and asking the deli next door for the other half.",
          },
          {
            q: "Why does Elena say the backup plan is more complicated?",
            options: [
              "It costs significantly more money.",
              "It requires staff running between two locations.",
              "It requires new ingredients.",
              "It requires special permits.",
            ],
            correct: 1,
            explain: "Elena notes the backup plan is more complicated because it requires staff running between two locations.",
          },
          {
            q: "Does Elena want to tell the Hendricks family about the problem?",
            options: [
              "Yes, immediately.",
              "Not unless it becomes unavoidable.",
              "Yes, but only after the event.",
              "She already told them.",
            ],
            correct: 1,
            explain:
              "Elena says she'd rather solve the problem quietly and deliver on time than worry the family unless it becomes unavoidable.",
          },
        ],
      },
      {
        id: "t4_l2",
        partLabel: "Part 2",
        name: "Listening to a Daily Life Conversation",
        instructions:
          "You will hear a conversation between two friends. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 35,
        answerSeconds: 65,
        transcript: `Derek: Hey, are we still good for leaving Friday morning for the trip?
Priya: About that — my car started making a weird grinding noise when I brake. I took it to the shop this morning.
Derek: Oh no, what did they say?
Priya: They said the brake pads are almost completely worn down and need to be replaced before any long drive, especially since we're going through the mountains.
Derek: That sounds important to fix. How long will the repair take?
Priya: They said they can do it today, but the part they need isn't in stock, so it'll be ready tomorrow afternoon instead.
Derek: That still works for Friday morning. How much is it going to cost?
Priya: About two hundred and forty dollars, which is annoying, but way better than dealing with brake failure on a mountain road.
Derek: Definitely. Should we still take your car, or would it make more sense to take mine instead?
Priya: Actually, my car probably makes more sense since it has more trunk space for all our gear, plus better gas mileage on the highway.
Derek: True. Do you want me to come with you tomorrow to pick it up, just in case?
Priya: That would help, actually, in case they find something else once they get into it.
Derek: No problem, I'll come by around three. Should we still stick with our six a.m. departure time Friday?
Priya: I think so, especially since the car will be freshly serviced by then. We'll just need to double check everything Thursday night.
Derek: Sounds like a plan. Glad you caught it before we left.`,
        questions: [
          {
            q: "What problem did Priya's car have?",
            options: [
              "A flat tire",
              "A grinding noise when braking due to worn brake pads",
              "An overheating engine",
              "A dead battery",
            ],
            correct: 1,
            explain:
              "Priya explains her car made a grinding noise when braking and the shop found the brake pads almost completely worn down.",
          },
          {
            q: "Why won't the repair be finished until tomorrow?",
            options: [
              "The shop is too busy today.",
              "The part they need isn't in stock.",
              "Priya can't pay until tomorrow.",
              "The mechanic is on vacation.",
            ],
            correct: 1,
            explain: "Priya says the shop could do it today, but the needed part isn't in stock until tomorrow afternoon.",
          },
          {
            q: "About how much will the brake repair cost?",
            options: ["Forty dollars", "Two hundred and forty dollars", "Six hundred dollars", "It's free under warranty"],
            correct: 1,
            explain: "Priya says the repair will cost about two hundred and forty dollars.",
          },
          {
            q: "Why do they decide to take Priya's car instead of Derek's?",
            options: [
              "Derek's car is broken too.",
              "Priya's car has more trunk space and better highway gas mileage.",
              "Priya's car is newer.",
              "Derek doesn't have a valid license.",
            ],
            correct: 1,
            explain: "Priya points out her car has more trunk space for their gear and better gas mileage on the highway.",
          },
          {
            q: "What time are they still planning to depart on Friday?",
            options: ["Six a.m.", "Nine a.m.", "Noon", "Three p.m."],
            correct: 0,
            explain: "Priya confirms they should stick with their six a.m. departure time on Friday.",
          },
        ],
      },
      {
        id: "t4_l3",
        partLabel: "Part 3",
        name: "Listening for Information",
        instructions:
          "You will hear a conversation in which someone asks for information. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 40,
        answerSeconds: 75,
        transcript: `Caller: Hi, I'm looking to switch internet providers and wanted to ask about your plans.
Rep: Sure, happy to help. Are you looking for internet only, or a bundle with TV?
Caller: Internet only for now. What speeds do you offer?
Rep: We have three tiers: 100 megabits for forty-nine dollars, 300 megabits for sixty-nine dollars, and one gigabit for eighty-nine dollars a month.
Caller: I work from home and do a lot of video calls, which would you recommend?
Rep: For heavy video conferencing along with regular streaming, I'd recommend at least the 300 megabit plan, especially if multiple people in the house are online at once.
Caller: That sounds right, we have three people usually online. Is there a contract?
Rep: No contract required, but if you commit to a two-year term, you get twenty dollars off installation, which normally costs seventy-five dollars.
Caller: That's good to know. Is equipment included?
Rep: The modem is included free, but the router is an extra eight dollars a month to rent, or you can buy your own compatible router instead.
Caller: I'll probably buy my own then. How long does installation usually take to schedule?
Rep: Typically within five to seven business days, though we do have some earlier openings for morning appointments this week if you're not picky about time.
Caller: I'll take the earliest opening. Last question, is there a data cap?
Rep: No data caps on any of our plans, so you can use as much as you need.
Caller: Great, that settles it, I'll go with the 300 megabit plan.
Rep: Perfect, let me get your installation scheduled.`,
        questions: [
          {
            q: "How much does the 300 megabit plan cost per month?",
            options: ["Forty-nine dollars", "Sixty-nine dollars", "Eighty-nine dollars", "One hundred nine dollars"],
            correct: 1,
            explain: "The rep lists the 300 megabit plan at sixty-nine dollars a month.",
          },
          {
            q: "Which plan does the rep recommend for heavy video calls with multiple people online?",
            options: ["100 megabits", "300 megabits", "One gigabit only if no one else is online", "None of the plans"],
            correct: 1,
            explain:
              "The rep recommends at least the 300 megabit plan for heavy video conferencing and streaming with multiple users.",
          },
          {
            q: "What happens if the caller commits to a two-year term?",
            options: [
              "They get a free router permanently.",
              "They get twenty dollars off the installation fee.",
              "They get unlimited data upgrades.",
              "They get a free TV bundle.",
            ],
            correct: 1,
            explain: "The rep explains a two-year term commitment gets twenty dollars off the normally seventy-five-dollar installation fee.",
          },
          {
            q: "What does the caller decide to do about the router?",
            options: [
              "Rent it for eight dollars a month",
              "Buy their own compatible router",
              "Use the modem as a router too",
              "Ask for it to be included free",
            ],
            correct: 1,
            explain: "The caller says they'll probably buy their own router instead of renting it for eight dollars a month.",
          },
          {
            q: "How soon can installation typically be scheduled?",
            options: [
              "The same day",
              "Typically five to seven business days, with some earlier openings available",
              "Only on weekends",
              "It takes a full month",
            ],
            correct: 1,
            explain: "The rep says installation typically takes five to seven business days, though earlier morning openings are available this week.",
          },
          {
            q: "Does the provider have a data cap on its plans?",
            options: [
              "Yes, on all plans",
              "Only on the cheapest plan",
              "No, there is no data cap on any plan",
              "Only for business customers",
            ],
            correct: 2,
            explain: "The rep confirms there are no data caps on any of the plans offered.",
          },
        ],
      },
      {
        id: "t4_l4",
        partLabel: "Part 4",
        name: "Listening to a News Item",
        instructions:
          "You will hear a short news report. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 30,
        answerSeconds: 65,
        transcript: `In community news, a new year-round farmers market will open next Saturday inside the renovated Kessler Street warehouse, replacing the seasonal outdoor market that previously ran only from May through October. The indoor location means vendors can now sell throughout the winter months, something many local farmers and producers have requested for years. The market will host forty vendor stalls, roughly double the number that fit at the old outdoor site, and will operate every Saturday and Sunday from eight in the morning until two in the afternoon. Organizers say the renovation cost approximately six hundred thousand dollars, funded jointly by the city and a coalition of local business associations. In addition to produce and baked goods, the new space includes a small seating area where visitors can eat food from the market's several prepared-food vendors. A grand opening celebration is planned for the first weekend, featuring live music and free samples from participating vendors. Organizers hope the year-round schedule will help local farmers maintain steadier income throughout the year rather than relying solely on the warmer months.`,
        questions: [
          {
            q: "Where will the new farmers market be located?",
            options: [
              "In a city park",
              "Inside the renovated Kessler Street warehouse",
              "In the old outdoor lot only",
              "At the community center",
            ],
            correct: 1,
            explain: "The report states the new market will open inside the renovated Kessler Street warehouse.",
          },
          {
            q: "What is the main advantage of the new indoor location?",
            options: [
              "It has free parking.",
              "Vendors can now sell throughout the winter months.",
              "It has lower rent for vendors.",
              "It is closer to downtown.",
            ],
            correct: 1,
            explain: "The report explains the indoor space allows year-round selling, including through winter, unlike the old seasonal market.",
          },
          {
            q: "How many vendor stalls will the new market have?",
            options: ["Twenty", "Forty", "Sixty", "One hundred"],
            correct: 1,
            explain: "The report says the market will host forty vendor stalls, roughly double the old outdoor site.",
          },
          {
            q: "What are the market's operating hours?",
            options: [
              "Saturday and Sunday, eight in the morning until two in the afternoon",
              "Every day, nine to five",
              "Only Saturdays, all day",
              "Weeknights only",
            ],
            correct: 0,
            explain: "The report states the market will operate Saturdays and Sundays from eight in the morning until two in the afternoon.",
          },
          {
            q: "Who funded the renovation of the warehouse?",
            options: [
              "A single private donor",
              "The city and a coalition of local business associations",
              "The federal government only",
              "The vendors themselves",
            ],
            correct: 1,
            explain: "The report says the roughly six-hundred-thousand-dollar renovation was funded jointly by the city and local business associations.",
          },
        ],
      },
      {
        id: "t4_l5",
        partLabel: "Part 5",
        name: "Listening to a Discussion",
        instructions:
          "You will hear two coworkers discussing a workplace topic. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Fatima: Did you see the announcement about switching to hot-desking next month? No more assigned desks.
Greg: I did, and I'm not thrilled. I like having my own space with my monitor set up exactly how I want it.
Fatima: I get that, but I've heard it can actually save the company a lot on office space since not everyone is in every day.
Greg: That makes sense from a cost perspective, but what about people like me who come in five days a week? Won't I still need to find a new spot constantly?
Fatima: I read the plan includes a booking app, so you can reserve the same desk in advance if you want some consistency.
Greg: Oh, that helps. I didn't realize we could actually book ahead rather than just showing up and hoping for the best.
Fatima: Yeah, apparently you can book up to a week ahead. There's also a small number of desks with dual monitors already set up for people who need that.
Greg: Good, because switching my whole monitor setup daily would be a nightmare. What about storage for personal items?
Fatima: Everyone gets a small locker instead of a desk drawer, so you'd keep your things there overnight.
Greg: That seems reasonable. My last concern is noise, open shared areas can get loud.
Fatima: They're also adding more small phone booths and quiet rooms for calls or focused work, which we don't really have enough of right now.
Greg: Honestly, hearing all this makes me feel better about it. I was picturing chaos, but it sounds more organized than I expected.
Fatima: Same here. I still think it'll take some adjustment, but I'm cautiously on board now.`,
        questions: [
          {
            q: "What change is the company announcing?",
            options: [
              "A move to a new building",
              "Switching to hot-desking, with no more assigned desks",
              "Requiring everyone to work from home",
              "Adding more private offices",
            ],
            correct: 1,
            explain: "Fatima mentions the company is switching to hot-desking next month, meaning no more assigned desks.",
          },
          {
            q: "What benefit does Fatima say hot-desking could bring the company?",
            options: [
              "Faster internet speeds",
              "Saving money on office space since not everyone is in every day",
              "Higher employee salaries",
              "Fewer meetings",
            ],
            correct: 1,
            explain: "Fatima explains the company could save on office space costs since not all employees are present daily.",
          },
          {
            q: "What is Greg's main concern as someone who comes in five days a week?",
            options: [
              "He will lose his job.",
              "He'll need to find a new spot constantly.",
              "He'll have to take a pay cut.",
              "He'll be forced to work from home.",
            ],
            correct: 1,
            explain: "Greg worries that as a daily in-office worker, he'll constantly need to find a new place to sit.",
          },
          {
            q: "What eases Greg's concern about finding a spot?",
            options: [
              "A rule guaranteeing him the same desk forever",
              "A booking app that lets him reserve the same desk up to a week ahead",
              "A promise that hot-desking will be cancelled",
              "Extra pay for inconvenience",
            ],
            correct: 1,
            explain: "Fatima explains a booking app lets employees reserve a desk in advance, up to a week ahead, offering some consistency.",
          },
          {
            q: "What is available for people who need dual monitors?",
            options: [
              "Nothing, everyone must use a laptop screen only",
              "A small number of desks already set up with dual monitors",
              "A separate dual-monitor room requiring a fee",
              "Employees must buy their own monitors",
            ],
            correct: 1,
            explain: "Fatima mentions there are a small number of desks with dual monitors already set up for people who need them.",
          },
          {
            q: "How will personal item storage work under the new system?",
            options: [
              "Items must be taken home every day.",
              "Everyone gets a small locker instead of a desk drawer.",
              "Storage will be shared among all employees.",
              "There is no storage solution at all.",
            ],
            correct: 1,
            explain: "Fatima explains everyone will get a small locker to store their things overnight instead of a desk drawer.",
          },
          {
            q: "What is Greg's concern about open shared areas?",
            options: [
              "They are too cold.",
              "They can get loud.",
              "They lack enough desks.",
              "They are too far from the elevator.",
            ],
            correct: 1,
            explain: "Greg raises noise as a concern, since open shared areas can get loud.",
          },
          {
            q: "How is the company addressing the noise concern?",
            options: [
              "By banning phone calls in the office",
              "By adding more phone booths and quiet rooms",
              "By moving everyone to individual offices",
              "By reducing office hours",
            ],
            correct: 1,
            explain: "Fatima says the company is adding more phone booths and quiet rooms for calls and focused work.",
          },
        ],
      },
      {
        id: "t4_l6",
        partLabel: "Part 6",
        name: "Listening to Viewpoints",
        instructions:
          "You will hear three people give their opinions on a topic during a radio call-in segment. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 45,
        answerSeconds: 80,
        transcript: `Host: Today we're talking about whether tipping should be replaced with higher menu prices and no tipping at restaurants. First, Carlos.
Carlos: I'd support ending tipping. Servers' income shouldn't depend on customer mood or how generous a table happens to feel. A built-in service charge with guaranteed wages is fairer and more predictable for workers.
Host: Thanks, Carlos. Next, Denise.
Denise: I actually prefer the tipping system. As a former server myself, I made more through tips on busy nights than I would have on a flat wage, especially during holidays and weekends.
Host: Interesting perspective. And now Felix.
Felix: I see both sides. I think the problem is inconsistency between restaurants — some have adopted no-tipping models successfully, while others tried it and reversed course because staff left for tipped jobs elsewhere. I'd want to see more data before picking a side.
Host: Carlos, how do you respond to Denise's point about earning more through tips?
Carlos: I understand that on good nights tips can be high, but that unpredictability cuts both ways — a slow night or a rude customer can leave someone with almost nothing, which isn't fair either.
Host: And Denise, what about Felix's point on restaurants reversing course?
Denise: That actually supports my view. If skilled servers keep leaving no-tipping restaurants for tipped ones, it suggests many workers genuinely prefer the current system, at least for now.
Host: Thanks to all three of you for your calls today.`,
        questions: [
          {
            q: "What is Carlos's main position?",
            options: [
              "Tipping should be increased.",
              "Tipping should be replaced by a built-in service charge with guaranteed wages.",
              "Restaurants should close on weekends.",
              "Servers should be paid only in tips.",
            ],
            correct: 1,
            explain: "Carlos argues income shouldn't depend on customer mood, and prefers a fairer, guaranteed-wage system.",
          },
          {
            q: "Why does Denise prefer the tipping system?",
            options: [
              "She has never worked as a server.",
              "As a former server, she made more through tips on busy nights than she would on a flat wage.",
              "She thinks tipping is required by law.",
              "She dislikes interacting with customers.",
            ],
            correct: 1,
            explain: "Denise explains that as a former server, she earned more through tips during busy nights, holidays, and weekends.",
          },
          {
            q: "What is Felix's overall position?",
            options: [
              "Strongly for ending tipping",
              "Strongly for keeping tipping",
              "Uncertain, citing inconsistent results between restaurants and wanting more data",
              "Uninterested in the topic",
            ],
            correct: 2,
            explain: "Felix points to inconsistent outcomes across restaurants and says he'd want more data before picking a side.",
          },
          {
            q: "How does Carlos respond to Denise's point about earning more through tips?",
            options: [
              "He agrees completely and changes his opinion.",
              "He says the unpredictability of tips cuts both ways, leaving some workers with almost nothing on slow nights.",
              "He says tips should be banned by law.",
              "He says servers don't deserve extra pay.",
            ],
            correct: 1,
            explain: "Carlos points out that while tips can be high on good nights, a slow night or rude customer can leave a worker with almost nothing.",
          },
          {
            q: "How does Denise respond to Felix's point about restaurants reversing course?",
            options: [
              "She says it proves tipping should be banned.",
              "She says it supports her view that many workers prefer the current tipping system.",
              "She says it has nothing to do with the topic.",
              "She agrees restaurants should stop trying no-tipping models.",
            ],
            correct: 1,
            explain: "Denise argues that servers leaving no-tipping restaurants for tipped ones shows many workers genuinely prefer the current system.",
          },
          {
            q: "What can be concluded about the overall discussion?",
            options: [
              "All three callers reach the same conclusion.",
              "The callers present three distinct positions: end tipping, keep tipping, and wait for more data.",
              "The host declares a winner.",
              "The topic is resolved with new legislation.",
            ],
            correct: 1,
            explain: "Carlos wants to end tipping, Denise wants to keep it, and Felix wants more data — three distinct viewpoints.",
          },
        ],
      },
    ],
  };

  window.__listeningTests = window.__listeningTests || [];
  window.__listeningTests.push(test);
})();
