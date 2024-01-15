import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const NewsLetter = () => {
  return (
    <div>
         

    <div className="relative text-center space-y-4 min-h-[40vh] md:h-[70vh] lg:min-h-[50rem] flex flex-col justify-center items-center text-gray-800">
      <h6 className="absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50 ">Newsletter</h6>
      <h6 className="text-3xl font-bold md:text-4xl">Subscribe Our Newsletter</h6>
      <p className="text-lg font-medium ">Get the latest information and promo offers directly</p>
      <div className="flex-wrap items-center justify-center gap-4 space-y-1 lg:flex md:grid sm:grid">
        <input type="text" className="flex flex-grow px-2 py-1 border border-gray-600 md:px-4 w-80" placeholder="Input email address" />
        <button className="px-4 py-2 text-white bg-gray-900 border border-gray-500">Get Started</button>
      </div>
    </div>
  


    


    </div>
  )
}

export default NewsLetter