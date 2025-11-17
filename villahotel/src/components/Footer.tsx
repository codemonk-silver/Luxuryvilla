import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <div className='px-32 bg-gray-200 w-full h-[50vh] relative'>
        <div className='absolute py-8 top-0'>
          <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold text-3xl'>
                  LuxuryVilla
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  Discover the world most extraordinary places to stay, from boutique hotel to luxury villas and private island
                </p>
                
                <div className='flex gap-4 mt-7'>
                  <Facebook className='h-6 w-6 stroke-gray-400' />
                  <Twitter className='h-6 w-6 stroke-gray-400' />
                  <Instagram className='h-6 w-6 stroke-gray-400' />
                  <Linkedin className='h-6 w-6 stroke-gray-400' />
                </div>

              </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
