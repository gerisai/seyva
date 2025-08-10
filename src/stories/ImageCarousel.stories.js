import ImageCarousel from '@/components/ImageCarousel'
import { imageSlides } from '@/util/constants'

export default {
  title: 'Compound/ImageCarousel',
  component: ImageCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export const Main = {
  args: {
    slides: imageSlides
  }
};
