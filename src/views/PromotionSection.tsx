import React from 'react'
import event1 from"@/assets/images/event1.webp"
import event2 from"@/assets/images/event2.webp"
import event3 from"@/assets/images/event3.webp"
import Image from 'next/image'

const PromotionSection = () => {
  return (
    <>

<div className='mb-8 '>
      <div className='items-center text-sm font-bold text-blue-600 justify-evenly mt-60 lg:grid sm:grid'>
      PROMOTIONS
      </div>
      <p className="container flex justify-center px-8 pl-5 mt-1 mb-10 text-4xl font-bold">
      Our Promotions Events
      </p>
      </div>
    <div className='container min-h-screen lg:flex justify-evenly sm:grid '>
       
  <div className='' >

<div className='lg:flex  md:grid'>
    <h1 className='text-3xl font-bold bg-gray-300 max-h-52  '>GET UP <br />TO 60%</h1>
    <p className='grid p-1 pt-20 text-xl bg-gray-300 max-h-52'>For the <br /> summer <br />  season</p>
    <div>
<Image
className='bg-gray-300 w-96   h-52 '
src={event1}
alt='event1'


/>

</div>
</div>

<div className='bg-black py-1  mt-2 lg:w-full '>
<div className='grid  lg:w-11/12    h-40 mt-4 bg-black justify-center  '>
    <div className='grid  '>
    <h3 className='mt-2 text-4xl font-bold text-white lg:text-center  md:text-left'>GET 30% Off</h3>
    <p className=' text-white text-md lg:text-center md:text-left'>USE PROMO CODE</p>
    <button className='h-9 mb-1 lg:px-10 md:px-2 font-bold text-white bg-gray-500 rounded-md'>DINEWEEKENDSALE</button>
</div>
</div>
</div>
  </div>

 <div className='flex gap-x-4 flex-row-2 mt-2 '>
 <div className='bg-orange-100 max-w-96 max-h-96 '>
    <p className='font-semibold'>Flex Sweatshirt</p>
    <p className='font-semibold'>$100.00 $75.00</p>
    <Image 
    className=''
    src={event2}
    alt='event2'
    height={334}
    />
  </div>

  <div className='bg-gray-200 max-w-80 max-h-96 '>
    <p className='font-semibold'>Flex Push Button Bomber</p>
    <p className='font-semibold'>$225.00$190.00</p>
    <Image 
    className=''
    src={event3}
    alt='event3'
    height={334}
    />
  </div>
 </div>
  
  

  


    </div>
    </>
  )
}

export default PromotionSection