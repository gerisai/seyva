import JumboCard from "./JumboCard"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function CardCarousel({ slides }) {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slides.length;

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  const getPosition = (index) => { // Not sure why I wasted time parameterizing this if anyway will only support a 5-element carousel with this logic XD
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return { scale: 1, translate: 0, zIndex: 30 }; // Active
    if (diff === 1 || diff === total - 1) return { scale: 0.85, translate: diff === 1 ? 20 : -20, zIndex: 20 }; // n +- 1
    if (diff === 2 || diff === total - 2) return { scale: 0.7, translate: diff === 2 ? 40 : -40, zIndex: 10 }; // n +- 2
    return { scale: 0, translate: 0, zIndex: 0 }; // not visible at all
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-max h-160 overflow-visible">
      { slides.map((slide,index) => {
        const { scale, translate, zIndex } = getPosition(index);
        return (
          <div
          key={index}
          className={`
            absolute top-0 w-4xl left-1/2 transform -translate-x-1/2 h-160 rounded-4xl shadow-lg transition-all duration-500 ease-in-out
            ${ index === activeIndex ? '' : slide.cardClasses }
            `
          }
          style={{
            transform: `translateX(${translate}%) scale(${scale})`,
            zIndex,
            opacity: scale > 0 ? 1 : 0
          }}
          >
            { index === activeIndex ? <JumboCard {...slide} buttonClick={() => router.push(`${slide.name !== 'acopio' ? `/stories/${slide.name}` : '/join'}`)}/> : '' }
          </div>
        );
      })}
      </div>

      {/* Controls */}
      <div className="mt-12 flex gap-6">
        <button
          onClick={prevSlide}
          className="text-gray-400"
        >
          <ArrowLeft size={32} />
        </button>
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-blue" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="text-gray-400"
        >
          <ArrowRight size={32} />
        </button>
      </div>
    </div>
  )
}

