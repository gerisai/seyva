import { fn } from 'storybook/test'
import JumboCard from '@/components/JumboCard';
import { baseAssetsUrl } from '@/util/constants';

export default {
  title: 'Components/JumboCard',
  component: JumboCard,
  parameters: {
    layout: 'centered',
  },
  args: { buttonClick: fn() },
  tags: ['autodocs']
};

export const AlivioAlAlmaCard = {
  args: {
    image: `${baseAssetsUrl}/alivio-al-alma.png`,
    icon: '/white_health.svg',
    title: 'Alivio al Alma',
    description: (
    <div>
      <p className="text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p>
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-green',
    buttonClasses: 'bg-green !text-3xl'
  },
};

export const SuenosQueEstudianCard = {
  args: {
    image: `${baseAssetsUrl}/suenos-que-estudian.png`,
    icon: '/white_education.svg',
    title: 'Sueños que Estudian',
    description: (
    <div>
      <p className="text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p> 
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-orange',
    buttonClasses: 'bg-orange !text-3xl'
  },
};

export const UnTechoConEsperanzaCard = {
  args: {
    image: `${baseAssetsUrl}/un-techo-con-esperanza.png`,
    icon: '/white_house.svg',
    title: 'Un Techo con Esperanza',
    description: (
    <div>
      <p className="text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p> 
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-purple',
    buttonClasses: 'bg-purple !text-3xl'
  },
};

export const PanParaHoyYMañanaCard = {
  args: {
    image: `${baseAssetsUrl}/pan-para-hoy-y-manana.png`,
    icon: '/white_feed.svg',
    title: 'Pan para Hoy y Mañana',
    description: (
    <div>
      <p className="text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p> 
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-pink',
    buttonClasses: 'bg-pink !text-3xl'
  },
};

export const CentroDeAcopioCard = {
  args: {
    image: `${baseAssetsUrl}/acopio.png`,
    icon: '/logo_white.svg',
    title: 'Centro de acopio',
    description: (
    <div>
      <p className="text-3xl font-semibold mb-1">Taxco, Guerrero</p>
      <p className="text-xl leading-relaxed">Estamos organizando un pequeño acopio para recaudar fondos y seguir transformando vidas</p> 
    </div>),
    buttonText: 'Súmate',
    cardClasses: 'bg-blue',
    buttonClasses: 'bg-blue border-3 primary-button transition-colors duration-900 ease-in-out !text-3xl px-10 py-4'
  },
};
