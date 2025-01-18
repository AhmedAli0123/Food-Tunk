
import IProduct from "@/types/foods";
import Product from "./Product";

import { client } from "@/sanity/lib/client";

async function Productpage({ params }: { params: { slug: string } }) {
  const product:IProduct =
    await client.fetch(`*[_type == "food" && slug.current == $slug][0] {
      name,
      description,
      price,
      originalPrice,
      tags,
      "imageUrl": image.asset->url,
      "slug": slug.current,
   }`,{slug:params.slug});
   
  return (
    <>
        <Product product={product}/>
    </>
  );
}

export default Productpage;
