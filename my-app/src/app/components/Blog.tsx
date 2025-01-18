import React from "react";

import Image from "next/image";
import Link from "next/link";

import { AiOutlineLike } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";

function Blog() {
    const posts = [
        {
            id: 1,
            date:"10 February 2022 ",
            title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
            imageSrc: "/blog1.png",
        },
        {
            id: 2,
            date:"10 February 2022 ",
            title: "Morbi Sodales Tellus Elit In Blandit Risus Suscipit A",
            imageSrc: "/blog2.png",
        },
        {
            id: 3,
            date:"10 February 2022 ",
            title: "Curabitur rutrum velit ac congue malesuada",
            imageSrc: "/blog3.png",
        },
    ];
    return (
        <section className="bg-black md:px-[135px]   py-[50px]">
        <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
      Blog Post
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">La</span>test News & Blog
        </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 flex-grow mt-[59px]">
            {posts.map((post) => (
                <div key={post.id} className="w-[100%] mb-8 border border-white ">
                    <div className="">
                        <Image
                            src={post.imageSrc}
                            alt={post.title}
                            width={423}
                            height={349}
                        />
                        <h2 className="text-[#FF9F0D] text-[16px] font-normal mt-[30px] px-[43px]">{post.date}</h2>
                        <h2 className="text-white text-[24px] font-bold px-[43px] mt-[16px]">{post.title}</h2>
                        <div className="text-white flex justify-between px-[43px] my-[32px]">
                            <Link href={"../shoplist"} className="hover:underline hover:text-[#FF9F0D]">Learn More</Link>
                            <div className="flex gap-[8px]">
                            <AiOutlineLike />
                            <RiMessage2Line />
                            <FiShare2 />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </section>

    )
}

export default Blog;
