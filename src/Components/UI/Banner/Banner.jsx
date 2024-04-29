"use client"
import Image from "next/image";
import p1 from '@/assets/GroupPhotos/p1.png'
import p2 from '@/assets/GroupPhotos/p2.png'
import p3 from '@/assets/GroupPhotos/p3.png'
import { useEffect, useState } from "react";

const Banner = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [p3, p2, p1];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [images.length]);


    return (
        <>
            {/* large devices ------------------------------------ */}
            <div className=" justify-between bg-[#7469B6] hidden lg:flex">
                <div className="  p-10 flex-1 m-20">
                    <q className="text-white text-5xl text-justify tracking-tight leading-tight">Only through experience   <br />and experiments can we <br /> truly understand the workings <br /> of the  human mind.</q>
                    <p className="text-white text-3xl text-right">- Wilhelm Wundt</p>
                </div>
                <div className="flex-1">
                    <Image
                        style={{
                            borderRadius: "100% 0% 61% 39% / 0% 100% 0% 100% "
                        }}
                        src={images[currentImage]}
                        alt="" 
                        width={0}
                        height={0}
                        className="w-full object-contain" />
                </div>
            </div>
            {/* large devices ------------------------------------ */}



            {/* small devices --------------------------------------------- */}

            <div className="relative w-full lg:hidden">
                <Image src={images[currentImage]} height={0} width={0} alt="" className="w-full" />
                <div className="absolute flex  items-center  h-1/2 w-full left-0  bottom-0   bg-gradient-to-t from-[#E5BED9] to-[rgba(21,21,21,0)]  ">
                    <div className='absolute bottom-0'>
                        <div className="px-1 space-y-2 text-[#342E5C]">
                            <q className=" text-lg text-justify tracking-tight leading-tight font-medium">Only through experience  and experiments can we truly understand the workings of the  human mind.</q>
                            <p className=" text-base text-right font-medium">- Wilhelm Wundt</p>
                        </div>

                    </div>

                </div>
            </div>
            {/* small devices --------------------------------------------- */}
        </>
    );
};

export default Banner;