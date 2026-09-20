import { experiences as experienceFiles } from "./experience-files";

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

export const experiences: Experience[] = experienceFiles;

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
