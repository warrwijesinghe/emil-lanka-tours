import type { Destination } from "@/types/content";

export const destinationOverrides: Record<string, Partial<Destination>> = {
  kumana: {
    shortDescription: "A peaceful eastern Sri Lanka safari park known for wetland lagoons, migratory birds and coastal forest.",
    description: "Kumana National Park is one of Sri Lanka’s outstanding birdwatching and wetland safari destinations. Its lagoons, mangroves, grassland and coastal forest provide feeding and nesting habitat for painted storks, herons, flamingos and many other resident and migratory birds. It combines naturally with Arugam Bay and Panama on an east-coast private journey with Chauffeur Emil.",
    mainImageUrl: "/images/destinations/kumana/kumana-waterbirds-wetland.webp",
    imageAlt: "Waterbirds nesting above a wetland in Kumana National Park, Sri Lanka",
    galleryImages: [
      { src: "/images/destinations/kumana/kumana-painted-storks.webp", alt: "Painted storks nesting in Kumana National Park" },
      { src: "/images/destinations/kumana/kumana-flamingos.webp", alt: "Flamingos feeding in a Kumana wetland lagoon" },
    ],
    attractionImages: {
      "Wetland lagoons": { src: "/images/destinations/kumana/kumana-flamingos.webp", alt: "Flamingos in a Kumana wetland lagoon" },
      "Coastal forest": { src: "/images/destinations/kumana/kumana-waterbirds-wetland.webp", alt: "Waterbirds nesting in vegetation beside a Kumana wetland" },
      "Bird habitats": { src: "/images/destinations/kumana/kumana-painted-storks.webp", alt: "Painted storks in Kumana National Park" },
    },
    highlights: ["Wetland birdwatching", "Quiet jeep safaris", "Arugam Bay connection"],
    bestFor: ["Birdwatchers", "Wildlife photographers", "Nature lovers"],
    suggestedVisitDuration: "Half day",
    seo: {
      title: "Kumana National Park Birdwatching Safaris | Chauffeur Emil",
      description: "Plan a private Kumana National Park safari with Chauffeur Emil: wetland lagoons, painted storks, flamingos, coastal forest and Arugam Bay connections.",
    },
  },
};
