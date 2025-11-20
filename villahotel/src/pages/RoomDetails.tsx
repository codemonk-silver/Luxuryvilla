import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { hotels } from "../data/hotel";
import type { Hotel } from '../data/hotel';
import { MapPin, Wifi, Coffee, Bed } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const hotel: Hotel | undefined = hotels.find(h => h.id.toString() === id);

    const [mainImage, setMainImage] = useState<string | undefined>(hotel?.image);
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!hotel) return <p>Hotel not found</p>;

    return (
        <div className='px-32 pt-32 pb-20'>
            {/* Hotel Info */}
            <div className="flex flex-col mb-6">
                <p className="text-2xl font-playfair font-medium leading-none">
                    {hotel.title}
                    <span className="text-[10px] ml-1">({hotel.roomType})</span>
                    {hotel.badge && (
                        <span className="bg-orange-500 text-white text-[8px] px-3 py-1 rounded-full ml-2 relative bottom-1">
                            {hotel.badge}
                        </span>
                    )}
                </p>
                <p className='text-[10px] flex items-center mt-1'>
                    <span className='text-yellow-500 mr-2 text-lg'>
                        {'★'.repeat(hotel.rating)}
                    </span>
                    200+ reviews
                </p>
                <div className='flex items-center gap-1 text-gray-500 text-sm mt-1'>
                    <MapPin className='h-4 w-4' />
                    <p className='text-sm text-gray-400'>{hotel.Destination}</p>
                </div>
            </div>

            {/* Images Section */}
            <div className="flex gap-4 h-[400px]">
                <div className="flex-1">
                    <img 
                        src={mainImage} 
                        alt="Main" 
                        className="w-[600px] h-[410px] object-cover rounded-lg"
                    />
                </div>

                <div className="grid grid-cols-2 gap-2 h-full">
                    {hotel.images.map((img: string, index: number) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-[300px] object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setMainImage(img)}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-between mt-7">
                <div className="flex flex-col">
                    <p className="text-3xl font-playfair font-medium">
                        Experience Luxury Like Never Before
                    </p>
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
                            <p className="text-gray-700 font-medium text-xs">Room Service</p>
                        </div>
                    </div>
                </div>
                <p className="font-semibold text-2xl relative top-2">
                    {hotel.price}
                </p>
            </div>

            <hr className="mt-9 w-[600px] border-gray-300" />

            {/* Check-in / Check-out Section */}
            <div className="bg-white mt-10 w-[1000px] h-[90px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-xl flex justify-between items-center px-14 gap-7">
                <div className="flex gap-7">
                <div className="flex flex-col items-center">
                    <p className="text-md mb-1">Check-In</p>
                    <DatePicker
                        selected={checkIn}
                        onChange={(date: Date | null) => setCheckIn(date)}
                        placeholderText="Add Date"
                        className="px-4 py-1 rounded-lg cursor-pointer bg-gray-100 text-gray-600 w-[140px]"
                        minDate={new Date()}
                    />
                </div>
                <hr className="h-14 w-0.5 bg-gray-300" />
                <div className="flex flex-col items-center">
                    <p className="text-md mb-1">Check-Out</p>
                    <DatePicker
                        selected={checkOut}
                        onChange={(date: Date | null) => setCheckOut(date)}
                        placeholderText="Add Date"
                        className="px-4 py-1 rounded-lg cursor-pointer bg-gray-100 text-gray-600 w-[140px]"
                        minDate={checkIn || new Date()}
                    />
                </div>
                <hr className="h-14 w-0.5 bg-gray-300" />
                 <div className="flex flex-col items-center">
                    <p className="text-md mb-1">Guest</p>
                    <p className="text-sm text-gray-600">2</p>
                    
                </div>
                </div>
                <div className="bg-blue-700 px-10 py-2 rounded-sm text-white text-md">Check Availabilty</div>
            </div>
            <div className="flex flex-col gap-4 mt-16 w-[1000px]">
                {/* 1st Feature */}
                <div className="flex items-start gap-4">
                    <Wifi className="w-6 h-6 text-black mt-1" />
                    <div className="flex flex-col">
                    <p className="font-semibold text-gray-800">Clean Room</p>
                    <p className="text-gray-500 text-sm">We have a clean for you</p>
                    </div>
                </div>

                {/* 2nd Feature */}
                <div className="flex items-start gap-4">
                    <Coffee className="w-6 h-6 text-black mt-1" />
                    <div className="flex flex-col">
                    <p className="font-semibold text-gray-800">Enhanced Clean</p>
                    <p className="text-gray-500 text-sm">This host has committed to staybnb cleaning process</p>
                    </div>
                </div>

                {/* 3rd Feature */}
                <div className="flex items-start gap-4">
                    <Bed className="w-6 h-6 text-black mt-1" />
                    <div className="flex flex-col">
                    <p className="font-semibold text-gray-800">Great Location</p>
                    <p className="text-gray-500 text-sm">90% of recent guests gave the location a 5-star rating</p>
                    </div>
                </div>

                {/* 4th Feature */}
                <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-black mt-1" />
                    <div className="flex flex-col">
                    <p className="font-semibold text-gray-800">Great Check In</p>
                    <p className="text-gray-500 text-sm">100% of the recent guest gave check in process 5 star rating</p>
                    </div>
                </div>
            </div>
            <hr className="mt-9 w-[600px] border-gray-300" />
            <p className="text-gray-500 mt-7 text-sm w-[870px]">
                Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
            </p>
             <hr className="mt-9 w-[600px] border-gray-300" />

        </div>
    );
};

export default RoomDetails;
