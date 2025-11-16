import React from 'react';
import { MapPin } from 'lucide-react';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';
import feature4 from '../assets/feature4.jpg';

interface Card {
  id: number;
  image: string;
  badge?: string;
  title: string;
  Destination: string;
  rating: number;
  price: string;
  desc: string;
}

const Features: React.FC = () => {
  const cards: Card[] = [
    {
      id: 1,
      image: feature1,
      badge: 'Best Seller',
      title: 'The Grand Resort',
      Destination: 'Maldives',
      rating: 5,
      price: '$450/night',
      desc: 'view details'
    },
    {
      id: 2,
      image: feature2,
      title: 'The Grand Resort',
      Destination: 'Greece',
      rating: 5,
      price: '$430/night',
      desc: 'view details'
    },
    {
      id: 3,
      image: feature3,
      badge: 'Best Seller',
      title: 'The Grand Resort',
      Destination: 'Paris',
      rating: 5,
      price: '$450/night',
      desc: 'view details'
    },
    {
      id: 4,
      image: feature4,
      badge: 'New',
      title: 'The Grand Resort',
      Destination: 'Maldives',
      rating: 5,
      price: '$450/night',
      desc: 'view details'
    }
  ];

  return (
    <div className='px-32 py-16'>
      <div className='flex flex-col items-center justify-center text-center gap-4'>
        <p className='font-playfair font-bold text-5xl'>
          Featured Hotels
        </p>
        <p className='text-gray-500 text-sm w-[600px]'>
          Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences
        </p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
        {cards.map((card) => (
          <div key={card.id} className='rounded-xl overflow-hidden shadow-lg'>
            {/* Image + Badge */}
            <div className='relative'>
              <img src={card.image} alt={card.title} className='w-full h-[200px] object-cover' />
              {card.badge && (
                <span className='absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded'>
                  {card.badge}
                </span>
              )}
            </div>

            {/* White Info Section */}
            <div className='bg-white p-4 flex flex-col gap-2'>
              {/* Title + Rating */}
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-md'>{card.title}</h2>
                <span className='text-yellow-500'>{'★'.repeat(card.rating)}</span>
              </div>

              {/* Destination with Location Icon */}
              <div className='flex items-center gap-1 text-gray-500 text-sm'>
                <MapPin className='h-4 w-4' />
                <p>{card.Destination}</p>
              </div>

              {/* Price + Desc */}
              <div className='flex justify-between items-center text-sm font-medium'>
                <p className='text-black'>{card.price}</p>
                <p className='text-blue-500 cursor-pointer'>{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
      <button className='px-7 py-2 bg-gray-400 border-gray-600 text-black shadow-xl mt-20 rounded-2xl'>
        View All Hotels
      </button>
      </div>
    </div>
  );
};

export default Features;
