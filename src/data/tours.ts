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

export interface TourPackageDetails {
  included: string[];
  excluded: string[];
}

export interface RoundTourFile {
  tour: RoundTour;
  packageDetails: TourPackageDetails;
}

/**
 * Every file in ./round-tours is included automatically.
 * Add a new round tour by creating a file there that exports a RoundTourFile.
 */
const tourFiles = Object.values(
  import.meta.glob<RoundTourFile>("./round-tours/*.ts", { eager: true, import: "default" }),
).sort((first, second) => first.tour.id.localeCompare(second.tour.id));

export const roundTours: RoundTour[] = tourFiles.map(({ tour }) => tour);

export const tourPackageDetails: Record<string, TourPackageDetails> = Object.fromEntries(
  tourFiles.map(({ tour, packageDetails }) => [tour.id, packageDetails]),
);
