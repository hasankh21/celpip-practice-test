// Speaking Practice Test 3 — original content modeled on the official CELPIP-General format.
// Speaking is free-response; the "answer key" is a sample response plus notes on what makes it strong.

(function () {
  const test = {
    testNumber: 3,
    tasks: [
      {
        id: "t3_s1",
        partLabel: "Task 1",
        name: "Giving Advice",
        prepSeconds: 30,
        responseSeconds: 90,
        prompt: `Your neighbor Sam has spent eight years working as an accountant but feels unfulfilled and is considering switching careers to become a high school teacher, which would mean a pay cut and going back to school part-time. Sam has asked for your advice.

Give Sam your advice, along with reasons to support it.`,
        sampleAnswer: `Hi Sam, I really respect that you're thinking seriously about this instead of just staying comfortable. Before making the leap, I'd suggest looking closely at two things: how strong the pull toward teaching really is, and how manageable the pay cut would actually be given your current expenses. If you've felt unfulfilled for years and teaching genuinely excites you, that's a meaningful sign, since a career you're passionate about tends to be worth far more long-term than one that just pays well but drains you. At the same time, going back to school part-time while working is demanding, so I'd recommend talking to a few current teachers first to get an honest sense of the day-to-day reality, not just the idea of it. One practical step would be volunteering or tutoring on weekends for a few months before committing fully, just to confirm the classroom environment suits you. If after that you still feel strongly pulled toward teaching, I'd say go for it, but build a financial cushion first so the transition period doesn't add unnecessary stress. Ultimately, though, only you can weigh how much the fulfillment is worth compared to the financial trade-off.`,
        whyItWorks:
          "The response gives concrete, actionable advice tailored to the specific details in the prompt (the pay cut, part-time schooling) rather than generic encouragement, and it suggests a low-risk way to test the decision (volunteering or tutoring first) before fully committing. Ending by acknowledging that the final call depends on Sam's own priorities shows balanced, realistic reasoning rather than an overly simplistic yes-or-no answer, which is what strong Task 1 responses aim for.",
      },
      {
        id: "t3_s2",
        partLabel: "Task 2",
        name: "Talking about a Personal Experience",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Describe a time when you had a disagreement or conflict with someone close to you and had to work to resolve it. Talk about what caused the conflict and how you resolved it.`,
        sampleAnswer: `A couple of years ago, I had a serious disagreement with my roommate over shared household responsibilities. I felt like I was doing most of the cleaning while she focused only on her own space, and it built up until I finally snapped one evening after coming home to a messy kitchen. At first, the conversation got a little tense, since she felt I was accusing her unfairly, and I realized I had let my frustration build up silently for weeks instead of raising it earlier. To resolve it, I suggested we sit down calmly the next day and each explain our side without interrupting. It turned out she genuinely hadn't noticed the imbalance, partly because her work schedule had changed and she was coming home much later than before. We ended up creating a simple shared chore schedule posted on the fridge, splitting tasks more fairly based on our actual free time. Looking back, the real lesson for me was that I should have brought up the issue calmly much earlier, rather than letting resentment build until it turned into a bigger confrontation than it needed to be.`,
        whyItWorks:
          "The response tells a specific, believable story with a clear cause, a turning point, and a concrete resolution (the shared chore schedule), rather than a vague summary of 'we talked it out.' It also includes an honest personal reflection at the end, acknowledging the speaker's own role in letting the issue build up, which adds depth and shows the kind of thoughtful self-awareness that strengthens a personal narrative response.",
      },
      {
        id: "t3_s3",
        partLabel: "Task 3",
        name: "Describing a Scene",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Imagine you are looking at a photograph of a busy construction site. Workers in hard hats are operating heavy machinery, a crane is lifting steel beams to an upper floor, a supervisor is reviewing blueprints at a folding table, and a safety sign warns visitors to wear protective equipment.

Describe this scene in as much detail as possible.`,
        sampleAnswer: `This photograph shows a large, active construction site, likely for a mid-rise building given how much steel framework is already up. In the foreground, several workers wearing hard hats and reflective vests are operating heavy machinery, including what looks like an excavator moving loose dirt near the base of the site. Toward the center of the photo, a tall crane is lifting a long steel beam up toward one of the upper floors, where a couple of workers appear to be waiting to guide it into place. Off to one side, there's a supervisor standing at a folding table covered in rolled-out blueprints, and he seems to be pointing something out to another worker, possibly discussing measurements or the next phase of the build. Near the entrance to the site, there's a large yellow sign warning visitors that hard hats and protective equipment are required beyond that point, which suggests the site takes safety fairly seriously. In the background, there are stacks of building materials, like bags of concrete and bundles of piping, waiting to be used. Overall, the scene feels highly organized despite looking chaotic at first glance, with everyone appearing focused on a specific task.`,
        whyItWorks:
          "The response moves through the scene in a structured way, from the foreground machinery to the crane, then to the supervisor and the safety sign, using clear spatial language to keep the description organized. It names specific, plausible details (an excavator, rolled-out blueprints, bags of concrete) rather than vague generalities, and the closing observation about the scene feeling organized despite its apparent chaos shows an interpretive layer that goes beyond simple listing, which strengthens a Task 3 response.",
      },
      {
        id: "t3_s4",
        partLabel: "Task 4",
        name: "Making Predictions",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Look at this scenario: A mid-sized manufacturing company has just announced it will be laying off 15% of its workforce next month due to declining sales.

Predict what will happen to the company and its employees over the next few months.`,
        sampleAnswer: `I predict that in the immediate aftermath of the announcement, morale among the remaining employees will likely drop, since people left behind often worry they could be next, even if they weren't part of this round of layoffs. Within the first few weeks, I think a number of skilled employees might start quietly job-hunting on their own, out of concern for job security, which could actually create new gaps the company didn't intend to lose. For those who were laid off, it's likely that some will find new positions relatively quickly if their skills are transferable, while others, especially those in more specialized roles, may take longer and could need to consider retraining. Looking at the company itself over the next few months, I'd guess management will focus heavily on communicating a recovery plan to reassure remaining staff and possibly investors, since public confidence tends to suffer after layoffs are announced. There's also a reasonable chance the company will restructure certain departments rather than simply operating the same way with fewer people. Overall, I think the next few months will be a period of real uncertainty, though how smoothly the company recovers will depend a lot on how transparently leadership communicates throughout the process.`,
        whyItWorks:
          "The response predicts effects on multiple groups affected by the scenario — remaining employees, laid-off workers, and company leadership — rather than focusing on just one outcome, which shows more complete reasoning. It uses varied hedging language ('I predict,' 'it's likely,' 'I'd guess,' 'there's a reasonable chance') and organizes predictions across a believable timeline, both of which are qualities CELPIP raters associate with a strong Task 4 response.",
      },
      {
        id: "t3_s5",
        partLabel: "Task 5",
        name: "Comparing and Persuading",
        prepSeconds: 60,
        responseSeconds: 60,
        prompt: `You are helping a friend decide between two job offers:

Job A: Marketing coordinator at a large, established company — $58,000/year, standard 9-to-5 schedule, limited growth opportunities, strong benefits.
Job B: Marketing coordinator at a small startup — $52,000/year, flexible hours, potential to grow into a senior role within two years, less job security.

Choose one option and persuade your friend that it is the better choice.`,
        sampleAnswer: `I'd encourage you to take Job B, the startup role, even though it pays a bit less to start. The biggest factor for me is the growth potential — moving into a senior role within two years is a huge opportunity early in a career, and that kind of fast advancement is much harder to find at a large, established company like the one offering Job A, where promotions often take much longer simply because of how the structure works. The flexible hours at the startup are also a real advantage if you value being able to manage your own schedule, rather than being locked into a strict nine-to-five. I understand Job A offers stronger benefits and more job security, and those matter, especially if financial stability is a top priority for you right now. But since you mentioned wanting to grow quickly and build real responsibility early on, I think the short-term trade-off in pay and security is worth it for the long-term payoff. If the startup doesn't work out, the experience and faster growth you gain there would likely make you a stronger candidate for future roles anyway, so it doesn't feel like a purely risky choice.`,
        whyItWorks:
          "The response builds a clear, one-sided recommendation while directly comparing specific features of both jobs (growth speed, flexibility, security) rather than just restating the offer details. It acknowledges Job A's genuine strengths before explaining why they're outweighed for this particular friend's stated priorities, which is the kind of balanced, personalized persuasion that makes a Task 5 response convincing rather than a generic pitch.",
      },
      {
        id: "t3_s6",
        partLabel: "Task 6",
        name: "Dealing with a Difficult Situation",
        prepSeconds: 60,
        responseSeconds: 60,
        prompt: `You are at the airport, and your flight has just been delayed by six hours due to a mechanical issue, causing you to miss an important connecting flight and a business meeting the next morning.

Explain the situation and how you would respond to the airline representative at the gate.`,
        sampleAnswer: `I would approach the situation calmly but make it clear how serious the impact is for me. I'd say something like, "I understand mechanical issues happen, but this six-hour delay means I'm going to miss my connecting flight, and I have an important business meeting tomorrow morning that I can't afford to miss." I'd then ask directly what the airline can do to help, starting with whether they can rebook me on an earlier alternative flight, even with a different airline if necessary, to make sure I can still reach my destination in time. If no earlier option exists, I'd ask about compensation for the inconvenience, such as a hotel voucher for the overnight wait, meal vouchers, or a refund for part of the ticket, since a delay of this length is significant. I'd also request written confirmation of any new flight details and compensation offered, just so there's no confusion later. Throughout the conversation, I'd stay polite and avoid raising my voice, since gate staff usually aren't the ones responsible for the mechanical issue, but I would remain firm and clear that this delay has real consequences for me and that I expect the airline to make reasonable efforts to fix it.`,
        whyItWorks:
          "The response models realistic, direct speech that clearly explains both the problem and its real-world consequence (missing the business meeting), which strengthens the case for why the airline should act. It requests specific, reasonable solutions rather than just complaining, and it distinguishes between staying firm and staying respectful toward the staff, showing the kind of composed, functional problem-solving language this task type is designed to assess.",
      },
      {
        id: "t3_s7",
        partLabel: "Task 7",
        name: "Expressing Opinions",
        prepSeconds: 30,
        responseSeconds: 90,
        prompt: `Some people believe remote work is better for employees because it offers flexibility and eliminates commuting. Others believe working in an office is better because it improves collaboration and helps maintain a clear separation between work and home life.

What is your opinion? Give reasons to support your view.`,
        sampleAnswer: `In my opinion, remote work is generally better for most employees, though I do think it works best when combined with occasional in-person time rather than being fully isolated. My main reason is the flexibility it offers — being able to manage your own schedule and eliminate a daily commute gives people back meaningful time and energy that they can put toward family, health, or personal interests, which often makes them more focused during actual work hours rather than less. I do think the collaboration argument has real merit; certain creative or complex problem-solving tasks genuinely benefit from being in the same room, and I've noticed that some ideas develop faster through spontaneous in-person conversation than through scheduled video calls. However, I don't think this outweighs remote work's benefits for the majority of day-to-day tasks, which don't actually require that kind of constant collaboration. As for the separation between work and home life, I'd argue that's more about individual discipline and clear boundaries than about location itself. Overall, I believe a hybrid approach captures the best of both, but if I had to choose one default, I'd lean toward remote work being the better option for most people's overall wellbeing and productivity.`,
        whyItWorks:
          "The response commits to a clear position while genuinely engaging with the opposing argument about collaboration rather than dismissing it, which demonstrates balanced critical thinking. It supports the main opinion with a specific, well-reasoned point (time and energy reallocation) instead of a vague claim, and the closing distinction between a personal preference and a broader hybrid recommendation adds the kind of nuance associated with higher-level CELPIP responses.",
      },
      {
        id: "t3_s8",
        partLabel: "Task 8",
        name: "Describing an Unusual Situation",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Imagine you are looking at a picture showing a shopping mall where, unexpectedly, a large group of dancers has formed a flash mob in the middle of the food court, performing a coordinated routine while shoppers stop to watch, record videos, and some even join in near the edges.

Describe what is happening in this unusual picture.`,
        sampleAnswer: `This picture captures a lively and completely unexpected scene in what looks like an ordinary shopping mall food court. Right in the open central area, a large group of dancers, all dressed in matching colorful outfits, appears to be performing a coordinated flash mob routine, with their arms raised in sync and big smiles on their faces. Around the edges of the performance, dozens of shoppers have stopped whatever they were doing, and many of them are holding up their phones, clearly recording the moment to share later. A few people near the front seem to be clapping along to the rhythm, and I can even spot a couple of kids who have stepped slightly into the open space, trying to copy some of the dance moves themselves. The food court tables and chairs are still fully occupied in the background, with some people leaning around their trays to get a better view without leaving their seats. It's not entirely clear from the picture what the flash mob is for, but given the coordinated outfits, it's quite possible this is a planned promotional event for a store opening nearby, or maybe a local dance group using the busy mall as a stage to gain some public attention.`,
        whyItWorks:
          "The response systematically covers the performers, the crowd's reactions, and the background details before offering a reasonable explanation for the event, which mirrors how a fluent speaker would naturally process and describe something surprising. Suggesting a plausible cause, such as a promotional event or a dance group seeking exposure, rather than stopping at pure description, demonstrates the spontaneous reasoning this task type is built to reward.",
      },
    ],
  };

  window.__speakingTests = window.__speakingTests || [];
  window.__speakingTests.push(test);
})();
