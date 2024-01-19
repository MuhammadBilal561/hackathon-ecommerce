'use client'

// 
import { FaShoppingCart } from 'react-icons/fa';
import React from 'react'
import Logo from "@/assets/images/Logo.webp";
import Link from 'next/link';
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { useState,useEffect } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";




const Header = () => {

  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);

  const[sticky, setSticky] = useState(false);
  const [open ,setOpen]=useState(false);


  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const nav = document.querySelector('nav')
      window.screenY ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
    <div className={`items-center lg:justify-between px-8 py-6 space-y-4 lg:flex md:flex md:justify-evenly gap-y-3 `}>

   <Link href={"/"}>
    <Image
    src={Logo}
      alt="Logo"
   className="w-40 "
     width={140}
    placeholder="blur"
     />
   </Link>
   
   <div className={`${sticky ? 'md:bg-white/0 bg-white':'bg-white'} text-gray-900 md:block hidden px-7 py-1 font-medium 
    bg-white rounded-bl-full`}>
      
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
 </div>
 <div 
    onClick={()=>setOpen(!open)}
    className={`text-3xl z-[999] md:hidden  ${open ? 'text-gray-700' :"text-gray-700" }`}>
    <IoMenuSharp name="menu" />
    </div>
    <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 my-3 
    font-medium bg-white top-0 right-0 duration-300 ${open ? 'right-0': 'right-[-100%] ' } `}>     

<ul className='flex flex-col font-bold justify-center h-full gap-6  pb-72 py-1 text-lg text-black'>

  
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
     
    </div>


   <div className=''>
   <Input type="email" placeholder="Search Here" />
   </div>
   <div className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-100'>
    
   <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
        <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center">
          {cartValue}
        </span>
        <FaShoppingCart className="h-6 w-6" />
      </div>

   </div>
   
                

             
        
    </div>
    
  )
}

export default Header