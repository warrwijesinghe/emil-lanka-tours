import type { Destination } from "@/types/content";

const destination = {
  "id": "ella",
  "slug": "ella",
  "name": "Ella",
  "region": "Hill Country",
  "shortDescription": "A relaxed hill-country base for train journeys, viewpoints, tea country and short walks.",
  "description": "Ella is loved for its fresh air, panoramic views and easy access to one of Sri Lanka’s iconic rail journeys.",
  "mainImageUrl": "/images/destinations/ella.webp",
  "imageAlt": "Ella Sri Lanka hill country",
  "galleryImages": [
    {
      "src": "/images/destinations/ella/nine-arch-bridge-aerial.jpeg",
      "alt": "Aerial view of Nine Arch Bridge among Ella's green hill-country landscape"
    },
    {
      "src": "/images/destinations/ella/nine-arch-bridge-train.jpeg",
      "alt": "Blue train crossing Nine Arch Bridge in Ella"
    },
    {
      "src": "/images/destinations/ella/nine-arch-bridge-family-1.jpeg",
      "alt": "Guests visiting Nine Arch Bridge with Emil in Ella"
    },
    {
      "src": "/images/destinations/ella/nine-arch-bridge-family-2.jpeg",
      "alt": "Family at Nine Arch Bridge in Ella's hill country"
    }
  ],
  "attractionImages": {
    "Nine Arch Bridge": {
      "src": "/images/destinations/ella/nine-arch-bridge-train.jpeg",
      "alt": "Blue train crossing Nine Arch Bridge in Ella"
    }
  },
  "highlights": [
    "Nine Arches Bridge",
    "Scenic train journey",
    "Hill-country views"
  ],
  "bestFor": [
    "Scenery",
    "Train journeys",
    "Active travellers"
  ],
  "suggestedVisitDuration": "2 nights",
  "seo": {
    "title": "Ella Private Tours | Chauffeur Emil",
    "description": "Plan an Ella hill-country journey with private chauffeur Emil."
  },
  "featured": true
} satisfies Destination;

export default { destination };
