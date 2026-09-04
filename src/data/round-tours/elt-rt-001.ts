import type { RoundTourFile } from "../tours";

/**
 * 14-Day Sri Lanka Grand Island Adventure
 * Keep the itinerary, inclusions and exclusions together for easy editing.
 */
const tour = {
  "id": "ELT-RT-001",
  "sourceReference": "RTO007 / IMG_20260813_0001.pdf",
  "title": "14-Day Sri Lanka Grand Island Adventure",
  "durationLabel": "14 Days 13 Nights",
  "shortDescription": "An adventurous island route that combines ancient cities, the east coast, hill country and the south coast.",
  "routePoints": [
    "Colombo Airport",
    "Sigiriya",
    "Pasikuda",
    "Mahiyanganaya",
    "Kandy",
    "Nuwara Eliya",
    "Ella",
    "Mirissa",
    "Negombo",
    " Airport drop",
  ],
  "highlights": [
    "Sigiriya & Dambulla rock climbing ",
    "Pasikuda Beach",
    "Nanu Oya to Demodara train journey",
    "Galle & south coast",
    "Vadda village (aborigines)",
    "Wildlife safari experiences,",
    " Ella rock climbing",
    " Pidurangala rock climbing ",
  ],
  "highlightsIntro": "From Sigiriya's ancient rock fortress to Pasikuda's calm coast, this route blends culture, rail scenery and southern beaches.",
  "itinerary": [
    {
      "day": 1,
      "route": "Colombo Airport to Sigiriya",
      "description": "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Sigiriya, with time to enjoy Dambulla Cave Temple, Pidurangala sunset.",
      "experiences": [
        "Dambulla Cave Temple",
        "Pidurangala sunset"
      ]
    },
    {
      "day": 2,
      "route": "Sigiriya",
      "description": "Spend the day close to Sri Lanka wildlife, with Lion Rock, Village safari, Elephant safari planned around the best available timing and your preferred pace.",
      "experiences": [
        "Lion Rock",
        "Village safari",
        " safari Kaudulla or Minneriya Park",
      ]
    },
    {
      "day": 3,
      "route": "Sigiriya to Pasikuda",
      "description": "Experience Sri Lanka's coast at an easy pace, with time for Polonnaruwa ruins, Pasikuda Beach and comfortable private travel throughout the day.",
      "experiences": [
        "Polonnaruwa ruins",
        "Pasikuda Beach"
      ]
    },
    {
      "day": 4,
      "route": "Pasikuda to Mahiyanganaya",
      "description": "Explore the cultural character of Pasikuda to Mahiyanganaya through Vedda Village, Sorabora Lake, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Vedda Village",
        "Sorabora Lake boat safari",
      ]
    },
    {
      "day": 5,
      "route": "Mahiyanganaya to Kandy via 18 Bend Road",
      "description": "Explore the cultural character of Mahiyanganaya to Kandy via 18 Bend Road through Temple of the Tooth, Kandy dance, gem & jewellery museum,, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Temple of the Tooth",
        "Kandy dance",
        "gem & jewellery museum,"
      ]
    },
    {
      "day": 6,
      "route": "Kandy to Nuwara Eliya",
      "description": "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Peradeniya botanical garden, Ramboda water Falls, Tea plantation and the views that make this region special.",
      "experiences": [
        "Peradeniya botanical garden",
        "Ramboda water Falls",
        "Tea plantation",
        " Tea factory,"
      ]
    },
    {
      "day": 7,
      "route": "Nuwara Eliya to Ella",
      "description": "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Nanu Oya to Demodara train and a relaxed, unhurried travel day.",
      "experiences": [
        "Nanu Oya to Demodara train journey",
      ]
    },
    {
      "day": 8,
      "route": "Ella ",
      "description": "Experience Sri Lanka's coast at an easy pace, with time for Galle Fort, Udawalawe Elephant Transit Home and comfortable private travel throughout the day.",
      "experiences": [
        "little Adam's Peak",
        "Nine Arch Bridge",
        "Ella rock"
      ]
    },
    {
      "day": 9,
      "route": "Ella",
      "description": "  Lipton tea estate ",
      "experiences": [
        "Lipton tea estate"
      ]
    },
    {
      "day": 10,
      "route": "Ella to Sinharaja Forest Deniyaya",
      "description": "Sinharaja Forest",
      "experiences": [
        "Elephant Transit Home visit",
        "Sinharaja Forest Deniyaya entry",
      ]
    },
    {
      "day": 11,
      "route": "Sinharaja Forest to Mirissa Beach",
      "description": " Sinharaja Forest",
      "experiences": [
        "Sinharaja Forest trekking (morning)",
      ]
    },
    {
      "day": 12,
      "route": "Mirissa beach",
      "description": " Mirissa beach",
      "experiences": [
        "galle fort,madu river safari,turtle conservation,tsunami museum"
      ]
    },
    {
      "day": 13,
      "route": "Mirissa to Negombo transfer",
      "description": "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
      "experiences": [
        "Fish Market"
      ]
    },
    {
      "day": 14,
      "route": "Negombo to Colombo Airport",
      "description": "Airport drop",
      "experiences": [
        "Good bye sri lanka, see you again"
      ]
    }
  ]
};

const packageDetails = {
  "included": [
    "Private air-conditioned vehicle and chauffeur for the full Grand Island route.",
    "Airport meet-and-greet and final airport transfer shown in the itinerary.",
    "Flexible driving between the Cultural Triangle, east coast, hill country and south coast.",
    "Fuel, expressway tolls and vehicle parking for the stated route."
  ],
  "excluded": [
    "Accommodation and hotel meals, unless stated in your written quotation.",
    "Entry tickets for heritage sites, museums and cultural performances.",
    "Safari jeeps, park entry, train tickets and optional activities such as whale watching.",
    "International flights, visa, travel insurance and personal expenses."
  ]
};

export default { tour, packageDetails } satisfies RoundTourFile;
