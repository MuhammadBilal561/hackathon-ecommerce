import ProductInfo from "@/components/ProductInfo"
import Quantity from "@/components/Quantity"
import { Products } from "@/utils/mock"
import Image  from "next/image"
import  { StaticImageData} from "next/image"
import AddToCart from "@/components/AddToCard"

const getProductDetails=(id: string | number) =>{
return Products.filter((product)=>product.id == id)
}

const sizes=['XS','S','M','L','XL']

export default function Page({ params }: { params: { id: string }}) {

const result = getProductDetails(params.id)
return (<>
<div className="lg:flex md:grid justify-center ">


    { result.map(
            (product)=>(
           <div key={product.id} className="lg:flex md:grid justify-center mb-20 mt-28 ">
<div>
    <Image
    src={product.image}
alt={product.name} 
width={300}
height={300}   />
</div>
<div className="mt-6 ml-4">
   {/* <h3 className="text-xl font-bold ">Product Details</h3>  */}
    <p className="text-2xl "> {product.name} </p>
    <p className="text-xl font-semibold text-gray-300 ">{product.tagline}</p>
  <div>
  <p className="mt-8 font-semibold text-md">SELECT SIZE</p>
<div className="flex mt-4 gap-x-5">
{
    sizes.map((item)=>{
        return(
            <button key={item} className="flex items-center justify-center w-12 h-12 text-sm font-bold text-gray-800 rounded-full hover:bg-slate-100">
    
{item}
            </button>
        )
        })
 }
</div>
<div className="flex items-center mt-6 gap-x-8">

<h3 className="text-lg font-bold ">Quantity:</h3>
<div className="ml-8"><Quantity/></div>


</div>
</div>
    <p className="flex items-center justify-center text-4xl font-extrabold mt-7"> ${product.price}.00 </p>
    {/* <p>Category: {product.category} </p> */}
<div className="flex justify-center mt-4  ">
<AddToCart  />
</div>
</div>

           </div>
            )
        )
    }
 
</div>
<div className="mt-6 mb-28">
    <ProductInfo/>
</div>
</>

);
}