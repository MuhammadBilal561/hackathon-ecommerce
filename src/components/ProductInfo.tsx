import React from 'react'

const ProductInfo = () => {
  return (<>
    <div className='flex items-center text-center lg:justify-start md:justify-center '>

<div className="relative flex justify-start mt-10 text-center text-gray-800">

<h6 className="absolute text-6xl md:text-[8rem] font-bold text-gray-100 text-center   -z-50 ">OverView</h6>

<h6 className="flex items-center justify-start font-bold lg:mt-10 lg:text-2xl md:mt-2 md:text-lg">Product Information</h6>


</div>
    </div>
    <div className='mt-20 border'>  </div>

  <div className='mt-8 '>
  <div className='lg:flex md:grid justify-evenly'>
      <h3 className='text-xl font-bold text-gray-400'>PRODUCT DETAILS</h3>
      <p className='mt-4 max-w-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
      </p>
    </div>

    <div className='mt-6 lg:flex md:grid justify-evenly mr-28'>
      <h3 className='text-xl font-bold text-gray-400 '>PRODUCT Care</h3>
      <ol className='mt-2 text-lg font-bold list-disc gap-y-4'>
        
       
<li >Hand wash using cold water.</li>
<li>Do not using bleach.</li>
<li>Hang it to dry.</li>
<li>Iron on low temperature.</li>     
   </ol>  
      
    </div>
  </div>
    </>
  )
}

export default ProductInfo