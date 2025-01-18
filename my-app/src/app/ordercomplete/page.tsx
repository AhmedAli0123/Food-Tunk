// pages/success.js

import Link from 'next/link';

export default function Success() {
  return (
    <>
     <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Order Complete</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            &gt;Order Complete
          </p>
        </div>
      </section>
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="text-center px-4 py-6  rounded-lg max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4"><span className='text-[#FF9F0D]'>Order Succes</span>sfully Placed!</h1>
        <p className="mb-6 text-xl">Thank you for your order. Your food is on its way!</p>
        
          <Link href="/shoplist">
          <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        
      </div>
    </div>
    </>
  );
}
