import Hero from "@/views/Hero"
import HeroFotter from "@/views/HeroFotter"
import SingleProduct from "@/views/ProductList"
import PromotionSection from "@/views/PromotionSection"
import ProductList from "@/views/ProductList"
import NewsLetter from "@/views/NewsLetter"
// import Products from "@/views/Products"
export default function Home() {
  return (
    <main className="">
      <Hero />
      <PromotionSection />
<ProductList />
<HeroFotter />
<NewsLetter />
   

  

    
    </main>
  )
}
