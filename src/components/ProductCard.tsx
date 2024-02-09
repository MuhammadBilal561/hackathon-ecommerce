import React from 'react'
import Image, { StaticImageData }  from 'next/image'
import image1 from "@/assets/images/image1.png"
import image2 from "@/assets/images/image2.png"
import image3 from "@/assets/images/image3.png"
import Link from 'next/link'


function ProductCard  (props:{title:string,price:string,img:StaticImageData,id:number ,category:string})  {
  return (
  <Link  href={`/products/${props.id}`}>
    <div className='flex lg:ml-16 md:ml-2 mb-14 justify-evenly '>

<div className='relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30' >
    <Image
  className='object-cover transition-transform duration-500 w-96 group-hover: group-hover:scale-125"'

    src={props.img}
    alt='image1'
    
    />
    <h1 className='mt-3 text-lg font-bold'> {props.title}</h1>
     <p className='text-lg font-bold '> ${props.price}</p>
</div>



    </div>
    </Link>)
}

export default ProductCard