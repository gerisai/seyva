import Card from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: 'text' },
    iconSrc: { control: 'text' },
    mainText: { control: 'text' },
    secondaryText: { control: 'text' },
    amountText: { control: 'text' },
    descriptionText: { control: 'text' },
    panelColor: { control: 'text' },
    buttonText: { control: 'text' },
  },
};

export const AlivioAlAlmaCard = {
  args: {
    imageSrc: '/',
    iconSrc: '/',
    mainText: 'Alivio al Alma',
    secondaryText: 'Apoyo total',
    amountText: '$48,000 MXN',
    descriptionText: 'Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal.',
    panelColor: 'background-green',
    buttonText: 'Conoce más',
  },
};

export const SueñosQueEstudianCard = {
  args: {
    imageSrc: '/',
    iconSrc: '/',
    mainText: 'Sueños que Estudian',
    secondaryText: 'Apoyo total',
    amountText: '$19,000 MXN',
    descriptionText: 'Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en región dorsal.',
    panelColor: 'background-orange',
    buttonText: 'Conoce más',
  },
};

export const UnTechoConEsperanzaCard = {
  args: {
    imageSrc: '/',
    iconSrc: '/',
    mainText: 'Un Techo con Esperanza',
    secondaryText: 'Apoyo total',
    amountText: '$29,000 MXN',
    descriptionText: 'Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en región dorsal.',
    panelColor: 'background-purple',
    buttonText: 'Conoce más',
  },
};

export const PlanParaHoyYMañanaCard = {
  args: {
    imageSrc: '/',
    iconSrc: '/',
    mainText: 'Plan para Hoy y Mañana',
    secondaryText: 'Apoyo total',
    amountText: '$18,000 MXN',
    descriptionText: 'Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en región dorsal.',
    panelColor: 'background-pink',
    buttonText: 'Conoce más',
  },
};

export const CentroDeAcopioCard = {
  args: {
    imageSrc: '/',
    iconSrc: '/',
    mainText: 'Centro de acopio',
    secondaryText: 'Taxco Guerrero',
    descriptionText: 'Estamos organizando un pequeño acopio para recaudar fondos y seguir transfomrando vidas.',
    panelColor: 'background-blue',
    buttonText: 'Sumate',
  },
};