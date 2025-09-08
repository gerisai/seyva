import Image from "next/image"
import ProgramCard from "@/components/ProgramCard"
import HorizontalScrollable from "@/components/HorizontalScrollable"
import { baseAssetsUrl, programs } from "@/util/constants"

export const metadata = {
  title: "Programas"
};


export default function Home() {
  return (
    <main className="flex flex-col bg-gray text-black">
      <div className="relative flex w-full
      ">
        <div className="absolute
          right-1/10 top-10
        ">
          <div className="absolute rounded-full bg-pink
            lg:right-0 lg:top-0 lg:w-7 lg:h-44
            md:right-0 md:top-0 md:top-0 md:w-5 md:h-34
            xs:right-0 xs:top-0 xs:top-0 xs:w-3 xs:h-24
          "/>
          <div className="absolute rounded-full bg-purple
            lg:left-15 lg:top-36 lg:w-7 lg:h-44
            md:left-10 md:top-26 md:w-5 md:h-34
            xs:left-4 xs:top-26 xs:w-3 xs:h-24
          "/>
          <div className="absolute rounded-full bg-orange
            lg:right-10 lg:top-72 lg:w-7 lg:h-44
            md:right-6 md:top-52 md:w-5 md:h-34
            xs:right-4 xs:top-42 xs:w-3 xs:h-24
          "/>
          <div className="absolute rounded-full bg-green
            lg:left-5 lg:top-108 lg:w-7 lg:h-44
            md:left-3 md:top-78 md:w-5 md:h-34
            xs:left-3 xs:top-68 xs:w-3 xs:h-24
          "/>
        </div>
        <div className="flex flex-col py-10 w-3/4
          xl:px-26 xl:gap-12
          lg:pl-22 lg:gap-10
          md:pl-18 md:gap-8
          xs:pl-10 xs:gap-6
        ">
          <div className="relative flex flex-col xl:h-64 lg:h-54 hidden lg:block">
            <Image alt='seyva-logo'src={`${baseAssetsUrl}/our-programs.png`} fill />
          </div>
          <h1 className="font-bold text-gray
            xl:text-7xl
            md:text-6xl
            xs:text-4xl
          ">
            Nuestros programas
          </h1>
          <p className="sm:text-xl xs:text-justify">
            En nuestra fundación trabajamos cada día para transformar realidades.
            Nuestros programas están diseñados para atender las necesidades más urgentes de las comunidades que acompañamos, 
            con enfoque en salud, educación, vivienda y alimentación. Cada programa nace del contacto directo con las personas, 
            de escuchar sus historias y entender sus retos.
          </p>
          <p className="hidden md:block text-xl">
            No creemos en soluciones genéricas, sino en apoyos que verdaderamente cambien vidas. 
            A través de estas iniciativas, buscamos no solo brindar ayuda inmediata, sino también construir bases firmes para un futuro más digno y justo.
          </p>
          <p className="hidden md:block text-xl">
            Conoce cada uno de nuestros programas, su impacto y cómo puedes ser parte del cambio.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
      { programs.map((program,index) => (
        <ProgramCard key={index} {...program} inline={false} />
      ))}
      </div>
    </main>
  )
}
