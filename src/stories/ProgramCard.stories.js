import ProgramCard from "@/components/ProgramCard";
import { baseAssetsUrl } from '@/util/constants';
import { fn } from 'storybook/test'

export default {
  title: 'Components/ProgramCard',
  component: ProgramCard,
  parameters: {
    layout: 'centered',
  },
    args: { buttonClick: fn() },
    tags: ['autodocs'],
};

export const VidaSanaCard = {
  args: {
    image: `${baseAssetsUrl}/vida-sana.png`, 
    title: 'Programa "Vida Sana"',
    description: "Objetivo: Brindar atención médica integral y gratuita a personas con enfermedades crónicas en comunidades vulnerables.",
    lineClasses: 'bg-green', 
    buttonText: 'Leer más',
    buttonClasses: 'bg-green w-[132px] h-[52px] rounded-[26px] flex items-center justify-center'
  },
};

export const PuertasAbiertasCard = {
  args: {
    image: `${baseAssetsUrl}/puertas-abiertas.png`, 
    title: 'Programa "Puertas Abiertas"',
    description: "Garantizar el acceso a la educación secundaria y superior para jóvenes en situación de pobreza.",
    lineClasses: 'bg-orange', 
    buttonText: 'Leer más',
    buttonClasses: 'bg-orange w-[132px] h-[52px] rounded-[26px] flex items-center justify-center'
  },
};

export const TechoFirmeCard = {
  args: {
    image: `${baseAssetsUrl}/techo-firme.png`, 
    title: 'Programa "Techo Firme"',
    description: "Mejorar las condiciones de vivienda de familias en zonas marginadas.",
    lineClasses: 'bg-purple', 
    buttonText: 'Leer más',
    buttonClasses: 'bg-purple w-[132px] h-[52px] rounded-[26px] flex items-center justify-center'
  },
};

export const MesaLlenaCard = {
  args: {
    image: `${baseAssetsUrl}/mesa-llena.png`, 
    title: 'Programa "Mesa Llena"',
    description: "Combatir la desnutrición infantil y la inseguridad alimentaria en comunidades rurales.",
    lineClasses: 'bg-pink', 
    buttonText: 'Leer más',
    buttonClasses: 'bg-pink w-[132px] h-[52px] rounded-[26px] flex items-center justify-center'
  },
};