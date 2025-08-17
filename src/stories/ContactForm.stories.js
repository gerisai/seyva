import ContactForm from '@/components/ContactForm';
import { contactFormFields } from '@/util/constants'

export default {
  title: 'Compound/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export const Main = {
  args: {
    fields: contactFormFields
  }
};
