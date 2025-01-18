import React from "react";

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import IChefs from "@/types/chefs";


const ChefGrid = async () => {

  const chefs:IChefs[] = await client.fetch(`
      *[_type == "chef"]{ 
        name,
        position,
        "image": image.asset->url,
        "slug": slug.current,
      }
    `);

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

    <div className="p-6 mt-20"> {/* Adding mt-20 for margin top */}
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef:IChefs) => (
          <div
            key={chef.slug}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-purple-600 cursor-pointer" 
                // Hover effect for other boxes
            
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ChefGrid;