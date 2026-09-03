import type { RoundTourFile } from "../tours";

/**
 * 10-Day Sri Lanka East Coast, Safari & Culture Tour
 * Keep the itinerary, inclusions and exclusions together for easy editing.
 */
const tour = {
  "id": "ELT-RT-006",
  "sourceReference": "IMG_20260814_0001 (1).pdf",
  "title": "10-Day Sri Lanka East Coast, Safari & Culture Tour",
  "durationLabel": "10 Days 9 Nights",
  "shortDescription": "A compact adventure route focused on the east coast, Kumana wildlife, cultural landmarks and hill country.",
  "routePoints": [
    "Colombo Airport",
    "Arugam Bay",
    "Kumana",
    "Ella",
    "Kandy",
    "Sigiriya"
  ],
  "highlights": [
    "Arugam Bay & Kumana",
    "Ella hikes & Nine Arch",
    "Kandy cultural evening",
    "Sigiriya elephant safari"
  ],
  "highlightsIntro": "Ideal for active travellers: surf-country atmosphere, Kumana wildlife, Ella walks and the Cultural Triangle.",
  "itinerary": [
    {
      "day": 1,
      "route": "Colombo Airport to mirissa beach",
      "description": "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Arugam Bay, with time to enjoy Kumana National Park safari.",
      "experiences": [
        "Madu river boat safari",
        "Galle fort",
      ]
    },
    {
      "day": 2,
      "route": "Mirissa ",
      "description": "Experience Sri Lanka's coast at an easy pace, with time for Beach and local experiences and comfortable private travel throughout the day.",
      "experiences": [
        "Beach and local experiences",
        "Turtel fsrm visit", 
        "Waligama beach",
      ]
    },
    {
      "day": 3,
      "route": "Mirissa to udawlawe park",
      "description": "Explore the cultural character of Arugam Bay to Ella through Scenic hill-country drive, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Elephint trnssit home",
        "Safari udawalawe park",
      ]
    },
    {
      "day": 4,
      "route": "Udawalawe to Arugambay beach",
      "description": "Enjoy the changing hill-country scenery along Ella, with time for Nine Arch Bridge, Little Adam’s Peak and a relaxed, unhurried travel day.",
      "experiences": [
        "Rest on the beach",
        
      ]
    },
    {
      "day": 5,
      "route": "Aragambay",
      "description": "Explore the cultural character of Ella to Kandy through Temple of the Tooth, Kandy dance, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "Kumana park safari",
        "Panama beach visit",
        "Crocodiles watching"
      ]
    },
    {
      "day": 6,
      "route": "Arugambay",
      "description": "Explore the cultural character of Kandy to Sigiriya through Dambulla, Village safari, with your private chauffeur keeping the day flexible around your interests.",
      "experiences": [
        "River safari",
        "Elephint rock",
      ]
    },
    {
      "day": 7,
      "route": "Arugambay to Ella",
      "description": "Spend the day close to Sri Lanka wildlife, with Lion Rock, Elephant safari planned around the best available timing and your preferred pace.",
      "experiences": [
        
        "Rawana water fall",
        "little Adams peack",
        "Nine arch brigde",
      ]
    },
    {
      "day": 8,
      "route": " Ella",
      "description": "Spend the day close to Sri Lanka wildlife, with Lion Rock, Elephant safari planned around the best available timing and your preferred pace.",
      "experiences": [
        "Lipton's Seat",
      ]
    },
    {
      "day": 9,
      "route": " Ella to negombo beach",
      "description": "Spend the day close to Sri Lanka wildlife, with Lion Rock, Elephant safari planned around the best available timing and your preferred pace.",
      "experiences": [
      "Rest on the beach",
      ]
    },
    {
      "day": 10,
      "route": "Air port drop",
      "description": "Spend the day close to Sri Lanka wildlife, with Lion Rock, Elephant safari planned around the best available timing and your preferred pace.",
      "experiences": [
      "End of the journey",
      ]
    }
  ]
}

const packageDetails = {
  "included": [
    "Private air-conditioned vehicle and chauffeur for the Arugam Bay, Ella, Kandy and Sigiriya route.",
    "Airport meet-and-greet shown on Day 1.",
    "Flexible driving for the hill-country journey and listed sightseeing stops.",
    "Fuel, expressway tolls and vehicle parking for the stated route."
  ],
  "excluded": [
    "Accommodation and hotel meals, unless stated in your written quotation.",
    "Kumana safari jeep and national-park entry fees.",
    "Temple, Dambulla, Sigiriya and village-safari admission fees.",
    "International flights, visa, travel insurance and personal expenses."
  ]
};

export default { tour, packageDetails } satisfies RoundTourFile;
