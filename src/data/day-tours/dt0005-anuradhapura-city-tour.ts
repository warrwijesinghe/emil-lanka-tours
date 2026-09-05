import type { DayTourFile } from "../day-tour-files";

const tour = {
  id: "DT0005",
  slug: "anuradhapura-city-tour",
  title: "Anuradhapura City Tour",
  durationLabel: "1 Day",
  duration: "Approximately 5,6 hours",
  shortDescription:
    "Explore Anuradhapura ancient ruins and sacred sites, with an optional Mihintale sunset.",
  description:
    "A private heritage day through Sri Lanka’s first ancient capital, paced around the places that matter most to you.",
  mainImageUrl: "/images/day-tours/dt0005-anuradhapura-city-tour.webp",
  imageAlt: "Anuradhapura ancient city",
  categories: ["Heritage", "Culture"],
  highlights: ["Ancient city", "Sri Maha Bodhi", "Mihintale"],
  destinations: [{ name: "Anuradhapura", slug: "anuradhapura" }],
  destinationsCovered: [
    "Anuradhapura Ancient secret City",
    "Sri Maha Bodhi Tree",
    "Ruwanwelisaya",
    "Moon stone", 
    "Twins pond",
    "Guard stone", 
    "Samadhi stupa", 
    "Abayagiriya viharaya",
    "Jetavanarama viharaya",

    "Mihintale (optional)",
  ],
  pickupLocations: ["Anuradhapura hotels", "Mihintale area hotels"],
  dropLocations: ["Your Anuradhapura hotel", " Air port road hotels anuradhapura"],
  included: [
    "Private air-conditioned vehicle and chauffeur",
    "Fuel, parking and route planning",
    "Hotel pickup and drop-off in the stated area",
  ],
  excluded: [
    "Site admission tickets",
    "Meals and refreshments",
    "Personal expenses and guide services unless requested",
  ],
  experiences: [
    "Walk through the ancient capital",
    "Visit sacred Buddhist monuments",
    "See the Sri Maha Bodhi",
    "Add Mihintale for a hilltop view",
  ],
  importantInformation: [
    "Dress modestly for temples; shoulders and knees must be covered.",
    "Shoes must be removed at religious sites.",
    "Start early to avoid the midday heat.",
    "Ticket rules and prices can change; Emil confirms current official rates before travel.",
  ],
  reasonsToBook: [
    "See Anuradhapura with a flexible private pace",
    "Combine major monuments without navigating between sites yourself",
    "Add Mihintale when time and weather allow",
  ],
  itinerary: [
    {
      time: "Morning",
      title: "Hotel pickup and sacred city",
      description: "Begin with Sri Maha Bodhi and the principal stupas.",
    },
    {
      time: "Midday",
      title: "Ancient monuments",
      description:
        "Continue through the archaeological city with time for photographs and breaks.",
    },
    {
      time: "Afternoon",
      title: "Mihintale or hotel drop-off",
      description: "Visit Mihintale if selected, then return to your hotel.",
    },
  ],
  ticketInformation: [
    {
      location: "Anuradhapura Ancient City archaeological sites",
      ticketRequired: true,
      ticketPrice:
        "Approx. US$25 for foreign visitors; official rates may change.",
      notes: "Payable at the official ticket counter.",
    },
    {
      location: "Sri Maha Bodhi and public areas",
      ticketRequired: false,
      ticketPrice: "No entry ticket required.",
      notes: "Temple donations are optional.",
    },
    {
      location: "Mihintale",
      ticketRequired: true,
      ticketPrice:
        "Approx. US$30 for foreign visitors; official rates may change.",
    },
  ],
  seo: {
    title: "Anuradhapura Private Day Tour | Chauffeur Emil",
    description:
      "Explore Anuradhapura ancient sacred city with a private chauffeur.",
  },
};
export default { tour } satisfies DayTourFile;
