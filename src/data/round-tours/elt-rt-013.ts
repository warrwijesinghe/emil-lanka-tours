import type { RoundTourFile } from "../tours";

/**
 * 7-Day Sri Lanka Adventure: Rafting, Safari & Ella
 * Keep the itinerary, inclusions and exclusions together for easy editing.
 */
const tour = {
  "id": "ELT-RT-013",
  "sourceReference": "IMG_20260814_0004.pdf",
  "title": "7-Day Sri Lanka Adventure: Rafting & Safari",
  "durationLabel": "7 Days 6 Nights",
  "shortDescription": "A high-energy one-week adventure through ancient cities, Kitulgala, Ella, wildlife country and the south coast.",
  "routePoints": [
    "Colombo Airport",
    "Anuradhapura",
    "Sigiriya",
    "Kandy",
    "Kitulgala",
    "Ella",
    " udawalawe",
    "Mirissa",
    "Colombo Airport"
  ],
  "highlights": [
    "Ancient cities & Sigiriya",
    "Kitulgala white-water rafting",
    "Ella scenic train",
    "Udawalawe safari & Mirissa"
  ],
  "highlightsIntro": "A high-energy circuit for guests who want ancient cities, white-water rafting, mountain rail travel and a wildlife safari.",
  "itinerary": [
    {
      "day": 1,
      "route": "Colombo Airport to sigiriya",
      "description": "Explore the cultural character of Colombo Airport to Anuradhapura through Sacred City, Mihintale, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Dambulla cave temple ,Village safari",
        "Pidurangala Rock",
        ""
      ]
    },
    {
      "day": 2,
      "route": "  Sigiriya",
      "description": "Explore the cultural character of Anuradhapura to Sigiriya through Polonnaruwa, Elephant safari, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Polonnaruwa ruins",
        "Elephant safari"
      ]
    },
    {
      "day": 3,
      "route": "Sigiriya to Kandy",
      "description": "Explore the cultural character of Sigiriya to Kandy through Lion Rock, Dambulla, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Lion Rock",
        "Dambulla",
        "Temple of the Tooth"
      ]
    },
    {
      "day": 4,
      "route": "Kandy to Kitulgala",
      "description": "Follow the Kandy to Kitulgala route with time to experience White-water rafting, Ambuluwawa. Your private chauffeur can adjust the pace and stops around your interests.",
      "experiences": [
        "White-water rafting",
        
      ]
    },
    {
      "day": 5,
      "route": "Kitulgala to Ella",
      "description": "Enjoy the changing hill-country scenery along Kitulgala to Ella, with time for Devon and St Clair’s Falls, Nanu Oya to Demodara train and a relaxed, unhurried travel day.",
      "experiences": [
        "Devon and St Clair’s Water Falls",
        "Nanu Oya to Demodara train journey"
      ]
    },
    {
      "day": 6,
      "route": "Ella to Mirissa via Udawalawe",
      "description": "Spend the day close to Sri Lanka wildlife, with Udawalawe safari, Elephant Transit Home, Mirissa Beach planned around the best available timing and your preferred pace.",
      "experiences": [
        "Elephant Transit Home",
        "Mirissa Beach"
      ]
    },
    {
      "day": 7,
      "route": "Mirissa to Colombo Airport",
      "description": "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
      "experiences": [
        "Galle Fort",
        "Madu River safari",
        "Drop to colombo air port",
        "End of the tour",
      ]
    }
  ]
};

const packageDetails = {
  "included": [
    "Private air-conditioned vehicle and chauffeur for the adventure route from Anuradhapura to Mirissa.",
    "Airport meet-and-greet and final airport transfer shown in the itinerary.",
    "Flexible driving between ancient cities, Kitulgala, Ella, Udawalawe and the south coast.",
    "Fuel, expressway tolls and vehicle parking for the stated route."
  ],
  "excluded": [
    "Accommodation and hotel meals, unless stated in your written quotation.",
    "White-water rafting, safari jeep and national-park entry fees.",
    "Admission to heritage sites, temples and scenic-train tickets.",
    "International flights, visa, travel insurance and personal expenses."
  ]
};

export default { tour, packageDetails } satisfies RoundTourFile;
