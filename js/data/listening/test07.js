// Listening Practice Test 7 — original content modeled on the official CELPIP-General format
// (Part 1: 8 questions, Part 2: 5, Part 3: 6, Part 4: 5, Part 5: 8, Part 6: 6 — 38 total, matching
// the officially documented question counts for each part).

(function () {
  const test = {
    testNumber: 7,
    parts: [
      {
        id: "t7_l1",
        partLabel: "Part 1",
        name: "Listening to Problem Solving",
        instructions:
          "You will hear a conversation about a problem. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Sofia: Ben, we have a problem. The freight elevator is out of service, and we still need to get all the new desks and monitors up to the fifth floor before the client demo tomorrow morning.
Ben: Are you serious? What happened to the elevator?
Sofia: The building manager said a part broke down over the weekend and the replacement won't arrive until Thursday.
Ben: Thursday? That's two days away. We can't wait that long, the demo is at nine tomorrow.
Sofia: Right. I already asked if the passenger elevator could carry the desks, but the building manager said it's too small — the desks won't fit through the doors.
Ben: What about using the stairs? We could carry things up manually.
Sofia: I thought about that too, but the fifth floor is a long way up, and some of these monitors and the reception desk are heavy. It would take most of the day and we'd risk someone getting hurt.
Ben: True. What about hiring a moving company that has the right equipment, like a hoist or a lift?
Sofia: I called two companies already. One can't come until Friday, but the second one, Reliable Movers, said they have a portable hoist and can send a crew tomorrow morning at seven, three hours before the demo.
Ben: That could work, if they can actually finish in time. How much will that cost?
Sofia: Around four hundred dollars for a half-day job, which is more than we budgeted for the move, but I think it's worth it given the deadline.
Ben: Agreed, let's go with Reliable Movers. Can you confirm the seven a.m. slot and let the front desk know movers will be coming in early?
Sofia: Will do. I'll also ask two of the interns to come in early and help direct the movers to the right rooms so nothing gets left in the hallway.
Ben: Perfect. Let's touch base at six forty-five tomorrow to make sure everything is on track.`,
        questions: [
          {
            q: "What is the main problem in the conversation?",
            options: [
              "The client demo was cancelled.",
              "The freight elevator is broken, blocking the furniture move.",
              "The desks were never ordered.",
              "The building manager refuses to help.",
            ],
            correct: 1,
            explain:
              "Sofia opens by saying the freight elevator is out of service and they still need to move desks and monitors up before the demo.",
          },
          {
            q: "According to the building manager, when will the replacement part arrive?",
            options: ["Today", "Tomorrow morning", "Thursday", "Next week"],
            correct: 2,
            explain:
              "Sofia says the building manager told her the replacement part won't arrive until Thursday.",
          },
          {
            q: "Why can't the passenger elevator be used for the desks?",
            options: [
              "It is also broken.",
              "The desks won't fit through the doors.",
              "It is reserved for clients only.",
              "It is too slow.",
            ],
            correct: 1,
            explain:
              "Sofia says the building manager told her the passenger elevator is too small and the desks won't fit through the doors.",
          },
          {
            q: "Why does Sofia rule out carrying everything up the stairs?",
            options: [
              "The stairwell is locked.",
              "It would take most of the day and risk injury with heavy items.",
              "The stairwell is being painted.",
              "Fire code prohibits it.",
            ],
            correct: 1,
            explain:
              "Sofia explains that the heavy monitors and reception desk make stair-carrying slow and risky for someone getting hurt.",
          },
          {
            q: "Which company can send movers by tomorrow morning?",
            options: [
              "The first company Sofia called",
              "Reliable Movers",
              "The building's maintenance crew",
              "No company could help in time",
            ],
            correct: 1,
            explain:
              "Sofia says the second company, Reliable Movers, has a portable hoist and can send a crew tomorrow at seven a.m.",
          },
          {
            q: "What time will the movers arrive?",
            options: ["Six a.m.", "Seven a.m.", "Nine a.m.", "Noon"],
            correct: 1,
            explain: "Sofia confirms Reliable Movers can send a crew tomorrow morning at seven.",
          },
          {
            q: "How much will the half-day move cost?",
            options: ["$100", "$250", "$400", "$600"],
            correct: 2,
            explain: "Sofia says the half-day job will cost around four hundred dollars.",
          },
          {
            q: "What does Sofia ask the interns to do?",
            options: [
              "Pack boxes",
              "Help direct movers to the right rooms",
              "Call the client to reschedule",
              "Fix the elevator",
            ],
            correct: 1,
            explain:
              "Sofia says she will ask two interns to come in early and help direct the movers to the right rooms.",
          },
        ],
      },
      {
        id: "t7_l2",
        partLabel: "Part 2",
        name: "Listening to a Daily Life Conversation",
        instructions:
          "You will hear a conversation between two friends. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 35,
        answerSeconds: 65,
        transcript: `Maya: Hey Chris, are we still on for planning Ravi's surprise party?
Chris: Yes, definitely. I was thinking we do it at Lakeside Park pavilion since it's covered in case of rain.
Maya: Good idea, but I checked and the pavilion is already booked for a wedding that same afternoon.
Chris: Oh no. What about just hosting it at my place instead? My backyard is pretty big.
Maya: That could work, especially since we can put up a tent if it rains. How many people are we expecting?
Chris: I counted the list — about twenty-five people, mostly from his soccer team and a few coworkers.
Maya: Twenty-five should fit in your backyard. Now, for food, should we order catering or make it potluck?
Chris: I'd rather do potluck to save money, but let's order the cake ourselves so it's a surprise, obviously.
Maya: Agreed. I'll order from Sweet Layer Bakery, they did my sister's cake and it was great.
Chris: Perfect. One issue though — Ravi's sister Priya wants to come but she lives two hours away and doesn't drive.
Maya: I can pick her up on my way, it's not too far out of the way for me.
Chris: That would mean a lot to Ravi. Last thing — we need a cover story to get him to my place without suspecting anything.
Maya: Let's tell him we're having a small game night, just the two of us and maybe one or two others.
Chris: Good plan. I'll send the invites tonight and ask everyone to arrive by six, half an hour before Ravi gets there.`,
        questions: [
          {
            q: "Why can't they use Lakeside Park pavilion?",
            options: [
              "It is closed for renovation.",
              "It is already booked for a wedding.",
              "It is too expensive.",
              "It is too far away.",
            ],
            correct: 1,
            explain:
              "Maya says she checked and the pavilion is already booked for a wedding the same afternoon.",
          },
          {
            q: "Where will the party now be held?",
            options: [
              "At a restaurant",
              "In Chris's backyard",
              "At Maya's apartment",
              "At the community center",
            ],
            correct: 1,
            explain: "Chris suggests hosting it at his place since his backyard is pretty big, and Maya agrees.",
          },
          {
            q: "How many guests are expected?",
            options: ["10", "15", "25", "40"],
            correct: 2,
            explain: "Chris says the list comes to about twenty-five people.",
          },
          {
            q: "What food arrangement do they decide on?",
            options: [
              "Full catering for everyone",
              "Potluck, with the cake ordered from a bakery",
              "Everyone brings their own cake",
              "Chris cooks everything himself",
            ],
            correct: 1,
            explain:
              "Chris suggests potluck to save money but says they should order the cake themselves so it stays a surprise, and Maya names Sweet Layer Bakery.",
          },
          {
            q: "What cover story will they use to get Ravi to the party?",
            options: [
              "A fake work meeting",
              "A small game night",
              "A car repair",
              "A surprise dinner reservation",
            ],
            correct: 1,
            explain:
              "Maya suggests telling Ravi they're having a small game night, just the two of them and maybe one or two others.",
          },
        ],
      },
      {
        id: "t7_l3",
        partLabel: "Part 3",
        name: "Listening for Information",
        instructions:
          "You will hear a conversation in which someone asks for information. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 40,
        answerSeconds: 75,
        transcript: `Caller: Hi, I'm interested in joining your gym, but I have a few questions first.
Staff: Sure, happy to help. What would you like to know?
Caller: What membership options do you offer?
Staff: We have three plans — a basic plan for thirty dollars a month with gym floor access only, a standard plan for fifty dollars that adds group classes, and a premium plan for seventy-five dollars that includes classes plus unlimited guest passes.
Caller: Is there a joining fee?
Staff: Normally yes, it's fifty dollars, but we're waiving that fee for anyone who signs up before the end of this month.
Caller: That's good timing then. What are your hours?
Staff: We're open five a.m. to eleven p.m. on weekdays, and seven a.m. to nine p.m. on weekends.
Caller: Do you offer personal training?
Staff: Yes, personal training is available separately at forty dollars per session, but standard and premium members get one free introductory session.
Caller: What about parking? I've heard it can be hard to find near your location.
Staff: We have a small lot behind the building with twenty spots, but during peak hours, six to eight in the evening, it does fill up fast. There's also a public lot two blocks away.
Caller: Good to know. Is there a contract, or can I cancel anytime?
Staff: Our plans are month to month with no long-term contract, but we do require thirty days' written notice to cancel.
Caller: That sounds reasonable. I think I'll go with the standard plan.
Staff: Great choice, I can get you signed up right now if you'd like.`,
        questions: [
          {
            q: "How much does the standard plan cost per month?",
            options: ["$30", "$50", "$75", "$100"],
            correct: 1,
            explain: "The staff member says the standard plan costs fifty dollars a month.",
          },
          {
            q: "What is being waived until the end of the month?",
            options: [
              "The parking fee",
              "The joining fee",
              "The personal training fee",
              "The class fee",
            ],
            correct: 1,
            explain:
              "The staff member says the fifty-dollar joining fee is being waived for anyone who signs up before the end of the month.",
          },
          {
            q: "What are the gym's weekday hours?",
            options: ["5 a.m. to 11 p.m.", "6 a.m. to 10 p.m.", "7 a.m. to 9 p.m.", "24 hours"],
            correct: 0,
            explain: "The staff member says the gym is open five a.m. to eleven p.m. on weekdays.",
          },
          {
            q: "What do standard and premium members receive regarding personal training?",
            options: [
              "Unlimited free sessions",
              "One free introductory session",
              "A 50% discount forever",
              "Nothing extra",
            ],
            correct: 1,
            explain:
              "The staff member says standard and premium members get one free introductory personal training session.",
          },
          {
            q: "When does the parking lot tend to fill up?",
            options: ["Early morning", "Midday", "6 to 8 p.m.", "Weekends only"],
            correct: 2,
            explain:
              "The staff member says the lot fills up fast during peak hours, six to eight in the evening.",
          },
          {
            q: "What is required to cancel a membership?",
            options: [
              "Nothing, it cancels automatically",
              "A $50 fee",
              "30 days' written notice",
              "A phone call only",
            ],
            correct: 2,
            explain: "The staff member says plans are month to month but require thirty days' written notice to cancel.",
          },
        ],
      },
      {
        id: "t7_l4",
        partLabel: "Part 4",
        name: "Listening to a News Item",
        instructions:
          "You will hear a short news report. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 30,
        answerSeconds: 65,
        transcript: `In city news, construction crews broke ground this week on a new pedestrian bridge that will connect the Riverside neighborhood to the downtown core, crossing over the rail line that has long forced walkers and cyclists to take a lengthy detour. The bridge, funded jointly by the city and a provincial infrastructure grant, is expected to cost three point two million dollars and take about ten months to complete. Officials say the project was pushed forward after a resident petition collected over four thousand signatures citing safety concerns about people crossing the tracks illegally to avoid the detour. Once finished, the bridge will include a wide multi-use path for both pedestrians and cyclists, as well as lighting and security cameras. During construction, a temporary shuttle bus will run every twenty minutes to help residents get downtown without using the detour. The city expects the bridge to be open to the public by next summer, in time for the annual riverside festival.`,
        questions: [
          {
            q: "What will the new bridge connect?",
            options: [
              "Two shopping malls",
              "The Riverside neighborhood and downtown",
              "Two schools",
              "The airport and downtown",
            ],
            correct: 1,
            explain:
              "The report says the bridge will connect the Riverside neighborhood to the downtown core.",
          },
          {
            q: "What prompted officials to move the project forward?",
            options: [
              "A resident petition about safety concerns",
              "A mayoral election promise",
              "A lawsuit against the city",
              "A decrease in bus service",
            ],
            correct: 0,
            explain:
              "The report says the project was pushed forward after a resident petition collected over four thousand signatures about safety concerns.",
          },
          {
            q: "How much is the bridge expected to cost?",
            options: ["$320,000", "$3.2 million", "$32 million", "The cost isn't mentioned"],
            correct: 1,
            explain: "The report states the bridge is expected to cost three point two million dollars.",
          },
          {
            q: "What temporary service will help residents during construction?",
            options: [
              "Free taxis",
              "A shuttle bus every 20 minutes",
              "A new subway line",
              "Nothing; they must use the detour",
            ],
            correct: 1,
            explain:
              "The report says a temporary shuttle bus will run every twenty minutes during construction.",
          },
          {
            q: "When does the city expect the bridge to open?",
            options: ["This winter", "Next summer", "In two years", "No date is given"],
            correct: 1,
            explain:
              "The report says the city expects the bridge to open by next summer, in time for the riverside festival.",
          },
        ],
      },
      {
        id: "t7_l5",
        partLabel: "Part 5",
        name: "Listening to a Discussion",
        instructions:
          "You will hear two coworkers discussing a workplace topic. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Tara: Did you hear HR is switching from annual reviews to quarterly check-ins starting next month?
Omar: I did. I actually think that's a good change. Waiting a full year to get feedback always felt too late to fix anything.
Tara: I agree with that part, but I'm worried it'll just mean four times the paperwork instead of one.
Omar: That's a fair concern. Though from what I read in the announcement, the quarterly ones are supposed to be shorter, just a one-page form instead of the long annual questionnaire.
Tara: Okay, that helps. I also like that each check-in includes a discussion of goals for the next quarter, not just a look backward.
Omar: Right, it's supposed to be more forward-looking. My manager mentioned that raises will still be decided once a year, though, so it's not like quarterly reviews mean quarterly raises.
Tara: Good to know, I was wondering about that. What about the self-assessment part? Do we still have to write those?
Omar: Yes, but it's shorter too, just three questions instead of the ten we used to answer.
Tara: That's manageable. My concern is more about managers who already have big teams. Won't this quadruple their workload?
Omar: That's the one thing I'm not sure about. My manager has twelve direct reports, so doing quarterly check-ins with all of them will take real time.
Tara: Maybe they'll need to block out more calendar time each quarter just for that.
Omar: Probably. Overall though, I think more frequent feedback is worth the extra effort, especially for newer employees who need more guidance.
Tara: Agreed. I just hope managers actually get trained on how to give good feedback, not just told to fill out a new form.
Omar: That would definitely make the difference between this working well and just becoming another item on the checklist.`,
        questions: [
          {
            q: "What change is being discussed?",
            options: [
              "Switching from quarterly to annual reviews",
              "Switching from annual to quarterly reviews",
              "Eliminating reviews entirely",
              "Adding a new bonus program",
            ],
            correct: 1,
            explain:
              "Tara opens by saying HR is switching from annual reviews to quarterly check-ins starting next month.",
          },
          {
            q: "What is Tara's initial worry about the new system?",
            options: [
              "It will increase pay",
              "It will mean four times the paperwork",
              "It will replace her manager",
              "It will become optional",
            ],
            correct: 1,
            explain: "Tara says she is worried it will just mean four times the paperwork instead of one.",
          },
          {
            q: "How does Omar address Tara's paperwork concern?",
            options: [
              "He says paperwork stays the same",
              "He says the quarterly form is shorter than the annual one",
              "He says HR will hire more staff",
              "He dismisses her concern without explanation",
            ],
            correct: 1,
            explain:
              "Omar says the quarterly check-ins are supposed to be shorter, just a one-page form instead of the long annual questionnaire.",
          },
          {
            q: "How often will raises be decided, according to Omar's manager?",
            options: ["Quarterly", "Monthly", "Once a year", "Never"],
            correct: 2,
            explain:
              "Omar says his manager mentioned raises will still be decided once a year.",
          },
          {
            q: "How many self-assessment questions will employees answer in the new system?",
            options: ["3", "5", "10", "15"],
            correct: 0,
            explain:
              "Omar says the self-assessment is shorter, just three questions instead of the ten they used to answer.",
          },
          {
            q: "What is Tara's concern about managers with large teams?",
            options: [
              "They will get bonuses",
              "Quarterly reviews will quadruple their workload",
              "They will be fired",
              "They dislike giving feedback",
            ],
            correct: 1,
            explain:
              "Tara asks whether quarterly check-ins will quadruple the workload for managers who already have big teams.",
          },
          {
            q: "How many direct reports does Omar's manager have?",
            options: ["5", "8", "12", "20"],
            correct: 2,
            explain: "Omar says his manager has twelve direct reports.",
          },
          {
            q: "What does Tara hope will happen alongside the new system?",
            options: [
              "Managers get trained on giving good feedback",
              "The company cancels the change",
              "Employees get more vacation",
              "Salaries increase immediately",
            ],
            correct: 0,
            explain:
              "Tara says she hopes managers actually get trained on how to give good feedback, not just told to fill out a new form.",
          },
        ],
      },
      {
        id: "t7_l6",
        partLabel: "Part 6",
        name: "Listening to Viewpoints",
        instructions:
          "You will hear three people give their opinions on a topic during a radio call-in segment. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 45,
        answerSeconds: 80,
        transcript: `Host: Today's question — should the city ban gas-powered leaf blowers in residential neighborhoods? Let's start with Whitman.
Whitman: I fully support a ban. Those machines are incredibly loud, and the exhaust they produce is far dirtier than a car's, since the small engines don't have the same emissions controls. My kids can't nap on weekends because of the noise from three houses down.
Host: Thanks, Whitman. Now let's hear from Grace.
Grace: I understand the noise complaint, but I run a small landscaping business, and switching my whole crew to electric blowers would cost thousands of dollars we don't have right now. A sudden ban could put small companies like mine out of business.
Host: A real financial concern. And finally, Theo.
Theo: I lean toward a middle path. I don't think an immediate ban is fair to small businesses like Grace's, but I also don't think we should ignore the noise and air quality issues Whitman raised. A phased-in ban over two or three years would give companies time to replace equipment gradually.
Host: Whitman, how would you respond to Grace's cost concern?
Whitman: I'd say the city could offer rebates or low-interest loans to help small landscaping businesses switch to electric equipment, similar to programs some other cities have used.
Host: And Grace, what do you think of Theo's phased approach?
Grace: Honestly, that sounds much more workable than an immediate ban. If I had two or three years and maybe some rebate assistance, I could replace my equipment gradually as it wears out anyway.
Host: It sounds like there's more common ground than it first seemed. Thank you all for calling in.`,
        questions: [
          {
            q: "What is Whitman's main reason for supporting a ban?",
            options: [
              "Cost savings",
              "Noise and pollution concerns",
              "A personal dislike of gardening",
              "A city law already requires it",
            ],
            correct: 1,
            explain:
              "Whitman says the machines are loud and produce dirtier exhaust than a car, citing noise and pollution.",
          },
          {
            q: "What is Grace's main objection to an immediate ban?",
            options: [
              "She likes the noise",
              "The cost of switching equipment could hurt her small business",
              "She thinks electric blowers don't work",
              "She doesn't own a landscaping business",
            ],
            correct: 1,
            explain:
              "Grace says switching her whole crew to electric blowers would cost thousands of dollars and could put a small business like hers out of business.",
          },
          {
            q: "What is Theo's proposed compromise?",
            options: [
              "No ban ever",
              "An immediate full ban",
              "A phased-in ban over two or three years",
              "Banning only gas-powered lawn mowers",
            ],
            correct: 2,
            explain:
              "Theo suggests a phased-in ban over two or three years to give companies time to replace equipment.",
          },
          {
            q: "How does Whitman respond to the cost concern?",
            options: [
              "He dismisses it",
              "He suggests rebates or low-interest loans",
              "He says businesses should just close",
              "He agrees to drop the ban idea",
            ],
            correct: 1,
            explain:
              "Whitman suggests the city could offer rebates or low-interest loans to help small businesses switch equipment.",
          },
          {
            q: "How does Grace react to Theo's phased approach?",
            options: [
              "She rejects it outright",
              "She finds it more workable than an immediate ban",
              "She says it's still too expensive",
              "She stops responding",
            ],
            correct: 1,
            explain:
              "Grace says the phased approach sounds much more workable than an immediate ban.",
          },
          {
            q: "What can be concluded about the discussion's outcome?",
            options: [
              "No agreement was reached at all",
              "The three speakers find some common ground around a phased approach",
              "Grace changes her mind entirely and opposes electric equipment",
              "Whitman abandons his position completely",
            ],
            correct: 1,
            explain:
              "By the end, Grace embraces Theo's phased plan and Whitman offers a cost solution, showing the speakers converge on common ground.",
          },
        ],
      },
    ],
  };

  window.__listeningTests = window.__listeningTests || [];
  window.__listeningTests.push(test);
})();
