export const CONTENT_PENDING = 'Information will be confirmed by Unity Typing and Travels.'

const placeholderDetails = {
  fullDescription: CONTENT_PENDING,
  whoItsFor: CONTENT_PENDING,
  requiredDocuments: [CONTENT_PENDING],
  requirements: [CONTENT_PENDING],
  processSteps: [CONTENT_PENDING],
  processingInformation: CONTENT_PENDING,
  fees: CONTENT_PENDING,
  notes: [CONTENT_PENDING],
  faqs: [{ question: 'What information is required?', answer: CONTENT_PENDING }],
  status: 'placeholder',
  placeholder: true,
}

export const serviceCategories = [
  { slug: 'government-documentation', name: 'Government & Documentation', division: 'typing', serviceSlugs: ['emirates-id', 'government-services', 'document-services'] },
  { slug: 'visa-immigration', name: 'Visa & Immigration', division: 'typing', serviceSlugs: ['visa-immigration'] },
  { slug: 'labour-mohre', name: 'Labour / MOHRE', division: 'typing', serviceSlugs: [], placeholder: true },
  { slug: 'business-services', name: 'Business Services', division: 'typing', serviceSlugs: ['business-services', 'pro-services'] },
  { slug: 'other-services', name: 'Other Services', division: 'typing', serviceSlugs: [], placeholder: true },
  { slug: 'flights', name: 'Flights', division: 'travels', serviceSlugs: ['flights'] },
  { slug: 'hotels', name: 'Hotels', division: 'travels', serviceSlugs: ['hotels'] },
  { slug: 'holidays', name: 'Holidays', division: 'travels', serviceSlugs: ['holidays'] },
  { slug: 'travel-visas', name: 'Travel Visas', division: 'travels', serviceSlugs: ['travel-visas'] },
  { slug: 'tours', name: 'Tours & Activities', division: 'travels', serviceSlugs: ['tours-activities'] },
]

const typingServiceSeeds = [
  ['visa-immigration', 'Visa & Immigration', 'Visa & Immigration', '◈', 'A clear starting point for visa applications, renewals and related support.', 'A starting point for discussing visa and immigration-related support with Unity.'],
  ['emirates-id', 'Government & Documentation', 'Emirates ID', '▣', 'Guidance for Emirates ID applications, renewals and replacement requests.', 'A starting point for discussing Emirates ID application, renewal or replacement support with Unity.'],
  ['government-services', 'Government & Documentation', 'Government Services', '⌘', 'Professional assistance with government applications and documentation.', 'A starting point for discussing government application and documentation support with Unity.'],
  ['business-services', 'Business Services', 'Business Services', '↗', 'Support for business setup, licensing and corporate documentation.', 'A starting point for discussing business setup, licensing and corporate documentation support with Unity.'],
  ['document-services', 'Government & Documentation', 'Document Services', '▤', 'Typing, document clearing, attestation and translation support.', 'A starting point for discussing typing, document clearing, attestation or translation support with Unity.'],
  ['pro-services', 'Business Services', 'PRO Services', '✦', 'Administrative support for government and corporate workflows.', 'A starting point for discussing government and corporate administrative support with Unity.'],
]

const travelServiceSeeds = [
  ['flights', 'Flights', 'Flights', '✈', 'Flight ticket and airline booking assistance for your next journey.', 'A starting point for discussing flight ticket and airline booking enquiries with Unity Travels.'],
  ['hotels', 'Hotels', 'Hotels', '▰', 'Find accommodation options to suit your route, dates and travel style.', 'A starting point for discussing accommodation and hotel booking enquiries with Unity Travels.'],
  ['holidays', 'Holidays', 'Holidays', '✺', 'Explore holiday packages and tailored travel planning.', 'A starting point for discussing holiday planning and package enquiries with Unity Travels.'],
  ['travel-visas', 'Travel Visas', 'Travel Visas', '◎', 'Guidance for international tourist and visit visa enquiries.', 'A starting point for discussing international tourist and visit visa enquiries with Unity Travels.'],
  ['destinations', 'Destinations', 'Destinations', '⌁', 'Discover routes, places and experiences worth building a trip around.', 'A starting point for discussing destination planning with Unity Travels.'],
  ['tours-activities', 'Tours & Activities', 'Tours & Activities', '◇', 'Add memorable experiences and activities to your itinerary.', 'A starting point for discussing tours, activities and custom travel planning with Unity Travels.'],
]

function createService([slug, category, name, icon, shortDescription, fullDescription], division) {
  return { name, slug, division, category, icon, shortDescription, ...placeholderDetails, fullDescription }
}

export const services = [
  ...typingServiceSeeds.map((service) => createService(service, 'typing')),
  ...travelServiceSeeds.map((service) => createService(service, 'travels')),
]

export const travelServices = services.filter((service) => service.division === 'travels')
export const typingServices = services.filter((service) => service.division === 'typing')

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
