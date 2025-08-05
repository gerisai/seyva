import StoryCard from "@/components/StoryCard";
import { baseAssetsUrl } from '@/util/constants';
import { fn } from 'storybook/test'

export default {
      title: 'Components/StoryCard',
      component: StoryCard,
      parameters: {
        layout: 'centered',
      },
      args: { buttonClick: fn() },
      tags: ['autodocs']
}

export const StoryAlivioAlAlmaCard = {
    args: {
    image: `${baseAssetsUrl}/story-green.png`,
    header: "Alivio al Alma",
    date: "Ciudad de México a 25 de marzo de 2025.",
    caseTitle:"Historia del Caso",
    caseDescription:"Adolfo es un joven Ingeniero Civil del Instituto Politécnico Nacional, el cual presenta el crecimiento de un abseso de grasa en el pectoral izquierdo asi como el crecimiento de dos absesos en la parte dorsal de su espalda, el cual ha ido creciendo y con ello sus complicaciones.",
    supportDetails: (
    <>
      <div className="mb-4">
        <p className="text-green font-semibold text-4xl mb-2">Solicitud</p>
        <p className="text-black font-normal text-xl">Obtener apoyo para la cirugía para la remover los lipomas</p>
      </div>
      <div className="mb-4">
        <p className="text-green font-semibold text-4xl mb-2">Cotización Quirurjica</p>
        <p className="text-black font-normal text-xl">La cotización quedo a cargo de la Medica Ginecoobstreticia</p>
      </div>
      <div className="mb-4">
        <p className="text-green font-semibold text-4xl mb-2">Pago de la Operación</p>
        <p className="text-black font-normal text-xl">Se liquidó en una sola exhibición</p>
      </div>
      <div className="mt-10">
        <p className="text-green font-extrabold text-7xl mb-2">$48,000 MXN</p>
        <p className="text-black font-normal text-xl">Suma total del apoyo</p>
      </div>
    </>
),
    buttonText: 'Conoce todo el caso',
    themeColorClass: 'bg-green',
    cardClasses: 'bg-white',
    buttonClasses: 'bg-green'
    }
};

export const StorySuenosQueEstudianCard = {
    args: {
    image: `${baseAssetsUrl}/story-orange.png`,
    header: "Sueños que estudian",
    date: "Ciudad de México a 25 de marzo de 2025.",
    caseTitle:"Historia del Caso",
    caseDescription:"Adolfo es un joven Ingeniero Civil del Instituto Politécnico Nacional, el cual presenta el crecimiento de un abseso de grasa en el pectoral izquierdo asi como el crecimiento de dos absesos en la parte dorsal de su espalda, el cual ha ido creciendo y con ello sus complicaciones.",
    supportDetails: (
    <>
      <div className="mb-4">
        <p className="text-orange font-semibold text-4xl  mb-2">Solicitud</p>
        <p className="text-black font-normal text-xl ">Obtener apoyo para la cirugía para la remover los lipomas</p>
      </div>
      <div className="mb-4">
        <p className="text-orange font-semibold text-4xl mb-2">Cotización Quirurjica</p>
        <p className="text-black font-normal text-xl">La cotización quedo a cargo de la Medica Ginecoobstreticia</p>
      </div>
      <div className="mb-4">
        <p className="text-orange font-semibold text-4xl mb-2">Pago de la Operación</p>
        <p className="text-black font-normal text-xl">Se liquidó en una sola exhibición</p>
      </div>
      <div className="mt-10">
        <p className="text-orange font-extrabold text-7xl mb-2">$48,000 MXN</p>
        <p className="text-black font-normal text-xl">Suma total del apoyo</p>
      </div>
    </>
),
    buttonText: 'Conoce todo el caso',
    themeColorClass: 'bg-orange',
    cardClasses: 'bg-white',
    buttonClasses: 'bg-orange'
    }
};

export const StoryUntechoConEsperanzaCard = {
    args: {
    image: `${baseAssetsUrl}/story-purple.png`,
    header: "Un techo con Esperanza",
    date: "Ciudad de México a 25 de marzo de 2025.",
    caseTitle:"Historia del Caso",
    caseDescription:"Adolfo es un joven Ingeniero Civil del Instituto Politécnico Nacional, el cual presenta el crecimiento de un abseso de grasa en el pectoral izquierdo asi como el crecimiento de dos absesos en la parte dorsal de su espalda, el cual ha ido creciendo y con ello sus complicaciones.",
    supportDetails: (
    <>
      <div className="mb-10">
        <p className="text-purple font-semibold text-4xl mb-2">Solicitud</p>
        <p className="text-black font-normal text-xl ">Obtener apoyo para la cirugía para la remover los lipomas</p>
      </div>
      <div className="mb-10">
        <p className="text-purple font-semibold text-4xl mb-2">Renovación de espacios en la vivienda</p>
        <p className="text-black font-normal text-xl ">Se realizaron trabajos de obra en el hogar, en techo y piso.</p>
      </div>
      <div className="px-10">
        <p className="text-purple font-semibold text-4xl mb-8">Testimonio</p>
        <p className="text-black font-normal text-xl text-center">
          &quot;Antes, cuando llovía, teníamos que poner cubetas por todo el cuarto. El techo<br />
          se estaba cayendo, y el piso era pura tierra. Mis hijos se enfermaban seguido por<br />
          la humedad. Ahora gracias al apoyo de la fundación, tenemos un techo seguro <br />
          y un piso firme. Ya no tenemos miedo cuando llueve. Dormimos tranquilos.<br />
          Nos devolvieron la paz en nuestra casa&quot;
        </p>
      </div>
      </>
),
    buttonText: 'Conoce todo el caso',
    themeColorClass: 'bg-purple',
    cardClasses: 'bg-white',
    buttonClasses: 'bg-purple'
    }
};

export const StoryPanParaHoyYMananaCard = {
    args: {
    image: `${baseAssetsUrl}/story-pink.png`,
    header: "Pan para Hoy y Mañana",
    date: "Ciudad de México a 25 de marzo de 2025.",
    caseTitle:"Historia del Caso",
    caseDescription:"Adolfo es un joven Ingeniero Civil del Instituto Politécnico Nacional, el cual presenta el crecimiento de un abseso de grasa en el pectoral izquierdo asi como el crecimiento de dos absesos en la parte dorsal de su espalda, el cual ha ido creciendo y con ello sus complicaciones.",
    supportDetails: (
    <>
      <div className="mb-4">
        <p className="text-pink font-semibold text-4xl mb-2">Solicitud</p>
        <p className="text-black font-normal text-xl ">Obtener apoyo para la cirugía para la remover los lipomas</p>
      </div>
      <div className="mb-4">
        <p className="text-pink font-semibold text-4xl mb-2">Cotización Quirurjica</p>
        <p className="text-black font-normal text-xl ">La cotización quedo a cargo de la Medica Ginecoobstreticia</p>
      </div>
      <div className="mb-4">
        <p className="text-pink font-semibold text-4xl mb-2">Pago de la Operación</p>
        <p className="text-black font-normal text-xl ">Se liquidó en una sola exhibición</p>
      </div>
      <div className="mt-10">
        <p className="text-pink font-extrabold text-7xl mb-2">$48,000 MXN</p>
        <p className="text-black font-normal text-xl ">Suma total del apoyo</p>
      </div>
    </>
),
    buttonText: 'Conoce todo el caso',
    themeColorClass: 'bg-pink',
    cardClasses: 'bg-white',
    buttonClasses: 'bg-pink'
    }
};
