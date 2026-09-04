import type { RoundTourFile } from "../tours";

/**
 * 14-Day Sri Lanka Ancient Cities & Hill Country Tour
 * Keep the itinerary, inclusions and exclusions together for easy editing.
 */
const tour = {
  "id": "ELT-RT-010",
  "sourceReference": "IMG_20260814_0002 (1).pdf",
  "title": "14-Day Sri Lanka Ancient Cities & Hill Country Tour",
  "durationLabel": "14 Days 13 Nights",
  "shortDescription": "A nature and history route linking Anuradhapura, wildlife, the Cultural Triangle and the central highlands.",
  "routePoints": [
    "Colombo Airport",
    "Anuradhapura",
    "Sigiriya",
    "Kandy",
    "Nuwara Eliya",
    "Ella",
    "South Coast",
    " Airport drop",
  ],
  "highlights": [
    "Anuradhapura & Mihintale",
    "Safari & village experience",
    "Sigiriya & Dambulla",
    "Tea country train to Ella"
  ],
  "highlightsIntro": "A culture-and-nature route linking Anuradhapura sacred sites, safari, Sigiriya and the highland rail line.",
  "itinerary": [
    {
      "day": 1,
      "route": "Colombo Airport to Anuradhapura",
      "description": "Explore the cultural character of Colombo Airport to Anuradhapura through Ancient City, Mihintale, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Ancient City",
        "Mihintale"
      ]
    },
    {
      "day": 2,
      "route": "Anuradhapura",
      "description": "Spend the day close to Sri Lanka wildlife, with Safari planned around the best available timing and your preferred pace.",
      "experiences": [
        "Safari Wilpattu Park",
      ]
    },
    {
      "day": 3,
      "route": "Anuradhapura to Sigiriya",
      "description": "Explore the cultural character of Anuradhapura to Sigiriya through Ritigala, Village safari, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Ritigala Forest view",
        "Village safari"
      ]
    },
    {
      "day": 4,
      "route": "Sigiriya",
      "description": "Explore the cultural character of Sigiriya through Lion Rock, Elephant safari, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Lion Rock",
        "Village safari ",
        "Elephant safari Kaudulla or Minneriya Park",
      ]
    },
    {
      "day": 5,
      "route": "Sigiriya to Kandy",
      "description": "Explore the cultural character of Sigiriya to Kandy through Dambulla, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Dambulla cave temple",
        "Kandy dance",
        "Temple of the Tooth",
      ]
    },
    {
      "day": 6,
      "route": "Kandy to Nuwara Eliya",
      "description": "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Tea plantation, Ramboda Falls and the views that make this region special.",
      "experiences": [
        "Tea plantation",
        "Ramboda Falls",
        "tea factory visit",
        "Nuwara Eliya city tour",
      ]
    },
    {
      "day": 7,
      "route": "Nuwara Eliya to Ella",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Nine Arch Bridge and a relaxed, unhurried travel day.",
      "experiences": [
        "Scenic train journey Nanu Oya to Demodara ",
        "Nine Arch Bridge",
      ]
    }
  ]
};

const packageDetails = {
  "included": [
    "Private air-conditioned vehicle and chauffeur for the ancient-cities and hill-country route.",
    "Airport meet-and-greet shown on Day 1.",
    "Flexible driving between Anuradhapura, Sigiriya, Kandy, Nuwara Eliya and Ella.",
    "Fuel, expressway tolls and vehicle parking for the stated route."
  ],
  "excluded": [
    "Accommodation and hotel meals, unless stated in your written quotation.",
    "Safari jeep and park entry fees, plus village-safari charges.",
    "Admission to Anuradhapura, Mihintale, Sigiriya, Dambulla and temples.",
    "Scenic-train tickets, international flights, visa, travel insurance and personal expenses."
  ]
};

export default { tour, packageDetails } satisfies RoundTourFile;
