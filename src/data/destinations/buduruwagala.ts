import type { Destination } from "@/types/content";

const destination = {
  id: "buduruwagala",
  slug: "buduruwagala",
  name: "Buduruwagala",
  region: "Uva Province",
  shortDescription: "See seven Buddhist figures carved into a single rock face in a wooded clearing near Wellawaya.",
  description: "Buduruwagala is a Buddhist heritage site near Wellawaya in Sri Lanka’s Uva Province. A towering standing Buddha anchors the rock face, with three smaller figures on either side. The carvings are associated with the Mahayana Buddhist tradition, and traces of orange pigment are still visible on the central figure. Start at the edge of the clearing for a view of the full group, then walk closer to see the carved robes, headdresses and hand gestures. Buduruwagala makes a short cultural stop on a private drive from Ella through Wellawaya toward Sri Lanka’s south.",
  mainImageUrl: "/images/destinations/buduruwagala/rock-face.jpg",
  imageAlt: "Wide view of the standing Buddha and six smaller carvings at Buduruwagala",
  galleryImages: [
    { src: "/images/destinations/buduruwagala/wooded-clearing.jpg", alt: "Visitors approaching the Buduruwagala rock face through a wooded clearing" },
    { src: "/images/destinations/buduruwagala/standing-buddha.jpg", alt: "Standing Buddha carved into the cliff with traces of orange pigment on the robe" },
    { src: "/images/destinations/buduruwagala/three-rock-carvings.jpg", alt: "Three carved figures with detailed headdresses and hand gestures" },
    { src: "/images/destinations/buduruwagala/two-rock-carvings.jpg", alt: "Two standing figures carved into the rock above a grassy ledge" },
    { src: "/images/destinations/buduruwagala/carving-with-scaffolding.jpg", alt: "Pale stone figure with a red halo behind scaffolding" },
  ],
  highlights: ["Central standing Buddha", "Six flanking figures", "Wooded approach to the rock face"],
  bestFor: ["Heritage travellers", "Buddhist art enthusiasts", "Short cultural stops"],
  suggestedVisitDuration: "30–60 minutes",
  seo: {
    title: "Buduruwagala Rock Carvings near Wellawaya | Chauffeur Emil",
    description: "Visit Buduruwagala near Wellawaya to see seven Buddhist rock carvings, including the towering standing Buddha, on a private tour with Chauffeur Emil.",
  },
  featured: false,
} satisfies Destination;

export default { destination };
