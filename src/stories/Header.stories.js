import Header from '@/components/Header.jsx'

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
    links: [
      { text: 'Inicio', href: '#' },
      { text: 'Experiencias', href: '#' },
      { text: 'Conócenos', href: '#' }
    ],
  },
};
