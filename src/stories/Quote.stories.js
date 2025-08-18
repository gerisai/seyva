import Quote from "@/components/Quote";

export default {
  title: 'Components/Quote',
  component: Quote,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export const Main = {
  args: {
    quote:(
        <>
        La superación de la pobreza no es un<br />
        gesto de caridad, es un acto de justicia.
        </>
    ),
    author:"Nelson Mandela"
  }
};
