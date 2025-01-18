"use client";


import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


import { StaticImageData } from "next/image";

import { PiArrowLineUpRightBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { LuMessagesSquare } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";



import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

interface blogDataType {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
}

function Page() {

  const blogData: blogDataType[] = [
    {
      id: 1,
      img: img1,
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: 2,
      img: img2,
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: 3,
      img: img3,
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: 4,
      img: img4,
      title: "My Favorite Easy Black Pizza Toast Recipe",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
  ];

  const route= useRouter()

  function handleNavigate() {
    route.push(("../blogdetail"))
  }


  return (
    <>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog list</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            &gt; Blog
          </p>
        </div>
      </section>

      <div className="px-[80px] md:px-[170px] my-[120px]">
        {blogData.map((blog) => (
          <div key={blog.id}>
            <Image src={blog.img} alt={blog.title} width={870} height={520} />

            <div className="flex justify-start items-center my-[16px] ">
              <SlCalender className="text-[#FF9F0D]" />
              <h2 className="ml-[8px] text-[#4F4F4F] text-[10px] md:text-[16px] font-normal">Feb 14, 2022 /</h2>
              <LuMessagesSquare  className="text-[#FF9F0D] ml-[8px]" />
              <h2 className=" ml-[8px] text-[#4F4F4F] text-[10px] md:text-[16px] font-normal">3 /</h2>
              <LuUserPlus className="text-[#FF9F0D] ml-[8px]"/>
              <h2 className=" ml-[8px] text-[#4F4F4F] text-[10px] md:text-[16px] font-normal">Admin</h2>
            </div>

            <h2 className="text-[18px] md:text-2xl font-bold mb-[28px]">{blog.title}</h2>
        
            <hr className="border text-[#4F4F4F] my-[24px]" />

            <p className="text-[#4F4F4F] text-[14px] md:text-[16px] my-[24px]">{blog.description}</p>
            <button
              onClick={handleNavigate}
              className="text-[#FF9F0D] mb-[54px] flex justify-center transition-transform transform hover:scale-105 hover:shadow-xl
              items-center gap-[10px] px-[32px] py-[14px] border border-[#FF9F0D] w-[171px] h-[52px] hover:bg-[#FF9F0D] hover:text-white">
              Read more <PiArrowLineUpRightBold />
            </button>

           
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;
