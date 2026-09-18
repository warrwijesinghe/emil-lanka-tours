export type ExperienceCategory =
  | 'Culture & heritage'
  | 'Wildlife & nature'
  | 'Hill country & adventure'
  | 'Coast & water';

export interface Experience {
  category: ExperienceCategory;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  destinationSlugs: string[];
}

export const experienceCategoryOrder: ExperienceCategory[] = [
  'Culture & heritage',
  'Wildlife & nature',
  'Hill country & adventure',
  'Coast & water',
];

export const experiences: Experience[] = [
  { category: 'Culture & heritage', title: 'Ancient City Tour', description: 'Explore grand stupas, royal ruins and stone carvings at a comfortable private pace.', imageUrl: '/images/experiences/culture.webp', imageAlt: 'Sri Lanka ancient heritage', destinationSlugs: ['anuradhapura', 'polonnaruwa'] },
  { category: 'Culture & heritage', title: 'Sigiriya Rock Fortress Climb', description: 'Climb Sri Lanka’s iconic rock citadel early in the day for cooler conditions and wide views.', imageUrl: '/images/hero/optimized/home-hero-sigiriya-desktop.webp', imageAlt: 'Sigiriya Rock Fortress', destinationSlugs: ['sigiriya'] },
  { category: 'Culture & heritage', title: 'Dambulla Cave Temple Visit', description: 'Discover painted cave shrines, Buddha statues and one of the Cultural Triangle’s essential heritage sites.', imageUrl: '/images/destinations/default-destination.webp', imageAlt: 'Placeholder image for Dambulla Cave Temple', destinationSlugs: ['dambulla'] },
  { category: 'Culture & heritage', title: 'Mihintale Sacred Rock Climb', description: 'Climb the ancient stone steps to peaceful shrines and panoramic countryside views.', imageUrl: '/images/day-tours/dt0005-anuradhapura-city-tour.webp', imageAlt: 'Mihintale sacred site', destinationSlugs: ['mihintale'] },
  { category: 'Culture & heritage', title: 'Ritigala Forest Monastery Walk', description: 'Walk through shaded ruins where forest and archaeology meet in a remarkably tranquil setting.', imageUrl: '/images/day-tours/dt0022-sigiriya-to-ritigala-mountain-day-tour.webp', imageAlt: 'Ritigala forest monastery', destinationSlugs: ['ritigala'] },
  { category: 'Culture & heritage', title: 'Kandy City Tour', description: 'Take in Kandy’s lake, markets, viewpoints and living cultural character with a local chauffeur guide.', imageUrl: '/images/destinations/kandy.webp', imageAlt: 'Kandy, Sri Lanka', destinationSlugs: ['kandy'] },
  { category: 'Culture & heritage', title: 'Temple of the Tooth Visit', description: 'Visit Kandy’s most revered Buddhist temple with time for its museum, gardens and lakefront setting.', imageUrl: '/images/experiences/culture.webp', imageAlt: 'Sri Lanka Buddhist heritage', destinationSlugs: ['kandy'] },
  { category: 'Culture & heritage', title: 'Kandy Cultural Dance Show', description: 'Enjoy a lively evening performance of traditional Sri Lankan drumming, dance and fire walking.', imageUrl: '/images/experiences/culture.webp', imageAlt: 'Sri Lanka cultural performance', destinationSlugs: ['kandy'] },
  { category: 'Culture & heritage', title: 'Vedda Village Experience', description: 'Learn about the traditions and forest heritage of Sri Lanka’s indigenous Vedda community.', imageUrl: '/images/experiences/culture.webp', imageAlt: 'Sri Lanka cultural experience', destinationSlugs: ['mahiyanganaya'] },
  { category: 'Culture & heritage', title: 'Ayurveda Treatment', description: 'Unwind with a traditional Ayurvedic treatment or massage as a restorative pause in your Cultural Triangle journey.', imageUrl: '/images/experiences/culture.webp', imageAlt: 'Sri Lanka wellness experience', destinationSlugs: ['sigiriya', 'habarana'] },

  { category: 'Wildlife & nature', title: 'Wilpattu Leopard Safari', description: 'Search quiet forest tracks and natural villus for leopards, sloth bears, elephants and birdlife.', imageUrl: '/images/day-tours/dt0026-wilpattu-full-day-safari.webp', imageAlt: 'Wilpattu National Park safari', destinationSlugs: ['wilpattu'] },
  { category: 'Wildlife & nature', title: 'Cultural Triangle Elephant Safari', description: 'Choose the park with the best seasonal conditions for an afternoon among wild elephant herds.', imageUrl: '/images/experiences/wildlife.webp', imageAlt: 'Sri Lanka elephant safari', destinationSlugs: ['minneriya-national-park', 'kaudulla-national-park'] },
  { category: 'Wildlife & nature', title: 'Udawalawe Elephant Safari', description: 'Travel through open grasslands and reservoir country, a strong choice for seeing elephants in the wild.', imageUrl: '/images/destinations/udawalawe.webp', imageAlt: 'Elephants in Udawalawe', destinationSlugs: ['udawalawe'] },
  { category: 'Wildlife & nature', title: 'Yala Leopard Safari', description: 'Set out in a private safari jeep across Yala’s dry-zone landscapes in search of leopard and other wildlife.', imageUrl: '/images/destinations/yala.webp', imageAlt: 'Yala National Park safari', destinationSlugs: ['yala-national-park'] },
  { category: 'Wildlife & nature', title: 'Kumana Wetland Safari', description: 'Explore a quieter eastern safari landscape of wetlands, coastal forest and abundant birdlife.', imageUrl: '/images/experiences/wildlife.webp', imageAlt: 'Sri Lanka wildlife wetland', destinationSlugs: ['kumana'] },
  { category: 'Wildlife & nature', title: 'Bundala Birdwatching Safari', description: 'Watch for migratory waterbirds and flamingos in a coastal wetland landscape close to Yala.', imageUrl: '/images/experiences/wildlife.webp', imageAlt: 'Sri Lanka birdwatching safari', destinationSlugs: ['bundala-national-park'] },
  { category: 'Wildlife & nature', title: 'Sinharaja Rainforest Trek', description: 'Walk with a local guide through Sri Lanka’s last great rainforest, rich in birds, ferns and forest streams.', imageUrl: '/images/experiences/wildlife.webp', imageAlt: 'Sri Lanka rainforest experience', destinationSlugs: ['sinharaja'] },
  { category: 'Wildlife & nature', title: 'Elephant Transit Home Visit', description: 'See orphaned elephant calves during their rehabilitation programme before release back into the wild.', imageUrl: '/images/destinations/udawalawe.webp', imageAlt: 'Udawalawe elephant experience', destinationSlugs: ['udawalawe'] },
  { category: 'Wildlife & nature', title: 'Sea Turtle Conservation Visit', description: 'Learn about responsible turtle protection along a quieter stretch of Sri Lanka’s southern coast.', imageUrl: '/images/experiences/wildlife.webp', imageAlt: 'Sea turtle conservation in Sri Lanka', destinationSlugs: ['rekawa'] },
  { category: 'Wildlife & nature', title: 'Whale Watching', description: 'Head offshore during the appropriate season for a chance to see blue whales and other marine life.', imageUrl: '/images/experiences/beaches.webp', imageAlt: 'Sri Lanka south coast sea', destinationSlugs: ['mirissa'] },
  { category: 'Wildlife & nature', title: 'Dolphin Watching', description: 'Take a seasonal boat trip on the north-west coast to look for playful dolphins in open water.', imageUrl: '/images/experiences/beaches.webp', imageAlt: 'Sri Lanka coastal waters', destinationSlugs: ['kalpitiya'] },

  { category: 'Hill country & adventure', title: 'Scenic Hill-Country Train Journey', description: 'Ride Sri Lanka’s celebrated mountain railway through tea country, valleys and cool highland scenery.', imageUrl: '/images/experiences/hill-country.webp', imageAlt: 'Sri Lanka hill-country train journey', destinationSlugs: ['nanu-oya', 'demodara', 'ella'] },
  { category: 'Hill country & adventure', title: 'Tea Estate Experience', description: 'See the journey from tea garden to factory and enjoy the landscapes that define Sri Lanka’s highlands.', imageUrl: '/images/experiences/hill-country.webp', imageAlt: 'Sri Lanka tea country', destinationSlugs: ['nuwara-eliya', 'haputale'] },
  { category: 'Hill country & adventure', title: 'Ella Hiking', description: 'Choose a gentle walk or a more challenging trail through Ella’s tea-covered hills and viewpoints.', imageUrl: '/images/destinations/ella.webp', imageAlt: 'Ella hill country', destinationSlugs: ['ella'] },
  { category: 'Hill country & adventure', title: 'Horton Plains Nature Hike', description: 'Begin early for a refreshing guided walk through cloud forest and open plateau country.', imageUrl: '/images/destinations/default-destination.webp', imageAlt: 'Placeholder image for Horton Plains', destinationSlugs: ['horton-plains-national-park'] },
  { category: 'Hill country & adventure', title: 'White-Water Rafting', description: 'Add a fun, professionally run river adventure to your route through Sri Lanka’s rainforest edge.', imageUrl: '/images/experiences/adventure.webp', imageAlt: 'Sri Lanka white-water rafting', destinationSlugs: ['kitulgala'] },

  { category: 'Coast & water', title: 'Madu River Boat Safari', description: 'Glide through a serene mangrove estuary of small islands, birdlife and sheltered waterways.', imageUrl: '/images/driver-guides/emil/emil-kayak-lake.webp', imageAlt: 'Sri Lanka river experience', destinationSlugs: ['madu-river'] },
  { category: 'Coast & water', title: 'East-Coast Snorkelling', description: 'Enjoy clear water and relaxed coastal swimming in one of Sri Lanka’s calm east-coast bays.', imageUrl: '/images/experiences/beaches.webp', imageAlt: 'Sri Lanka east coast beach', destinationSlugs: ['nilaveli', 'marble-beach'] },
  { category: 'Coast & water', title: 'Kite Surfing', description: 'Make the most of Kalpitiya’s steady winds with a session suited to your ability and the conditions.', imageUrl: '/images/experiences/adventure.webp', imageAlt: 'Sri Lanka kite surfing', destinationSlugs: ['kalpitiya'] },
  { category: 'Coast & water', title: 'Beach Relaxation', description: 'Leave room in your route to slow down by the sea, swim, enjoy a sunset and settle into beach life.', imageUrl: '/images/experiences/beaches.webp', imageAlt: 'Sri Lanka beach relaxation', destinationSlugs: ['pasikuda', 'nilaveli', 'mirissa', 'tangalle', 'weligama'] },
];

