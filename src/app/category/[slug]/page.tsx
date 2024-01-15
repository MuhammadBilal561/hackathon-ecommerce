import { Products } from "@/utils/mock"
import ProductCard from "@/components/ProductCard"
import  { StaticImageData} from "next/image"

const getProductsByCategory=(category: string) =>{
return Products.filter((product)=>product.category == category)
}

export default function Page({ params }: { params: { slug: string }}) {

const result = getProductsByCategory(params.slug)
return (
<div className="">

{result.length > 0 ?<div className="">
    {
<div className="grid-cols-3 grid-rows-2 mt-10 lg:grid gap-x-3 gap-y-5 justify-evenly" >{result.map(
    (product)=>(
        <div key={product.id}>
        <ProductCard
         key={product.id}
         title={ product.name}
        price={ product.price}
        img={product.image as StaticImageData }
        category={ product.category}
        id={product.id}
        /></div>
        
    )
)}</div>

    }
</div>:(
<p className="justify-center mt-12 ml-6 text-3xl font-bold lg:flex md:grid" >No Product Found</p>
)}

    
</div>

);
}