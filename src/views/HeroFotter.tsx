import React from 'react'
import Image from 'next/image'
import fotterimage from "@/assets/about/1.png"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import Link from 'next/link'


const HeroFotter = () => {
  return (
    <div>
      <div className=''>
 <h1 className='flex justify-end mr-12 text-5xl font-extrabold mt-28'>Unique and <br /> Authentic Vintage <br /> Designer Jewellery</h1>
<div className=' lg:flex justify-evenly sm:gap-x-10'>
<div className='grid'>
<div>
    <h3 className='mt-6 text-lg font-bold '>Using Good <br /> Quality Materials</h3>
    <p className='mt-3'>Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit</p>
</div>
<div>
<h3 className='mt-8 text-lg font-bold '> Modern Fashion <br /> Design</h3>
    <p className='mt-3'>Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit</p>
</div>
</div>

<div className='grid'>
<div>
<h3 className='mt-6 text-lg font-bold '> 100% Handmade <br /> Products</h3>
    <p className='mt-3'>Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit</p>
</div>

<div>
<h3 className='mt-8 text-lg font-bold '> Discount for Bulk <br /> Orders</h3>
    <p className='mt-3'>Lorem ipsum dolor <br /> sit amt, consectetur <br /> adipiscing elit</p>
</div>
</div>

<Image
className='mt-4'
src={fotterimage}
alt='fotter image'

/>
<h3 className='mt-6'>This piece is ethically <br />
     crafted in our small <br />
     family-owned workshop <br />
      in Peru with unmatched <br />
      attention to detail and <br />
      care. The Natural color is <br />
      the actual natural color of <br />
      the fiber, undyed and <br />
       100% traceable.
       <br />

       <Link href= {'/products'}>
       <button className='px-6 py-3 mt-6 text-white bg-black'>See All <br /> Product</button></Link>

       </h3>

       </div>
       </div>



    
    </div>
  )
}

export default HeroFotter