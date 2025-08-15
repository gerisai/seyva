import CardCarousel from '@/components/CardCarousel'
import { jumboSlides } from '@/util/constants'

export default {
  title: 'Compound/CardCarousel',
  component: CardCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export const Main = {
  args: {
    slides: jumboSlides
  }
};
