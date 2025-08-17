"use client";
import ImageCarousel from "@/components/ImageCarousel";
import { imageSlides } from "@/util/constants";

export default function Home() {

  return (
    <main className="max-h-screen flex items-center justify-center flex-col bg-white text-black">
      <ImageCarousel slides={imageSlides}/>
    </main>
  );
}
