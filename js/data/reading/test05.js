// Reading Practice Test 5 — original content modeled on the official CELPIP-General format
// (Part 1: 11 blanks, Part 2: 8 questions, Part 3: 9 questions, Part 4: 10 questions — 38 total).
// Part 1 blanks are rendered as inline drop-downs directly inside the reply text (true cloze format),
// using the ___(n)___ markers below.

(function () {
  const test = {
    testNumber: 5,
    parts: [
      {
        id: "t5_r1",
        partLabel: "Part 1",
        name: "Reading Correspondence",
        instructions:
          "Read the email below, then read the reply. Some words in the reply are missing. Choose the best option to fill each numbered blank — the blanks appear directly in the reply text, just like on the real test.",
        suggestedMinutes: 16,
        passageTitle: "Original Email",
        passage: `From: Wendell Ashcroft, Property Manager, Birchgate Rentals
To: Naomi Petrova
Subject: Lease Renewal Offer — Unit 14B

Dear Ms. Petrova,

As your current lease for Unit 14B is set to expire on November 30th, I'm writing to offer you the opportunity to renew for another twelve-month term. Given the current market, your rent would increase from $1,450 to $1,510 per month, a rate we believe remains competitive for the building and neighborhood.

If you choose to renew, please sign and return the attached lease renewal form by October 15th. If we do not hear from you by that date, we will assume you plan to vacate the unit at the end of your current term, and move-out procedures will apply.

We value you as a tenant and hope you'll consider staying with us for another year.

Kind regards,
Wendell Ashcroft
Property Manager
Birchgate Rentals`,
        replyTitle: "Reply (fill in each numbered blank)",
        replyTemplate: [
          "Dear Mr. Ashcroft,",
          "Thank you for the renewal offer and for giving me ample ___(1)___ to decide before the deadline. I have a few questions first.",
          "First, given that rent has increased two years in a row, is there any ___(2)___ in the new rate, or is $1,510 firm?",
          "Second, could you please ___(3)___ whether the building's parking fee is included in that monthly rate, or whether it's billed separately as before?",
          "Third, I noticed a small leak under my kitchen sink last month. Before I renew, could someone please ___(4)___ it to make sure it won't worsen over the next year?",
          "I also wanted to ask whether a six-month lease could be ___(5)___ instead of the standard twelve-month term, since my work situation may change.",
          "Fourth, is it possible to ___(6)___ the October 15th deadline by a few days, since I'm waiting on some paperwork from my employer first?",
          "I would also like to know whether the building plans to ___(7)___ the lobby renovation that was mentioned at last spring's tenant meeting.",
          "I would like to ___(8)___ that the building consider offering a small discount for tenants who renew early, as an incentive for long-term residents.",
          "Finally, could you please ___(9)___ that my current storage locker assignment would carry over automatically if I renew?",
          "I appreciate the ___(10)___ you've shown as a landlord over the past year, and I hope we can reach an agreement that works ___(11)___ for both of us.",
          "Sincerely,",
          "Naomi Petrova",
        ],
        blanks: [
          {
            num: 1,
            options: ["time", "money", "food", "space"],
            correct: 0,
            explain:
              "\"Ample time\" means plenty of time, and Naomi is thanking Mr. Ashcroft for giving her enough time before the deadline to decide about renewal.",
          },
          {
            num: 2,
            options: ["flexibility", "silence", "invoice", "complaint"],
            correct: 0,
            explain:
              "Naomi is asking whether the rent amount can be adjusted or negotiated — \"flexibility\" refers to room for change or negotiation, fitting her question about whether the rate is fixed.",
          },
          {
            num: 3,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Naomi wants Mr. Ashcroft to verify whether parking is included in the rate — \"confirm\" fits a request to verify a specific fact.",
          },
          {
            num: 4,
            options: ["inspect", "sell", "paint", "ignore"],
            correct: 0,
            explain:
              "Naomi wants someone to examine the leak before she renews — \"inspect\" means to examine closely, matching her request to check whether it will worsen.",
          },
          {
            num: 5,
            options: ["arranged", "forbidden", "cancelled", "sold"],
            correct: 0,
            explain:
              "Naomi is asking whether a six-month lease could be set up or organized instead of the standard term — \"arranged\" means organized or set up, fitting this request.",
          },
          {
            num: 6,
            options: ["extend", "shrink", "erase", "publish"],
            correct: 0,
            explain:
              "Naomi wants more time before the deadline — \"extend\" means to make something longer in duration, matching her request to push the deadline back a few days.",
          },
          {
            num: 7,
            options: ["proceed with", "forbid", "sell", "ignore"],
            correct: 0,
            explain:
              "Naomi is asking whether the building intends to move forward with the previously mentioned renovation — \"proceed with\" means to continue or go ahead with a plan, fitting this context.",
          },
          {
            num: 8,
            options: ["suggest", "forbid", "delete", "ignore"],
            correct: 0,
            explain:
              "Naomi is politely proposing an idea (an early-renewal discount) — \"suggest\" is the appropriate verb for offering a recommendation in formal correspondence.",
          },
          {
            num: 9,
            options: ["confirm", "deny", "hide", "delay"],
            correct: 0,
            explain:
              "Naomi is asking Mr. Ashcroft to verify that her storage locker would carry over — \"confirm\" fits a request for verification of a specific fact.",
          },
          {
            num: 10,
            options: ["professionalism", "silence", "invoice", "complaint"],
            correct: 0,
            explain:
              "Naomi is thanking Mr. Ashcroft for his conduct as a landlord over the past year — \"professionalism\" refers to competent, respectful conduct, fitting this appreciative context.",
          },
          {
            num: 11,
            options: ["well", "badly", "rarely", "loudly"],
            correct: 0,
            explain:
              "Naomi is expressing hope that an agreement can be reached that benefits both parties — \"work well for\" is the standard collocation meaning to be suitable or beneficial for someone.",
          },
        ],
      },
      {
        id: "t5_r2",
        partLabel: "Part 2",
        name: "Reading to Apply a Diagram",
        instructions:
          "Study the information below, then answer the questions by applying the details shown.",
        suggestedMinutes: 13,
        passageTitle: "Junction Hub Co-Working Space — Membership Plans & Room Booking",
        diagramHtml: `
        <table class="diagram-table">
          <thead><tr><th>Plan</th><th>Monthly Cost</th><th>Desk Access</th><th>Meeting Room Hours</th><th>Printing Credit</th></tr></thead>
          <tbody>
            <tr><td>Drop-In</td><td>$15/day</td><td>Shared desk, day-use only</td><td>None</td><td>None</td></tr>
            <tr><td>Flex</td><td>$120</td><td>Any shared desk, business hours only</td><td>2 hours/month</td><td>50 pages</td></tr>
            <tr><td>Dedicated Desk</td><td>$220</td><td>Assigned desk, 24/7 access</td><td>5 hours/month</td><td>150 pages</td></tr>
            <tr><td>Private Office</td><td>$480</td><td>Locking private office, 24/7 access</td><td>10 hours/month</td><td>Unlimited</td></tr>
          </tbody>
        </table>
        <table class="diagram-table">
          <thead><tr><th>Room</th><th>Capacity</th><th>Equipment</th><th>Booking Increment</th></tr></thead>
          <tbody>
            <tr><td>Huddle Room 1</td><td>4 people</td><td>TV screen, whiteboard</td><td>30 minutes</td></tr>
            <tr><td>Huddle Room 2</td><td>4 people</td><td>Whiteboard only</td><td>30 minutes</td></tr>
            <tr><td>Boardroom</td><td>12 people</td><td>Video conferencing, TV screen, whiteboard</td><td>1 hour</td></tr>
            <tr><td>Phone Booth</td><td>1 person</td><td>None (soundproofed only)</td><td>15 minutes</td></tr>
          </tbody>
        </table>
        <p class="diagram-note">Note: Meeting room hours do not roll over to the next month. Access to the building after 9 p.m. or before 7 a.m. is restricted to Dedicated Desk and Private Office members only.</p>
      `,
        questions: [
          {
            q: "A Flex member wants to enter the building at 6:30 a.m. to prepare for an early client call. Is this allowed?",
            options: [
              "Yes, Flex members have full 24/7 access.",
              "No, access before 7 a.m. is restricted to Dedicated Desk and Private Office members only.",
              "Yes, but only on weekends.",
              "No, Flex members cannot access the building at all.",
            ],
            correct: 1,
            explain:
              "The note states access before 7 a.m. is restricted to Dedicated Desk and Private Office members only, and Flex plan desk access is limited to business hours.",
          },
          {
            q: "A freelancer wants to book the Boardroom for a client presentation requiring video conferencing for 12 attendees. Which room fits their needs?",
            options: ["Huddle Room 1", "Huddle Room 2", "Boardroom", "Phone Booth"],
            correct: 2,
            explain:
              "The Boardroom has a capacity of 12 people and includes video conferencing equipment, matching both the attendee count and technical requirement.",
          },
          {
            q: "A Dedicated Desk member has used 4 of their 5 monthly meeting room hours. Unused hours from this month do not carry forward. What happens to their 1 remaining hour at month's end?",
            options: [
              "It rolls over automatically to next month.",
              "It is lost, since meeting room hours do not roll over to the next month.",
              "It converts into printing credit.",
              "It doubles for the following month.",
            ],
            correct: 1,
            explain:
              "The note explicitly states meeting room hours do not roll over to the next month, so any unused hour is forfeited at month's end.",
          },
          {
            q: "A member needs a quiet, private space for a single 20-minute phone call. Which room should they book, and for what minimum increment?",
            options: [
              "Boardroom, 1 hour",
              "Huddle Room 1, 30 minutes",
              "Phone Booth, 15 minutes",
              "Huddle Room 2, 30 minutes",
            ],
            correct: 2,
            explain:
              "The Phone Booth fits one person for a private call and books in 15-minute increments, so a 20-minute call would require booking two 15-minute increments (30 minutes total), still the most appropriate room.",
          },
          {
            q: "A member wants unlimited printing and a locking office they can access any time of day or night. Which plan fits their needs?",
            options: ["Flex", "Dedicated Desk", "Private Office", "Drop-In"],
            correct: 2,
            explain:
              "Only the Private Office plan offers unlimited printing credit and a locking private office with 24/7 access, matching both requirements.",
          },
          {
            q: "Someone wants to try the space for just one day before committing to a monthly plan. What should they choose?",
            options: ["Flex", "Dedicated Desk", "Private Office", "Drop-In"],
            correct: 3,
            explain:
              "The Drop-In option is priced per day ($15/day) with no monthly commitment, making it the appropriate choice for a single-day trial.",
          },
          {
            q: "Which two rooms share the same booking increment of 30 minutes?",
            options: [
              "Huddle Room 1 and Huddle Room 2",
              "Boardroom and Phone Booth",
              "Huddle Room 1 and Boardroom",
              "Phone Booth and Huddle Room 2",
            ],
            correct: 0,
            explain:
              "The table shows both Huddle Room 1 and Huddle Room 2 have a booking increment of 30 minutes, unlike the Boardroom (1 hour) or Phone Booth (15 minutes).",
          },
          {
            q: "A Flex member wants to know how many pages of printing credit they receive monthly. What is the correct number?",
            options: ["None", "50 pages", "150 pages", "Unlimited"],
            correct: 1,
            explain:
              "The membership table lists the Flex plan's printing credit as 50 pages per month.",
          },
        ],
      },
      {
        id: "t5_r3",
        partLabel: "Part 3",
        name: "Reading for Information",
        instructions: "Read the passage, then answer the questions based on the information given.",
        suggestedMinutes: 14,
        passageTitle: "The Forgotten Art of Traditional Wayfinding",
        passage: `Long before satellite navigation and paper maps, Pacific Island navigators crossed thousands of kilometres of open ocean using a sophisticated system of observation now known as traditional wayfinding. This method relied entirely on careful attention to natural signs, including star positions, wave patterns, wind direction, and even the behavior of seabirds, to guide voyages between islands separated by vast, featureless stretches of water.

At the heart of wayfinding is what navigators call a "star compass," a mental framework dividing the horizon into roughly thirty-two segments, each associated with the rising or setting point of a particular star or constellation. A skilled navigator memorizes hundreds of these star paths across an entire year, since different stars are visible depending on the season. By tracking which star rises or sets at a known point on the horizon, a navigator can maintain a consistent heading throughout the night, even without any instruments.

Daytime navigation presented a different challenge, since the sun alone offers less precise directional information than the night sky. Navigators compensated by developing acute sensitivity to ocean swells, which are distinct from smaller, choppier wind-driven waves. Major swells generated by distant, persistent weather systems travel in relatively stable directions for long periods, and an experienced navigator lying in the hull of a canoe could sense the rhythm and direction of these swells through the vessel's movement, using them as a directional reference even when clouds obscured the stars.

Seabird behavior offered yet another layer of information, particularly when approaching land. Certain species, such as terns and boobies, typically fly out to sea in the morning to fish and return toward land in the evening, meaning their flight direction at dusk often pointed navigators toward islands that remained below the horizon. Some navigators also learned to recognize subtle changes in wave reflection patterns near an island, since waves bouncing back off a shoreline create a distinctive interference pattern with incoming swells that can be detected from a surprising distance offshore.

For much of the twentieth century, this knowledge system was in serious decline, as Western navigation instruments became widely available and fewer young people trained under master navigators. However, a cultural revival beginning in the 1970s, spurred partly by high-profile voyages using traditionally built canoes navigated without instruments, renewed interest in preserving and teaching wayfinding. Today, a small but dedicated community of navigators continues to train apprentices in these techniques, viewed not merely as a practical skill but as an important link to cultural heritage and identity.`,
        questions: [
          {
            q: "What is traditional wayfinding, as described in the passage?",
            options: [
              "A modern satellite-based navigation system",
              "A system of navigation relying on natural signs like stars, waves, wind, and bird behavior",
              "A type of paper map used exclusively in Pacific islands",
              "A method of building traditional canoes",
            ],
            correct: 1,
            explain:
              "The passage defines wayfinding as a system relying on natural signs including star positions, wave patterns, wind direction, and seabird behavior.",
          },
          {
            q: "What is a \"star compass\"?",
            options: [
              "A physical instrument made of metal",
              "A mental framework dividing the horizon into segments associated with star rising and setting points",
              "A type of telescope used by navigators",
              "A written star chart carried on voyages",
            ],
            correct: 1,
            explain:
              "The passage describes the star compass as a mental framework dividing the horizon into roughly thirty-two segments tied to star rising and setting points.",
          },
          {
            q: "Why must a navigator memorize hundreds of star paths across a year?",
            options: [
              "Because different stars are visible depending on the season.",
              "Because stars change position permanently each year.",
              "Because only one star path exists per voyage.",
              "Because star paths are required by law to be memorized.",
            ],
            correct: 0,
            explain:
              "The passage explains navigators memorize hundreds of star paths since different stars are visible depending on the season.",
          },
          {
            q: "How did navigators handle daytime navigation, when the sun offers less precise directional information?",
            options: [
              "They stopped travelling until nightfall.",
              "They developed sensitivity to ocean swells, sensing their rhythm and direction through the canoe's movement.",
              "They relied entirely on seabirds during the day.",
              "They used a compass made of stone.",
            ],
            correct: 1,
            explain:
              "The passage states navigators compensated for less precise daytime cues by developing sensitivity to ocean swells, sensed through the vessel's movement.",
          },
          {
            q: "What distinguishes major ocean swells from smaller, wind-driven waves, according to the passage?",
            options: [
              "Swells are always larger in height.",
              "Swells travel in relatively stable directions for long periods, generated by distant weather systems.",
              "Swells only occur at night.",
              "Swells are caused by seabird movement.",
            ],
            correct: 1,
            explain:
              "The passage explains major swells, generated by distant, persistent weather systems, travel in relatively stable directions for long periods, unlike smaller wind-driven waves.",
          },
          {
            q: "How does seabird behavior help navigators approaching land?",
            options: [
              "Birds fly in random patterns unrelated to land.",
              "Certain birds fly out to sea in the morning and return toward land in the evening, indicating land direction at dusk.",
              "Birds only appear near islands during storms.",
              "Birds are used exclusively for food during voyages.",
            ],
            correct: 1,
            explain:
              "The passage states species like terns and boobies fly out to sea in the morning and return toward land in the evening, so their flight direction at dusk often points toward islands.",
          },
          {
            q: "What causes the distinctive wave interference pattern navigators use to detect land from a distance?",
            options: [
              "Waves bouncing back off a shoreline interacting with incoming swells",
              "Wind blowing directly onto the canoe",
              "Seabirds diving into the water",
              "Stars reflecting off the ocean surface",
            ],
            correct: 0,
            explain:
              "The passage explains that waves bouncing back off a shoreline create a distinctive interference pattern with incoming swells, detectable from a distance offshore.",
          },
          {
            q: "Why did traditional wayfinding knowledge decline during much of the twentieth century?",
            options: [
              "Because it was made illegal",
              "Because Western navigation instruments became widely available and fewer young people trained under master navigators",
              "Because all master navigators passed away simultaneously",
              "Because ocean swells changed permanently",
            ],
            correct: 1,
            explain:
              "The passage states the decline occurred as Western navigation instruments became widely available and fewer young people trained under master navigators.",
          },
          {
            q: "What sparked renewed interest in wayfinding beginning in the 1970s?",
            options: [
              "A new government funding program",
              "High-profile voyages using traditionally built canoes navigated without instruments",
              "The invention of GPS technology",
              "A decline in seabird populations",
            ],
            correct: 1,
            explain:
              "The passage states the cultural revival was spurred partly by high-profile voyages using traditionally built canoes navigated without instruments.",
          },
        ],
      },
      {
        id: "t5_r4",
        partLabel: "Part 4",
        name: "Reading for Viewpoints",
        instructions:
          "Read the passage, which presents differing viewpoints, then answer the questions.",
        suggestedMinutes: 14,
        passageTitle: "Should the City Rezone Riverside Avenue for Higher-Density Housing?",
        passage: `The city planning commission is reviewing a proposal to rezone a stretch of Riverside Avenue, currently limited to single-family homes, to allow buildings of up to six storeys. The proposal has become one of the most contested items on the commission's agenda this year.

Planning commissioner Idris Tanaka supports the rezoning, framing it as a necessary response to the city's ongoing housing shortage. "We have thousands of people on waitlists for affordable units, and Riverside Avenue sits within walking distance of the subway station and two major employers," he says. He argues that concentrating new housing near existing transit infrastructure reduces reliance on cars and makes more efficient use of land that is currently underused relative to its central location. He also notes that the proposal includes a requirement that twenty percent of new units be designated as below-market-rate housing.

Longtime resident Beatriz Solano strongly opposes the change, arguing it would fundamentally alter the character of a quiet residential street. "Some of us have lived here for thirty years. We chose this street because it's quiet, with big trees and low traffic," she says. She worries that six-storey buildings would block sunlight for existing homes, increase traffic congestion on a street not designed for it, and strain the neighborhood's aging water and sewer infrastructure, which she says has not been upgraded in decades. She has organized a petition, signed by over four hundred residents, asking the commission to reject the proposal or significantly reduce the height allowance.

Urban planning consultant Dr. Femi Adeyemi, hired by the city to provide an independent assessment, takes a conditional position. "Density near transit is generally sound planning, and the evidence for that is strong," he states. "But Ms. Solano raises a legitimate point about infrastructure capacity that shouldn't be dismissed." His engineering review found that the existing sewer system on Riverside Avenue is indeed operating near capacity and would likely require upgrades before any significant new development proceeds, regardless of the final height allowance chosen. He recommends the commission approve the rezoning in principle but delay issuing building permits until infrastructure upgrades are funded and scheduled, and suggests a more moderate four-storey limit rather than six as a reasonable compromise.

The commission has postponed its final vote to allow city engineers to prepare a detailed cost estimate for the necessary sewer upgrades, with a new vote expected within three months.`,
        questions: [
          {
            q: "What is Commissioner Tanaka's main argument for the rezoning?",
            options: [
              "It will reduce city tax revenue.",
              "It responds to the housing shortage by using land near transit and employers more efficiently.",
              "It will eliminate the need for public transit.",
              "It is required by federal housing law.",
            ],
            correct: 1,
            explain:
              "Tanaka argues the rezoning addresses the housing shortage by making efficient use of underused land near transit and major employers.",
          },
          {
            q: "What requirement does Tanaka note is included in the proposal?",
            options: [
              "All units must be luxury housing.",
              "Twenty percent of new units must be designated as below-market-rate housing.",
              "No new housing may be built for five years.",
              "All residents must reapply for their current homes.",
            ],
            correct: 1,
            explain:
              "Tanaka notes the proposal includes a requirement that twenty percent of new units be designated as below-market-rate housing.",
          },
          {
            q: "What is Beatriz Solano's main concern about the rezoning?",
            options: [
              "That it will lower property values immediately",
              "That it would alter the neighborhood's character, block sunlight, increase traffic, and strain aging infrastructure",
              "That it will eliminate public transit access",
              "That it will reduce the number of affordable units",
            ],
            correct: 1,
            explain:
              "Solano worries about the street's character changing, sunlight being blocked, traffic congestion increasing, and strain on aging water and sewer infrastructure.",
          },
          {
            q: "What action has Solano taken in response to the proposal?",
            options: [
              "She has filed a lawsuit against the city.",
              "She has organized a petition signed by over four hundred residents.",
              "She has resigned from the neighborhood association.",
              "She has offered to sell her home to the developer.",
            ],
            correct: 1,
            explain:
              "The passage states Solano has organized a petition, signed by over four hundred residents, asking the commission to reject or reduce the proposal.",
          },
          {
            q: "What did Dr. Adeyemi's engineering review find about the existing sewer system?",
            options: [
              "It has unlimited capacity for new development.",
              "It is operating near capacity and would likely require upgrades before significant development proceeds.",
              "It was upgraded five years ago and needs no further work.",
              "It does not exist on Riverside Avenue.",
            ],
            correct: 1,
            explain:
              "Dr. Adeyemi's review found the sewer system is operating near capacity and would likely require upgrades before significant new development proceeds.",
          },
          {
            q: "What does Dr. Adeyemi say generally about density near transit?",
            options: [
              "It is generally sound planning, supported by strong evidence.",
              "It is always a mistake regardless of location.",
              "It has never been studied before.",
              "It only works in small towns.",
            ],
            correct: 0,
            explain:
              "Dr. Adeyemi states that density near transit is generally sound planning, and the evidence for that is strong.",
          },
          {
            q: "What compromise height limit does Dr. Adeyemi suggest?",
            options: ["Two storeys", "Four storeys", "Six storeys", "Ten storeys"],
            correct: 1,
            explain:
              "Dr. Adeyemi suggests a more moderate four-storey limit rather than six as a reasonable compromise.",
          },
          {
            q: "What does Dr. Adeyemi recommend regarding building permits?",
            options: [
              "Issuing them immediately regardless of infrastructure",
              "Approving the rezoning in principle but delaying permits until infrastructure upgrades are funded and scheduled",
              "Rejecting the rezoning proposal entirely",
              "Allowing only single-family homes to be built",
            ],
            correct: 1,
            explain:
              "Dr. Adeyemi recommends the commission approve the rezoning in principle but delay issuing building permits until infrastructure upgrades are funded and scheduled.",
          },
          {
            q: "What has the commission decided to do regarding its final vote?",
            options: [
              "Approve the proposal without further review",
              "Postpone the vote to allow city engineers to prepare a cost estimate for sewer upgrades",
              "Reject the proposal permanently",
              "Delegate the final decision to Solano",
            ],
            correct: 1,
            explain:
              "The final paragraph states the commission has postponed its final vote to allow city engineers to prepare a detailed cost estimate for sewer upgrades.",
          },
          {
            q: "Which statement best summarizes the overall passage?",
            options: [
              "All three individuals fully agree the rezoning should proceed at six storeys.",
              "The passage presents supporting, opposing, and conditional expert viewpoints on a proposed rezoning, with the decision still pending further analysis.",
              "The rezoning has already been rejected permanently.",
              "Only the resident's opinion is presented in the passage.",
            ],
            correct: 1,
            explain:
              "The passage presents Tanaka in favor, Solano opposed, and Dr. Adeyemi offering a conditional, evidence-based position, ending with the vote postponed pending a cost estimate.",
          },
        ],
      },
    ],
  };

  window.__readingTests = window.__readingTests || [];
  window.__readingTests.push(test);
})();
