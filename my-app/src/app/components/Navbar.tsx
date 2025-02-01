"use client";

import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import IProduct from "@/types/foods";

export default function Navbar() {


  // Router For Path
  const router = useRouter();
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Blog", path: "/blog" },
    { name: "Chef", path: "/chef" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shoplist" },
    { name: "Contact", path: "/SignUp" },
  ];

  const [products, setProducts] = useState([]); // All products from Sanity
  const [searchQuery, setSearchQuery] = useState(""); // User input
  const [filteredProducts, setFilteredProducts] = useState([]); // Products after search

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await client.fetch(
          `*[_type == "food"]{ 
            name, 
            description, 
            category, 
            "slug": slug.current, 
            "image": image.asset->url 
          }`
        );
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on the search query
  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter(
        (product: {
          name: string;
          description: string;
          category: string;
          slug: string;
        }) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  // Handle navigation to product page
  const handleProductClick = (slug: string) => {
    setSearchQuery(""); // Clear search query
    router.push(`/shoplist/${slug}`);
  };

  // Cart Length How many items in cart

  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    // Initial cart length
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    setCartLength(Object.keys(cart).length);

    // Create interval to check cart length periodically
    const interval = setInterval(() => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "{}");
      setCartLength(Object.keys(updatedCart).length);
    }, 1000); // Check every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="bg-black text-white p-4 w-full">
      <div className="flex items-center justify-between px-4 md:px-[135px]">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-orange-500">Food</span>tuck
        </div>

        {/* Mobile Navigation (Sheet) */}
        <div className="lg:hidden flex justify-between items-center gap-2">
          <Sheet>
            <SheetTrigger>
              <HiMenuAlt3 className="text-orange-500 text-[34px] cursor-pointer" />
            </SheetTrigger>
            <div className="relative">
              <Link href="/cart">
                <IoBagHandle className="w-6 h-6 cursor-pointer" />
              </Link>
              {cartLength > 0 && (
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartLength}
              </div>
              )}
            </div>
            <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-black">
              <SheetContent>
                {navigationItems.map((item) => (
                  <li
                    key={item.path}
                    className="hover:text-orange-500 cursor-pointer "
                    onClick={() => router.push(item.path)}
                  >
                    {item.name}
                  </li>
                ))}
              </SheetContent>
            </ul>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-[32px]">
          {navigationItems.map((item) => (
            <li
              key={item.path}
              className="hover:text-orange-500 cursor-pointer"
              onClick={() => router.push(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Search and Cart */}
        <div className="hidden lg:flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              className="bg-black border border-orange-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
            />
            <CiSearch className="absolute top-2.5 right-3 text-orange-500" />
            {/* Display filtered products */}
            {filteredProducts.length > 0 && (
              <div className="absolute bg-white border border-gray-200 rounded-md shadow-lg mt-2 max-h-60 overflow-y-auto w-full z-50">
                {filteredProducts.map((product: IProduct) => (
                  <div
                    key={product.slug}
                    onClick={() => handleProductClick(product.slug || "")} // Navigate on click
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="font-semibold text-gray-800">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {product.category}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Show "No products found" if search yields no results */}
            {searchQuery && filteredProducts.length === 0 && (
              <div className="absolute bg-white border border-gray-200 rounded-md shadow-lg mt-2 px-4 py-2 w-full z-50">
                <p className="text-gray-600">No products found</p>
              </div>
            )}
          </div>

          <div className="relative">
            <Link href="/cart">
              <IoBagHandle className="w-6 h-6 cursor-pointer" />
            </Link>
            
            {cartLength > 0 && (
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartLength}
            </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
