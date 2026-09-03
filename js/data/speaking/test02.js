// Speaking Practice Test 2 — original content modeled on the official CELPIP-General format.
// Speaking is free-response; the "answer key" is a sample response plus notes on what makes it strong.

(function () {
  const test = {
    testNumber: 2,
    tasks: [
      {
        id: "t2_s1",
        partLabel: "Task 1",
        name: "Giving Advice",
        prepSeconds: 30,
        responseSeconds: 90,
        prompt: `Your coworker Priya needs a reliable car to commute to a new job outside the city. She's trying to decide whether to buy a used car outright or lease a new one, and she's asked for your advice.

Give Priya your advice, along with reasons to support it.`,
        sampleAnswer: `Hi Priya, that's an exciting step with the new job! I'd think about this in terms of how long you plan to keep the car and how much you drive. Leasing usually comes with lower monthly payments and you get a brand-new car with a warranty, which sounds appealing, but most leases have mileage limits, and if your new commute is long, you could easily go over that and end up paying extra fees at the end. Buying a used car outright costs more upfront, but once it's paid off, you own it completely, there's no mileage cap, and you can drive it as much as the job requires without worrying about penalties. Given that you mentioned the commute is fairly far, I'd lean toward buying a dependable used car rather than leasing. I'd also suggest getting it inspected by a trusted mechanic before you buy, so you're not stuck with hidden repair costs down the road. If budget is really tight right now, though, leasing could still make sense short-term while you save up, so it partly depends on how much you have available for a down payment today.`,
        whyItWorks:
          "The response gives Priya a direct recommendation rather than just listing pros and cons, and it ties the advice specifically to a detail in the prompt (the long commute affecting mileage limits), which shows the response is tailored rather than generic. It also acknowledges a reasonable exception (tight budget), demonstrating balanced reasoning, and ends with a practical, actionable tip (get it inspected), matching what CELPIP raters expect from a strong Task 1 response.",
      },
      {
        id: "t2_s2",
        partLabel: "Task 2",
        name: "Talking about a Personal Experience",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Describe a time when you had to overcome a fear. Talk about what the fear was, what caused you to face it, and how you dealt with it.`,
        sampleAnswer: `For most of my life, I had a strong fear of public speaking, to the point where I'd avoid meetings if I knew I might have to talk in front of a group. That changed a couple of years ago when I was asked to present a project update to about thirty people at work, and there was really no way to avoid it. In the two weeks leading up to it, I practiced the presentation out loud every single night, first alone in my room and then in front of my roommate, who gave me honest feedback on my pacing. I also focused on slowing my breathing right before I started speaking, since I noticed my voice would shake when I talked too fast. On the day itself, my hands were still a little sweaty, but once I got through the first minute, it actually got easier, and I finished the whole thing without losing my train of thought. Afterward, a couple of coworkers even said it was clear and well-organized, which gave me a real confidence boost. Since then, I've volunteered for two more presentations, and each one has felt more manageable than the last.`,
        whyItWorks:
          "The response tells a specific, chronological story with a clear beginning, middle, and resolution, using concrete details (practicing nightly, a roommate's feedback, sweaty hands) instead of vague generalities. The closing line about volunteering for later presentations shows lasting change, which adds depth and coherence, and the range of past-tense forms used throughout demonstrates the grammatical control CELPIP raters look for in personal narrative tasks.",
      },
      {
        id: "t2_s3",
        partLabel: "Task 3",
        name: "Describing a Scene",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Imagine you are looking at a photograph of a crowded beach on a hot summer day. Families have set up umbrellas and towels along the sand, children are building a sandcastle near the water, a vendor is pushing a cart selling ice cream, and a lifeguard is watching swimmers from a raised chair.

Describe this scene in as much detail as possible.`,
        sampleAnswer: `This photo shows a packed beach on what looks like a very hot summer afternoon. Along the sand, there are rows of colorful umbrellas and towels spread out, with families sitting close together to claim their little patch of space. Near the water's edge, a group of children is building a sandcastle, and one of them appears to be digging a small moat around it with a plastic shovel. A little further back, I can see a vendor pushing a cart, likely selling ice cream or cold drinks, since a few people nearby seem to be waving him over. Out toward the ocean, dozens of people are swimming and floating in the waves, while up on a raised wooden chair, a lifeguard sits watching the water closely, probably keeping an eye out for anyone swimming too far from shore. In the background, there seem to be a few small shops or rental stands, maybe renting out umbrellas or paddleboards. Everyone in the photo looks relaxed and happy, and the overall atmosphere feels like a classic, busy summer day that a lot of families look forward to all year.`,
        whyItWorks:
          "The description moves through the scene in an organized way, from the sand to the water's edge to the ocean and background, using spatial connectors ('near the water's edge,' 'a little further back,' 'out toward the ocean') to keep the listener oriented. It also layers in plausible inferences, such as the vendor being flagged down or the lifeguard watching for distant swimmers, which shows the kind of higher-level interpretive language that strengthens a Task 3 response beyond a simple list of objects.",
      },
      {
        id: "t2_s4",
        partLabel: "Task 4",
        name: "Making Predictions",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Look at this scenario: A new restaurant specializing in authentic regional cuisine has just opened in a quiet neighborhood that previously had very few dining options.

Predict what will happen in the neighborhood over the next few months as a result of this new restaurant.`,
        sampleAnswer: `I predict that in the first few weeks, the restaurant will likely attract a lot of curious local residents who are excited to finally have a proper dining option nearby, especially if word spreads through social media or local reviews. Within a month or so, I think foot traffic in that part of the neighborhood will noticeably increase, since people often combine a dinner out with a walk around the area beforehand or after. It's also probable that other small businesses close by, like a coffee shop or a convenience store, will benefit from this extra activity, even though the restaurant isn't directly connected to them. On the other hand, I suspect parking could become a real issue if the neighborhood wasn't designed with a lot of visitor spaces, which might cause some friction with residents who live right around the restaurant. Looking a few months ahead, if the food and service stay consistent, I'd guess the restaurant will become a regular neighborhood favorite, and it might even encourage other food businesses to open nearby, gradually turning that quiet street into a small local dining destination.`,
        whyItWorks:
          "The response sequences predictions clearly across time (the first few weeks, within a month, a few months ahead) and varies its hedging language ('I predict,' 'it's probable,' 'I suspect,' 'I'd guess') instead of repeating one phrase. It also balances a positive prediction with a realistic downside (parking issues), which shows the kind of nuanced, two-sided reasoning that raises a response above a simple, single-outcome guess.",
      },
      {
        id: "t2_s5",
        partLabel: "Task 5",
        name: "Comparing and Persuading",
        prepSeconds: 60,
        responseSeconds: 60,
        prompt: `You are helping a friend choose between two apartments to rent:

Apartment A: Smaller, older building, $1,050/month, close to downtown, no in-unit laundry, street parking only.
Apartment B: Larger, newer building, $1,400/month, 20 minutes from downtown by bus, in-unit laundry, includes one parking spot.

Choose one option and persuade your friend that it is the better choice.`,
        sampleAnswer: `I'd recommend Apartment B, even though it costs more each month, because the extras it includes actually save money and hassle in the long run. With Apartment A, you'd be doing laundry at a laundromat every week, which adds up in both time and cost, and you'd also be dealing with street parking, which can mean circling the block looking for a spot after a long day at work. Apartment B solves both of those problems directly, since in-unit laundry and a guaranteed parking spot are built right into the price. Yes, Apartment A is closer to downtown, which is a real advantage if you go out a lot, but a twenty-minute bus ride isn't unreasonable, especially if you can use that time to relax, read, or catch up on messages instead of driving. Considering that Apartment B is also newer and larger, which usually means better insulation, fewer maintenance issues, and more comfortable living space day to day, I think the extra $350 a month is a fair trade for the added convenience and peace of mind. Overall, for everyday quality of life, Apartment B seems like the smarter long-term choice.`,
        whyItWorks:
          "The response commits to one apartment and builds its case through direct comparisons ('unlike Apartment A,' 'Apartment B solves both of those problems') rather than just describing each option separately. It also fairly acknowledges Apartment A's advantage (downtown proximity) before explaining why it's outweighed, which is the kind of balanced persuasive structure that CELPIP raters associate with a stronger, more credible argument.",
      },
      {
        id: "t2_s6",
        partLabel: "Task 6",
        name: "Dealing with a Difficult Situation",
        prepSeconds: 60,
        responseSeconds: 60,
        prompt: `You ordered a specific dish at a restaurant, clearly stating you have a peanut allergy and need it made without peanuts. When the food arrives, you notice crushed peanuts sprinkled on top.

Explain the situation and how you would respond to the server.`,
        sampleAnswer: `I would stay calm but make sure the server understood right away that this wasn't a minor mix-up. I'd say something like, "Excuse me, when I ordered this, I specifically mentioned that I have a peanut allergy and asked for no peanuts, but there are crushed peanuts on top of this dish." I'd point directly at the plate so there's no confusion about what I'm referring to. Since this involves a real safety concern, not just a taste preference, I'd ask them to take the plate back immediately rather than assuming I could just pick the peanuts off, since even small traces can be risky with allergies. I'd also politely ask them to double-check with the kitchen about how the dish is prepared, in case other ingredients might have come into contact with peanuts as well. If a new dish couldn't be prepared safely and quickly, I'd ask about other menu items that are naturally peanut-free instead of waiting too long. Throughout the conversation, I'd keep my tone firm but respectful, since the goal is making sure the kitchen takes the allergy seriously, not just apologizing and moving on without actually fixing the problem.`,
        whyItWorks:
          "The response uses realistic direct speech to model exactly what the speaker would say, which demonstrates functional language for handling a real-world confrontation. It also shows sound judgment specific to the scenario, such as insisting on a fresh dish rather than simply removing the peanuts, and it offers a fallback solution (asking about other safe menu items), which reflects the practical problem-solving structure this task type rewards.",
      },
      {
        id: "t2_s7",
        partLabel: "Task 7",
        name: "Expressing Opinions",
        prepSeconds: 30,
        responseSeconds: 90,
        prompt: `Some people believe social media has a mostly negative effect on teenagers, contributing to anxiety and poor self-image. Others believe it helps teenagers stay connected with friends and express themselves creatively.

What is your opinion? Give reasons to support your view.`,
        sampleAnswer: `In my opinion, social media affects teenagers in a mostly negative way overall, even though it does offer some genuine benefits. My main concern is the constant comparison it encourages — teenagers are exposed to carefully edited images and highlight reels of other people's lives, and research has shown this is linked to lower self-esteem and higher rates of anxiety, especially among younger users who are still developing a stable sense of identity. I do think the connection and creativity argument has some truth to it; staying in touch with friends and sharing hobbies or artwork online can genuinely be positive, and I wouldn't dismiss that entirely. However, I think the design of these platforms, which are built to maximize time spent scrolling rather than genuine wellbeing, tends to outweigh those benefits for most teenagers. A useful middle ground, in my view, would be teaching digital literacy in schools so teens can recognize how these platforms are designed to affect them, combined with parents setting reasonable time limits rather than banning social media outright. Ultimately, I believe the negative effects are serious enough that they need active management, even while acknowledging that social media isn't purely harmful.`,
        whyItWorks:
          "The response takes a clear position while still fairly engaging with the opposing viewpoint mentioned in the prompt (connection and creativity), rather than dismissing it outright, which shows balanced critical thinking. It supports the opinion with a specific reason (social comparison and platform design) instead of a vague generalization, and it closes with a constructive suggestion, giving the response the coherence and depth expected at higher CELPIP levels.",
      },
      {
        id: "t2_s8",
        partLabel: "Task 8",
        name: "Describing an Unusual Situation",
        prepSeconds: 30,
        responseSeconds: 60,
        prompt: `Imagine you are looking at a picture showing the inside of a grocery store where, unexpectedly, a small goat is wandering freely between the aisles, sniffing at produce displays while shoppers stop and stare, some laughing and taking photos, and a store employee is trying to calmly guide it toward the exit.

Describe what is happening in this unusual picture.`,
        sampleAnswer: `This picture shows something you definitely wouldn't expect to see in an ordinary grocery store. Right in the middle of the produce section, there's a small goat wandering freely between the aisles, sniffing curiously at a display of lettuce and carrots as if it's trying to pick out its own lunch. A few shoppers nearby have completely stopped what they were doing, and I can see some of them laughing while others are holding up their phones, clearly trying to capture a picture or video of something they'll probably tell their friends about later. Near the back of the frame, a store employee, wearing what looks like a store apron, is approaching the goat slowly with both hands out, seemingly trying to guide it calmly toward the exit doors without startling it or knocking over any of the displays. The rest of the store looks completely normal otherwise, with fully stocked shelves and regular shopping carts in the aisles, which makes the goat's presence even more out of place. It's hard to know exactly how the goat got in, but it's possible it wandered in through an open loading door, or maybe escaped from a nearby delivery truck or a petting farm event happening close by.`,
        whyItWorks:
          "The response works through the image methodically, covering the goat's behavior, the shoppers' reactions, and the employee's response, before offering a reasonable explanation for how the goat might have ended up there. Proposing a plausible cause rather than stopping at simple description demonstrates the spontaneous, connected reasoning that this task type is specifically designed to assess.",
      },
    ],
  };

  window.__speakingTests = window.__speakingTests || [];
  window.__speakingTests.push(test);
})();
