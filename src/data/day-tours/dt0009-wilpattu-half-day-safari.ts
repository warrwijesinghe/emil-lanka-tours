import type { DayTourFile } from "../day-tour-files";

const tour = {
  id: "DT0009",
  slug: "wilpattu-half-day-safari",
  title: "Wilpattu Half-Day Safari",
  durationLabel: "Half Day",
  duration: "Approximately 4,5 hours",
  shortDescription:
    "A private transfer and safari experience in Wilpattu National Park from Anuradhapura.",
  description:
    "A half-day wildlife outing with private transfers and a licensed local safari jeep arranged around the best available slot.",
  mainImageUrl: "/images/day-tours/dt0009-wilpattu-half-day-safari.webp",
  imageAlt: "Wilpattu safari",
  categories: ["Wildlife", "Safari"],
  highlights: ["4x4 comfortable safari jeep ", "Wildlife viewing", "Forest lakes"],
  destinations: [{ name: "Wilpattu", slug: "wilpattu" }],
  destinationsCovered: ["Wilpattu National Park", "Safari tracks and villus"],
  pickupLocations: ["Anuradhapura hotels", "Wilpattu entrance area"],
  dropLocations: ["Your Anuradhapura hotel", "Wilpattu entrance area"],
  included: [
    "Private vehicle and chauffeur transfer",
    "Safari timing coordination",
    "Hotel pickup and drop-off in the stated area",
    " Safari jeep & driver",
  ],
  excluded: [
    "National park entry ticket",
    "Safari jeep and tracker fee",
    "Meals, drinks and personal expenses",
  ],
  experiences: [
    "Travel through Wilpattu’s forest tracks",
    "Look for elephants, deer, birds and leopards",
    "See the park’s natural villus",
  ],
  importantInformation: [
    "Wildlife sightings cannot be guaranteed.",
    "Bring water, sun protection and insect repellent.",
    "Park entry, jeep and tracker fees are paid separately.",
    "Follow the safari jeep driver’s safety instructions at all times.",
  ],
  reasonsToBook: [
    "A practical wildlife experience from Anuradhapura",
    "Private transfers remove the logistics",
    "Flexible morning or afternoon timing",
  ],
  itinerary: [
    {
      time: "Start",
      title: "Pickup and drive to Wilpattu",
      description: "Travel with Emil to the park entrance.",
    },
    {
      time: "Safari",
      title: "4x4 game drive",
      description: "Meet the licensed jeep team and explore the park.",
    },
    {
      time: "Finish",
      title: "Return transfer",
      description: "Return to your chosen drop-off point.",
    },
  ],
  ticketInformation: [
    {
      location: "Wilpattu National Park",
      ticketRequired: true,
      ticketPrice:
        "Ticket required; price depends on nationality, group size and vehicle charges.",
      notes:
        "Official park ticket, jeep and tracker charges are payable separately.",
    },
    {
      location: "Safari access roads",
      ticketRequired: false,
      ticketPrice: "No ticket required.",
    },
  ],
  seo: {
    title: "Wilpattu Half-Day Safari | Chauffeur Emil",
    description:
      "A private half-day safari transfer and wildlife experience in Wilpattu.",
  },
};
export default { tour } satisfies DayTourFile;
