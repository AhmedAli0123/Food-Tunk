"use client";

import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppSelector } from "../store/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "../utilits/type";
import { client } from "@/sanity/lib/client";

export default function Navbar() {
  const cart = useAppSelector((state) => state.cart);

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
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </div>
            </div>
            <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-black">
              <SheetContent>
                {navigationItems.map((item) => (
                  <li
                    key={item.path}
                    className="hover:text-orange-500"
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
              className="bg-black border border-orange-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
            />
            <CiSearch className="absolute top-2.5 right-3" />
          </div>

          <div className="relative">
          <Link href="/cart">
            <IoBagHandle className="w-6 h-6 cursor-pointer" />
            </Link>
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
