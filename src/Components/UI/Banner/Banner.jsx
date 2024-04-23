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
        <div className="flex justify-between bg-[#7469B6]">
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
    );
};

export default Banner;