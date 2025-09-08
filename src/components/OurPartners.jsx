"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function OurPartners() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div className="w-full flex flex-col items-center xl:py-8 lg:py-6 md:py-4 sm:py-2 xs:py-0">
      <div className="w-full bg-light-gray py-4 text-center">
        <h2 className="font-bold text-gray
        lg:text-5xl
        xs:text-4xl
        ">
          Nuestros socios
        </h2>
      </div>
      <div className={`transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} w-full 
        xl:h-90
        lg:h-80
        md:h-70
        sm:h-50
        xs:h-40
      `}>
          <Image
          src="/SEYVA_PARTNERS_TEST.svg"
          alt="Nuestros socios"
          fill
          className="xl:mt-10 lg:mt-8 md:mt-6 sm:mt-4 xs:mt-2"
        />
      </div>
    </div>
  );
}
