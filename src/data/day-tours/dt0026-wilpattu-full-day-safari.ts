import type { DayTourFile } from "../day-tour-files";
const tour = {
  id: "DT0026",
  slug: "wilpattu-full-day-safari",
  title: "Wilpattu Full-Day Safari",
  durationLabel: "1 Day",
  duration: "Approximately 8–10 hours",
  shortDescription:
    "Spend a full day in Wilpattu National Park with a private transfer and safari jeep.",
  description:
    "A longer wildlife day with plenty of time to explore Wilpattu’s varied forest, lakes and open landscapes.",
  mainImageUrl: "/images/day-tours/dt0026-wilpattu-full-day-safari.webp",
  imageAlt: "Wilpattu National Park safari",
  categories: ["Wildlife", "Safari"],
  highlights: ["Full-day safari", "Forest lakes", "Birdlife"],
  destinations: [{ name: "Wilpattu", slug: "wilpattu" }],
  destinationsCovered: ["Wilpattu National Park"],
  pickupLocations: ["Anuradhapura hotels", "Wilpattu entrance area"],
  dropLocations: ["Your Anuradhapura hotel", "Wilpattu entrance area"],
  included: [
    "Private vehicle and chauffeur transfer",
    "Safari timing coordination",
    "Hotel pickup and drop-off in the stated area",
  ],
  excluded: [
    "Park entry ticket",
    "Safari jeep, tracker and gratuities",
    "Meals, drinks and personal expenses",
  ],
  experiences: [
    "Full-day 4x4 game drive",
    "Forest and villu landscapes",
    "Wildlife and bird observation",
  ],
  importantInformation: [
    "Wildlife sightings cannot be guaranteed.",
    "Bring water, sun protection and a packed lunch or arrange one in advance.",
    "Park entry, jeep and tracker charges are paid separately.",
    "Follow all instructions from the licensed jeep team.",
  ],
  reasonsToBook: [
    "More time in the park than a half-day safari",
    "Private transfer and practical timing support",
    "A good choice for keen wildlife travellers",
  ],
  itinerary: [
    {
      time: "Early morning",
      title: "Pickup and park arrival",
      description: "Travel early to reach the safari entrance.",
    },
    {
      time: "Daytime",
      title: "Full-day Wilpattu safari",
      description: "Explore the park with a licensed local jeep team.",
    },
    {
      time: "Late afternoon",
      title: "Return transfer",
      description: "Return to your chosen drop-off point.",
    },
  ],
  ticketInformation: [
    {
      location: "Wilpattu National Park",
      ticketRequired: true,
      ticketPrice:
        "Ticket required; park, jeep and tracker charges vary by group.",
      notes: "Payable separately at the park/with the safari operator.",
    },
    {
      location: "Anuradhapura pickup areas",
      ticketRequired: false,
      ticketPrice: "No ticket required.",
    },
  ],
  seo: {
    title: "Wilpattu Full-Day Safari | Chauffeur Emil",
    description: "A full-day private Wilpattu safari experience.",
  },
};
export default { tour } satisfies DayTourFile;
