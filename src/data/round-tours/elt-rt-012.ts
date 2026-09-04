import type { RoundTourFile } from "../tours";

/**
 * 7-Day Sri Lanka East Coast, Ella & South Coast Tour
 * Keep the itinerary, inclusions and exclusions together for easy editing.
 */
const tour = {
  "id": "ELT-RT-012",
  "sourceReference": "IMG_20260814_0003.pdf",
  "title": "7-Day Sri Lanka East Coast, Ella & South Coast Tour",
  "durationLabel": "7 Days 6 Nights",
  "shortDescription": "A seven-day route covering Sigiriya, Pasikudah, Kandy, Ella, Mirissa and the west coast.",
  "routePoints": [
    "Colombo Airport",
    "Sigiriya",
    "Pasikudah",
    "Kandy",
    "Ella",
    "Mirissa",
    "Negombo drop.",
  ],
  "highlights": [
    "Sigiriya & Dambulla",
    "Pasikudah Beach",
    "Kandy-to-Ella train",
    "Galle Fort & Madu River"
  ],
  "highlightsIntro": "A compact island crossing combining Cultural Triangle heritage, Pasikudah beach, Ella scenery and the southern coast.",
  "itinerary": [
    {
      "day": 1,
      "route": "Colombo Airport to Sigiriya",
      "description": "Explore the cultural character of Colombo Airport to Sigiriya through Dambulla Cave Temple, Pidurangala, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Dambulla Cave Temple",
        "Pidurangala rock ",
      ]
    },
    {
      "day": 2,
      "route": "Sigiriya",
      "description": "Spend the day close to Sri Lanka wildlife, with Lion Rock, Ritigala, Elephant safari planned around the best available timing and your preferred pace.",
      "experiences": [
        "Lion Rock",
        "Village safari",
        "Elephant safari",
      ]
    },
    {
      "day": 3,
      "route": "Sigiriya to Pasikudah beach",
      "description": "Experience Sri Lanka's coast at an easy pace, with time for Polonnaruwa, Pasikudah Beach and comfortable private travel throughout the day.",
      "experiences": [
        "Polonnaruwa ruins",
        "Pasikudah Beach"
      ]
    },
    {
      "day": 4,
      "route": "Pasikudah to Kandy",
      "description": "Explore the cultural character of Pasikudah to Kandy through Vedda Village, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "18 bend road to kandy",
        "Kandy dance",
        "Temple of the Tooth",
      ]
    },
    {
      "day": 5,
      "route": "Kandy to Ella",
      "description": "Enjoy the changing hill-country scenery along Kandy to Ella, with time for Nanu Oya to Demodara train, Nine Arch Bridge and a relaxed, unhurried travel day.",
      "experiences": [
        " Kandy to Demodara train journey",
        "Nine Arch Bridge"
      ]
    },
    {
      "day": 6,
      "route": "Ella to Mirissa",
      "description": "Experience Sri Lanka's coast at an easy pace, with time for Ravana Falls, Buduruwagala, Turtle hatchery and comfortable private travel throughout the day.",
      "experiences": [
        "Rawana water Fall",
        "Buduruwagala temple",
        "Mirissa beach ",
      ]
    },
    {
      "day": 7,
      "route": "Mirissa to Negombo",
      "description": "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
      "experiences": [
        "Galle Fort",
        "Madu River safari",
        "Turtle farm visit",
        "Negombo beach hotel",
        "End of the journey",
      ]
    }
  ]
};

const packageDetails = {
  "included": [
    "Private air-conditioned vehicle and chauffeur for the Sigiriya, Pasikudah, Ella and south-coast route.",
    "Airport meet-and-greet shown on Day 1 and the Negombo transfer shown on Day 7.",
    "Flexible driving between the Cultural Triangle, Pasikudah, Kandy, Ella and Mirissa.",
    "Fuel, expressway tolls and vehicle parking for the stated route."
  ],
  "excluded": [
    "Accommodation and hotel meals, unless stated in your written quotation.",
    "Elephant-safari jeep and park entry, Madu River boat safari and turtle-hatchery fees.",
    "Admission to Dambulla, Sigiriya, Polonnaruwa, temples and other attractions.",
    "Train tickets, international flights, visa, travel insurance and personal expenses."
  ]
};

export default { tour, packageDetails } satisfies RoundTourFile;
