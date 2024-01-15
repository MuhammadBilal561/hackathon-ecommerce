// import {  ProductDataProps } from "./types";
import P1 from'@/assets/products/1.png';
import P2 from'@/assets/products/Image 2.png'
import P3 from'@/assets/products/3.png'
import P4 from'@/assets/products/3.png'
import P5 from'@/assets/products/5.png'
import P6 from'@/assets/products/6.png'
import P7 from'@/assets/products/7.png'
import P8 from'@/assets/products/8.png'
import P9 from'@/assets/products/9.png'
import P10 from'@/assets/products/10.png'
import P11 from'@/assets/products/11.png'
import { StaticImageData } from "next/image";
import { ProductData } from './types';



    



export const Products:ProductData[]=[

{
    id:1,
name:' Brushed Reglan SweaterShirt',
price:'195',
category:"Female",
image: P1,
gender:1,
tagline:"Sweater"
},

{
    id:2,
name:'CameranSash Tie Dress',
price:'545',
category:"Female",
image: P2,
gender:1,
tagline:"Dress"
},
{
    id:3,
name:'Flex SweaterShirt',
price:'180',
category:"Female",
image: P3,
gender:1,
tagline:"Sweater"

},
{
    id:4,
name:'Flex SweatPants',
price:'135',
category:"Female",
image: P4,
gender:1,
tagline:"Jeans"
},
{
    id:5,
name:'Pink Flece SweatPants',
price:'225',
category:"Female",
image: P5,
gender:1,
tagline:"Jeans"
},
{
    id:6,
name:'Lite SweatPant',
price:'150',
category:"Female",
image: P6,
gender:1,
tagline:"Jeans"
},
{
    id:7,
name:'Imperial Alpaca Hodie',
price:'525',
category:"Female",
image: P7,
gender:1,
tagline:"Hodie"
},
{
    id:8,
name:'  Muscles Tank',
price:'90',
category:"Female",
image: P8,
gender:1,
tagline:"Tank"
},
{
    id:9,
name:'Brushed Bumper',
price:'225',
category:"Female",
image: P9,
gender:1,
tagline:"Jacket"
},

{
    id:10,
name:'Flex Pushed Buton Bomber',
price:'195',
category:"Male",
image: P10,
gender:2,
tagline:"Jacket"
},

{
    id:11,
name:'Reglan SweaterSirt',
price:'195',
category:"Male",
image: P11,
gender:2,
tagline:"Sweater"
},

]