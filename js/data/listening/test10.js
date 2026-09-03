// Listening Practice Test 10 — original content modeled on the official CELPIP-General format
// (Part 1: 8 questions, Part 2: 5, Part 3: 6, Part 4: 5, Part 5: 8, Part 6: 6 — 38 total, matching
// the officially documented question counts for each part).

(function () {
  const test = {
    testNumber: 10,
    parts: [
      {
        id: "t10_l1",
        partLabel: "Part 1",
        name: "Listening to Problem Solving",
        instructions:
          "You will hear a conversation about a problem. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Ana: Ray, we have a problem for tonight. Two servers just called in sick, and we have a full reservation book, including a twenty-person birthday party at seven.
Ray: Two servers down on a Friday night, that's rough. Do we have anyone who could come in on short notice?
Ana: I called around. One part-time server, Kayla, said she can come in but not until six thirty, an hour later than we'd need her.
Ray: What about pulling someone from the host stand to help serve simpler tables?
Ana: I thought about that, but then we'd have no one managing the door, and with a full book, that could get chaotic fast.
Ray: True. What if we temporarily combine some smaller tables' service, so each server covers slightly more tables but with a simplified menu for those sections?
Ana: That could work for the regular tables, but the twenty-person party ordered a special set menu, so that section still needs full attention.
Ray: I could personally jump out front to help serve that party myself, since I have the set menu items prepped and ready earlier than usual tonight.
Ana: That would help a lot, though it means the kitchen loses you for stretches during service.
Ray: My sous chef Diego can cover the line while I'm out front for maybe twenty minutes at a time, he's done it before during rushes.
Ana: Okay, let's go with that plan. I'll also call Kayla back and ask if she can possibly come in by six instead of six thirty.
Ray: Good idea. And maybe we should quietly stop taking new walk-ins after six, just to keep things manageable.
Ana: Agreed, I'll let the host know. Let's regroup at five thirty to check how things are looking before the rush starts.`,
        questions: [
          {
            q: "What is the main problem?",
            options: [
              "The restaurant lost its liquor license",
              "Two servers called in sick before a fully booked Friday",
              "The kitchen ran out of food",
              "The birthday party cancelled",
            ],
            correct: 1,
            explain:
              "Ana says two servers just called in sick and they have a full reservation book, including a twenty-person party.",
          },
          {
            q: "What is the issue with Kayla coming in?",
            options: [
              "She can't come in at all",
              "She can't arrive until an hour later than needed",
              "She doesn't know the menu",
              "She quit her job",
            ],
            correct: 1,
            explain: "Ana says Kayla can come in but not until six thirty, an hour later than they'd need her.",
          },
          {
            q: "Why is pulling the host to serve tables risky?",
            options: [
              "The host doesn't know how to serve",
              "No one would manage the door during a full book",
              "The host refuses to help",
              "It violates health code",
            ],
            correct: 1,
            explain: "Ana says if they pull the host to serve, there would be no one managing the door with a full reservation book.",
          },
          {
            q: "Why does the twenty-person party still need special attention despite combined table service?",
            options: [
              "They are VIP guests",
              "They ordered a special set menu",
              "They are already complaining",
              "They are paying separately",
            ],
            correct: 1,
            explain: "Ana says the twenty-person party ordered a special set menu, so that section still needs full attention.",
          },
          {
            q: "Who volunteers to help serve the party himself?",
            options: ["Ana", "Ray", "Kayla", "Diego"],
            correct: 1,
            explain: "Ray says he could personally jump out front to help serve the party since the set menu items are prepped.",
          },
          {
            q: "Who will cover the kitchen line while Ray helps out front?",
            options: ["Ana", "Kayla", "Diego", "No one"],
            correct: 2,
            explain: "Ray says his sous chef Diego can cover the line while he's out front for stretches during service.",
          },
          {
            q: "What does Ana plan to ask Kayla?",
            options: [
              "To cancel her shift",
              "To come in by six instead of six thirty",
              "To work a double shift",
              "To bring a friend to help",
            ],
            correct: 1,
            explain: "Ana says she will call Kayla back and ask if she can come in by six instead of six thirty.",
          },
          {
            q: "What decision do they make about walk-ins?",
            options: [
              "Accept unlimited walk-ins",
              "Stop taking new walk-ins after six",
              "Double the walk-in wait list",
              "Only allow walk-ins for the party",
            ],
            correct: 1,
            explain: "Ray suggests quietly stopping new walk-ins after six, and Ana agrees to tell the host.",
          },
        ],
      },
      {
        id: "t10_l2",
        partLabel: "Part 2",
        name: "Listening to a Daily Life Conversation",
        instructions:
          "You will hear a conversation between two friends. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 35,
        answerSeconds: 65,
        transcript: `Talia: I finally decided to adopt a dog this weekend. Do you want to come with me to the shelter?
Marco: I'd love to. Have you picked out what kind of dog you're looking for?
Talia: I'm leaning toward a smaller breed since my apartment isn't huge, but I still want a dog that's active enough to keep up on hikes.
Marco: That's a good combination to look for. Did you check if your building even allows dogs?
Talia: Yes, I checked the lease already, dogs are allowed under twenty-five pounds, no extra restrictions besides that.
Marco: Good thing you checked first. Are you thinking of adopting a puppy or an older dog?
Talia: I'm actually leaning toward an adult dog, maybe two or three years old. Puppies need so much training time, and I work full-time.
Marco: That makes sense. Older dogs are often already house-trained too, so that's less work upfront.
Talia: Exactly. The shelter website mentioned a dog named Biscuit, a four-year-old terrier mix, about eighteen pounds, described as friendly with people and other dogs.
Marco: That sounds like a great fit for your building's weight limit and your hiking plans.
Talia: I hope so. I'm also going to ask about their return policy, just in case the dog doesn't adjust well to apartment living.
Marco: Smart move. What time should I meet you there Saturday?
Talia: The shelter opens at ten, so let's meet at nine forty-five so we're right at the door when it opens.
Marco: Sounds good, I'll bring my car since the shelter is a bit far from the bus route.
Talia: Perfect, thanks for coming with me, I could use a second opinion.`,
        questions: [
          {
            q: "What type of dog is Talia leaning toward, in terms of size?",
            options: [
              "A large breed",
              "A smaller breed suited to her apartment",
              "Only giant breeds",
              "She has no preference",
            ],
            correct: 1,
            explain: "Talia says she's leaning toward a smaller breed since her apartment isn't huge.",
          },
          {
            q: "What weight restriction does Talia's building have?",
            options: [
              "No dogs allowed",
              "Under 25 pounds",
              "Under 10 pounds",
              "No restriction at all",
            ],
            correct: 1,
            explain: "Talia says she checked the lease and dogs are allowed under twenty-five pounds.",
          },
          {
            q: "Why does Talia prefer an adult dog over a puppy?",
            options: [
              "Puppies are too expensive",
              "Puppies need more training time and she works full-time",
              "She dislikes puppies",
              "Adult dogs are cheaper to adopt",
            ],
            correct: 1,
            explain: "Talia says puppies need so much training time, and she works full-time.",
          },
          {
            q: "What dog does the shelter website mention?",
            options: [
              "A large German shepherd puppy",
              "Biscuit, a four-year-old terrier mix",
              "A cat named Biscuit",
              "No specific dog is mentioned",
            ],
            correct: 1,
            explain: "Talia says the shelter website mentioned a dog named Biscuit, a four-year-old terrier mix.",
          },
          {
            q: "What time will they meet at the shelter?",
            options: ["9:45", "10:00", "10:15", "11:00"],
            correct: 0,
            explain: "Talia says the shelter opens at ten, so they should meet at nine forty-five.",
          },
        ],
      },
      {
        id: "t10_l3",
        partLabel: "Part 3",
        name: "Listening for Information",
        instructions:
          "You will hear a conversation in which someone asks for information. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 40,
        answerSeconds: 75,
        transcript: `Caller: Hi, I'm going on a trip next month and I need to board my dog. Can you tell me about your services?
Staff: Of course. We offer overnight boarding as well as daytime daycare. For boarding, the rate is thirty-five dollars per night, which includes two meals and two supervised playgroups per day.
Caller: Do I need to bring my own food, or do you provide it?
Staff: We provide standard food, but if your dog has a special diet, you're welcome to bring your own food at no extra charge.
Caller: Good, mine eats a specific brand. Do you require any vaccinations?
Staff: Yes, we require proof of rabies, distemper, and bordetella vaccinations, updated within the last year.
Caller: I'll need to check when his bordetella shot was last done. Is there a trial day required before a full boarding stay?
Staff: For first-time dogs, yes, we require a half-day trial visit to make sure they do well in a group setting before an overnight stay.
Caller: That makes sense. How far in advance should I book, since I'm traveling in about a month?
Staff: A month is plenty of time. We usually recommend booking at least two weeks ahead, since spots fill up quickly around holidays.
Caller: Good, I'm within that window. Is there an extra fee for medication administration? My dog takes a daily pill.
Staff: There's a small fee of five dollars per day for medication administration.
Caller: That's reasonable. Last question, what are your pickup and drop-off hours?
Staff: We're open for drop-off and pickup from seven a.m. to seven p.m. daily, with no exceptions outside those hours for security reasons.
Caller: Great, this all sounds good, I'll go ahead and schedule the trial visit.`,
        questions: [
          {
            q: "What is the nightly boarding rate?",
            options: ["$15", "$25", "$35", "$50"],
            correct: 2,
            explain: "The staff member says the rate for overnight boarding is thirty-five dollars per night.",
          },
          {
            q: "What does the boarding rate include?",
            options: [
              "Nothing extra",
              "Two meals and two supervised playgroups daily",
              "Unlimited grooming",
              "A private room",
            ],
            correct: 1,
            explain: "The staff member says the rate includes two meals and two supervised playgroups per day.",
          },
          {
            q: "What vaccinations are required?",
            options: [
              "Only rabies",
              "Rabies, distemper, and bordetella",
              "None are required",
              "Only bordetella",
            ],
            correct: 1,
            explain: "The staff member says they require proof of rabies, distemper, and bordetella vaccinations.",
          },
          {
            q: "What is required before a first-time dog's overnight stay?",
            options: [
              "Nothing extra",
              "A half-day trial visit",
              "A written reference from another owner",
              "A special membership fee",
            ],
            correct: 1,
            explain: "The staff member says first-time dogs require a half-day trial visit before an overnight stay.",
          },
          {
            q: "How far in advance is booking recommended?",
            options: ["Same day", "At least two weeks", "Six months", "No recommendation is given"],
            correct: 1,
            explain: "The staff member recommends booking at least two weeks ahead since spots fill up quickly around holidays.",
          },
          {
            q: "What is the extra fee for medication administration?",
            options: ["$2 per day", "$5 per day", "$10 per day", "No fee"],
            correct: 1,
            explain: "The staff member says there's a small fee of five dollars per day for medication administration.",
          },
        ],
      },
      {
        id: "t10_l4",
        partLabel: "Part 4",
        name: "Listening to a News Item",
        instructions:
          "You will hear a short news report. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 30,
        answerSeconds: 65,
        transcript: `The city's newest aquatic centre officially opened its doors to the public this morning after nearly two years of construction. The facility, located on the site of the old outdoor pool that closed due to structural issues, features an eight-lane competition pool, a separate leisure pool with a waterslide, and a dedicated area for infant and toddler swimming lessons. The project cost twelve million dollars, funded through a combination of municipal bonds and a fundraising campaign led by the local swim club, which contributed just over one million dollars toward the final cost. Officials say the new centre will host the regional swimming championships next spring, the first major swim meet in the city in over a decade. Admission will be free for the opening week, after which a day pass will cost eight dollars for adults and five dollars for children and seniors. Monthly memberships will also be available for sixty dollars. The centre will be open seven days a week, though officials noted that the leisure pool will close for scheduled maintenance every Monday morning.`,
        questions: [
          {
            q: "What replaced the old outdoor pool?",
            options: [
              "A parking lot",
              "A new aquatic centre",
              "A shopping mall",
              "Nothing; the lot remains empty",
            ],
            correct: 1,
            explain: "The report says the new aquatic centre is located on the site of the old outdoor pool that closed due to structural issues.",
          },
          {
            q: "How much did the local swim club contribute to the project?",
            options: ["$100,000", "Just over $1 million", "$12 million", "Nothing"],
            correct: 1,
            explain: "The report says the swim club's fundraising campaign contributed just over one million dollars toward the final cost.",
          },
          {
            q: "What event will the new centre host next spring?",
            options: [
              "A music festival",
              "The regional swimming championships",
              "A city council meeting",
              "A job fair",
            ],
            correct: 1,
            explain: "The report says the centre will host the regional swimming championships next spring.",
          },
          {
            q: "How much is a day pass for adults after the free opening week?",
            options: ["$5", "$8", "$12", "$60"],
            correct: 1,
            explain: "The report says a day pass will cost eight dollars for adults after the free opening week.",
          },
          {
            q: "When does the leisure pool close for maintenance?",
            options: ["Every Friday evening", "Every Monday morning", "Never", "Only in winter"],
            correct: 1,
            explain: "The report says the leisure pool will close for scheduled maintenance every Monday morning.",
          },
        ],
      },
      {
        id: "t10_l5",
        partLabel: "Part 5",
        name: "Listening to a Discussion",
        instructions:
          "You will hear two coworkers discussing a workplace topic. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Leah: Did you hear management wants to try a "no-meeting Wednesday" policy starting next month?
Victor: I did, and I'm pretty excited about it. Wednesdays right now are always packed with back-to-back meetings for me, sometimes six in a row.
Leah: Same here, it's exhausting. Though I wonder how urgent issues will get handled if literally no meetings are allowed that day.
Victor: I read the policy allows emergency meetings still, it's really aimed at recurring status meetings and non-urgent syncs, not true emergencies.
Leah: Okay, that's reassuring. I was picturing being stuck if a client had an urgent request on a Wednesday.
Victor: Right, the goal seems to be protecting one day for focused, uninterrupted work, like finishing reports or coding without constant interruptions.
Leah: That would genuinely help me. I keep pushing my quarterly report to the weekend because Wednesdays eat up my whole day.
Victor: Same with my project documentation. I think this could actually boost productivity if people respect it.
Leah: My only worry is whether people will just move all those meetings to Tuesday and Thursday instead, making those days worse.
Victor: That's possible, though the memo mentioned managers are supposed to actually cancel unnecessary recurring meetings, not just reschedule everything.
Leah: I hope that actually happens and it's not just wishful thinking on their part.
Victor: Fair skepticism. I guess we'll see after a month whether meeting counts on other days actually go up.
Leah: Agreed, let's check back with each other after a few weeks and compare notes on whether it's working.
Victor: Sounds good, I'm cautiously optimistic either way.`,
        questions: [
          {
            q: "What policy is being discussed?",
            options: [
              "Banning all meetings permanently",
              "A \"no-meeting Wednesday\" policy",
              "Mandatory Wednesday overtime",
              "Moving the office to a new building",
            ],
            correct: 1,
            explain: "Leah says management wants to try a \"no-meeting Wednesday\" policy starting next month.",
          },
          {
            q: "What is Victor's initial reaction?",
            options: [
              "He opposes it strongly",
              "He is excited since Wednesdays are packed with meetings",
              "He is indifferent",
              "He wants meetings moved to Sunday instead",
            ],
            correct: 1,
            explain: "Victor says he's pretty excited since his Wednesdays are always packed with back-to-back meetings.",
          },
          {
            q: "What exception does the policy allow?",
            options: [
              "No exceptions at all",
              "Emergency meetings",
              "Meetings under five minutes",
              "Meetings with clients only",
            ],
            correct: 1,
            explain: "Victor says the policy still allows emergency meetings; it targets recurring status meetings and non-urgent syncs.",
          },
          {
            q: "What is the policy's stated goal?",
            options: [
              "To reduce salaries",
              "To protect one day for focused, uninterrupted work",
              "To eliminate all documentation",
              "To increase meeting frequency",
            ],
            correct: 1,
            explain: "Victor says the goal seems to be protecting one day for focused, uninterrupted work.",
          },
          {
            q: "What task does Leah say she keeps pushing to the weekend?",
            options: [
              "Grocery shopping",
              "Her quarterly report",
              "Team lunches",
              "Hiring interviews",
            ],
            correct: 1,
            explain: "Leah says she keeps pushing her quarterly report to the weekend because Wednesdays eat up her whole day.",
          },
          {
            q: "What is Leah's main worry about the policy?",
            options: [
              "Meetings will disappear entirely",
              "Meetings will just move to Tuesday and Thursday, making those days worse",
              "No one will attend meetings",
              "The policy will end the company",
            ],
            correct: 1,
            explain: "Leah worries people will just move all those meetings to Tuesday and Thursday instead.",
          },
          {
            q: "According to the memo, what are managers supposed to do with unnecessary recurring meetings?",
            options: [
              "Reschedule them all to Wednesday",
              "Actually cancel them rather than just moving them",
              "Ignore the new policy",
              "Delegate them to interns",
            ],
            correct: 1,
            explain: "Victor says the memo mentioned managers are supposed to actually cancel unnecessary recurring meetings, not just reschedule them.",
          },
          {
            q: "What do Leah and Victor plan to do after a few weeks?",
            options: [
              "Quit their jobs",
              "Check back with each other and compare notes on whether it's working",
              "Cancel the policy themselves",
              "Ask for a raise",
            ],
            correct: 1,
            explain: "Leah suggests they check back with each other after a few weeks and compare notes on whether it's working.",
          },
        ],
      },
      {
        id: "t10_l6",
        partLabel: "Part 6",
        name: "Listening to Viewpoints",
        instructions:
          "You will hear three people give their opinions on a topic during a radio call-in segment. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 45,
        answerSeconds: 80,
        transcript: `Host: Today we're discussing a proposal that would require all new homes built in the city to include solar panels. Let's start with Priya.
Priya: I fully support this. Solar panels reduce long-term energy costs for homeowners and help the city meet its climate goals. Requiring them on new builds is far cheaper than retrofitting older homes later.
Host: Thanks, Priya. Felix, what's your view?
Felix: I understand the climate goal, but as someone in home construction, I know this would add eight to fifteen thousand dollars to the cost of a new home. In a city already struggling with housing affordability, that seems like the wrong move right now.
Host: A real tension there. Dana, where do you land?
Dana: I lean toward a middle ground. I don't think an immediate blanket mandate makes sense given the affordability concerns Felix raised, but I also don't want to abandon the climate goal Priya cares about. A phased mandate, combined with rebates or low-interest loans for builders, could ease the cost burden while still moving toward full solar adoption within five years.
Host: Priya, how would you respond to the affordability concern?
Priya: I'd support pairing the mandate with builder incentives, like Dana suggests, especially if it means the policy is actually politically possible instead of being blocked entirely.
Host: And Felix, what about Dana's phased approach with incentives?
Felix: That sounds much more workable to me. If builders had incentives and a few years to adjust supply chains and pricing, the cost impact on new homes would be far more manageable.
Host: It seems like there's a path forward here. Thanks to all three of you for calling in today.`,
        questions: [
          {
            q: "What is Priya's main argument?",
            options: [
              "Solar panels are ugly",
              "Solar panels reduce long-term costs and help climate goals",
              "Solar panels are optional",
              "New homes don't need energy",
            ],
            correct: 1,
            explain: "Priya says solar panels reduce long-term energy costs and help the city meet its climate goals.",
          },
          {
            q: "What is Felix's main objection?",
            options: [
              "Solar panels don't work",
              "The added cost worsens housing affordability",
              "He dislikes clean energy",
              "Panels are illegal",
            ],
            correct: 1,
            explain: "Felix says the mandate would add thousands to the cost of a new home in a city already struggling with affordability.",
          },
          {
            q: "How much extra cost does Felix say solar panels add to a new home?",
            options: [
              "$500 to $1,000",
              "$8,000 to $15,000",
              "$50,000 to $70,000",
              "No added cost",
            ],
            correct: 1,
            explain: "Felix says this would add eight to fifteen thousand dollars to the cost of a new home.",
          },
          {
            q: "What is Dana's proposed compromise?",
            options: [
              "No mandate ever",
              "An immediate blanket mandate with no help",
              "A phased mandate combined with rebates or low-interest loans for builders",
              "Banning new home construction",
            ],
            correct: 2,
            explain: "Dana proposes a phased mandate combined with rebates or low-interest loans for builders, moving toward full adoption within five years.",
          },
          {
            q: "How does Priya respond to the affordability concern?",
            options: [
              "She rejects any compromise",
              "She supports pairing the mandate with builder incentives",
              "She says affordability doesn't matter",
              "She withdraws her support for solar entirely",
            ],
            correct: 1,
            explain: "Priya says she'd support pairing the mandate with builder incentives like Dana suggests.",
          },
          {
            q: "How does Felix respond to Dana's phased approach?",
            options: [
              "He rejects it completely",
              "He finds it more workable given time and incentives",
              "He says it's still too expensive no matter what",
              "He refuses to discuss it further",
            ],
            correct: 1,
            explain: "Felix says the phased approach with incentives sounds much more workable to him.",
          },
        ],
      },
    ],
  };

  window.__listeningTests = window.__listeningTests || [];
  window.__listeningTests.push(test);
})();
