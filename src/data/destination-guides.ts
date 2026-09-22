export interface DestinationGuide {
  attractions: string[];
  experiences: string[];
}

export const mainDestinationSlugs = new Set([
  'anuradhapura', 'arugam-bay', 'bundala-national-park', 'colombo', 'dambulla', 'ella', 'galle', 'habarana', 'haputale', 'kalpitiya', 'kandy', 'kaudulla-national-park', 'kitulgala', 'kumana', 'mahiyanganaya', 'mannar', 'minneriya-national-park', 'mirissa', 'negombo', 'nilaveli', 'nuwara-eliya', 'pasikuda', 'pidurangala-rock', 'polonnaruwa', 'ritigala', 'sigiriya', 'sinharaja', 'tangalle', 'tissamaharama', 'trincomalee', 'udawalawe', 'uppuveli', 'weligama', 'wilpattu', 'yala-national-park',
]);

const guide = (attractions: string[], experiences: string[]): DestinationGuide => ({ attractions, experiences });

export const destinationGuides: Record<string, DestinationGuide> = {
  'anuradhapura': guide(['Sri Maha Bodhi', 'Ruwanwelisaya', 'Abhayagiriya Viharaya', 'Jetavanarama Viharaya', 'Twin Ponds', 'Ancient city ruins', 'Isurumuniya', 'Thuparamaya'], ['Ancient City Tour', 'Sacred-site visit', 'Mihintale excursion']),
  'arugam-bay': guide(['Arugam Bay beach', 'Elephant Rock', 'Panama coast', 'Panama Beach'], ['Beach time', 'Coastal exploration', 'Kumana safari connection']),
  'bundala-national-park': guide(['Wetland lagoons', 'Seasonal flamingos', 'Coastal scrubland'], ['Birdwatching safari', 'Wildlife photography', 'Nature drive']),
  'colombo': guide(['Galle Face Green', 'Pettah markets', 'Gangaramaya Temple'], ['Colombo City Tour', 'Market exploration', 'Airport transfer stop']),
  'dambulla': guide(['Dambulla Cave Temple', 'Painted cave shrines', 'Cultural Triangle views'], ['Cave Temple Visit', 'Heritage sightseeing', 'Private cultural transfer']),
  'demodara': guide(['Demodara Railway Station', 'Hill-country rail line', 'Tea-covered slopes'], ['Scenic train journey', 'Railway photography', 'Ella day trip']),
  'ella': guide(['Ravana Ella Waterfall', 'Nine Arch Bridge', 'Little Adam’s Peak', 'Ella Rock', 'Demodara Railway Station'], ['Ella Hiking', 'Scenic train journey', 'Tea-country exploration']),
  'galle': guide(['Galle Fort', 'Fort ramparts', 'Historic lighthouse', 'Tsunami Museum'], ['Fort walking tour', 'South-coast sightseeing', 'Madu River connection']),
  'habarana': guide(['Village landscapes', 'Cultural show venues', 'Cultural Triangle access', 'Pidurangala Rock'], ['Village Safari', 'Cultural Dance Show', 'Ayurveda Treatment']),
  'haputale': guide(['Lipton’s Seat', 'Tea estates', 'Highland viewpoints'], ['Tea Estate Experience', 'Scenic drive', 'Hill-country walking']),
  'horton-plains-national-park': guide(['Cloud forest', 'Open grasslands', 'Highland viewpoints'], ['Horton Plains Nature Hike', 'Early-morning walk', 'Nature photography']),
  'kalpitiya': guide(['Kalpitiya lagoon', 'North-west coast', 'Kite-surfing waters'], ['Dolphin Watching', 'Kite Surfing', 'Flamingo watching']),
  'kandy': guide(['Temple of the Tooth', 'Kandy Lake', 'Peradeniya Botanical Garden', 'Kandy cultural dance venue', 'Gem and jewellery museum'], ['Kandy City Tour', 'Cultural Dance Show', 'Temple of the Tooth Visit']),
  'kaudulla-national-park': guide(['Kaudulla Reservoir', 'Grassland safari tracks', 'Elephant habitat'], ['Cultural Triangle Elephant Safari', 'Wildlife photography', 'Afternoon jeep safari']),
  'kinniya': guide(['Kinniya fish market', 'Coastal waterfront', 'Trincomalee connection'], ['Fish-market visit', 'Local-life stop', 'East-coast transfer']),
  'kitulgala': guide(['Kelani River', 'Rainforest edge', 'River valley scenery'], ['White-Water Rafting', 'River adventure', 'Rainforest walk']),
  'kumana': guide(['Wetland lagoons', 'Coastal forest', 'Bird habitats'], ['Kumana Wetland Safari', 'Birdwatching', 'Wildlife photography']),
  'madu-river': guide(['Mangrove waterways', 'Small river islands', 'Estuary birdlife'], ['Madu River Boat Safari', 'Mangrove cruise', 'Wildlife spotting']),
  'mahiyanganaya': guide(['Vedda village area', 'Sorabora Lake', '18 Bend Road route', 'Mahiyanganaya countryside'], ['Vedda Village Experience', 'Sorabora Lake boat ride', 'Scenic drive']),
  'mannar': guide(['Mannar Island', 'Coastal birdlife', 'Historic townscape'], ['Mannar City Tour', 'Coastal exploration', 'Birdwatching']),
  'marble-beach': guide(['Sheltered beach', 'Clear coastal water', 'Trincomalee coastline'], ['East-Coast Snorkelling', 'Swimming', 'Beach relaxation']),
  'mihintale': guide(['Sacred rock summit', 'Ancient stupas', 'Monastic ruins'], ['Mihintale Sacred Rock Climb', 'Temple visit', 'Sunset viewing']),
  'minneriya-national-park': guide(['Minneriya Reservoir', 'Elephant grasslands', 'Safari tracks'], ['Cultural Triangle Elephant Safari', 'Wildlife photography', 'Afternoon jeep safari']),
  'mirissa': guide(['Mirissa Beach', 'Coastal viewpoints', 'South-coast waters'], ['Whale Watching', 'Beach Relaxation', 'Coastal boat trip']),
  'nanu-oya': guide(['Nanu Oya Railway Station', 'Tea-country scenery', 'Nuwara Eliya connection'], ['Scenic Hill-Country Train Journey', 'Railway transfer', 'Tea-estate visit']),
  'negombo': guide(['Negombo beach', 'Fish market', 'Hamilton Canal', 'Lagoon', 'Fishing harbour'], ['Fish-market visit', 'Beach relaxation', 'Airport transfer stop']),
  'nilaveli': guide(['Nilaveli Beach', 'Clear-water bay', 'Trincomalee coast'], ['East-Coast Snorkelling', 'Beach relaxation', 'Coastal swimming']),
  'nuwara-eliya': guide(['Tea estates', 'Gregory Lake', 'Colonial town centre', 'Old Post Office', 'Ramboda Falls'], ['Tea Estate Experience', 'City sightseeing', 'Scenic train connection']),
  'panama': guide(['Panama Beach', 'Coastal village landscape', 'Kumana route'], ['Beach relaxation', 'Coastal exploration', 'Safari connection']),
  'pasikuda': guide(['Pasikuda Beach', 'Calm bay', 'East-coast shoreline'], ['Beach relaxation', 'Swimming', 'Coastal stay']),
  'pidurangala-rock': guide(['Pidurangala summit', 'Sigiriya Rock view', 'Cultural Triangle panorama'], ['Rock climb', 'Sunrise or sunset viewing', 'Scenic photography']),
  'polonnaruwa': guide(['Ancient royal city', 'Gal Vihara', 'Polonnaruwa Watadage'], ['Ancient City Tour', 'Heritage cycling or walking', 'Cultural sightseeing']),
  'rekawa': guide(['Rekawa Beach', 'Coastal lagoon', 'Turtle-nesting shore'], ['Sea Turtle Conservation Visit', 'Beach walk', 'Nature watching']),
  'ritigala': guide(['Forest monastery ruins', 'Stone pathways', 'Shaded archaeological reserve'], ['Ritigala Forest Monastery Walk', 'Heritage exploration', 'Forest walk']),
  'sigiriya': guide(['Sigiriya Rock Fortress', 'Pidurangala Rock', 'Water gardens', 'Dambulla Cave Temple', 'Cultural Triangle countryside'], ['Sigiriya Rock Fortress Climb', 'Village Safari', 'Ayurveda Treatment']),
  'sinharaja': guide(['Rainforest trails', 'Forest streams', 'Endemic birdlife'], ['Sinharaja Rainforest Trek', 'Guided jungle walk', 'Waterfall bathing']),
  'sorabora-lake': guide(['Sorabora Lake', 'Rural shoreline', 'Mahiyanganaya countryside'], ['Lake boat ride', 'Birdwatching', 'Scenic relaxation']),
  'tangalle': guide(['Tangalle beaches', 'Quiet coastal coves', 'Rekawa nearby', 'Rekawa turtle-nesting beach'], ['Beach relaxation', 'South-coast drive', 'Turtle conservation connection']),
  'tissamaharama': guide(['Yala safari gateway', 'Southern dry-zone landscape', 'Wildlife-route access', 'Yala National Park'], ['Yala Leopard Safari', 'Safari overnight stay', 'Private wildlife transfer']),
  'trincomalee': guide(['Koneswaram Temple', 'Fort Frederick', 'East-coast beaches', 'Nilaveli Beach', 'Marble Beach', 'Hot Water Wells'], ['Temple visit', 'Coastal sightseeing', 'Snorkelling connection']),
  'udawalawe': guide(['Udawalawe National Park', 'Elephant Transit Home', 'Reservoir landscape', 'Udawalawe Dam'], ['Udawalawe Elephant Safari', 'Elephant Transit Home Visit', 'Wildlife photography']),
  'uppuveli': guide(['Uppuveli Beach', 'Trincomalee coastline', 'East-coast sea'], ['Beach relaxation', 'Coastal swimming', 'Trincomalee sightseeing']),
  'weligama': guide(['Weligama Bay', 'Fish market', 'South-coast beach'], ['Beach relaxation', 'Fish-market visit', 'Coastal exploration']),
  'wilpattu': guide(['Natural villus', 'Forest safari tracks', 'Wildlife habitat'], ['Wilpattu Leopard Safari', 'Birdwatching', 'Private jeep safari']),
  'yala-national-park': guide(['Dry-zone safari landscapes', 'Wildlife lagoons', 'Leopard habitat'], ['Yala Leopard Safari', 'Wildlife photography', 'Private jeep safari']),
  'yapahuwa': guide(['Ancient rock fortress', 'Temple staircase', 'Historic royal capital'], ['Temple visit', 'Heritage sightseeing', 'Cultural Triangle day trip']),
};

