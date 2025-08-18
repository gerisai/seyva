import PublicFileCard from '@/components/PublicFileCard';
import { educationItems, healthItems, foodItems, housingItems } from '@/util/constants';

export default {
  title: 'Components/PublicFileCard',
  component: PublicFileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export const EducationCard = {
  args:{
    title:'Educación',
    icon:"/white_health.svg",
    items: educationItems,
    color:'orange',
  },
};

export const HealthCard = {
  args: {
    title: 'Salud',
    icon: '/white_health.svg',
    items: healthItems,
    color: 'green',
  },
};

export const FoodCard = {
  args:{
    title:'Alimentación',
    icon:"/white_health.svg",
    items:foodItems,
    color:'pink',
  },
};

export const HousingCard = {
  args: {
    title: 'Vivienda',
    icon: "/white_health.svg",
    items: housingItems,
    color: 'purple',
  },
};
