import DonationForm from '@/components/DonationForm';
import { donationFormFields } from '@/util/constants'

export default {
  title: 'Compound/DonationForm',
  component: DonationForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export const Main = {
  args: {
    fields: donationFormFields
  }
};
