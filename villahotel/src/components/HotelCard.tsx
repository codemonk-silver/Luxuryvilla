import React from 'react';
import { MapPin } from 'lucide-react';
import type { Hotel } from '../data/hotel';

interface Props {
  card: Hotel;
}

const HotelCard: React.FC<Props> = ({ card }) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg'>
      {/* Image + Badge */}
      <div className='relative'>
        <img
          src={card.image}
          alt={card.title}
          className='w-full h-[200px] object-cover'
        />
        {card.badge && (
          <span className='absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded'>
            {card.badge}
          </span>
        )}
      </div>

      {/* Bottom Info */}
      <div className='bg-white p-4 flex flex-col gap-2'>
        {/* Title + Rating */}
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold text-md'>{card.title}</h2>
          <span className='text-yellow-500'>{'★'.repeat(card.rating)}</span>
        </div>

        {/* Destination */}
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
  );
};

export default HotelCard;
