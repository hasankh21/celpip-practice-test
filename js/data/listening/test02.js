// Listening Practice Test 2 — original content modeled on the official CELPIP-General format
// (Part 1: 8 questions, Part 2: 5, Part 3: 6, Part 4: 5, Part 5: 8, Part 6: 6 — 38 total, matching
// the officially documented question counts for each part).

(function () {
  const test = {
    testNumber: 2,
    parts: [
      {
        id: "t2_l1",
        partLabel: "Part 1",
        name: "Listening to Problem Solving",
        instructions:
          "You will hear a conversation about a problem. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Taylor: Sam, we've got an issue with today's delivery from Prairie Wholesale Books.
Sam: What happened?
Taylor: We ordered thirty copies of the new cookbook for this weekend's author signing, but the boxes that arrived are full of children's picture books instead.
Sam: That's not good, the signing is Saturday. Did you check if maybe some boxes were just packed wrong, and the cookbooks are in a different box?
Taylor: I opened all five boxes. Every single one has picture books, no cookbooks at all.
Sam: Okay. Did you call the supplier yet?
Taylor: Yes, I spoke with someone in their shipping department. She said our order must have gotten swapped with another store's order at their warehouse.
Sam: Can they get the correct books here by Friday?
Taylor: She said a rush shipment could arrive Friday afternoon if we pay an expedited fee, but there's still some risk of delay since Friday is a holiday for their trucking company.
Sam: What if it doesn't arrive in time?
Taylor: She mentioned their downtown branch, only forty minutes from here, has twelve copies in stock we could pick up ourselves as a backup.
Sam: Twelve isn't enough for thirty people, but it's something. Let's do both: pay for the rush shipment and also send someone to grab the twelve copies Friday morning just in case.
Taylor: Good idea. I'll also ask the author's publicist if she can bring a few extra copies from her own stock, since authors sometimes travel with some.
Sam: Great thought. And what about the picture books we're stuck with?
Taylor: The supplier said we can either return them for a full refund or keep them and get a twenty percent discount since they're already here.
Sam: We could actually use more picture books for the kids' section. Let's keep them at the discount instead of shipping them all back.
Taylor: I'll let the supplier know and get everything moving today.
Sam: Thanks, Taylor. Let's touch base again tomorrow morning to see where things stand.`,
        questions: [
          {
            q: "What is the main problem in the conversation?",
            options: [
              "The author signing was cancelled.",
              "The wrong books were delivered for the weekend signing.",
              "The store received too few boxes.",
              "The supplier stopped answering calls.",
            ],
            correct: 1,
            explain:
              "Taylor explains that thirty cookbooks were ordered for the signing, but the delivered boxes contained children's picture books instead.",
          },
          {
            q: "What did Taylor find after opening all five boxes?",
            options: [
              "Some boxes had cookbooks and some didn't.",
              "All five boxes contained picture books, with no cookbooks at all.",
              "The boxes were empty.",
              "Only one box was mislabeled.",
            ],
            correct: 1,
            explain:
              "Taylor tells Sam that every one of the five boxes contained picture books and none had cookbooks.",
          },
          {
            q: "What did the supplier's shipping department say caused the error?",
            options: [
              "A computer system crash.",
              "The order was likely swapped with another store's order at the warehouse.",
              "The store ordered the wrong title.",
              "The truck broke down on the way.",
            ],
            correct: 1,
            explain:
              "Taylor reports that the shipping department believes the order got swapped with another store's order at their warehouse.",
          },
          {
            q: "What risk is associated with the rush shipment arriving Friday?",
            options: [
              "It costs nothing extra.",
              "It might be delayed because Friday is a holiday for the trucking company.",
              "It can only include half the books.",
              "It requires the store to pick it up in person.",
            ],
            correct: 1,
            explain:
              "Taylor mentions the rush shipment could still be delayed since Friday is a holiday for the supplier's trucking company.",
          },
          {
            q: "What backup option does the downtown branch offer?",
            options: [
              "Thirty copies available for pickup.",
              "Twelve copies available for pickup, forty minutes away.",
              "A full refund on the order.",
              "Free delivery on the next order.",
            ],
            correct: 1,
            explain:
              "Taylor says the supplier's downtown branch, forty minutes away, has twelve copies in stock that could be picked up as a backup.",
          },
          {
            q: "What additional idea does Taylor suggest involving the author?",
            options: [
              "Asking the author to reschedule the signing.",
              "Asking the author's publicist if she can bring extra copies.",
              "Asking the author to sign the picture books instead.",
              "Asking the author to cover the shipping fee.",
            ],
            correct: 1,
            explain:
              "Taylor suggests asking the author's publicist whether the author can bring a few extra copies from her own stock.",
          },
          {
            q: "What does Sam decide to do with the picture books that arrived by mistake?",
            options: [
              "Return them all for a full refund.",
              "Keep them at a twenty percent discount for the kids' section.",
              "Donate them to a school.",
              "Ship them to the downtown branch.",
            ],
            correct: 1,
            explain:
              "Sam decides to keep the picture books at the offered twenty percent discount since the store can use them in the kids' section.",
          },
          {
            q: "What do Sam and Taylor agree to do next?",
            options: [
              "Cancel the author signing.",
              "Touch base again tomorrow morning to check progress.",
              "Switch to a new book supplier immediately.",
              "Wait until Saturday to decide anything.",
            ],
            correct: 1,
            explain:
              "Sam closes the conversation by suggesting they touch base again tomorrow morning to see where things stand.",
          },
        ],
      },
      {
        id: "t2_l2",
        partLabel: "Part 2",
        name: "Listening to a Daily Life Conversation",
        instructions:
          "You will hear a conversation between two friends. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 35,
        answerSeconds: 65,
        transcript: `Casey: So the move is officially set for Saturday morning, right?
Morgan: Yep, I booked the truck for eight a.m. to two p.m. Should be plenty of time since it's just a one-bedroom.
Casey: Did you reserve the service elevator in your new building? My cousin moved into a high-rise last year and said you can't use the regular elevators for moving.
Morgan: I did, actually. The building requires a two-hour reservation, and I booked nine to eleven.
Casey: Good thinking. What about your old place, do you need to reserve anything there?
Morgan: No, it's a ground-floor unit, so we can just load straight from the door.
Casey: That helps a lot. Who else is helping besides me?
Morgan: My brother Eli is coming, and my neighbor Priya said she'd help carry boxes for an hour before she has to leave for work.
Casey: Nice. Do you have everything packed already?
Morgan: Almost everything except the kitchen. I'm keeping the dishes and glasses out until Friday night since I still need them.
Casey: Smart. What about the bookshelf? That thing is heavy.
Morgan: I already disassembled it, so it's just flat panels now, way easier to carry.
Casey: Perfect. Should we order food for everyone after we finish?
Morgan: Definitely, I was thinking pizza. There's a place near the new apartment that delivers.
Casey: Sounds good, I'll bring some drinks and paper plates.
Morgan: Thanks, Casey. I really appreciate you helping out.
Casey: Of course, that's what friends are for. See you Saturday at eight.`,
        questions: [
          {
            q: "When is the moving truck reserved for?",
            options: [
              "Eight a.m. to two p.m.",
              "Nine a.m. to eleven a.m.",
              "Two p.m. to eight p.m.",
              "All day Sunday",
            ],
            correct: 0,
            explain:
              "Morgan says the truck is booked from eight a.m. to two p.m., which should be plenty of time for a one-bedroom move.",
          },
          {
            q: "Why did Morgan reserve the service elevator at the new building?",
            options: [
              "It's cheaper than the regular elevator.",
              "The building requires a reservation and doesn't allow moving in the regular elevators.",
              "The regular elevators are being repaired.",
              "It's a rule only for Saturdays.",
            ],
            correct: 1,
            explain:
              "Casey mentions high-rises often ban regular elevators for moving, and Morgan confirms she booked the required two-hour service elevator reservation.",
          },
          {
            q: "Why hasn't Morgan packed the kitchen yet?",
            options: [
              "She doesn't have enough boxes.",
              "She still needs the dishes and glasses until Friday night.",
              "The kitchen items were already moved.",
              "She's donating the kitchen items instead.",
            ],
            correct: 1,
            explain:
              "Morgan says she's keeping the dishes and glasses out until Friday night because she still needs them.",
          },
          {
            q: "What did Morgan do to make the bookshelf easier to move?",
            options: [
              "She sold it before the move.",
              "She disassembled it into flat panels.",
              "She hired professional movers just for it.",
              "She is leaving it behind.",
            ],
            correct: 1,
            explain:
              "Morgan explains she already took the bookshelf apart, so it's now just flat panels that are much easier to carry.",
          },
          {
            q: "What is the plan for food after the move?",
            options: [
              "Cook a big meal at the new apartment.",
              "Order pizza from a place near the new apartment.",
              "Go out to a restaurant.",
              "Priya will bring homemade food.",
            ],
            correct: 1,
            explain:
              "Morgan suggests ordering pizza from a nearby place, and Casey offers to bring drinks and paper plates.",
          },
        ],
      },
      {
        id: "t2_l3",
        partLabel: "Part 3",
        name: "Listening for Information",
        instructions:
          "You will hear a conversation in which someone asks for information. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 40,
        answerSeconds: 75,
        transcript: `Caller: Hi, I'm interested in joining your gym, but I have a few questions first.
Staff: Sure, happy to help. What would you like to know?
Caller: What are your membership options?
Staff: We have three tiers: Basic, which is gym floor access only for thirty-nine dollars a month; Plus, which adds group classes for fifty-nine dollars; and Premium, which includes classes plus two personal training sessions a month for ninety-nine dollars.
Caller: Do any of them require a long-term contract?
Staff: No, all three are month-to-month with no contract, but if you prepay for a full year you get two months free.
Caller: That's good to know. Can I freeze my membership if I travel a lot for work?
Staff: Yes, you can freeze for up to three months per year at no extra charge, you just need to submit the request online at least five days before your next billing date.
Caller: Great. What are your hours?
Staff: We're open five a.m. to eleven p.m. on weekdays, and seven a.m. to nine p.m. on weekends.
Caller: Do you offer a family plan?
Staff: We do. Adding a second household member to any plan is an extra twenty-five dollars a month, which is cheaper than a separate membership.
Caller: And what about the group classes, are they included or extra?
Staff: They're included with Plus and Premium. Basic members can attend classes for a ten-dollar drop-in fee per class.
Caller: This has been really helpful, thank you.
Staff: You're welcome, feel free to come by anytime for a free tour.`,
        questions: [
          {
            q: "What does the Basic membership tier include?",
            options: [
              "Group classes only",
              "Gym floor access only",
              "Personal training sessions",
              "Classes plus personal training",
            ],
            correct: 1,
            explain:
              "The staff member describes Basic as gym floor access only for thirty-nine dollars a month.",
          },
          {
            q: "What is the benefit of prepaying for a full year?",
            options: [
              "A free personal training session",
              "Two months free",
              "A discount on merchandise",
              "Priority class booking",
            ],
            correct: 1,
            explain:
              "The staff member says prepaying for a full year gets the member two months free.",
          },
          {
            q: "What must a member do to freeze their membership?",
            options: [
              "Pay a freeze fee",
              "Visit the gym in person",
              "Submit an online request at least five days before the next billing date",
              "Cancel and rejoin later",
            ],
            correct: 2,
            explain:
              "The staff member explains freezing is free but requires submitting an online request at least five days before the next billing date.",
          },
          {
            q: "What are the gym's weekday hours?",
            options: [
              "Seven a.m. to nine p.m.",
              "Five a.m. to eleven p.m.",
              "Six a.m. to midnight",
              "Open twenty-four hours",
            ],
            correct: 1,
            explain: "The staff member states the gym is open five a.m. to eleven p.m. on weekdays.",
          },
          {
            q: "How much extra does it cost to add a family member to a plan?",
            options: ["Ten dollars a month", "Fifteen dollars a month", "Twenty-five dollars a month", "It's free"],
            correct: 2,
            explain:
              "The staff member says adding a second household member costs an extra twenty-five dollars a month.",
          },
          {
            q: "How can a Basic member attend a group class?",
            options: [
              "It's included for free",
              "They cannot attend at all",
              "By paying a ten-dollar drop-in fee per class",
              "Only during a free trial week",
            ],
            correct: 2,
            explain:
              "The staff member explains that Basic members can attend classes by paying a ten-dollar drop-in fee per class.",
          },
        ],
      },
      {
        id: "t2_l4",
        partLabel: "Part 4",
        name: "Listening to a News Item",
        instructions:
          "You will hear a short news report. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 30,
        answerSeconds: 65,
        transcript: `In city news, officials announced yesterday that construction will begin next Monday on a new protected bike lane running the length of Fourth Avenue, from the river bridge to the university campus. The two-kilometer lane will be separated from car traffic by a raised curb rather than just painted lines, a design the city says has reduced cyclist injuries by over forty percent in other cities that have tried it. The project is expected to take about ten weeks to complete and will require closing one lane of car traffic on Fourth Avenue during that period, which officials acknowledge may cause delays during rush hour. Funding comes primarily from a provincial active transportation grant, covering seventy percent of the two-million-dollar cost, with the city covering the remainder. Local cycling advocates have praised the plan, though some downtown business owners have expressed concern about reduced street parking during construction. The city says forty parking spots will be temporarily removed but has promised they will return once construction wraps up in the fall.`,
        questions: [
          {
            q: "Where will the new bike lane be built?",
            options: [
              "Around the university campus only",
              "Along Fourth Avenue, from the river bridge to the university campus",
              "Through the downtown core",
              "Along the waterfront",
            ],
            correct: 1,
            explain:
              "The report says the lane will run the length of Fourth Avenue, from the river bridge to the university campus.",
          },
          {
            q: "How will the new lane be separated from car traffic?",
            options: [
              "By painted lines only",
              "By a raised curb",
              "By temporary cones",
              "By a row of parked cars",
            ],
            correct: 1,
            explain:
              "The report specifies the lane will be separated by a raised curb rather than just painted lines.",
          },
          {
            q: "What percentage of the project's cost is covered by the provincial grant?",
            options: ["Thirty percent", "Fifty percent", "Seventy percent", "One hundred percent"],
            correct: 2,
            explain:
              "The report states the provincial active transportation grant covers seventy percent of the two-million-dollar cost.",
          },
          {
            q: "What concern have downtown business owners raised?",
            options: [
              "Increased noise from construction",
              "Reduced street parking during construction",
              "Loss of foot traffic permanently",
              "Higher property taxes",
            ],
            correct: 1,
            explain:
              "The report mentions business owners are concerned about the temporary removal of forty parking spots during construction.",
          },
          {
            q: "About how long is the project expected to take?",
            options: ["Two weeks", "Ten weeks", "Six months", "One year"],
            correct: 1,
            explain: "The report states the project is expected to take about ten weeks to complete.",
          },
        ],
      },
      {
        id: "t2_l5",
        partLabel: "Part 5",
        name: "Listening to a Discussion",
        instructions:
          "You will hear two coworkers discussing a workplace topic. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Nadia: Did you get a chance to try the new project management software yet?
Colin: A little bit. Honestly, I'm not sold yet. It feels like it has a much steeper learning curve than our old system.
Nadia: I felt that way at first too, but once I figured out the dashboard, I actually think it's more powerful. You can see every team's tasks in one view instead of switching between five different spreadsheets.
Colin: That part does sound useful. My concern is more about the transition period. We have three big client deadlines this month, and I worry switching systems now will slow us down.
Nadia: That's a fair worry. I heard IT is offering optional training sessions this week, and they said the old system will still run in parallel for a month so nothing gets lost.
Colin: Oh, I didn't know it would run in parallel. That actually eases my concern a lot.
Nadia: Yeah, they announced that in the email yesterday, maybe you missed it.
Colin: I probably did, things have been busy. What about the mobile app? I'm on the road a lot for client visits.
Nadia: I checked, and yes, there's a mobile app, and it actually syncs faster than our current one does.
Colin: That's a real improvement then. What's the biggest downside you've found so far?
Nadia: Probably the notification settings. By default, it sends way too many alerts, but you can turn most of them off once you find the settings menu, which isn't very obvious.
Colin: Good to know, I'll definitely turn those down early. When is the full switch supposed to happen?
Nadia: Full switch is scheduled for the fifteenth, so there's still time to get comfortable with it.
Colin: Alright, I'll sign up for one of those training sessions this week.
Nadia: Same here, I think it'll help both of us catch things we might otherwise miss.`,
        questions: [
          {
            q: "What is Colin's initial impression of the new software?",
            options: [
              "He thinks it's perfect already.",
              "He finds it has a steeper learning curve than the old system.",
              "He thinks it's identical to the old system.",
              "He hasn't looked at it at all.",
            ],
            correct: 1,
            explain:
              "Colin says he's not sold yet because the new software feels like it has a much steeper learning curve than the old one.",
          },
          {
            q: "What benefit does Nadia mention about the new dashboard?",
            options: [
              "It requires less internet bandwidth.",
              "It lets you see every team's tasks in one view instead of multiple spreadsheets.",
              "It automatically assigns tasks to employees.",
              "It has a built-in chat feature.",
            ],
            correct: 1,
            explain:
              "Nadia explains the dashboard shows every team's tasks in one view instead of switching between five spreadsheets.",
          },
          {
            q: "What is Colin's main concern about switching now?",
            options: [
              "The cost of the new software",
              "Slowing down work during three big client deadlines this month",
              "Losing his old files permanently",
              "Having to retrain new employees",
            ],
            correct: 1,
            explain:
              "Colin worries that switching systems now, during a month with three big client deadlines, will slow the team down.",
          },
          {
            q: "What eases Colin's concern about the transition?",
            options: [
              "Learning the old system will run in parallel for a month",
              "Learning the switch has been postponed",
              "Learning the client deadlines were moved",
              "Learning IT will do the work for him",
            ],
            correct: 0,
            explain:
              "Nadia tells Colin the old system will keep running in parallel for a month so nothing gets lost, which eases his worry.",
          },
          {
            q: "What does Nadia say about the mobile app?",
            options: [
              "It doesn't exist yet.",
              "It syncs faster than their current app.",
              "It only works on certain phones.",
              "It costs extra to use.",
            ],
            correct: 1,
            explain: "Nadia confirms there is a mobile app and says it syncs faster than their current one.",
          },
          {
            q: "What downside does Nadia mention about the new software?",
            options: [
              "It crashes frequently.",
              "It sends too many default notifications, and the settings are hard to find.",
              "It doesn't support file attachments.",
              "It has no mobile app.",
            ],
            correct: 1,
            explain:
              "Nadia says the default notification settings send too many alerts and the menu to adjust them isn't obvious.",
          },
          {
            q: "When is the full switch to the new software scheduled?",
            options: ["Immediately", "The fifteenth", "Next year", "It hasn't been decided"],
            correct: 1,
            explain: "Nadia states the full switch is scheduled for the fifteenth.",
          },
          {
            q: "What do both Colin and Nadia decide to do by the end of the conversation?",
            options: [
              "Ask to keep using the old system permanently",
              "Sign up for a training session this week",
              "File a complaint with IT",
              "Delay the switch to next month",
            ],
            correct: 1,
            explain:
              "Colin says he'll sign up for a training session, and Nadia agrees to do the same.",
          },
        ],
      },
      {
        id: "t2_l6",
        partLabel: "Part 6",
        name: "Listening to Viewpoints",
        instructions:
          "You will hear three people give their opinions on a topic during a radio call-in segment. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 45,
        answerSeconds: 80,
        transcript: `Host: Today's topic is whether the city should ban single-use plastic bags at grocery stores. Let's start with Martin.
Martin: I fully support a ban. Plastic bags take hundreds of years to break down, and I've personally seen them clogging storm drains near my neighborhood after every heavy rain. A full ban is the clearest way to fix that.
Host: Thank you, Martin. Next, Sophie.
Sophie: I disagree with a full ban. Plastic bags are actually really useful — I reuse mine for garbage and pet waste. If they're banned, most people will just buy plastic garbage bags anyway, so I don't think it actually reduces plastic use much.
Host: Interesting point. Now let's hear from Grace.
Grace: I lean toward a middle solution. Instead of an outright ban, I think a small fee, like ten or fifteen cents per bag, would encourage people to bring reusable bags without completely restricting people who genuinely need one occasionally.
Host: Martin, how would you respond to Sophie's point about reuse?
Martin: I understand reusing them for garbage, but stores could still sell thicker plastic bags specifically designed for that purpose, so people wouldn't need to rely on the thin single-use ones.
Host: And Sophie, what about Grace's fee idea?
Sophie: Honestly, a small fee doesn't bother me as much as a full ban. It still gives people the choice, so I could probably support that instead.
Host: Thanks everyone for calling in today.`,
        questions: [
          {
            q: "What is Martin's main reason for supporting a ban?",
            options: [
              "Plastic bags are expensive for stores.",
              "Plastic bags take a long time to break down and clog storm drains.",
              "Plastic bags are hard to carry.",
              "Other cities have already banned them.",
            ],
            correct: 1,
            explain:
              "Martin says plastic bags take hundreds of years to break down and describes seeing them clog storm drains near his neighborhood.",
          },
          {
            q: "What is Sophie's main objection to a full ban?",
            options: [
              "She thinks plastic bags are too expensive to replace.",
              "She reuses bags for garbage and pet waste, and thinks a ban won't reduce plastic use much.",
              "She believes the city has no right to regulate stores.",
              "She thinks reusable bags are unsanitary.",
            ],
            correct: 1,
            explain:
              "Sophie explains she reuses plastic bags for garbage and pet waste, and argues people will just buy plastic garbage bags instead, so a ban wouldn't reduce plastic use much.",
          },
          {
            q: "What compromise does Grace propose?",
            options: [
              "A complete ban starting next year",
              "A small fee per bag instead of an outright ban",
              "Free reusable bags for everyone",
              "No changes to current policy",
            ],
            correct: 1,
            explain:
              "Grace suggests a small fee of ten or fifteen cents per bag as a middle-ground alternative to a full ban.",
          },
          {
            q: "How does Martin respond to Sophie's point about reusing bags?",
            options: [
              "He agrees a ban is a bad idea.",
              "He says stores could sell thicker bags designed for garbage use instead.",
              "He says people should stop taking out the garbage.",
              "He has no response.",
            ],
            correct: 1,
            explain:
              "Martin responds that stores could sell thicker plastic bags meant for garbage, so people wouldn't need thin single-use bags.",
          },
          {
            q: "How does Sophie react to Grace's fee proposal?",
            options: [
              "She rejects it completely.",
              "She says she could probably support it since it still allows choice.",
              "She says it should be even more expensive.",
              "She ignores the question.",
            ],
            correct: 1,
            explain:
              "Sophie says a small fee doesn't bother her as much as a full ban and that she could probably support it.",
          },
          {
            q: "What can be concluded about the overall discussion?",
            options: [
              "All three callers agree on a full ban.",
              "The callers present three distinct positions: full ban, against a ban, and a fee-based compromise.",
              "The host refuses to let Sophie speak.",
              "The city has already made a final decision.",
            ],
            correct: 1,
            explain:
              "Martin supports a full ban, Sophie opposes a ban, and Grace proposes a fee-based compromise — three distinct viewpoints.",
          },
        ],
      },
    ],
  };

  window.__listeningTests = window.__listeningTests || [];
  window.__listeningTests.push(test);
})();
