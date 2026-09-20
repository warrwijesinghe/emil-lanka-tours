import type { Experience } from "../experiences";

const experience = {
  "category": "Wildlife & nature",
  "title": "Cultural Triangle Elephant Safari",
  "description": "Choose the park with the best seasonal conditions for an afternoon among wild elephant herds.",
  "imageUrl": "/images/destinations/minneriya-national-park/minneriya-elephant-herd-safari.jpeg",
  "imageAlt": "Elephant herd in Minneriya National Park grasslands",
  "galleryImages": [
    {
      "src": "/images/destinations/minneriya-national-park/minneriya-jeep-elephant-safari.jpeg",
      "alt": "Jeep safari beside elephants in Minneriya National Park"
    },
    {
      "src": "/images/destinations/minneriya-national-park/minneriya-elephants-lake.jpeg",
      "alt": "Elephants near Minneriya Reservoir"
    }
  ],
  "destinationSlugs": [
    "minneriya-national-park",
    "kaudulla-national-park"
  ]
} satisfies Experience;

export default { experience };
