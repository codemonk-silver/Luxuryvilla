import React from 'react'

const Newsletter = () => {
  return (
    <div className='px-32 py-10 bg-gray-100 w-full h-[80vh] flex justify-center items-center'>
            <div className='bg-blue-950 w-[60vw] h-[40vh] rounded-xl relative'>
                <div className='absolute top-14 flex flex-col items-center w-full'>
                    <p className='text-3xl font-semibold font-playfair text-white'>
                        Stay Inspired
                    </p>
                    <p className='text-sm text-gray-300 leading-relaxed mt-2'>
                        Join our newsletter and be the first to discover new destinations, exclusive offers and travel inspiration.
                    </p>
                    <div className='flex gap-4 mt-6'>
                        <input className='w-[230px] py-1.5 px-2.5 border-gray-100 bg-gray-600 text-white rounded-md' type='email' placeholder='Enter Your Email' />
                        <button className='bg-gray-900 text-white px-5 py-2 rounded-xl'>
                            Subscribe
                        </button>
                    </div>
                    <p className='text-sm text-gray-300 mt-4'>
                        By subscribing, you agree to our Privacy Policy and consent to recieve updates.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Newsletter