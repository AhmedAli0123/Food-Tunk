import React from "react";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";


async function page() {
  const product = await client.fetch(`
    *[_type == "food"]{ 
      name,
      price,
      originalPrice,
      "image": image.asset->url,
      "slug": slug.current,
    }
  `);


  return (
    <>
      {/* Heroo Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Shop page</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            &gt; Shop
          </p>
        </div>
      </section>

      {/* For Main Page */}

      <section className="px-2  md:px-[135px] flex flex-col md:flex-row my-[40px]">
        {/* For Menu Items   */}
        <div>
          <div className="hidden md:flex md:flex-row md:justify-start md:items-center mt-[120px] gap-[5px]">
            <h2>Sort By:</h2>
            <input
              type="dropDown"
              placeholder="newest"
              className="border border-gray-500 w-[150px] md:w-[236px] h-[26px] md:h-[46px]  ml-[5px] rounded-md "
            />
            <h2 className="md:ml-[40px]">Show:</h2>
            <input
              type="dropDown"
              placeholder="Default"
              className="border border-gray-500 w-[150px] md:w-[236px] h-[26px] md:h-[46px] ml-[5px] rounded-md"
            />
          </div>

          <div className="grid grid-cols-2 gap-[34px] md:grid-cols-2 lg:grid-cols-3 mt-[24px] ">
            {product.map((item: any) => {
              return (
                <Link href={`/shoplist/${item.slug}`} key={item._id} >           
                 <div
                  className="w-[150px]  md:w-[300px]  rounded  hover:border-2 border-[#FF9F0D] transition-transform duration-200 ease-in transform hover:scale-105"
                >
                  <div className="w-[150px] h-[200px] md:w-full md:h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={1500}
                      height={1500}
                      unoptimized={true}
                      className="rounded cursor-pointer"
                    />
                  </div>
                  <h2 className="font-bold text-[16px] md:text-[18px]">{item.name}</h2>
                  <h2 className="text-[#FF9F0D] font-normal md:text-[16px] text-[12px]">
                    ${item.price}
                  </h2>
                </div>
                </Link>     
              )}
            )}
          
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
