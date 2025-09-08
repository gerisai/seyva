"use client"

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalScrollable ({ children, classes }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      containerRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full relative flex justify-center 
      2xl:py-12
      xl:py-12
      lg:py-10
      xs:py-8
    ">
      <button
        onClick={() => scroll("left")}
        className="absolute md:left-6 xs:left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:scale-130 transition"
      >
        <ChevronLeft className="w-12 h-12 text-gray-400" />
      </button>

      <div
        ref={containerRef}
        className="w-3/4 flex overflow-x-auto no-scrollbar scroll-smooth
        2xl:gap-30
        xl:gap-26
        lg:gap-20
        md:gap-14
        sm:gap-12
        xs:gap-10
        "
      >
        {children}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute md:right-6 xs:right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 hover:scale-130 transition"
      >
        <ChevronRight className="w-12 h-12 text-gray-400" />
      </button>
    </div>
  );
};
