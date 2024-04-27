"use client"
import { fetchData } from '@/redux/features/StudentSlice/StudentSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const StudentCards = () => {
    const { students, isLoading, isError, error } = useSelector((state) => state.studentData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])




    return (
        <div className=''>
            <h1 className='text-4xl my-20 font-bold text-center text-[#342E5C]'>The People Of  Psy 10</h1>

            <div
                className='lg:w-4/5 mx-auto grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-10'
            >
                {
                    students?.map(student => (

                        <Link key={student?._id} href={`/StudentDetails/${student?._id}`}>
                            <div className="relative  ">
                                <svg width="317" height="428" viewBox="0 0 317 428" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_304_4010)">
                                        <rect x="9" y="8" width="298.182" height="410" rx="35" fill="#FFF0F0" />
                                    </g>
                                    <path d="M249.036 381.358L224.447 405.916V418H33.6C25.4 418 9 409.8 9 392.654V230.891H98.3794L249.036 381.358Z" fill="#7469B6" />
                                    <path d="M9 230.891H30.1438V68.1968L71.6182 26.7098H213.932L232.636 8H59.4198L9 58.4352V230.891Z" fill="#FFE6E6" />
                                    <path d="M59.6909 8L9 58.6909V32.6C9 19.1818 22.4182 8 33.6 8H59.6909Z" fill="#7469B6" />
                                    <path d="M38.0723 272.636V303.2H68.6359" stroke="#FEFFFF" stroke-width="4" />
                                    <path d="M29.873 341.964H182.691" stroke="#FFF0F0" stroke-width="4" />
                                    <path d="M275 80L275 345" stroke="#342E5C" stroke-width="3" stroke-linecap="square" />
                                    <path d="M291 80L291 345" stroke="#342E5C" stroke-width="3" stroke-linecap="square" />
                                    <path d="M283 80L283 345" stroke="#342E5C" stroke-width="2" stroke-linecap="square" />
                                    <rect x="273" y="360" width="19" height="19" fill="#342E5C" />
                                    <path d="M273 384H292V387C292 395.837 284.837 403 276 403H273V384Z" fill="#342E5C" />
                                    <rect width="19" height="19" transform="matrix(1 0 0 -1 273 67)" fill="#342E5C" />
                                    <path d="M273 43H292V40C292 31.1634 284.837 24 276 24H273V43Z" fill="#342E5C" />
                                    <defs>
                                        <filter id="filter0_d_304_4010" x="0" y="0" width="316.182" height="428" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_304_4010" />
                                            <feOffset dy="1" />
                                            <feGaussianBlur stdDeviation="3.5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_304_4010" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_304_4010" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <div className='absolute top-9 left-10 '>
                                    <div className='flex relative'>
                                        <Image src={student?.image} alt="" width={1000} height={1000} className='w-44 h-[16.5rem] object-cover' />
                                        <h1 className='text-5xl text-[#342E5C] rotate-90 font-bold absolute left-[10rem] top-16 '>{student?.roll.slice(-3)}</h1>
                                    </div>
                                    <div className='mt-12 '>
                                        <h1 className='text-black text-xl font-bold  '>{student?.name}</h1>
                                        <p className='text-[#FFF0F0]'>{student?.roll}</p>
                                    </div>
                                </div>
                            </div>

                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default StudentCards;