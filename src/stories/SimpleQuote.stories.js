import SimpleQuote from "@/components/SimpleQuote";

export default {
  title: 'Components/SimpleQuote',
  component: SimpleQuote,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

const quoteContent = (
  <>
    “El que tiene salud, tiene esperanza; y<br />
    el que tiene esperanza, lo tiene todo.”
  </>
);
const authorName = "-Proverbio árabe";

export const Green = {
  args: {
    quote: quoteContent,
    author: authorName,
    colorClass: "text-green",
  }
};

export const Pink = {
  args: {
    quote: quoteContent,
    author: authorName,
    colorClass: "text-pink",
  }
};

export const Purple = {
  args: {
    quote: quoteContent,
    author: authorName,
    colorClass: "text-purple",
  }
};

export const Orange = {
  args: {
    quote: quoteContent,
    author: authorName,
    colorClass: "text-orange",
  }
};
