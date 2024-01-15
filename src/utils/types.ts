import { StaticImageData } from "next/image";

export type ProductData={

    id:number;
    name:string;
    price:string;
    category:string;
    image:StaticImageData |string; 
    gender:number;
    tagline:string;
    }

