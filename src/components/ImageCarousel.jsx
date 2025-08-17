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
    <div className="w-full h-114 relative">
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
          <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-center">
            <div className="absolute left-1/10 text-left">
              <h2 className="text-7xl font-bold text-white w-1/3">
                { slide.title }
              </h2>
              <p className="text-xl mt-2 mb-6 text-gray-200 w-1/2">
                { slide.description }
              </p>
              <Button onClick={() => router.push(slide.link)} additionalClasses={`
                border-3 primary-button
                transition-colors duration-900 ease-in-out
                !text-2xl
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
        className="absolute left-0 px-8 h-full top-1/2 -translate-y-1/2 transition-shadow duration-300 ease-in-out hover:shadow-[inset_1em_0_1em_0em_rgba(255,255,255,0.1)] text-white z-1"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Right */}
      <button
        onClick={nextSlide}
        className="absolute right-0 px-8 h-full top-1/2 -translate-y-1/2 transition-shadow duration-300 ease-in-out hover:shadow-[inset_-1em_0_1em_0em_rgba(255,255,255,0.1)] text-white z-1"
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
