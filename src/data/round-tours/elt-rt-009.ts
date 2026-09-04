import type { RoundTourFile } from "../tours";

/**
 * 14-Day Classic Sri Lanka: Sigiriya, Ella & South Coast
 * Keep the itinerary, inclusions and exclusions together for easy editing.
 */
const tour = {
  "id": "ELT-RT-009",
  "sourceReference": "IMG_20260814_0002.pdf",
  "title": "14-Day Classic Sri Lanka: Sigiriya, Ella & South Coast",
  "durationLabel": "14 Days 13 Nights",
  "shortDescription": "A full island circuit built around the Cultural Triangle, wildlife, hill country and coastal experiences.",
  "routePoints": [
    "Colombo Airport",
    "Sigiriya",
    "Kandy",
    "Nuwara Eliya",
    "Ella",
    "Mirissa",
    "Negombo",
    " Airport drop",
  ],
  "highlights": [
    "Sigiriya & Polonnaruwa",
    "Kandy & tea country",
    "Ella scenic train",
    "Galle Fort & Madu River"
  ],
  "highlightsIntro": "Sri Lanka classic first-time route: iconic rock fortresses, tea country, the Ella rail journey and the south coast.",
  "itinerary": [
    {
      "day": 1,
      "route": "Colombo Airport to Sigiriya",
      "description": "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Sigiriya, with time to enjoy Cultural Triangle.",
      "experiences": [
        "Village safari",
        "Pidurangala Rock climbing",
        "Culture dance show",
      ]
    },
    {
      "day": 2,
      "route": "Sigiriya",
      "description": "Follow the Sigiriya route with time to experience Lion Rock, Polonnaruwa, Elephant safari. Your private chauffeur can adjust the pace and stops around your interests.",
      "experiences": [
        "Morning Lion Rock",
        "After breakfast",
        "Polonnaruwa ruins",
        "Elephant safari"
      ]
    },
    {
      "day": 3,
      "route": "Sigiriya to Kandy",
      "description": "Explore the cultural character of Sigiriya to Kandy through Dambulla, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Dambulla Cave Temple",
        "Kandy dance (optional)",
        "Temple of the Tooth",
      ]
    },
    {
      "day": 4,
      "route": "Kandy to Nuwara Eliya",
      "description": "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Tea factory, Ramboda Falls and the views that make this region special.",
      "experiences": [
        "Tea factory",
        "Tea garden",
        "Ramboda Falls",
        "Nuwara Eliya city tour",
      ]
    },
    {
      "day": 5,
      "route": "Nuwara Eliya to Ella",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Nine Arch Bridge and a relaxed, unhurried travel day.",
      "experiences": [
        "Scenic train journey(Nanu Oya to Demodara)",
        "Little Adam's Peak",
      ]
    },
    {
      "day": 6,
      "route": "Ella to Mirissa",
      "description": "Experience Sri Lanka's coast at an easy pace, with time for Ravana Falls, Beach time and comfortable private travel throughout the day.",
      "experiences": [
        "Nine Arch Bridge ,Rawana Water Falls",
        "Rest on the Beach ",
      ]
    },
    {
      "day": 7,
      "route": "Mirissa to Negombo",
      "description": "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
      "experiences": [
        "Galle Fort,",
        "Madu River safari",
        "Turtle farm visit",
        "Back to colombo air port",
        "End of the journey",
      ]
    }
  ]
};

const packageDetails = {
  "included": [
    "Private air-conditioned vehicle and chauffeur for the classic island route.",
    "Airport meet-and-greet and final airport transfer shown in the itinerary.",
    "Flexible driving between Sigiriya, Kandy, Ella, Mirissa and Negombo.",
    "Fuel, expressway tolls and vehicle parking for the stated route."
  ],
  "excluded": [
    "Accommodation and hotel meals, unless stated in your written quotation.",
    "Elephant-safari jeep and park entry, Madu River boat safari and other optional activities.",
    "Admission to Sigiriya, Polonnaruwa, Dambulla, temples and Galle Fort attractions.",
    "International flights, visa, travel insurance and personal expenses."
  ]
};

export default { tour, packageDetails } satisfies RoundTourFile;
