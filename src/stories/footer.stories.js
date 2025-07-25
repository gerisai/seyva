import Footer from '../../src/components/Footer';
import '/src/app/globals.css';

export default {
  title: 'Compound/Footer', 
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'footer_blue', 
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#333333' },
        { name: 'footer_blue', value: 'var(--color-brand-primary-blue)'}, 
      ],
    },
  },
  tags: ['autodocs'], 
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {}; 