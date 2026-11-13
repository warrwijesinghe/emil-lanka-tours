import { destinationGuides, getAttractionDescription } from '@/data/destination-guides';
import { destinations } from '@/data/destination-files';
import { getAttractionImageMatch } from '@/data/attraction-image-matches';
import { attractionVisitNotes } from '@/data/attraction-visit-notes';
import { hasDedicatedMedia } from '@/lib/media';
import type { Destination } from '@/types/content';

const waterfallSlugs = new Set(['ravana-ella-waterfall', 'ramboda-falls']);
const galleryMinimum = 6;
const placeholder = '/images/placeholders/destination-placeholder.webp';
const imagePaths = Object.keys(import.meta.glob('/public/images/**/*.{jpg,jpeg,webp,png}'))
  .map((path) => path.slice('/public'.length)).sort();
const imagePool = new Set(imagePaths);
const imageDescriptions = new Map(destinations.flatMap((destination) => [
  [destination.mainImageUrl, destination.imageAlt] as const,
  ...(destination.galleryImages ?? []).map(({ src, alt }) => [src, alt] as const),
  ...Object.values(destination.attractionImages ?? {}).map(({ src, alt }) => [src, alt] as const),
]));

const attractionDetails: Record<string, { heading: string; body: string }[]> = {
  '/destinations/ella/ravana-ella-waterfall/': [
    {
      heading: 'What to see from the viewpoint',
      body: 'On the road from Ella to Wellawaya, Ravana Ella Waterfall spills down several rock ledges framed by forest. From the roadside viewpoint, look up for the thinner streams on the cliff, then follow the water down to the broad lower cascade. The falls can look fuller after rain. Stay behind the barriers, as the rocks near the water can be slippery.',
    },
    {
      heading: 'The Ramayana connection',
      body: 'Local tradition links the waterfall and nearby Ravana Cave to the Ramayana. In one telling, Ravana hid Sita in the cave, and she bathed in a pool fed by the falls. The cave has a separate approach uphill, so allow extra time if you want to visit both.',
    },
    {
      heading: 'How to fit it into your trip',
      body: 'Stop for photos on the drive from Ella toward Wellawaya, or pair the waterfall with Nine Arch Bridge and Little Adam’s Peak on a day around Ella. If you’re heading south, Buduruwagala’s Buddhist rock carvings make a second stop near Wellawaya.',
    },
  ],
};

export const getDestinationAttractions = (destination: Destination) =>
  (destinationGuides[destination.slug]?.attractions ?? []).map((name) => {
    const slug = name.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const href = `/destinations/${destination.slug}/${slug}/`;
    const displayName = name === 'Gem and jewellery museum' ? 'Gem and jewellery shop and museum' : name;
    const match = getAttractionImageMatch(name, destination.slug);
    const configuredImage = destination.attractionImages?.[name];
    const cover = configuredImage && imagePool.has(configuredImage.src) &&
      hasDedicatedMedia(configuredImage.src) && !configuredImage.src.includes('/placeholders/')
      ? configuredImage : undefined;
    const photos = match ? imagePaths.filter((src) => match.test(src)).map((src) => ({
      src,
      alt: imageDescriptions.get(src) || name,
    })) : [];
    const matchedImages = cover ? [cover, ...photos.filter(({ src }) => src !== cover.src)] : photos;
    const image = matchedImages[0];
    const gallery = matchedImages.length > galleryMinimum ? matchedImages.slice(1) : [...matchedImages];
    const placeholders = Array.from({ length: Math.max(0, galleryMinimum - gallery.length) }, (_, index) => ({
      src: placeholder,
      alt: `Photo ${gallery.length + index + 1} unavailable for ${displayName}`,
      placeholder: true,
    }));
    const visitNote = attractionVisitNotes[name];
    return {
      name: displayName,
      slug,
      href,
      details: attractionDetails[href] ?? (visitNote ? [{ heading: 'What to see and do', body: visitNote }] : []),
      description: getAttractionDescription(displayName, destination.name),
      image,
      gallery: [...gallery, ...placeholders],
      isWaterfall: waterfallSlugs.has(slug),
    };
  });
