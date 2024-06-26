'use client'
import React, { useState } from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { fetchData } from '@/redux/features/StudentSlice/StudentSlice';
import Link from 'next/link';

const NavBar = () => {

    const [IsOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const search = (e) => {
        e.preventDefault()
        const form = e.target
        const search = form.search.value
        dispatch(fetchData(search))

    }
    const navigate = () => {

    }

    return (
        <div className=''>
            {/* large device-------------------------------------- */}
            <div className='py-2 px-10  justify-between hidden md:flex '>
                <Link href={'/'}>
                    <div >
                        <Image src={logo} alt="" className='w-24 ' />
                    </div>
                </Link>
                <form
                    onSubmit={search}
                    className='w-full  flex-1 flex justify-center items-center relative'>
                    <input
                        name="search"
                        type="text"
                        className='border-[1px] border-[#342E5C] rounded-full px-6 h-8 text-sm w-1/2 bg-transparent text-[#AD88C6]'
                        placeholder={`Who are you looking for...? `}
                    />
                    <FaSearch className='absolute right-[420px] hidden lg:flex text-[#AD88C6]' />
                </form>
                <div className='flex gap-8  items-center '>
                    <Link href={'/'}>
                        <p className='text-[#342E5C] font-bold hover:underline'>Home</p>
                    </Link>
                    <Link href={'/about'}>
                        <p className='text-[#342E5C] font-bold hover:underline'>About Us</p>
                    </Link>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <Link href={'/faq'}>
                        <p className='text-[#342E5C] font-bold hover:underline'>FAQ's</p>
                    </Link>
                </div>
            </div>
            {/* large device-------------------------------------- */}


            {/* small device ------------------------------------ */}
            <div className=' px-2  justify-between flex flex-row-reverse md:hidden relative'>
                <Link href={'/'}>
                    <Image src={logo} alt="" className='w-24 py-2' />
                </Link>

                <form
                    onSubmit={search}
                    className='w-full flex-1 flex justify-center items-center relative '>
                    <input
                        name='search'
                        type="text"
                        className='border-[1px] border-[#342E5C] rounded-full px-6 h-8 text-sm  bg-transparent text-[#AD88C6] '
                        placeholder={`Who are you looking for...? `}
                    />
                    <button className='absolute right-9'>
                        <FaSearch className=' text-[#AD88C6] ' />
                    </button>
                </form>

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
                        zIndex: "100"
                    }}
                    className={`gap-8 px-2 items-center absolute bg-[#E1AFD1] ${IsOpen ? "left-0 " : "left-[-250px]"} w-1/2 h-screen py-2 `}>
                    <button
                        onClick={() => setIsOpen(!IsOpen)}
                        className='w-full flex justify-end'
                    >
                        <IoMdCloseCircleOutline className='text-4xl' />
                    </button>
                    <div className='space-y-3 mt-2'>
                        <div>
                            <Link href={"/"} className=''>
                                <p className='text-[#342E5C] font-bold border-2 p-2 rounded-lg border-[#342E5C]'>Home </p>
                            </Link>
                        </div>
                        <div>
                            <Link href={"/about"} className=''>
                                <p className='text-[#342E5C] font-bold border-2 p-2 rounded-lg border-[#342E5C]'>About Us</p>
                            </Link>
                        </div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <div>
                            <Link href={'/faq'}>
                                <p className='text-[#342E5C] font-bold border-2 p-2 rounded-lg border-[#342E5C]'>FAQ's</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* small device ------------------------------------ */}
        </div >
    );
};

export default NavBar;