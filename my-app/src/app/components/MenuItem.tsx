import React from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";

import menu from "../assets/menu.png";

const menuItems = [
  { name: 'Lettuce Leaf', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu1.png' },
  { name: 'Fresh Breakfast', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/menu2.png' },
  { name: 'Mild Butter', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu3.png' },
  { name: 'Fresh Bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu4.png' },
  { name: 'Glow Cheese', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu5.png' },
  { name: 'Italian Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/menu6.png' },
  { name: 'Slice Beef', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu7.png' },
  { name: 'Mushroom Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu8.png' },
];

const MenuComponent = () => {

  const route= useRouter()
    function handleNavigate() {
      route.push(("../shopdetail"))
    }

  return (
    <section className='bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12'>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2 font-greatVibes text-[#FF9F0D]">Choose & Pick</h2>
        <h1 className="text-3xl font-bold text-center mb-8"><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h1>

        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4">
            <li className="cursor-pointer hover:text-yellow-500">Breakfast</li>
            <li className="cursor-pointer hover:text-yellow-500">Lunch</li>
            <li className="cursor-pointer hover:text-yellow-500">Dinner</li>
            <li className="cursor-pointer hover:text-yellow-500">Dessert</li>
            <li className="cursor-pointer hover:text-yellow-500">Drink</li>
            <li className="cursor-pointer hover:text-yellow-500">Snack</li>
            <li className="cursor-pointer hover:text-yellow-500">Soups</li>
          </ul>
        </div>

        <div className='flex flex-col lg:flex-row'>
          {/* Left Section: Decorative Image */}
          <div className="hidden lg:block w-1/3 md:w-[50%]">
            <Image src={menu} alt="Menu Decor" layout="responsive" />
          </div>

          {/* Right Section: Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 flex-grow">
            {menuItems.map((item, index) => (
              <div key={index} 
              onClick={handleNavigate}
              className="flex 00 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl   hover:border-white cursor-pointer">
                <div className="w-1/3 ">
                  <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" />
                </div>
                <div className="p-4 w-2/3">
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  <p className="text-[11px] text-gray-400 mb-2">{item.description}</p>
                  <h2 className="text-yellow-400 font-bold">{item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;
