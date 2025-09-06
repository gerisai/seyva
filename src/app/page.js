"use client";
import ImageCarousel from "@/components/ImageCarousel";
import LogoRibbon from "@/components/LogoRibbon";
import SlideHeader from "@/components/SlideHeader";
import CardCarousel from "@/components/CardCarousel";
import Statistics from "@/components/Statistics";
import OurPartners from "@/components/OurPartners";
import IndividualCard from "@/components/IndividualCard";
import HorizontalScrollable from "@/components/HorizontalScrollable";
import { imageSlides, headerWords, jumboSlides, highlightedNotes } from "@/util/constants";

export default function Home() {

  return (
    <main className="h-auto flex items-center justify-center flex-col bg-white text-black">
      <ImageCarousel slides={imageSlides}/>
      <LogoRibbon/>
      <div className="flex flex-col items-start py-26 px-26 gap-6">
        <SlideHeader words={headerWords} />
        <p className="w-3/4 text-xl">
          En la fundación SEYVA tenemos como objetivo contribuir al <strong>bienestar integral </strong>
          de personas y comunidades en situación de vulnerabilidad, brindando 
          apoyo asistencial en salud, alimentación, vivienda, educación, 
          orientación jurídica y desarrollo comunitario.
        </p>
      </div>
      <div className="flex flex-col gap-16 text-center mt-30 mb-6">
        <h1 className="text-gray font-bold text-7xl">Experiencias</h1>
        <CardCarousel slides={jumboSlides}/>
        <Statistics/>
      </div>
      <OurPartners/>
      <h1 className="pt-10 text-gray font-bold text-5xl">Notas destacadas</h1>
      <HorizontalScrollable>
        { highlightedNotes.map((note,index) => (
          <IndividualCard key={index} {...note} />
        ))}
      </HorizontalScrollable>
    </main>
  );
}
