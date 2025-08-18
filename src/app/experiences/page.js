"use client";
import CardCarousel from "@/components/CardCarousel";
import { jumboSlides} from "@/util/constants";
import PublicFileCard from "@/components/PublicFileCard";
import ProgramCard from "@/components/ProgramCard";
import { publicFileCards } from '@/util/constants';
import Quote from '@/components/Quote';
import { programs, quotes } from "@/util/constants"; 

export default function Home() {

  return (
    <main className="bg-gray pt-10">
      <div className="flex flex-col gap-12">
      <h1 className="text-gray text-center font-bold text-7xl">Historias destacadas</h1>
      <CardCarousel slides={jumboSlides}/>
      </div>
      <div>
      <h1 className="pt-30 text-gray text-center font-bold text-7xl">Nuestros Programas</h1>
      <div className="flex gap-16 py-12 px-12">
        { programs.map((program,index) => (
          <ProgramCard key={index} {...program} />
        ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
      <h1 className="pt-30 text-gray text-center font-bold text-7xl">Archivo Publico</h1>
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
