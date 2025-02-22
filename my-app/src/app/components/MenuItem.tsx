"use client"
import Image from "next/image";
import menu from "../assets/menu.png";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import IProduct from "@/types/foods";
import { useEffect, useState } from "react";

const MenuComponent = () => {
  // Fetching the data from the Sanity
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(()=>{
    const fetchProducts = async () => {
      const products = await client.fetch(`*[_type == "food"]{ 
        _id,
        name, 
        price, 
        description, 
        category, 
        originalPrice, 
        "image": image.asset->url, 
        "slug": slug.current,
      }`);
      setProducts(products);
    }
    fetchProducts();
  },[])
  


  return (
    <section className="bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2 font-greatVibes text-[#FF9F0D]">
          Choose & Pick
        </h2>
        <h1 className="text-3xl font-bold text-center mb-8">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </h1>

        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4">
            <Link
              href={"/shoplist"}
              className="cursor-pointer hover:text-yellow-500"
            >
              Breakfast
            </Link>
            <Link
              href={"/shoplist"}
              className="cursor-pointer hover:text-yellow-500"
            >
              Lunch
            </Link>
            <Link
              href={"/shoplist"}
              className="cursor-pointer hover:text-yellow-500"
            >
              Dinner
            </Link>
            <Link
              href={"/shoplist"}
              className="cursor-pointer hover:text-yellow-500"
            >
              Dessert
            </Link>
            <Link
              href={"/shoplist"}
              className="cursor-pointer hover:text-yellow-500"
            >
              Drink
            </Link>
            <Link
              href={"/shoplist"}
              className="cursor-pointer hover:text-yellow-500"
            >
              Snack
            </Link>
            <Link
              href={"/shoplist"}
              className="cursor-pointer hover:text-yellow-500"
            >
              Soups
            </Link>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Section: Decorative Image */}
          <div className="hidden lg:block w-1/3 md:w-[50%]">
            <Image src={menu} alt="Menu Decor" layout="responsive" />
          </div>

          {/* Right Section: Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 flex-grow">
            {products.map((item: IProduct) => (
              <Link
                href={`/shoplist/${item.slug}`}
                key={item._id}
                className="cursor-pointer"
              >
                <div
                  key={item._id}
                  className="flex 00 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl   hover:border-white cursor-pointer"
                >
                  <div className="w-1/3 ">
                    <Image
                      src={item.image || item.imageUrl || ""}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 w-2/3">
                    <h1 className="text-lg font-semibold">{item.name}</h1>
                    <p className="text-[11px] text-gray-400 mb-2">
                      {item.description}
                    </p>
                    <h2 className="text-yellow-400 font-bold">${item.price}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;
