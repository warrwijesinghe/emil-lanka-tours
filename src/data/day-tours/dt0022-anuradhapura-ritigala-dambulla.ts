import type { DayTourFile } from "../day-tour-files";
const tour = {
  id: "DT0022",
  slug: "anuradhapura-ritigala-dambulla-day-tour",
  title: "Anuradhapura, Ritigala & Dambulla Day Tour",
  durationLabel: "1 Day",
  duration: "Approximately 9–10 hours",
  shortDescription:
    "Travel from Anuradhapura through Ritigala’s forest monastery to the Dambulla Cave Temple.",
  description:
    "A culture-focused private day linking Anuradhapura, Ritigala’s quiet forest ruins and Dambulla’s celebrated cave temples.",
  mainImageUrl:
    "/images/day-tours/dt0022-sigiriya-to-ritigala-mountain-day-tour.webp",
  imageAlt: "Ritigala forest monastery near Anuradhapura",
  categories: ["Heritage", "Culture"],
  highlights: [
    "Ritigala forest monastery",
    "Dambulla Cave Temple",
    "Private transfer",
  ],
  destinations: [{ name: "Anuradhapura", slug: "anuradhapura" }],
  destinationsCovered: [
    "Anuradhapura",
    "Ritigala forest monastery",
    "Dambulla Cave Temple",
  ],
  pickupLocations: ["Anuradhapura hotels"],
  dropLocations: ["Dambulla hotels", "Sigiriya hotels", "Anuradhapura hotels"],
  included: [
    "Private air-conditioned vehicle and chauffeur",
    "Fuel, parking and route planning",
    "Pickup and drop-off at listed locations",
  ],
  excluded: [
    "Ritigala and Dambulla admission tickets",
    "Meals and personal expenses",
    "Licensed site guide unless requested",
  ],
  experiences: [
    "Forest walk through Ritigala ruins",
    "Dambulla’s painted cave temples",
    "Scenic private drive through the Cultural Triangle",
  ],
  importantInformation: [
    "This itinerary includes walking on uneven ground at Ritigala.",
    "Dress modestly for Dambulla; shoulders and knees must be covered.",
    "Shoes must be removed at the cave temple.",
    "Ticket prices can change and are confirmed before travel.",
  ],
  reasonsToBook: [
    "Combine two distinctive heritage sites in one route",
    "Travel at a relaxed private pace",
    "Finish conveniently in Dambulla, Sigiriya or Anuradhapura",
  ],
  itinerary: [
    {
      time: "Morning",
      title: "Pickup from Anuradhapura",
      description: "Begin the private drive towards Ritigala.",
    },
    {
      time: "Late morning",
      title: "Ritigala forest monastery",
      description: "Explore the peaceful archaeological ruins.",
    },
    {
      time: "Afternoon",
      title: "Dambulla Cave Temple and drop-off",
      description: "Visit Dambulla before your chosen drop-off.",
    },
  ],
  ticketInformation: [
    {
      location: "Ritigala Archaeological Reserve",
      ticketRequired: true,
      ticketPrice:
        "Approx. US$5 for foreign visitors; official rates may change.",
    },
    {
      location: "Dambulla Cave Temple",
      ticketRequired: true,
      ticketPrice:
        "Approx. US$10 for foreign visitors; official rates may change.",
    },
    {
      location: "Cultural Triangle scenic route",
      ticketRequired: false,
      ticketPrice: "No ticket required.",
    },
  ],
  seo: {
    title: "Anuradhapura, Ritigala & Dambulla Day Tour | Chauffeur Emil",
    description:
      "A private cultural day tour from Anuradhapura via Ritigala and Dambulla.",
  },
};
export default { tour } satisfies DayTourFile;
