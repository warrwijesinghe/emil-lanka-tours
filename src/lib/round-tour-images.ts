export const roundTourImages: Record<string, { src: string; alt: string }> = {
  'ELT-RT-001': { src: '/images/hero/optimized/home-hero-sigiriya-desktop.webp', alt: 'Sigiriya Rock in Sri Lanka' }, 'ELT-RT-002': { src: '/images/hero/optimized/home-hero-elephants-desktop.webp', alt: 'Elephant safari in Sri Lanka' }, 'ELT-RT-003': { src: '/images/hero/optimized/home-hero-beach-desktop.webp', alt: 'Sri Lanka east-coast beach' }, 'ELT-RT-004': { src: '/images/experiences/wildlife.webp', alt: 'Sri Lanka wildlife experience' }, 'ELT-RT-005': { src: '/images/destinations/sigiriya.webp', alt: 'Sigiriya cultural landscape' }, 'ELT-RT-006': { src: '/images/experiences/adventure.webp', alt: 'Sri Lanka adventure experience' }, 'ELT-RT-007': { src: '/images/experiences/wildlife.webp', alt: 'Sri Lanka nature and wildlife' }, 'ELT-RT-008': { src: '/images/experiences/culture.webp', alt: 'Sri Lanka cultural heritage' }, 'ELT-RT-009': { src: '/images/hero/optimized/home-hero-ella-train-desktop.webp', alt: 'Train crossing Nine Arch Bridge in Ella' }, 'ELT-RT-010': { src: '/images/destinations/udawalawe.webp', alt: 'Udawalawe wildlife landscape' }, 'ELT-RT-011': { src: '/images/hero/optimized/home-hero-beach-desktop.webp', alt: 'Sri Lanka south-coast beach' }, 'ELT-RT-012': { src: '/images/destinations/mirissa.webp', alt: 'Mirissa beach in Sri Lanka' }, 'ELT-RT-013': { src: '/images/hero/optimized/home-hero-elephants-desktop.webp', alt: 'Elephant safari in Sri Lanka' }
};

export function getRoundTourDayImage(day: { route: string; experiences: string[] }) {
  const text = `${day.route} ${day.experiences.join(' ')}`.toLowerCase();
  if (/(safari|elephant|wilpattu|kumana|wildlife)/.test(text)) return roundTourImages['ELT-RT-002'];
  if (/(train|ella|nine arch|hill.country)/.test(text)) return roundTourImages['ELT-RT-009'];
  if (/(beach|coast|mirissa|trincomalee|pasikuda|kalpitiya|galle|madu river)/.test(text)) return roundTourImages['ELT-RT-011'];
  if (/(tea|nuwara|ramboda)/.test(text)) return { src: '/images/experiences/hill-country.webp', alt: 'Sri Lanka hill country' };
  if (/(kandy|temple|anuradhapura|polonnaruwa|yapahuwa|vedda|cultural)/.test(text)) return roundTourImages['ELT-RT-008'];
  return roundTourImages['ELT-RT-001'];
}

const dayImagePool = {
  safari: [roundTourImages['ELT-RT-002'], { src: '/images/experiences/wildlife.webp', alt: 'Sri Lanka wildlife' }, { src: '/images/driver-guides/emil/emil-elephant-safari.jpg', alt: 'Elephant safari with Emil' }],
  hillCountry: [roundTourImages['ELT-RT-009'], { src: '/images/experiences/hill-country.webp', alt: 'Sri Lanka hill country' }, { src: '/images/driver-guides/emil/emil-nine-arches-guests.jpg', alt: 'Nine Arch Bridge in Ella' }],
  beach: [roundTourImages['ELT-RT-011'], { src: '/images/experiences/beaches.webp', alt: 'Sri Lanka beach' }, { src: '/images/destinations/mirissa.webp', alt: 'Mirissa beach' }],
  teaCountry: [{ src: '/images/experiences/hill-country.webp', alt: 'Sri Lanka tea country' }, { src: '/images/destinations/nuwara-eliya.webp', alt: 'Nuwara Eliya' }, { src: '/images/driver-guides/emil/emil-hill-country-guests.jpg', alt: 'Hill-country experience with Emil' }],
  culture: [roundTourImages['ELT-RT-001'], { src: '/images/experiences/culture.webp', alt: 'Sri Lanka cultural heritage' }, { src: '/images/destinations/kandy.webp', alt: 'Kandy in Sri Lanka' }]
};

export function getRoundTourDayImages(day: { route: string; experiences: string[] }) {
  const text = `${day.route} ${day.experiences.join(' ')}`.toLowerCase();
  if (/(safari|elephant|wilpattu|kumana|wildlife)/.test(text)) return dayImagePool.safari;
  if (/(train|ella|nine arch|hill.country)/.test(text)) return dayImagePool.hillCountry;
  if (/(beach|coast|mirissa|trincomalee|pasikuda|kalpitiya|galle|madu river)/.test(text)) return dayImagePool.beach;
  if (/(tea|nuwara|ramboda)/.test(text)) return dayImagePool.teaCountry;
  return dayImagePool.culture;
}
