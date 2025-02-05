"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import IProduct from "@/types/foods";


function CartPage() {
  const [products, setProducts] = useState<IProduct[]>([]);

  // Load cart items from local storage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const items = Object.values(cart) as IProduct[];
    setProducts(items);
  }, []);

  // Update Cart in Local Storage
  const updateCartInLocalStorage = (updatedProducts: IProduct[]) => {
    const cart = updatedProducts.reduce(
      (acc, product) => ({ ...acc, [product.slug || ""]: product }),
      {}
    );
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Handle Increment
  const handleIncrement = (slug: string) => {
    const updatedProducts = products.map((product) => {
      if (product.slug === slug) {
        return { ...product, quantity: (product.quantity ?? 1) + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
    updateCartInLocalStorage(updatedProducts);
  };

  // Handle Decrement
  const handleDecrement = (slug: string) => {
    const updatedProducts = products.map((product) => {
      if (product.slug === slug && (product.quantity ?? 1) > 1) {
        return { ...product, quantity: (product.quantity ?? 1) - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
    updateCartInLocalStorage(updatedProducts);
  };

  // Handle Remove Function
  const MySwal = withReactContent(Swal);
  function handleRemove(slug: string) {
    MySwal.fire({
      title: "Are you sure?",
      text: "Do you really want to remove this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProducts = products.filter(
          (product) => product.slug !== slug
        );
        setProducts(updatedProducts);
        updateCartInLocalStorage(updatedProducts);
        MySwal.fire("Removed!", "The item has been removed.", "success");
      }
    });
  }

  // Total Price Calculation
  const totalAmount = products.reduce(
    (acc, product) => acc + product.price * (product.quantity ?? 1),
    0
  );
  // Calculate the Discount
  const discount = products.reduce(
    (acc, product) => acc + (product.originalPrice - product.price),
    0
  );
  // Calculate the Tax
  const tax = totalAmount * 0.2;
  

  // Loading and Error State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cart Transfer to checkout page
  const router = useRouter();
  // Navigate to checkout
  const handleNavigation = () => {
    if (products.length === 0) {
      MySwal.fire({
        title: "Cart is empty!",
        text: "Please add some items to your cart.",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        timer: 3000,
      })
      setError("Cart is empty.");
      return;
    }
    setLoading(true);
    setError(null);
    setTimeout(() => {
      // Simulating an API call or delay
      router.push("/checkout");
      setLoading(false);
    }, 3000);
  };

  // Coupon Code
  const [couponInput, setCouponInput] = useState("");

  const handleCouponCode = () => {
    if (couponInput === "Ahmed") {
        // Generate Notification
        MySwal.fire({
          title: "Coupon Applied!",
          text: "Your coupon has been applied successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
          timer: 3000,
        });
    } else {
      MySwal.fire({
        title: "Invalid Coupon Code!",
        text: "Please enter a valid coupon code.",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        timer: 3000,
      })
      setCouponInput(""); // Clear input after failed attempt
      return;
    }
  };

  return (
    <>
  {/* Hero Section */}
  <section
    className="bg-cover bg-center h-64 flex items-center justify-center"
    style={{ backgroundImage: "url('/hero.png')" }}
  >
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold">Shopping Cart</h2>
      <p className="mt-4">
        <Link href="/" className="text-yellow-400 hover:text-yellow-500">
          Home
        </Link>{" "}
        &gt; Shopping Cart
      </p>
    </div>
  </section>

  {/* Cart Content */}
  <div className="max-w-5xl mx-auto py-10 px-4">
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">
      Your Cart
    </h1>

    {error && (
      <div className="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
        {error}
      </div>
    )}

    {loading ? (
      <div className="flex items-center justify-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        <p className="ml-4 text-lg">Redirecting to checkout...</p>
      </div>
    ) : products.length === 0 ? (
      <div className="text-center text-gray-400 text-lg font-semibold py-20">
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
        {products.map((product) => (
          <div
            key={product.slug}
            className="flex flex-col md:grid md:grid-cols-6 gap-4 items-center py-6 border-b border-gray-700"
          >
            {/* Product Image */}
            <div className="flex items-center justify-center md:col-span-1">
              <Image
                src={product.imageUrl || product.image || ""}
                alt={product.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>

            {/* Product Name */}
            <div className="text-center md:text-left md:col-span-1">
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </div>

            {/* Price */}
            <div className="text-center md:text-left md:col-span-1">
              <span className="text-black">${product.price.toFixed(2)}</span>
            </div>

            {/* Quantity */}
            <div className="flex justify-center md:justify-start items-center md:col-span-1">
              <button
                onClick={() => handleDecrement(product.slug || "")}
                className="bg-gray-800 text-white px-3 py-1 rounded-l hover:bg-gray-700"
              >
                -
              </button>
              <span className="px-4 text-black">{product.quantity}</span>
              <button
                onClick={() => handleIncrement(product.slug || "")}
                className="bg-gray-800 text-white px-3 py-1 rounded-r hover:bg-gray-700"
              >
                +
              </button>
            </div>

            {/* Total */}
            <div className="text-center md:text-left md:col-span-1">
              <span className="text-black">
                ${(product.price * (product.quantity ?? 1)).toFixed(2)}
              </span>
            </div>

            {/* Remove Button */}
            <div className="flex justify-center md:justify-start md:col-span-1">
              <button
                onClick={() => handleRemove(product.slug || "")}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </>
    )}
  </div>

  {/* Coupon and Total Bill Section */}
  <div className="max-w-5xl mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row gap-8">
      {/* Coupon Code Section */}
      <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-white">Coupon Code</h3>
        <div className="space-y-4">
          <p className="text-gray-400 text-sm">
            Enter your coupon code if you have one.
          </p>
          <div className="flex sm:flex-row flex-col items-center gap-4">
            <input
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
              type="text"
              placeholder="Enter coupon code"
              className="flex-grow p-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleCouponCode}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Total Bill Section */}
      <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-white">Total Bill</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Cart Subtotal</span>
            <span className="text-white">${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Shipping Charge</span>
            <span className="text-white">$0.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Tax</span>
            <span className="text-white">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Discount</span>
            <span className="text-white">-${discount.toFixed(2)}</span>
          </div>
          <hr className="border-gray-700" />
          <div className="flex justify-between">
            <span className="text-xl font-bold text-white">Total Amount</span>
            <span className="text-xl font-bold text-white">
              ${(totalAmount + Number(tax)).toFixed(2)}
            </span>
          </div>
        </div>

        <button
          onClick={handleNavigation}
          className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</>
  );
}

export default CartPage;
