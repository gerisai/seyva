import Image from "next/image"
import HorizontalCard from "@/components/HorizontalCard"
import Paragraph from "@/components/Paragraph"
import Quote from "@/components/Quote"
import ProgramCard from "@/components/ProgramCard"
import { horizontalCards, programs, quotes } from "@/util/constants"

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col bg-gray text-black">
      <div className="flex flex-col gap-16 items-center py-16">
        <Image alt='seyva-logo'src='/vertical-imagotipo.svg' width={250} height={250} />
        <h1 className="text-3xl">Este es el comienzo de un legado que cambiara vidas</h1>
        <h1 className="text-5xl font-bold text-gray">¿Que abarca la Fundación SEYVA?</h1>
        <div className="flex flex-col w-3/4 gap-12">
        { horizontalCards.map((card,index) => (
          <HorizontalCard key={index} {...card}/>
        ))}
        </div>
        <Paragraph title="Misión">
          <p className="text-xl text-gray-800">
          Contribuir al bienestar <strong>integral de personas y comunidades en situación de vulnerabilidad</strong>,
          brindando apoyo asistencial en salud, alimentación, vivienda, educación, orientación jurídica
          y desarrollo comunitario, con especial énfasis en los <strong>pueblos indígenas, afromexicanos 
          y grupos históricamente marginados</strong>, a través de acciones humanitarias dignas, inclusivas y sostenibles.
          </p>
        </Paragraph>
        <Paragraph title="Visión">
          <p className="text-xl text-gray-800">
          Ser una fundación referente a nivel nacional por su <strong>compromiso social</strong>, impacto tangible y cercanía 
          con las comunidades que más lo necesitan, generando <strong>esperanza, equidad y desarrollo</strong> en cada intervención, 
          con un enfoque incluyente y culturalmente sensible.
          </p>
        </Paragraph>
        <Paragraph title="Objetivo">
          <p className="text-xl text-gray-800">
          Implementar y <strong>fortalecer programas asistenciales</strong> que atiendan necesidades básicas de subsistencia, 
          salud, educación, trabajo, justicia y desarrollo comunitario, promoviendo la dignidad humana, 
          <strong>la inclusión social y la mejora</strong> continua de la calidad de vida de los sectores más desfavorecidos.
          </p>
        </Paragraph>
        <Quote {...quotes['nelsonMandela']}/>
        <h1 className="text-5xl font-bold text-gray">Nuestros programas</h1>
        <div className="flex gap-16 py-12 px-12">
        { programs.map((program,index) => (
          <ProgramCard key={index} {...program} />
        ))}
        </div>
      </div>
    </main>
  )
}
