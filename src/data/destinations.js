export const DESTINATION_CONTENT_PENDING = 'Information will be confirmed by Unity Travels.'

const destinationPlaceholder = {
  fullDescription: DESTINATION_CONTENT_PENDING,
  popularActivities: [DESTINATION_CONTENT_PENDING],
  visaInformation: DESTINATION_CONTENT_PENDING,
  hotelInformation: DESTINATION_CONTENT_PENDING,
  holidayPackage: DESTINATION_CONTENT_PENDING,
  status: 'placeholder',
  placeholder: true,
}

export const destinations = [
  { slug: 'maldives', name: 'Maldives', country: DESTINATION_CONTENT_PENDING, shortDescription: 'Island escapes', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85', ...destinationPlaceholder },
  { slug: 'bali', name: 'Bali', country: DESTINATION_CONTENT_PENDING, shortDescription: 'Culture & coastlines', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85', ...destinationPlaceholder },
  { slug: 'georgia', name: 'Georgia', country: DESTINATION_CONTENT_PENDING, shortDescription: 'Mountains & old towns', image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=85', ...destinationPlaceholder },
]
