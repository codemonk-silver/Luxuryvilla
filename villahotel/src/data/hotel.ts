export interface Hotel {
  id: number;
  image: string;
  badge?: string;
  title: string;
  Destination: string;
  rating: number;
  price: string;
  desc: string;
   roomType: 'Single Bed' | 'Family Suites' | 'Double Bed' | 'Deluxe Room';
}

import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';
import feature4 from '../assets/feature4.jpg';

export const hotels: Hotel[] = [
  {
    id: 1,
    image: feature1,
    badge: 'Best Seller',
    title: 'The Grand Resort',
    Destination: 'Maldives',
    rating: 5,
    price: '$450/night',
    desc: 'view details',
    roomType: 'Single Bed',
  },
  {
    id: 2,
    image: feature2,
    title: 'The Grand Resort',
    Destination: 'Greece',
    rating: 5,
    price: '$430/night',
    desc: 'view details',
    roomType: 'Family Suites',
  },
  {
    id: 3,
    image: feature3,
    badge: 'Best Seller',
    title: 'The Grand Resort',
    Destination: 'Paris',
    rating: 5,
    price: '$450/night',
    desc: 'view details',
    roomType: 'Double Bed',
  },
  {
    id: 4,
    image: feature4,
    badge: 'New',
    title: 'The Grand Resort',
    Destination: 'Maldives',
    rating: 5,
    price: '$450/night',
    desc: 'view details',
    roomType: 'Deluxe Room',
  }
];
