"use client";

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import ReactLoading from "react-loading";

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
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error handling

  // Fetch products from Sanity
  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error state
      try {
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
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
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

          {/* Loading Spinner */}
          {loading && (
            <div
              role="status"
              className="flex justify-center items-center mt-10"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* No Products Found */}
          {!loading && !error && filteredProducts.length === 0 && (
            <div className="flex justify-center items-center pt-5 text-2xl font-bold">
              <p>Opp&apos;s!!! Product is UnAviable</p>
            </div>
          )}

          {/* Product List */}
          {!loading && !error && (
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
          )}
        </div>
      </section>
    </>
  );
}

export default Page;