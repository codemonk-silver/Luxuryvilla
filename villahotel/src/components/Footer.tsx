import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <div className='px-32 bg-gray-200 h-[50vh] relative'>
        <div className='absolute py-8 top-0'>
          <div className='flex justify-between w-full'>
              <div className='flex flex-col mr-24'>
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
              
              <div className='flex flex-col'>
                <p className='font-semibold text-xl text-gray-500'>
                  Company
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  About
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  Careers
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  Press
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  Blog
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  Partners
                </p>
              </div>

              <div className='flex flex-col'>
                <p className='font-semibold text-xl text-gray-500'>
                  Support
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  Help Center
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  Safety Information
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  Cancellation Options
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  Contact Us
                </p>
                <p className='text-sm text-gray-600 w-[300px] mt-3'>
                  Accessibility
                </p>
              </div>

              <div className='flex flex-col'>
                <p className='font-semibold text-xl text-gray-500'>
                    STAY UPDATED
                </p>
                <p className='text-sm text-gray-600 w-[250px] mt-4 mb-5'>
                  Subscribe to our newsletter for travel inspiration and special offers.
                </p>

                {/* ▼▼ Added arrow beside input ▼▼ */}
                <div className='flex items-center'>
                    <input 
                        className='border-2 border-gray-800 py-0.5 px-2 w-[180px]' 
                        type='email' 
                        placeholder='your email' 
                    />
                    
                    <div className="bg-black p-2 cursor-pointer">
                        <ArrowRight className="text-white w-4 h-4" />
                    </div>
                </div>

              </div>

          </div>
          <hr className='mt-16 h-1 text-gray-400' />
          <div className='flex justify-between mt-2'>
              <p className='text-gray-500 text-sm'>2025 LuxuryVilla, All Right Reserved.</p>
          <div className='flex gap-3'>
              <p className='text-gray-500 text-sm'>
                Privacy
              </p>
               <p className='text-gray-500 text-sm'>
                Terms
              </p>
               <p className='text-gray-500 text-sm'>
                Sitemap
              </p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
