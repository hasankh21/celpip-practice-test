// Speaking Practice Test 1 — original content modeled on the official CELPIP-General format.
// Speaking is free-response; the "answer key" is a sample response plus notes on what makes it strong.

(function () {
  const test = {
    testNumber: 1,
    tasks: [
      {
        id: "t1_s1",
        partLabel: "Task 1",
        name: "Giving Advice",
        prepSeconds: 30,
        responseSeconds: 90,
        prompt: `Your friend Jamie has been offered a promotion at work, but it would require relocating to a different city, away from family and friends. Jamie has asked for your advice on whether to accept the offer.

Give Jamie your advice, along with reasons to support it.`,
        sampleAnswer: `Hi Jamie, congratulations on the offer — that's a big achievement! I think before deciding, you should weigh a couple of things carefully. First, consider how much this promotion actually matters for your long-term career goals. If it's a role you've been working toward for years, that's a strong reason to take it, even with the move. On the other hand, think honestly about how important being physically close to family is to you day to day, not just in theory. Some people thrive being far away and visiting a few times a year; others really struggle with it. My honest advice would be to ask the company if there's a trial period or a way to work remotely part of the time for the first few months, so you're not making an irreversible decision right away. If that's not possible, I'd lean toward taking the promotion if the career growth is significant, since you can always plan regular visits home and family can visit you too. Either way, I think you should trust how you feel after picturing daily life in the new city, not just the excitement of the offer itself.`,
        whyItWorks:
          "The response directly gives clear, actionable advice (not just restating the problem), organizes points logically (career importance vs. family closeness), proposes a practical middle-ground option (a trial period), and closes with a concrete recommendation — matching CELPIP's expectation that Task 1 responses give genuine, well-reasoned advice within the time limit rather than a vague or one-sided answer.",
      },
      {
        id: "t1_s2",
        partLabel: "Task 2",
        name: "Talking about a Personal Experience",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Describe a time when you had to learn a new skill quickly, either for work, school, or personal reasons. Talk about what the skill was, why you needed to learn it quickly, and how you went about learning it.`,
        sampleAnswer: `A few years ago, I had to learn how to use spreadsheet software quickly when I started a new job in inventory management. I had almost no experience with formulas or data tables before that, but my manager expected me to build a tracking report within my first two weeks. I needed it quickly because the previous system was being retired and the team was relying on paper lists, which was causing errors. To learn fast, I watched a few short online tutorials each evening, then immediately practiced by rebuilding a small version of our actual inventory list at home. I also asked a coworker who was skilled with spreadsheets to review my early attempts and point out mistakes. Within about ten days, I had a working report that the whole team started using, and it actually became the template for other departments later on. Looking back, breaking the skill into small daily practice sessions, rather than trying to learn everything from a manual all at once, was what made the difference.`,
        whyItWorks:
          "The response is a real, specific narrative (not generic), following a clear structure: what the skill was, why speed mattered, and the concrete steps taken to learn it, ending with a reflective takeaway. Using past-tense storytelling with time markers ('within two weeks,' 'within about ten days') and specific details (spreadsheet software, a coworker's help) demonstrates the range of past-tense forms and coherence CELPIP raters look for in personal narrative tasks.",
      },
      {
        id: "t1_s3",
        partLabel: "Task 3",
        name: "Describing a Scene",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Imagine you are looking at a photograph of a busy farmers' market. There are vendors selling fresh vegetables, fruit, bread, and flowers under colorful tents. Shoppers are carrying reusable bags, some children are eating samples of fruit, and a musician is playing guitar near the entrance.

Describe this scene in as much detail as possible.`,
        sampleAnswer: `In this photograph, I can see a lively outdoor farmers' market taking place, probably on a weekend morning given how busy it is. Several colorful tents are set up in rows, each belonging to a different vendor. On the left, one stand is piled high with fresh vegetables like tomatoes, peppers, and leafy greens, all arranged neatly in wooden crates. Next to it, another vendor is selling fruit, and I can see a couple of children standing there eating small samples, probably slices of apple or melon that the vendor handed out to attract customers. Further along, there's a stall covered in fresh-baked bread and pastries, and beside that, a flower stand bursting with colorful bouquets. Shoppers are moving between the tents, many of them carrying reusable cloth bags already filled with produce, which suggests this is a regular weekend habit for them rather than a one-time visit. Near the entrance to the market, a musician is sitting on a stool playing guitar, probably providing some background atmosphere for shoppers as they arrive. Overall, the scene feels cheerful, active, and very community-oriented.`,
        whyItWorks:
          "The response systematically moves through the scene left to right, naming specific objects, people, and actions rather than giving a vague overview. It uses spatial language ('on the left,' 'next to it,' 'further along,' 'near the entrance') to organize the description clearly, includes plausible inferences (it's probably a weekend, shoppers seem to be regulars) that show higher-level language use, and maintains present-tense description throughout, which is the expected structure for this task type.",
      },
      {
        id: "t1_s4",
        partLabel: "Task 4",
        name: "Making Predictions",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Look at this scenario: A small local bakery has just been featured on a popular regional TV show for having the best cinnamon rolls in the area.

Predict what will happen to the bakery over the next few months as a result of this exposure.`,
        sampleAnswer: `I predict that in the days right after the show airs, the bakery will see a huge surge in customers, probably with lines forming outside before opening time, since people love to try something that's been publicly praised. Within the first couple of weeks, I think the owner will likely need to hire extra staff or extend operating hours just to keep up with demand for the cinnamon rolls specifically. It's also likely that other local media, like newspapers or food bloggers, will want to do their own follow-up stories once they see the buzz online. However, I suspect the initial surge might create some challenges too — the bakery could run out of ingredients faster than expected, or regular long-time customers might get frustrated with longer wait times and new crowds. Looking further ahead, over the next few months, I'd guess the bakery will either expand, perhaps adding seating or opening a second location, or it will settle into a stable, higher level of regular business once the initial excitement fades. Either way, I think this kind of exposure will most likely benefit the bakery long-term, even if the first few weeks are a little chaotic.`,
        whyItWorks:
          "The response uses a range of prediction and hedging language ('I predict,' 'likely,' 'I suspect,' 'I'd guess') rather than repeating the same phrase, and organizes predictions in a logical time sequence (immediately after, within weeks, over the following months). It also shows balanced thinking by predicting both a benefit and a realistic complication, which demonstrates more sophisticated reasoning than a one-sided answer.",
      },
      {
        id: "t1_s5",
        partLabel: "Task 5",
        name: "Comparing and Persuading",
        prepSeconds: 60,
        responseSeconds: 60,
        prompt: `You are choosing between two gym memberships for a friend's birthday gift:

Option A: A budget gym membership — $30/month, basic equipment, no classes, open 24 hours.
Option B: A boutique fitness studio membership — $85/month, small group classes with a personal trainer, limited hours (6 a.m.–9 p.m.), includes a nutrition consultation.

Choose one option and persuade a friend that it is the better gift.`,
        sampleAnswer: `I would choose Option B, the boutique fitness studio membership, as the better gift, even though it costs more. The main reason is that your friend mentioned wanting more guidance and motivation, not just access to equipment, and Option B directly addresses that with small group classes and a personal trainer included. A budget gym membership like Option A is fine for someone who already knows exactly what they're doing, but for someone just building a habit, having structured classes and expert guidance makes it far more likely they'll actually stick with it rather than losing motivation after a few weeks. The included nutrition consultation is also a meaningful bonus that Option A simply doesn't offer, and it adds real value beyond just the workouts themselves. Yes, the limited hours are a downside compared to the 24-hour access of Option A, but most people exercise during those included hours anyway. Considering that this is a gift meant to help your friend start a healthier routine and stay consistent, I think the extra cost of Option B is justified by the much higher chance that your friend will actually enjoy and continue using it.`,
        whyItWorks:
          "The response clearly picks one option and builds a persuasive case using comparison ('unlike Option A,' 'compared to') rather than simply listing features of both. It acknowledges the weaker point of its chosen option (limited hours) and directly counters it, which shows balanced persuasive reasoning rather than a one-sided sales pitch — a technique that raises the perceived credibility and coherence of the argument.",
      },
      {
        id: "t1_s6",
        partLabel: "Task 6",
        name: "Dealing with a Difficult Situation",
        prepSeconds: 60,
        responseSeconds: 60,
        prompt: `You booked a hotel room for a family vacation, confirmed for two queen beds. When you arrive after a long flight, the front desk tells you they only have a room with one king bed available, since the hotel made an overbooking error.

Explain the situation and how you would respond to the front desk clerk.`,
        sampleAnswer: `I would stay calm but firm, since getting upset won't fix the situation any faster. I'd start by explaining clearly, "I have a confirmed reservation for a room with two queen beds, booked and paid for in advance, and I'm traveling with my family, so a single king bed isn't going to work for us." I would then ask what options are available, since overbooking is the hotel's error, not mine. I'd specifically ask whether a comparable room is available at a partner hotel nearby, or whether they could offer a suite or two connecting rooms instead, at no extra cost, given the inconvenience after a long flight. If nothing suitable is available immediately, I would ask to speak with a manager, and request some form of compensation, like a discount on the stay or a complimentary breakfast, for the trouble. Throughout the conversation, I'd try to stay polite but make clear that since I held a confirmed booking, the resolution shouldn't cost my family any extra money or a lower standard of accommodation than what we originally reserved.`,
        whyItWorks:
          "The response models realistic direct speech ('I'd start by explaining clearly...'), which is a strong technique for this task type since it demonstrates functional language for a real confrontation. It stays assertive without being aggressive, offers specific alternative solutions rather than just complaining, and includes a fallback step (asking for a manager and compensation), showing the kind of problem-solving structure CELPIP raters expect for 'dealing with a difficult situation.'",
      },
      {
        id: "t1_s7",
        partLabel: "Task 7",
        name: "Expressing Opinions",
        prepSeconds: 30,
        responseSeconds: 90,
        prompt: `Some people believe that university education should be completely free for all students, funded by the government. Others believe students should pay tuition because it makes them value their education more and reduces the burden on taxpayers.

What is your opinion? Give reasons to support your view.`,
        sampleAnswer: `In my opinion, university education should be significantly more affordable than it currently is, though I don't think it needs to be entirely free for every student regardless of circumstance. My main reason is that completely free tuition for everyone, including those who could easily afford to pay, would place an enormous burden on taxpayers, some of whom never attend university themselves and may be less well-off than the students benefiting from the program. A more balanced approach, in my view, would be heavily subsidized or free tuition based on financial need, combined with manageable, income-based repayment plans for those who can afford to contribute something. I also think the argument that paying tuition makes students value their education more is only partly true — plenty of highly motivated students simply can't afford tuition at all, regardless of how much they'd value the opportunity, so using cost as a motivational tool unfairly excludes capable people rather than filtering for effort. Ultimately, I believe the goal should be ensuring that no capable student is blocked from higher education by cost, without necessarily making it free for people who don't need that support.`,
        whyItWorks:
          "The response avoids an oversimplified 'yes or no' answer and instead stakes out a nuanced, clearly explained middle position, which is treated as a sign of strong critical thinking when well-supported. It directly engages with both sides mentioned in the prompt (taxpayer burden and the 'valuing education' argument) rather than ignoring one, and closes with a clear guiding principle, giving the response a strong sense of coherence expected at higher CELPIP levels.",
      },
      {
        id: "t1_s8",
        partLabel: "Task 8",
        name: "Describing an Unusual Situation",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Imagine you are looking at a picture showing a city street where, unusually, a small herd of sheep is walking down the middle of the road, blocking traffic, while pedestrians and drivers watch in surprise. A farmer is visible trying to guide the sheep with a shepherd's crook.

Describe what is happening in this unusual picture.`,
        sampleAnswer: `This is a pretty surprising picture. In the middle of what looks like an ordinary city street, lined with shops and parked cars, there's a small herd of sheep walking right down the center of the road, which has completely stopped traffic. Several cars are stopped in a line, and I can see drivers leaning out of their windows, clearly confused by the situation. On the sidewalk, a few pedestrians have stopped walking and are taking out their phones, probably to take pictures or videos of something they don't see every day. Near the back of the herd, there's a farmer holding a shepherd's crook, who appears to be trying to guide the sheep toward one side of the street, maybe to get them off the road and back to a nearby field or farm. It's not clear from the picture how the sheep ended up in the city, but a likely explanation is that a gate was accidentally left open, or the farmer was moving them between fields and this route unexpectedly crossed through town. Either way, it's clearly an unusual disruption to a normal day for everyone else on that street.`,
        whyItWorks:
          "The response describes the visual details methodically (the herd, the traffic, the pedestrians' reactions, the farmer), then goes further by offering a plausible explanation for why the unusual event might be happening, which is exactly what this task type rewards — simply describing what's visible is good, but reasoning about the likely cause of the unusual situation demonstrates a higher level of spontaneous, connected speech.",
      },
    ],
  };

  window.__speakingTests = window.__speakingTests || [];
  window.__speakingTests.push(test);
})();
