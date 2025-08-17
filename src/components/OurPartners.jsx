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
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-full bg-light-gray py-4 text-center">
        <h2 className="font-bold text-5xl text-gray">Nuestros socios</h2>
      </div>
      <div className={`transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} w-full h-90 mt-8`}>
          <Image
          src="/SEYVA_PARTNERS_TEST.svg"
          alt="Nuestros socios"
          fill
          className="mt-10"
        />
      </div>
    </div>
  );
}
