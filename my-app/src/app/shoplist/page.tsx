"use client";

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";

// Define the Product type
interface Product {
  name: string;
  price: number;
  description: string;
  category: string;
  originalPrice: number;
  image: string;
  slug: string;
}

function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await client.fetch(
        `*[_type == "food"]{ 
          name, 
          price, 
          description, 
          category, 
          originalPrice, 
          "image": image.asset->url, 
          "slug": slug.current,
        }`
      );
      setProducts(productsData);
      setFilteredProducts(productsData);
    };
    fetchProducts();
  }, []);

  // Handle sorting
  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = event.target.value;
    setSortOrder(sortValue);

    let sortedProduct = [...products];
    if (sortValue === "lowToHigh") {
      sortedProduct.sort((a, b) => a.price - b.price);
    } else if (sortValue === "highToLow") {
      sortedProduct.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProduct);
  };

  // Handle search
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.slug.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Shop page</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            &gt; Shop
          </p>
        </div>
      </section>

      {/* For Main Page */}
      <section className="px-2  md:px-[135px] flex flex-col md:flex-row my-[40px]">
        {/* For Menu Items */}
        <div>
          <div className="hidden md:flex md:flex-row md:justify-start md:items-center mt-[120px] gap-[5px]">
            <h2>Sort By:</h2>
            <select
              value={sortOrder}
              onChange={handleSort}
              className="border border-gray-500 w-[150px] md:w-[236px] h-[26px] md:h-[46px] ml-[5px] rounded-md cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
            <h2 className="md:ml-[40px]">Show:</h2>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="border border-gray-500 w-[150px] md:w-[236px] h-[26px] md:h-[46px] ml-[5px] rounded-md"
            />
          </div>

          <div className="grid grid-cols-2 gap-[34px] md:grid-cols-2 lg:grid-cols-3 mt-[24px]">
            {filteredProducts.map((item: Product) => (
              <Link href={`/shoplist/${item.slug}`} key={item.slug}>
                <div className="w-[150px]  md:w-[300px]  rounded  hover:border-2 border-[#FF9F0D] transition-transform duration-200 ease-in transform hover:scale-105">
                  <div className="w-[150px] h-[200px] md:w-full md:h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={1500}
                      height={1500}
                      unoptimized={true}
                      className="rounded cursor-pointer"
                    />
                  </div>
                  <h2 className="font-bold text-[16px] md:text-[18px]">
                    {item.name}
                  </h2>
                  <h2 className="text-[#FF9F0D] font-normal md:text-[16px] text-[12px]">
                    ${item.price}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
