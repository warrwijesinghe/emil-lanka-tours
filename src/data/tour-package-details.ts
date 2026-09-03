export interface TourPackageDetails {
  included: string[];
  excluded: string[];
}

/**
 * Edit these package notes without changing the day-by-day itinerary in `tours.ts`.
 * Each entry matches the route and activities named in that tour's itinerary.
 */
export const tourPackageDetails: Record<string, TourPackageDetails> = {
  'ELT-RT-001': {
    included: ['Private air-conditioned vehicle and chauffeur for the full Grand Island route.', 'Airport meet-and-greet and final airport transfer shown in the itinerary.', 'Flexible driving between the Cultural Triangle, east coast, hill country and south coast.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Entry tickets for heritage sites, museums and cultural performances.', 'Safari jeeps, park entry, train tickets and optional activities such as whale watching.', 'International flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-002': {
    included: ['Private air-conditioned vehicle and chauffeur for the airport-to-Negombo route.', 'Airport meet-and-greet and final airport transfer shown in the itinerary.', 'Flexible driving between Mirissa, Udawalawe, Ella, Kandy and the ancient cities.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Whale-watching, safari jeep and national-park entry fees.', 'Temple, ancient-city, museum and cultural-show admission fees.', 'International flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-003': {
    included: ['Private air-conditioned vehicle and chauffeur for the airport-to-Negombo route.', 'Airport meet-and-greet and final airport transfer shown in the itinerary.', 'Flexible driving through Anuradhapura, Trincomalee, Sigiriya, hill country and the south coast.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Wilpattu entry and safari jeep fees, dolphin watching and other optional water activities.', 'Entry tickets for temples, ancient cities, Sigiriya and other attractions.', 'International flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-004': {
    included: ['Private air-conditioned vehicle and chauffeur for the north-east heritage route.', 'Airport meet-and-greet shown on Day 1.', 'Flexible driving between Anuradhapura, Trincomalee, Sigiriya and Mahiyanganaya.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Wilpattu and elephant-safari jeeps, park entry, dolphin watching and tuk-tuk tours.', 'Admission to temples, heritage sites, cultural shows and Ayurveda treatments.', 'International flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-005': {
    included: ['Private air-conditioned vehicle and chauffeur for the Culture, Tea Country and Safari route.', 'Airport meet-and-greet shown on Day 1.', 'Flexible driving through Sigiriya, Polonnaruwa, Kandy and the central highlands.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Site admission, village activities, cultural-show and Ayurveda charges.', 'Safari jeep and park entry fees, plus scenic-train tickets.', 'International flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-006': {
    included: ['Private air-conditioned vehicle and chauffeur for the Arugam Bay, Ella, Kandy and Sigiriya route.', 'Airport meet-and-greet shown on Day 1.', 'Flexible driving for the hill-country journey and listed sightseeing stops.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Kumana safari jeep and national-park entry fees.', 'Temple, Dambulla, Sigiriya and village-safari admission fees.', 'International flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-007': {
    included: ['Private air-conditioned vehicle and chauffeur for the Kalpitiya, Cultural Triangle and hill-country route.', 'Airport meet-and-greet shown on Day 1.', 'Flexible driving between Kalpitiya, Anuradhapura, Sigiriya, Kandy and Ella.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Dolphin or whale watching, Wilpattu safari jeep and park entry fees.', 'Admission to ancient sites, Sigiriya, temples and cultural experiences.', 'International flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-008': {
    included: ['Private air-conditioned vehicle and chauffeur for the ancient-cities and hill-country route.', 'Airport meet-and-greet shown on Day 1.', 'Flexible driving between Yapahuwa, Anuradhapura, Sigiriya, Kandy and Ella.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Wilpattu and elephant-safari jeeps, park entry and village-safari fees.', 'Admission to Yapahuwa, ancient cities, Sigiriya, temples and scenic-train tickets.', 'International flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-009': {
    included: ['Private air-conditioned vehicle and chauffeur for the classic island route.', 'Airport meet-and-greet and final airport transfer shown in the itinerary.', 'Flexible driving between Sigiriya, Kandy, Ella, Mirissa and Negombo.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Elephant-safari jeep and park entry, Madu River boat safari and other optional activities.', 'Admission to Sigiriya, Polonnaruwa, Dambulla, temples and Galle Fort attractions.', 'International flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-010': {
    included: ['Private air-conditioned vehicle and chauffeur for the ancient-cities and hill-country route.', 'Airport meet-and-greet shown on Day 1.', 'Flexible driving between Anuradhapura, Sigiriya, Kandy, Nuwara Eliya and Ella.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Safari jeep and park entry fees, plus village-safari charges.', 'Admission to Anuradhapura, Mihintale, Sigiriya, Dambulla and temples.', 'Scenic-train tickets, international flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-011': {
    included: ['Private air-conditioned vehicle and chauffeur for the Sigiriya, Ella and Mirissa route.', 'Airport meet-and-greet and final airport transfer shown in the itinerary.', 'Flexible driving between Sigiriya, Kandy, Nuwara Eliya, Ella and the south coast.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Elephant-safari jeep and park entry, Madu River boat safari and optional activities.', 'Admission to Sigiriya, Temple of the Tooth, Horton Plains, Galle Fort and other sites.', 'Scenic-train tickets, international flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-012': {
    included: ['Private air-conditioned vehicle and chauffeur for the Sigiriya, Pasikudah, Ella and south-coast route.', 'Airport meet-and-greet shown on Day 1 and the Negombo transfer shown on Day 7.', 'Flexible driving between the Cultural Triangle, Pasikudah, Kandy, Ella and Mirissa.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'Elephant-safari jeep and park entry, Madu River boat safari and turtle-hatchery fees.', 'Admission to Dambulla, Sigiriya, Polonnaruwa, temples and other attractions.', 'Train tickets, international flights, visa, travel insurance and personal expenses.'],
  },
  'ELT-RT-013': {
    included: ['Private air-conditioned vehicle and chauffeur for the adventure route from Anuradhapura to Mirissa.', 'Airport meet-and-greet and final airport transfer shown in the itinerary.', 'Flexible driving between ancient cities, Kitulgala, Ella, Udawalawe and the south coast.', 'Fuel, expressway tolls and vehicle parking for the stated route.'],
    excluded: ['Accommodation and hotel meals, unless stated in your written quotation.', 'White-water rafting, safari jeep and national-park entry fees.', 'Admission to heritage sites, temples and scenic-train tickets.', 'International flights, visa, travel insurance and personal expenses.'],
  },
};
