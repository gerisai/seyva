import Header from '@/components/Header.jsx'
import { headerLinks } from '@/util/constants';

export default {
  title: 'Compound/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export const Main = {
  args: {
    links: headerLinks,
  },
};
