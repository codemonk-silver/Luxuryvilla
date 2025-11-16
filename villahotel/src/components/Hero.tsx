import { MapPin } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import React, { useRef } from "react";

const Hero = () => {
    const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  const handleCheckInClick = () => {
    checkInRef.current?.showPicker?.();
  };

  const handleCheckOutClick = () => {
    checkOutRef.current?.showPicker?.();
  };
  return (
    <>
    <div className="h-screen relative bg-cover bg-center bg-norepeat"
        style={{  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/hero_img.png')` }}>
    </div>
    <div className="px-32 absolute top-[35%]">
    <div className="bg-[#49B9FF80] text-white px-8 rounded-full py-1.5 w-[290px]">The Ultimate Hotel Experience</div>
    <p className="text-5xl font-playfair text-white w-[500px] font-bold mt-3">
        Discover Your Perfect Getaway Destination
    </p>
    <p className="text-white text-sm mt-3 w-[400px]">Unparalleled luxury and comfort await at the world's most exlusive hotels and resorts. start your journey today.</p>
    <div className="bg-white w-[700px] h-[90px] mt-7 rounded-xl">
        <div className="flex gap-4 py-2.5 pl-5 items-center">
            <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <p className="text-gray-400">Destination</p>
                </div>
                <input type="text" placeholder="Type here" name="text" className="border rounded-md border-gray-400 px-4 py-1 w-[180px] text-xs" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                    <CalendarCheck className="h-5 w-5 text-gray-400" />
                    <p className="text-gray-400">Check in</p>
                </div>
               <div onClick={handleCheckInClick}> <input type="date" ref={checkInRef} placeholder="dd/mm/yyyy" name="text" className="border rounded-md border-gray-400 px-4 py-1 w-[130px] text-xs" /></div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                    <CalendarCheck className="h-5 w-5 text-gray-400" />
                    <p className="text-gray-400">Check out</p>
                </div>
                <div onClick={handleCheckOutClick}> <input type="date" ref={checkOutRef} placeholder="dd/mm/yyyy" name="text" className="border rounded-md border-gray-400 px-4 py-1 w-[130px] text-xs cursor-pointer" /></div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                    <p className="text-gray-400">Guest</p>
                </div>
                <input type="text" placeholder="0" name="text" className="border rounded-md border-gray-400 px-4 py-1 w-[50px] text-xs" />
            </div>
            <button className="bg-black px-8 py-3.5 text-white font-medium rounded-lg">
                Search
            </button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero