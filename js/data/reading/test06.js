// Reading Practice Test 6 — original content modeled on the official CELPIP-General format
// (Part 1: 11 blanks, Part 2: 8 questions, Part 3: 9 questions, Part 4: 10 questions — 38 total).
// Part 1 blanks are rendered as inline drop-downs directly inside the reply text (true cloze format),
// using the ___(n)___ markers below.

(function () {
  const test = {
    testNumber: 6,
    parts: [
      {
        id: "t6_r1",
        partLabel: "Part 1",
        name: "Reading Correspondence",
        instructions:
          "Read the email below, then read the reply. Some words in the reply are missing. Choose the best option to fill each numbered blank — the blanks appear directly in the reply text, just like on the real test.",
        suggestedMinutes: 16,
        passageTitle: "Original Email",
        passage: `From: Gwendolyn Marsh, Homeowners Association Board
To: All Residents, Cedarbrook Estates
Subject: Notice — New Fence Height Regulations

Dear Residents,

At last month's board meeting, the association voted to update our community bylaws regarding backyard fence height. Effective January 1st, all newly installed or replaced fences must not exceed 1.8 metres in height, down from the previous limit of 2.1 metres. Existing fences that already exceed 1.8 metres will not need to be replaced, but any future repairs affecting more than fifty percent of a fence's length will require the fence to be brought into compliance with the new limit.

This change was made following several complaints about fences blocking sightlines at street corners and reducing natural light in neighboring yards. Homeowners planning any fence work should submit a request form to the board at least two weeks before starting construction.

If you have questions about how this affects your property, please don't hesitate to reach out.

Sincerely,
Gwendolyn Marsh
Homeowners Association Board
Cedarbrook Estates`,
        replyTitle: "Reply (fill in each numbered blank)",
        replyTemplate: [
          "Dear Ms. Marsh,",
          "Thank you for the ___(1)___ regarding the updated fence regulations. I have a few questions before planning any work on my property.",
          "First, my back fence is currently 2.1 metres and in good condition. Since it won't need to be ___(2)___ under the grandfather clause, can I confirm it's fine to leave it as is indefinitely?",
          "Second, if a storm damages more than fifty percent of my fence's length, would the board consider an ___(3)___ to the height rule given the damage was outside my control?",
          "Third, could you please ___(4)___ whether the 1.8-metre limit applies to side yard fences as well, or only to backyard fences as the notice states?",
          "I also wondered whether homeowners could apply to ___(5)___ a taller fence in special cases, such as properties bordering a busy road.",
          "Fourth, I noticed the notice didn't mention whether the two-week submission window includes weekends, since I'd like to ___(6)___ my project as soon as possible.",
          "Could the board please ___(7)___ me a copy of the official request form, so I can begin preparing it in advance?",
          "I would also like to ___(8)___ that the board post the updated bylaw on the community website for future reference, since not everyone keeps paper notices.",
          "Finally, could you please ___(9)___ whether there are any additional fees associated with submitting a fence request form?",
          "I appreciate the ___(10)___ the board provided in explaining the reasoning behind this change, and I hope the new rule works out ___(11)___ for the whole community.",
          "Sincerely,",
          "Owen Radcliffe, 22 Birchwood Lane",
        ],
        blanks: [
          {
            num: 1,
            options: ["notice", "invoice", "apology", "complaint"],
            correct: 0,
            explain:
              "Owen is thanking Ms. Marsh for the official communication about the bylaw change — \"notice\" refers to a formal message informing residents of something, matching the email's purpose.",
          },
          {
            num: 2,
            options: ["replaced", "painted", "sold", "photographed"],
            correct: 0,
            explain:
              "The original email states existing fences over 1.8 metres will not need to be replaced — Owen is confirming this exemption applies to his fence.",
          },
          {
            num: 3,
            options: ["exception", "invoice", "apology", "penalty"],
            correct: 0,
            explain:
              "Owen is asking whether the board would make a special allowance given the damage was accidental — \"exception\" means a case where the usual rule does not apply, fitting this request.",
          },
          {
            num: 4,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Owen wants Ms. Marsh to verify whether the rule extends to side yard fences — \"confirm\" fits a request to clarify and verify a specific detail.",
          },
          {
            num: 5,
            options: ["request", "forbid", "cancel", "sell"],
            correct: 0,
            explain:
              "Owen is asking whether homeowners can formally ask for permission to build a taller fence in special cases — \"request\" means to formally ask for something, matching this context.",
          },
          {
            num: 6,
            options: ["submit", "cancel", "erase", "forbid"],
            correct: 0,
            explain:
              "Owen wants to send in his project application as soon as possible — \"submit\" means to formally present something for approval, fitting the context of the request form.",
          },
          {
            num: 7,
            options: ["forbid", "send", "erase", "sell"],
            correct: 1,
            explain:
              "Owen is asking for the request form to be provided to him — \"send\" is the natural verb for delivering a document to someone by mail or email.",
          },
          {
            num: 8,
            options: ["suggest", "forbid", "delete", "ignore"],
            correct: 0,
            explain:
              "Owen is politely proposing an idea (posting the bylaw online) — \"suggest\" is the appropriate verb for offering a recommendation in formal correspondence.",
          },
          {
            num: 9,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Owen is asking Ms. Marsh to verify whether any fees apply — \"confirm\" fits a request for verification of a specific fact.",
          },
          {
            num: 10,
            options: ["transparency", "silence", "invoice", "complaint"],
            correct: 0,
            explain:
              "Owen is thanking the board for clearly explaining its reasoning — \"transparency\" refers to openness and clarity in communication, fitting this appreciative context.",
          },
          {
            num: 11,
            options: ["well", "badly", "rarely", "loudly"],
            correct: 0,
            explain:
              "Owen is expressing hope that the new rule benefits everyone in the community — \"work out well\" is the standard collocation meaning to result in a good outcome.",
          },
        ],
      },
      {
        id: "t6_r2",
        partLabel: "Part 2",
        name: "Reading to Apply a Diagram",
        instructions:
          "Study the information below, then answer the questions by applying the details shown.",
        suggestedMinutes: 13,
        passageTitle: "Thistle & Thyme Bistro — Dinner Menu",
        diagramHtml: `
        <table class="diagram-table">
          <thead><tr><th>Dish</th><th>Price</th><th>Dietary Tags</th><th>Spice Level</th><th>Prep Time</th></tr></thead>
          <tbody>
            <tr><td>Roasted Beet Salad</td><td>$14</td><td>Vegan, Gluten-Free, Nut-Free</td><td>None</td><td>10 min</td></tr>
            <tr><td>Wild Mushroom Risotto</td><td>$22</td><td>Vegetarian, Gluten-Free</td><td>None</td><td>25 min</td></tr>
            <tr><td>Spicy Peanut Noodles</td><td>$18</td><td>Vegan, Contains Nuts</td><td>Hot</td><td>15 min</td></tr>
            <tr><td>Grilled Salmon</td><td>$28</td><td>Gluten-Free, Nut-Free</td><td>Mild</td><td>20 min</td></tr>
            <tr><td>Classic Beef Burger</td><td>$19</td><td>Nut-Free</td><td>None</td><td>18 min</td></tr>
            <tr><td>Coconut Chickpea Curry</td><td>$20</td><td>Vegan, Gluten-Free, Nut-Free</td><td>Medium</td><td>20 min</td></tr>
          </tbody>
        </table>
        <table class="diagram-table">
          <thead><tr><th>Add-On</th><th>Price</th><th>Compatible Dishes</th></tr></thead>
          <tbody>
            <tr><td>Extra protein (tofu)</td><td>+$4</td><td>Any salad or curry</td></tr>
            <tr><td>Extra protein (chicken)</td><td>+$6</td><td>Any dish except vegan-labeled dishes</td></tr>
            <tr><td>Side of rice</td><td>+$3</td><td>Any dish</td></tr>
          </tbody>
        </table>
        <p class="diagram-note">Note: All dishes can be prepared without dairy upon request, except the Wild Mushroom Risotto, which requires cream and cannot be modified. The kitchen cannot guarantee a completely nut-free environment even for nut-free labeled dishes, due to shared equipment.</p>
      `,
        questions: [
          {
            q: "A guest with a severe peanut allergy wants to order the Spicy Peanut Noodles' vegan version but substitute out the nuts entirely. What should they know?",
            options: [
              "The dish is naturally nut-free already.",
              "The dish contains nuts, so it is not suitable for someone with a peanut allergy.",
              "The kitchen guarantees complete nut removal on request.",
              "Nuts can be replaced with dairy at no charge.",
            ],
            correct: 1,
            explain:
              "The Spicy Peanut Noodles are tagged 'Contains Nuts,' making them unsuitable for a guest with a peanut allergy, regardless of substitution requests.",
          },
          {
            q: "A vegan guest wants to add chicken to their Coconut Chickpea Curry for extra protein. Is this possible under the menu's stated options?",
            options: [
              "Yes, chicken can be added to any dish.",
              "No, chicken add-ons are not available for vegan-labeled dishes.",
              "Yes, but only with the risotto.",
              "No, the curry cannot have any add-ons at all.",
            ],
            correct: 1,
            explain:
              "The add-on table states chicken protein is compatible with 'Any dish except vegan-labeled dishes,' and the Coconut Chickpea Curry is labeled Vegan.",
          },
          {
            q: "A guest wants the Wild Mushroom Risotto made without dairy due to lactose intolerance. What will the kitchen say?",
            options: [
              "It can easily be made dairy-free like all other dishes.",
              "It cannot be modified, since it requires cream and is the one exception to dairy-free modification.",
              "It already contains no dairy.",
              "It will be replaced with the Grilled Salmon automatically.",
            ],
            correct: 1,
            explain:
              "The note explicitly states all dishes can be made without dairy upon request except the Wild Mushroom Risotto, which requires cream and cannot be modified.",
          },
          {
            q: "Which dish has the shortest preparation time?",
            options: ["Roasted Beet Salad", "Wild Mushroom Risotto", "Grilled Salmon", "Classic Beef Burger"],
            correct: 0,
            explain:
              "The Roasted Beet Salad has a prep time of 10 minutes, shorter than the Risotto (25 min), Salmon (20 min), and Burger (18 min).",
          },
          {
            q: "A guest ordering the Grilled Salmon wants to add tofu for extra protein. Is this allowed based on the compatibility list?",
            options: [
              "Yes, tofu can be added to any dish including salmon.",
              "No, tofu add-ons are only listed as compatible with salads or curries, not the salmon.",
              "Yes, but only if ordered with rice.",
              "No, tofu is not available at this restaurant.",
            ],
            correct: 1,
            explain:
              "The add-on table lists tofu as compatible with 'Any salad or curry' only, and the Grilled Salmon is neither, so it is not listed as a compatible option.",
          },
          {
            q: "A guest wants a dish that is both vegan and gluten-free, with no spice at all. Which dish fits perfectly?",
            options: ["Spicy Peanut Noodles", "Roasted Beet Salad", "Coconut Chickpea Curry", "Wild Mushroom Risotto"],
            correct: 1,
            explain:
              "The Roasted Beet Salad is tagged Vegan and Gluten-Free with a spice level of 'None,' while the Peanut Noodles are Hot and the Curry is Medium spice.",
          },
          {
            q: "Even though the Classic Beef Burger is labeled 'Nut-Free,' what caution does the note raise?",
            options: [
              "The kitchen cannot guarantee a completely nut-free environment due to shared equipment.",
              "The burger actually contains peanuts.",
              "The burger is only nut-free on weekends.",
              "The label is a printing error and should be ignored.",
            ],
            correct: 0,
            explain:
              "The note states the kitchen cannot guarantee a completely nut-free environment even for nut-free labeled dishes, due to shared equipment.",
          },
          {
            q: "A guest orders the Coconut Chickpea Curry with a side of rice. What is the total price?",
            options: ["$20", "$23", "$24", "$26"],
            correct: 1,
            explain:
              "The Coconut Chickpea Curry costs $20, and a side of rice adds $3, which is compatible with any dish, for a total of $23.",
          },
        ],
      },
      {
        id: "t6_r3",
        partLabel: "Part 3",
        name: "Reading for Information",
        instructions: "Read the passage, then answer the questions based on the information given.",
        suggestedMinutes: 14,
        passageTitle: "Cooling Cities: The Science of Urban Heat Islands",
        passage: `On a summer afternoon, a city's downtown core can register temperatures several degrees warmer than the surrounding countryside, even at the exact same time of day. This phenomenon, known as the urban heat island effect, has become an increasingly urgent focus for city planners as extreme heat events grow more frequent and severe.

The primary cause is straightforward: materials commonly used in cities, such as asphalt, concrete, and dark rooftops, absorb and retain far more solar radiation than natural surfaces like grass, soil, or tree canopy. Whereas a forest or field releases much of its absorbed heat quickly after sunset, paved surfaces continue radiating stored heat well into the night, which is why urban areas often show the starkest temperature difference compared to rural areas not at midday, but several hours after dark.

A second contributing factor is the sheer lack of vegetation in many urban cores. Trees and plants cool their surroundings through a process called evapotranspiration, in which water evaporating from leaves draws heat from the surrounding air, much like sweat cooling human skin. A single mature tree can have a cooling effect comparable to several room-sized air conditioners running continuously. Cities with fewer trees per capita, often those with the least green space in lower-income neighborhoods, tend to experience the most intense heat island effects, a disparity that has drawn growing attention from public health researchers concerned about equitable heat exposure.

Building density and street geometry play a role as well. Tall buildings clustered closely together can trap heat at street level while also blocking the wind patterns that would otherwise help dissipate it, an effect sometimes called an "urban canyon." Waste heat from air conditioning units, vehicle engines, and industrial equipment adds yet another layer, since all of these systems ultimately release excess heat into the surrounding air even as they cool building interiors.

Cities have begun experimenting with a range of countermeasures. Reflective or "cool" roofing materials, which are lighter in color and reflect more sunlight than traditional dark roofing, have been shown to reduce rooftop surface temperatures by significant margins. Expanding tree canopy coverage, particularly along streets and in parking lots, remains one of the most cost-effective long-term strategies, though newly planted trees can take years or decades to provide substantial shade. Some cities have also begun installing light-colored or specially coated pavement in select areas, aiming to reduce the heat absorbed by roads and parking lots during peak summer months.

Researchers emphasize that addressing the urban heat island effect is not merely a matter of comfort. During major heat waves, the added several degrees from urban heat islands can meaningfully increase heat-related illness and death, particularly among elderly residents and those without reliable access to air conditioning, making heat mitigation an increasingly central piece of public health planning in cities worldwide.`,
        questions: [
          {
            q: "What is the primary cause of the urban heat island effect, according to the passage?",
            options: [
              "Cities are located closer to the equator.",
              "Materials like asphalt, concrete, and dark rooftops absorb and retain more solar radiation than natural surfaces.",
              "Urban areas receive more direct sunlight than rural areas.",
              "Cities have fewer clouds overhead.",
            ],
            correct: 1,
            explain:
              "The passage states the primary cause is that common urban materials absorb and retain far more solar radiation than natural surfaces like grass, soil, or tree canopy.",
          },
          {
            q: "According to the passage, when does the starkest temperature difference between urban and rural areas typically occur?",
            options: [
              "At midday",
              "Several hours after dark",
              "Only during winter",
              "Immediately at sunrise",
            ],
            correct: 1,
            explain:
              "The passage explains paved surfaces continue radiating stored heat into the night, so the starkest difference occurs several hours after dark, not at midday.",
          },
          {
            q: "What is evapotranspiration, as described in the passage?",
            options: [
              "A process where water evaporating from leaves draws heat from surrounding air, cooling the area",
              "A chemical process used to make cool roofing materials",
              "The process by which asphalt absorbs heat",
              "A method of measuring urban temperatures",
            ],
            correct: 0,
            explain:
              "The passage defines evapotranspiration as water evaporating from leaves drawing heat from the surrounding air, similar to sweat cooling human skin.",
          },
          {
            q: "What comparison does the passage make about a single mature tree's cooling effect?",
            options: [
              "It is negligible compared to modern technology.",
              "It can be comparable to several room-sized air conditioners running continuously.",
              "It only cools the tree itself.",
              "It is less effective than a single small fan.",
            ],
            correct: 1,
            explain:
              "The passage states a single mature tree can have a cooling effect comparable to several room-sized air conditioners running continuously.",
          },
          {
            q: "What disparity has drawn attention from public health researchers, according to the passage?",
            options: [
              "That all neighborhoods experience identical heat effects",
              "That lower-income neighborhoods with less green space tend to experience more intense heat island effects",
              "That only rural areas suffer from heat islands",
              "That wealthy neighborhoods have no trees at all",
            ],
            correct: 1,
            explain:
              "The passage states cities with fewer trees per capita, often lower-income neighborhoods with the least green space, tend to experience the most intense heat island effects.",
          },
          {
            q: "What is an \"urban canyon,\" as described in the passage?",
            options: [
              "A natural rock formation found in cities",
              "An effect where tall, closely clustered buildings trap heat at street level and block wind that would help dissipate it",
              "A term for a city's underground tunnel system",
              "A type of cooling technology",
            ],
            correct: 1,
            explain:
              "The passage describes an urban canyon as tall buildings clustered closely together trapping heat at street level while blocking wind patterns that would help dissipate it.",
          },
          {
            q: "What effect do air conditioning units and vehicle engines have on urban heat, according to the passage?",
            options: [
              "They have no measurable impact.",
              "They release excess heat into the surrounding air even as they cool building interiors.",
              "They only affect heat levels at night.",
              "They reduce overall city temperatures.",
            ],
            correct: 1,
            explain:
              "The passage states waste heat from air conditioning units, vehicle engines, and industrial equipment adds another layer, since these systems release excess heat into the surrounding air.",
          },
          {
            q: "What drawback does the passage mention regarding expanding tree canopy as a countermeasure?",
            options: [
              "It is the most expensive option available.",
              "Newly planted trees can take years or decades to provide substantial shade.",
              "It has no cooling effect at all.",
              "It is illegal in most cities.",
            ],
            correct: 1,
            explain:
              "The passage notes that while expanding tree canopy is cost-effective long-term, newly planted trees can take years or decades to provide substantial shade.",
          },
          {
            q: "Why do researchers say addressing the urban heat island effect matters beyond comfort?",
            options: [
              "Because it has no real public health impact",
              "Because during heat waves, added urban heat can meaningfully increase heat-related illness and death, particularly among vulnerable groups",
              "Because it only affects property values",
              "Because it is purely an aesthetic concern",
            ],
            correct: 1,
            explain:
              "The final paragraph states that during heat waves, the added heat from urban heat islands can meaningfully increase heat-related illness and death, particularly among elderly residents and those without reliable air conditioning access.",
          },
        ],
      },
      {
        id: "t6_r4",
        partLabel: "Part 4",
        name: "Reading for Viewpoints",
        instructions:
          "Read the passage, which presents differing viewpoints, then answer the questions.",
        suggestedMinutes: 14,
        passageTitle: "Should Single-Use Plastic Bags Be Banned?",
        passage: `As more municipalities consider banning single-use plastic shopping bags, the proposal before the town council of Millbrook has reignited a familiar but still unsettled debate about the best way to balance environmental goals against practical concerns for shoppers and small businesses.

Environmental advocate Simone Delacroix has campaigned for the ban for over two years. "Plastic bags take hundreds of years to break down, and far too many end up in waterways, harming fish and other wildlife that mistake them for food," she explains. She cites data from a nearby city that banned plastic bags three years ago and saw a measurable decline in bags collected during annual shoreline cleanups. She argues that reusable bags, while requiring an adjustment period, quickly become habitual for most shoppers within a few months.

Grocery store owner Patrick Yun supports the goal but questions the specific approach. "I'm not against reducing plastic waste, but a full ban without cheap alternatives available in-store could really hurt customers who forget their reusable bags, especially elderly shoppers or people arriving by bus with heavy loads," he says. He proposes a five-cent fee per plastic bag instead of an outright ban, arguing this nudges behavior without penalizing shoppers who occasionally need a bag, while still generating revenue that could fund local environmental programs.

Environmental scientist Dr. Yolanda Reyes, who has studied plastic bag policies in multiple cities, points out that the evidence on fees versus bans is more nuanced than either side suggests. "Small fees do reduce plastic bag use, but not nearly as much as an outright ban," she explains, citing research showing fees typically reduce usage by around forty percent, while bans can reduce it by over ninety percent. However, she cautions that a ban alone can sometimes increase sales of thicker plastic garbage bags, as households substitute one plastic product for another when they can no longer reuse shopping bags for household trash. "The most effective policies pair a ban with either free or very low-cost paper or reusable bag options at checkout, so people aren't left without any practical alternative," she notes.

The Millbrook council has asked staff to draft a revised proposal incorporating a ban paired with a low-cost bag option at checkout, with a follow-up vote scheduled for next month.`,
        questions: [
          {
            q: "What is Simone Delacroix's main argument for banning plastic bags?",
            options: [
              "Plastic bags are too expensive for stores to provide.",
              "Plastic bags take hundreds of years to break down and often harm wildlife in waterways.",
              "Plastic bags are required to be banned by federal law.",
              "Plastic bags reduce store profits.",
            ],
            correct: 1,
            explain:
              "Delacroix argues plastic bags take hundreds of years to break down and end up in waterways, harming fish and wildlife that mistake them for food.",
          },
          {
            q: "What evidence does Delacroix cite to support her position?",
            options: [
              "A survey of grocery store owners",
              "Data from a nearby city showing a measurable decline in bags collected during shoreline cleanups after a ban",
              "A government report on plastic manufacturing",
              "Interviews with elderly shoppers",
            ],
            correct: 1,
            explain:
              "Delacroix cites data from a nearby city that banned plastic bags and saw a measurable decline in bags collected during annual shoreline cleanups.",
          },
          {
            q: "What is Patrick Yun's main concern about a full ban?",
            options: [
              "That it would eliminate all grocery stores",
              "That it could hurt customers who forget reusable bags, especially elderly shoppers or those arriving by bus",
              "That it would increase plastic waste overall",
              "That it is not supported by any environmental advocate",
            ],
            correct: 1,
            explain:
              "Yun worries a full ban without cheap alternatives could hurt customers who forget reusable bags, particularly elderly shoppers or people arriving by bus with heavy loads.",
          },
          {
            q: "What alternative does Yun propose instead of an outright ban?",
            options: [
              "No policy change at all",
              "A five-cent fee per plastic bag",
              "A complete ban on all grocery deliveries",
              "Free plastic bags for all customers",
            ],
            correct: 1,
            explain:
              "Yun proposes a five-cent fee per plastic bag instead of an outright ban, arguing it nudges behavior without penalizing occasional bag use.",
          },
          {
            q: "According to Dr. Reyes's research, how much do small fees typically reduce plastic bag usage compared to bans?",
            options: [
              "Fees reduce usage by around forty percent, while bans can reduce it by over ninety percent.",
              "Fees and bans have identical effects.",
              "Fees are more effective than bans in every case studied.",
              "Neither fees nor bans have any measurable effect.",
            ],
            correct: 0,
            explain:
              "Dr. Reyes cites research showing fees typically reduce usage by around forty percent, while bans can reduce usage by over ninety percent.",
          },
          {
            q: "What unintended effect does Dr. Reyes say a ban alone can sometimes cause?",
            options: [
              "It can increase sales of thicker plastic garbage bags as households substitute for lost reuse of shopping bags.",
              "It can cause grocery stores to close permanently.",
              "It can eliminate all plastic use citywide.",
              "It has no unintended effects whatsoever.",
            ],
            correct: 0,
            explain:
              "Dr. Reyes cautions that a ban alone can sometimes increase sales of thicker plastic garbage bags, as households substitute one plastic product for another.",
          },
          {
            q: "What does Dr. Reyes say is the most effective policy approach?",
            options: [
              "A fee with no ban at all",
              "Pairing a ban with free or very low-cost paper or reusable bag options at checkout",
              "No policy at all",
              "Banning all bags, including reusable ones",
            ],
            correct: 1,
            explain:
              "Dr. Reyes notes the most effective policies pair a ban with free or very low-cost paper or reusable bag options at checkout, so people have a practical alternative.",
          },
          {
            q: "What has the Millbrook council asked staff to do?",
            options: [
              "Cancel the proposal entirely",
              "Draft a revised proposal incorporating a ban paired with a low-cost bag option at checkout",
              "Implement Yun's fee proposal exclusively",
              "Delay any decision indefinitely with no further action",
            ],
            correct: 1,
            explain:
              "The final paragraph states the council has asked staff to draft a revised proposal incorporating a ban paired with a low-cost bag option at checkout.",
          },
          {
            q: "When is the follow-up vote scheduled to occur?",
            options: ["Next month", "In one year", "It has already occurred", "In five years"],
            correct: 0,
            explain:
              "The final paragraph states a follow-up vote is scheduled for next month.",
          },
          {
            q: "Which statement best summarizes the overall passage?",
            options: [
              "All three individuals fully agree on an outright ban with no alternatives.",
              "The passage presents supporting, alternative, and research-based viewpoints on plastic bag policy, converging toward a combined approach.",
              "The council has permanently rejected any policy change.",
              "Only the grocery store owner's opinion is presented.",
            ],
            correct: 1,
            explain:
              "The passage presents Delacroix favoring a ban, Yun proposing a fee instead, and Dr. Reyes offering research-based nuance, ending with the council moving toward a combined ban-plus-alternative approach.",
          },
        ],
      },
    ],
  };

  window.__readingTests = window.__readingTests || [];
  window.__readingTests.push(test);
})();