export const getExperienceSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const experienceMatchTerms: Record<string, string[]> = {
  'ancient-city-tour': ['anuradhapura', 'polonnaruwa'],
  'sigiriya-rock-fortress-climb': ['lion rock'],
  'dambulla-cave-temple-visit': ['dambulla cave temple'],
  'mihintale-sacred-rock-climb': ['mihintale'],
  'ritigala-forest-monastery-walk': ['ritigala'],
  'kandy-city-tour': ['kandy city tour'],
  'temple-of-the-tooth-visit': ['temple of the tooth'],
  'kandy-cultural-dance-show': ['kandy dance', 'cultural dance show'],
  'vedda-village-experience': ['vedda village'],
  'ayurveda-treatment': ['ayurveda', 'ayurvedic'],
  'wilpattu-leopard-safari': ['wilpattu'],
  'cultural-triangle-elephant-safari': ['minneriya', 'kaudulla'],
  'udawalawe-elephant-safari': ['udawalawe safari', 'safari udawalawe'],
  'yala-leopard-safari': ['yala safari'],
  'kumana-wetland-safari': ['kumana'],
  'bundala-birdwatching-safari': ['bundala'],
  'sinharaja-rainforest-trek': ['sinharaja', 'singharaja'],
  'elephant-transit-home-visit': ['elephant transit home'],
  'sea-turtle-conservation-visit': ['turtle conservation', 'turtle farm'],
  'whale-watching': ['whale watching', 'blu whale'],
  'dolphin-watching': ['dolphin watching'],
  'scenic-hill-country-train-journey': ['nanu oya to demodara', 'nanuoya to damodara', 'scenic train journey'],
  'tea-estate-experience': ['tea estate', 'tea garden', 'tea plantation', 'tea factory'],
  'ella-hiking': ['little adam', 'ella rock'],
  'horton-plains-nature-hike': ['horton plains', 'hortion plans'],
  'white-water-rafting': ['white-water rafting'],
  'madu-river-boat-safari': ['madu river'],
  'east-coast-snorkelling': ['snorkeling', 'snorkelling'],
  'kite-surfing': ['kite surfing'],
  'beach-relaxation': ['beach relaxation', 'rest on the beach', 'restting on the beach'],
};

