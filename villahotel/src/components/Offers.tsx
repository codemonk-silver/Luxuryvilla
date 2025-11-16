import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import offer1 from '../assets/offer1.jpg'
import offer2 from '../assets/offer2.jpg'
import offer3 from '../assets/offer3.jpg'

interface Card {
    id: number
    image: string
    badge: string
    title: string
    desc: string
    date: string
    name: string
}

const Offers: React.FC = () => {
    const cards: Card[] = [
        {
            id: 1,
            image: offer1,
            badge: '20%',
            title: 'Summer Escape Package',
            desc: 'Enjoy a complimentary night and daily breakfast',
            date: 'Expires Aug 31',
            name: 'View Offers'
        },
        {
            id: 2,
            image: offer2,
            badge: '25%',
            title: 'Romantic Getaway',
            desc: 'Special couples package including spa treatment',
            date: 'Expires Sep 20',
            name: 'View Offers'
        },
        {
            id: 3,
            image: offer3,
            badge: '20%',
            title: 'Early bird special',
            desc: 'Book 60 days in advance and save on your stay at any of our luxury properties worldwide.',
            date: 'Expires Aug 21',
            name: 'View Offers'
        }
    ]

    return (
        <div className='px-32 py-10 bg-gray-100 min-h-[80vh]'>
            <div className='py-16'>
                <div className='flex justify-between'>
                    <p className='font-playfair text-4xl font-bold'>
                        Exclusive Offers
                    </p>
                    <Link className='text-md' to='/'>View All Offers</Link>
                </div>

                <p className='text-gray-500 text-sm w-[500px] mt-3'>
                    Take advantage of our limited time offer and special package to enchance your stay and create unforgettable memories.
                </p>

                {/* Cards */}
                <div className='grid grid-cols-3 gap-6 mt-10'>
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className="h-[250px] rounded-xl bg-cover bg-center relative overflow-hidden flex flex-col p-6"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.15), rgba(0,0,0,0)),
                                    url(${card.image})
                                `
                            }}
                        >
                            {/* Badge */}
                            <span className="bg-white text-black text-sm px-3 py-1 rounded absolute top-4 left-4">
                                {card.badge}
                            </span>

                            {/* Bottom Content */}
                            <div className="relative z-10 text-white w-[350px] mt-12">
                                <p className="font-bold text-xl">{card.title}</p>
                                <p className="text-sm mt-2">{card.desc}</p>
                                <p className="text-xs mt-2 opacity-80">{card.date}</p>

                                <Link
                                    to="/"
                                    className="flex items-center gap-2 text-sm mt-6 font-semibold underline"
                                >
                                    <ArrowRight className="h-4 w-4" />
                                    {card.name}
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Offers
