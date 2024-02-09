import React from 'react'
import logo from "@/assets/images/Logo.webp"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FaFacebookF,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import Link from 'next/link';



const Fotter = () => {
  return (
    <>
    <div className='ml-3 text-xl lg:flex gap-x-28 '>

    <div className='mt-20 ml-10 lg:ml-14 '>

        <Image
        src={logo}
        alt='Logo'
        width={200}
        height={200}
        />
        <h3 className='mt-8 text-lg tracking-tight text-gray-500 scroll-m-20'>Small, artisan label that offers <br /> 
        a thoughtfully curated
         collection of high <br />
         quality everyday essentials made.</h3>

         <div className='flex gap-x-3'>
        <Link href={'https://www.facebook.com/bilal.rehan.1614'}>
        <Button className='mt-6 bg-slate-200 hover:bg-slate-200' size="icon">
      < FaFacebookF  className="w-4 h-4 text-lg text-black " />
    </Button></Link>

   <Link href={'https://twitter.com/_M_bilal_561'}>
   <Button className='mt-6 bg-slate-200 hover:bg-slate-200' size="icon">
      < FaTwitter className="w-4 h-4 text-lg text-black " />
    </Button></Link>

    <Link href={'#'}>
    <Button className='mt-6 bg-slate-200 hover:bg-slate-200' size="icon">
      < FaLinkedinIn className="w-4 h-4 text-lg text-black " />
    </Button>
    </Link>

         </div>
         </div>


         {/* company */}

       <div className='grid grid-cols-2 lg:flex lg:gap-x-20'>
       <div className='mt-20 ml-4 space-y-3 text-gray-500 '>
<h2 className='font-bold'>Company</h2>
<p>About</p>
<p>Terms of Use</p>
<p>Privacy Policy</p>
<p>How it Works</p>
<p>Contact Us</p>

         </div>

        {/* Support */}
         <div className='mt-20 ml-4 space-y-3 text-gray-500 '>
         <h3 className='font-bold'>Support</h3>
<p>Support Career</p>
<p>24h Service</p>
<p>Quick Chat</p>

         </div>
{/* Contact */}
<div className='mt-20 ml-4 space-y-3 text-gray-500 '>
         <h3 className='font-bold'>Contact</h3>
<p>Whatsapp </p>
<p>Support 24h</p>

         </div>
       </div>

  


    </div>
    
    <div className="py-8 mt-40 border border-t border-solid border-t-black">
   <div className='ml-10 text-lg font-semibold text-gray-500 lg:flex justify-evenly lg:ml-1 '>

     
   <p className='lg:grid md:flex'>Copyright © 2024 <span> Dine Market</span></p>
   <h3 className='lg:grid md:flex ' >Design by. <span className='font-bold text-black'>M.Bilal </span></h3>
   <h3 className='lg:grid md:flex'>Code by. <span className='font-bold text-black '>M.Bilal 561 on Github </span></h3>   </div>



           </div>
           
           
           
           </>
           
  )
}

export default Fotter