import HorizontalCard from '@/components/HorizontalCard';
import { baseAssetsUrl } from '@/util/constants';

export default {
  title: 'Components/HorizontalCard',
  component: HorizontalCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Salud = {
  args: {
    image: `${baseAssetsUrl}/vida-sana.png`,
    title: 'Salud',
    description: 'Todas y todos merecemos la oportunidad de los servicios básicos para llevar una calidad de vida digna.',
    colorClass: 'text-green',
    reverseLayout: false,
  },
};

export const Educacion = {
  args: {
    image: `${baseAssetsUrl}/concurso-dibujo.png`,
    title: 'Educación',
    description: 'El talento que tienen los niños y jóvenes de nuestro país es herencia de un pueblo brillante y con creatividad.',
    colorClass: 'text-orange',
    reverseLayout: true,
  },
};

export const Vivienda = {
  args: {
    image: `${baseAssetsUrl}/techo-firme.png`,
    title: 'Vivienda',
    description: 'Un techo en donde alimentarse, estudiar y como espacio de recreación.',
    colorClass: 'text-purple',
    reverseLayout: false,
  },
};

export const Alimentacion = {
  args: {
    image: `${baseAssetsUrl}/mesa-llena.png`,
    title: 'Alimentación',
    description: 'Un trozo de pan puede alimentar a un futuro artista sin saberlo.',
    colorClass: 'text-pink',
    reverseLayout: true,
  },
};
