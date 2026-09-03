// CELPIP-style Listening practice content (original material, modeled on the official test format).
// Each part: previewSeconds = time to read questions before audio starts,
// transcript = read aloud via the browser's speech synthesis to simulate the audio,
// answerSeconds = time given to finish answering after the audio ends.

const listeningData = {
  title: "Listening",
  totalSuggestedMinutes: 47,
  parts: [
    {
      id: "l1",
      partLabel: "Part 1",
      name: "Listening to Problem Solving",
      instructions:
        "You will hear a conversation about a problem. Listen carefully, then answer the questions about what you heard.",
      previewSeconds: 40,
      answerSeconds: 60,
      transcript: `Dana: Hey Marcus, do you have a second? We've got a problem with the Friday client meeting.
Marcus: Sure, what's going on?
Dana: I just found out the Elm Street conference room is double-booked. The marketing team reserved it for the same time slot for their photo shoot.
Marcus: Ugh. Did anyone catch the mistake before now?
Dana: No, I only noticed when I went to print the sign-in sheet and saw the room calendar had two entries.
Marcus: Okay. How big is the client group again?
Dana: Six people from the client side, plus the four of us, so ten total.
Marcus: The Elm Street room seats twelve, right? What about the Birch room on the third floor?
Dana: Birch only seats eight, so that won't work comfortably with laptops and materials.
Marcus: True. What about pushing the marketing shoot to the afternoon instead?
Dana: I already asked. They said the natural light they need is only good in the morning, so they can't move it.
Marcus: Then I think our best option is to book the large training room downstairs. It seats twenty, has the video conferencing set up we need, and it's free all day Friday.
Dana: That could work, but it's usually reserved for staff training sessions. Do we need special approval?
Marcus: I'll email facilities right now and ask for a one-time exception since it's client-facing. I'm fairly confident they'll approve it quickly.
Dana: Perfect. I'll update the calendar invite and let the client know the new room number once it's confirmed.
Marcus: Sounds good. Let's aim to have this settled by end of day today so nobody shows up confused on Friday.`,
      questions: [
        {
          q: "What is the main problem in the conversation?",
          options: [
            "The client canceled the Friday meeting.",
            "Two teams booked the same room for the same time.",
            "The training room is broken.",
            "Marcus forgot to invite the client.",
          ],
          correct: 1,
          explain:
            "Dana explains that the Elm Street room was booked by both her team and marketing for the same slot — a double-booking, not a cancellation or equipment issue.",
        },
        {
          q: "Why can't the marketing team move their photo shoot?",
          options: [
            "They don't have a backup room.",
            "Their equipment is already set up.",
            "They need morning light that isn't available later.",
            "Their shoot was already delayed once.",
          ],
          correct: 2,
          explain:
            "Marcus suggests moving the shoot to the afternoon, and Dana says marketing needs the morning light, so it can't be moved.",
        },
        {
          q: "Why is the Birch room not a good option?",
          options: [
            "It is too far from the office.",
            "It doesn't have video conferencing.",
            "It only seats eight people, but ten are needed.",
            "It is already booked for training.",
          ],
          correct: 2,
          explain:
            "The group is ten people and Dana states the Birch room only seats eight, making it too small.",
        },
        {
          q: "What does Marcus decide to do about the downstairs training room?",
          options: [
            "Cancel a training session to free it up.",
            "Ask facilities for a one-time exception to use it.",
            "Ask the client to reschedule.",
            "Split the group between two rooms.",
          ],
          correct: 1,
          explain:
            "Marcus says he will email facilities to request a one-time exception since the room is normally reserved for staff training.",
        },
        {
          q: "What does Dana agree to do once the room is confirmed?",
          options: [
            "Print new name tags.",
            "Update the calendar invite and inform the client.",
            "Move the meeting to Monday.",
            "Ask marketing for their room instead.",
          ],
          correct: 1,
          explain:
            "Dana's closing line states she will update the calendar invite and let the client know the new room number.",
        },
      ],
    },
    {
      id: "l2",
      partLabel: "Part 2",
      name: "Listening to a Daily Life Conversation",
      instructions:
        "You will hear a conversation between two friends. Listen carefully, then answer the questions about what you heard.",
      previewSeconds: 40,
      answerSeconds: 60,
      transcript: `Priya: I'm so excited for the camping trip this weekend. Did you finish packing?
Jordan: Almost. I still need to grab a few things from the store, but I've got the tent and sleeping bags ready.
Priya: Great. I checked the weather and it looks like it might rain Saturday afternoon, so we should probably bring the tarp too.
Jordan: Good call. I'll toss that in the car along with some extra rope, just in case we need to rig up a shelter over the fire pit.
Priya: Speaking of the fire pit, did you check whether the campground allows fires right now? I heard there was a burn ban somewhere in the region last month.
Jordan: I actually called them yesterday. The ban was lifted last week because of the rain we've had, so we're fine to have a campfire.
Priya: Perfect, because I was really looking forward to making s'mores.
Jordan: Me too. Now, for food, I was thinking we do something simple Friday night since we'll arrive late, maybe just sandwiches, and then a proper cooked breakfast Saturday morning.
Priya: That works for me. I can handle breakfast if you handle dinner on Saturday.
Jordan: Deal. I'll bring the camp stove and a pot for pasta.
Priya: One more thing — should we invite Sam? He mentioned he's free this weekend and has his own tent.
Jordan: Sure, the more the merrier, and it means we can split the cost of firewood three ways instead of two.
Priya: I'll text him now. If he says yes, I'll tell him to meet us at the trailhead parking lot at nine on Friday morning.
Jordan: Sounds like a plan. This is going to be a great trip.`,
      questions: [
        {
          q: "Why does Priya suggest bringing a tarp?",
          options: [
            "To sit on during meals.",
            "Because rain is expected Saturday afternoon.",
            "To cover the car.",
            "Because the tent is too small.",
          ],
          correct: 1,
          explain:
            "Priya checked the weather and mentions possible rain Saturday afternoon, so she suggests bringing the tarp as protection.",
        },
        {
          q: "What did Jordan learn from calling the campground?",
          options: [
            "The campground is fully booked.",
            "The burn ban has been lifted, so campfires are allowed.",
            "They need a special permit for a tent.",
            "The campground moved the check-in time.",
          ],
          correct: 1,
          explain:
            "Jordan says he called and found out the burn ban was lifted last week, meaning campfires are now permitted.",
        },
        {
          q: "What is the plan for Friday night's meal?",
          options: [
            "A full cooked breakfast.",
            "Pasta cooked on the camp stove.",
            "Something simple, like sandwiches.",
            "Eating at a restaurant on the way.",
          ],
          correct: 2,
          explain:
            "Jordan suggests something simple like sandwiches for Friday night since they will arrive late.",
        },
        {
          q: "What benefit does Jordan mention about inviting Sam?",
          options: [
            "Sam can drive everyone there.",
            "Sam knows the campsite well.",
            "The cost of firewood can be split three ways.",
            "Sam has extra sleeping bags.",
          ],
          correct: 2,
          explain:
            "Jordan says inviting Sam means the cost of firewood can be split three ways instead of two.",
        },
        {
          q: "Where will the group meet if Sam joins the trip?",
          options: [
            "At Jordan's house.",
            "At the trailhead parking lot at nine on Friday morning.",
            "At the campground office at noon.",
            "At a gas station on the highway.",
          ],
          correct: 1,
          explain:
            "Priya says she'll tell Sam to meet them at the trailhead parking lot at nine on Friday morning.",
        },
      ],
    },
    {
      id: "l3",
      partLabel: "Part 3",
      name: "Listening for Information",
      instructions:
        "You will hear a conversation in which someone asks for information. Listen carefully, then answer the questions about what you heard.",
      previewSeconds: 40,
      answerSeconds: 60,
      transcript: `Caller: Hi, I'm calling about the community library's new services. I just moved to the area and I'm not sure what's available.
Librarian: Welcome to the neighborhood! I'd be happy to help. First, your library card is free for residents, and you can sign up online or in person with proof of address.
Caller: Great, and does the card let me borrow from other branches too?
Librarian: Yes, one card works at all six branches across the city, and you can return items to any branch, not just the one where you borrowed them.
Caller: That's convenient. I also heard something about a tool-lending program?
Librarian: That's right. Our main branch downtown has a tool library where you can borrow things like drills, ladders, and garden equipment for up to one week at a time, completely free.
Caller: That's fantastic, I just bought a house and I'm sure I'll need that. What about digital resources, like ebooks?
Librarian: We have an app called ReadNow where you can borrow ebooks and audiobooks directly to your phone or tablet. You can borrow up to five items at a time, and they return themselves automatically after two weeks.
Caller: No late fees then?
Librarian: No late fees on digital items, correct. Physical books still have a small late fee, but we actually eliminated late fees for children's materials last year.
Caller: Good to know. Last question — are there programs for adults, or is it mostly for kids?
Librarian: We actually run a monthly book club, free resume-writing workshops, and beginner computer classes for adults. Those are held at the downtown branch on the first Tuesday of every month.
Caller: This is really helpful, thank you so much.
Librarian: Of course, welcome again, and don't hesitate to call if you have more questions.`,
      questions: [
        {
          q: "What is required to sign up for a library card?",
          options: [
            "A government-issued photo ID only.",
            "Proof of address.",
            "A referral from another cardholder.",
            "A one-time registration fee.",
          ],
          correct: 1,
          explain:
            "The librarian says the card is free for residents and can be obtained with proof of address.",
        },
        {
          q: "How many branches can a single library card be used at?",
          options: ["One", "Three", "Six", "Ten"],
          correct: 2,
          explain:
            "The librarian states one card works at all six branches across the city.",
        },
        {
          q: "What can be borrowed from the tool-lending program?",
          options: [
            "Kitchen appliances",
            "Drills, ladders, and garden equipment",
            "Musical instruments",
            "Office furniture",
          ],
          correct: 1,
          explain:
            "The librarian specifically lists drills, ladders, and garden equipment as examples of what the tool library offers.",
        },
        {
          q: "How do borrowed ebooks on the ReadNow app get returned?",
          options: [
            "The user must manually return them.",
            "They automatically return after two weeks.",
            "A librarian removes them remotely.",
            "They must be returned in person.",
          ],
          correct: 1,
          explain:
            "The librarian explains that digital items return themselves automatically after two weeks.",
        },
        {
          q: "According to the librarian, which library materials have no late fees?",
          options: [
            "All physical books",
            "Only tools",
            "Children's materials and digital items",
            "Nothing — late fees apply to everything",
          ],
          correct: 2,
          explain:
            "The librarian says there are no late fees on digital items and that late fees for children's materials were eliminated last year.",
        },
      ],
    },
    {
      id: "l4",
      partLabel: "Part 4",
      name: "Listening to a News Item",
      instructions:
        "You will hear a short news report. Listen carefully, then answer the questions about what you heard.",
      previewSeconds: 30,
      answerSeconds: 45,
      transcript: `In local news, the city announced yesterday that the vacant lot on Harrison Avenue will officially become a community garden starting next spring. The two-acre space, which has sat empty since a warehouse fire five years ago, will be divided into sixty individual plots that residents can rent for a small annual fee. City officials say the project is designed to give apartment dwellers without yard space a chance to grow their own vegetables and flowers. Funding for soil, fencing, and a small tool shed came from a mix of city budget money and a grant from a regional environmental nonprofit. Applications for plots open next month, and organizers expect demand to be high based on the waiting list for a similar garden across town, which currently has over two hundred names on it. A neighborhood meeting to explain the application process will be held at the community center on the fifteenth.`,
      questions: [
        {
          q: "What will the vacant lot on Harrison Avenue become?",
          options: [
            "A parking garage",
            "A community garden",
            "An apartment building",
            "A new warehouse",
          ],
          correct: 1,
          explain:
            "The report states the lot will officially become a community garden starting next spring.",
        },
        {
          q: "Who provided the funding for the project?",
          options: [
            "Only private donors",
            "A mix of city budget money and a grant from an environmental nonprofit",
            "The residents who will use the plots",
            "A federal housing program",
          ],
          correct: 1,
          explain:
            "The report says funding came from a mix of city budget money and a grant from a regional environmental nonprofit.",
        },
        {
          q: "What suggests that demand for plots will be high?",
          options: [
            "A survey of city residents",
            "The waiting list of over two hundred names for a similar garden",
            "A vote at city council",
            "Social media comments",
          ],
          correct: 1,
          explain:
            "Organizers base their expectation of high demand on the waiting list of over two hundred names for a similar garden across town.",
        },
      ],
    },
    {
      id: "l5",
      partLabel: "Part 5",
      name: "Listening to a Discussion",
      instructions:
        "You will hear two coworkers discussing a workplace topic. Listen carefully, then answer the questions about what you heard.",
      previewSeconds: 40,
      answerSeconds: 60,
      transcript: `Wei: Did you see the memo about the new remote work policy? Starting next quarter, everyone has to be in the office at least three days a week.
Alicia: I did, and honestly I have mixed feelings. On one hand, I get more done at home with fewer interruptions.
Wei: Same here, but I think I actually miss some of the in-person collaboration. Some conversations just work better face to face than over chat.
Alicia: That's fair. I noticed our team's brainstorming sessions have felt slower since we went fully remote. Ideas don't bounce around the same way on a video call.
Wei: Exactly. Plus, newer employees seem to struggle more. My cousin started a fully remote job last year and said she still doesn't really know her coworkers.
Alicia: That's a good point. Mentorship and just picking up small tips from watching someone work nearby — that stuff is hard to replicate remotely.
Wei: Right. My worry is more about the commute, though. Mine is almost an hour each way, so three days a week is a real chunk of time and money in gas.
Alicia: I hear you. I wonder if they'll offer any flexibility on which three days, or if it's fixed for everyone.
Wei: The memo said each team lead picks the specific days, so at least there's some room to coordinate around personal schedules.
Alicia: That helps a little. I think overall I can live with it, especially if it genuinely improves collaboration like they're hoping.
Wei: Same. I just hope they actually measure whether it's working instead of just assuming more office time automatically means better results.`,
      questions: [
        {
          q: "What is the new policy being discussed?",
          options: [
            "Employees must work fully remote.",
            "Employees must be in the office at least three days a week.",
            "Employees can choose their own schedule freely.",
            "The office is closing permanently.",
          ],
          correct: 1,
          explain:
            "Wei states the memo requires everyone to be in the office at least three days a week starting next quarter.",
        },
        {
          q: "What does Alicia say has gotten slower since going fully remote?",
          options: [
            "Email response times",
            "Team brainstorming sessions",
            "Software updates",
            "Performance reviews",
          ],
          correct: 1,
          explain:
            "Alicia notes that brainstorming sessions have felt slower since the team went fully remote.",
        },
        {
          q: "What is Wei's main personal concern about the new policy?",
          options: [
            "He dislikes his coworkers.",
            "His long commute will cost more time and money.",
            "He doesn't have a good home office.",
            "He thinks the office is too small.",
          ],
          correct: 1,
          explain:
            "Wei explains his commute is almost an hour each way, making three office days costly in time and gas money.",
        },
        {
          q: "According to the memo, who decides which three days employees come in?",
          options: [
            "Each employee individually",
            "The human resources department",
            "Each team lead",
            "It is the same fixed days for the whole company",
          ],
          correct: 2,
          explain:
            "Wei says the memo indicates each team lead picks the specific days for their team.",
        },
        {
          q: "What does Wei hope the company will do regarding the policy?",
          options: [
            "Cancel it immediately",
            "Actually measure whether it improves results",
            "Extend it to five days a week",
            "Let every team opt out",
          ],
          correct: 1,
          explain:
            "Wei's final comment expresses hope that the company measures whether the policy actually works rather than just assuming it helps.",
        },
      ],
    },
    {
      id: "l6",
      partLabel: "Part 6",
      name: "Listening to Viewpoints",
      instructions:
        "You will hear three people give their opinions on a topic during a radio call-in segment. Listen carefully, then answer the questions about what you heard.",
      previewSeconds: 45,
      answerSeconds: 75,
      transcript: `Host: Today we're discussing whether public schools should require students to wear uniforms. Let's hear from our callers. First up is Renata.
Renata: I'm strongly in favor of uniforms. When my kids started wearing them, the morning routine became so much easier — no more arguments about what to wear. It also cut down on the visible gap between kids from wealthier and less wealthy families, since everyone looks the same.
Host: Thanks, Renata. Next we have Devon.
Devon: I actually disagree. I think uniforms limit self-expression, and school should be a place where kids learn to develop their own identity, including through how they dress. I also think the cost of buying a whole separate wardrobe just for school is an added burden for some families, not a savings.
Host: Interesting, a different take. Finally, let's go to Ines.
Ines: I'm somewhere in the middle. I see the bullying-reduction argument, but I'm not convinced the research strongly supports that uniforms actually reduce bullying — kids find other ways to create social hierarchies regardless of clothing. That said, I do think a simple, affordable dress code, short of a full uniform, could be a reasonable compromise.
Host: So Renata, how would you respond to Devon's point about cost?
Renata: I'd say most uniform programs I've seen actually offer basic pieces at a lower cost than regular school clothes, and many schools have programs to help low-income families cover it.
Host: And Devon, what about the identity argument Renata raised, about reducing the visible wealth gap?
Devon: I understand the appeal, but I think kids find other ways to signal status anyway, through shoes or backpacks, so I'm not sure uniforms solve that problem completely.
Host: Great discussion, thank you all for calling in today.`,
      questions: [
        {
          q: "What is Renata's main reason for supporting uniforms?",
          options: [
            "She thinks they are more fashionable.",
            "They simplify mornings and reduce visible wealth differences.",
            "She dislikes doing laundry.",
            "Her school requires them by law.",
          ],
          correct: 1,
          explain:
            "Renata says uniforms made mornings easier and reduced the visible gap between kids from wealthier and less wealthy families.",
        },
        {
          q: "What is Devon's main objection to uniforms?",
          options: [
            "They are too comfortable.",
            "They limit self-expression and can add cost for some families.",
            "They are only available in one color.",
            "Teachers dislike enforcing the rule.",
          ],
          correct: 1,
          explain:
            "Devon argues uniforms limit self-expression and that buying a separate school wardrobe is an added cost burden.",
        },
        {
          q: "What is Ines's overall position?",
          options: [
            "Strongly in favor of full uniforms",
            "Strongly opposed to any dress rules",
            "Skeptical that uniforms reduce bullying, but open to a simple dress code",
            "Uninterested in the topic",
          ],
          correct: 2,
          explain:
            "Ines says she isn't convinced uniforms reduce bullying, but thinks a simple, affordable dress code could be a reasonable compromise.",
        },
        {
          q: "How does Renata respond to the cost concern?",
          options: [
            "She agrees uniforms are always more expensive.",
            "She says uniforms are usually cheaper and schools often help low-income families.",
            "She says cost doesn't matter.",
            "She suggests eliminating school clothing rules entirely.",
          ],
          correct: 1,
          explain:
            "Renata responds that uniform programs are often cheaper than regular clothes and schools frequently help cover costs for low-income families.",
        },
        {
          q: "How does Devon respond to the wealth-gap argument?",
          options: [
            "He agrees it completely solves the problem.",
            "He says kids will still signal status through things like shoes or backpacks.",
            "He says wealth gaps don't exist among children.",
            "He changes his opinion and supports uniforms.",
          ],
          correct: 1,
          explain:
            "Devon says kids find other ways to signal status, such as through shoes or backpacks, so he doubts uniforms fully solve the problem.",
        },
        {
          q: "What can be concluded about the overall discussion?",
          options: [
            "All three callers fully agree with each other.",
            "The callers present three distinct viewpoints: strongly for, strongly against, and a middle position.",
            "The host refuses to let Devon speak.",
            "The topic is resolved with a clear final decision.",
          ],
          correct: 1,
          explain:
            "Renata is strongly in favor, Devon is opposed, and Ines takes a middle position — three distinct viewpoints, with no final resolution given.",
        },
      ],
    },
  ],
};

if (typeof module !== "undefined") module.exports = listeningData;
