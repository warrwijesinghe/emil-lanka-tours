import type { RoundTourFile } from "../tours";

/**
 * 21-Day Sri Lanka Ancient Cities, Safari & Beach Tour
 * Keep the itinerary, inclusions and exclusions together for easy editing.
 */
const tour = {
  "id": "ELT-RT-008",
  "sourceReference": "IMG_20260814_0001 (3).pdf",
  "title": "21-Day Sri Lanka Ancient Cities, Safari & Beach Tour",
  "durationLabel": "21 Days 20 Nights",
  "shortDescription": "An extended itinerary combining Yapahuwa, the ancient capitals, beaches, wildlife and hill country.",
  "routePoints": [
    "Colombo Airport",
    "Yapahuwa",
    "Anuradhapura",
    "Sigiriya",
    "Kandy",
    "Nuwara Eliya",
    "Ella",
    "South Coast"
  ],
  "highlights": [
    "Yapahuwa & Anuradhapura",
    "Wilpattu safari",
    "Sigiriya elephant safari",
    "Tea garden & tea factory", 
    "Ella nine arch brigde",
    "Little Adams peaik",
  ],
  "highlightsIntro": "An unhurried grand journey through ancient kingdoms, safari country, Sigiriya and the central highlands.",
  "itinerary": [
    {
      "day": 1,
      "route": "Colombo Airport to anuradhapura",
      "description": "Explore the cultural character of Colombo Airport to Yapahuwa through Yapahuwa Temple, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Yapahuwa Temple visit",
        "Mihinthle visit",
      ]
    },
    {
      "day": 2,
      "route": " Anuradhapura",
      "description": "Explore the cultural character of Yapahuwa to Anuradhapura through Sacred City, Mihintale, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Willpattu nationl park safari",
        
      ]
    },
    {
      "day": 3,
      "route": "Anuradhapura to sigiriya",
      "description": "Spend the day close to Sri Lanka wildlife, with Wilpattu safari planned around the best available timing and your preferred pace.",
      "experiences": [
        "Anuradhapura city tour",
        "Ritegala forist trking ",
        "Culture dance show",
      ]
    },
    {
      "day": 4,
      "route": " Sigiriya",
      "description": "Explore the cultural character of Anuradhapura to Sigiriya through Village safari, Pidurangala, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Village safari",
        "Pidurangala rock",
        "Elephint safari,kudulla or minneriya park",
      ]
    },
    {
      "day": 5,
      "route": "Sigiriya",
      "description": "Follow the Sigiriya route with time to experience Lion Rock, Elephant safari. Your private chauffeur can adjust the pace and stops around your interests.",
      "experiences": [
        "Morning visit Lion Rock",
        "Polonnaruwa ruins",
      ]
    },
    {
      "day": 6,
      "route": "Sigiriya to Kandy",
      "description": "Explore the cultural character of Sigiriya to Kandy through Dambulla, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Dambulla cave temple",
        "Kanday dance",
        "Temple of the Tooth",
      ]
    },
    {
      "day": 7,
      "route": "Kandy to Nuwara Eliya",
      "description": "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Tea factory, Ramboda Falls and the views that make this region special.",
      "experiences": [
        "Tea factory",
        "Ramboda Falls", 
        "Tea garden",
        "Nuwaraeliya city tour",
      ]
    },
    {
      "day": 8,
      "route": "Nuwara Eliya to Ella",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Nine Arch Bridge and a relaxed, unhurried travel day.",
      "experiences": [
        "Nanuoya to damodara train journey",
        "Little adams peck",
      ]
    }
  ]
};

const packageDetails = {
  "included": [
    "Private air-conditioned vehicle and chauffeur for the ancient-cities and hill-country route.",
    "Airport meet-and-greet shown on Day 1.",
    "Flexible driving between Yapahuwa, Anuradhapura, Sigiriya, Kandy and Ella.",
    "Fuel, expressway tolls and vehicle parking for the stated route."
  ],
  "excluded": [
    "Accommodation and hotel meals, unless stated in your written quotation.",
    "Wilpattu and elephant-safari jeeps, park entry and village-safari fees.",
    "Admission to Yapahuwa, ancient cities, Sigiriya, temples and scenic-train tickets.",
    "International flights, visa, travel insurance and personal expenses."
  ]
};

export default { tour, packageDetails } satisfies RoundTourFile;
