import React from 'react'

import { FaFacebookF,FaTwitter, FaPinterest  } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Tags() {
  return (
    <>
        <section className='px-5 md:px-[135px] my-[32px]'>
            <div className='flex justify-between items-center border border-[#E0E0E0] px-[24px] py-[18px]'>

                <div className='flex gap-[8px]'>
                    <h2 className='text-[10px] md:text-[16px] font-bold'>Tags:</h2>
                    <p className='text-[#828282] text-[10px] md:text-[16px] font-normal'>Restaurant, Dinner, Pizza, Yummy, </p>
                </div>

                <div className='flex gap-[8px]'>
                    <h2 className='text-[12px] md:text-[16px] font-bold'>Share:</h2>
                    <div className='flex gap-[5px] md:gap-[20px] items-center text-[#4F4F4F] text-[12px] md:text-[16px] font-normal'>
                         <FaFacebookF/> <FaTwitter /> <RiInstagramFill /> <FaPinterest />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Tags