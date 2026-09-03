// Listening Practice Test 5 — original content modeled on the official CELPIP-General format
// (Part 1: 8 questions, Part 2: 5, Part 3: 6, Part 4: 5, Part 5: 8, Part 6: 6 — 38 total, matching
// the officially documented question counts for each part).

(function () {
  const test = {
    testNumber: 5,
    parts: [
      {
        id: "t5_l1",
        partLabel: "Part 1",
        name: "Listening to Problem Solving",
        instructions:
          "You will hear a conversation about a problem. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Olivia: Ben, we have a real staffing problem for this weekend's Riverfest crowd.
Ben: What's going on?
Olivia: Two servers just called in sick, and Deb already had the weekend off approved for her sister's wedding.
Ben: That's three people down out of our usual eight-person weekend team. Riverfest brings in triple our normal traffic too.
Olivia: Exactly. I tried calling a couple of part-time staff who aren't scheduled, but only one, Kayla, said she could come in, and only for Saturday, not Sunday.
Ben: Better than nothing. What about asking the kitchen staff if anyone's cross-trained to help on the floor?
Olivia: Good idea, actually. Diego mentioned before that he used to server at his old job. I could ask if he'd help out front for a few hours during the lunch rush.
Ben: That could work for Saturday. What about Sunday, since Kayla can't come in then?
Olivia: I was thinking we could call the staffing agency we used last year for the holiday rush. They can usually place someone within a day or two.
Ben: That costs more, but with Deb gone plus two sick calls, we really don't have a choice for Sunday.
Olivia: Agreed. I'll call the agency this afternoon and request one server for Sunday specifically.
Ben: Should we also consider trimming the menu this weekend, just to make service faster with fewer hands?
Olivia: That's smart. Let's cut the specials board and stick to the regular menu only, that alone should speed up the kitchen.
Ben: I'll let the kitchen know. Anything else we should prepare for?
Olivia: Let's also put up a sign warning customers that wait times might be a bit longer than usual, just to manage expectations.
Ben: Good call. I think between Kayla, Diego, the agency server, and the trimmed menu, we can get through the weekend.`,
        questions: [
          {
            q: "What is the main problem in the conversation?",
            options: [
              "The restaurant is closing for the weekend.",
              "The restaurant is short-staffed for a busy Riverfest weekend.",
              "The kitchen equipment broke down.",
              "A supplier failed to deliver food.",
            ],
            correct: 1,
            explain:
              "Olivia explains they are down three staff members right when Riverfest brings triple their normal traffic.",
          },
          {
            q: "How many servers called in sick?",
            options: ["One", "Two", "Three", "None"],
            correct: 1,
            explain: "Olivia says two servers just called in sick.",
          },
          {
            q: "Why is Deb unavailable this weekend?",
            options: [
              "She quit her job.",
              "She had the weekend off approved for her sister's wedding.",
              "She is sick.",
              "She was moved to another location.",
            ],
            correct: 1,
            explain: "Olivia mentions Deb already had the weekend off approved for her sister's wedding.",
          },
          {
            q: "Which days can Kayla work?",
            options: [
              "Both Saturday and Sunday",
              "Only Saturday",
              "Only Sunday",
              "Neither day",
            ],
            correct: 1,
            explain: "Olivia says Kayla can only come in on Saturday, not Sunday.",
          },
          {
            q: "What does Ben suggest regarding the kitchen staff?",
            options: [
              "Closing the kitchen early",
              "Asking if any kitchen staff are cross-trained to help on the floor",
              "Hiring new kitchen staff immediately",
              "Reducing the kitchen staff's hours",
            ],
            correct: 1,
            explain: "Ben suggests asking whether any kitchen staff, cross-trained in serving, could help on the floor.",
          },
          {
            q: "How do they plan to cover Sunday's shortage?",
            options: [
              "Ask Deb to cancel her plans",
              "Call the staffing agency used last year for the holiday rush",
              "Close the restaurant on Sunday",
              "Have Kayla work a double shift",
            ],
            correct: 1,
            explain: "Olivia plans to call the staffing agency they used last year for the holiday rush to request a server for Sunday.",
          },
          {
            q: "What menu decision do they make for the weekend?",
            options: [
              "Add more specials to attract customers",
              "Cut the specials board and stick to the regular menu",
              "Switch to a buffet format",
              "Close the kitchen and serve only drinks",
            ],
            correct: 1,
            explain: "Olivia agrees to cut the specials board and use only the regular menu to speed up the kitchen.",
          },
          {
            q: "What do they decide to tell customers?",
            options: [
              "Nothing, to avoid worrying them",
              "That wait times might be longer than usual",
              "That the restaurant is fully staffed",
              "That reservations are required",
            ],
            correct: 1,
            explain: "Olivia suggests putting up a sign warning customers that wait times might be a bit longer than usual.",
          },
        ],
      },
      {
        id: "t5_l2",
        partLabel: "Part 2",
        name: "Listening to a Daily Life Conversation",
        instructions:
          "You will hear a conversation between two friends. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 35,
        answerSeconds: 65,
        transcript: `Jen: So I got the three contractor quotes back for the kitchen renovation.
Marcus: Great, how do they compare?
Jen: The lowest was eighteen thousand, but that one doesn't include new countertops, just cabinets and flooring.
Marcus: What about the others?
Jen: The middle one is twenty-two thousand and includes everything — cabinets, countertops, flooring, and new lighting.
Marcus: And the highest?
Jen: Twenty-eight thousand, but that contractor has the best reviews and can start two weeks sooner than the others.
Marcus: Time matters to us since we're hosting Thanksgiving. Which one would finish by then?
Jen: Both the middle and highest options say they can finish in six weeks, so either would be done in time if we start by early October.
Marcus: Let's go with the middle option then, it includes everything and still leaves room in the budget for that pantry shelving we wanted.
Jen: That works for me. Where will we cook during the renovation? The kitchen will be unusable for at least three weeks of it.
Marcus: We could set up a temporary kitchen in the garage with a hot plate and the microwave, or we could just eat out more and use the barbecue for dinners.
Jen: I like the garage idea better for breakfast and lunch, and we can barbecue most nights.
Marcus: Sounds reasonable. Should we ask the contractor to start with the demolition first thing Monday?
Jen: Yes, and I'll confirm the appliance delivery dates so the fridge and stove arrive before demolition finishes.
Marcus: Good thinking, we don't want to be without a fridge for too long.
Jen: I'll call the contractor today to lock in the start date.`,
        questions: [
          {
            q: "Why doesn't the lowest quote include everything?",
            options: [
              "It doesn't include cabinets.",
              "It doesn't include new countertops, only cabinets and flooring.",
              "It doesn't include labor costs.",
              "It doesn't include a warranty.",
            ],
            correct: 1,
            explain: "Jen explains the lowest, eighteen-thousand-dollar quote covers only cabinets and flooring, not countertops.",
          },
          {
            q: "What does the middle quote include?",
            options: [
              "Only cabinets and lighting",
              "Cabinets, countertops, flooring, and new lighting",
              "Only countertops",
              "Appliances and cabinets only",
            ],
            correct: 1,
            explain: "Jen says the twenty-two-thousand-dollar middle quote includes cabinets, countertops, flooring, and new lighting.",
          },
          {
            q: "What advantage does the highest quote have?",
            options: [
              "It is the cheapest option.",
              "The contractor has the best reviews and can start two weeks sooner.",
              "It includes free appliances.",
              "It has a lifetime warranty.",
            ],
            correct: 1,
            explain: "Jen notes the highest quote's contractor has the best reviews and can begin two weeks earlier than the others.",
          },
          {
            q: "Which quote do Jen and Marcus decide to choose, and why?",
            options: [
              "The lowest, to save money",
              "The middle, since it includes everything and leaves room for pantry shelving",
              "The highest, for the fastest start date",
              "None of them, they decide to wait",
            ],
            correct: 1,
            explain: "Marcus suggests the middle option since it includes everything and still leaves budget room for the pantry shelving they wanted.",
          },
          {
            q: "What is the plan for cooking during the renovation?",
            options: [
              "Eat every meal at a restaurant",
              "Set up a temporary kitchen in the garage and barbecue most nights",
              "Cook in a neighbor's kitchen",
              "Order food delivery exclusively",
            ],
            correct: 1,
            explain: "They agree to set up a temporary kitchen in the garage for breakfast and lunch, and barbecue most nights for dinner.",
          },
        ],
      },
      {
        id: "t5_l3",
        partLabel: "Part 3",
        name: "Listening for Information",
        instructions:
          "You will hear a conversation in which someone asks for information. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 40,
        answerSeconds: 75,
        transcript: `Caller: Hi, I'm planning a move next month and wanted to get some information about your services.
Rep: Sure, where are you moving from and to?
Caller: Just across the city, from a two-bedroom apartment to a house.
Rep: Okay, for a local move like that, we charge by the hour with a three-person crew, at one hundred twenty dollars an hour, with a three-hour minimum.
Caller: Does that include the truck?
Rep: Yes, the truck and basic moving blankets are included. If you need packing materials like boxes and tape, those are extra, or we also offer a full packing service.
Caller: What does the full packing service cost?
Rep: That depends on the size of the home, but for a two-bedroom, it typically runs around four hundred dollars, and includes all boxes, tape, and labor to pack everything the day before the move.
Caller: That's helpful. Do you handle large or fragile items, like a piano or a glass table?
Rep: We do, though a piano requires a specialized four-person crew and costs extra, usually around two hundred dollars on top of the regular rate.
Caller: Good to know, I do have an upright piano. What about insurance if something gets damaged?
Rep: Basic coverage is included at no charge, covering sixty cents per pound per item, but you can purchase full replacement value coverage for an additional fee if you want more protection.
Caller: I think I'd want the full coverage given the piano. How far in advance should I book?
Rep: For a weekend move, I'd recommend booking at least three weeks ahead, since weekends fill up quickly, especially at the end of the month.
Caller: Great, I'll go ahead and book for a Saturday in about three weeks then.
Rep: Perfect, let me get your details.`,
        questions: [
          {
            q: "What is the hourly rate and crew size for a local move?",
            options: [
              "Eighty dollars an hour with a two-person crew",
              "One hundred twenty dollars an hour with a three-person crew",
              "Two hundred dollars an hour with a five-person crew",
              "A flat rate regardless of crew size",
            ],
            correct: 1,
            explain: "The rep states the rate is one hundred twenty dollars an hour with a three-person crew and a three-hour minimum.",
          },
          {
            q: "What is included in the base moving rate?",
            options: [
              "Boxes and tape",
              "The truck and basic moving blankets",
              "Full packing service",
              "Piano handling",
            ],
            correct: 1,
            explain: "The rep explains the truck and basic moving blankets are included in the base rate.",
          },
          {
            q: "About how much does the full packing service cost for a two-bedroom home?",
            options: ["One hundred dollars", "Four hundred dollars", "Eight hundred dollars", "It's free"],
            correct: 1,
            explain: "The rep says the full packing service typically costs around four hundred dollars for a two-bedroom home.",
          },
          {
            q: "What is required to move a piano?",
            options: [
              "Nothing extra is needed",
              "A specialized four-person crew, at extra cost",
              "The customer must move it themselves",
              "A separate company must be hired",
            ],
            correct: 1,
            explain: "The rep explains a piano requires a specialized four-person crew and costs about two hundred dollars extra.",
          },
          {
            q: "What does the basic insurance coverage include?",
            options: [
              "Full replacement value at no charge",
              "Sixty cents per pound per item, included at no charge",
              "No coverage at all",
              "Coverage only for the piano",
            ],
            correct: 1,
            explain: "The rep states basic coverage, included free, covers sixty cents per pound per item.",
          },
          {
            q: "How far in advance does the rep recommend booking a weekend move?",
            options: [
              "At least three weeks ahead",
              "The day before",
              "One week ahead",
              "It doesn't matter",
            ],
            correct: 0,
            explain: "The rep recommends booking at least three weeks ahead for a weekend move since weekends fill up quickly.",
          },
        ],
      },
      {
        id: "t5_l4",
        partLabel: "Part 4",
        name: "Listening to a News Item",
        instructions:
          "You will hear a short news report. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 30,
        answerSeconds: 65,
        transcript: `In local news, the long-awaited Fairview Recreation Centre will officially open to the public next Wednesday after nearly two years of construction. The facility features an eight-lane competition pool, a separate leisure pool with a waterslide for children, a fitness area with updated cardio and weight equipment, and two multipurpose rooms for classes such as yoga and dance. The project cost eleven million dollars, higher than the original nine-million-dollar estimate, due to unexpected foundation repairs discovered midway through construction. City officials say annual passes will be available at a discounted rate for the first three months, dropping the standard three-hundred-dollar fee to two hundred dollars for early sign-ups. The centre will also offer free swimming lessons for children under twelve during its opening month, a move officials hope will encourage lasting community use. Parking, however, remains limited, with only sixty spaces available, prompting the city to encourage visitors to use the new bus route that stops directly in front of the building. A ribbon-cutting ceremony is planned for opening day at ten in the morning.`,
        questions: [
          {
            q: "When will the Fairview Recreation Centre open?",
            options: ["Next Wednesday", "Next month", "In two years", "Next Saturday"],
            correct: 0,
            explain: "The report states the centre will officially open to the public next Wednesday.",
          },
          {
            q: "Why did the project cost more than originally estimated?",
            options: [
              "The pool had to be made larger.",
              "Unexpected foundation repairs were discovered midway through construction.",
              "The city added an extra floor.",
              "Construction materials were imported.",
            ],
            correct: 1,
            explain: "The report explains the cost rose from nine million to eleven million due to unexpected foundation repairs.",
          },
          {
            q: "What is the discounted annual pass price for early sign-ups?",
            options: ["One hundred dollars", "Two hundred dollars", "Three hundred dollars", "It's free"],
            correct: 1,
            explain: "The report says the standard three-hundred-dollar annual pass will drop to two hundred dollars for early sign-ups during the first three months.",
          },
          {
            q: "What free program is offered during the opening month?",
            options: [
              "Free adult fitness classes",
              "Free swimming lessons for children under twelve",
              "Free yoga classes for seniors",
              "Free equipment rentals",
            ],
            correct: 1,
            explain: "The report states free swimming lessons for children under twelve will be offered during the opening month.",
          },
          {
            q: "What concern does the report mention about the facility?",
            options: [
              "The pool is too small.",
              "Parking is limited to sixty spaces.",
              "The fitness equipment is outdated.",
              "The building is not accessible.",
            ],
            correct: 1,
            explain: "The report notes parking is limited to only sixty spaces, so the city is encouraging use of the new bus route.",
          },
        ],
      },
      {
        id: "t5_l5",
        partLabel: "Part 5",
        name: "Listening to a Discussion",
        instructions:
          "You will hear two coworkers discussing a workplace topic. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Tom: Did you hear management wants everyone on the Meridian project to work mandatory overtime for the next three weeks?
Sarah: I did, and I'm honestly frustrated. We already worked extra hours last month for the Baxter launch.
Tom: Same here. I get that the client deadline moved up, but back-to-back overtime is going to burn people out.
Sarah: Exactly. I read the email said it's an extra ten hours a week, so basically working six days instead of five.
Tom: Did it say whether we'll get paid overtime rates, or just given time off later?
Sarah: It said we'll be paid time and a half for the extra hours, at least that's something.
Tom: That helps a little, but money isn't really my main issue, it's more that I have my kid's soccer games on Saturdays.
Sarah: That's a fair concern. I noticed the email said the extra hours can be flexible, spread across weekday evenings or Saturday, whichever works better for each person.
Tom: Oh, I missed that part. If it's flexible, I could probably do the extra hours on weekday evenings instead and keep my Saturdays free.
Sarah: That would solve your issue. My concern is more long-term — three weeks of extra hours on top of an already busy quarter feels like a lot.
Tom: Have you brought that up with our manager?
Sarah: Not yet, but I'm planning to ask if there's any flexibility on reducing it to two weeks instead of three, maybe by bringing in a contractor to help with part of the workload.
Tom: That sounds like a reasonable ask. I'll back you up on that if you bring it to the team meeting.
Sarah: Thanks, Tom, having support makes it easier to raise the concern.`,
        questions: [
          {
            q: "What is management requiring for the Meridian project?",
            options: [
              "A hiring freeze",
              "Mandatory overtime for three weeks",
              "A reduction in staff",
              "A permanent schedule change",
            ],
            correct: 1,
            explain: "Tom mentions management wants everyone on the Meridian project to work mandatory overtime for three weeks.",
          },
          {
            q: "Why is Sarah frustrated about the new overtime requirement?",
            options: [
              "She dislikes the Meridian project.",
              "They already worked extra hours last month for the Baxter launch.",
              "She wants a raise instead.",
              "She thinks the deadline is fake.",
            ],
            correct: 1,
            explain: "Sarah says she's frustrated because they already worked extra hours last month for the Baxter launch.",
          },
          {
            q: "How many extra hours per week does the overtime require?",
            options: ["Five extra hours", "Ten extra hours", "Twenty extra hours", "No extra hours, just rescheduling"],
            correct: 1,
            explain: "Sarah says the email specifies an extra ten hours a week, meaning six days of work instead of five.",
          },
          {
            q: "How will employees be compensated for the extra hours?",
            options: [
              "No extra pay, only time off later",
              "Paid time and a half",
              "A one-time bonus",
              "Double pay only on Saturdays",
            ],
            correct: 1,
            explain: "Sarah confirms the email states employees will be paid time and a half for the extra hours.",
          },
          {
            q: "What is Tom's personal concern about the overtime?",
            options: [
              "He doesn't want extra pay.",
              "He has his kid's soccer games on Saturdays.",
              "He is planning a vacation.",
              "He doesn't like the Meridian client.",
            ],
            correct: 1,
            explain: "Tom explains his main concern is that he has his kid's soccer games on Saturdays.",
          },
          {
            q: "What flexibility does the email offer regarding when the extra hours are worked?",
            options: [
              "None, everyone must work the same fixed schedule",
              "Extra hours can be spread across weekday evenings or Saturday, based on preference",
              "Extra hours must all be worked on Sundays",
              "Employees can skip the extra hours entirely",
            ],
            correct: 1,
            explain: "Sarah points out the email allows extra hours to be flexible, spread across weekday evenings or Saturday depending on the person.",
          },
          {
            q: "What is Sarah's main long-term concern?",
            options: [
              "She thinks the pay rate is too low.",
              "Three weeks of extra hours on top of an already busy quarter feels like a lot.",
              "She worries about losing her job.",
              "She doesn't trust management at all.",
            ],
            correct: 1,
            explain: "Sarah says her concern is that three weeks of overtime added to an already busy quarter feels excessive.",
          },
          {
            q: "What does Sarah plan to ask her manager?",
            options: [
              "To cancel the Meridian project",
              "To reduce the overtime to two weeks, possibly by bringing in a contractor",
              "To fire another employee",
              "To give everyone a bonus instead",
            ],
            correct: 1,
            explain: "Sarah plans to ask whether the overtime period could be reduced to two weeks by bringing in a contractor to help with part of the workload.",
          },
        ],
      },
      {
        id: "t5_l6",
        partLabel: "Part 6",
        name: "Listening to Viewpoints",
        instructions:
          "You will hear three people give their opinions on a topic during a radio call-in segment. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 45,
        answerSeconds: 80,
        transcript: `Host: Today's topic: should social media platforms enforce stricter age restrictions for young users? First, Patricia.
Patricia: I strongly support stricter limits. Studies link heavy social media use among young teens to increased anxiety and poor sleep. Platforms should verify age properly instead of just asking users to self-report their birthdate.
Host: Thanks, Patricia. Next, Omar.
Omar: I'm skeptical that age restrictions would actually work. Teens are very good at getting around verification, whether through fake IDs or borrowing a parent's account. I think the responsibility falls more on parents to monitor usage at home.
Host: Interesting. And Leah?
Leah: I'm somewhere in the middle. I don't think a strict age ban is realistic to enforce, but I do support requiring platforms to build safer default settings for accounts registered by minors, like limiting messages from strangers and screen-time reminders.
Host: Patricia, how would you respond to Omar's point about teens getting around restrictions?
Patricia: I agree perfect enforcement is impossible, but even an imperfect barrier reduces the number of very young users, which is still a meaningful improvement over no barrier at all.
Host: And Omar, what about Leah's idea of safer default settings?
Omar: That I actually agree with. Even if I'm doubtful about hard age limits, making default settings safer for any account that looks like it belongs to a minor seems like a practical step forward.
Host: Thanks to all three of you for calling in.`,
        questions: [
          {
            q: "What is Patricia's main position?",
            options: [
              "Social media should be banned entirely.",
              "Platforms should enforce stricter, properly verified age limits.",
              "Age restrictions are unnecessary.",
              "Parents alone should handle the issue.",
            ],
            correct: 1,
            explain:
              "Patricia argues for stricter limits with proper age verification, citing links between heavy use and anxiety and poor sleep in young teens.",
          },
          {
            q: "What is Omar's main concern about age restrictions?",
            options: [
              "They cost too much to implement.",
              "Teens are good at getting around verification, so responsibility falls more on parents.",
              "They violate freedom of speech.",
              "They would make platforms less profitable.",
            ],
            correct: 1,
            explain:
              "Omar doubts restrictions work well since teens can bypass them, and argues parents should monitor usage at home instead.",
          },
          {
            q: "What is Leah's overall position?",
            options: [
              "Strongly in favor of a strict age ban",
              "Strongly opposed to any restrictions",
              "A strict ban isn't realistic, but safer default settings for minors' accounts should be required",
              "Uninterested in the topic",
            ],
            correct: 2,
            explain:
              "Leah says a strict age ban isn't realistic to enforce, but supports safer default settings like limiting stranger messages and screen-time reminders.",
          },
          {
            q: "How does Patricia respond to Omar's point about teens bypassing restrictions?",
            options: [
              "She agrees restrictions are pointless and gives up her position.",
              "She admits enforcement isn't perfect, but says even an imperfect barrier is a meaningful improvement.",
              "She says teens should be punished for bypassing rules.",
              "She has no response to this point.",
            ],
            correct: 1,
            explain:
              "Patricia acknowledges perfect enforcement is impossible but argues an imperfect barrier still meaningfully reduces very young users.",
          },
          {
            q: "How does Omar respond to Leah's idea about safer default settings?",
            options: [
              "He rejects it completely.",
              "He agrees it seems like a practical step forward.",
              "He says it's the same as a full age ban.",
              "He says it's the platforms' choice, not his concern.",
            ],
            correct: 1,
            explain:
              "Omar says he agrees with Leah's idea, calling safer default settings for minors' accounts a practical step forward.",
          },
          {
            q: "What can be concluded about the overall discussion?",
            options: [
              "All three callers reach identical conclusions.",
              "The callers present three distinct positions: strict verified limits, skepticism favoring parental responsibility, and a middle-ground default-settings approach.",
              "The host ends the segment without letting Leah speak.",
              "A new law is announced during the call.",
            ],
            correct: 1,
            explain:
              "Patricia wants strict verified limits, Omar is skeptical and favors parental responsibility, and Leah proposes safer default settings as a middle ground.",
          },
        ],
      },
    ],
  };

  window.__listeningTests = window.__listeningTests || [];
  window.__listeningTests.push(test);
})();
