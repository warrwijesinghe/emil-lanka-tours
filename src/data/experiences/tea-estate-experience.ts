import type { Experience } from "../experiences";

const experience = {
  "category": "Hill country & adventure",
  "title": "Tea Estate Experience",
  "description": "See the journey from tea garden to factory and enjoy the landscapes that define Sri Lanka’s highlands.",
  "imageUrl": "/images/tea-estates/tea-estate-family-landscape.jpeg",
  "imageAlt": "Family visiting a Sri Lanka tea estate",
  "galleryImages": [
    {
      "src": "/images/tea-estates/tea-estate-family-portrait.jpeg",
      "alt": "Family among the tea fields in Sri Lanka's hill country"
    },
    {
      "src": "/images/tea-estates/tea-picking-with-local-workers.jpeg",
      "alt": "Traveller learning about tea picking with local estate workers"
    },
    {
      "src": "/images/tea-estates/tea-estate-family-children.jpeg",
      "alt": "Children exploring a Sri Lankan tea garden"
    }
  ],
  "destinationSlugs": [
    "nuwara-eliya",
    "haputale"
  ]
} satisfies Experience;

export default { experience };