export const experienceDetailCopy: Record<string, string> = {
  'ancient-city-tour': 'Sri Lanka’s ancient capitals reward unhurried exploration. In Anuradhapura, vast stupas and sacred spaces tell the story of an early Buddhist kingdom; in Polonnaruwa, beautifully carved stone and royal ruins reveal a later chapter. Emil can shape the visit around the sites you care about most and the heat of the day.',
  'sigiriya-rock-fortress-climb': 'Sigiriya is most enjoyable with an early start, when the climb is cooler and the rock is quieter. The ascent combines landscaped water gardens, frescoes, the Lion Gate and a final summit view across the Cultural Triangle. It is a signature Sri Lanka experience, best balanced with a relaxed afternoon nearby.',
  'dambulla-cave-temple-visit': 'The five caves of Dambulla hold an extraordinary collection of painted walls and Buddha images. The short climb is rewarded with both the temple interiors and a broad view over the surrounding countryside. It works especially well as a cultural stop between Sigiriya and Kandy.',
  'mihintale-sacred-rock-climb': 'Mihintale feels more contemplative than busy. Its steps lead past monastic ruins, white stupas and viewpoints that open over the dry-zone landscape. Early morning or late afternoon gives you a more comfortable climb and a quieter atmosphere for this deeply significant Buddhist site.',
  'ritigala-forest-monastery-walk': 'Ritigala offers a completely different mood from the grand capitals. Its ruins sit beneath a forest canopy, connected by stone paths, reservoirs and monastic platforms. The experience is less about ticking off monuments and more about enjoying a calm, atmospheric walk through history.',
  'kandy-city-tour': 'Kandy is best explored as a living city rather than a checklist. Emil can combine the lake, central market, viewpoints and small local stops with the Temple of the Tooth or an evening dance performance. The result is a gentle introduction to the cultural heart of the hill country.',
  'temple-of-the-tooth-visit': 'The Temple of the Tooth is one of Sri Lanka’s most important Buddhist places of worship. Visiting with a little time to spare lets you appreciate the rituals, architecture and lakeside setting without rushing. Modest clothing is essential, and the atmosphere is particularly special around evening puja.',
  'kandy-cultural-dance-show': 'A Kandy dance show is a colourful, easy-going way to end a day of sightseeing. Traditional drumming, masked dances and energetic fire walking bring together several regional performance traditions in one lively evening programme.',
  'vedda-village-experience': 'The Vedda village experience offers a respectful introduction to the traditions of Sri Lanka’s indigenous community. It is best approached with curiosity and time for conversation, rather than as a quick photo stop. Emil can arrange it as part of a slower day around Mahiyanganaya and Sorabora Lake.',
  'ayurveda-treatment': 'An Ayurvedic treatment is a welcome pause after days of travelling, climbing and sightseeing. Choose a massage or simple wellness treatment through a reputable local provider, then leave enough time afterwards to relax. Emil can fit it naturally into a Sigiriya or Habarana stay.',
  'wilpattu-leopard-safari': 'Wilpattu’s appeal lies in its quiet, spacious forest and its natural lakes, known locally as villus. The pace is patient rather than rushed: your jeep follows sandy tracks while looking for leopard, sloth bear, elephant and birdlife. Wildlife is never guaranteed, but the landscape alone makes the outing worthwhile.',
  'cultural-triangle-elephant-safari': 'Minneriya and Kaudulla are close neighbours, but conditions change with the season. Emil can help select the park offering the better elephant activity on your travel date. An afternoon safari gives the best chance to see herds moving through grassland and along the reservoir edge.',
  'udawalawe-elephant-safari': 'Udawalawe is known for open country and reliable elephant sightings. Its broad grasslands and reservoir margins make wildlife easier to spot than in denser forest. It is a particularly good fit for families and for travellers moving between Ella and the southern coast.',
  'yala-leopard-safari': 'Yala combines dry forest, scrub, lagoons and open tracks in one of Sri Lanka’s best-known safari regions. Leopards are a major draw, but the experience is just as much about the changing landscape and the possibility of elephants, crocodiles and birdlife along the way.',
  'kumana-wetland-safari': 'Kumana has a quieter, more remote character than some of the island’s busier parks. Its wetlands and coastal forest support a rich bird population, while the open routes can also bring sightings of elephants and other wildlife. It pairs naturally with Arugam Bay and Panama.',
  'bundala-birdwatching-safari': 'Bundala is for travellers who enjoy detail: the shape of a wetland, a flock of waterbirds lifting from the shallows, or seasonal flamingos feeding in the lagoons. A safari here is more peaceful and observant, offering a fine counterpoint to the bigger wildlife parks nearby.',
  'sinharaja-rainforest-trek': 'Sinharaja is a living, breathing rainforest rather than a conventional attraction. A knowledgeable guide helps you notice the endemic birds, giant ferns, small reptiles and changing sounds of the forest. Conditions can be damp and paths uneven, which is part of the adventure.',
  'elephant-transit-home-visit': 'The Elephant Transit Home provides a chance to understand elephant rehabilitation in Sri Lanka. Visits are timed around feeding, and viewing takes place from a respectful distance. It is a meaningful addition to an Udawalawe safari stay, especially for families interested in conservation.',
  'sea-turtle-conservation-visit': 'A turtle conservation visit is best enjoyed with realistic expectations and a responsible operator. Learn about the threats turtles face, the work being done to protect nesting beaches and how travellers can support conservation without disturbing wildlife.',
  'whale-watching': 'Mirissa’s whale-watching trips are seasonal and weather dependent, so flexibility matters. On a suitable morning, a licensed boat trip can offer the chance to see blue whales, dolphins and seabirds in the open ocean. Emil can help you choose an operator and keep the rest of the day light.',
  'dolphin-watching': 'Kalpitiya is one of Sri Lanka’s best-known places for seasonal dolphin watching. Early trips head into open water, where large pods may be seen travelling and feeding. Choosing a responsible operator and calm conditions makes for the most enjoyable experience.',
  'scenic-hill-country-train-journey': 'The train between Nanu Oya and Demodara is a journey to savour, not simply transport. It winds past tea fields, small stations and green valleys before arriving near Ella. Emil can manage the road transfers, luggage and timing so you can relax and enjoy the ride.',
  'tea-estate-experience': 'Tea country is at its best when you see both sides of the story: the ordered green rows of the estate and the craft of the factory. A well-paced visit explains how the leaves are picked, processed and graded, while leaving time to enjoy the cool highland scenery.',
  'ella-hiking': 'Ella offers walks for different energy levels, from the gentle rise of Little Adam’s Peak to the longer trail towards Ella Rock. The best route depends on the weather, your fitness and how much time you have. An early start avoids the stronger sun and makes the views clearer.',
  'horton-plains-nature-hike': 'Horton Plains needs an early departure because cloud can gather as the morning progresses. The circular walk crosses open grassland and cloud forest, creating a cool, fresh contrast to Sri Lanka’s tropical lowlands. Good shoes and a light jacket make the outing more comfortable.',
  'white-water-rafting': 'Kitulgala’s river provides a lively adventure without needing to be an expert rafter. Licensed teams supply safety equipment and instruction, while the surrounding rainforest scenery keeps the experience distinctly Sri Lankan. Water levels vary with the weather, so conditions are always checked locally.',
  'madu-river-boat-safari': 'A boat ride on the Madu River slows the day down. You pass beneath mangroves, around small islands and through calm waterways where birds and water monitors are often seen. It is an easy, family-friendly experience to combine with Galle or a south-coast beach stay.',
  'east-coast-snorkelling': 'The east coast offers clear, calm conditions during its best season. Snorkelling is a relaxed way to enjoy the water near Nilaveli or Marble Beach, with the exact location chosen according to sea conditions and your confidence in the water.',
  'kite-surfing': 'Kalpitiya’s lagoon and reliable winds make it a favourite for kite surfers. Lessons and guided sessions can be arranged for beginners as well as experienced riders. The season and daily wind conditions matter, so this works best as a flexible part of your coastal stay.',
  'beach-relaxation': 'A good Sri Lanka itinerary leaves room for doing less. Whether you prefer Pasikuda’s calm bay, Nilaveli’s east-coast sand or the lively south-coast rhythm of Mirissa and Weligama, Emil can help choose the beach stop that suits your route and travel season.',
};
