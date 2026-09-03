// Listening Practice Test 3 — original content modeled on the official CELPIP-General format
// (Part 1: 8 questions, Part 2: 5, Part 3: 6, Part 4: 5, Part 5: 8, Part 6: 6 — 38 total, matching
// the officially documented question counts for each part).

(function () {
  const test = {
    testNumber: 3,
    parts: [
      {
        id: "t3_l1",
        partLabel: "Part 1",
        name: "Listening to Problem Solving",
        instructions:
          "You will hear a conversation about a problem. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Nora: Liam, I need to talk to you about the Whitfield wedding booked for the 20th.
Liam: What's up?
Nora: I just got a call from Lakeside Hall. A pipe burst in their ceiling over the weekend and the main reception room has water damage. They won't have it repaired in time.
Liam: Three weeks isn't much time to find something else. Did they offer any alternatives?
Nora: They said their smaller room is available, but it only holds eighty guests, and the Whitfields' guest list is one hundred twenty.
Liam: That won't work then. What other venues do we know that could handle that size on short notice?
Nora: I already called around. The Garden Pavilion has an opening that same evening, but it's outdoor only with no rain backup.
Liam: Risky in case of weather. What about the Riverside Ballroom?
Nora: They're available and can hold up to one hundred fifty guests, but they're about forty minutes farther from the hotel where most guests are staying.
Liam: That's a real downside for out-of-town guests. Still, it might be our safest option given the room size and no weather risk.
Nora: Agreed. I'll also ask Lakeside Hall for a partial refund since they can't honor the original booking, and see if they can put that toward transportation, maybe a shuttle bus for guests.
Liam: Good idea, that would really help offset the extra distance. Have you told the couple yet?
Nora: Not yet, I wanted to have a solid alternative ready first so they're not left worrying. I'll call them within the hour with the Riverside option and the shuttle plan.
Liam: Perfect. Let's confirm Riverside today so we don't lose the slot to someone else.`,
        questions: [
          {
            q: "What is the main problem in the conversation?",
            options: [
              "The wedding has been cancelled.",
              "A pipe burst caused water damage at the booked venue, which can't be repaired in time.",
              "The couple changed the guest list.",
              "The catering company cancelled.",
            ],
            correct: 1,
            explain:
              "Nora explains that a pipe burst caused water damage at Lakeside Hall and it won't be repaired before the wedding.",
          },
          {
            q: "Why won't Lakeside Hall's smaller room work as an alternative?",
            options: [
              "It costs too much extra.",
              "It only holds eighty guests, but the guest list is one hundred twenty.",
              "It has no parking.",
              "It's already booked for another event.",
            ],
            correct: 1,
            explain:
              "Nora says the smaller room holds only eighty guests, which is too few for the Whitfields' guest list of one hundred twenty.",
          },
          {
            q: "Why is the Garden Pavilion a risky choice?",
            options: [
              "It's too small for the guest list.",
              "It is outdoor only, with no rain backup.",
              "It's too far from the hotel.",
              "It's already booked that evening.",
            ],
            correct: 1,
            explain: "Nora notes that the Garden Pavilion is outdoor only and has no backup plan for rain.",
          },
          {
            q: "What downside does the Riverside Ballroom have?",
            options: [
              "It can't hold enough guests.",
              "It's about forty minutes farther from the guests' hotel.",
              "It doesn't allow outside catering.",
              "It's more expensive than Lakeside Hall.",
            ],
            correct: 1,
            explain:
              "Nora points out that Riverside Ballroom is about forty minutes farther from the hotel where most guests are staying.",
          },
          {
            q: "What does Nora plan to request from Lakeside Hall?",
            options: [
              "A written apology",
              "A partial refund since they can't honor the booking",
              "A free wedding next year",
              "A discount on their smaller room",
            ],
            correct: 1,
            explain:
              "Nora says she will ask Lakeside Hall for a partial refund because they cannot honor the original booking.",
          },
          {
            q: "What does Nora want to put the refund money toward?",
            options: [
              "A larger wedding cake",
              "A shuttle bus for guests",
              "Extra decorations",
              "A discount for the couple",
            ],
            correct: 1,
            explain:
              "Nora suggests using the refund toward transportation, specifically a shuttle bus for guests given the extra distance to Riverside.",
          },
          {
            q: "Why hasn't Nora told the couple about the problem yet?",
            options: [
              "She forgot to call them.",
              "She wanted a solid alternative ready first so they wouldn't be left worrying.",
              "The couple is unreachable.",
              "She is waiting for Liam's permission.",
            ],
            correct: 1,
            explain:
              "Nora explains she wanted to have a solid alternative in place before calling the couple so they aren't left worrying.",
          },
          {
            q: "What do Nora and Liam decide to do right away?",
            options: [
              "Cancel the wedding entirely",
              "Confirm the Riverside Ballroom today so they don't lose the slot",
              "Wait a week before deciding",
              "Ask the couple to choose a venue themselves",
            ],
            correct: 1,
            explain:
              "Liam says they should confirm Riverside Ballroom today so they don't lose the slot to someone else.",
          },
        ],
      },
      {
        id: "t3_l2",
        partLabel: "Part 2",
        name: "Listening to a Daily Life Conversation",
        instructions:
          "You will hear a conversation between two friends. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 35,
        answerSeconds: 65,
        transcript: `Ben: Have you finished the guest list for Mia's surprise party?
Ali: Almost, I have eighteen names so far, but I'm still waiting to hear back from her college roommates.
Ben: Good. Did you settle on the venue? I thought we were doing it at your place.
Ali: Actually, my apartment is too small for that many people, so I booked the back room at Rosie's Diner instead. It fits up to twenty-five comfortably.
Ben: Nice, that's a great spot. What about decorations?
Ali: I ordered balloons and a banner online, they arrive Thursday. I was thinking we set up Saturday morning before the party starts at six.
Ben: Sounds good. What's the plan for keeping her distracted so she doesn't suspect anything?
Ali: Her sister is going to take her shopping downtown that afternoon and bring her to the diner around six fifteen, saying it's just a regular dinner.
Ben: Clever. What about the cake, did you order one?
Ali: Yes, chocolate with raspberry filling, her favorite. I'm picking it up Saturday at four.
Ben: I can help carry things if you need an extra set of hands.
Ali: That would help a lot, actually. Could you pick up the cake with me and also grab ice on the way?
Ben: Sure, no problem. What time should I meet you?
Ali: Let's meet at my place at three thirty, so we have time to grab everything and set up before people start arriving.
Ben: Works for me. This is going to be such a great surprise.`,
        questions: [
          {
            q: "Why did Ali choose Rosie's Diner instead of her apartment?",
            options: [
              "Her apartment is being renovated.",
              "Her apartment is too small for that many people.",
              "The diner offered a free room rental.",
              "Mia asked for a diner party.",
            ],
            correct: 1,
            explain:
              "Ali explains that her apartment is too small for the guest list, so she booked the back room at Rosie's Diner, which fits twenty-five.",
          },
          {
            q: "What is Mia's sister's role in the plan?",
            options: [
              "She is baking the cake.",
              "She will take Mia shopping and bring her to the diner around six fifteen.",
              "She is paying for the venue.",
              "She is making the guest list.",
            ],
            correct: 1,
            explain:
              "Ali explains that Mia's sister will take her shopping downtown and bring her to the diner around six fifteen, pretending it's a regular dinner.",
          },
          {
            q: "What flavor is the cake Ali ordered?",
            options: [
              "Vanilla with buttercream",
              "Chocolate with raspberry filling",
              "Lemon with cream cheese frosting",
              "Carrot cake",
            ],
            correct: 1,
            explain: "Ali says she ordered a chocolate cake with raspberry filling because it's Mia's favorite.",
          },
          {
            q: "What does Ben offer to help with?",
            options: [
              "Writing the guest list",
              "Picking up the cake and grabbing ice",
              "Booking the venue",
              "Buying the decorations",
            ],
            correct: 1,
            explain: "Ben offers to help pick up the cake with Ali and grab ice on the way.",
          },
          {
            q: "What time are Ben and Ali planning to meet before the party?",
            options: ["Six o'clock", "Four o'clock", "Three thirty", "Noon"],
            correct: 2,
            explain:
              "Ali suggests meeting at her place at three thirty so they have time to gather everything and set up.",
          },
        ],
      },
      {
        id: "t3_l3",
        partLabel: "Part 3",
        name: "Listening for Information",
        instructions:
          "You will hear a conversation in which someone asks for information. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 40,
        answerSeconds: 75,
        transcript: `Caller: Hi, I bought my car from your dealership last year and I have some questions about servicing it.
Advisor: Of course, what would you like to know?
Caller: How often should I bring it in for an oil change?
Advisor: For your model, we recommend every eight thousand kilometers or six months, whichever comes first.
Caller: Is tire rotation included with that?
Advisor: Yes, we rotate the tires for free with every oil change as long as you're on our maintenance plan.
Caller: I think I signed up for that when I bought the car. How would I check?
Advisor: I can look that up right now with your license plate number... yes, I see it here, you're enrolled through year three.
Caller: Great. What about the warranty, does that cover anything if something breaks?
Advisor: Your bumper-to-bumper warranty covers most components for three years or sixty thousand kilometers, whichever comes first, and the powertrain warranty extends to five years.
Caller: Good to know. If I bring the car in for a repair that takes a while, is a loaner car available?
Advisor: Yes, if the repair is expected to take more than four hours, we provide a loaner car at no charge, but you do need to book that in advance since we only have a limited number.
Caller: That's helpful. What are your service department hours?
Advisor: We're open Monday to Friday, seven thirty to six, and Saturdays nine to two, closed Sundays.
Caller: Perfect, thank you for all the information.
Advisor: You're welcome, feel free to call anytime to book an appointment.`,
        questions: [
          {
            q: "How often is an oil change recommended for the caller's car?",
            options: [
              "Every five thousand kilometers or three months",
              "Every eight thousand kilometers or six months",
              "Every year regardless of distance",
              "Only when the warning light appears",
            ],
            correct: 1,
            explain:
              "The advisor states the recommended interval is every eight thousand kilometers or six months, whichever comes first.",
          },
          {
            q: "How does the caller's tire rotation get covered?",
            options: [
              "It costs extra every time",
              "It's free with every oil change under the maintenance plan",
              "It's only free once a year",
              "It's not offered by this dealership",
            ],
            correct: 1,
            explain:
              "The advisor explains tire rotation is free with every oil change as long as the customer is on the maintenance plan.",
          },
          {
            q: "How long does the bumper-to-bumper warranty last?",
            options: [
              "One year or twenty thousand kilometers",
              "Three years or sixty thousand kilometers",
              "Five years with no distance limit",
              "It has already expired",
            ],
            correct: 1,
            explain:
              "The advisor states the bumper-to-bumper warranty covers most components for three years or sixty thousand kilometers, whichever comes first.",
          },
          {
            q: "Under what condition is a loaner car provided free of charge?",
            options: [
              "Any time the car is serviced",
              "Only for oil changes",
              "When the repair is expected to take more than four hours",
              "Only for warranty repairs",
            ],
            correct: 2,
            explain:
              "The advisor says a free loaner car is provided if the repair is expected to take more than four hours, and it must be booked in advance.",
          },
          {
            q: "What are the service department's hours on Saturday?",
            options: ["Closed on Saturday", "Nine to two", "Seven thirty to six", "Ten to four"],
            correct: 1,
            explain: "The advisor states the service department is open nine to two on Saturdays.",
          },
          {
            q: "How did the advisor check the caller's maintenance plan enrollment?",
            options: [
              "By asking for a receipt",
              "By looking it up using the license plate number",
              "By checking the caller's email",
              "The advisor could not check it",
            ],
            correct: 1,
            explain:
              "The advisor looks up the enrollment using the caller's license plate number and confirms they are enrolled through year three.",
          },
        ],
      },
      {
        id: "t3_l4",
        partLabel: "Part 4",
        name: "Listening to a News Item",
        instructions:
          "You will hear a short news report. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 30,
        answerSeconds: 65,
        transcript: `In today's local news, the city council approved a new curbside composting program that will begin collection in all residential neighborhoods starting in October. Households will receive a small kitchen bin and a larger outdoor green cart at no cost, delivered during the last two weeks of September. The program accepts food scraps, yard waste, and certain paper products, which will be picked up every two weeks, alternating with the regular recycling collection schedule. City officials say the initiative is expected to divert nearly thirty percent of household waste currently sent to the landfill, extending the landfill's lifespan by an estimated eight years. The program costs roughly one point four million dollars annually to run, funded through a modest increase to the monthly waste collection fee, amounting to about three dollars per household. Residents who don't want to participate can opt out by contacting the city, though officials note that participation is expected to be high based on results from a pilot program that ran in two neighborhoods last year, where over eighty percent of households signed up voluntarily.`,
        questions: [
          {
            q: "When will the new composting program begin collection?",
            options: ["September", "October", "January", "Next summer"],
            correct: 1,
            explain: "The report states that collection under the new program starts in October.",
          },
          {
            q: "What items does the new program accept?",
            options: [
              "Only food scraps",
              "Food scraps, yard waste, and certain paper products",
              "Only yard waste",
              "Plastics and glass",
            ],
            correct: 1,
            explain:
              "The report specifies the program accepts food scraps, yard waste, and certain paper products.",
          },
          {
            q: "How often will the new composting bins be picked up?",
            options: [
              "Every week",
              "Every two weeks, alternating with recycling",
              "Once a month",
              "Only on request",
            ],
            correct: 1,
            explain:
              "The report says pickup happens every two weeks, alternating with the regular recycling collection schedule.",
          },
          {
            q: "By how many years is the landfill's lifespan expected to be extended?",
            options: ["Two years", "Eight years", "Twenty years", "It won't be extended"],
            correct: 1,
            explain:
              "The report states the initiative is expected to extend the landfill's lifespan by an estimated eight years.",
          },
          {
            q: "How is the program being funded?",
            options: [
              "A one-time provincial grant",
              "A modest increase to the monthly waste collection fee, about three dollars per household",
              "Voluntary donations only",
              "Cuts to the recycling budget",
            ],
            correct: 1,
            explain:
              "The report explains the program is funded through a monthly fee increase of about three dollars per household.",
          },
        ],
      },
      {
        id: "t3_l5",
        partLabel: "Part 5",
        name: "Listening to a Discussion",
        instructions:
          "You will hear two coworkers discussing a workplace topic. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Ravi: Did you hear management approved a trial of the four-day work week starting next month?
Simone: I did! I'm honestly thrilled. I've read that companies who tried it saw productivity stay the same or even improve.
Ravi: I'm cautiously optimistic, but I wonder how it'll work for client-facing teams like ours. Clients still expect responses five days a week.
Simone: That's true, but I heard the plan is to stagger which day off people take, so someone's always available Monday through Friday.
Ravi: Oh, that makes more sense. So it's not that the whole company closes on the same day?
Simone: Right, each team picks their own coverage schedule as long as core hours are covered.
Ravi: That helps a lot. My other worry is whether we're expected to cram forty hours into four days, or if it's genuinely a reduced week.
Simone: From what I read in the announcement, hours are reduced to thirty-two, with no change in pay, at least for the six-month trial period.
Ravi: That's a real benefit then, not just the same workload squeezed into fewer days.
Simone: Exactly, and they said they'll measure output and client satisfaction scores throughout the trial to decide whether to make it permanent.
Ravi: I like that they're actually tracking results instead of just guessing. What happens if it doesn't go well?
Simone: The announcement said they'd revert back to five days if client satisfaction drops significantly or deadlines start slipping.
Ravi: Fair enough. I'm willing to give it an honest try.
Simone: Same here. I think it could genuinely improve morale if it works the way they're hoping.`,
        questions: [
          {
            q: "What change is management trialing starting next month?",
            options: [
              "Mandatory overtime",
              "A four-day work week",
              "A move to a new office",
              "A pay cut for all staff",
            ],
            correct: 1,
            explain: "Ravi mentions that management approved a trial of the four-day work week starting next month.",
          },
          {
            q: "Why is Simone optimistic about the change?",
            options: [
              "She dislikes her job.",
              "She has read that companies trying it saw productivity stay the same or improve.",
              "She wants to work more hours.",
              "She was promised a raise.",
            ],
            correct: 1,
            explain:
              "Simone says she's thrilled because she has read that other companies saw productivity stay the same or even improve.",
          },
          {
            q: "What is Ravi's initial concern about the change?",
            options: [
              "He thinks it will hurt company profits.",
              "He wonders how client-facing teams will maintain coverage five days a week.",
              "He dislikes working from home.",
              "He thinks it will increase his commute.",
            ],
            correct: 1,
            explain:
              "Ravi worries clients still expect responses five days a week, which seems at odds with a four-day schedule.",
          },
          {
            q: "How will client coverage be maintained under the new plan?",
            options: [
              "The whole company will close on the same day.",
              "Days off will be staggered so each team maintains coverage all five days.",
              "Clients will only be served four days a week.",
              "A new customer service team will be hired.",
            ],
            correct: 1,
            explain:
              "Simone explains that days off will be staggered, with each team choosing its own coverage schedule so someone is always available.",
          },
          {
            q: "What is Ravi's second concern about the trial?",
            options: [
              "Whether the company can afford it",
              "Whether forty hours will be crammed into four days rather than genuinely reduced",
              "Whether he'll lose his job",
              "Whether the office will be too crowded",
            ],
            correct: 1,
            explain:
              "Ravi wonders whether employees are expected to cram forty hours into four days, or if the week is genuinely shorter.",
          },
          {
            q: "According to the announcement Simone read, what does the trial actually offer?",
            options: [
              "The same forty hours squeezed into four days",
              "Reduced hours to thirty-two, with no change in pay",
              "Reduced pay to match reduced hours",
              "An extra week of vacation instead",
            ],
            correct: 1,
            explain:
              "Simone clarifies that hours are reduced to thirty-two with no change in pay during the six-month trial.",
          },
          {
            q: "How will the company decide whether to make the change permanent?",
            options: [
              "By employee vote only",
              "By measuring output and client satisfaction scores throughout the trial",
              "By flipping a coin",
              "It's already been decided to make it permanent",
            ],
            correct: 1,
            explain:
              "Simone says the company will track output and client satisfaction scores during the trial to decide on making it permanent.",
          },
          {
            q: "Under what condition would the company revert back to five days?",
            options: [
              "If employees complain about the change",
              "If client satisfaction drops significantly or deadlines start slipping",
              "If the office lease ends",
              "After exactly one month, regardless of results",
            ],
            correct: 1,
            explain:
              "Simone explains the announcement states they would revert to five days if client satisfaction drops significantly or deadlines slip.",
          },
        ],
      },
      {
        id: "t3_l6",
        partLabel: "Part 6",
        name: "Listening to Viewpoints",
        instructions:
          "You will hear three people give their opinions on a topic during a radio call-in segment. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 45,
        answerSeconds: 80,
        transcript: `Host: Today we're discussing whether elementary schools should assign homework. First, let's hear from Diane.
Diane: I think homework is important even for young kids. It builds responsibility and gives parents a window into what their children are learning in class.
Host: Thanks, Diane. Next, Marcus.
Marcus: I disagree, especially for younger grades. Research I've seen suggests homework has little effect on academic achievement before middle school, and it eats into time kids need for play, family, and rest.
Host: Interesting. And now Yuki.
Yuki: I'm somewhere in between. I think a small amount, maybe fifteen to twenty minutes of reading a night, is reasonable, but I agree with Marcus that heavy worksheet packets for young children go too far.
Host: Diane, how would you respond to the point about eating into playtime?
Diane: I'd say it depends on the amount. A short, well-designed assignment shouldn't take more than twenty or thirty minutes, which still leaves plenty of time for play.
Host: And Marcus, what about Diane's point that it helps parents stay informed?
Marcus: I think there are better ways to keep parents informed, like regular teacher updates or take-home folders, without adding extra work to a child's evening.
Host: Thanks to all three of you for calling in.`,
        questions: [
          {
            q: "What is Diane's main reason for supporting homework?",
            options: [
              "It reduces the school's workload.",
              "It builds responsibility and keeps parents informed about classroom learning.",
              "It is required by law.",
              "It replaces the need for report cards.",
            ],
            correct: 1,
            explain:
              "Diane says homework builds responsibility and gives parents a window into what their children are learning.",
          },
          {
            q: "What is Marcus's main objection to homework for young children?",
            options: [
              "It costs schools too much money.",
              "It has little effect on achievement before middle school and eats into play, family, and rest time.",
              "It is too easy for students.",
              "Teachers dislike grading it.",
            ],
            correct: 1,
            explain:
              "Marcus argues research shows little academic benefit before middle school, and homework takes away time needed for play, family, and rest.",
          },
          {
            q: "What is Yuki's overall position?",
            options: [
              "Strongly in favor of heavy homework packets",
              "Strongly opposed to any homework",
              "A small amount, like nightly reading, is reasonable, but heavy packets go too far",
              "Homework should only be given on weekends",
            ],
            correct: 2,
            explain:
              "Yuki says a small amount like fifteen to twenty minutes of reading is reasonable, but agrees heavy worksheet packets go too far for young children.",
          },
          {
            q: "How does Diane respond to the concern about playtime?",
            options: [
              "She agrees homework should be eliminated.",
              "She says a short, well-designed assignment leaves plenty of time for play.",
              "She says playtime isn't important for children.",
              "She suggests homework only on weekends.",
            ],
            correct: 1,
            explain:
              "Diane responds that a short assignment of twenty to thirty minutes still leaves plenty of time for play.",
          },
          {
            q: "How does Marcus respond to the point about keeping parents informed?",
            options: [
              "He agrees homework is the best way to inform parents.",
              "He suggests better alternatives like teacher updates or take-home folders.",
              "He says parents shouldn't be informed at all.",
              "He has no response to this point.",
            ],
            correct: 1,
            explain:
              "Marcus argues there are better ways to inform parents, such as regular teacher updates or take-home folders, without adding to a child's evening workload.",
          },
          {
            q: "What can be concluded about the overall discussion?",
            options: [
              "All three callers fully agree with each other.",
              "The callers present three distinct positions: for homework, against homework, and a middle ground.",
              "The host cuts the segment short.",
              "A final policy decision is announced.",
            ],
            correct: 1,
            explain:
              "Diane supports homework, Marcus opposes it for young children, and Yuki takes a middle position — three distinct viewpoints.",
          },
        ],
      },
    ],
  };

  window.__listeningTests = window.__listeningTests || [];
  window.__listeningTests.push(test);
})();
