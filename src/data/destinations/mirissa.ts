import type { Destination } from "@/types/content";

const destination = {
  "id": "mirissa",
  "slug": "mirissa",
  "name": "Mirissa",
  "region": "South Coast",
  "shortDescription": "Palm-lined beaches, a laid-back coastal atmosphere and seasonal marine excursions.",
  "description": "Mirissa is a relaxed choice for beach time on a private Sri Lanka itinerary, with easy road links to Galle and southern wildlife parks.",
  "mainImageUrl": "/images/destinations/mirissa/mirissa-beach-parrot-rock.jpeg",
  "imageAlt": "Mirissa Beach and Parrot Rock",
  "galleryImages": [
    {
      "src": "/images/destinations/mirissa/mirissa-beach-parrot-rock.jpeg",
      "alt": "Visitors enjoying Mirissa Beach beside Parrot Rock"
    },
    {
      "src": "/images/destinations/mirissa/mirissa-beach-sunset.jpeg",
      "alt": "Evening atmosphere on Mirissa Beach"
    }
  ],
  "attractionImages": {
    "Mirissa Beach": {
      "src": "/images/destinations/mirissa/mirissa-beach-parrot-rock.jpeg",
      "alt": "Visitors enjoying Mirissa Beach beside Parrot Rock"
    },
    "Coastal viewpoints": {
      "src": "/images/destinations/mirissa/mirissa-beach-sunset.jpeg",
      "alt": "Evening atmosphere on Mirissa Beach"
    }
  },
  "highlights": [
    "Beach time",
    "Coastal sunsets",
    "Seasonal whale watching"
  ],
  "bestFor": [
    "Relaxation",
    "Beach lovers",
    "Couples"
  ],
  "suggestedVisitDuration": "2–3 nights",
  "seo": {
    "title": "Mirissa Private Tours | Chauffeur Emil",
    "description": "Plan a private Mirissa and south coast journey."
  },
  "featured": true
} satisfies Destination;

export default { destination };
