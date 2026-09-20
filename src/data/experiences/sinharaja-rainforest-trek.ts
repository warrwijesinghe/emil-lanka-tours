import type { Experience } from "../experiences";

const experience = {
  "category": "Wildlife & nature",
  "title": "Sinharaja Rainforest Trek",
  "description": "Walk with a local guide through Sri Lanka’s last great rainforest, rich in birds, ferns and forest streams.",
  "imageUrl": "/images/destinations/sinharaja/sinharaja-green-lizard.jpeg",
  "imageAlt": "Green lizard in Sinharaja Forest Reserve",
  "galleryImages": [
    {
      "src": "/images/destinations/sinharaja/sinharaja-forest-snake.jpeg",
      "alt": "Snake among the wet forest foliage in Sinharaja"
    },
    {
      "src": "/images/destinations/sinharaja/sinharaja-waterfall-swim.jpeg",
      "alt": "Rainforest waterfall and natural pool in Sinharaja"
    },
    {
      "src": "/images/destinations/sinharaja/sinharaja-green-pit-viper.jpeg",
      "alt": "Green pit viper in Sinharaja Forest Reserve"
    }
  ],
  "destinationSlugs": [
    "sinharaja"
  ]
} satisfies Experience;

export default { experience };
