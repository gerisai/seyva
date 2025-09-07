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
      <div className="flex flex-col items-start gap-6
        xl:py-26 xl:px-26
        lg:py-20 lg:px-16
        md:py-18 md:px-12
        sm:py-16 sm:px-10
        xs:py-14 xs:px-4
        ">
        <SlideHeader words={headerWords} />
        <p className="w-3/4 text-xl">
          En la fundación SEYVA tenemos como objetivo contribuir al <strong>bienestar integral </strong>
          de personas y comunidades en situación de vulnerabilidad, brindando 
          apoyo asistencial en salud, alimentación, vivienda, educación, 
          orientación jurídica y desarrollo comunitario.
        </p>
      </div>
      <div className="flex flex-col gap-16 text-center mb-6
        lg:mt-30
        md:mt-24
        sm:mt-18
        xs:mt-12
        ">
        <h1 className="text-gray font-bold 
          lg:text-7xl
          md:text-6xl
          sm:text-5xl
          xs:text-4xl
          "
        >
            Experiencias
        </h1>
        <CardCarousel slides={jumboSlides}/>
        <Statistics/>
      </div>
      <OurPartners/>
      <h1 className="pt-10 text-gray font-bold 
      lg:text-5xl
      xs:text-4xl"
      >Notas destacadas</h1>
      <HorizontalScrollable>
        { highlightedNotes.map((note,index) => (
          <IndividualCard key={index} {...note} />
        ))}
      </HorizontalScrollable>
    </main>
  );
}
