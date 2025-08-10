import SlideHeader from '@/components/SlideHeader'
import { headerWords } from '@/util/constants';

export default {
  title: 'Compound/SlideHeader',
  component: SlideHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export const Main = {
  args: {
    words: headerWords
  }
};
