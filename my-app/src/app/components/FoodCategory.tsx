import React from "react";

import Image from "next/image";

import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";

function FoodCategory() {
  return (
    <>
      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
      Food Category
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
        </h1>
        </div>
        <div className="flex flex-col justify-center items-center   sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 gap-[20px] mt-[50px]">

          <Image src={food1} alt="" className="w-[200px] md:w-[305px] md:h-[280px] transition-transform transform hover:scale-105 hover:shadow-xl border  hover:border-white  cursor-pointer"/>
          <Image src={food2} alt="" className="w-[200px] md:w-[280px] md:h-[280px] transition-transform transform hover:scale-105 hover:shadow-xl border  hover:border-white  cursor-pointer" />
          <Image src={food3} alt="" className="w-[200px] md:w-[280px] md:h-[280px] transition-transform transform hover:scale-105 hover:shadow-xl border  hover:border-white  cursor-pointer" />
          <Image src={food4} alt="" className="w-[200px] md:w-[280px] md:h-[280px] transition-transform transform hover:scale-105 hover:shadow-xl border  hover:border-white  cursor-pointer" />
        </div>
      </section>
    </>
  );
}

export default FoodCategory;
