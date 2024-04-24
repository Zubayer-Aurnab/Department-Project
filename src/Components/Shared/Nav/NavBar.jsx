'use client'
import React, { useState } from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const NavBar = () => {

    const [IsOpen, setIsOpen] = useState(false)

    return (
        <div className=''>
            {/* large device-------------------------------------- */}
            <div className='py-2 px-10  justify-between hidden md:flex '>
                <div >
                    <Image src={logo} alt="" className='w-24 ' />
                </div>
                <div className='w-full  flex-1 flex justify-center items-center relative'>
                    <input
                        type="text"
                        className='border-[1px] border-[#342E5C] rounded-full px-6 h-8 text-sm w-1/2 bg-transparent text-[#AD88C6]'
                        placeholder={`Who are you looking for...? `}
                    />
                    <FaSearch className='absolute right-[420px] hidden lg:flex text-[#AD88C6]' />
                </div>
                <div className='flex gap-8  items-center '>
                    <p className='text-[#342E5C] font-bold'>About Us</p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className='text-[#342E5C] font-bold'>FAQ's</p>
                </div>
            </div>
            {/* large device-------------------------------------- */}


            {/* small device ------------------------------------ */}
            <div className=' px-2  justify-between flex flex-row-reverse md:hidden relative'>
                <Image src={logo} alt="" className='w-24 py-2' />
                <div className='w-full flex-1 flex justify-center items-center relative '>
                    <input
                        type="text"
                        className='border-[1px] border-[#342E5C] rounded-full px-6 h-8 text-sm  bg-transparent text-[#AD88C6] '
                        placeholder={`Who are you looking for...? `}
                    />
                    <FaSearch className='absolute right-9 text-[#AD88C6]' />
                </div>

                <div className='flex justify-center items-center'>
                    <button
                        onClick={() => setIsOpen(!IsOpen)}
                    >
                        <GiHamburgerMenu className='text-2xl' />
                    </button>
                </div>

                <div
                    style={{
                        transition: "left 0.4s ease-in-out",
                        zIndex:"100"
                    }}
                    className={`gap-8 px-2 items-center absolute bg-[#E1AFD1] ${IsOpen ? "left-0 " : "left-[-250px]"} w-1/2 h-screen py-2 `}>
                    <button
                        onClick={() => setIsOpen(!IsOpen)}
                    >
                        <IoMdCloseCircleOutline className='text-4xl' />
                    </button>
                    <div className='space-y-3 mt-2'>
                        <p className='text-[#342E5C] font-bold border-2 p-2 rounded-lg border-[#342E5C]'>About Us</p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className='text-[#342E5C] font-bold border-2 p-2 rounded-lg border-[#342E5C]'>FAQ's</p>
                    </div>
                </div>
            </div>
            {/* small device ------------------------------------ */}
        </div >
    );
};

export default NavBar;