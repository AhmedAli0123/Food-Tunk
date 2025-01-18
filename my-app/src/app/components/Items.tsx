import React from 'react'
import Image from 'next/image'

import shef from "../assets/shefHat.png"
import burgur from "../assets/burgur.png"
import fork from "../assets/fork.png"
import slice from "../assets/slice.png"

function Items() {
  return (
    <>
     <section className="relative bg-black md:px-[135px] md:py-[120px] ">
  <div 
    className="absolute inset-0" 
    style={{
      backgroundImage: "url('/item.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      // mixBlendMode: "multiply",
      opacity: 0.2 // Adjust the darkness level
    }}
  ></div>

  {/* Content */}
  <div className="relative flex md:flex-row flex-col justify-center items-center gap-5 md:gap-[161px]">
    <div className="w-[218px] h-[247px] text-white flex flex-col justify-center items-center">
      <Image src={shef} alt="" />
      <h2 className="text-[15px] font-bold mt-[24px]">Professional Chefs</h2>
      <h2 className="mt-[20px] md:text-[40px] font-bold">420</h2>
    </div>
    <div className="w-[218px] h-[247px] text-white flex flex-col justify-center items-center">
      <Image src={burgur} alt="Burger and Drink" />
      <h2 className="text-[15px] font-bold mt-[24px]">Professional Chefs</h2>
      <h2 className="mt-[20px] md:text-[40px] font-bold">420</h2>
    </div>
    <div className="w-[218px] h-[247px] text-white flex flex-col justify-center items-center">
      <Image src={fork} alt="Fork" />
      <h2 className="text-[15px] font-bold mt-[24px]">Professional Chefs</h2>
      <h2 className="mt-[20px] md:text-[40px] font-bold">420</h2>
    </div>
    <div className="w-[218px] h-[247px] text-white flex flex-col justify-center items-center">
      <Image src={slice} alt="Pizza Slice" />
      <h2 className="text-[15px] font-bold mt-[24px]">Professional Chefs</h2>
      <h2 className="mt-[20px] md:text-[40px] font-bold">420</h2>
    </div>
  </div>
</section>

    </>
  )
}

export default Items