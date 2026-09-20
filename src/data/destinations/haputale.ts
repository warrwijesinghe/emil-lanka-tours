import type { Destination } from "@/types/content";

const destination = {
  "id": "haputale",
  "slug": "haputale",
  "name": "Haputale",
  "region": "Uva Province",
  "shortDescription": "A peaceful tea-country town with dramatic escarpment views and a slower, more local rhythm.",
  "description": "Haputale rewards travellers who enjoy misty mornings, winding tea roads and wide views towards Sri Lanka’s southern plains. It pairs beautifully with Ella, Lipton’s Seat and the hill-country train route.",
  "mainImageUrl": "/images/destinations/haputale/liptons-seat-welcome-sign.jpeg",
  "imageAlt": "Visitors at the Lipton's Seat welcome sign near Haputale",
  "galleryImages": [
    {
      "src": "/images/destinations/haputale/liptons-seat-welcome-sign.jpeg",
      "alt": "Visitors at the Lipton's Seat welcome sign near Haputale"
    },
    {
      "src": "/images/destinations/haputale/liptons-seat-family.jpeg",
      "alt": "Family at Lipton's Seat in Sri Lanka's hill country"
    },
    {
      "src": "/images/destinations/haputale/liptons-seat-tea-garden-child.jpeg",
      "alt": "Child exploring the tea garden near Lipton's Seat"
    },
    {
      "src": "/images/destinations/haputale/liptons-seat-view-couple.jpeg",
      "alt": "Couple enjoying the view from Lipton's Seat"
    }
  ],
  "attractionImages": {
    "Lipton’s Seat": {
      "src": "/images/destinations/haputale/liptons-seat-welcome-sign.jpeg",
      "alt": "Visitors at the Lipton's Seat welcome sign near Haputale"
    },
    "Tea estates": {
      "src": "/images/destinations/haputale/liptons-seat-tea-garden-child.jpeg",
      "alt": "Child exploring a tea garden near Lipton's Seat"
    },
    "Highland viewpoints": {
      "src": "/images/destinations/haputale/liptons-seat-view-couple.jpeg",
      "alt": "Couple enjoying the hill-country view near Lipton's Seat"
    }
  },
  "highlights": [
    "Lipton’s Seat",
    "Tea-estate scenery",
    "Highland viewpoints"
  ],
  "bestFor": [
    "Couples",
    "Scenic journeys",
    "Tea-country stays"
  ],
  "suggestedVisitDuration": "1 night",
  "seo": {
    "title": "Haputale Private Tours | Chauffeur Emil",
    "description": "Explore Haputale, Lipton’s Seat and Sri Lanka tea country with a private chauffeur."
  },
  "featured": true
} satisfies Destination;

export default { destination };
