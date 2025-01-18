"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

function TotalAmount({amount}:any) {
  const total = amount

  // Navigation
  const router =useRouter()
  function handleNavigation(){
    router.push('/checkout')
  }
  return (
    <>
      <div className="flex flex-col md:flex-row  justify-between items-start md:items-center gap-6 p-6   max-w-4xl mx-auto rounded-lg">
      {/* Coupon Code Section */}
      <div className="w-full md:w-1/2 p-4  rounded-lg ">
        <h3 className="text-xl font-semibold mb-4">Coupon Code</h3>
        <div className='border px-[24px] py-[20px]'>
        <p className="text-gray-400 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          diam pellentesque bibendum non.
        </p>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter Here code"
            className="flex-grow p-2 border border-gray-700 rounded-lg   placeholder-gray-500"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg">
            Apply
          </button>
          </div>
        </div>
      </div>

      {/* Total Bill Section */}
      <div className="w-full md:w-1/2 p-4  rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Total Bill</h3>
        <div className='border py-5 px-5 rounded'>
        <div className="space-y-2 ">
          <div className="flex justify-between ">
            <span className="text-[20px] font-bold   text-[#333333]">Cart Subtotal</span>
            <span className="text-[18px] font-bold   text-[#333333]">${(total).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Shipping Charge</span>
            <span className="font-semibold">$0.00</span>
          </div>
            <hr className='w-full border mt-[24px]' />
          <div className="flex justify-between">
            <span className="text-[20px] font-bold   text-[#333333]">Total Amount</span>
            <span className="text-[18px] font-bold   text-[#333333]">${(total).toFixed(2)}</span>
          </div>
        </div>
      </div>
        <button 
        onClick={handleNavigation}
        className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
    </>
  )
}

export default TotalAmount