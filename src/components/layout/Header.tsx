
import { ShoppingCart } from 'lucide-react';
import React from 'react'
import Logo from "@/assets/images/Logo.webp";
import Link from 'next/link';
import Image from 'next/image';
import { Input } from "@/components/ui/input"



const Header = () => {
  return (
    <div className='items-center justify-between px-8 py-6 space-y-4 lg:flex gap-y-3'>

   <Link href={"/"}>
    <Image
    src={Logo}
      alt="Logo"
   className="w-40 "
     width={140}
    placeholder="blur"
     />
   </Link>
   
   <ul className='flex gap-x-10'>
    
      <li className='text-lg' >
        <Link href={"/category/Female"}>
        Female
        </Link>
        </li>
      <li className='text-lg' >
      <Link href={"/category/Male"}>
      Male
        </Link>
        </li>
      <li className='text-lg'>
      <Link href={"/category/Kids"}>
        Kids
      
      </Link>
        
        </li>
      <li className='text-lg'>
        <Link href={"/products"}>
        
        All Products
        </Link></li>
   </ul>

   <div className=''>
   <Input type="email" placeholder="Search Here" />
   </div>
   <div className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-100'>
    
   <ShoppingCart />

   </div>
   
                

             
        
    </div>
    
  )
}

export default Header