import React from 'react';
import { Users } from "lucide-react";

const MyBookings = () => {

  const savedBooking = localStorage.getItem("booking");
  const booking = savedBooking ? JSON.parse(savedBooking) : null;

  return (
    <div className='px-32 pt-32 pb-20'>
        
        <p className='text-3xl font-playfair font-semibold text-gray-700'>
            My Bookings
        </p>

        <p className='text-sm text-gray-700 w-[500px] mt-2'>
            Easily manage your past, current, and upcoming hotel reservations in one place.
        </p>

        <div className='mt-6'>

            <div className='grid grid-cols-[3fr_2fr_1fr] w-full text-gray-700 border-gray-300 border-b text-md py-3'>
                <p>Hotels</p>
                <p>Date & Timings</p>
                <p>Payment</p>
            </div>

            {/* If no booking yet */}
            {!booking && (
                <p className='text-gray-500 mt-10'>You have no bookings yet.</p>
            )}

            {booking && (
                <div className='grid grid-cols-[3fr_2fr_1fr] border-gray-300 border-b py-6'>
                    
                    {/* Hotel Section */}
                    <div className='flex gap-3'>
                        <img className='w-[200px] h-[130px]' src={booking.image} />
                        <div className='flex flex-col gap-1 mt-1'>
                            <p className='text-gray-700 text-2xl font-playfair'>
                                {booking.title}
                                <span className='font-inter text-sm'>({booking.roomType})</span>
                            </p>

                            <p className='text-gray-500'>{booking.destination}</p>

                            <div className='flex items-center gap-2'>
                                <Users className="w-3 h-3 text-gray-500" />
                                <p className='text-gray-500'>Guest</p>
                            </div>

                            <p className='text-md text-gray-500'>
                                Total <span className='text-gray-700'>{booking.price}</span>
                            </p>
                        </div>
                    </div>

                    {/* Date Section */}
                    <div className='flex gap-8 mt-7'>
                        <div className='flex flex-col'>
                            <p className='text-sm'>Check In</p>
                            <p className='text-sm text-gray-500'>
                                {new Date(booking.checkIn).toDateString()}
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <p className='text-sm'>Check Out</p>
                            <p className='text-sm text-gray-500'>
                                {new Date(booking.checkOut).toDateString()}
                            </p>
                        </div>
                    </div>

                    {/* Payment */}
                    <div className='text-gray-700 font-semibold mt-7'>
                        Paid
                    </div>

                </div>
            )}

        </div>
    </div>
  );
}

export default MyBookings;
