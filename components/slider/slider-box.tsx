"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface SliderBoxProps {
    images: string[] | StaticImageData[];
}

export default function SliderBox({ images }: SliderBoxProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative flex flex-col items-center">
            <div className="flex overflow-hidden relative rounded-xl w-full h-[500px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform
                 ${index === currentIndex ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index}`}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute top-1/4 flex flex-col h-2/4 left-48 z-10">
                <div className="flex flex-none flex-row justify-around">
                    <div
                        className="px-5 py-3 bg-white opacity-80 text-gray-700 rounded-lg cursor-pointer"
                        onClick={goToPrev}
                    >
                        {"<"}
                    </div>
                    <div
                        className="px-5 py-3 bg-white opacity-80 text-gray-700 rounded-lg cursor-pointer"
                        onClick={goToNext}
                    >
                        {">"}
                    </div>
                </div>
                <div className="mt-10 flex-1 text-3xl">
                    <p className="text-center text-cyan-100">귀멸의 칼날 무한열차</p>
                </div>
            </div>
        </div>
    );
}
