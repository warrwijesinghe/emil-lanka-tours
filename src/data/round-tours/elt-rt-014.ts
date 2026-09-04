import type { RoundTourFile } from "../tours";

const tour = {
  id: "ELT-RT-014",
  sourceReference: "Untitled design.png",
  title: "Sri Lanka Grand Cultural & Coastal Round Tour",
  durationLabel: "14 Days 13 Nights",
  shortDescription:
    "A sweeping private journey from Sigiriya's ancient citadel to misty tea country, wild national parks and the southern coast—with the Kandy Esala Perahera as a seasonal highlight.",
  routePoints: [
    "Colombo Airport",
    "Sigiriya",
    "Kandy",
    "Nuwara Eliya",
    "Ella",
    "Tissamaharama",
    "Udawalawe",
    "Sinharaja",
    "Mirissa",
    "Colombo Airport",
  ],
  highlights: [
    "Sigiriya Lion Rock & Pidurangala sun sat ",
    "Kandy Esala Perahera (August month seasonal only )",
    " Nanu Oya to damodara train journey",
    "Yala or Minneriya park  safari ",
    " Ritigala forast ",
     "Polonnaruwa ruins",
  ],
  highlightsIntro:
    "Discover Sri Lanka's UNESCO heritage, highlands, wildlife and beaches in one unhurried 14-day circuit. Your chauffeur can tailor the pace and optional experiences to your travel dates.",
  itinerary: [
    {
      day: 1,
      route: "Colombo Airport to Sigiriya",
      description:
        "Meet your private chauffeur at Bandaranaike International Airport and travel to Sigiriya. Settle into your hotel for a restful start to your journey.",
      experiences: [
        "Airport meet-and-greet",
        "Transfer to Sigiriya",
        "Three-night Sigiriya stay begins",
      ],
    },
    {
      day: 2,
      route: "Sigiriya unesco heritahe site ",
      description:
        "Start early for the Sigiriya Lion Rock climb, then explore Dambulla Cave Temple. Later, enjoy a tranquil boat ride on Talkote Lake and take in the views from Pidurangala Rock.",
      experiences: [
        "Sigiriya Lion Rock ",
        "Dambulla Cave Temple",
        "Talkote Lake boat ride",
        "Pidurangala Rock",
      ],
    },
    {
      day: 3,
      route: "Ritigala forast view ",
      description:
        "Visit the atmospheric Ritigala forest monastery, experience village life on a safari, and unwind with an Ayurvedic massage. Enjoy an evening cultural dance show in Habarana.",
      experiences: [
        "Ritigala forest monastery",
        "Village safari",
        "Ayurvedic massage",
        "Habarana cultural dance show",
      ],
    },
    {
      day: 4,
      route: "Sigiriya to kandy ",
      description:
        "Explore the ancient ruins of Polonnaruwa, then choose a safari in Minneriya or Kaudulla National Park before continuing to Kandy via Nalanda Gedige. Enjoy a Kandy city tour and cultural dance performance. In August, an evening at the Esala Perahera can be arranged; reserved chairs are payable separately.",
      experiences: [
        "Polonnaruwa ancient city",
        "Nalanda Gedige",
        "Kandy city tour & cultural dance",
      
      ],
    },
    {
      day: 5,
      route: "Kandy to Nuwara Eliya",
      description:
        "Travel into the central highlands, pausing at Nalanda Gedige and Ramboda Falls. Visit a tea garden and factory, then enjoy a relaxed Nuwara Eliya city tour; Victoria Park is optional.",
      experiences: [
        "Nalanda Gedige",
        "Ramboda Falls",
        "Tea garden & factory",
        "Nuwara Eliya city tour",
      ],
    },
    {
      day: 6,
      route: "Nuwara Eliya to Ella",
      description:
        "An optional early hike in Horton Plains opens the day. Then board the scenic train from Nanu Oya to Demodara, with time to see Nine Arch Bridge and Demodara Railway Station.",
      experiences: [
        "Optional Horton Plains hike",
        "Nanuoya to damodara train journey ",
        "Demodara Railway Station",
      ],
    },
    {
      day: 7,
      route: "Ella & Haputale",
      description:
        "Visit Lipton's Seat in Haputale for sweeping tea-country views. In the afternoon, explore Little Adam's Peak and return to Nine Arch Bridge at a relaxed pace.",
      experiences: ["Lipton's Seat",
         "Little Adam's Peak",
          "Nine Arch Bridge"],
    },
    {
      day: 8,
      route: "Ella to Tissamaharama",
      description:
        "Leave the hills for the dry zone and enjoy an evening jeep safari in Yala National Park, one of Sri Lanka's finest places to look for leopards and other wildlife.",
      experiences: ["Rwana water fall ", 
        "Evening Yala safari"],
    },
    {
      day: 9,
      route: "Tissamaharama to Udawalawe",
      description:
        "Travel to Udawalawe, visit the Elephant Transit Home and the reservoir dam. An evening safari in Udawalawe National Park can be added as an optional experience.",
      experiences: [
        "Elephant Transit Home",
        "Udawalawe Dam",
        "Optional evening safari",
        "Overnight in Udawalawe",
      ],
    },
    {
      day: 10,
      route: "Colombo to Sinharaja forast trking ",
      description:
        "Continue to the Sinharaja rainforest",
      experiences: [
        "Sinharaja rain forest",
        "Guided jungle trek",
        "Waterfall bathing",
        "Overnight near Sinharaja hotel ",
      ],
    },
    {
      day: 11,
      route: "Sinharaja to Mirissa",
      description:
        "Travel from the rainforest to Mirissa on Sri Lanka's south coast. Check in and spend the afternoon relaxing by the sea.",
      experiences: ["Transfer to Mirissa", "Beach relaxation"],
    },
    {
      day: 12,
      route: "Mirissa, Madu River & Galle",
      description:
        "Take a morning boat safari on the Madu River, visit a sea turtle conservation project, and explore the ramparts and lanes of historic Galle Fort.",
      experiences: [
        "Madu River boat safari",
        "Sea turtle conservation visit",
        "Galle Fort",
      ],
    },
    {
      day: 13,
      route: "Mirissa Beach Day",
      description:
        "Keep the day free to enjoy Mirissa's beach, swim, or simply relax at your hotel before the final transfer tomorrow.",
      experiences: ["Leisure day",
         "Beach relaxation"],
    },
    {
      day: 14,
      route: "Mirissa to Negombo or Colombo Airport",
      description:
        "After breakfast, travel to Negombo or Bandaranaike International Airport for your departure. Your 14-day Sri Lanka round tour comes to a close.",
      experiences: [
        "Private departure transfer",
        "Airport drop-off",
        "End of tour",
      ],
    },
  ],
};

const packageDetails = {
  included: [
    "Private air-conditioned vehicle and chauffeur throughout the 14-day route.",
    "Airport meet-and-greet and final transfer to Negombo or Bandaranaike International Airport.",
    "Fuel, expressway tolls and parking for the stated itinerary.",
    "Flexible timing and route adjustments with your private chauffeur.",
  ],
  excluded: [
    "Accommodation and meals, unless stated in your written quotation.",
    "National-park entry, safari-jeep, boat, train and attraction fees.",
    "Kandy Esala Perahera reserved seating, when required during the August festival period.",
    "International flights, visa, travel insurance and personal expenses.",
  ],
};

export default { tour, packageDetails } satisfies RoundTourFile;
