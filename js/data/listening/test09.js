// Listening Practice Test 9 — original content modeled on the official CELPIP-General format
// (Part 1: 8 questions, Part 2: 5, Part 3: 6, Part 4: 5, Part 5: 8, Part 6: 6 — 38 total, matching
// the officially documented question counts for each part).

(function () {
  const test = {
    testNumber: 9,
    parts: [
      {
        id: "t9_l1",
        partLabel: "Part 1",
        name: "Listening to Problem Solving",
        instructions:
          "You will hear a conversation about a problem. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Julia: Tom, we have a problem in the main hall. The projector for the keynote just stopped working, and the livestream starts in forty minutes.
Tom: What happened, is it the bulb or the connection?
Julia: The tech checked it, and he thinks it's the bulb, it's showing a dim, flickering image and won't stay on.
Tom: Do we have a spare bulb on-site?
Julia: No, we didn't pack a spare, and the model is a specific one that our supplier doesn't stock locally.
Tom: What about using a different projector from one of the breakout rooms?
Julia: I thought of that. Room B has a smaller projector, but it's not bright enough for a hall this size with the lights on for cameras.
Tom: Could we dim the hall lights instead, to compensate for a weaker projector?
Julia: That might work for the audience, but the camera crew said low lighting will make the livestream footage look poor quality.
Tom: Right, we can't sacrifice the livestream. What about renting from an AV rental company nearby?
Julia: I already called one, called Bright Vision Rentals, and they can deliver a matching projector within thirty minutes, but it'll cost an extra three hundred dollars including delivery and setup.
Tom: Let's do it, the keynote is too important to risk. Can you confirm the order right now?
Julia: Yes, I'm calling them back immediately. I'll also ask the tech to keep troubleshooting the original projector in case we need a backup for the afternoon sessions.
Tom: Good thinking. Let's also tell the emcee to plan for a possible five-minute delay just in case setup takes longer than expected.
Julia: Will do. I'll update you as soon as the new projector arrives.`,
        questions: [
          {
            q: "What is the main problem?",
            options: [
              "The internet went down",
              "The keynote projector's bulb is failing",
              "The speaker cancelled",
              "The hall flooded",
            ],
            correct: 1,
            explain:
              "Julia says the projector for the keynote stopped working and the tech thinks it's the bulb, which is dim and flickering.",
          },
          {
            q: "Why can't they use a spare bulb?",
            options: [
              "No one knows how to change it",
              "There is no spare on-site and the supplier doesn't stock it locally",
              "The bulb was stolen",
              "It's too expensive",
            ],
            correct: 1,
            explain:
              "Julia says they didn't pack a spare and the model is one their supplier doesn't stock locally.",
          },
          {
            q: "Why is Room B's projector not a good substitute?",
            options: [
              "It is also broken",
              "It is not bright enough for the hall with camera lighting",
              "It is the wrong shape",
              "It is already in use",
            ],
            correct: 1,
            explain:
              "Julia says Room B's smaller projector isn't bright enough for a hall this size with the lights on for cameras.",
          },
          {
            q: "Why can't they just dim the hall lights to compensate?",
            options: [
              "The audience will complain",
              "It would make the livestream footage look poor quality",
              "Fire code forbids it",
              "The emcee refuses",
            ],
            correct: 1,
            explain: "Julia says the camera crew told her low lighting will make the livestream footage look poor quality.",
          },
          {
            q: "What solution do they choose?",
            options: [
              "Cancel the keynote",
              "Rent a projector from Bright Vision Rentals",
              "Postpone the keynote to the next day",
              "Use a phone screen instead",
            ],
            correct: 1,
            explain: "Julia says she already called Bright Vision Rentals, and Tom agrees to go with them.",
          },
          {
            q: "How long will delivery take?",
            options: ["10 minutes", "30 minutes", "2 hours", "Next day"],
            correct: 1,
            explain: "Julia says Bright Vision Rentals can deliver a matching projector within thirty minutes.",
          },
          {
            q: "How much extra will the rental cost?",
            options: ["$50", "$150", "$300", "$1000"],
            correct: 2,
            explain: "Julia says the rental will cost an extra three hundred dollars including delivery and setup.",
          },
          {
            q: "What does Tom suggest telling the emcee?",
            options: [
              "Cancel the event",
              "Plan for a possible five-minute delay",
              "Speak twice as fast",
              "Skip the keynote entirely",
            ],
            correct: 1,
            explain: "Tom suggests telling the emcee to plan for a possible five-minute delay in case setup runs long.",
          },
        ],
      },
      {
        id: "t9_l2",
        partLabel: "Part 2",
        name: "Listening to a Daily Life Conversation",
        instructions:
          "You will hear a conversation between two friends. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 35,
        answerSeconds: 65,
        transcript: `Nina: Owen, I was looking at our grocery spending and I think we could cut costs if we plan meals better.
Owen: Yeah, I noticed we throw away a lot of vegetables that go bad before we use them.
Nina: Exactly. What if we made a simple meal plan each Sunday and only bought what's on the list?
Owen: I like that. Should we also start splitting the shopping trips, so we're not both buying the same things separately?
Nina: Good idea. I could go on Sundays, and you could do a smaller top-up trip midweek if we run out of something.
Owen: Works for me. What about buying in bulk for things like rice and pasta? That might save money longer term.
Nina: That makes sense, especially since we go through so much rice. There's a bulk food store two blocks from us.
Owen: I've also thought about cutting back on ordering takeout on weekends. That's probably where a lot of our extra spending goes.
Nina: Agreed, we order out almost every Friday. What if we picked one weekend a month for takeout instead, and cooked something fun at home the other weekends?
Owen: That sounds reasonable. Should we set an actual monthly grocery budget so we can track it?
Nina: Yes, let's aim for three hundred dollars total between the two of us, and split the cost fifty-fifty like always.
Owen: Deal. I'll download a budgeting app so we can both log what we spend and see it in real time.
Nina: Perfect, let's start the meal planning this Sunday and see how much we actually save by the end of the month.`,
        questions: [
          {
            q: "What problem prompts this conversation?",
            options: [
              "Their rent increased",
              "They throw away vegetables and overspend on groceries",
              "They ran out of food entirely",
              "Their landlord complained",
            ],
            correct: 1,
            explain:
              "Nina says she was looking at grocery spending, and Owen notes they throw away a lot of vegetables that go bad.",
          },
          {
            q: "What is the new shopping plan?",
            options: [
              "Only Owen shops from now on",
              "Make a meal plan each Sunday and buy only what's on the list",
              "Order everything online",
              "Stop cooking entirely",
            ],
            correct: 1,
            explain:
              "Nina suggests making a simple meal plan each Sunday and only buying what's on the list.",
          },
          {
            q: "What will they buy in bulk?",
            options: ["Vegetables", "Rice and pasta", "Meat", "Snacks"],
            correct: 1,
            explain: "Owen suggests buying rice and pasta in bulk to save money longer term.",
          },
          {
            q: "How often do they decide to order takeout going forward?",
            options: ["Every Friday", "Twice a week", "One weekend a month", "Never again"],
            correct: 2,
            explain: "Nina suggests picking one weekend a month for takeout instead of nearly every Friday.",
          },
          {
            q: "What monthly grocery budget do they set?",
            options: ["$150", "$300", "$500", "$1000"],
            correct: 1,
            explain: "Nina suggests aiming for three hundred dollars total between the two of them.",
          },
        ],
      },
      {
        id: "t9_l3",
        partLabel: "Part 3",
        name: "Listening for Information",
        instructions:
          "You will hear a conversation in which someone asks for information. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 40,
        answerSeconds: 75,
        transcript: `Caller: Hi, I need to renew my driver's license and I wanted to check what I need to bring.
Clerk: Sure. For a standard renewal, you'll need your current license, one piece of secondary ID like a health card, and proof of your current address, such as a utility bill.
Caller: Do I need a new vision test every time?
Clerk: Not every time. Vision tests are required every second renewal, or immediately if you're over sixty-five, renewing every renewal after that age.
Caller: I'm thirty-four, so I guess that doesn't apply to me yet. How long is the new license valid for?
Clerk: Standard renewals are valid for five years, unless you choose the eight-year option, which costs more upfront but saves you a trip later.
Caller: What's the fee difference between the two?
Clerk: The five-year renewal is forty-five dollars, and the eight-year option is seventy dollars.
Caller: Can I renew online, or do I have to come in person?
Clerk: If your address hasn't changed and you don't need a new photo, you can renew online. Otherwise, you'll need to visit in person for a new photo.
Caller: My address did change recently, so I guess I need to come in.
Clerk: That's right, and don't forget the proof of address in that case, since your license will show the new one.
Caller: How long does the appointment usually take?
Clerk: Walk-ins are accepted, but during peak hours, midday and Saturdays, the wait can be up to an hour. Weekday mornings before ten are usually much faster.
Caller: I'll try to come in early on a weekday then. Thanks for the information.
Clerk: You're welcome, glad to help.`,
        questions: [
          {
            q: "What secondary ID example is given?",
            options: ["Passport", "Health card", "Credit card", "Student ID"],
            correct: 1,
            explain: "The clerk lists a health card as an example of acceptable secondary ID.",
          },
          {
            q: "At what age must someone get a vision test at every renewal?",
            options: ["45", "55", "65", "75"],
            correct: 2,
            explain: "The clerk says vision tests are required immediately if you're over sixty-five, at every renewal after that age.",
          },
          {
            q: "How long is a standard renewal valid?",
            options: ["2 years", "5 years", "8 years", "10 years"],
            correct: 1,
            explain: "The clerk says standard renewals are valid for five years.",
          },
          {
            q: "How much does the 8-year renewal option cost?",
            options: ["$45", "$55", "$70", "$90"],
            correct: 2,
            explain: "The clerk says the eight-year option costs seventy dollars.",
          },
          {
            q: "Why does the caller need to renew in person rather than online?",
            options: [
              "She needs a vision test",
              "Her address changed",
              "She is over 65",
              "She lost her old license",
            ],
            correct: 1,
            explain:
              "The caller says her address changed recently, and the clerk confirms she'll need to visit in person for a new photo in that case.",
          },
          {
            q: "When is the wait time usually shortest?",
            options: ["Midday", "Saturdays", "Weekday mornings before ten", "Evenings"],
            correct: 2,
            explain: "The clerk says weekday mornings before ten are usually much faster than peak hours.",
          },
        ],
      },
      {
        id: "t9_l4",
        partLabel: "Part 4",
        name: "Listening to a News Item",
        instructions:
          "You will hear a short news report. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 30,
        answerSeconds: 65,
        transcript: `The city launched its long-awaited bike-share program this week, placing five hundred rental bikes at fifty stations across the downtown core and surrounding neighborhoods. Riders can unlock a bike using a smartphone app, with pricing starting at two dollars for the first thirty minutes and an additional dollar for each extra fifteen minutes. Annual memberships are also available for eighty dollars, which include unlimited thirty-minute rides for the year. City officials say the program aims to reduce traffic congestion and give residents a low-cost transportation option for short trips. The bikes are equipped with GPS tracking and automatic lights that turn on at dusk for safety. A similar program in a neighboring city saw ridership triple in its second year, and local officials are hoping for similar growth here. Ten more stations are planned for next spring, pending the results of this initial rollout. Officials also noted that helmets are not provided with the rental bikes, so riders are encouraged to bring their own.`,
        questions: [
          {
            q: "How many bike stations were placed across the city?",
            options: ["5", "15", "50", "500"],
            correct: 2,
            explain: "The report says the bikes were placed at fifty stations across the downtown core and surrounding neighborhoods.",
          },
          {
            q: "How much does it cost for the first thirty minutes?",
            options: ["$1", "$2", "$5", "Free"],
            correct: 1,
            explain: "The report states pricing starts at two dollars for the first thirty minutes.",
          },
          {
            q: "What does the annual membership include?",
            options: [
              "Unlimited 30-minute rides for the year",
              "One free bike to keep",
              "Discounted car rentals",
              "Free helmets",
            ],
            correct: 0,
            explain: "The report says the eighty-dollar annual membership includes unlimited thirty-minute rides for the year.",
          },
          {
            q: "What safety feature do the bikes have?",
            options: [
              "Airbags",
              "Automatic lights that turn on at dusk",
              "Seatbelts",
              "Alarm systems",
            ],
            correct: 1,
            explain: "The report says the bikes are equipped with GPS tracking and automatic lights that turn on at dusk.",
          },
          {
            q: "What are riders encouraged to bring themselves?",
            options: [
              "Their own bike lock",
              "Their own helmet",
              "Their own phone charger",
              "Their own bike seat",
            ],
            correct: 1,
            explain: "The report says helmets are not provided, so riders are encouraged to bring their own.",
          },
        ],
      },
      {
        id: "t9_l5",
        partLabel: "Part 5",
        name: "Listening to a Discussion",
        instructions:
          "You will hear two coworkers discussing a workplace topic. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Greg: Did you see the proposal to replace our daily standups with just two longer meetings a week?
Simone: I did. Part of me is relieved, the daily fifteen-minute standup sometimes turns into thirty minutes and breaks up my morning focus time.
Greg: Same here. But I do worry we'll lose the quick daily check that catches small blockers early.
Simone: That's a fair point. If someone's stuck on something Monday, waiting until Thursday's meeting to mention it could waste a lot of time.
Greg: Right. Maybe we could keep a quick async update in a chat channel instead, so people can flag urgent blockers without a full meeting.
Simone: That could work well. A short written update takes two minutes instead of a fifteen-minute call for everyone.
Greg: Exactly. I also like that longer meetings might let us actually dig into problems instead of just listing status updates.
Simone: True, the current standups rarely have time for real discussion, we just say what we did and move on.
Greg: What about new team members though? I think daily standups helped me learn everyone's work when I first joined.
Simone: That's a good point I hadn't considered. Maybe new hires could still get a short daily check-in with their mentor for the first month.
Greg: That seems like a reasonable compromise. Should we suggest that addition when we respond to the proposal?
Simone: Yes, let's send our feedback by Friday, that's the deadline the manager mentioned in the email.
Greg: I'll draft a summary of our suggestions tonight and send it to you to review before we submit it.`,
        questions: [
          {
            q: "What proposal is being discussed?",
            options: [
              "Eliminating all meetings",
              "Replacing daily standups with two longer weekly meetings",
              "Adding a third daily standup",
              "Moving meetings to email only",
            ],
            correct: 1,
            explain: "Greg says the proposal would replace daily standups with just two longer meetings a week.",
          },
          {
            q: "What does Simone like about the proposal?",
            options: [
              "More pay",
              "Relief from a standup that often runs long and breaks up focus time",
              "An extra day off",
              "A new title",
            ],
            correct: 1,
            explain:
              "Simone says she's relieved because the daily standup sometimes runs to thirty minutes and breaks up her morning focus time.",
          },
          {
            q: "What is Greg's main worry?",
            options: [
              "Losing free coffee",
              "Losing quick daily blocker checks",
              "Having no meetings ever",
              "Meetings being too short",
            ],
            correct: 1,
            explain: "Greg worries they'll lose the quick daily check that catches small blockers early.",
          },
          {
            q: "What alternative do they propose for reporting quick blockers?",
            options: [
              "A monthly report",
              "An async chat channel update",
              "Phone calls to the manager",
              "No method is needed",
            ],
            correct: 1,
            explain: "Greg suggests a quick async update in a chat channel so people can flag urgent blockers without a full meeting.",
          },
          {
            q: "What benefit does Greg see in longer meetings?",
            options: [
              "More free time",
              "The ability to dig into problems instead of just listing status",
              "Shorter workdays",
              "More attendees",
            ],
            correct: 1,
            explain: "Greg says longer meetings might let them actually dig into problems instead of just listing status updates.",
          },
          {
            q: "What concern does Greg raise about new team members?",
            options: [
              "They get paid less",
              "They may lose the learning benefit of daily standups",
              "They dislike meetings",
              "They need more vacation",
            ],
            correct: 1,
            explain: "Greg says daily standups helped him learn everyone's work when he first joined, worrying new hires may lose that.",
          },
          {
            q: "What compromise do they consider for new hires?",
            options: [
              "No meetings for new hires",
              "A short daily check-in with a mentor for the first month",
              "Doubling their workload",
              "Having them skip onboarding",
            ],
            correct: 1,
            explain: "Simone suggests new hires could still get a short daily check-in with their mentor for the first month.",
          },
          {
            q: "By when do they need to send feedback?",
            options: ["Today", "Friday", "Next month", "There is no deadline"],
            correct: 1,
            explain: "Simone says they need to send their feedback by Friday, the deadline the manager mentioned.",
          },
        ],
      },
      {
        id: "t9_l6",
        partLabel: "Part 6",
        name: "Listening to Viewpoints",
        instructions:
          "You will hear three people give their opinions on a topic during a radio call-in segment. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 45,
        answerSeconds: 80,
        transcript: `Host: Today's topic — should the government offer subsidies for electric vehicle purchases? Let's start with Carlos.
Carlos: Absolutely, I think subsidies are essential right now. Electric vehicles are still more expensive upfront than gas cars, and subsidies help bridge that gap so more people can afford to make the switch, which helps reduce emissions.
Host: Thanks, Carlos. Beatrice, what's your take?
Beatrice: I'm skeptical. In my experience, most people buying electric vehicles right now are already fairly well-off, since even with subsidies they're pricier than basic gas cars. I think we're using public money to help people who don't really need the help.
Host: An interesting critique. Yusuf, where do you land?
Yusuf: I see merit in both views. I think the problem isn't subsidies themselves, but how they're structured. If subsidies were means-tested, targeted at middle and lower-income buyers rather than available to everyone regardless of income, that would address Beatrice's concern while still encouraging the switch Carlos wants.
Host: Carlos, how do you respond to Beatrice's point about wealthier buyers benefiting most?
Carlos: That's a fair criticism of how current programs work, but I'd rather fix the targeting, like Yusuf suggests, than scrap subsidies completely, since the environmental benefit is still real.
Host: And Beatrice, what do you think of Yusuf's means-tested idea?
Beatrice: Honestly, that addresses my main concern. If the subsidy specifically helped middle-income families afford an electric vehicle rather than subsidizing luxury purchases, I'd be much more supportive.
Host: Sounds like a promising direction. Thanks to all three of you.`,
        questions: [
          {
            q: "What is Carlos's main argument?",
            options: [
              "Subsidies are a waste of money",
              "Subsidies help bridge the price gap and reduce emissions",
              "Gas cars should be banned",
              "Electric vehicles don't need any help",
            ],
            correct: 1,
            explain:
              "Carlos says subsidies help bridge the price gap for electric vehicles, helping more people switch and reduce emissions.",
          },
          {
            q: "What is Beatrice's main criticism?",
            options: [
              "Electric vehicles are unsafe",
              "Subsidies mostly help buyers who are already well-off",
              "Subsidies are too small to matter",
              "She dislikes electric vehicles entirely",
            ],
            correct: 1,
            explain:
              "Beatrice says most people buying electric vehicles are already fairly well-off, so subsidies help people who don't need it.",
          },
          {
            q: "What is Yusuf's proposed solution?",
            options: [
              "Eliminate subsidies completely",
              "Means-tested subsidies targeted at middle and lower-income buyers",
              "Give subsidies only to luxury car buyers",
              "Double subsidies for everyone",
            ],
            correct: 1,
            explain:
              "Yusuf suggests means-tested subsidies targeted at middle and lower-income buyers rather than everyone regardless of income.",
          },
          {
            q: "How does Carlos respond to Beatrice's criticism?",
            options: [
              "He dismisses it",
              "He agrees the targeting should be fixed rather than scrapping subsidies",
              "He says wealthy buyers deserve the most help",
              "He ends the conversation",
            ],
            correct: 1,
            explain:
              "Carlos says it's a fair criticism of current programs but he'd rather fix the targeting than scrap subsidies completely.",
          },
          {
            q: "How does Beatrice respond to Yusuf's idea?",
            options: [
              "She rejects it",
              "She says it addresses her main concern and would make her more supportive",
              "She says it changes nothing",
              "She refuses to comment",
            ],
            correct: 1,
            explain: "Beatrice says the means-tested idea addresses her main concern and she'd be much more supportive.",
          },
          {
            q: "What can be concluded about the discussion?",
            options: [
              "No agreement is reached",
              "The three speakers converge toward a means-tested subsidy approach",
              "Carlos changes to opposing subsidies entirely",
              "The topic remains completely unresolved with rising conflict",
            ],
            correct: 1,
            explain:
              "Both Carlos and Beatrice end up endorsing Yusuf's means-tested approach, showing convergence on that idea.",
          },
        ],
      },
    ],
  };

  window.__listeningTests = window.__listeningTests || [];
  window.__listeningTests.push(test);
})();
