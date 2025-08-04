import IndividualCard from "@/components/IndividualCard";
import { baseAssetsUrl } from '@/util/constants';

export default {
  title: 'Components/IndividualCard',
  component: IndividualCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const ConcursoDibujoCard = {
  args: {
    image: `${baseAssetsUrl}/concurso-dibujo.png`, 
    title: 'Participa en el concurso de dibujo del 2025',
    date: '29 de Octubre, 2025',
    lineClasses: 'bg-orange', 
    buttonText: 'Leer más',
  },
};

export const ViveresGuerreroCard = {
  args: {
    image: `${baseAssetsUrl}/entrega-de-viveres.png`, 
    title: 'Entrega de víveres a mas de 20 familias en Guerrero',
    date: '29 de Octubre, 2025',
    lineClasses: 'bg-pink', 
    buttonText: 'Leer más',
  },
};

export const ProgramaCard = {
  args: {
    image: `${baseAssetsUrl}/programa-mi-hogar.png`, 
    title: 'Programa: Mi hogar, seguro es primero',
    date: '29 de Octubre, 2025',
    lineClasses: 'bg-purple', 
    buttonText: 'Leer más',
  },
};

export const ReunionAnualCard= {
  args: {
    image: `${baseAssetsUrl}/reunion-anual.png`, 
    title: '¡Primera reunión anual de nuestra fundación!',
    date: '29 de Octubre, 2025',
    lineClasses: 'bg-blue', 
    buttonText: 'Leer más',
  },
};
