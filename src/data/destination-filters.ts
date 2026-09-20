import type { Destination } from "@/types/content";

export const destinationFilterOptions = [
  { id: "beaches", label: "Beaches & coast" },
  { id: "wildlife", label: "Wildlife & safari" },
  { id: "culture", label: "Culture & heritage" },
  { id: "hill-country", label: "Hill country" },
  { id: "nature", label: "Nature & adventure" },
] as const;

export type DestinationFilterId = (typeof destinationFilterOptions)[number]["id"];

/**
 * Controls the order of destination cards on the destinations page.
 * Put a destination slug earlier in this list to show it first. Destinations
 * not listed here are shown afterwards in alphabetical order.
 */
export const destinationListingOrder = [
  "kandy",
  "anuradhapura",
  "sigiriya",
  "ella",
  "nuwara-eliya",
  "galle",
  "mirissa",
  "yala-national-park",
  "udawalawe",
] as const;

export const orderDestinations = <T extends Pick<Destination, "name" | "slug">>(
  destinations: T[],
): T[] => {
  const order = new Map<string, number>(
    destinationListingOrder.map((slug, index) => [slug, index]),
  );

  return [...destinations].sort((first, second) => {
    const firstOrder = order.get(first.slug) ?? Number.POSITIVE_INFINITY;
    const secondOrder = order.get(second.slug) ?? Number.POSITIVE_INFINITY;
    return firstOrder - secondOrder || first.name.localeCompare(second.name);
  });
};

const slugsByFilter: Record<DestinationFilterId, string[]> = {
  beaches: [
    "arugam-bay", "galle", "kalpitiya", "mirissa", "negombo", "nilaveli",
    "pasikuda", "tangalle", "trincomalee", "uppuveli", "weligama",
  ],
  wildlife: [
    "arugam-bay", "bundala-national-park", "kalpitiya", "kaudulla-national-park",
    "kumana", "minneriya-national-park", "sinharaja", "tissamaharama",
    "udawalawe", "wilpattu", "yala-national-park",
  ],
  culture: [
    "anuradhapura", "colombo", "dambulla", "habarana", "kandy",
    "mahiyanganaya", "mannar", "pidurangala-rock", "polonnaruwa", "ritigala", "sigiriya",
  ],
  "hill-country": ["ella", "haputale", "nuwara-eliya"],
  nature: [
    "bundala-national-park", "kalpitiya", "kitulgala", "kumana", "mannar",
    "sinharaja",
  ],
};

export const getDestinationFilterIds = (
  destination: Pick<Destination, "slug">,
): DestinationFilterId[] =>
  destinationFilterOptions
    .map(({ id }) => id)
    .filter((id) => slugsByFilter[id].includes(destination.slug));
