"use client";
import CardCarousel from "@/components/CardCarousel";
import { jumboSlides} from "@/util/constants";
import PublicFileCard from "@/components/PublicFileCard";
import ProgramCard from "@/components/ProgramCard";
import { publicFileCards } from '@/util/constants';
import HorizontalScrollable from "@/components/HorizontalScrollable";
import Quote from '@/components/Quote';
import { programs, quotes } from "@/util/constants"; 

export default function Home() {

  return (
    <main className="bg-gray pt-10">
      <div className="flex flex-col gap-12">
      <h1 className="text-gray text-center font-bold
        lg:text-7xl
        md:text-6xl
        sm:text-5xl
        xs:text-4xl
      ">
        Historias destacadas
      </h1>
      <CardCarousel slides={jumboSlides}/>
      </div>
      <h1 className="pt-30 text-gray text-center font-bold 
        lg:text-7xl
        md:text-6xl
        sm:text-5xl
        xs:text-4xl
      ">
        Nuestros Programas
      </h1>
      <HorizontalScrollable>
        { programs.map((program,index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </HorizontalScrollable>
      <div className="flex flex-col items-center">
      <h1 className="pt-30 text-gray text-center font-bold 
        lg:text-7xl
        md:text-6xl
        sm:text-5xl
        xs:text-4xl
      ">
        Archivo Publico
      </h1>
      <div className="w-3/4 flex flex-wrap justify-center gap-12 mt-12">
      { publicFileCards.map((card,index) => (
        <PublicFileCard key={index} {...card}/>
      ))}
      </div>
      </div>
      <div className="py-20">
      <Quote {...quotes['nelsonMandela']}/>
      </div>
    </main>
  )
}
