import Image from "next/image"
import HorizontalCard from "@/components/HorizontalCard"
import Paragraph from "@/components/Paragraph"
import Quote from "@/components/Quote"
import ProgramCard from "@/components/ProgramCard"
import HorizontalScrollable from "@/components/HorizontalScrollable"
import { horizontalCards, programs, quotes } from "@/util/constants"

export const metadata = {
  title: "Conócenos"
};

export default function Home() {
  return (
    <main className="bg-gray text-black">
      <div className="flex flex-col gap-16 items-center py-16">
        <Image alt='seyva-logo'src='/vertical-imagotipo.svg' width={250} height={250} />
        <h1 className="xs:text-2xl sm:text-3xl text-center">
          Este es el comienzo de un legado que cambiara vidas
        </h1>
        <h1 className="xs:text-4xl sm:text-5xl font-bold text-gray xs:text-center">¿Que abarca la Fundación SEYVA?</h1>
        <div className="flex flex-col w-3/4 gap-12">
        { horizontalCards.map((card,index) => (
          <HorizontalCard key={index} {...card}/>
        ))}
        </div>
        <Paragraph title="Misión">
          <p className="text-xl xs:text-center lg:text-start text-gray-800">
          Contribuir al bienestar <strong>integral de personas y comunidades en situación de vulnerabilidad</strong>,
          brindando apoyo asistencial en salud, alimentación, vivienda, educación, orientación jurídica
          y desarrollo comunitario, con especial énfasis en los <strong>pueblos indígenas, afromexicanos 
          y grupos históricamente marginados</strong>, a través de acciones humanitarias dignas, inclusivas y sostenibles.
          </p>
        </Paragraph>
        <Paragraph title="Visión">
          <p className="text-xl xs:text-center lg:text-start text-gray-800">
          Ser una fundación referente a nivel nacional por su <strong>compromiso social</strong>, impacto tangible y cercanía 
          con las comunidades que más lo necesitan, generando <strong>esperanza, equidad y desarrollo</strong> en cada intervención, 
          con un enfoque incluyente y culturalmente sensible.
          </p>
        </Paragraph>
        <Paragraph title="Objetivo">
          <p className="text-xl xs:text-center lg:text-start text-gray-800">
          Implementar y <strong>fortalecer programas asistenciales</strong> que atiendan necesidades básicas de subsistencia, 
          salud, educación, trabajo, justicia y desarrollo comunitario, promoviendo la dignidad humana, 
          <strong>la inclusión social y la mejora</strong> continua de la calidad de vida de los sectores más desfavorecidos.
          </p>
        </Paragraph>
        <Quote {...quotes['nelsonMandela']}/>
      </div>
      <h1 className="font-bold text-gray text-center
        lg:text-7xl
        md:text-6xl
        sm:text-5xl
        xs:text-4xl
      ">
          Nuestros programas
      </h1>
        <HorizontalScrollable>
          { programs.map((program,index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </HorizontalScrollable>
    </main>
  )
}
