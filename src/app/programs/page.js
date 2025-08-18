import Image from "next/image"
import ProgramCard from "@/components/ProgramCard"
import { baseAssetsUrl, programs } from "@/util/constants"

export default function Home() {
  return (
    <main className="flex flex-col bg-gray text-black">
      <div className="absolute right-1/6 top-1/4 h-full">
        <div className="absolute right-0 top-0 w-7 h-44 rounded-full bg-pink"></div>
        <div className="absolute left-15 top-36 w-7 h-44 rounded-full bg-purple"></div>
        <div className="absolute right-10 top-72 w-7 h-44 rounded-full bg-orange"></div>
        <div className="absolute left-5 top-108 w-7 h-44 rounded-full bg-green"></div>
      </div>
      <div className="flex flex-col w-3/4 gap-16 py-10 px-26">
        <div className="relative flex flex-col bg-green w-full h-64">
          <Image alt='seyva-logo'src={`${baseAssetsUrl}/our-programs.png`} fill />
        </div>
        <h1 className="text-7xl font-bold text-gray">Nuestros programas</h1>
        <p className="text-xl">
          En nuestra fundación trabajamos cada día para transformar realidades.
          Nuestros programas están diseñados para atender las necesidades más urgentes de las comunidades que acompañamos, 
          con enfoque en salud, educación, vivienda y alimentación. Cada programa nace del contacto directo con las personas, 
          de escuchar sus historias y entender sus retos.
          <br/>
          <br/>
          No creemos en soluciones genéricas, sino en apoyos que verdaderamente cambien vidas. 
          A través de estas iniciativas, buscamos no solo brindar ayuda inmediata, sino también construir bases firmes para un futuro más digno y justo.
          <br/>
          <br/>
          Conoce cada uno de nuestros programas, su impacto y cómo puedes ser parte del cambio.
        </p>
      </div>
      <div className="flex gap-16 py-12 px-12">
        { programs.map((program,index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </main>
  )
}
