import { StaticImageData } from "next/image"


export type Cart ={
    id: number,
    title: string,
    img: StaticImageData | string | undefined,
    price: number,
    quantity: number
    uuid:number | string | undefined
}

export type Product ={
    id:number,
    title:string,
    img: StaticImageData | string | undefined,
    price: number,
    Description:string
}