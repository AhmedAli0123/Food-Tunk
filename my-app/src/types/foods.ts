export default interface IProduct {
    name: string;
    slug?:string | undefined;
    category: string;
    price: number;
    originalPrice: number;
    tags: string[];
    image?: string;
    imageUrl?:string
    description: string;
    available: boolean;
  }