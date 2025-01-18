import React from "react";
import Image from "next/image";

import { PiHamburgerLight } from "react-icons/pi";
import { PiCookieLight } from "react-icons/pi";
import { GiWineGlass } from "react-icons/gi";

import extra1 from "../assets/extra1.png";
import extra2 from "../assets/extra2.png";
import extra3 from "../assets/extra3.png";
import extra4 from "../assets/extra4.png";
import extra5 from "../assets/extra5.png";
import extra6 from "../assets/extra6.png";

import experience from "../assets/30year.png";
const Home = () => {
  return (
    <>
      <div className="w-full  flex py-[100px] md:py-[100px] md:px-[100px] overflow-hidden px-[20px] bg-black">
        <div className="xl:block md:hidden sm:hidden hidden lg:hidden">
          <div className="grid grid-cols-2 grid-row-2 ">
            <Image
              src={extra1}
              alt=""
              className="w-[262px] h-[256px] rounded-[6px]"
            />
            <Image
              src={extra2}
              alt=""
              className="w-[201px] ml-[-60px] h-[181px] rounded-[6px] mt-[75px]"
            />
            <Image
              src={extra3}
              alt=""
              className="w-[144px] h-[206px] rounded-[6px] mt-[15px]"
            />
            <Image
              src={extra4}
              alt=""
              className="w-[141px] h-[146px] ml-[-180px] mt-[15px] rounded-[6px]"
            />
            <Image
              src={extra5}
              alt=""
              className="w-[101px] h-[106px] rounded-[6px] ml-[300px] mt-[-205px]"
            />
            <Image
              src={extra6}
              alt=""
              className="w-[101px] h-[106px] rounded-[6px] ml-[-30px] mt-[-90px]"
            />
          </div>
        </div>

        <div className="flex flex-col  lg:gap-[90px] ">
          <div className="flex flex-col justify-between  lg:gap-[20px]">
            <h1 className="text-[#FF9F0D] font-greatVibes text-[32px] leading-[40px] font-medium">
              Why Choose us
            </h1>
            <h1 className="font-helvetica w-[400px] font-bold lg:text-[40px] text-[30px] leading-[45px] text-white">
              <span className="text-[#FF9F0D]">Ex</span>ta ordinary taste And
              Experienced
            </h1>
            <p className="font-normal lg:text-[16px]  text-[13px] leading-6 text-[#FFFFFF] w-[280px] lg:w-[480px] lg:h-[48px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
          </div>
          <div className="lg:w-[374px] text-xs lg:h-[135px] h-[90px] flex lg:gap-[20px] gap-3">
            <h1 className="text-white text-center font-medium">
              <PiHamburgerLight className=" md:w-[102px] md:h-[100px] h-10 w-10 rounded-[6px] bg-[#FF9F0D] text-white text-center" />
              Fast Food
            </h1>
            <h1 className="text-white text-center font-medium">
              <PiCookieLight className=" md:w-[102px] md:h-[100px] h-10 w-10 rounded-[6px] bg-[#FF9F0D] text-white text-center" />
              Lunch
            </h1>
            <h1 className="text-white text-center font-medium">
              <GiWineGlass className="text-xs md:w-[102px] w-10 md:h-[100px] h-10 rounded-[6px] bg-[#FF9F0D] text-white text-center" />
              Dinner
            </h1>
          </div>

          <div className= "w-[340px] md:w-[374px]  flex gap-[20px] justify-center items-center md:px-[50px] md:py-[20px] h-[93px] rounded-[6px] bg-white">
            
            <div>
              <h1 className="font-bold leading-[56px] text-[32px] mx:text-[48px] text-[#FF9F0D]">
                30+
              </h1>
            </div>
            <div>
              <h1 className="md:text-[20px] text-[16px]">Year of</h1>
              <h1 className="text-[18px] md:text-[24px] font-bold leading-[32px] text-black">
                Experienced
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
