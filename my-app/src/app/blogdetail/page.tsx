import React from "react";
import Link from "next/link";

import Image from "next/image";

import { SlCalender } from "react-icons/sl";
import { LuMessagesSquare } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";

import img1 from "./assets/img1.png";
import SecondPart from "./components/SecondPart";
import Tags from "./components/Tags";
import CommentSection from "./components/CommentSec";
import Form from "./components/Form";

function page() {
  return (
    <>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog Details</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            &gt; Blog Details
          </p>
        </div>
      </section>

      <div className="px-[80px] md:px-[170px] my-[120px]">
        <div>

            <Image src={img1} alt="sadsa"></Image>
          <div className="flex justify-start items-center my-[16px] ">
            <SlCalender className="text-[#FF9F0D]" />
            <h2 className="ml-[8px] text-[#4F4F4F] text-[10px] md:text-[16px] font-normal">
              Feb 14, 2022 /
            </h2>
            <LuMessagesSquare className="text-[#FF9F0D] ml-[8px]" />
            <h2 className=" ml-[8px] text-[#4F4F4F] text-[10px] md:text-[16px] font-normal">
              3 /
            </h2>
            <LuUserPlus className="text-[#FF9F0D] ml-[8px]" />
            <h2 className=" ml-[8px] text-[#4F4F4F] text-[10px] md:text-[16px] font-normal">
              Admin
            </h2>
          </div>

          <h2 className="text-[18px] md:text-2xl font-bold mb-[28px]">
            10 Reasons To Do A Digital Detox Challenge
          </h2>

          <hr className="border text-[#4F4F4F] my-[24px]" />

          <p className="text-[#4F4F4F] text-[14px] md:text-[16px] my-[24px]">
            Netus pretium tellus nulla commodo massa adipiscing in elementum
            magna congue condimentum placerat habitasse potenti ac orci a
            quisque tristique elementum et viverra at condimentum scelerisque eu
            mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque
            aliquet tempus faucibus quam ac aliquet nibh a condimentum
            suspendisse hac integer leo erat aliquam ut himenaeos.
          </p>

          <p className="text-[#4F4F4F] text-[14px] md:text-[16px] my-[24px]">
            Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
            varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt
            per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc
            torquent euismod adipiscing adipiscing dui gravida justo.
          </p>
        </div>

        <div className="bg-[#FF9F0D] my-[56px] p-[24px]">
              <h2 className="text-white text-[16px]  md:text-[24px] font-bold leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </h2>
            </div>

            <p className="text-[#4F4F4F] text-[14px] md:text-[16px] my-[24px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      </div>

      <SecondPart />
      <Tags />
      
      <CommentSection />
      <Form />
    </>
  );
}

export default page;
