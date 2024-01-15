import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";



const AllProducts=()=>{
    
return (
    <div className='grid-cols-3 grid-rows-2 mt-10 lg:grid gap-x-3 gap-y-5 justify-evenly'>

    
     {
          Products.map((product)=>(
    
            <ProductCard key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData} id={product.id} category={product.category}  />
                    
               ))
     }
       
       

</div>
)


}
export default AllProducts