import React from 'react';
import type { Hotel } from '../data/hotel';
import { hotels } from '../data/hotel';
import HotelCard from './HotelCard';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {

  return (
    <div className='px-32 py-16'>
      <div className='flex flex-col items-center text-center gap-4'>
        <p className='font-playfair font-bold text-5xl'>Featured Hotels</p>
        <p className='text-gray-500 text-sm w-[600px]'>
          Discover our handpicked selection of exceptional properties around the world...
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
        {hotels.map((hotel: Hotel) => (
          <Link key={hotel.id} to={`/rooms/${hotel.id}`}>
            <HotelCard card={hotel} />
          </Link>
        ))}
      </div>

      <div className='flex justify-center'>
        <Link to='/rooms'>
          <button className='px-7 py-2 bg-gray-400 border-gray-600 text-black shadow-xl mt-20 rounded-2xl'>
            View All Hotels
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Features;
