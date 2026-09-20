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

