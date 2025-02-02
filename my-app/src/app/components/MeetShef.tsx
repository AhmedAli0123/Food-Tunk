"use client"
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const MeetShef =  () => {
  const [chefs, setChefs] = useState<any[]>([]);

  useEffect(() => {
    const fetchChefs = async () => {
      const chefs = await client.fetch(`*[_type =="chef"]{
  _id,
  name,
  image,
  description,
  "imageUrl": image.asset->url,
  }`);
    setChefs(chefs);
  };
  fetchChefs();
}, []);

  return (
    <>
      <section className="bg-black md:px-[135px]   py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
              <h1 className="text-white text-[20px] font-bold mt-4 group-hover:text-yellow-500">
                {chef.name}
              </h1>
              <p className="text-gray-300 text-[16px]">{chef.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default MeetShef;
