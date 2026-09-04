export interface Seo {
  title: string;
  description: string;
}
export interface DayTour {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  durationLabel: string;
  duration: string;
  mainImageUrl: string;
  imageAlt: string;
  categories: string[];
  highlights: string[];
  destinations: { name: string; slug: string }[];
  destinationsCovered: string[];
  pickupLocations: string[];
  dropLocations: string[];
  included: string[];
  excluded: string[];
  experiences: string[];
  importantInformation: string[];
  reasonsToBook: string[];
  itinerary: { time: string; title: string; description: string }[];
  ticketInformation: {
    location: string;
    ticketRequired: boolean;
    ticketPrice: string;
    notes?: string;
  }[];
  seo: Seo;
}
export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  destinationType?: string;
  shortDescription: string;
  description: string;
  mainImageUrl: string;
  imageUrl?: string;
  imageAlt: string;
  highlights: string[];
  bestFor: string[];
  suggestedVisitDuration: string;
  seo: Seo;
  featured: boolean;
}
