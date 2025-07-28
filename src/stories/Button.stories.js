import { fn } from 'storybook/test'

import Button from '@/components/Button.jsx'

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
    additionalClasses: `
      border-3 primary-button
      transition-colors duration-900 ease-in-out
      !text-2xl
      px-12 py-4
    `,
    children: "Súmate"
  },
};

export const Green = {
  args: {
    additionalClasses: `
      bg-green
      !text-xl
    `,
    children: "Conoce más"
  }
}

export const Pink = {
  args: {
    additionalClasses: `
      bg-pink
      !text-xl
    `,
    children: "Conoce más"
  }
}

export const Purple = {
  args: {
    additionalClasses: `
      bg-purple
      !text-xl
    `,
    children: "Conoce más"
  }
}

export const Orange = {
  args: {
    additionalClasses: `
      bg-orange
      !text-xl
    `,
    children: "Conoce más"
  }
}

export const Disabed = {
  args: {
    variant: 'primary',
    children: "Deshabilitado",
    disabled: true
  },
};
