export const CONTENT_PENDING = 'Information will be confirmed by Unity Typing and Travels.'

// =====================================================
// SERVICE PLACEHOLDER CONTENT
// Reusable defaults used when the business has not yet
// confirmed detailed information for a given service.
// =====================================================
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

// =====================================================
// SERVICE CATEGORIES
// Represents the major service groups shown in the UI.
// =====================================================
export const serviceCategories = [
  {
    slug: 'government-documentation',
    name: 'Government & Documentation',
    division: 'typing',
    serviceSlugs: ['government-typing-services', 'emirates-id', 'certificate-attestation', 'document-services'],
  },
  {
    slug: 'visa-immigration',
    name: 'Visa & Immigration',
    division: 'typing',
    serviceSlugs: ['visa-related-services', 'golden-visa', 'family-visa'],
  },
  {
    slug: 'business-services',
    name: 'Business Services',
    division: 'typing',
    serviceSlugs: ['business-setup-services'],
  },
  {
    slug: 'labour-mohre',
    name: 'Labour / MOHRE',
    division: 'typing',
    serviceSlugs: [],
    placeholder: true,
  },
  {
    slug: 'other-services',
    name: 'Other Services',
    division: 'typing',
    serviceSlugs: [],
    placeholder: true,
  },
  {
    slug: 'flights',
    name: 'Flights',
    division: 'travels',
    serviceSlugs: ['airline-ticket-booking', 'flight-reservations'],
  },
  {
    slug: 'hotels',
    name: 'Hotels',
    division: 'travels',
    serviceSlugs: ['hotel-booking'],
  },
  {
    slug: 'holidays',
    name: 'Holidays',
    division: 'travels',
    serviceSlugs: ['holiday-packages', 'family-holidays'],
  },
  {
    slug: 'travel-services',
    name: 'Travel Services',
    division: 'travels',
    serviceSlugs: ['international-local-travel', 'travel-arrangements', 'business-travel', 'travel-consultation'],
  },
  {
    slug: 'travel-visas',
    name: 'Travel Visas',
    division: 'travels',
    serviceSlugs: ['visa-services'],
  },
  {
    slug: 'tours',
    name: 'Tours & Packages',
    division: 'travels',
    serviceSlugs: ['tour-packages', 'destination-packages'],
  },
]

// =====================================================
// UNITY TYPING SERVICES
// Centralized list used to render the typing division and its
// detail pages.
// =====================================================
const typingServiceSeeds = [
  [
    'government-typing-services',
    'Government & Documentation',
    'Government Typing Services',
    '⌘',
    'Government typing and application support.',
    'Unity Typing provides government typing service enquiries and application support.',
  ],
  [
    'visa-related-services',
    'Visa & Immigration',
    'Visa-related Services',
    '◈',
    'Visa-related service enquiries and support.',
    'Unity Typing provides visa-related service enquiries and support.',
  ],
  [
    'emirates-id',
    'Government & Documentation',
    'Emirates ID Services',
    '▣',
    'Emirates ID service enquiries and support.',
    'Unity Typing provides Emirates ID service enquiries and support.',
  ],
  [
    'certificate-attestation',
    'Government & Documentation',
    'Certificate Attestation',
    '◇',
    'Certificate attestation service enquiries.',
    'Unity Typing provides certificate attestation service enquiries.',
  ],
  [
    'business-setup-services',
    'Business Services',
    'Business Setup Services',
    '↗',
    'Business setup service enquiries and support.',
    'Unity Typing provides business setup service enquiries and support.',
  ],
  [
    'golden-visa',
    'Visa & Immigration',
    'Golden Visa Services',
    '✦',
    'Golden Visa service enquiries and support.',
    'Unity Typing provides Golden Visa service enquiries and support.',
  ],
  [
    'family-visa',
    'Visa & Immigration',
    'Family Visa Services',
    '◎',
    'Family Visa service enquiries and support.',
    'Unity Typing provides Family Visa service enquiries and support.',
  ],
  [
    'tadbeer-services',
    'Government & Documentation',
    'Tadbeer-related Services',
    '▤',
    'Tadbeer-related service enquiries and support.',
    'Unity Typing provides Tadbeer-related service enquiries and support.',
  ],
  [
    'document-services',
    'Government & Documentation',
    'Document-related Services',
    '▥',
    'Document-related service enquiries and support.',
    'Unity Typing provides document-related service enquiries and support.',
  ],
]

// =====================================================
// UNITY TRAVELS SERVICES
// Centralized list used to render the travel division and its
// detail pages.
// =====================================================
const travelServiceSeeds = [
  [
    'airline-ticket-booking',
    'Flights',
    'Airline Ticket Booking',
    '✈',
    'Airline ticket booking enquiries with Unity Travels.',
    'Unity Travels provides airline ticket booking enquiries.',
  ],
  [
    'hotel-booking',
    'Hotels',
    'Hotel Booking',
    '▰',
    'Hotel booking enquiries with Unity Travels.',
    'Unity Travels provides hotel booking enquiries.',
  ],
  [
    'holiday-packages',
    'Holidays',
    'Holiday Packages',
    '✺',
    'Holiday package enquiries with Unity Travels.',
    'Unity Travels provides holiday package enquiries.',
  ],
  [
    'international-local-travel',
    'Travel Services',
    'International and Local Travel',
    '⌁',
    'International and local travel enquiries.',
    'Unity Travels provides international and local travel enquiries.',
  ],
  [
    'visa-services',
    'Travel Visas',
    'Visa Services',
    '◎',
    'Travel visa service enquiries with Unity Travels.',
    'Unity Travels provides travel visa service enquiries.',
  ],
  [
    'flight-reservations',
    'Flights',
    'Flight Reservations',
    '✈',
    'Flight reservation enquiries with Unity Travels.',
    'Unity Travels provides flight reservation enquiries.',
  ],
  [
    'travel-arrangements',
    'Travel Services',
    'Travel Arrangements',
    '◇',
    'Travel arrangement enquiries with Unity Travels.',
    'Unity Travels provides travel arrangement enquiries.',
  ],
  [
    'tour-packages',
    'Tours & Packages',
    'Tour Packages',
    '✺',
    'Tour package enquiries with Unity Travels.',
    'Unity Travels provides tour package enquiries.',
  ],
  [
    'family-holidays',
    'Holidays',
    'Family Holidays',
    '⌂',
    'Family holiday enquiries with Unity Travels.',
    'Unity Travels provides family holiday enquiries.',
  ],
  [
    'business-travel',
    'Travel Services',
    'Business Travel',
    '▣',
    'Business travel enquiries with Unity Travels.',
    'Unity Travels provides business travel enquiries.',
  ],
  [
    'destination-packages',
    'Tours & Packages',
    'Destination Packages',
    '⌁',
    'Destination package enquiries with Unity Travels.',
    'Unity Travels provides destination package enquiries.',
  ],
  [
    'travel-consultation',
    'Travel Services',
    'Travel Consultation',
    '◇',
    'Travel consultation enquiries with Unity Travels.',
    'Unity Travels provides travel consultation enquiries.',
  ],
]

// =====================================================
// SERVICE FACTORY
// Each service contains the information required by the detail
// component and the card-based homepage list.
// =====================================================
function createService([slug, category, name, icon, shortDescription, fullDescription], division) {
  return {
    name,
    slug,
    division,
    category,
    icon,
    shortDescription,
    ...placeholderDetails,
    fullDescription,
  }
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
