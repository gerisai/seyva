import { fn } from 'storybook/test';

import Button from '../components/Button.jsx';

export default {
  title: 'Base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: "Press me"
  },
};

export const Disabed = {
  args: {
    variant: 'primary',
    children: "Press me",
    disabled: true
  },
};
