import type { Destination } from '@/types/content';

const destination = (id: string, name: string, region: string, image: string, highlights: string[]): Destination => ({
  id, slug: id, name, region, shortDescription: `A meaningful stop on private Sri Lanka journeys with Emil.`, description: `${name} is included in Emil's reviewed day-tour and round-tour itineraries. Emil can help shape a practical visit around your dates, interests and pace.`, mainImageUrl: image, imageAlt: `${name}, Sri Lanka`, highlights, bestFor: ['Private travel', 'Local experiences', 'Flexible itineraries'], suggestedVisitDuration: 'Tailored to your itinerary', seo: { title: `${name} Private Tours | Chauffeur Emil`, description: `Explore ${name}, Sri Lanka with a private chauffeur-guided itinerary.` }, featured: true
});

export const tourDestinations: Destination[] = [
  destination('colombo', 'Colombo', 'Western Province', '/images/day-tours/dt0001-colombo-city-day-tour.webp', ['City landmarks', 'Markets', 'Coastal promenade']),
  destination('anuradhapura', 'Anuradhapura', 'North Central Province', '/images/day-tours/dt0005-anuradhapura-city-tour.webp', ['Ancient city', 'Sacred sites', 'Mihintale']),
  destination('wilpattu', 'Wilpattu National Park', 'North Western Province', '/images/day-tours/dt0009-wilpattu-half-day-safari.webp', ['Wildlife safaris', 'Forest lakes', 'Birdlife']),
  destination('trincomalee', 'Trincomalee', 'Eastern Province', '/images/experiences/beaches.webp', ['East-coast beaches', 'Koneswaram Temple', 'Marine life']),
  destination('pasikuda', 'Pasikuda', 'Eastern Province', '/images/experiences/beaches.webp', ['Calm bays', 'Beach time', 'East-coast stays']),
  destination('mahiyanganaya', 'Mahiyanganaya', 'Uva Province', '/images/experiences/culture.webp', ['Vedda heritage', 'Sorabora Lake', 'Scenic drives']),
  destination('negombo', 'Negombo', 'Western Province', '/images/hero/optimized/home-hero-beach-desktop.webp', ['Fish market', 'Lagoon', 'Airport access']),
  destination('polonnaruwa', 'Polonnaruwa', 'North Central Province', '/images/hero/optimized/home-hero-sigiriya-desktop.webp', ['Ancient ruins', 'Gal Vihara', 'Cultural Triangle']),
  destination('arugam-bay', 'Arugam Bay', 'Eastern Province', '/images/experiences/beaches.webp', ['Surf coast', 'Beach stays', 'Wildlife access']),
  destination('kalpitiya', 'Kalpitiya', 'North Western Province', '/images/hero/optimized/home-hero-beach-desktop.webp', ['Dolphin watching', 'Kite-surfing', 'Coastal nature']),
  destination('kitulgala', 'Kitulgala', 'Sabaragamuwa Province', '/images/experiences/adventure.webp', ['White-water rafting', 'River scenery', 'Rainforest']),
  destination('kumana', 'Kumana National Park', 'Eastern Province', '/images/experiences/wildlife.webp', ['Birdlife', 'Wildlife safari', 'Wetlands']),
  destination('yapahuwa', 'Yapahuwa', 'North Western Province', '/images/experiences/culture.webp', ['Rock fortress', 'Ancient capital', 'Heritage']),
  destination('habarana', 'Habarana', 'North Central Province', '/images/experiences/culture.webp', ['Village safari', 'Cultural show', 'Wildlife access'])
];

const aliases: Array<[string, string]> = [
  ['colombo airport', 'colombo'], ['colombo', 'colombo'], ['anuradhapura', 'anuradhapura'], ['wilpattu', 'wilpattu'], ['trincomalee', 'trincomalee'], ['pasikuda', 'pasikuda'], ['mahiya', 'mahiyanganaya'], ['negombo', 'negombo'], ['polonnaruwa', 'polonnaruwa'], ['arugam bay', 'arugam-bay'], ['kalpitiya', 'kalpitiya'], ['kitulgala', 'kitulgala'], ['kumana', 'kumana'], ['yapahuwa', 'yapahuwa'], ['habarana', 'habarana'], ['sigiriya', 'sigiriya'], ['kandy', 'kandy'], ['nuwara eliya', 'nuwara-eliya'], ['ella', 'ella'], ['galle', 'galle'], ['mirissa', 'mirissa'], ['udawalawe', 'udawalawe'], ['yala', 'yala-national-park']
];

export const getDestinationSlugsInText = (value: string) => aliases.filter(([term]) => value.toLowerCase().includes(term)).map(([, slug]) => slug);
