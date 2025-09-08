"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

export default function ImageCarousel({ slides, intervalTime = 3000 }) {
  const router = useRouter()
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, intervalTime)

    return () => clearInterval(timer);
  }, [slides.length, intervalTime])

  return (
    <div className="w-full h-126 relative">
      {/* Slides */}
      { slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out 
            ${ index === current ? "opacity-100" : "opacity-0"}
            ${ index === current ? "z-1" : "z-0" }
          `}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            fill={true}
          />
          {/* Text overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center
            lg:pl-26 lg:items-start lg:text-start
            xs:items-center xs:text-center"
          >
            <div className="flex flex-col 
              lg:w-1/2 lg:items-start
              xs:w-3/4 xs:items-center">
              <h2 className="font-bold text-white
                lg:text-7xl
                md:text-5xl
                xs:text-3xl
              ">
                { slide.title }
              </h2>
              <p className="mt-2 text-gray-200
                sm:block sm:text-xl
                hidden
              ">
                { slide.description }
              </p>
              <Button onClick={() => router.push(slide.link)} additionalClasses={`
                mt-6 border-3 primary-button
                transition-colors duration-900 ease-in-out
                md:text-2xl
                !px-12 !py-2
              `}>
              { slide.buttonText }
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Left */}
      <button
        onClick={prevSlide}
        className="xs:opacity-0 sm:opacity-100 absolute left-0 md:px-8 h-full top-1/2 -translate-y-1/2 transition-shadow duration-300 ease-in-out hover:shadow-[inset_1em_0_1em_0em_rgba(255,255,255,0.1)] text-white z-1"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Right */}
      <button
        onClick={nextSlide}
        className="xs:opacity-0 sm:opacity-100 absolute right-0 md:px-8 h-full top-1/2 -translate-y-1/2 transition-shadow duration-300 ease-in-out hover:shadow-[inset_-1em_0_1em_0em_rgba(255,255,255,0.1)] text-white z-1"
      >
        <ChevronRight size={48} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
