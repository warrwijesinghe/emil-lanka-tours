import type { RoundTourFile } from "../tours";

/**
 * 14-Day Sri Lanka Culture, Tea Country & Safari Tour
 * Keep the itinerary, inclusions and exclusions together for easy editing.
 */
const tour = {
  "id": "ELT-RT-005",
  "sourceReference": "IMG_20260814_0001.pdf",
  "title": "14-Day Sri Lanka Culture, Tea Country & Safari Tour",
  "durationLabel": "14 Days 13 Nights",
  "shortDescription": "A revised heritage and nature route linking Sigiriya, Kandy, tea country, Ella, wildlife and the coast.",
  "routePoints": [
    "Colombo Airport",
    "Sigiriya",
    "Kandy",
    "Nuwara Eliya",
    "Ella",
    "Udawalawe",
    "Mirissa"
  ],
  "highlights": [
    "Sigiriya & Polonnaruwa",
    "Vedda village experience",
    "Kandy & tea country",
    "Ella scenic train"
  ],
  "highlightsIntro": "Discover the Cultural Triangle, a Vedda village, Kandy living heritage and the tea-covered hills around Ella.",
  "itinerary": [
    {
      "day": 1,
      "route": "Colombo Airport to Sigiriya",
      "description": "Explore the cultural character of Colombo Airport to Sigiriya through Dambulla Cave Temple, Pidurangala, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Dambulla Cave Temple",
        "Pidurangala rock vist nice sun sat",
      ]
    },
    {
      "day": 2,
      "route": "Sigiriya",
      "description": "Spend the day close to Sri Lanka wildlife, with Lion Rock, Village safari, Elephant safari planned around the best available timing and your preferred pace.",
      "experiences": [
        "Lion Rock",
        "Village safari",
        "safari kaudulla or minneriya park",
      ]
    },
    {
      "day": 3,
      "route": "Sigiriya",
      "description": "Follow the Sigiriya route with time to experience Ritigala Forest, Ayurveda, Habarana Cultural Show. Your private chauffeur can adjust the pace and stops around your interests.",
      "experiences": [
        "Ritigala Forest",
        "Ayurveda treatment",
        "Habarana Cultural Show"
      ]
    },
    {
      "day": 4,
      "route": "Sigiriya to Polonnaruwa",
      "description": "Follow the Sigiriya to Polonnaruwa route with time to experience Polonnaruwa ruins. Your private chauffeur can adjust the pace and stops around your interests.",
      "experiences": [
        "Polonnaruwa ruins"
      ]
    },
    {
      "day": 5,
      "route": "Polonnaruwa to Mahiyanganaya",
      "description": "Explore the cultural character of Polonnaruwa to Mahiyanganaya through Vedda Village, Sorabora Lake, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Vedda Village",
        "Sorabora Lake"
      ]
    },
    {
      "day": 6,
      "route": "Mahiyanganaya to Kandy via 18 Bend Road",
      "description": "Explore the cultural character of Mahiyanganaya to Kandy via 18 Bend Road through Kandy dance, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Kandy dance",
        "Temple of the Tooth"
      ]
    },
    {
      "day": 7,
      "route": "Kandy to Nuwara Eliya",
      "description": "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Ramboda Falls, Tea factory and the views that make this region special.",
      "experiences": [
        "Ramboda Falls",
        "Tea factory"
      ]
    },
    {
      "day": 8,
      "route": "Nuwara Eliya to Ella",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
      "experiences": [
        "Nanuoya to Demodara train",
        "Hill country views"
      ]
    },
    {
      "day": 9,
      "route": "Ella",
      "description": "   Scenic ",
      "experiences": [
        "Liftion tea estate",
        "Little Adam's Peak"
      ]
    },
    {
      "day": 10,
      "route": "Ella to singharaja forest daniyaya",
      "description": " with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
      "experiences": [
        "Kitul todi tree"
      ]
    },
    {
      "day": 11,
      "route": "Singharaja forest to mirissa beach",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
      "experiences": [
        "Singharaja forest traking morning",
        "rest and relax on the beach"
      ]
    },
    {
      "day": 12,
      "route": "Mirissa ",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
      "experiences": [
        "Galle fort",
        "Madu river boat safari",
        "Mitiyagoda moon stoin",
        "waligama fish markat,"
      ]
    },
    {
      "day": 13,
      "route": "Mirissa",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
      "experiences": [
        "Blu whels watching",
        "Rest on the beach"
      ]
    },
    {
      "day": 14,
      "route": "Mirissa",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
      "experiences": [
        "Rest on te beach"
      ]
    },
    {
      "day": 15,
      "route": "Mirissa to bandaranayaka internationl air port",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
      "experiences": [
        "End of the tour",
        "Drop to air port"
      ]
    }
  ]
};

const packageDetails = {
  "included": [
    "Private air-conditioned vehicle and chauffeur for the Culture, Tea Country and Safari route.",
    "Airport meet-and-greet shown on Day 1.",
    "Flexible driving through Sigiriya, Polonnaruwa, Kandy and the central highlands.",
    "Fuel, expressway tolls and vehicle parking for the stated route."
  ],
  "excluded": [
    "Accommodation and hotel meals, unless stated in your written quotation.",
    "Site admission, village activities, cultural-show and Ayurveda charges.",
    "Safari jeep and park entry fees, plus scenic-train tickets.",
    "International flights, visa, travel insurance and personal expenses."
  ]
};

export default { tour, packageDetails } satisfies RoundTourFile;
