import React, { useState, useEffect } from 'react'
import { hotels } from "../data/hotel";
import type { Hotel } from '../data/hotel'
import { MapPin, Wifi, Coffee, Bed } from 'lucide-react';
import { Link } from "react-router-dom";


interface Filters {
  single: boolean;
  family: boolean;
  double: boolean;
  deluxe: boolean;
  p1: boolean;
  p2: boolean;
  p3: boolean;
  p4: boolean;
  lowToHigh: boolean;
  highToLow: boolean;
  newest: boolean;
}

const AllRooms: React.FC = () => {

  // --------------------------
  //   SCROLL TO TOP ON PAGE LOAD
  // --------------------------
  useEffect(() => {
    window.scrollTo( 0, 0 );
  }, []);

  // --------------------------
  //   FILTER STATE
  // --------------------------
  const [filters, setFilters] = useState<Filters>({
    single: false,
    family: false,
    double: false,
    deluxe: false,
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    lowToHigh: false,
    highToLow: false,
    newest: false,
  });

  const toggleFilter = (key: keyof Filters) => {
    setFilters(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const clearFilters = () => {
    setFilters({
      single: false,
      family: false,
      double: false,
      deluxe: false,
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      lowToHigh: false,
      highToLow: false,
      newest: false,
    });
  };

  // --------------------------
  //   FILTERED HOTELS
  // --------------------------
  let filteredHotels: Hotel[] = hotels.slice(0, 4);

  const roomFilters: string[] = [];
  if (filters.single) roomFilters.push("Single Bed");
  if (filters.family) roomFilters.push("Family Suites");
  if (filters.double) roomFilters.push("Double Bed");
  if (filters.deluxe) roomFilters.push("Deluxe Room");

  if (roomFilters.length > 0) {
    filteredHotels = filteredHotels.filter(hotel =>
      roomFilters.includes(hotel.roomType)
    );
  }

  const priceFilters: string[] = [];
  if (filters.p1) priceFilters.push("$2500 to $3000");
  if (filters.p2) priceFilters.push("$3000 to $5000");
  if (filters.p3) priceFilters.push("$2500 to $3500");
  if (filters.p4) priceFilters.push("$3000 to $6000");

  if (priceFilters.length > 0) {
    filteredHotels = filteredHotels.filter(hotel =>
      priceFilters.includes(hotel.price)
    );
  }

  if (filters.lowToHigh) {
    filteredHotels = filteredHotels.sort((a, b) =>
      Number(a.price.replace(/\D/g, '')) - Number(b.price.replace(/\D/g, ''))
    );
  }
  if (filters.highToLow) {
    filteredHotels = filteredHotels.sort((a, b) =>
      Number(b.price.replace(/\D/g, '')) - Number(a.price.replace(/\D/g, ''))
    );
  }
  if (filters.newest) {
    filteredHotels = filteredHotels.sort((a, b) => b.id - a.id);
  }

  return (
    <div className='pt-36 px-32 pb-20'>
      <p className='text-3xl mb-2 font-semibold font-playfair'>Hotel Rooms</p>
      <p className='text-gray-500 text-sm w-[500px]'>
          Take advantage of our limited-time offers and special packages to enhance your stay.
      </p>

      <div className='flex justify-between mt-7'>
        {/* LEFT SIDE — HOTELS */}

        <div className='flex flex-col gap-8'>
          {filteredHotels.map((hotel, index) => (
            <div key={hotel.id}>
              <Link to={`/rooms/${hotel.id}`} className="flex gap-6 cursor-pointer">
                <img src={hotel.image} className='w-full h-[250px] object-cover rounded-xl' />
                <div className='flex flex-col gap-1.5'>
                  <p className='text-2xl font-playfair font-semibold mt-4'>{hotel.title}</p>
                  <p className='text-xs'>
                    <span className='text-yellow-500 mr-4 text-2xl'>
                      {'★'.repeat(hotel.rating)}
                    </span>
                    200+ reviews
                  </p>

                  <div className='flex items-center gap-1 text-gray-500 text-sm mt-2'>
                      <MapPin className='h-4 w-4' />
                      <p className='text-sm text-gray-400'>{hotel.Destination}</p>
                  </div>

                  <div className="flex gap-1 mt-2.5 w-[500px]">
                    <div className="flex items-center gap-2 bg-gray-200 px-4 py-0.5 text-sm rounded-lg">
                        <Wifi className="w-3 h-3 text-gray-600" />
                        <p className="text-gray-700 font-medium text-xs">Free Wifi</p>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg">
                        <Coffee className="w-3 h-3 text-gray-600" />
                        <p className="text-gray-700 font-medium text-xs">Free Coffee</p>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg">
                        <Bed className="w-3 h-3 text-gray-600" />
                        <p className="text-gray-700 font-medium  text-xs">Room Service</p>
                    </div>
                  </div>

                  <p className='text-md mt-3'>{hotel.price}</p>
                </div>
              </Link>

              {index !== filteredHotels.length - 1 && (
                <hr className='mt-8 w-[800px] border-gray-300' />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE — FILTERS */}
        <div className='bg-transparent border-2 border-gray-300 w-[250px] h-[500px]'>
          <div className='flex justify-between py-3 px-4'>
            <p className='text-gray-800'>FILTERS</p>
            <button 
              onClick={clearFilters}
              className='text-gray-400 text-sm'
            >
              CLEAR
            </button>
          </div>

          <hr className='w-full border-gray-300' />

          {/* POPULAR FILTERS */}
          <div className='py-3 flex flex-col gap-1.5 px-4'>
            <p className='text-sm mb-2'>Popular filters</p>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.single} onChange={() => toggleFilter("single")} />
              <p className='text-sm text-gray-500'>Single Bed</p>
            </label>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.family} onChange={() => toggleFilter("family")} />
              <p className='text-sm text-gray-500'>Family Suites</p>
            </label>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.double} onChange={() => toggleFilter("double")} />
              <p className='text-sm text-gray-500'>Double Bed</p>
            </label>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.deluxe} onChange={() => toggleFilter("deluxe")} />
              <p className='text-sm text-gray-500'>Deluxe Room</p>
            </label>
          </div>

          {/* PRICE FILTERS */}
          <div className='py-3 flex flex-col gap-1.5 px-4'>
            <p className='text-sm mb-2'>Price</p>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.p1} onChange={() => toggleFilter("p1")} />
              <p className='text-sm text-gray-500'>$2500 to $3000</p>
            </label>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.p2} onChange={() => toggleFilter("p2")} />
              <p className='text-sm text-gray-500'>$3000 to $5000</p>
            </label>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.p3} onChange={() => toggleFilter("p3")} />
              <p className='text-sm text-gray-500'>$2500 to $3500</p>
            </label>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.p4} onChange={() => toggleFilter("p4")} />
              <p className='text-sm text-gray-500'>$3000 to $6000</p>
            </label>
          </div>

          {/* SORT FILTER */}
          <div className='py-3 flex flex-col gap-1.5 px-4'>
            <p className='text-sm mb-2'>Sort By</p>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.lowToHigh} onChange={() => toggleFilter("lowToHigh")} />
              <p className='text-sm text-gray-500'>Price Low to High</p>
            </label>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.highToLow} onChange={() => toggleFilter("highToLow")} />
              <p className='text-sm text-gray-500'>Price High to Low</p>
            </label>

            <label className='flex gap-2 items-center'>
              <input type='checkbox' checked={filters.newest} onChange={() => toggleFilter("newest")} />
              <p className='text-sm text-gray-500'>Newest First</p>
            </label>
          </div>
        </div>
      </div>

      <div className='mt-20 w-full flex justify-center'>
        <button className='px-5 py-2 bg-blue-950 text-white rounded-xl'>
            Show More
        </button>
      </div>
    </div>
  )
}

export default AllRooms;
