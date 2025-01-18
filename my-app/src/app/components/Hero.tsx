"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import hero from "../assets/hero1.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

function Hero() {

  const route= useRouter()
  function handleNavigate() {
    route.push(("../menu"))
  }

  return (
    <div className='py-[60px] px-3 md:px-[135px] bg-black lg:flex lg:gap-[100px]' >

      <div className='lg:flex flex-col lg:gap-[100px] mt-[] gap-4 lg:w-[25.28px] lg:h-[492px] md:hidden sm:hidden hidden'> 
        <div className='lg:w-[108px] border-[1px] rotate-90 text-white lg:block hidden mt-[80px] '></div>
       <div className=' lg:ml-[45px] flex-col justify-between flex gap-[20px]'>
       < FaFacebookF className='text-white   cursor-pointer' />
        <FaTwitter className='text-[#FF9F0D] cursor-pointer'/>
        <FaPinterestP className='text-white  cursor-pointer'/>
       </div>
        <div className='w-[108px] border-[1px] lg:block hidden rotate-90 text-whitetext'></div>
      </div>


    <section className="  flex flex-col justify-evenly md:flex-row  md:items-center ">
      {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes whitespace-nowrap">
          Its Quick & Amusing!
        </h1>

        <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
        </h1>

        <p className="text-[10px] md:text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <button 
          onClick={handleNavigate}
          className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800
            transition-transform transform hover:scale-105 hover:shadow-xl border  hover:border-white cursor-pointer
          ">
            See More
          </button>
        </div>
      </div>

      {/* Image */}

      <div className="mt-[50px] md:mt-0 ">
        <Image src={hero} alt="Hero Image" className="" />
      </div>
    </section>
    </div>
  );
}

export default Hero;
