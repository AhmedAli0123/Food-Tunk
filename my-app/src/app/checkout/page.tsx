"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import IProduct from "@/types/foods";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: null as number | null,
    city: "",
    address: "",
    zipCode: "",
    paymentMethod: "Cash on Delivery",
  });
  // Load cart from local storage
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const cartItems = Object.values(cart) as IProduct[];
    setProducts(cartItems);
  }, []);


  // Calculate the total price
  const cartTotal = products.reduce(
    (acc, product) => acc + product.price * (product.quantity ?? 1),
    0
  );
  // Calculate the Discount
  const discount = products.reduce(
    (acc, product) => acc + (product.originalPrice - product.price),
    0
  );
  // Calculate the Tax
  const tax = cartTotal * 0.2;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.phoneNumber ||
      !formData.city ||
      !formData.zipCode
    ) {
      alert("Please fill in all required fields.");
      return;
    }
     await createOrder();
  };

  const MySwal = withReactContent(Swal);
  // Create Order
  const createOrder = async () => {
    const validProducts = products.filter((product) => product._id); // Filter valid products
    // Create Order
    const order = {
      _type: "order",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
      foods: validProducts.map((product, index) => ({
        _type: "reference",
        _ref: product._id,
        _key: `food_${index}_${product._id}`,
      })),
      quantity: validProducts.map((product) => product.quantity),
      total: cartTotal,
      paymentMethod: formData.paymentMethod,
      createdAt: new Date().toISOString(),
    };
    try {
      await client.create(order);
      
      //Cart Value is empty
      if(products.length === 0){
        MySwal.fire({
          title: "Cart is Empty!",
          text: "Your cart is empty. Please add some items to your cart before placing an order.",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        })
        return;
      }

      // Show success notification
      MySwal.fire({
        title: "Order Placed!",
        text: "Your order has been placed successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        timer: 3000,
      }).then(() => {
        router.push("/ordercomplete"); // Redirect after confirmation
        localStorage.removeItem("cart"); // Clear the cart
      });
    } catch (error) {
      console.error("Error posting order:", error);
      // Show error notification
      MySwal.fire({
        title: "Error!",
        text: "Failed to place the order. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    }
  };

 
  //Cart Navigation
  const router = useRouter();
  function handleCartNavigation() {
    router.push("/cart");
  }
  

  return (
    <>
  {/* Hero Section */}
  <section
    className="bg-cover bg-center h-64 flex items-center justify-center"
    style={{ backgroundImage: "url('/hero.png')" }}
  >
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold">Checkout Page</h2>
      <p className="mt-4">
        <Link href="/" className="text-yellow-400 hover:text-yellow-500">
          Home
        </Link>{" "}
        &gt; Checkout Page
      </p>
    </div>
  </section>

  {/* Checkout Form */}
  <form
    onSubmit={handleSubmit}
    className="container mx-auto px-4 py-8 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-8"
  >
    {/* Left Column - Form Details */}
    <div className="w-full lg:w-1/2 space-y-6">
      <h2 className="text-2xl font-bold">Billing Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Phone:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber ==null ?"" : formData.phoneNumber}
            onChange={handleChange}
            placeholder="0300-1234567"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main Street"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Karachi"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="75500"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
      </div>
    </div>

    {/* Right Column - Order Summary */}
    <div className="w-full lg:w-1/2 p-6 rounded-lg border-2 border-gray-200 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

      {/* Order Items */}
      <div className="space-y-4">
        {products.map((product: IProduct) => (
          <div key={product.slug} className="flex items-center space-x-4">
            {/* Product Image */}
            <div className="relative h-16 w-16">
              <Image
                src={product.image || product.imageUrl || ""}
                alt={product.name}
                fill
                className="rounded-md object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">
                {product.quantity} x ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                Total: ${(product.price * (product.quantity ?? 1)).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary Details */}
      <div className="mt-6 space-y-3 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Discount</span>
          <span className="font-medium">-${discount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t pt-3">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">
            ${(cartTotal + Number(tax)).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        type="submit"
        className="w-full mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-sm text-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      >
        Place an Order
      </button>
    </div>
  </form>
</>
  );
}
