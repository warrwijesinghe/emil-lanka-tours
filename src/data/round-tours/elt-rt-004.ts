import type { RoundTourFile } from "../tours";

/**
 * 21-Day Sri Lanka Heritage, Wildlife & Beach Tour
 * Keep the itinerary, inclusions and exclusions together for easy editing.
 */
const tour = {
  "id": "ELT-RT-004",
  "sourceReference": "RTO010 / IMG_20260813_0003.pdf",
  "title": "21-Day Sri Lanka Heritage, Wildlife & Beach Tour",
  "durationLabel": "21 Days 20 Nights",
  "shortDescription": "An extended heritage, wildlife and beach itinerary from the airport through the north-east, cultural triangle, hill country and coast.",
  "routePoints": [
    "Arrival at Colombo Airport",
    "Anuradhapura",
    "Trincomalee",
    "Sigiriya",
    "Mahiyanganaya",
    "Kandy",
    "Nuwara Eliya",
    "Ella",
    "South Coast",
    "Negombo",
    " Colombo air port",
  ],
  "highlights": [
    "Trincomalee nelavilli beach",
    "Trincomalee beaches",
    "Sigiriya & elephant safari",
    " Tangalla beach ",
    "Vedda village experience",
    " Waligama beach ",
    "Negombo beach",
    "Mirissa beach",
  ],
  "highlightsIntro": "A longer private journey combining northern heritage, east-coast beach time, wildlife and meaningful local culture.",
  "itinerary": [
    {
      "day": 1,
      "route": "Arrive at Colombo Airport to Anuradhapura",
      "description": "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Anuradhapura, with time to enjoy Ancient City.",
      "experiences": [
        "Ancient City"
      ]
    },
    {
      "day": 2,
      "route": "Anuradhapura",
      "description": "Spend the day close to Sri Lanka wildlife, with Wilpattu safari planned around the best available timing and your preferred pace.",
      "experiences": [
        "Wilpattu full day safari"
      ]
    },
    {
      "day": 3,
      "route": "Anuradhapura to Trincomalee",
      "description": "Experience Sri Lanka's coast at an easy pace, with time for Koneswaram Temple and comfortable private travel throughout the day.",
      "experiences": [
        "Mihintale temple",
        "Koneswaram hindu temple,"
      ]
    },
    {
      "day": 4,
      "route": "Trincomalee",
      "description": "Experience Sri Lanka's coast at an easy pace, with time for Dolphin watching, Nilaveli and comfortable private travel throughout the day.",
      "experiences": [
        "Dolphin watching",
        "Snorkelling"
      ]
    },
    {
      "day": 5,
      "route": "Trincomalee",
      "description": "Experience Sri Lanka's coast at an easy pace, with time for Marble Beach, Kinniya Fish Market and comfortable private travel throughout the day.",
      "experiences": [
        "Marble Beach",
        "Kinniya Fish Market"
      ]
    },
    {
      "day": 6,
      "route": "Trincomalee to Sigiriya",
      "description": "Follow the Trincomalee to Sigiriya route with time to experience Kaudulla Lake, Village safari, Habarana Cultural Show. Your private chauffeur can adjust the pace and stops around your interests.",
      "experiences": [
        "Polonnaruwa ruins",
        "Kaudulla national park safari",
        "Back to sigiriya"
      ]
    },
    {
      "day": 7,
      "route": "Sigiriya",
      "description": "Spend the day close to Sri Lanka wildlife, with Tuk-tuk tour, Elephant safari planned around the best available timing and your preferred pace.",
      "experiences": [
        "Tuk-tuk journey around the rock",
        "Pidurangala Rock climbing",
        "Culture dance show,"
      ]
    },
    {
      "day": 8,
      "route": "Sigiriya",
      "description": "Explore the cultural character of Sigiriya through Ritigala, Ayurveda, Dambulla, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Ritigala",
        "Ayurveda",
        "Dambulla"
      ]
    },
    {
      "day": 9,
      "route": "Sigiriya to Mahiyanganaya",
      "description": "Follow the Sigiriya to Mahiyanganaya route with time to experience Polonnaruwa. Your private chauffeur can adjust the pace and stops around your interests.",
      "experiences": [
        "Polonnaruwa"
      ]
    },
    {
      "day": 10,
      "route": "Mahiyanganaya",
      "description": "Follow the Mahiyanganaya route with time to experience Vedda Village, Sorabora Lake. Your private chauffeur can adjust the pace and stops around your interests.",
      "experiences": [
        "Vedda Village",
        "Sorabora Lake"
      ]
    }
  ]
};

const packageDetails = {
  "included": [
    "Private air-conditioned vehicle and chauffeur for the north-east heritage route.",
    "Airport meet-and-greet shown on Day 1.",
    "Flexible driving between Anuradhapura, Trincomalee, Sigiriya and Mahiyanganaya.",
    "Fuel, expressway tolls and vehicle parking for the stated route."
  ],
  "excluded": [
    "Accommodation and hotel meals, unless stated in your written quotation.",
    "Wilpattu and elephant-safari jeeps, park entry, dolphin watching and tuk-tuk tours.",
    "Admission to temples, heritage sites, cultural shows and Ayurveda treatments.",
    "International flights, visa, travel insurance and personal expenses."
  ]
};

export default { tour, packageDetails } satisfies RoundTourFile;
