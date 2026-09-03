// Speaking Practice Test 8 — original content modeled on the official CELPIP-General format.
// Speaking is free-response; the "answer key" is a sample response plus notes on what makes it strong.

(function () {
  const test = {
    testNumber: 8,
    tasks: [
      {
        id: "t8_s1",
        partLabel: "Task 1",
        name: "Giving Advice",
        prepSeconds: 30,
        responseSeconds: 90,
        prompt: `Your friend Priya is considering going back to school part-time to finish a degree she left unfinished years ago, while continuing to work full-time. She has asked for your advice on whether this is a good idea.

Give Priya your advice, along with reasons to support it.`,
        sampleAnswer: `Hi Priya, I think it's great that you're even considering this, and my honest advice is that you should go for it, but with some careful planning first. Finishing a degree you started can open up real opportunities later, both for promotions and for your own sense of accomplishment, and part-time study means you won't have to give up your income while you do it. That said, I'd encourage you to be realistic about the time commitment before you enroll. I'd suggest starting by mapping out exactly how many hours per week the coursework will require, and comparing that honestly against your current work schedule and personal life, so you're not blindsided a few weeks in. It might also be worth talking to your manager first to see if there's any flexibility, like adjusting your hours slightly during exam periods, since many employers are supportive of employees furthering their education. I'd also recommend starting with just one course in your first term rather than a full course load, just to test how manageable it feels before committing further. If after a term or two it's going well, you can always add more. Overall, I think the long-term benefit is well worth it, as long as you ease into it instead of overcommitting right away.`,
        whyItWorks:
          "The advice is decisive rather than noncommittal, but it's immediately paired with a practical, staged plan (map out hours, talk to a manager, start with one course) rather than blind encouragement. This structure — a clear recommendation followed by concrete, sequenced steps to manage the risk — reflects the kind of well-reasoned, actionable response CELPIP raters expect for Task 1.",
      },
      {
        id: "t8_s2",
        partLabel: "Task 2",
        name: "Talking about a Personal Experience",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Describe a time when you volunteered for a cause or event that was important to you. Talk about what the volunteer work involved, why you chose to get involved, and what you gained from the experience.`,
        sampleAnswer: `A couple of years ago, I volunteered at a local shelter that prepared and served hot meals to people in need in my community. I got involved after a coworker mentioned they were short-staffed around the holidays, and it struck me that I had a free Saturday I could easily give up to help out. My role mostly involved chopping vegetables, plating meals, and later serving food directly to the people who came in, which was actually the part that affected me the most. I remember talking with a man who'd been coming to the shelter for months, and hearing a bit of his story completely changed how I thought about homelessness in general — it made it feel much less abstract and far more personal. I ended up going back almost every month after that first Saturday, and eventually started helping organize the volunteer schedule for other people too. Looking back, what I gained wasn't just a sense of doing something good, but a genuine shift in perspective about how quickly anyone's circumstances can change, and how much a small amount of consistent help can mean to someone.`,
        whyItWorks:
          "The story includes a specific, memorable moment — the conversation with a regular visitor — rather than staying at a generic level, which makes the narrative feel authentic and personal. It also shows progression over time (from a one-time favor to an ongoing commitment and eventually a leadership role), and closes with genuine reflection, which together demonstrate the range of past-tense narration and coherence CELPIP raters reward in personal experience tasks.",
      },
      {
        id: "t8_s3",
        partLabel: "Task 3",
        name: "Describing a Scene",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Imagine you are looking at a photograph of a hospital emergency waiting room. Rows of chairs are filled with patients and family members, a receptionist is speaking with someone at the front desk, a child is coloring in a corner, and a television mounted on the wall is playing the news.

Describe this scene in as much detail as possible.`,
        sampleAnswer: `In this photograph, I can see a hospital emergency waiting room that looks fairly full, with rows of chairs occupied by a mix of patients and what appear to be their family members. Some people look visibly tired or worried, sitting quietly with their arms crossed or staring at their phones, which is pretty typical for a place like this where waiting can be stressful. Near the front of the room, there's a reception desk where a staff member in scrubs is speaking with someone, possibly checking them in or updating them on wait times, while a small line seems to be forming behind that person. Over in one corner, away from the busier area, there's a young child sitting on the floor with a coloring book and crayons, probably trying to stay occupied while a parent waits nearby, which adds a small, human touch to an otherwise tense atmosphere. On the wall above the seating area, a television is mounted and playing what looks like a news broadcast, though most people don't seem to be paying much attention to it. Overall, the scene captures that particular mix of anxiety, boredom, and patience that's so familiar to anyone who has spent time in an emergency room.`,
        whyItWorks:
          "The description moves logically through the room — the seating area, the front desk, the child in the corner, and the television — using spatial markers ('near the front,' 'over in one corner,' 'on the wall above') to keep the scene organized. Adding emotional interpretation (the tiredness, the tension, the small comfort of the child coloring) rather than a flat inventory of objects shows the higher-level descriptive language CELPIP raters look for.",
      },
      {
        id: "t8_s4",
        partLabel: "Task 4",
        name: "Making Predictions",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Look at this scenario: A local amateur hockey team, which has never made the playoffs in its 15-year history, has just clinched a playoff spot for the first time this season.

Predict what will happen in the town and for the team over the next few weeks.`,
        sampleAnswer: `I predict that in the days right after clinching a spot, the town is going to feel a real surge of excitement, with local news covering the story and probably a noticeable jump in ticket sales and merchandise purchases for the remaining games. I think local businesses, like restaurants and sports bars near the arena, will likely see more customers too, since people will want to watch the playoff games together in a lively atmosphere. As the playoffs actually get underway, I'd guess the pressure on the players will increase quite a bit, since this is unfamiliar territory for a team that's never been here before, so their performance could honestly go either way — some players might rise to the occasion, while others might struggle with the added nerves. Regardless of how far the team actually goes in the playoffs, I suspect this season will become a turning point for the club, probably attracting more sponsorship interest and a boost in youth signups for the following season, since a winning atmosphere tends to inspire more community involvement. So even if they're eliminated in the first round, I think the long-term impact on team morale and local support will still be largely positive.`,
        whyItWorks:
          "Predictions are organized across a clear timeline — immediately after the news, during the playoffs, and looking beyond the season — which gives the response a logical structure. The use of varied hedging language ('I predict,' 'I'd guess,' 'I suspect') and the balanced acknowledgment that performance 'could go either way' shows nuanced, non-formulaic reasoning rather than a single-note prediction.",
      },
      {
        id: "t8_s5",
        partLabel: "Task 5",
        name: "Comparing and Persuading",
        prepSeconds: 60,
        responseSeconds: 60,
        prompt: `You are helping a friend's child choose a laptop for university:

Option A: A lightweight budget laptop — $500, 8 hours battery life, basic processor, good for typing and browsing.
Option B: A higher-end laptop — $1,200, powerful processor, longer battery life, capable of running design and video-editing software.

Choose one option and persuade your friend that it is the better choice.`,
        sampleAnswer: `I'd suggest going with Option A, the lightweight budget laptop, unless your child is specifically planning to study something like film, graphic design, or another program that genuinely requires heavy-duty software. For the vast majority of university coursework, students mainly need something reliable for typing essays, doing research online, and joining video calls for classes, and Option A handles all of that perfectly well at less than half the price. The money saved, over $700, could instead go toward textbooks, housing costs, or even just a financial cushion for unexpected expenses, which tend to come up constantly during the first year of university. Yes, Option B has a more powerful processor and could handle demanding creative software, but unless that capability is actually going to be used regularly for a specific program of study, you'd essentially be paying a premium for power that sits unused most of the time. The lighter weight of Option A is also a practical advantage for a student who'll be carrying it around campus all day between classes. Unless there's a clear academic reason to need that extra processing power, I think Option A is the more sensible and cost-effective choice for a typical university student.`,
        whyItWorks:
          "The response builds its persuasive case around a specific condition — what the student is actually studying — rather than treating one laptop as universally better, which shows practical, situation-aware reasoning. It acknowledges Option B's real advantage (processing power) and directly explains why that strength doesn't apply to most students' needs, a technique that strengthens credibility exactly as CELPIP raters expect in a strong Task 5 response.",
      },
      {
        id: "t8_s6",
        partLabel: "Task 6",
        name: "Dealing with a Difficult Situation",
        prepSeconds: 60,
        responseSeconds: 60,
        prompt: `You booked a cabin for a weekend getaway with friends through a rental website and paid in full in advance. A day before your trip, the owner emails to say the cabin is no longer available due to a "scheduling error."

Explain the situation and how you would respond to the property owner.`,
        sampleAnswer: `I would respond calmly but firmly, since getting angry in an email won't get my trip back on track any faster. I'd start by writing something like, "I received your message about the cabin no longer being available, and I want to understand what options are being offered, since I have a confirmed, fully paid booking for tomorrow and four people counting on this trip." I would ask directly whether they can find us a comparable property nearby for the same dates, at no additional cost, given that the cancellation was entirely on their end and happened with almost no notice. If that's not possible, I would request a full refund immediately, in writing, along with some form of compensation for the inconvenience, since we'll likely need to scramble to find alternative accommodations on very short notice. I would also mention that I plan to leave an honest review describing exactly what happened, not as a threat, but because other travelers deserve to know how last-minute cancellations are handled. Throughout the message, I'd keep my tone professional rather than hostile, but I would make it clear that a same-day scheduling error on their part shouldn't end up costing my friends and me either money or a ruined weekend.`,
        whyItWorks:
          "The response models realistic written communication for a real conflict, staying assertive without becoming aggressive, which is exactly the register CELPIP raters expect for 'dealing with a difficult situation.' It offers a specific primary request (a comparable rental) along with a clear fallback (refund plus compensation), and the mention of an honest review as leverage — rather than a threat — shows a level of tactical, realistic problem-solving that elevates the response.",
      },
      {
        id: "t8_s7",
        partLabel: "Task 7",
        name: "Expressing Opinions",
        prepSeconds: 30,
        responseSeconds: 90,
        prompt: `Some people believe city governments should invest more heavily in public transit, such as buses and trains, to reduce traffic and pollution. Others believe the priority should remain on expanding and repairing roads, since most people still rely on cars.

What is your opinion? Give reasons to support your view.`,
        sampleAnswer: `In my opinion, cities should prioritize investing in public transit over continuing to expand roads, even though I understand why the road-focused argument feels intuitive in the short term. My main reason is that widening roads tends to only provide temporary relief from traffic, since more lanes generally attract more drivers over time, and the congestion problem often returns within a few years, just at a larger scale. Investing in reliable, frequent public transit, on the other hand, actually gives people a genuine alternative to driving, which can meaningfully reduce the number of cars on the road long-term rather than just accommodating more of them. I do think the concern about most people currently relying on cars is valid, especially in cities where transit coverage is currently poor or unreliable, so I wouldn't suggest cutting road maintenance funding entirely, since existing roads still need to stay safe and usable. But when it comes to new, large-scale infrastructure spending specifically, I believe transit investment produces better long-term returns, both for reducing pollution and for giving lower-income residents who can't afford a car reliable access to jobs and services. Ultimately, I think a city that's only built around car dependency ends up expanding roads forever without ever really solving the underlying congestion problem.`,
        whyItWorks:
          "The response takes a clear stance while carefully acknowledging the counterargument's validity (that many people currently depend on cars), rather than dismissing it outright, which shows balanced critical thinking. It supports its position with a specific mechanism — induced demand from road widening — rather than a vague preference, giving the argument the depth and coherence expected at higher CELPIP levels.",
      },
      {
        id: "t8_s8",
        partLabel: "Task 8",
        name: "Describing an Unusual Situation",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Imagine you are looking at a picture showing a downtown street where a group of people in elaborate costumes — superheroes, dinosaurs, and pirates — are handing out flyers and balloons in front of a store, while pedestrians stop to take photos and a small crowd gathers.

Describe what is happening in this unusual picture.`,
        sampleAnswer: `This is a pretty eye-catching scene. On what looks like an ordinary downtown street, lined with shops and storefronts, there's a group of people dressed in elaborate, full costumes — I can make out what appears to be a couple of superheroes, someone in an inflatable dinosaur costume, and another person dressed as a pirate, complete with a hat and what looks like a plastic sword. They seem to be positioned right in front of a store entrance, handing out flyers and balloons to passersby, which suggests this is some kind of promotional event or grand opening rather than a random costume gathering. A small crowd has started to form around them, with several pedestrians stopping mid-walk to take photos on their phones, clearly amused by the unexpected combination of characters. A couple of children in the crowd look especially excited, reaching out for the balloons being handed out. It's not entirely clear what the store is advertising, but given the costumed characters and the flyers, it's likely a new business trying to draw attention and foot traffic on its opening day, or possibly a sale event designed to stand out from typical marketing. Either way, the colorful display has clearly succeeded in turning a normal walk downtown into something people want to stop and capture.`,
        whyItWorks:
          "The response catalogs the unusual visual details specifically (the types of costumes, the flyers, the balloons) rather than describing the scene vaguely, and then reasons toward a plausible explanation — a promotional event — which is what this task type rewards beyond simple description. Noting the crowd's reaction, including the children's excitement, adds a layer of interpretation that demonstrates spontaneous, connected speech rather than a rehearsed list of observations.",
      },
    ],
  };

  window.__speakingTests = window.__speakingTests || [];
  window.__speakingTests.push(test);
})();
