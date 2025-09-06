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
    <div className="w-full relative flex justify-center gap-16 py-12">
      <button
        onClick={() => scroll("left")}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-2 hover:scale-130 transition"
      >
        <ChevronLeft className="w-12 h-12 text-gray-400" />
      </button>

      <div
        ref={containerRef}
        className="w-3/4 flex overflow-x-auto no-scrollbar scroll-smooth gap-30"
      >
        {children}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 hover:scale-130 transition"
      >
        <ChevronRight className="w-12 h-12 text-gray-400" />
      </button>
    </div>
  );
};
