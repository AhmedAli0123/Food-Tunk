export default interface IProduct {
    name: string;
    slugs?:string
    category: string;
    price: number;
    originalPrice: number;
    tags: string[];
    image?: string;
    imageUrl?:string
    description: string;
    available: boolean;
  }