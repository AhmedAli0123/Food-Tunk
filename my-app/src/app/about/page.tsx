import Image from "next/image";
import Link from "next/link";

import { IoPlayOutline } from "react-icons/io5";
import { PiCoffeeBold, PiStudentDuotone } from "react-icons/pi";
import { FaPerson } from "react-icons/fa6";


import lemon from "../assets/about2.png";
import yogurt from "../assets/about3.png";
import pasta from "../assets/about4.png";
import third from "../assets/about5.png";
import chooseus from "../assets/aboutus.png";



export default function About() {
  return (
    <div>
      {/* First Section: Image and Breadcrumb */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">About us</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">Home</Link> &gt; About
          </p>
        </div>
      </section>

      {/* Second Section: Content and Buttons */}
      <section className="text-black body-font bg-white px-3 md:px-[300px]">
        <div className="container mx-auto flex md:flex-row flex-col px-5 py-24 items-center justify-center">
          {/* Left Text (takes 70% width) */}
          <div className="w-full md:w-7/10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-[15px] md:text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-black text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-white border-0 py-2 px-3 focus:outline-none rounded text-[10px] md:text-lg">
                <IoPlayOutline className="mr-2 text-white" />{" "}
                {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>

          {/* Right Images (takes 30% width) */}
          <div className="w-full px-5 md:w-3/10 flex flex-col space-y-4 mt-10 ">
            <Image
              className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg" // Responsive width and height
              alt="hero"
              src={lemon}
              layout="intrinsic"
            />
            <div className="md:flex flex-col mt-10 gap-5  space-x-4">
              <Image
                className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg"
                alt="image2"
                src={yogurt}
                layout="intrinsic"
              />
              <Image
                className="object-cover object-center w-[200px] h-40 md:h-40 rounded-lg"
                alt="image3"
                src={pasta}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Why Choose Us */}
      <section className="text-black body-font bg-white mx-[150px] px-3">
        <div className="container mx-auto flex  py-24 items-center justify-center flex-col">
          <h1 className="text-black text-[18px] md:text-3xl font-bold mt-3 mb-6 whitespace-nowrap">
            Why Choose Us
          </h1>
          <p className="text-center mb-8 text-black text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image src={chooseus} alt="Food" />
          {/* Fourth Section: Features */}
          <section className="text-black body-font bg-white">
            <div className="container px-3 py-20 mx-auto">
              <div className="flex flex-col md:flex-row  -m-4">
                {/* Feature 1 */}
                <div className="p-4 w-[359px]">
                  <div className="h-full border-2 rounded-lg flex flex-col justify-center items-center overflow-hidden">
                    <PiStudentDuotone className="h-[80px] w-[80px]" />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                        BEST CHEF
                      </h1>
                      <p className="leading-relaxed mb-3 text-center text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque diam pellentesque bibendum non dui volutpat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="p-4 md:w-[359px]">
                  <div className="h-full border-2 rounded-lg overflow-hidden flex flex-col justify-center items-center">
                    <PiCoffeeBold className="h-[80px] w-[80px]" />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                        120 Item Food
                      </h1>
                      <p className="leading-relaxed mb-3 text-center text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque diam pellentesque bibendum non dui volutpat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="p-4 md:w-[359px]">
                  <div className="h-full border-2 rounded-lg overflow-hidden flex flex-col justify-center items-center">
                    <FaPerson className="h-[80px] w-[80px]" />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                        Clean Environment
                      </h1>
                      <p className="leading-relaxed mb-3 text-center text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque diam pellentesque bibendum non dui volutpat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Image
            className="mb-10 object-cover object-center w-full md:w-3/4 lg:w-2/3 h-[300px] md:h-[400px] rounded-lg" // Responsive width and height
            alt="Why Choose Us"
            src={third}
            width={1320}
            height={480}
          />
        </div>


    {/* <div className="bg-white my-[30px]">
        <Testimonials /> 
        </div> */}
      </section>
    </div>
  );
}
