"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import Image from "next/image";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../store/feature/cart";
import { Cart } from "../utilits/type";
import TotalAmount from "./TotalAmount";
import { useRouter } from "next/navigation";
import Link from "next/link";

function CartPage() {
  const cart: Cart[] | any = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();


  // Passing As a props 
  const totalAmount = cart.reduce(
    (acc: number, product: Cart) => acc + product.price * product.quantity,
    0
  );

  // Cart Transfer to checkout page
  const router = useRouter();
 


    
  return (
    <>
     <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Shopping Cart</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            &gt;Shopping Cart
          </p>
        </div>
      </section>
    <div className="max-w-5xl mx-auto py-10 px-4">
  <h1 className="text-xl md:text-2xl font-bold mb-6 text-white">Your Cart</h1>

  {/* Conditional Rendering */}
  {cart.length === 0 ? (
    <div className="text-center text-gray-400 text-lg font-semibold py-10">
      Your Cart is empty
    </div>
  ) : (
    <>
      {/* Table Header */}
      <div className="hidden md:grid grid-cols-6 gap-4 text-gray-400 text-sm font-semibold border-b border-gray-700 pb-4">
        <div className="col-span-1">Product</div>
        <div className="col-span-1">Name</div>
        <div className="col-span-1">Price</div>
        <div className="col-span-1">Quantity</div>
        <div className="col-span-1">Total</div>
        <div className="col-span-1">Remove</div>
      </div>

      {/* Cart Items */}
      {cart.map((product: Cart | any) => (
        <div
          key={product.id}
          className="flex flex-col md:grid md:grid-cols-6 gap-4 items-center py-4 border-b border-gray-700"
        >
          {/* Product Image */}
          <div className="flex items-center justify-center md:col-span-1 mb-4 md:mb-0">
            <Image
              src={product.img}
              alt={product.title}
              width={93}
              height={97}
              className="w-20 h-20 rounded-lg object-cover"
            />
          </div>

          {/* Product Name and Rating */}
          <div className="text-center md:text-left md:col-span-1">
            <h2 className="text-base md:text-lg font-semibold">
              {product.title}
            </h2>
          </div>

          {/* Price */}
          <div className="text-center md:text-left md:col-span-1 text-sm md:text-base">
            ${product.price.toFixed(2)}
          </div>

          {/* Quantity */}
          <div className="flex justify-center md:justify-start items-center md:col-span-1">
            <button
              onClick={() => dispatch(decreaseQuantity(product.uuid))}
              className="bg-gray-800 text-white px-2 py-1 rounded-l text-sm md:text-base"
            >
              -
            </button>
            <span className="px-4 text-sm md:text-base">
              {product.quantity}
            </span>
            <button
              onClick={() => dispatch(increaseQuantity(product.uuid))}
              className="bg-gray-800 text-white px-2 py-1 rounded-r text-sm md:text-base"
            >
              +
            </button>
          </div>

          {/* Total */}
          <div className="text-center md:text-left md:col-span-1 text-sm md:text-base">
            ${(product.price * product.quantity).toFixed(2)}
          </div>

          {/* Remove Button */}
          <div className="flex justify-center md:justify-start md:col-span-1">
            <button
              onClick={() => dispatch(removeFromCart(product.uuid))}
              className="text-red-500 hover:text-red-700 text-sm md:text-base"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </>
  )}
</div>

     
      <TotalAmount amount={totalAmount} />
    </>
  );
}

export default CartPage;
