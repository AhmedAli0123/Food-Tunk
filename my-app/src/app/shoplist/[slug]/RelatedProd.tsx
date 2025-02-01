"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import IProduct from "@/types/foods";
import Link from "next/link";
import Image from "next/image";

function RelatedProd() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch up to 4 products from Sanity
        const productsData = await client.fetch(
          `*[_type == "food"][0...4] {
            name,
            price,
            "slug": slug.current,
            "imageUrl": image.asset->url
          }`
        );
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="py-10 px-2">
      <h2 className="text-2xl font-bold mb-5 text-center">Related Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 px-3 justify-center">
        {products.map((item) => (
          <Link href={`/shoplist/${item.slug}`} key={item.slug}>
            <div className="w-[150px]  md:w-[300px]  rounded  hover:border-2 border-[#FF9F0D] transition-transform duration-200 ease-in transform hover:scale-105">
              <div className="w-[150px] h-[200px] md:w-full md:h-[300px]">
                <Image
                  src={item.imageUrl || ""}
                  alt={item.name}
                  width={1500}
                  height={1500}
                  unoptimized={true}
                  className="rounded cursor-pointer"
                />
              </div>
              <h2 className="font-bold text-[16px] md:text-[18px]">
                {item.name}
              </h2>
              <h2 className="text-[#FF9F0D] font-normal md:text-[16px] text-[12px]">
                ${item.price}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedProd;
