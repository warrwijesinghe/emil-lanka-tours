import type { DayTourFile } from "../day-tour-files";
const tour = {
  id: "DT0023",
  slug: "anuradhapura-mihintale-trincomalee, or dambulla drop",
  title: "Anuradhapura, Mihintale & Trincomalee or dambulla  Drop",
  durationLabel: "1 Day",
  duration: "Approximately 6,7 hours",
  shortDescription:
    "Visit sacred Mihintale from Anuradhapura before a comfortable private transfer to Trincomalee.",
  description:
    "Combine a meaningful Mihintale visit with your onward private journey from Anuradhapura to Trincomalee.",
  mainImageUrl:
    "/images/day-tours/dt0023-sigiriya-to-trincomalee-cultural-day-tour.webp",
  imageAlt: "Cultural journey from Anuradhapura to Trincomalee",
  categories: ["Heritage", "Transfer"],
  highlights: [
    "Mihintale sacred site",
    "Private Trincomalee drop-off",
    "Flexible departure time",
  ],
  destinations: [
    { name: "Anuradhapura", slug: "anuradhapura" },
    { name: "Trincomalee", slug: "trincomalee" },
  ],
  destinationsCovered: ["Anuradhapura", "Mihintale", "Trincomalee"],
  pickupLocations: ["Anuradhapura hotels", "Mihintale city area hotels"],
  dropLocations: ["Trincomalee hotels", "Nilaveli hotels", "Uppuveli hotels"],
  included: [
    "Private vehicle and chauffeur",
    "Fuel, parking and one-way transfer",
    "Pickup and drop-off at listed locations",
  ],
  excluded: [
    "Mihintale entry ticket",
    "Meals and personal expenses",
    "Accommodation",
  ],
  experiences: [
    "Climb Mihintale  sacred rock",
    "See the Cultural Triangle countryside",
    "Arrive comfortably at your east-coast hotel",
  ],
  importantInformation: [
    "Mihintale has steps and is best visited in cooler morning hours.",
    "Dress modestly and remove shoes in sacred areas.",
    "Keep your swimwear and beach items accessible for the hotel drop-off.",
    "Ticket prices can change and are confirmed before travel.",
  ],
  reasonsToBook: [
    "Turn a transfer day into a memorable heritage experience",
    "Avoid changing vehicles after sightseeing",
    "Enjoy door-to-door travel to the Trincomalee coast",
  ],
  itinerary: [
    {
      time: "Morning",
      title: "Pickup in Anuradhapura",
      description: "Collect luggage and set off towards Mihintale.",
    },
    {
      time: "Morning 0700 am to 1200 pm",
      title: "Mihintale visit",
      description: "Explore the sacred site at your own pace.",
    },
    {
      time: "Afternoon",
      title: "Trincomalee hotel drop-off",
      description: "Travel east for your selected coastal hotel.",
    },
  ],
  ticketInformation: [
    {
      location: "Mihintale",
      ticketRequired: true,
      ticketPrice:
        "Approx. US$3 for foreign visitors; official rates may change.",
    },
    {
      location: "Trincomalee, Nilaveli and Uppuveli hotel drop-off",
      ticketRequired: false,
      ticketPrice: "No ticket required.",
    },
  ],
  seo: {
    title: "Anuradhapura, Mihintale & Trincomalee Drop | Chauffeur Emil",
    description:
      "A private Anuradhapura and Mihintale visit with onward transfer to Trincomalee.",
  },
};
export default { tour } satisfies DayTourFile;
