import type { Destination } from "@/types/content";

const destination = {
  "id": "nuwara-eliya",
  "slug": "nuwara-eliya",
  "name": "Nuwara Eliya",
  "region": "Hill Country",
  "shortDescription": "Cool highland air, tea estates and misty views on Sri Lanka’s scenic central plateau.",
  "description": "Nuwara Eliya’s tea-covered hills and cooler climate provide a relaxed pause on a journey through the central highlands.",
  "mainImageUrl": "/images/destinations/nuwara-eliya.webp",
  "imageAlt": "Nuwara Eliya tea country",
  "galleryImages": [
    {
      "src": "/images/tea-estates/tea-estate-family-children.jpeg",
      "alt": "Children exploring a tea garden near Nuwara Eliya"
    },
    {
      "src": "/images/tea-estates/tea-picking-with-local-workers.jpeg",
      "alt": "Traveller experiencing tea picking in Sri Lanka's highlands"
    },
    {
      "src": "/images/tea-estates/tea-estate-family-portrait.jpeg",
      "alt": "Family in a green tea estate in Sri Lanka"
    }
  ],
  "attractionImages": {
    "Tea estates": {
      "src": "/images/tea-estates/tea-picking-with-local-workers.jpeg",
      "alt": "Traveller experiencing tea picking in Sri Lanka's highlands"
    }
  },
  "highlights": [
    "Tea estates",
    "Highland scenery",
    "Waterfalls"
  ],
  "bestFor": [
    "Tea country",
    "Scenic drives",
    "Couples"
  ],
  "suggestedVisitDuration": "1–2 nights",
  "seo": {
    "title": "Nuwara Eliya Private Tours | Chauffeur Emil",
    "description": "Explore Sri Lanka tea country with a private chauffeur."
  },
  "featured": true
} satisfies Destination;

export default { destination };
