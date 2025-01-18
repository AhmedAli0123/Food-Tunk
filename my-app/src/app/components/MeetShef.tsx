import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import chef1 from "../assets/Chef Card 1.png";
import chef2 from "../assets/Card 2.png";
import chef3 from "../assets/Card 3.png";
import chef4 from "../assets/Card 4.png";

 
function MeetShef() {

  const route= useRouter()
      function handleNavigate() {
        route.push(("../chef"))
      }

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
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]" >
          <Image src={chef1} alt="" className="w-[200px] md:w-[305px] md:h-[280px] transition-transform transform hover:scale-105 hover:shadow-xl border  hover:border-white cursor-pointer" onClick={handleNavigate}/>
          <Image src={chef2} alt="" className="w-[200px] md:w-[280px] md:h-[280px] transition-transform transform hover:scale-105 hover:shadow-xl border  hover:border-white cursor-pointer" onClick={handleNavigate}/>
          <Image src={chef3} alt="" className="w-[200px] md:w-[280px] md:h-[280px] transition-transform transform hover:scale-105 hover:shadow-xl border  hover:border-white cursor-pointer" onClick={handleNavigate}/>
          <Image src={chef4} alt="" className="w-[200px] md:w-[280px] md:h-[280px] transition-transform transform hover:scale-105 hover:shadow-xl border  hover:border-white cursor-pointer" onClick={handleNavigate}/>
        </div>
      </section>
    </>
  );
}

export default MeetShef;