export const getDestinationGuide = (slug: string): DestinationGuide => destinationGuides[slug] || guide(
  ['Local highlights', 'Scenic surroundings', 'Private-route access'],
  ['Private sightseeing', 'Local experiences', 'Flexible itinerary planning'],
);

const attractionDescriptions: Record<string, string> = {
  'Kandy Lake': 'A peaceful lakeside circuit at the centre of Kandy, ideal for a gentle walk between the city’s cultural landmarks.',
  'Temple of the Tooth': 'Kandy’s most revered Buddhist temple, where rituals, architecture and the lakeside setting create a meaningful visit.',
  'Peradeniya Botanical Garden': 'A spacious, beautifully maintained garden of giant trees, orchids and riverside paths just outside Kandy.',
  'Ravana Ella Waterfall': 'A dramatic roadside waterfall near Ella, best enjoyed as a refreshing pause on a hill-country drive.',
  'Nine Arch Bridge': 'An elegant colonial-era railway bridge set among jungle and tea-covered hills, especially atmospheric when a train passes.',
  'Little Adam’s Peak': 'A short, rewarding hill walk with wide views across Ella’s valleys and tea country.',
  'Sigiriya Rock Fortress': 'A remarkable ancient citadel rising from the plains, with water gardens, frescoes and far-reaching summit views.',
  'Pidurangala Rock': 'A less formal climb opposite Sigiriya, favoured for its broad sunset panorama and distinctive view of Lion Rock.',
  'Dambulla Cave Temple': 'A UNESCO-listed complex of painted cave shrines and Buddha statues overlooking the Cultural Triangle.',
  'Galle Fort': 'A living walled quarter of ramparts, colonial buildings and sea views, best explored on foot at an unhurried pace.',
  'Mihintale Sacred Rock Climb': 'A climb through ancient Buddhist monuments to a hilltop sanctuary overlooking the Anuradhapura countryside.',
  'Horton Plains Nature Hike': 'An early-morning walk through cloud forest and highland grassland, offering a cooler side of Sri Lanka.',
  'Wilpattu National Park': 'A spacious forest park known for its natural lakes, sandy tracks and patient wildlife viewing.',
  'Yala safari gateway': 'A practical base for early safari departures into Sri Lanka’s best-known leopard country.',
  'Madu River': 'A calm mangrove estuary of small islands and birdlife, made for a slow boat journey.',
  'Sorabora Lake': 'A quiet rural lake near Mahiyanganaya, ideal for a scenic boat ride and a pause from the road.',
};

export const getAttractionDescription = (attraction: string, destinationName: string) =>
  attractionDescriptions[attraction] || `${attraction} is a worthwhile stop while exploring ${destinationName}, easily added to a private route at a pace that suits your day.`;
