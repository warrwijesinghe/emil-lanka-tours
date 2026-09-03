import type { RoundTourFile } from "../tours";

/**
 * 7-Day Sri Lanka Highlights: Sigiriya, Ella & Mirissa
 * Keep the itinerary, inclusions and exclusions together for easy editing.
 */
const tour = {
  "id": "ELT-RT-011",
  "sourceReference": "IMG_20260814_0003 (1).pdf",
  "title": "7-Day Sri Lanka Highlights: Sigiriya, Ella & Mirissa",
  "durationLabel": "7 Days 6 Nights",
  "shortDescription": "A relaxed one-week route from the airport through Sigiriya, Kandy, tea country, Ella and Mirissa.",
  "routePoints": [
    "Colombo Airport",
    "Sigiriya",
    "Kandy",
    "Nuwara Eliya",
    "Ella",
    "Mirissa",
    "Colombo Airport"
  ],
  "highlights": [
    "Sigiriya & elephant safari",
    "Kandy Temple & dance",
    "Horton Plains & train",
    "Mirissa, Galle & Madu River"
  ],
  "highlightsIntro": "A relaxed first taste of Sri Lanka, from Sigiriya and Kandy to the hills of Ella and Mirissa coast.",
  "itinerary": [
    {
      "day": 1,
      "route": "Colombo Airport to Sigiriya",
      "description": "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Sigiriya, with time to enjoy Pidurangala sunset.",
      "experiences": [
        "Village safari,Pidurangala sunset"
      ]
    },
    {
      "day": 2,
      "route": "Sigiriya",
      "description": "Explore the cultural character of Sigiriya through Lion Rock, Elephant safari, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Lion Rock",
        "Elephant safari"
      ]
    },
    {
      "day": 3,
      "route": "Sigiriya to Kandy",
      "description": "Explore the cultural character of Sigiriya to Kandy through Temple of the Tooth, Kandy dance, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Temple of the Tooth",
        "Kandy dance"
      ]
    },
    {
      "day": 4,
      "route": "Kandy to Nuwara Eliya",
      "description": "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Ramboda Falls, Tea factory and the views that make this region special.",
      "experiences": [
        "Ramboda Falls",
        "Tea factory",
        "Tea garden",
        "Nwaraeliya city tour",
      ]
    },
    {
      "day": 5,
      "route": "Nuwara Eliya to Ella",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Horton Plains, Scenic train and a relaxed, unhurried travel day.",
      "experiences": [
        "Horton Plains",
        "Scenic train journey nanuoya to damodara",
      ]
    },
    {
      "day": 6,
      "route": "Ella to Mirissa",
      "description": "Experience Sri Lanka's coast at an easy pace, with time for Little Adam’s Peak, Nine Arch Bridge, Mirissa Beach and comfortable private travel throughout the day.",
      "experiences": [
        "Little Adam’s Peak",
        "Nine Arch Bridge",
        "Mirissa Beach"
      ]
    },
    {
      "day": 7,
      "route": "Mirissa to Colombo Airport",
      "description": "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
      "experiences": [
        "Madu River safari",
        "Galle Fort"
      ]
    }
  ]
};

const packageDetails = {
  "included": [
    "Private air-conditioned vehicle and chauffeur for the Sigiriya, Ella and Mirissa route.",
    "Airport meet-and-greet and final airport transfer shown in the itinerary.",
    "Flexible driving between Sigiriya, Kandy, Nuwara Eliya, Ella and the south coast.",
    "Fuel, expressway tolls and vehicle parking for the stated route."
  ],
  "excluded": [
    "Accommodation and hotel meals, unless stated in your written quotation.",
    "Elephant-safari jeep and park entry, Madu River boat safari and optional activities.",
    "Admission to Sigiriya, Temple of the Tooth, Horton Plains, Galle Fort and other sites.",
    "Scenic-train tickets, international flights, visa, travel insurance and personal expenses."
  ]
};

export default { tour, packageDetails } satisfies RoundTourFile;
