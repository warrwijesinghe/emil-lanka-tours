export interface RoundTour {
  id: string;
  sourceReference: string;
  title: string;
  durationLabel: string;
  shortDescription: string;
  routePoints: string[];
  highlights: string[];
  highlightsIntro: string;
  itinerary: {
    day: number;
    route: string;
    experiences: string[];
    description: string;
  }[];
}

/**
 * Round-tour editing guide
 *
 * Keep `id` unchanged: it is used in the tour URL and links across the site.
 * Update `title`, `durationLabel`, `shortDescription`, and `highlightsIntro` for guest-facing copy.
 * Keep `highlights` to the four strongest, itinerary-backed reasons to choose the tour.
 * Keep `routePoints` in the same order guests travel.
 * Each itinerary day is a named object, so fields can be edited independently.
 * `description` is the guest-facing copy shown for that day; edit it freely.
 */
export const roundTours: RoundTour[] = [
  {
    id: "ELT-RT-001",
    sourceReference: "RTO007 / IMG_20260813_0001.pdf",
    title: "14-Day Sri Lanka Grand Island Adventure",
    durationLabel: "14 Days 13 Nights",
    shortDescription:
      "An adventurous island route that combines ancient cities, the east coast, hill country and the south coast.",
    routePoints: [
      "Colombo Airport",
      "Sigiriya",
      "Pasikuda",
      "Mahiyanganaya",
      "Kandy",
      "Nuwara Eliya",
      "Ella",
      "Mirissa",
      "Negombo",
    ],
    highlights: [
      "Sigiriya & Dambulla",
      "Pasikuda Beach",
      "Nanuoya to demodara train journey",
      "Galle & south coast",
      "Vadda village (aborigines)",
      "Wildlife safari experiences",
    ],
    highlightsIntro:
      "From Sigiriya's ancient rock fortress to Pasikuda's calm coast, this route blends culture, rail scenery and southern beaches.",

    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Sigiriya",
        description:
          "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Sigiriya, with time to enjoy Dambulla Cave Temple, Pidurangala sunset.",
        experiences: [
          "Dambulla Cave Temple",
          "Pidurangala sunset",
        ],
      },
      {
        day: 2,
        route: "Sigiriya",
        description:
          "Spend the day close to Sri Lanka wildlife, with Lion Rock, Village safari, Elephant safari planned around the best available timing and your preferred pace.",
        experiences: [
          "Lion Rock",
          "Village safari",
          "Elephant safari",
        ],
      },
      {
        day: 3,
        route: "Sigiriya to Pasikuda",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Polonnaruwa ruins, Pasikuda Beach and comfortable private travel throughout the day.",
        experiences: [
          "Polonnaruwa ruins",
          "Pasikuda Beach",
        ],
      },
      {
        day: 4,
        route: "Pasikuda to Mahiyanganaya",
        description:
          "Explore the cultural character of Pasikuda to Mahiyanganaya through Vedda Village, Sorabora Lake, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Vedda Village",
          "Sorabora Lake",
        ],
      },
      {
        day: 5,
        route: "Mahiyanganaya to Kandy via 18 Bend Road",
        description:
          "Explore the cultural character of Mahiyanganaya to Kandy via 18 Bend Road through Temple of the Tooth, Kandy dance, gem & jevellery museum,, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Temple of the Tooth",
          "Kandy dance",
          "gem & jevellery museum,",
        ],
      },
      {
        day: 6,
        route: "Kandy to Nuwara Eliya",
        description:
          "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Peradeniya botanical garden, Ramboda water Falls, Tea plantation and the views that make this region special.",
        experiences: [
          "Peradeniya botanical garden",
          "Ramboda water Falls",
          "Tea plantation",
          " Tea factory,",
        ],
      },
      {
        day: 7,
        route: "Nuwara Eliya to Ella",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Nanu Oya to Demodara train and a relaxed, unhurried travel day.",
        experiences: [
          "Nanu Oya to Demodara train",
        ],
      },
      {
        day: 8,
        route: "Ella ",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Galle Fort, Udawalawe Elephant Transit Home and comfortable private travel throughout the day.",
        experiences: [
          "little Adam's Peak",
          "Nine Arch Bridge",
          "Ella rock",
        ],
      },
      {
        day: 9,
        route: "Ella",
        description:
          "  Lipton tea estate ",
        experiences: ["Lipton tea estate"
        ],
      },
      {
        day: 10,
        route: "Ella to singharaja forest daniyaya",
        description:
          "Singharaja forest",
        experiences: [
          "Elephint Transit Home visit",
          "Singharaja foresthotel",

        ],
      },
      {
        day: 11,
        route: "Singharaja forest to mirissa beach",
        description:
          " Singharaja forest",
        experiences: [
          "Singharaja forest traking",
        ],
      },
      {
        day: 12,
        route: "Mirissa beach", 
        description:
          " Mirissa beach",
        experiences: [
          "galle fort,madu river safari,tutle conservation,tsunami museum",
        ],
      },
      {
        day: 13,
        route: "Mirissa to Negombo transfer",
        description:
          "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
        experiences: [
          "Fish Market",
          
        ],
      },
      {
        day: 14,
        route: "Negombo to Colombo Airport",
        description: "Airport drop",
        experiences: ["Good bye sri lanka, see you again",]
      },
    ],
  },
  {
    id: "ELT-RT-002",
    sourceReference: "RTO008 / IMG_20260813_0001 (1).pdf",
    title: "14-Day Sri Lanka Wildlife, Culture & Coast Tour",
    durationLabel: "14 Days 13 Nights",
    shortDescription:
      "A culture, wildlife and beach journey with the corrected route from the airport through Mirissa, hill country and the ancient cities.",
    routePoints: [
      "Arrival at Colombo Airport",
      "Mirissa",
      "Udawalawe",
      "Ella",
      "Nuwara Eliya",
      "Kandy",
      "Mahiyanganaya",
      "Sigiriya",
      "Anuradhapura",
      "Negombo",
    ],
    highlights: [
      "Mirissa whale watching",
      "Madu river safari & turtle conservation",
      "Udawalawe safari",
      "Ella to damodara train journey",
      " Nine Arch Bridge",
      "Englnd colonial hill country ",
      "Kandy & Temple of the Tooth",
      "Waterfalls experiences",
      "wildlife safari experiences",
      "Ancient capitals & Sigiriya",
      "Anuradhapura first capital in sri lanka",
      
      
      
    ],
    highlightsIntro:
      "A coast-to-highlands journey pairing Mirissa marine life and Udawalawe wildlife with Ella views and ancient capitals.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Mirissa",
        description:
          "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Mirissa, with time to enjoy Mirissa Beach.",
        experiences: [
          "Mirissa Beach",
          "rest and relax on the beach",
        ],
      },
      {
        day: 2,
        route: "Mirissa",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Optional whale watching, Weligama Fish Market and comfortable private travel throughout the day.",
        experiences: [
          "Galle Fort",
          "Madu River boat safari",
          "Turtle farm conservation",
          "Mitiyagoda moonstone mine",
          "Tsunami Museum",
          
        ],
      },
      {
        day: 3,
        route: "Mirissa",
        description:
          "Explore the cultural character of Mirissa through Madu River safari, Turtle conservation, Tsunami Museum, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Blue whale watching",
          "snake farm ",
          
        ],
      },
      {
        day: 4,
        route: "Mirissa to Udawalawe",
        description:
          "Spend the day close to Sri Lanka wildlife, with Elephant Transit Home, Udawalawe safari planned around the best available timing and your preferred pace.",
        experiences: [
          "Elephant Transit Home",
          "Udawalawe safari",
        ],
      },
      {
        day: 5,
        route: "Udawalawe to Ella",
        description:
          " enjoy Buduruwagala Temple, Rawana waterfall , Nine ArchBridge",
         
        experiences: [
          "Nine Arch Bridge",
        ]
      },
      {
        day: 6,
        route: "Ella",
        description:
          "Enjoy the changing hill-country scenery along Ella, with time for Lipton’s Seat, Little Adam’s Peak and a relaxed, unhurried travel day.",
        experiences: [
          "Lipton’s Seat",
          "Little Adam’s Peak",
          "Ella rock"
        ],
      },
      {
        day: 7,
        route: "Ella to Nuwara Eliya",
        description:
          "Enjoy the changing hill-country scenery along Ella to Nuwara Eliya, with time for Ella to Nanu Oya train, Nuwara Eliya city tour and a relaxed, unhurried travel day.",
        experiences: [
          "Ella to Nanu Oya train journey",
          "Nuwara Eliya city tour",
          "fruit market",
          "old post office",
          "Gargari Lake",
        ],
      },
      {
        day: 8,
        route: "Nuwara Eliya to Kandy",
        description:
          "Explore the cultural character of Nuwara Eliya to Kandy through Horton Plains option, Tea country, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Horton Plains (option)",
          "Tea garden tour",
          "Tea factory visit",
          "kandy dance show",
          "fire work show",
          "Temple of the Tooth",
        ],
      },
      {
        day: 9,
        route: "Kandy to Mahiyanganaya",
        description:
          "Explore the cultural character of Kandy to Mahiyanganaya through Vedda Village, Sorabora Lake, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Vedda Village (aborigines),"   ]
      },  
      {
        day: 10,
        route: "Mahiyanganaya to Sigiriya",
        description:
          "Explore the cultural character of Mahiyanganaya to Sigiriya through Polonnaruwa, Habarana Cultural Show, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Polonnaruwa ruins",
          "Mineriya or kudulla national park safari",
          
        ],
      },
      {
        day: 11,
        route: "Sigiriya",
        description:
          "Follow the Sigiriya route with time to experience Ritigala, Village safari, Pidurangala. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          
          "Village safari",
          "Pidurangala rock climbing",
          "culturaldance show",
          "Auyurveda treatment. (optional)",
        ],
      },
      {
        day: 12,
        route: " Sigiriya to Anuradhapura",
        description:
          "Explore the cultural character of Sigiriya to Anuradhapura through Lion Rock, Mihintale, Ancient City, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Lion Rock vist morning",
          "After breakfast visit",
          "Mihintale",
          "Ancient City tour",
        ],
      },
      {
        day: 13,
        route: "Anuradhapura to Negombo",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Yapahuwa, Hamilton Canal and comfortable private travel throughout the day.",
        experiences: [
          "Willpattu National Park half day safari",
          "Negombo beach",
        ],
      },
      {
        day: 14,
        route: "Negombo to Airport drop ",
        description:
          "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
        experiences: [
          
          "Airport transfer",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-003",
    sourceReference: "RTO009 / IMG_20260813_0002.pdf",
    title: "14-Day Sri Lanka East Coast & Hill Country Tour",
    durationLabel: "14 Days 13 Nights",
    shortDescription:
      "A heritage-to-coast exploration revised to begin at Colombo Airport and move through Anuradhapura, Trincomalee, Sigiriya and hill country.",
    routePoints: [
      " Arrival at Colombo Airport",
      " Anuradhapura",
      "wilpattu National Park",
      "Trincomalee",
      "Sigiriya",
      "Minneriya National Park",
      "Kandy",
      "Nuwara Eliya",
      "Ella",
      "Train journey from Nanu Oya to Demodara",
      "udawalwe elephint transit home",
      "Mirissa",
      "Galle fort"
    
    ],
    highlights: [
      "Wilpattu leopard safari",
      "Trincomalee & Nilaveli",
      "Sigiriya & Kandy",
      "Ella to train journey",
      "Udawalawe elephant transit home",
      "Mirissa & Galle fort",
    ],
    highlightsIntro:
      "Travel from Wilpattu wild landscapes to Trincomalee beaches, then across Sri Lanka cultural heartland to Ella and Galle.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Anuradhapura",
        description:
          "Follow the Colombo Airport to Anuradhapura route with time to experience Sacred City, Mihintale. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Sacred City anuradhapura",
          
          ""
        ],
      },
      {
        day: 2,
        route: "Anuradhapura",
        description:
          "Spend the day close to Sri Lanka wildlife, with Wilpattu National Park planned around the best available timing and your preferred pace.",
        experiences: [
          "Wilpattu National Park full day safari",
        ],
      },
      {
        day: 3,
        route: "Anuradhapura to Trincomalee",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Hot Wells, Koneswaram Temple and comfortable private travel throughout the day.",
        experiences: [
          "Hot water Wells",
          "Koneswaram Temple",
          "Frederick fort",
          "Mihintale rock climbing",
          ""
        ],
      },
      {
        day: 4,
        route: "Trincomalee",
        description:
          "Spend the day close to Sri Lanka wildlife, with Dolphin watching, Nilaveli Beach planned around the best available timing and your preferred pace.",
        experiences: [
          "Dolphin watching",
          "Nilaveli Beach",
          "Snorkeling",
        ],
      },
      {
        day: 5,
        route: "Trincomalee",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Marble Beach, Kinniya Fish Market and comfortable private travel throughout the day.",
        experiences: [
          "Marble Beach",
          "Kinniya Fish Market",
        ],
      },
      {
        day: 6,
        route: "Trincomalee to Sigiriya",
        description:
          "Explore the cultural character of Trincomalee to Sigiriya through Village safari, Pidurangala, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Village safari",
          "Curture dance show",
          
        ],
      },
      {
        day: 7,
        route: "Sigiriya",
        description:
          "Follow the Sigiriya route with time to experience Lion Rock, Ayurveda, Elephant safari. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Lion Rock",
          "Ayurveda treatment(optional)",
          "Elephant safari(kudulla or minneriya national park)",
        ],
      },
      {
        day: 8,
        route: "Sigiriya to Kandy",
        description:
          "Explore the cultural character of Sigiriya to Kandy through Dambulla, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Dambulla cave temple",
          "Nalanda gedege",
          "Temple of the Tooth",
          

        ]
      },
      {
        day: 9,
        route: "Kandy to Nuwara Eliya",
        description:
          "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Tea factory, Ramboda Falls and the views that make this region special.",
        experiences: [
          "Tea factory",
          "Ramboda Falls",
          "Tea plantation",
          "Tea factory",
          "Nuwara Eliya city tour",
          "Gargari Lake",
          "old post office",
        ]
      },
      {
        day: 10,
        route: "Nuwara Eliya to Ella",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Nine Arch Bridge and a relaxed, unhurried travel day.",
        experiences: [
          "Train journey from Nanu Oya to Demodara",
          
        ],
      },
      {
        day: 11,
        route: "Ella to Mirissa",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Ravana Falls, Mirissa Beach and comfortable private travel throughout the day.",
        experiences: [ 
          "Rawana Falls",
          "Mirissa Beach",
          "nine arch bridge",
        ],
      },
      {
        day: 12,
        route: "Mirissa",
        description:
          "Follow the Mirissa route with time to experience Galle Fort, Madu River safari. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Galle Fort",
          "Madu River safari",
          "Turtle farm conservation",
          "Waligama Fish Market",
        ],
      },
      {
        day: 13,
        route: "Mirissa to Negombo",
        description:
          "Follow the Mirissa to Negombo route with time to experience Colombo city tour. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Colombo city tour",
          "Negombo beach",
        ],
      },
      {
        day: 14,
        route: "Negombo to katunayaka,bandaranayaka,international Airport",
        description:
          "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
        experiences: [
          "Airport transfer",
          "End of the tour",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-004",
    sourceReference: "RTO010 / IMG_20260813_0003.pdf",
    title: "21-Day Sri Lanka Heritage, Wildlife & Beach Tour",
    durationLabel: "21 Days 20 Nights",
    shortDescription:
      "An extended heritage, wildlife and beach itinerary from the airport through the north-east, cultural triangle, hill country and coast.",
    routePoints: [
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
    ],
    highlights: [
      "Wilpattu safari",
      "Trincomalee beaches",
      "Sigiriya & elephant safari",
      "Vedda village experience",
    ],
    highlightsIntro:
      "A longer private journey combining northern heritage, east-coast beach time, wildlife and meaningful local culture.",
    itinerary: [
      {
        day: 1,
        route: "Arrive at Colombo Airport to Anuradhapura",
        description:
          "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Anuradhapura, with time to enjoy Ancient City.",
        experiences: [
          "Ancient City",
        ],
      },
      {
        day: 2,
        route: "Anuradhapura",
        description:
          "Spend the day close to Sri Lanka wildlife, with Wilpattu safari planned around the best available timing and your preferred pace.",
        experiences: [
          "Wilpattu full day safari",
        ],
      },
      {
        day: 3,
        route: "Anuradhapura to Trincomalee",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Koneswaram Temple and comfortable private travel throughout the day.",
        experiences: [
          "Mihinthle temple",
          "Koneswaram hindu temple,"
          
          
        ],
      },
      {
        day: 4,
        route: "Trincomalee",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Dolphin watching, Nilaveli and comfortable private travel throughout the day.",
        experiences: [
          "Dolphin watching",
          "Snokileen",
        ],
      },
      {
        day: 5,
        route: "Trincomalee",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Marble Beach, Kinniya Fish Market and comfortable private travel throughout the day.",
        experiences: [
          "Marble Beach",
          "Kinniya Fish Market",
        ],
      },
      {
        day: 6,
        route: "Trincomalee to Sigiriya",
        description:
          "Follow the Trincomalee to Sigiriya route with time to experience Kaudulla Lake, Village safari, Habarana Cultural Show. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Polonnaruwa ruinc",
          "Kaudulla national park safari",
          "Back to sigiriya",
        
        
        ]
      },
      {
        day: 7,
        route: "Sigiriya",
        description:
          "Spend the day close to Sri Lanka wildlife, with Tuk-tuk tour, Elephant safari planned around the best available timing and your preferred pace.",
        experiences: [
          "Tuk-tuk journey around the rock",
          "pidurangala rock culmbing",
          "Culture dance show,"
        ]
      },
      {
        day: 8,
        route: "Sigiriya",
        description:
          "Explore the cultural character of Sigiriya through Ritigala, Ayurveda, Dambulla, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Ritigala",
          "Ayurveda",
          "Dambulla",
        ],
      },
      {
        day: 9,
        route: "Sigiriya to Mahiyanganaya",
        description:
          "Follow the Sigiriya to Mahiyanganaya route with time to experience Polonnaruwa. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Polonnaruwa",
        ],
      },
      {
        day: 10,
        route: "Mahiyanganaya",
        description:
          "Follow the Mahiyanganaya route with time to experience Vedda Village, Sorabora Lake. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Vedda Village",
          "Sorabora Lake",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-005",
    sourceReference: "IMG_20260814_0001.pdf",
    title: "14-Day Sri Lanka Culture, Tea Country & Safari Tour",
    durationLabel: "14 Days 13 Nights",
    shortDescription:
      "A revised heritage and nature route linking Sigiriya, Kandy, tea country, Ella, wildlife and the coast.",
    routePoints: [
      "Colombo Airport",
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Ella",
      "Udawalawe",
      "Mirissa",
    ],
    highlights: [
      "Sigiriya & Polonnaruwa",
      "Vedda village experience",
      "Kandy & tea country",
      "Ella scenic train",
    ],
    highlightsIntro:
      "Discover the Cultural Triangle, a Vedda village, Kandy living heritage and the tea-covered hills around Ella.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Sigiriya",
        description:
          "Explore the cultural character of Colombo Airport to Sigiriya through Dambulla Cave Temple, Pidurangala, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Dambulla Cave Temple",
          "Pidurangala",
        ],
      },
      {
        day: 2,
        route: "Sigiriya",
        description:
          "Spend the day close to Sri Lanka wildlife, with Lion Rock, Village safari, Elephant safari planned around the best available timing and your preferred pace.",
        experiences: [
          "Lion Rock",
          "Village safari",
          "Elephant safari",
        ],
      },
      {
        day: 3,
        route: "Sigiriya",
        description:
          "Follow the Sigiriya route with time to experience Ritigala Forest, Ayurveda, Habarana Cultural Show. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Ritigala Forest",
          "Ayurveda",
          "Habarana Cultural Show",
        ],
      },
      {
        day: 4,
        route: "Sigiriya to Polonnaruwa",
        description:
          "Follow the Sigiriya to Polonnaruwa route with time to experience Polonnaruwa ruins. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Polonnaruwa ruins",
        ],
      },
      {
        day: 5,
        route: "Polonnaruwa to Mahiyanganaya",
        description:
          "Explore the cultural character of Polonnaruwa to Mahiyanganaya through Vedda Village, Sorabora Lake, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Vedda Village",
          "Sorabora Lake",
        ],
      },
      {
        day: 6,
        route: "Mahiyanganaya to Kandy via 18 Bend Road",
        description:
          "Explore the cultural character of Mahiyanganaya to Kandy via 18 Bend Road through Kandy dance, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Kandy dance",
          "Temple of the Tooth",
        ],
      },
      {
        day: 7,
        route: "Kandy to Nuwara Eliya",
        description:
          "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Ramboda Falls, Tea factory and the views that make this region special.",
        experiences: [
          "Ramboda Falls",
          "Tea factory",
        ],
      },
      {
        day: 8,
        route: "Nuwara Eliya to Ella",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
        experiences: [
          "Nanuoya to Demodara train",
          "Hill country views",
        ],
      },
       {
        day: 9,
        route: "Ella",
        description:
          "   Scenic ",
        experiences: [
          "Liftion tea estate",
          "Little Adam's Peak",
        ],  
      },
       {
        day: 10,
        route: "Ella to singharaja forest daniyaya",
        description:
          " with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
        experiences: [
          "Kitul todi tree",
          
        ],
      },
       {
        day: 11,
        route: "Singharaja forest to mirissa beach",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
        experiences: [
          "Singharaja forest traking morning",
          "rest and relax on the beach",
          
        ],
      },
       {
        day: 12,
        route:"Mirissa ",
        description:"Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
        experiences: [
          "Galle fort",
          "Madu river boat safari",
          "Mitiyagoda moon stoin",
          "waligama fish markat,"
        ],
      },
       {
        day: 13,
        route: "Mirissa",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
        experiences: [
          "Blu whels watching",
          "Rest on the beach",
        ],
      },
       {
        day: 14,
        route: "Mirissa",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
        experiences: [
          "Rest on te beach",
          
        ],
      },
       {
        day: 15,
        route: "Mirissa to bandaranayaka internationl air port",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Hill country and a relaxed, unhurried travel day.",
        experiences: [
          "End of the tour",
          "Drop to air port",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-006",
    sourceReference: "IMG_20260814_0001 (1).pdf",
    title: "10-Day Sri Lanka East Coast, Safari & Culture Tour",
    durationLabel: "10 Days 9 Nights",
    shortDescription:
      "A compact adventure route focused on the east coast, Kumana wildlife, cultural landmarks and hill country.",
    routePoints: [
      "Colombo Airport",
      "Arugam Bay",
      "Kumana",
      "Ella",
      "Kandy",
      "Sigiriya",
    ],
    highlights: [
      "Arugam Bay & Kumana",
      "Ella hikes & Nine Arch",
      "Kandy cultural evening",
      "Sigiriya elephant safari",
    ],
    highlightsIntro:
      "Ideal for active travellers: surf-country atmosphere, Kumana wildlife, Ella walks and the Cultural Triangle.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Arugam Bay",
        description:
          "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Arugam Bay, with time to enjoy Kumana National Park safari.",
        experiences: [
          "Kumana National Park safari",
        ],
      },
      {
        day: 2,
        route: "Arugam Bay",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Beach and local experiences and comfortable private travel throughout the day.",
        experiences: [
          "Beach and local experiences",
        ],
      },
      {
        day: 3,
        route: "Arugam Bay to Ella",
        description:
          "Explore the cultural character of Arugam Bay to Ella through Scenic hill-country drive, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Scenic hill-country drive",
        ],
      },
      {
        day: 4,
        route: "Ella",
        description:
          "Enjoy the changing hill-country scenery along Ella, with time for Nine Arch Bridge, Little Adam’s Peak and a relaxed, unhurried travel day.",
        experiences: [
          "Nine Arch Bridge",
          "Little Adam’s Peak",
        ],
      },
      {
        day: 5,
        route: "Ella to Kandy",
        description:
          "Explore the cultural character of Ella to Kandy through Temple of the Tooth, Kandy dance, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Temple of the Tooth",
          "Kandy dance",
        ],
      },
      {
        day: 6,
        route: "Kandy to Sigiriya",
        description:
          "Explore the cultural character of Kandy to Sigiriya through Dambulla, Village safari, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Dambulla",
          "Village safari",
        ],
      },
      {
        day: 7,
        route: "Sigiriya",
        description:
          "Spend the day close to Sri Lanka wildlife, with Lion Rock, Elephant safari planned around the best available timing and your preferred pace.",
        experiences: [
          "Lion Rock",
          "Elephant safari",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-007",
    sourceReference: "IMG_20260814_0001 (2).pdf",
    title: "14-Day Sri Lanka Kalpitiya, Wildlife & Hill Country Tour",
    durationLabel: "14 Days 13 Nights",
    shortDescription:
      "A nature-led journey that begins in Kalpitiya and connects coastal wildlife, the Cultural Triangle and the hill country.",
    routePoints: [
      "Arrival at Colombo Airport",
      "Kalpitiya",
      "Anuradhapura",
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Ella",
      "South Coast",
    ],
    highlights: [
      "Kalpitiya dolphin watching",
      "Kite surfing",
      "Kandy tooth temple",
      "Tea country train to journey",
      "Sigiriya",
    ],
    highlightsIntro:
      "A nature-rich route from Kalpitiya marine life and Wilpattu wildlife through ancient cities, tea country and Ella.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Kalpitiya",
        description:
          "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Kalpitiya, with time to enjoy Coastal relaxation.",
        experiences: [
          "Coastal relaxation",
          "kite surfing",
        ],
      },
      {
        day: 2,
        route: "Kalpitiya",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Dolphin or whale watching and comfortable private travel throughout the day.",
        experiences: [
          "Dolphin or whale watching",
          "kite surfing",
        ],
      },
      {
        day: 3,
        route: "Kalpitiya to Mannarama",
        description:
          "Explore the cultural character of Kalpitiya to Anuradhapura through Sacred City, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Flamingo bird watching",
        ],
      },
      {
        day: 4,
        route: "Mannarama",
        description:
          "Spend the day close to Sri Lanka wildlife, with Wilpattu safari planned around the best available timing and your preferred pace.",
        experiences: [
          "Mannarama city tour",
        ],
      },
      {
        day: 5,
        route: "Mannarama to  anuradhapura",
        description:
          "Explore the cultural character of Anuradhapura to Sigiriya through Ritigala, Village safari, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Anuradhapura city tour",
          "Village safari",
          "Minneriya or kudula park safari",
          
        ],
      },
      {
        day: 6,
        route: "Sigiriya",
        description:
          "Follow the Sigiriya route with time to experience Lion Rock, Elephant safari. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Lion Rock",
          "cooking callass (optinal)",
          "Pidurangala rock",
          "Cultur dance show",
        ],
      },
      {
        day: 7,
        route: "Sigiriya to Kandy",
        description:
          "Explore the cultural character of Sigiriya to Kandy through Dambulla, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Dambulla cave temple",
          "Nalanda gedege",
          "Kandy dance",
          "Temple of the Tooth",
        ],
      },
      {
        day: 8,
        route: "Kandy to Nuwara Eliya",
        description:
          "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Tea estate, Ramboda Falls and the views that make this region special.",
        experiences: [
          "Tea estate",
          "Ramboda water falls",
          "Ramboda tea factory",
          "Tea garden",
          "Jam and juwalari shop",
          "Nuwaraeliya city tour",
        ],
      },
      {
        day: 9,
        route: "Nuwara Eliya to Ella",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Nine Arch Bridge and a relaxed, unhurried travel day.",
        experiences: [
          "Scenic train",
          "Nine Arch Bridge",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-008",
    sourceReference: "IMG_20260814_0001 (3).pdf",
    title: "21-Day Sri Lanka Ancient Cities, Safari & Beach Tour",
    durationLabel: "21 Days 20 Nights",
    shortDescription:
      "An extended itinerary combining Yapahuwa, the ancient capitals, beaches, wildlife and hill country.",
    routePoints: [
      "Colombo Airport",
      "Yapahuwa",
      "Anuradhapura",
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Ella",
      "South Coast",
    ],
    highlights: [
      "Yapahuwa & Anuradhapura",
      "Wilpattu safari",
      "Sigiriya elephant safari",
      "Tea country & Ella",
    ],
    highlightsIntro:
      "An unhurried grand journey through ancient kingdoms, safari country, Sigiriya and the central highlands.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Yapahuwa",
        description:
          "Explore the cultural character of Colombo Airport to Yapahuwa through Yapahuwa Temple, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Yapahuwa Temple",
        ],
      },
      {
        day: 2,
        route: "Yapahuwa to Anuradhapura",
        description:
          "Explore the cultural character of Yapahuwa to Anuradhapura through Sacred City, Mihintale, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Sacred City",
          "Mihintale",
        ],
      },
      {
        day: 3,
        route: "Anuradhapura",
        description:
          "Spend the day close to Sri Lanka wildlife, with Wilpattu safari planned around the best available timing and your preferred pace.",
        experiences: [
          "Wilpattu safari",
        ],
      },
      {
        day: 4,
        route: "Anuradhapura to Sigiriya",
        description:
          "Explore the cultural character of Anuradhapura to Sigiriya through Village safari, Pidurangala, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Village safari",
          "Pidurangala",
        ],
      },
      {
        day: 5,
        route: "Sigiriya",
        description:
          "Follow the Sigiriya route with time to experience Lion Rock, Elephant safari. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Lion Rock",
          "Elephant safari",
        ],
      },
      {
        day: 6,
        route: "Sigiriya to Kandy",
        description:
          "Explore the cultural character of Sigiriya to Kandy through Dambulla, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Dambulla",
          "Temple of the Tooth",
        ],
      },
      {
        day: 7,
        route: "Kandy to Nuwara Eliya",
        description:
          "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Tea factory, Ramboda Falls and the views that make this region special.",
        experiences: [
          "Tea factory",
          "Ramboda Falls",
        ],
      },
      {
        day: 8,
        route: "Nuwara Eliya to Ella",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Nine Arch Bridge and a relaxed, unhurried travel day.",
        experiences: [
          "Scenic train",
          "Nine Arch Bridge",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-009",
    sourceReference: "IMG_20260814_0002.pdf",
    title: "14-Day Classic Sri Lanka: Sigiriya, Ella & South Coast",
    durationLabel: "14 Days 13 Nights",
    shortDescription:
      "A full island circuit built around the Cultural Triangle, wildlife, hill country and coastal experiences.",
    routePoints: [
      "Colombo Airport",
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Ella",
      "Mirissa",
      "Negombo",
    ],
    highlights: [
      "Sigiriya & Polonnaruwa",
      "Kandy & tea country",
      "Ella scenic train",
      "Galle Fort & Madu River",
    ],
    highlightsIntro:
      "Sri Lanka classic first-time route: iconic rock fortresses, tea country, the Ella rail journey and the south coast.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Sigiriya",
        description:
          "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Sigiriya, with time to enjoy Cultural Triangle.",
        experiences: [
          "Cultural Triangle",
        ],
      },
      {
        day: 2,
        route: "Sigiriya",
        description:
          "Follow the Sigiriya route with time to experience Lion Rock, Polonnaruwa, Elephant safari. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "Lion Rock",
          "Polonnaruwa",
          "Elephant safari",
        ],
      },
      {
        day: 3,
        route: "Sigiriya to Kandy",
        description:
          "Explore the cultural character of Sigiriya to Kandy through Dambulla, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Dambulla",
          "Temple of the Tooth",
        ],
      },
      {
        day: 4,
        route: "Kandy to Nuwara Eliya",
        description:
          "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Tea factory, Ramboda Falls and the views that make this region special.",
        experiences: [
          "Tea factory",
          "Ramboda Falls",
        ],
      },
      {
        day: 5,
        route: "Nuwara Eliya to Ella",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Nine Arch Bridge and a relaxed, unhurried travel day.",
        experiences: [
          "Scenic train",
          "Nine Arch Bridge",
        ],
      },
      {
        day: 6,
        route: "Ella to Mirissa",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Ravana Falls, Beach time and comfortable private travel throughout the day.",
        experiences: [
          "Ravana Falls",
          "Beach time",
        ],
      },
      {
        day: 7,
        route: "Mirissa to Negombo",
        description:
          "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
        experiences: [
          "Galle Fort",
          "Madu River safari",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-010",
    sourceReference: "IMG_20260814_0002 (1).pdf",
    title: "14-Day Sri Lanka Ancient Cities & Hill Country Tour",
    durationLabel: "14 Days 13 Nights",
    shortDescription:
      "A nature and history route linking Anuradhapura, wildlife, the Cultural Triangle and the central highlands.",
    routePoints: [
      "Colombo Airport",
      "Anuradhapura",
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Ella",
      "South Coast",
    ],
    highlights: [
      "Anuradhapura & Mihintale",
      "Safari & village experience",
      "Sigiriya & Dambulla",
      "Tea country train to Ella",
    ],
    highlightsIntro:
      "A culture-and-nature route linking Anuradhapura sacred sites, safari, Sigiriya and the highland rail line.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Anuradhapura",
        description:
          "Explore the cultural character of Colombo Airport to Anuradhapura through Ancient City, Mihintale, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Ancient City",
          "Mihintale",
        ],
      },
      {
        day: 2,
        route: "Anuradhapura",
        description:
          "Spend the day close to Sri Lanka wildlife, with Safari planned around the best available timing and your preferred pace.",
        experiences: [
          "Safari",
        ],
      },
      {
        day: 3,
        route: "Anuradhapura to Sigiriya",
        description:
          "Explore the cultural character of Anuradhapura to Sigiriya through Ritigala, Village safari, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Ritigala",
          "Village safari",
        ],
      },
      {
        day: 4,
        route: "Sigiriya",
        description:
          "Explore the cultural character of Sigiriya through Lion Rock, Elephant safari, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Lion Rock",
          "Elephant safari",
        ],
      },
      {
        day: 5,
        route: "Sigiriya to Kandy",
        description:
          "Explore the cultural character of Sigiriya to Kandy through Dambulla, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Dambulla",
          "Temple of the Tooth",
        ],
      },
      {
        day: 6,
        route: "Kandy to Nuwara Eliya",
        description:
          "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Tea plantation, Ramboda Falls and the views that make this region special.",
        experiences: [
          "Tea plantation",
          "Ramboda Falls",
        ],
      },
      {
        day: 7,
        route: "Nuwara Eliya to Ella",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Scenic train, Nine Arch Bridge and a relaxed, unhurried travel day.",
        experiences: [
          "Scenic train",
          "Nine Arch Bridge",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-011",
    sourceReference: "IMG_20260814_0003 (1).pdf",
    title: "7-Day Sri Lanka Highlights: Sigiriya, Ella & Mirissa",
    durationLabel: "7 Days 6 Nights",
    shortDescription:
      "A relaxed one-week route from the airport through Sigiriya, Kandy, tea country, Ella and Mirissa.",
    routePoints: [
      "Colombo Airport",
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Ella",
      "Mirissa",
      "Colombo Airport",
    ],
    highlights: [
      "Sigiriya & elephant safari",
      "Kandy Temple & dance",
      "Horton Plains & train",
      "Mirissa, Galle & Madu River",
    ],
    highlightsIntro:
      "A relaxed first taste of Sri Lanka, from Sigiriya and Kandy to the hills of Ella and Mirissa coast.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Sigiriya",
        description:
          "Meet your private chauffeur on arrival and begin your Sri Lanka journey towards Colombo Airport to Sigiriya, with time to enjoy Pidurangala sunset.",
        experiences: [
          "Pidurangala sunset",
        ],
      },
      {
        day: 2,
        route: "Sigiriya",
        description:
          "Explore the cultural character of Sigiriya through Lion Rock, Elephant safari, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Lion Rock",
          "Elephant safari",
        ],
      },
      {
        day: 3,
        route: "Sigiriya to Kandy",
        description:
          "Explore the cultural character of Sigiriya to Kandy through Temple of the Tooth, Kandy dance, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Temple of the Tooth",
          "Kandy dance",
        ],
      },
      {
        day: 4,
        route: "Kandy to Nuwara Eliya",
        description:
          "Travel through Sri Lanka's cool central highlands on the Kandy to Nuwara Eliya route, pausing for Ramboda Falls, Tea factory and the views that make this region special.",
        experiences: [
          "Ramboda Falls",
          "Tea factory",
        ],
      },
      {
        day: 5,
        route: "Nuwara Eliya to Ella",
        description:
          "Enjoy the changing hill-country scenery along Nuwara Eliya to Ella, with time for Horton Plains, Scenic train and a relaxed, unhurried travel day.",
        experiences: [
          "Horton Plains",
          "Scenic train",
        ],
      },
      {
        day: 6,
        route: "Ella to Mirissa",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Little Adam’s Peak, Nine Arch Bridge, Mirissa Beach and comfortable private travel throughout the day.",
        experiences: [
          "Little Adam’s Peak",
          "Nine Arch Bridge",
          "Mirissa Beach",
        ],
      },
      {
        day: 7,
        route: "Mirissa to Colombo Airport",
        description:
          "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
        experiences: [
          "Madu River safari",
          "Galle Fort",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-012",
    sourceReference: "IMG_20260814_0003.pdf",
    title: "7-Day Sri Lanka East Coast, Ella & South Coast Tour",
    durationLabel: "7 Days 6 Nights",
    shortDescription:
      "A seven-day route covering Sigiriya, Pasikudah, Kandy, Ella, Mirissa and the west coast.",
    routePoints: [
      "Colombo Airport",
      "Sigiriya",
      "Pasikudah",
      "Kandy",
      "Ella",
      "Mirissa",
      "Negombo",
    ],
    highlights: [
      "Sigiriya & Dambulla",
      "Pasikudah Beach",
      "Kandy-to-Ella train",
      "Galle Fort & Madu River",
    ],
    highlightsIntro:
      "A compact island crossing combining Cultural Triangle heritage, Pasikudah beach, Ella scenery and the southern coast.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Sigiriya",
        description:
          "Explore the cultural character of Colombo Airport to Sigiriya through Dambulla Cave Temple, Pidurangala, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Dambulla Cave Temple",
          "Pidurangala",
        ],
      },
      {
        day: 2,
        route: "Sigiriya",
        description:
          "Spend the day close to Sri Lanka wildlife, with Lion Rock, Ritigala, Elephant safari planned around the best available timing and your preferred pace.",
        experiences: [
          "Lion Rock",
          "Ritigala",
          "Elephant safari",
        ],
      },
      {
        day: 3,
        route: "Sigiriya to Pasikudah",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Polonnaruwa, Pasikudah Beach and comfortable private travel throughout the day.",
        experiences: [
          "Polonnaruwa",
          "Pasikudah Beach",
        ],
      },
      {
        day: 4,
        route: "Pasikudah to Kandy",
        description:
          "Explore the cultural character of Pasikudah to Kandy through Vedda Village, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Vedda Village",
          "Temple of the Tooth",
        ],
      },
      {
        day: 5,
        route: "Kandy to Ella",
        description:
          "Enjoy the changing hill-country scenery along Kandy to Ella, with time for Nanu Oya to Demodara train, Nine Arch Bridge and a relaxed, unhurried travel day.",
        experiences: [
          "Nanu Oya to Demodara train",
          "Nine Arch Bridge",
        ],
      },
      {
        day: 6,
        route: "Ella to Mirissa",
        description:
          "Experience Sri Lanka's coast at an easy pace, with time for Ravana Falls, Buduruwagala, Turtle hatchery and comfortable private travel throughout the day.",
        experiences: [
          "Ravana Falls",
          "Buduruwagala",
          "Turtle hatchery",
        ],
      },
      {
        day: 7,
        route: "Mirissa to Negombo",
        description:
          "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
        experiences: [
          "Galle Fort",
          "Madu River safari",
        ],
      },
    ],
  },
  {
    id: "ELT-RT-013",
    sourceReference: "IMG_20260814_0004.pdf",
    title: "7-Day Sri Lanka Adventure: Rafting, Safari & Ella",
    durationLabel: "7 Days 6 Nights",
    shortDescription:
      "A high-energy one-week adventure through ancient cities, Kitulgala, Ella, wildlife country and the south coast.",
    routePoints: [
      "Colombo Airport",
      "Anuradhapura",
      "Sigiriya",
      "Kandy",
      "Kitulgala",
      "Ella",
      "Mirissa",
      "Colombo Airport",
    ],
    highlights: [
      "Ancient cities & Sigiriya",
      "Kitulgala white-water rafting",
      "Ella scenic train",
      "Udawalawe safari & Mirissa",
    ],
    highlightsIntro:
      "A high-energy circuit for guests who want ancient cities, white-water rafting, mountain rail travel and a wildlife safari.",
    itinerary: [
      {
        day: 1,
        route: "Colombo Airport to Anuradhapura",
        description:
          "Explore the cultural character of Colombo Airport to Anuradhapura through Sacred City, Mihintale, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Sacred City",
          "Mihintale",
        ],
      },
      {
        day: 2,
        route: "Anuradhapura to Sigiriya",
        description:
          "Explore the cultural character of Anuradhapura to Sigiriya through Polonnaruwa, Elephant safari, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Polonnaruwa",
          "Elephant safari",
        ],
      },
      {
        day: 3,
        route: "Sigiriya to Kandy",
        description:
          "Explore the cultural character of Sigiriya to Kandy through Lion Rock, Dambulla, Temple of the Tooth, with your private chauffeur keeping the day flexible around your interests.",
        experiences: [
          "Lion Rock",
          "Dambulla",
          "Temple of the Tooth",
        ],
      },
      {
        day: 4,
        route: "Kandy to Kitulgala",
        description:
          "Follow the Kandy to Kitulgala route with time to experience White-water rafting, Ambuluwawa. Your private chauffeur can adjust the pace and stops around your interests.",
        experiences: [
          "White-water rafting",
          "Ambuluwawa",
        ],
      },
      {
        day: 5,
        route: "Kitulgala to Ella",
        description:
          "Enjoy the changing hill-country scenery along Kitulgala to Ella, with time for Devon and St Clair’s Falls, Nanu Oya to Demodara train and a relaxed, unhurried travel day.",
        experiences: [
          "Devon and St Clair’s Falls",
          "Nanu Oya to Demodara train",
        ],
      },
      {
        day: 6,
        route: "Ella to Mirissa via Udawalawe",
        description:
          "Spend the day close to Sri Lanka wildlife, with Udawalawe safari, Elephant Transit Home, Mirissa Beach planned around the best available timing and your preferred pace.",
        experiences: [
          "Udawalawe safari",
          "Elephant Transit Home",
          "Mirissa Beach",
        ],
      },
      {
        day: 7,
        route: "Mirissa to Colombo Airport",
        description:
          "Enjoy a relaxed final morning before your private chauffeur provides a comfortable airport transfer, timed around your flight.",
        experiences: [
          "Galle Fort",
          "Madu River safari",
        ],
      },
    ],
  },
];
