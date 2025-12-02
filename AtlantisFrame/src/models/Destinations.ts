export const Destinations = [
  {
    id: '1',
    name: 'Azores',
    image: "",
    country: 'Portugal',
    region: 'EUROPE',
    description:
      'The Azores are a Portuguese archipelago in the Atlantic Ocean, known for volcanic landscapes, green valleys, and picturesque villages.',
    activities: ['Hiking', 'Beaches', 'Monuments'],
  },
  {
    id: '2',
    name: 'Capri',
    image: "",
    country: 'Italy',
    region: 'EUROPE',
    description:
      'Capri is an Italian island in the Tyrrhenian Sea, known for dramatic limestone cliffs and the Blue Grotto.',
    activities: ['Beaches', 'Monuments', 'Hiking'],
  },
  {
    id: '3',
    name: 'Aruba',
    image: "",
    country: 'Netherlands Antilles',
    region: 'NORTH AMERICA',
    description:
      'Aruba is a Caribbean island famous for its white sandy beaches, sunny climate, and water sports.',
    activities: ['Beaches', 'Hiking'],
  },
  {
    id: '4',
    name: 'Boston',
    image: "",
    country: 'USA',
    region: 'NORTH AMERICA',
    description:
      'Historic city known for the Freedom Trail, rich culture, and prestigious universities.',
    activities: ['Urban Culture', 'Monuments'],
  },
  {
    id: '5',
    name: 'Montana',
    image: "",
    country: 'USA',
    region: 'NORTH AMERICA',
    description:
      'Montana offers vast wilderness, national parks, and excellent hiking opportunities.',
    activities: ['Hiking', 'Monuments'],
  },
  {
    id: '6',
    name: 'Vancouver',
    image: "",
    country: 'Canada',
    region: 'NORTH AMERICA',
    description:
      'Vancouver is a coastal city surrounded by mountains and parks, with a vibrant urban culture.',
    activities: ['Urban Culture', 'Hiking'],
  },
  {
    id: '7',
    name: 'Morocco',
    image: "",
    country: 'Morocco',
    region: 'AFRICA',
    description:
      'Morocco offers bustling medinas, desert landscapes, and historic sites.',
    activities: ['Urban Culture', 'Monuments'],
  },
  {
    id: '8',
    name: 'Maldives',
    image: "",
    country: 'Maldives',
    region: 'AFRICA',
    description:
      'The Maldives is a tropical paradise with white sand beaches and coral reefs.',
    activities: ['Beaches', 'Hiking'],
  },
  {
    id: '9',
    name: 'Singapore',
    image: "",
    country: 'Singapore',
    region: 'ASIA',
    description:
      'Singapore is a modern city-state known for urban culture, gardens, and historic monuments.',
    activities: ['Urban Culture', 'Monuments'],
  },
  {
    id: '10',
    name: 'Seychelles',
    image: "",
    country: 'Seychelles',
    region: 'ASIA',
    description:
      'The Seychelles are an island nation with pristine beaches, coral reefs, and hiking trails.',
    activities: ['Beaches', 'Hiking'],
  },
];

export interface DestinationSummary {
  image: string | undefined;
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  activities: string[];
}