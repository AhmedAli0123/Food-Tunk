"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../store/hooks";
import {Cart} from "../utilits/type";
import Link from "next/link";


export default function CheckoutPage() {
  // Navigation
    const router = useRouter()
    function handleNavigation(){
      router.push('/cart')
    }
    function handleOrderComplete(){
      router.push('/ordercomplete')
    }

    // Get Total Amount
    const cart: Cart[]  | any= useAppSelector((state) => state.cart);
  const totalAmount = cart.reduce(
    (acc: number, product:Cart) => acc + product.price * product.quantity,
    0
  );
  let tax:string="20"

  return (
    <>
     <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Checkout Page</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            &gt;Checkout Page
          </p>
        </div>
      </section>
    
    <div className="container px-[70px]  md:px-[135px]  py-8">
      <div className="grid gap-8 lg:grid-cols-2 ">
        {/* Left Column - Forms */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Choose country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="uk">Pakistan</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Choose city"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Zip code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address1"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label
                  htmlFor="address2"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sameAsShipping"
                className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                Same as shipping address
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-4">
            <button 
            onClick={handleNavigation}
            className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-full md:w-72 h-12 px-3">
              Back to cart
            </button>
            <button className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-full md:w-72 h-12">
              Proceed to shipping
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="p-6 rounded-lg border-2 border-gray-300">
      {/* Order Summary Heading */}
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      {/* Order Items */}
      <div className="space-y-4">
        {cart.map((product: Cart[] | any ) => (
          <div key={product.id} className="flex items-center space-x-4">
            {/* Product Image */}
            <div className="relative h-16 w-16">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="rounded-md object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="font-medium">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.quantity} x ${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">
                Total: ${(product.quantity * product.price).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary Details */}
      <div className="mt-6 space-y-2 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Discount</span>
          <span className="font-medium">0</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${tax}</span>
        </div>
        <div className="flex justify-between border-t pt-2">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">${(totalAmount + parseFloat(tax)).toFixed(2)}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <button
      onClick={handleOrderComplete}
      className="w-full mt-10 px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500   h-12">
      Place an order
            </button> 
    </div>
      </div>
          
    </div>
    </>
  );
}
