'use client'

import React from 'react'
import { useState } from 'react'

const Quantity = () => {
    const [num,setnum]=useState(1)
    
  return (
    <div className='flex items-center justify-center gap-x-4'>

{/* minus */}
<button className='flex items-center justify-center w-10 h-10 text-lg bg-gray-300 border rounded-full'
onClick={() => {
    setnum(num<=1?1:num -1);
}}

>
    -
</button>
<span>{num}</span>
<button className='flex items-center justify-center w-10 h-10 text-lg bg-gray-300 border rounded-full'
onClick={() => {
    setnum(num +1);
}}
>
    +
</button>

    </div>
  )
}

export default Quantity