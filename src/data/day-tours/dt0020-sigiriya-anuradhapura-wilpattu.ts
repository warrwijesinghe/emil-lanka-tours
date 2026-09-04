import type { DayTourFile } from "../day-tour-files";

const tour = {
  id: "DT0020",
  slug: "sigiriya-to-anuradhapura-and-wilpattu-safari",
  title: "Sigiriya, Anuradhapura and Wilpattu Safari",
  durationLabel: "1 Day",
  duration: "Approximately 11–12 hours",
  shortDescription:
    "Connect ancient history and a wildlife safari on a full private day from Sigiriya.",
  description:
    "A full and flexible private day combining Sri Lanka’s ancient heritage with a Wilpattu wildlife experience.",
  mainImageUrl:
    "/images/day-tours/dt0020-sigiriya-to-anuradhapura-and-wilpattu-safari-day-tour.webp",
  imageAlt: "Sri Lanka cultural and safari day",
  categories: ["Culture", "Wildlife"],
  highlights: ["Ancient sites", "Wilpattu safari", "Private route"],
  destinations: [
    { name: "Sigiriya", slug: "sigiriya" },
    { name: "Anuradhapura", slug: "anuradhapura" },
  ],
  destinationsCovered: ["Anuradhapura", "Wilpattu National Park"],
  pickupLocations: [ " Anuradhapura city area hotels, Air port road hotels"],
  dropLocations: ["Sigiriya hotels", "Habarana hotels", "Anuradhapura hotels"],
  included: [
    "Private vehicle and chauffeur & compatable safari jeep ",
    "Fuel, parking and route planning",
    "Pickup and drop-off in the stated area", 
    " Safari jeep & driver",
  ],
  excluded: [
    "Anuradhapura tickets",
    "Wilpattu entry ticket, safari tracker",
    "Meals and personal expenses",
  ],
  experiences: [
    "Ancient-city highlights",
    "Wilpattu 4x4 safari",
    "Flexible private road journey",
  ],
  importantInformation: [
    "This is a long day; an early start is essential.",
    "Safari sightings are never guaranteed.",
    "Wear modest clothing for sacred sites.",
    "Entry charges are paid separately.",
  ],
  reasonsToBook: [
    "Combine culture and wildlife in one private day",
    "Avoid coordinating transfers, tickets and safari timing",
    "Adapt the balance of sightseeing and safari to your group",
  ],
  itinerary: [
    {
      time: "Early morning",
      title: "Pickup from Sigiriya",
      description: "Leave early for Anuradhapura.",
    },
    {
      time: "Morning",
      title: "Anuradhapura highlights",
      description: "Visit selected ancient monuments.",
    },
    {
      time: "Afternoon",
      title: "Wilpattu safari and return",
      description: "Join a 4x4 safari before your return transfer.",
    },
  ],
  ticketInformation: [
    {
      location: "Anuradhapura archaeological sites",
      ticketRequired: true,
      ticketPrice:
        "Approx. US$25 for foreign visitors; official rates may change.",
    },
    {
      location: "Wilpattu National Park",
      ticketRequired: true,
      ticketPrice:
        "Ticket required; park, jeep and tracker charges vary by group.",
      notes: "Payable separately.",
    },
    {
      location: "Sigiriya hotel areas",
      ticketRequired: false,
      ticketPrice: "No ticket required.",
    },
  ],
  seo: {
    title: "Sigiriya to Wilpattu Private Day Tour | Chauffeur Emil",
    description: "A private day combining heritage and wildlife from Sigiriya.",
  },
};
export default { tour } satisfies DayTourFile;
