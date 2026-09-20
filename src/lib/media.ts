export const resolveMediaUrl = (value?: string | null) => value || '/images/placeholders/travel-placeholder.webp';

const genericMediaPaths = new Set([
  '/images/destinations/default-destination.webp',
  '/images/experiences/adventure.webp',
  '/images/experiences/beaches.webp',
  '/images/experiences/culture.webp',
  '/images/experiences/hill-country.webp',
  '/images/experiences/wildlife.webp',
]);

export const hasDedicatedMedia = (value?: string | null) => Boolean(value && !genericMediaPaths.has(value));
