import React from "react";

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import IChefs from "@/types/chefs";
import Link from "next/link";


const ChefGrid = async () => {

  const chefs:IChefs[] = await client.fetch(`*[_type =="chef"]{
    _id,
    position,
    name,
    image,
    description,
    "imageUrl": image.asset->url,
    }`);

  return (
    <section>
    <div
    className="relative h-72 md:h-96 flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('/hero.png')" }}
  >
    <div className="text-center text-white px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold">Our Chef</h1>
      <nav className="mt-2 text-xs md:text-sm">
        <a href="/" className="text-gray-300 hover:text-yellow-500">
          Home
        </a>
        <span className="mx-2 text-yellow-500">{'>'}</span>
        <span className="text-yellow-500">Chef</span>
      </nav>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12 md:px-[135px]">
          {chefs.map((chef: any) => (
            <Link href={`/chef/${chef._id}`} key={chef.slug} className="group">
              <div className="relative">
                <Image
                  src={chef.imageUrl || chef.image}
                  alt={chef.name}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-xl rounded-xl"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-xl" />
              </div>
              <h1 className="text-black text-[20px] font-bold mt-4 group-hover:text-yellow-500">
                {chef.name}
              </h1>
              <p className="text-gray-800 font-bold text-[16px]">Position: {chef.position}</p>
              <p className="text-gray-800 text-[16px]">{chef.description}</p>
            </Link>
          ))}
        </div>
    </section>
  );
};

export default ChefGrid;