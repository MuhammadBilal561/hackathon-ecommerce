import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// import { ShoppingCart } from 'lucide-react';
import { FaShoppingCart } from 'react-icons/fa'
import HeroImage from '@/assets/images/hero.webp'
import Image from 'next/image';
import brand1 from"@/assets/brands/Bustle.png";
import brand2 from"@/assets/brands/harperBazaar.png";
import brand3 from"@/assets/brands/inStyle.png";
import brand4 from"@/assets/brands/versace.png";
import HeroFotter from './HeroFotter';
import Link from 'next/link'






const Hero = () => {


  return (
    <section className='flex flex-col px-8 py-6 gap-y-10 lg:flex-row '>

        <div className='flex-1' >
            {/* Left div */}
            <Badge className='px-6 py-3 mx-10 text-blue-700 bg-blue-200 rounded-lg hover:bg-blue-200' ><button>Sale70%</button></Badge>
<h1 className="mx-10 mt-6 text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 mx-10">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
     <div> 
      <Link href={"/products"}>
      <Button className='h-12 px-8 mx-10 mt-8 bg-black gap-x-1'> <FaShoppingCart />Start Shopping </Button>

      </Link>
     
      </div>
      <div className='flex mt-10 text-gray-300 justify-evenly gap-x-2 opacity-30 '>
      <Image
               src={brand1}
               alt='Brand Image'
               width={70}
               height={70}
               />
                <Image
               src={brand2}
               alt='Brand Image'
               width={70}
               height={70}
               
               />
                <Image
               src={brand3}
               alt='Brand Image'
               width={70}
               height={70}
               />
                <Image
               src={brand4}
               alt='Brand Image'
               width={70}
               height={70}
               
               />
           


      </div>

      

            </div>
            

 {/* Right div */}
            <div  className=''>
                <div className='flex-1 rounded-full bg-red-50 '>
        <div className='w-full h-full ' >
        <Image
        className=''
               src={HeroImage}
               alt='Hero Image'
               height={600}
               width={600}
               
        
               
               />
        </div>
        </div>
            </div>
            
    </section>
    
  )
}

export default Hero