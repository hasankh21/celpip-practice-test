// Listening Practice Test 6 — original content modeled on the official CELPIP-General format
// (Part 1: 8 questions, Part 2: 5, Part 3: 6, Part 4: 5, Part 5: 8, Part 6: 6 — 38 total, matching
// the officially documented question counts for each part).

(function () {
  const test = {
    testNumber: 6,
    parts: [
      {
        id: "t6_l1",
        partLabel: "Part 1",
        name: "Listening to Problem Solving",
        instructions:
          "You will hear a conversation about a problem. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Hannah: Owen, we've got a scheduling conflict with the gala.
Owen: What happened?
Hannah: I just found out our keynote speaker, Dr. Alvarez, is also scheduled to give a talk at a medical conference the same evening, November 14th. Her assistant just called to flag it.
Owen: That's frustrating this close to the event. Did her assistant say how it happened?
Hannah: She said Dr. Alvarez's team accepted the conference invitation months after she agreed to our gala, and it slipped through without cross-checking her calendar.
Owen: Can she do both somehow, maybe an earlier slot with us?
Hannah: I asked. She could actually speak at six thirty instead of our planned eight o'clock slot, but the conference is in another city, so she'd need to leave immediately after by seven.
Owen: That means she couldn't stay for the rest of the evening's program.
Hannah: Right. We'd need to shuffle around the dinner service and the auction so her talk happens before dessert instead of after.
Owen: That's doable, but it also means cutting the Q&A session we had planned with her.
Hannah: True. Alternatively, we could ask if she'd record a short video message instead and have a different guest speak live.
Owen: Who would we ask on such short notice?
Hannah: Councillor Reyes offered months ago to fill in if we ever needed a backup, so she might be a good option if Dr. Alvarez really can't manage the earlier slot.
Owen: I think we should try for the six thirty slot first since Dr. Alvarez's name draws a lot of ticket sales, and only fall back to Councillor Reyes if the timing truly doesn't work.
Hannah: Agreed. I'll call her assistant back within the hour to lock in the earlier time and cut the Q&A from the schedule.
Owen: Sounds good. I'll update the run-of-show document so the caterers know the dinner timing shifted too.`,
        questions: [
          {
            q: "What is the main problem in the conversation?",
            options: [
              "The gala venue cancelled the booking.",
              "The keynote speaker is double-booked for the same evening.",
              "The caterers cancelled last minute.",
              "Ticket sales are too low.",
            ],
            correct: 1,
            explain:
              "Hannah explains that Dr. Alvarez is also scheduled to speak at a medical conference the same evening as the gala.",
          },
          {
            q: "How did the double-booking happen?",
            options: [
              "Dr. Alvarez forgot about the gala entirely.",
              "Her team accepted the conference invitation later without checking her calendar.",
              "The gala date was changed without telling her.",
              "Two different assistants scheduled her independently on purpose.",
            ],
            correct: 1,
            explain:
              "Hannah says the assistant explained that Dr. Alvarez's team accepted the conference invitation months later, and it slipped through without checking her calendar.",
          },
          {
            q: "What alternative time can Dr. Alvarez offer for the gala?",
            options: [
              "She can only attend the following week.",
              "She could speak at six thirty instead of eight, but must leave by seven.",
              "She can stay for the full evening if the date changes.",
              "She can only attend virtually.",
            ],
            correct: 1,
            explain:
              "Hannah reports Dr. Alvarez could speak at six thirty instead of the planned eight o'clock slot but must leave by seven for the conference in another city.",
          },
          {
            q: "What does the earlier time slot mean for the evening's program?",
            options: [
              "Nothing changes at all.",
              "She won't be able to stay for the rest of the program, including the planned Q&A.",
              "The auction must be cancelled.",
              "Dinner service will be skipped entirely.",
            ],
            correct: 1,
            explain:
              "Owen points out that leaving by seven means she can't stay for the rest of the program, so the planned Q&A session would need to be cut.",
          },
          {
            q: "What backup speaker option does Hannah mention?",
            options: [
              "A random volunteer from the audience",
              "Councillor Reyes, who offered months ago to fill in if needed",
              "Owen himself",
              "No backup option exists",
            ],
            correct: 1,
            explain:
              "Hannah mentions Councillor Reyes offered months ago to fill in as a backup speaker if ever needed.",
          },
          {
            q: "Which option do Hannah and Owen decide to try first?",
            options: [
              "Cancel the gala entirely",
              "Try to secure the six thirty slot with Dr. Alvarez since her name draws ticket sales",
              "Immediately book Councillor Reyes instead",
              "Ask Dr. Alvarez to skip the conference",
            ],
            correct: 1,
            explain:
              "Owen suggests trying for the six thirty slot first because Dr. Alvarez's name draws a lot of ticket sales, falling back to Councillor Reyes only if needed.",
          },
          {
            q: "What does Hannah plan to do within the hour?",
            options: [
              "Cancel the venue booking",
              "Call the assistant back to lock in the earlier time and cut the Q&A",
              "Send out new invitations",
              "Ask the caterers for a refund",
            ],
            correct: 1,
            explain:
              "Hannah says she'll call the assistant back within the hour to confirm the earlier time slot and remove the Q&A from the schedule.",
          },
          {
            q: "What does Owen plan to update because of the schedule change?",
            options: [
              "The guest list",
              "The run-of-show document, so caterers know the dinner timing shifted",
              "The ticket prices",
              "The venue address",
            ],
            correct: 1,
            explain:
              "Owen says he will update the run-of-show document so the caterers are aware the dinner timing has shifted.",
          },
        ],
      },
      {
        id: "t6_l2",
        partLabel: "Part 2",
        name: "Listening to a Daily Life Conversation",
        instructions:
          "You will hear a conversation between two friends. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 35,
        answerSeconds: 65,
        transcript: `Alyssa: Did you see the sign-ups opened for the fall rec soccer league?
Jamal: I did. Are you thinking of joining again this year?
Alyssa: Definitely, but I heard the coed division is really competitive this season, lots of former college players signed up already.
Jamal: Really? Maybe we should look at the recreational division instead, it's supposed to be more casual.
Alyssa: That might be smarter, especially since neither of us has played regularly in a couple years. What's the schedule like?
Jamal: Games are every Tuesday evening starting in September, plus one Saturday morning game a month.
Alyssa: That works with my schedule. How much is the registration fee?
Jamal: Eighty dollars per person, which includes a jersey, but cleats and shin guards are separate.
Alyssa: I already have cleats from last time. Do we need a full team to sign up, or can we join individually?
Jamal: You can join as a free agent and get placed on a team, or a group of friends can register together as a full roster.
Alyssa: I'd rather play with people I know. Should we ask Priya and Devon if they want to join too?
Jamal: Good idea, that would give us four, and I think the minimum for a group registration is six.
Alyssa: I'll message them tonight and see if they know anyone else who might want to play.
Jamal: If we get six, we could register as a group by the deadline next Friday.
Alyssa: Perfect, I'll also ask about the recreational division's games being less competitive, just to confirm before we commit.
Jamal: Good call, let's finalize everything by Wednesday so we're not rushing before the deadline.`,
        questions: [
          {
            q: "Why are Alyssa and Jamal considering the recreational division instead of coed?",
            options: [
              "The coed division costs more money.",
              "The coed division is very competitive this season with former college players.",
              "The recreational division has better prizes.",
              "The coed division was cancelled.",
            ],
            correct: 1,
            explain:
              "Alyssa mentions the coed division is very competitive this season because many former college players have signed up.",
          },
          {
            q: "What is the game schedule for the league?",
            options: [
              "Every Tuesday evening, plus one Saturday morning a month",
              "Every weekend only",
              "Weekday mornings only",
              "Once a month",
            ],
            correct: 0,
            explain:
              "Jamal explains games happen every Tuesday evening starting in September, plus one Saturday morning game a month.",
          },
          {
            q: "What does the registration fee include?",
            options: [
              "A jersey, cleats, and shin guards",
              "A jersey only, with cleats and shin guards separate",
              "Nothing, equipment must be bought separately",
              "A full uniform and equipment bag",
            ],
            correct: 1,
            explain: "Jamal says the eighty-dollar fee includes a jersey, but cleats and shin guards are separate.",
          },
          {
            q: "What is the minimum group size to register as a team?",
            options: ["Two", "Four", "Six", "Eleven"],
            correct: 2,
            explain: "Jamal states the minimum for a group registration is six people.",
          },
          {
            q: "What does Alyssa plan to do that night?",
            options: [
              "Pay the registration fee immediately",
              "Message Priya and Devon to see if they want to join",
              "Buy new cleats",
              "Call the league office",
            ],
            correct: 1,
            explain: "Alyssa says she will message Priya and Devon that night to see if they're interested in joining the team.",
          },
        ],
      },
      {
        id: "t6_l3",
        partLabel: "Part 3",
        name: "Listening for Information",
        instructions:
          "You will hear a conversation in which someone asks for information. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 40,
        answerSeconds: 75,
        transcript: `Caller: Hi, I saw a dog on your website that I'm interested in adopting, and I had some questions about the process.
Staff: Sure, happy to help. Which dog were you looking at?
Caller: The medium-sized terrier mix named Biscuit.
Staff: Great choice, he's been with us about six weeks. What would you like to know?
Caller: What's the adoption fee, and what does it include?
Staff: The fee is two hundred dollars, and it covers his neutering, all his vaccinations, and a microchip.
Caller: That's reasonable. Do I need to fill out an application first?
Staff: Yes, you'll fill out an application online, and then we schedule a meet-and-greet here at the shelter, usually within two to three days.
Caller: Is there a home visit required?
Staff: Not usually for apartment adoptions, but if you have a yard, we do ask for photos of the fencing just to confirm it's secure.
Caller: I do have a yard with a fence, so I'll send photos. Is there a waiting period after the meet-and-greet?
Staff: If the meet-and-greet goes well, you can usually take him home the same day, as long as the paperwork and fee are completed.
Caller: That's faster than I expected. Do you offer any support after adoption, like training advice?
Staff: Yes, we offer a free consultation with our behaviorist within the first month, and discounted rates on training classes for the first six months.
Caller: That's really helpful, especially since I've never adopted an older dog before.
Staff: We're here to help with any questions that come up. When would you like to schedule the meet-and-greet?
Caller: Could we do this Thursday afternoon?
Staff: Let me check... yes, Thursday at three works.`,
        questions: [
          {
            q: "What does the two-hundred-dollar adoption fee cover?",
            options: [
              "Only the microchip",
              "Neutering, all vaccinations, and a microchip",
              "A month's supply of dog food",
              "A crate and leash",
            ],
            correct: 1,
            explain: "The staff member explains the fee covers Biscuit's neutering, all his vaccinations, and a microchip.",
          },
          {
            q: "What is the first step in the adoption process?",
            options: [
              "A home visit",
              "Filling out an online application",
              "Paying the full fee upfront",
              "Bringing the dog home immediately",
            ],
            correct: 1,
            explain:
              "The staff member says the caller must fill out an online application first, after which a meet-and-greet is scheduled.",
          },
          {
            q: "When is a home visit required?",
            options: [
              "For every single adoption",
              "Only for apartment adoptions",
              "Only if the adopter has a yard, to confirm the fencing is secure",
              "Never, under any circumstances",
            ],
            correct: 2,
            explain:
              "The staff member explains a home visit isn't usually required for apartments, but photos of the fencing are requested if the adopter has a yard.",
          },
          {
            q: "How soon can the caller take the dog home after a successful meet-and-greet?",
            options: [
              "After a two-week waiting period",
              "The same day, once paperwork and the fee are completed",
              "Only after a home visit",
              "The following month",
            ],
            correct: 1,
            explain:
              "The staff member says the dog can usually go home the same day as the meet-and-greet if paperwork and the fee are completed.",
          },
          {
            q: "What post-adoption support is offered?",
            options: [
              "Nothing, support ends at adoption",
              "A free behaviorist consultation within the first month and discounted training classes for six months",
              "Free dog food for a year",
              "A refund if the dog is returned",
            ],
            correct: 1,
            explain:
              "The staff member mentions a free consultation with the shelter's behaviorist within the first month, plus discounted training classes for six months.",
          },
          {
            q: "When is the meet-and-greet scheduled for?",
            options: ["Tomorrow morning", "Thursday at three", "Next Monday", "This weekend"],
            correct: 1,
            explain: "The caller asks for Thursday afternoon, and the staff member confirms Thursday at three works.",
          },
        ],
      },
      {
        id: "t6_l4",
        partLabel: "Part 4",
        name: "Listening to a News Item",
        instructions:
          "You will hear a short news report. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 30,
        answerSeconds: 65,
        transcript: `In traffic news, the provincial transportation department announced that the Grant Street bridge will close completely for repairs starting Monday, cutting off a route used by an estimated fifteen thousand vehicles daily. The closure, expected to last approximately four months, is necessary to replace corroded support beams discovered during a routine inspection last spring. Drivers heading downtown will be directed to a detour route via Kingsway and Fifth Street, adding roughly ten minutes to the average commute during peak hours. The transportation department is also adding extra buses on the number twelve route during the closure to help handle increased demand from commuters avoiding the detour by car. Local businesses near the bridge have expressed worry about reduced customer traffic during construction, and the city has responded by waiving parking meter fees on nearby streets for the duration of the project to help offset the impact. Officials say they considered a partial closure that would keep one lane open, but engineers determined the repair work required full closure for safety reasons. The department will provide monthly updates on construction progress through its website.`,
        questions: [
          {
            q: "Why is the Grant Street bridge closing?",
            options: [
              "To widen it for more lanes",
              "To replace corroded support beams found during a routine inspection",
              "To repaint it",
              "Due to a recent accident",
            ],
            correct: 1,
            explain:
              "The report states the closure is necessary to replace corroded support beams discovered during a routine inspection last spring.",
          },
          {
            q: "About how long will the closure last?",
            options: ["Two weeks", "Approximately four months", "One year", "It has no set end date"],
            correct: 1,
            explain: "The report states the closure is expected to last approximately four months.",
          },
          {
            q: "What is the detour route for drivers heading downtown?",
            options: [
              "Via Kingsway and Fifth Street",
              "Via the waterfront highway",
              "There is no detour route",
              "Via a temporary floating bridge",
            ],
            correct: 0,
            explain: "The report says drivers will be directed to a detour route via Kingsway and Fifth Street.",
          },
          {
            q: "What is being added to help commuters during the closure?",
            options: [
              "New parking garages",
              "Extra buses on the number twelve route",
              "A temporary subway line",
              "Free rideshare vouchers",
            ],
            correct: 1,
            explain: "The report mentions extra buses are being added on the number twelve route to handle increased demand.",
          },
          {
            q: "How is the city helping local businesses near the bridge?",
            options: [
              "Offering them tax breaks",
              "Waiving parking meter fees on nearby streets during the project",
              "Providing free advertising",
              "Relocating them temporarily",
            ],
            correct: 1,
            explain: "The report explains the city is waiving parking meter fees on nearby streets to help offset the impact on local businesses.",
          },
        ],
      },
      {
        id: "t6_l5",
        partLabel: "Part 5",
        name: "Listening to a Discussion",
        instructions:
          "You will hear two coworkers discussing a workplace topic. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 50,
        answerSeconds: 100,
        transcript: `Naomi: Did you read the email about switching from annual performance reviews to quarterly check-ins?
Chris: I did. Honestly, I like the idea in theory, more frequent feedback sounds useful, but four meetings a year sounds like a lot of extra time.
Naomi: I thought that too at first, but the email said each check-in is only supposed to take twenty minutes, much shorter than our old hour-long annual review.
Chris: Oh, that changes things. Twenty minutes four times a year isn't much more total time than one long review.
Naomi: Exactly, and I think smaller, more frequent conversations might actually be less stressful than one big review where everything from the whole year gets judged at once.
Chris: That's a fair point. My main worry is whether pay raises and promotions will still be tied to just one of these check-ins, or spread across the year somehow.
Naomi: Good question, I'm not sure. The email didn't really explain how compensation decisions will work under the new system.
Chris: I think we should ask HR about that directly instead of guessing. It seems like an important detail they left out.
Naomi: Agreed, I'll send a question to HR today and see if others in the meeting have the same concern.
Chris: What did you think about the new self-assessment form they mentioned?
Naomi: I actually like it. It asks for specific examples and measurable outcomes, rather than the vague personality-style questions from the old form.
Chris: That does sound like an improvement, more objective and easier to write for, honestly.
Naomi: Same here. Overall, I think this could be a positive change if they clarify the compensation piece.
Chris: Agreed, let's see what HR says before forming a final opinion.`,
        questions: [
          {
            q: "What change is being proposed at work?",
            options: [
              "Eliminating performance reviews entirely",
              "Switching from annual performance reviews to quarterly check-ins",
              "Adding monthly reviews instead of yearly ones",
              "Outsourcing reviews to another company",
            ],
            correct: 1,
            explain: "Naomi mentions the email about switching from annual performance reviews to quarterly check-ins.",
          },
          {
            q: "What is Chris's initial concern about the change?",
            options: [
              "He thinks quarterly check-ins are unnecessary.",
              "Four meetings a year sounds like a lot of extra time.",
              "He dislikes feedback of any kind.",
              "He thinks HR will forget to schedule them.",
            ],
            correct: 1,
            explain: "Chris says four meetings a year sounds like a lot of extra time, even though he likes the idea in theory.",
          },
          {
            q: "What eases Chris's concern about the time commitment?",
            options: [
              "Learning the check-ins are optional",
              "Learning each check-in is only twenty minutes, much shorter than the old hour-long review",
              "Learning the check-ins were cancelled",
              "Learning only managers need to attend",
            ],
            correct: 1,
            explain:
              "Naomi points out each check-in is only supposed to take twenty minutes, which is much shorter than the previous hour-long annual review.",
          },
          {
            q: "Why does Naomi think the new system might be less stressful?",
            options: [
              "Because reviews will be done by a computer",
              "Because smaller, frequent conversations may be less stressful than one big year-end review",
              "Because no negative feedback will be given",
              "Because employees can skip the check-ins",
            ],
            correct: 1,
            explain:
              "Naomi suggests that smaller, more frequent conversations might be less stressful than one big review judging the whole year at once.",
          },
          {
            q: "What is Chris's main worry about the new system?",
            options: [
              "Whether pay raises and promotions will still be tied to just one check-in or spread across the year",
              "Whether the check-ins will be recorded",
              "Whether he will be assigned a new manager",
              "Whether the check-ins will replace his lunch break",
            ],
            correct: 0,
            explain: "Chris worries about whether pay raises and promotions will be tied to one check-in or spread across the year.",
          },
          {
            q: "What detail did the email fail to explain?",
            options: [
              "The date of the first check-in",
              "How compensation decisions will work under the new system",
              "Who will conduct the check-ins",
              "The length of each check-in",
            ],
            correct: 1,
            explain: "Naomi admits the email didn't explain how compensation decisions will work under the new quarterly system.",
          },
          {
            q: "What do Naomi and Chris decide to do about the compensation question?",
            options: [
              "Ignore it and hope for the best",
              "Ask HR about it directly instead of guessing",
              "Assume raises will stop entirely",
              "Wait until next year to ask",
            ],
            correct: 1,
            explain: "Chris suggests asking HR directly about the compensation question, and Naomi agrees to send a question that day.",
          },
          {
            q: "What do they think of the new self-assessment form?",
            options: [
              "They dislike it because it's too long.",
              "They like it because it asks for specific examples and measurable outcomes rather than vague questions.",
              "They think it should be removed entirely.",
              "They haven't seen it yet.",
            ],
            correct: 1,
            explain:
              "Naomi likes that the new form asks for specific examples and measurable outcomes instead of the old form's vague personality-style questions, and Chris agrees it sounds like an improvement.",
          },
        ],
      },
      {
        id: "t6_l6",
        partLabel: "Part 6",
        name: "Listening to Viewpoints",
        instructions:
          "You will hear three people give their opinions on a topic during a radio call-in segment. Listen carefully, then answer the questions about what you heard.",
        previewSeconds: 45,
        answerSeconds: 80,
        transcript: `Host: Today's topic: should cities prioritize public transit funding over building new roads? First, Ahmed.
Ahmed: I strongly favor prioritizing transit. Every dollar spent widening roads tends to fill up with more traffic within a few years, a pattern researchers call induced demand. Investing in buses and trains actually moves more people per dollar in the long run.
Host: Thanks, Ahmed. Next, Brenda.
Brenda: I disagree with deprioritizing roads. Many people, especially those living outside the city core, don't have reliable transit access and depend entirely on driving. Cutting road investment would unfairly burden those residents.
Host: Interesting. And Victor?
Victor: I think it doesn't have to be either-or. I'd support increasing transit funding while still maintaining, not necessarily expanding, existing roads. The real problem is when cities try to do both aggressively without enough total budget for either.
Host: Ahmed, how would you respond to Brenda's point about suburban residents depending on cars?
Ahmed: That's a fair concern, and I'd actually support extending transit routes further into those areas rather than assuming those residents are stuck relying only on roads forever.
Host: And Brenda, what about Victor's maintenance-only approach to roads?
Brenda: I could accept that as a reasonable compromise, as long as existing roads are kept in good repair so people who depend on them aren't stuck with worsening conditions.
Host: Thanks to all three of you for calling in today.`,
        questions: [
          {
            q: "What is Ahmed's main position?",
            options: [
              "Cities should stop funding transit entirely.",
              "Cities should prioritize transit funding because it moves more people per dollar and avoids induced demand.",
              "Roads should be widened as much as possible.",
              "Public transit should be free for everyone.",
            ],
            correct: 1,
            explain:
              "Ahmed argues that widening roads leads to induced demand and that transit investment moves more people per dollar in the long run.",
          },
          {
            q: "What is Brenda's main concern about deprioritizing roads?",
            options: [
              "She thinks transit is too expensive to build.",
              "People outside the city core depend entirely on driving and would be unfairly burdened.",
              "She believes roads are safer than transit.",
              "She dislikes public transportation personally.",
            ],
            correct: 1,
            explain:
              "Brenda argues that residents outside the city core without reliable transit access depend on driving, so cutting road investment would unfairly burden them.",
          },
          {
            q: "What is Victor's overall position?",
            options: [
              "Roads should be expanded aggressively.",
              "Increase transit funding while maintaining, but not necessarily expanding, existing roads",
              "Transit funding should be eliminated",
              "Cities should ban private car ownership",
            ],
            correct: 1,
            explain:
              "Victor proposes increasing transit funding while keeping existing roads maintained rather than expanded, avoiding an aggressive push on both fronts without enough budget.",
          },
          {
            q: "How does Ahmed respond to Brenda's concern about suburban residents?",
            options: [
              "He dismisses the concern entirely.",
              "He supports extending transit routes further into those areas.",
              "He says suburban residents should move downtown.",
              "He agrees roads should be expanded instead.",
            ],
            correct: 1,
            explain:
              "Ahmed says he'd support extending transit routes further into suburban areas rather than leaving those residents dependent only on roads.",
          },
          {
            q: "How does Brenda respond to Victor's maintenance-only approach?",
            options: [
              "She rejects it completely.",
              "She could accept it as a reasonable compromise if roads are kept in good repair.",
              "She says roads should be expanded instead.",
              "She has no opinion on it.",
            ],
            correct: 1,
            explain:
              "Brenda says she could accept Victor's maintenance-only approach as a compromise, as long as roads are kept in good repair.",
          },
          {
            q: "What can be concluded about the overall discussion?",
            options: [
              "All three callers agree on the same funding plan.",
              "The callers present three distinct positions: prioritize transit, protect road funding, and a balanced middle ground.",
              "The host declares roads more important.",
              "The city announces a final funding decision during the call.",
            ],
            correct: 1,
            explain:
              "Ahmed favors prioritizing transit, Brenda defends road funding for suburban residents, and Victor proposes a balanced middle-ground approach.",
          },
        ],
      },
    ],
  };

  window.__listeningTests = window.__listeningTests || [];
  window.__listeningTests.push(test);
})();
