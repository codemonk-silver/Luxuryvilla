import React from 'react'
import { Star } from 'lucide-react'
import test1 from '../assets/test1.jpg'

interface TestimonyCard {
    id: number;
    image: string;
    name: string;
    country: string;
    rating: number;
    desc: string;
}

const Testimonies: React.FC = () => {
    const cards: TestimonyCard[] = [
        {
            id: 1,
            image: test1,
            name: 'Emma Johnson',
            country: 'Barcelona, Spain',
            rating: 5,
            desc: 'The hotel exceeded all expectations. Stunning rooms, fantastic service and unforgettable experience.',
        },
        {
            id: 2,
            image: test1,
            name: 'Grace Johnson',
            country: 'Paris, France',
            rating: 5,
            desc: 'A luxurious stay in every sense. The staff were extremely friendly and the views were breathtaking.',
        },
        {
            id: 3,
            image: test1,
            name: 'Sarah Johnson',
            country: 'London, United Kingdom',
            rating: 5,
            desc: 'Beautiful ambience, excellent hospitality and exceptional comfort. Highly recommended.',
        }
    ]

    return (
        <div className='px-32 py-10'>
            <div className='flex flex-col justify-center items-center text-center py-7'>
                <p className='text-3xl font-playfair font-bold'>
                    What Our Guests Say
                </p>
                <p className='text-gray-500 text-sm w-[550px] mt-5'>
                    Discover why discerning travellers choose luxuryHotel for their luxury accomodation around the world
                </p>

                <div className='mt-10 grid grid-cols-3 gap-6'>
                    {cards.map((card) => (
                        <div 
                            key={card.id}
                            className='bg-white shadow-lg rounded-xl p-5 w-[350px]'
                        >
                            {/* Image + name + country */}
                            <div className='flex items-center gap-4'>
                                <img 
                                    src={card.image}
                                    alt={card.name}
                                    className='w-16 h-16 rounded-full object-cover'
                                />
                                <div>
                                    <p className='font-semibold text-left text-lg'>{card.name}</p>
                                    <p className='text-gray-500 text-left text-sm'>{card.country}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className='flex mt-4'>
                                {Array.from({ length: card.rating }).map((_, idx) => (
                                    <Star 
                                        key={idx}
                                        size={18}
                                        className='fill-yellow-500 text-yellow-500'
                                    />
                                ))}
                            </div>

                            {/* Description */}
                            <p className='text-gray-600 text-sm mt-3 leading-relaxed text-left'>
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Testimonies
