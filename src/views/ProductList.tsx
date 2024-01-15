import React from 'react'
import image1 from'@/assets/images/image1.png'
import image2 from'@/assets/images/image2.png'
import Image, { StaticImageData } from 'next/image'
import image3 from'@/assets/images/image3.png'
import ProductCard from '@/components/ProductCard'
import { Products} from '@/utils/mock'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import Products from './products'


const ProductList = () => {
  const productChecks=Products.slice(0,3);
  return (<>
  
    <div>
<h3 className='grid justify-center mt-4 text-lg font-bold text-blue-600'>PRODUCTS</h3>
<p className='grid justify-center mt-10 text-3xl font-bold'>Check What We Have</p>
      
    </div>
    <div className='mt-16 lg:flex justify-evenly gap-x-3 md:grid sm:grid'>
      
{productChecks.map((product )=>(

<ProductCard key={product.id} title={product.name} price ={product.price} img={product.image as StaticImageData} id={product.id} category={product.category}/>

))};
    </div>
</>

  )
}

export default ProductList


