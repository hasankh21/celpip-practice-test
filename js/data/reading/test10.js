// Reading Practice Test 10 — original content modeled on the official CELPIP-General format
// (Part 1: 11 blanks, Part 2: 8 questions, Part 3: 9 questions, Part 4: 10 questions — 38 total).
// Part 1 blanks are rendered as inline drop-downs directly inside the reply text (true cloze format),
// using the ___(n)___ markers below.

(function () {
  const test = {
    testNumber: 10,
    parts: [
      {
        id: "t10_r1",
        partLabel: "Part 1",
        name: "Reading Correspondence",
        instructions:
          "Read the email below, then read the reply. Some words in the reply are missing. Choose the best option to fill each numbered blank — the blanks appear directly in the reply text, just like on the real test.",
        suggestedMinutes: 16,
        passageTitle: "Original Email",
        passage: `From: Customer Relations, SkyLink Airlines
To: Renata Alvarez
Subject: Schedule Change for Flight SL 482 on March 14th

Dear Ms. Alvarez,

We are writing to inform you that your upcoming flight, SL 482 from Halifax to Calgary on March 14th, has been rescheduled. The new departure time is 2:45 p.m., which is approximately three hours later than your original 11:50 a.m. departure. Your arrival time in Calgary will now be 6:10 p.m. instead of the originally scheduled 3:20 p.m.

Your connecting flight, SL 917 to Kelowna, has automatically been rebooked for a later departure to accommodate this change, and your seat assignments remain the same as your original booking. If the new schedule no longer works for your travel plans, you are entitled to a full refund or a free rebooking onto a different flight, at no additional cost.

Please contact our customer service line if you have any questions or would like to make changes to your itinerary.

Sincerely,
Customer Relations
SkyLink Airlines`,
        replyTitle: "Reply (fill in each numbered blank)",
        replyTemplate: [
          "Dear Customer Relations Team,",
          "Thank you for the ___(1)___ about the schedule change for Flight SL 482. I have a few questions before deciding how to proceed.",
          "First, since my connecting flight to Kelowna was automatically ___(2)___, can you confirm the new departure time for SL 917, since the email didn't specify it?",
          "Second, if I choose to ___(3)___ my ticket instead of accepting the new schedule, how many days will the refund take to process?",
          "Third, I'm travelling with a small dog in the cabin — will my pet reservation still be ___(4)___ for the new departure time, or do I need to reconfirm it separately?",
          "Fourth, I noticed the email didn't mention whether meal service will be ___(5)___ differently given the later departure time, since 2:45 p.m. falls outside the usual lunch service window.",
          "I would like to ___(6)___ whether my seat assignment in row 14 will remain exactly the same, or whether the aircraft type might have changed along with the schedule.",
          "Fifth, will the airline ___(7)___ any compensation for the three-hour delay, given that this wasn't a choice I made when I originally booked?",
          "I would also like to ___(8)___ that the airline send a text alert as well as an email, since I almost missed this notice in my inbox.",
          "Finally, could you please ___(9)___ whether checked baggage will need to be dropped off any earlier than usual given the new departure time?",
          "I appreciate the ___(10)___ you've provided about my options, and I understand schedule changes are sometimes unavoidable. Please let me know how we can make this rebooking go ___(11)___.",
          "Sincerely,",
          "Renata Alvarez",
        ],
        blanks: [
          {
            num: 1,
            options: ["notice", "invoice", "complaint", "apology"],
            correct: 0,
            explain:
              "Renata is thanking the airline for informing her in advance — this refers back to the original email, which was a 'notice' about the schedule change.",
          },
          {
            num: 2,
            options: ["rebooked", "sold", "cancelled", "forgotten"],
            correct: 0,
            explain:
              "The original email states the connecting flight 'has automatically been rebooked' for a later departure, so Renata is referring to this same action.",
          },
          {
            num: 3,
            options: ["cancel", "sell", "paint", "ignore"],
            correct: 0,
            explain:
              "Renata is asking about the process if she decides not to keep her booking — 'cancel my ticket' fits the context of giving up the reservation for a refund.",
          },
          {
            num: 4,
            options: ["honored", "sold", "painted", "forbidden"],
            correct: 0,
            explain:
              "Renata is asking whether her existing pet reservation will still be respected under the new schedule — 'honored' fits a question about whether an arrangement remains valid.",
          },
          {
            num: 5,
            options: ["adjusted", "sold", "painted", "ignored"],
            correct: 0,
            explain:
              "Renata is asking whether meal service plans will change to match the new departure time — 'adjusted' fits a question about modifying something to suit new circumstances.",
          },
          {
            num: 6,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Renata is asking the airline to verify a fact about her seat assignment — 'confirm' fits a request for a definite answer.",
          },
          {
            num: 7,
            options: ["offer", "forbid", "cancel", "sell"],
            correct: 0,
            explain:
              "Renata is asking whether the airline will provide compensation for the delay — 'offer' is the natural verb for providing something as a gesture or benefit.",
          },
          {
            num: 8,
            options: ["suggest", "delete", "forbid", "ignore"],
            correct: 0,
            explain:
              "Renata is politely proposing an idea (a text alert) — 'suggest' is the appropriate verb for offering a recommendation in formal correspondence.",
          },
          {
            num: 9,
            options: ["verify", "deny", "cancel", "delay"],
            correct: 0,
            explain:
              "Renata wants the airline to double-check the baggage drop-off timing — 'verify' fits a request to confirm that information is accurate.",
          },
          {
            num: 10,
            options: ["information", "complaint", "invoice", "warning"],
            correct: 0,
            explain:
              "'Information' refers to the details the airline shared about her options (refund or rebooking), matching what Renata is expressing appreciation for.",
          },
          {
            num: 11,
            options: ["smoothly", "loudly", "slowly", "incorrectly"],
            correct: 0,
            explain:
              "Renata is asking how the process can succeed without problems — 'go smoothly' is the standard collocation for a process happening without difficulty.",
          },
        ],
      },
      {
        id: "t10_r2",
        partLabel: "Part 2",
        name: "Reading to Apply a Diagram",
        instructions:
          "Study the information below, then answer the questions by applying the details shown.",
        suggestedMinutes: 13,
        passageTitle: "GreenLeaf Grocery Delivery — Zones, Fees & Membership Plans",
        diagramHtml: `
        <table class="diagram-table">
          <thead><tr><th>Delivery Zone</th><th>Distance from Store</th><th>Delivery Fee</th><th>Estimated Delivery Time</th></tr></thead>
          <tbody>
            <tr><td>Zone 1</td><td>0–3 km</td><td>$2.99</td><td>30–45 minutes</td></tr>
            <tr><td>Zone 2</td><td>3–7 km</td><td>$4.99</td><td>45–60 minutes</td></tr>
            <tr><td>Zone 3</td><td>7–12 km</td><td>$7.99</td><td>60–90 minutes</td></tr>
            <tr><td>Zone 4</td><td>12–18 km</td><td>$12.99</td><td>90–120 minutes (limited availability, weekdays only)</td></tr>
          </tbody>
        </table>
        <table class="diagram-table">
          <thead><tr><th>Plan</th><th>Monthly Cost</th><th>Delivery Fee Discount</th><th>Minimum Order</th></tr></thead>
          <tbody>
            <tr><td>Pay-As-You-Go</td><td>$0</td><td>No discount</td><td>$25 required</td></tr>
            <tr><td>GreenLeaf Basic</td><td>$6.99/month</td><td>50% off delivery fees</td><td>$15 required</td></tr>
            <tr><td>GreenLeaf Plus</td><td>$12.99/month</td><td>Free delivery on orders over $30</td><td>No minimum</td></tr>
            <tr><td>GreenLeaf Family</td><td>$19.99/month</td><td>Free delivery on all orders</td><td>No minimum (up to 4 linked accounts)</td></tr>
          </tbody>
        </table>
        <p class="diagram-note">Note: Zone 4 deliveries are only available Monday through Friday and are not available to Pay-As-You-Go customers regardless of order size. Same-day delivery cutoff is 4:00 p.m.; orders placed after that time are scheduled for the next available delivery window.</p>
      `,
        questions: [
          {
            q: "A customer on the Pay-As-You-Go plan lives in Zone 4. Can they receive delivery?",
            options: [
              "Yes, at any time",
              "No, Zone 4 is not available to Pay-As-You-Go customers",
              "Yes, but only on weekends",
              "No, Zone 4 is unavailable to all customers",
            ],
            correct: 1,
            explain:
              "The note explicitly states Zone 4 deliveries are not available to Pay-As-You-Go customers regardless of order size.",
          },
          {
            q: "A GreenLeaf Basic member places a $20 order in Zone 2, which normally has a $4.99 delivery fee. How much will they pay in delivery fees?",
            options: ["$4.99", "$2.50 (50% off $4.99)", "$0", "$12.99"],
            correct: 1,
            explain:
              "GreenLeaf Basic offers 50% off delivery fees. Half of $4.99 rounds to approximately $2.50.",
          },
          {
            q: "A GreenLeaf Plus member orders $25 worth of groceries. Do they pay a delivery fee?",
            options: [
              "No, Plus members never pay delivery fees",
              "Yes, because a $25 order does not meet the plan's $30 threshold for free delivery",
              "No, delivery is always free regardless of order size under Plus",
              "Yes, they always pay full price no matter the order size",
            ],
            correct: 1,
            explain:
              "GreenLeaf Plus offers free delivery only on orders over $30. Since the order is $25, it falls short of the threshold, so the applicable zone fee still applies.",
          },
          {
            q: "A family of 4 wants to share one delivery account among family members with separate logins. Which plan should they choose?",
            options: [
              "Pay-As-You-Go",
              "GreenLeaf Basic",
              "GreenLeaf Plus",
              "GreenLeaf Family, which allows up to 4 linked accounts",
            ],
            correct: 3,
            explain:
              "Only GreenLeaf Family explicitly allows up to 4 linked accounts, matching the family's need for separate logins.",
          },
          {
            q: "A customer places an order at 4:30 p.m. for same-day delivery. What will happen?",
            options: [
              "It will arrive within 30 minutes regardless of zone",
              "It will be scheduled for the next available delivery window since it's after the 4:00 p.m. cutoff",
              "It will be automatically cancelled",
              "It will receive a discount for being late",
            ],
            correct: 1,
            explain:
              "The note states the same-day cutoff is 4:00 p.m., and orders placed after that time are scheduled for the next available delivery window.",
          },
          {
            q: "Which zone has the longest estimated delivery time and limited availability?",
            options: ["Zone 1", "Zone 2", "Zone 3", "Zone 4"],
            correct: 3,
            explain:
              "Zone 4 has the longest estimated delivery time (90–120 minutes) and is noted as having limited availability, weekdays only.",
          },
          {
            q: "A Pay-As-You-Go customer wants to place a $15 order. What is required?",
            options: [
              "Nothing extra, orders of any size qualify",
              "The order does not meet the $25 minimum required for this plan",
              "They must upgrade to the Family plan only",
              "They receive free delivery automatically",
            ],
            correct: 1,
            explain:
              "The table shows Pay-As-You-Go requires a $25 minimum order, so a $15 order does not qualify.",
          },
          {
            q: "What is the delivery fee for Zone 3 under Pay-As-You-Go, which has no discount?",
            options: ["$2.99", "$4.99", "$7.99", "$12.99"],
            correct: 2,
            explain: "The table lists the Zone 3 delivery fee as $7.99, with no discount applied under Pay-As-You-Go.",
          },
        ],
      },
      {
        id: "t10_r3",
        partLabel: "Part 3",
        name: "Reading for Information",
        instructions: "Read the passage, then answer the questions based on the information given.",
        suggestedMinutes: 14,
        passageTitle: "Why the Same Grocery Item Can Cost More Across Town",
        passage: `Shoppers who move between neighborhoods sometimes notice that the identical carton of milk or loaf of bread carries a different price tag depending on which store they visit, even within the same city and the same grocery chain. Economists who study retail pricing point to several overlapping factors that explain this pattern, most of which have little to do with simple price gouging.

Real estate cost is often the largest single factor. A store located in a dense downtown core typically pays substantially higher rent per square foot than a location in a suburban strip mall, and that overhead is generally reflected, at least in part, in shelf prices. Labor costs follow a similar pattern, since wages in some metropolitan areas or particular neighborhoods run higher than in others, whether due to local minimum wage rules or simple competition for workers among nearby businesses.

Delivery logistics also play a role that shoppers rarely consider. A store situated farther from a chain's regional distribution center incurs higher transportation costs per delivery truck, and remote or hard-to-access locations sometimes require smaller, more frequent deliveries rather than fewer large ones, both of which raise per-unit costs. Stores in areas with narrow streets or limited loading access face similar inefficiencies.

Competition, or the lack of it, is another significant driver. Economists have found that stores facing more nearby competitors, whether from other supermarket chains or discount retailers, tend to price more aggressively to retain customers, while stores that are the only grocery option within a wide radius have less competitive pressure to keep prices low. This dynamic has drawn criticism, since it means neighborhoods with fewer grocery options, often called "food deserts" when access is especially limited, can end up paying more for the same goods as neighborhoods with abundant nearby choices, a pattern some researchers describe as a kind of unintentional penalty on residents with the fewest transportation alternatives.

Demographic pricing strategies add another layer of complexity. Some retail analysts argue that certain chains adjust prices based on assumptions about a neighborhood's income level or price sensitivity, a practice that remains controversial and difficult to prove definitively, since companies rarely disclose their internal pricing formulas. Consumer advocacy groups have called for greater transparency in how retailers set neighborhood-level prices, though most chains maintain that observed differences stem entirely from the operational cost factors described above rather than from targeting particular demographic groups.

Regardless of the precise mix of causes in any individual case, the overall effect is the same for shoppers: comparing prices across a chain's own locations, not just between competing chains, can sometimes reveal real savings, particularly for households with the flexibility to shop at a store slightly farther from home.`,
        questions: [
          {
            q: "According to the passage, what is often the largest single factor explaining price differences between store locations?",
            options: [
              "Store size",
              "Real estate cost, such as rent per square foot",
              "The color of store signage",
              "The number of cashiers employed",
            ],
            correct: 1,
            explain:
              "The passage states real estate cost is often the largest single factor, since downtown stores typically pay substantially higher rent per square foot.",
          },
          {
            q: "How do labor costs contribute to price differences, according to the passage?",
            options: [
              "They are identical everywhere",
              "Wages vary by area due to local minimum wage rules or competition for workers",
              "They only affect online grocery orders",
              "They have no connection to grocery prices",
            ],
            correct: 1,
            explain:
              "The passage states wages run higher in some metropolitan areas or neighborhoods due to minimum wage rules or competition for workers among nearby businesses.",
          },
          {
            q: "How can a store's distance from a distribution center affect prices?",
            options: [
              "It has no effect on prices",
              "Greater distance can increase transportation costs and require smaller, more frequent deliveries, raising per-unit costs",
              "It always lowers prices",
              "It only affects delivery speed, not cost",
            ],
            correct: 1,
            explain:
              "The passage states stores farther from a distribution center incur higher transportation costs and may need smaller, more frequent deliveries, both raising per-unit costs.",
          },
          {
            q: "According to the passage, how does competition affect grocery pricing?",
            options: [
              "Stores with more nearby competitors tend to price more aggressively to retain customers",
              "Competition has no effect on prices",
              "Stores with no competitors always lower prices",
              "More competitors always raise prices",
            ],
            correct: 0,
            explain:
              "The passage states stores facing more nearby competitors tend to price more aggressively to retain customers, while stores with little competition face less pressure to keep prices low.",
          },
          {
            q: "What term does the passage use for neighborhoods with especially limited grocery access?",
            options: ["Price deserts", "Food deserts", "Retail gaps", "Economic voids"],
            correct: 1,
            explain: "The passage uses the term 'food deserts' for neighborhoods with especially limited grocery access.",
          },
          {
            q: "What pattern do some researchers describe regarding neighborhoods with fewer grocery options?",
            options: [
              "They always pay less due to less competition",
              "They can end up paying more, described as an unintentional penalty on residents with fewer transportation alternatives",
              "They receive automatic government subsidies",
              "They have identical prices to other neighborhoods",
            ],
            correct: 1,
            explain:
              "The passage states this dynamic has drawn criticism because such neighborhoods can end up paying more, a pattern described as an unintentional penalty on residents with the fewest transportation alternatives.",
          },
          {
            q: "What controversial practice do some retail analysts suggest certain chains use?",
            options: [
              "Adjusting prices based on assumptions about a neighborhood's income level or price sensitivity",
              "Charging identical prices at every location regardless of cost",
              "Giving discounts based on customer age",
              "Randomly generating prices with no pattern",
            ],
            correct: 0,
            explain:
              "The passage states some retail analysts argue certain chains adjust prices based on assumptions about a neighborhood's income level or price sensitivity.",
          },
          {
            q: "What do most chains claim is the actual cause of price differences, according to the passage?",
            options: [
              "Deliberate targeting of demographic groups",
              "Operational cost factors rather than targeting particular demographic groups",
              "Random pricing errors",
              "Government price-fixing rules",
            ],
            correct: 1,
            explain:
              "The passage states most chains maintain that observed differences stem entirely from operational cost factors rather than from targeting particular demographic groups.",
          },
          {
            q: "What practical suggestion does the passage offer to shoppers in its final paragraph?",
            options: [
              "Always shop at the nearest store regardless of price",
              "Comparing prices across a chain's own locations can sometimes reveal real savings",
              "Avoid grocery shopping in cities entirely",
              "Only shop during holiday sales",
            ],
            correct: 1,
            explain:
              "The final paragraph states comparing prices across a chain's own locations, not just between competing chains, can sometimes reveal real savings.",
          },
        ],
      },
      {
        id: "t10_r4",
        partLabel: "Part 4",
        name: "Reading for Viewpoints",
        instructions:
          "Read the passage, which presents differing viewpoints, then answer the questions.",
        suggestedMinutes: 14,
        passageTitle: "How Far Should Cities Go in Regulating Short-Term Rentals?",
        passage: `The rapid growth of short-term rental platforms has prompted many city councils to reconsider how these properties should be regulated, weighing tourism revenue and homeowner income against concerns about housing availability and neighborhood character.

Councillor Ana Beaumont supports stricter limits on short-term rentals, pointing to data from her own city's housing department. "We've identified over eight hundred units that were converted from long-term rental housing into full-time short-term rentals over the past three years," she says. "That's eight hundred homes effectively removed from the pool available to residents who actually live and work here." She backs a proposal limiting short-term rentals to a host's primary residence only, arguing that this would preserve income opportunities for homeowners renting out a spare room while curbing investors who buy up multiple properties purely for short-term rental income.

Property investor Tobias Reinholt strongly opposes the primary-residence restriction. "I've invested in three properties specifically because short-term rental income made the numbers work," he says. "Restricting me to a single unit erases most of my income overnight, and I'm not alone — dozens of small investors in this city built their retirement plans around this business model." He also argues that short-term rentals bring valuable tourism spending to local restaurants and shops that a long-term tenant simply wouldn't generate, since visitors on vacation tend to spend more freely than year-round residents.

Housing economist Dr. Felix Amara has reviewed short-term rental regulations adopted in other cities and cautions against viewing the issue as a simple trade-off. "The cities that saw the clearest improvement in housing affordability paired short-term rental limits with increased investment in new housing construction," he explains. "Restricting short-term rentals alone, without addressing the underlying housing supply shortage, produced only modest rent decreases in most of the case studies I reviewed." He suggests that a registration and licensing system, combined with a cap on the total number of licenses issued per neighborhood rather than a strict primary-residence rule, might better balance the competing interests while remaining easier to enforce than tracking every host's residency status.

Beaumont says she would be open to a licensing cap as a compromise if enforcement proves difficult under a primary-residence-only rule. Reinholt remains opposed to any restriction that reduces the number of properties he can list but says a reasonable licensing fee would be preferable to an outright limit. The city council has asked its housing department to model the financial impact of both a primary-residence rule and a neighborhood licensing cap before a final vote later this year.`,
        questions: [
          {
            q: "What is Councillor Beaumont's main argument for stricter short-term rental limits?",
            options: [
              "Short-term rentals bring in too much tourism revenue",
              "Hundreds of housing units have been converted to short-term rentals, removing them from residents",
              "Short-term rentals are illegal under current law",
              "Property investors don't pay enough taxes",
            ],
            correct: 1,
            explain:
              "Beaumont cites over eight hundred units converted from long-term to short-term rentals, calling this housing removed from residents who live and work in the city.",
          },
          {
            q: "What specific data point does Beaumont cite?",
            options: [
              "Over eight hundred units converted from long-term rental housing over three years",
              "A fifteen percent increase in rents",
              "Two thousand new short-term rental licenses",
              "A decline in tourism revenue",
            ],
            correct: 0,
            explain:
              "Beaumont states her city's housing department identified over eight hundred units converted from long-term rental housing over the past three years.",
          },
          {
            q: "What restriction does Beaumont's proposal include?",
            options: [
              "Banning short-term rentals entirely",
              "Limiting short-term rentals to a host's primary residence only",
              "Requiring a $10,000 licensing fee",
              "Limiting rentals to weekends only",
            ],
            correct: 1,
            explain: "Beaumont backs a proposal limiting short-term rentals to a host's primary residence only.",
          },
          {
            q: "What is Tobias Reinholt's main concern about the primary-residence restriction?",
            options: [
              "It would have no effect on his income",
              "It would erase most of his income since he relies on multiple properties for short-term rental revenue",
              "It would increase his property taxes",
              "It would require him to hire more staff",
            ],
            correct: 1,
            explain:
              "Reinholt says restricting him to a single unit would erase most of his income overnight, since he invested in three properties for this business model.",
          },
          {
            q: "What benefit does Reinholt say short-term rentals bring to the local economy?",
            options: [
              "They reduce tourism spending",
              "They bring valuable tourism spending to local restaurants and shops",
              "They lower property values",
              "They eliminate the need for hotels entirely",
            ],
            correct: 1,
            explain:
              "Reinholt argues short-term rentals bring valuable tourism spending to local restaurants and shops that a long-term tenant wouldn't generate.",
          },
          {
            q: "According to Dr. Amara, what did cities with the clearest improvement in housing affordability do?",
            options: [
              "Banned short-term rentals with no other changes",
              "Paired short-term rental limits with increased investment in new housing construction",
              "Increased short-term rental licenses",
              "Ignored the housing supply issue entirely",
            ],
            correct: 1,
            explain:
              "Dr. Amara explains that cities with the clearest improvement paired short-term rental limits with increased investment in new housing construction.",
          },
          {
            q: "What did Amara find about restricting short-term rentals alone, without addressing housing supply?",
            options: [
              "It produced dramatic rent decreases",
              "It produced only modest rent decreases in most case studies",
              "It had no effect on rents at all",
              "It increased rents further",
            ],
            correct: 1,
            explain:
              "Amara states restricting short-term rentals alone, without addressing supply, produced only modest rent decreases in most case studies reviewed.",
          },
          {
            q: "What alternative system does Dr. Amara suggest might better balance competing interests?",
            options: [
              "A complete ban with no licensing",
              "A registration and licensing system with a cap on licenses per neighborhood",
              "Unlimited short-term rentals with no rules",
              "A rule based only on property value",
            ],
            correct: 1,
            explain:
              "Amara suggests a registration and licensing system combined with a cap on licenses per neighborhood, rather than a strict primary-residence rule.",
          },
          {
            q: "What compromise is Beaumont open to, according to the passage?",
            options: [
              "A licensing cap if enforcement proves difficult under a primary-residence-only rule",
              "Eliminating all restrictions",
              "Doubling the number of allowed units per host",
              "Removing herself from the debate",
            ],
            correct: 0,
            explain:
              "Beaumont says she would be open to a licensing cap as a compromise if enforcement proves difficult under a primary-residence-only rule.",
          },
          {
            q: "What is the city council expected to do before its final vote, according to the passage?",
            options: [
              "Immediately implement a total ban",
              "Ask the housing department to model the financial impact of both proposed approaches",
              "Cancel the debate indefinitely",
              "Give Reinholt sole authority over the decision",
            ],
            correct: 1,
            explain:
              "The final sentence states the city council has asked its housing department to model the financial impact of both a primary-residence rule and a neighborhood licensing cap before a final vote.",
          },
        ],
      },
    ],
  };

  window.__readingTests = window.__readingTests || [];
  window.__readingTests.push(test);
})();
