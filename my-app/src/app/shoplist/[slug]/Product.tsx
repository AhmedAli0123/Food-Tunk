"use client"

import React, { useState } from 'react'
import star from "./assets/Star.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import {
  FaArrowLeft,
  FaArrowRight,
  FaRegHeart,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

import Image from "next/image";
import IProduct from '@/types/foods';
import { useAppDispatch } from '@/app/store/hooks';
import { addToCart } from '@/app/store/feature/cart';

function Product({product}:{product:IProduct}) {

  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [cartPrice, setCartPrice] = useState(product.price || 0);

// Handle Increment
const handleIncrement = () => {
  const newQuantity = quantity + 1;
  setQuantity(newQuantity);
  setCartPrice(newQuantity * product.price); 
};
 // Handle Decrement
 const handleDecrement = () => {
  if (quantity > 1) {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    setCartPrice(newQuantity * product.price); 
  } 
};

function handleAddToCart() {
  const cartItem = {
    slug: product.slugs,
    title: product.name,
    img: product.imageUrl,
    price: product.price,
    quantity: 1,
  };

  dispatch(addToCart(cartItem)); 
}

// Handle notification
const handleNotification = () => {toast.success('🦄 Item was add in cart sucessfully', {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
  });
}  

  return (
    <section className="px-[80px] md:px-[135px] flex flex-col md:flex-row gap-[55px]  my-[120px]">
    {/* Creating Images */}
    <div className="w-[100%] md:w-[50%] flex justify-between gap-[24px]">
      <div>
        <Image
          src={product?.imageUrl || ""}
          width={491}
          height={550}
          alt=""
          className=" md:w-[400px] md:h-[550px] hover:border-2 border-gray-700 transition-transform duration-200 ease-in transform hover:scale-105 cursor-pointer"
        />
      </div>
    </div>

    {/* For Product Details Section */}
    <div className="w-[100%] md:w-[50%] ">
      {/* For Tops Buttons */}
      <div className="hidden lg:flex lg:flex-row flex-col justify-between">
        <div className="bg-[#FF9F0D] text-white px-[17px] rounded-[8px] whitespace-nowrap md:whitespace-normal font-bold items-center flex gap-[5px]">
          In Stock
        </div>

        {/* For Arrow Buttons */}
        <div className="hidden  lg:flex lg:gap-2 md:gap-5">
          <button
            className=" text-[#828282] text-[14px] md:text-[18px] px-5 py-2 rounded-full hover:bg-[#FF9F0D] hover:text-white 
                          flex justify-center items-center transition-transform duration-200 ease-in transform hover:scale-105"
          >
            <FaArrowLeft /> Prev
          </button>
          <button
            className="text-[#828282] text-[14px] md:text-[18px] px-5 py-2 rounded-full hover:bg-[#FF9F0D] hover:text-white 
                          flex justify-center items-center transition-transform duration-200 ease-in transform hover:scale-105"
          >
            Next <FaArrowRight />
          </button>
        </div>
      </div>

      {/* For Product Details */}
      <div>
        <h2 className="text-[24px] md:text-[40px] font-bold mt-[8px]">
          {product?.name}
        </h2>
        <p className="text-[#4F4F4F] text-[14px]  md:text-[18px] mt-[24px]">
          {product?.description}
        </p>

        <hr className="border border-[#E0E0E0] my-[32px]" />

        <div className="flex gap-10">
          <h3 className="md:text-[32px] text-[24px] font-bold mt-[64px] leading-[40px]">
            ${cartPrice.toFixed(2)}
          </h3>
          <h2 className="md:text-[32px] text-[20px] font-extralight mt-[64px] leading-[40px] ml-2 line-through">
            ${product?.originalPrice}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-[14px] text-[#828282] text-[12px] md:text-[16px] font-normal mt-[18px]">
          <Image src={star} alt="rating" />|<h2 className="">5.0 Rating</h2>
          |<h2>22 Review</h2>
        </div>

        <h2 className="mt-[22px]">Dictum/cursus/Risus</h2>

        <div className="my-[26px] flex flex-col md:flex-row gap-[16px]">
          <div className="flex items-center  text-black">
            {/* Minus Button */}
            <button 
            onClick={handleDecrement}
            className="w-16 h-[50px] text-2xl border border-gray-500 hover:bg-[#ffaf37]">
              -
            </button>

            {/* Counter Value */}
            <div className="w-16 h-[50px] text-2xl flex items-center justify-center border border-gray-500">
            {quantity}
            </div>

            {/* Plus Button */}
            <button
            onClick={handleIncrement}
             className="w-16 h-[50px] text-2xl border border-gray-500 hover:bg-[#ffaf37]">
              +
            </button>
          </div>
          <ToastContainer />
          <button
          onClick={() => {
              handleAddToCart(); 
              handleNotification(); }
            }
          
            className="bg-[#FF9F0D] px-5 py-2 text-[12px] md:text-[16px] hover:bg-[#ffaf37] hover:text-white 
                                  flex justify-center items-center transition-transform duration-200 ease-in transform hover:scale-105"
          >
            Add To Cart
          </button>
        </div>

        <h2 className="text-[#4F4F4F] text-[18px] font-normal flex flex-wrap items-center gap-4 cursor-pointer sm:text-[16px] md:text-[18px]">
          <span className="flex items-center">
            <FaRegHeart className="hover:text-red-600 cursor-pointer" />
            <span className="ml-1">Add to Wishlist</span>
          </span>
          <span className="flex items-center">
            <IoIosGitCompare />
            <span className="ml-1">Compare</span>
          </span>
        </h2>

        <h2 className="text-[#4F4F4F] text-[18px] font-normal mt-[8px]">
          <span className="text-[#333333]">Category:</span> Pizza
        </h2>
        <h2 className="text-[#4F4F4F] text-[18px] font-normal mt-[8px]">
          <span className="text-[#333333]">Tags:</span> Our Shop
        </h2>

        <div className="flex mt-[28px] items-center gap-[5px]">
          <h2 className="text-[#333333] text-[18px] font-normal ">
            Share:
          </h2>
          <FaYoutube className="w-[23px] h-[23px]  text-[#4F4F4F]" />
          <FaFacebook className="w-[23px] h-[23px] text-[#4F4F4F]" />
          <FaTwitter className="w-[23px] h-[23px]  text-[#4F4F4F]" />
          <FaInstagramSquare className="w-[23px] h-[23px] text-[#4F4F4F]" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Product