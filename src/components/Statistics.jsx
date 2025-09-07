export default function Statistics({ helped = 2759 }) {

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-blue counter leading-none
        xl:text-[12em] lg:text-[10em] md:text-[8em] sm:text-[6em] xs:text-[5em]">+</h1>
      <h1 className="font-bold text-gray-700
        xl:text-6xl
        lg:text-5xl
        md:text-4xl
        sm:text-3xl
        xs:text-2xl
      ">Beneficiados</h1>

      <style>{`
        @property --num {
          syntax: '<integer>';
          initial-value: ${helped};
          inherits: false;
        }

        .counter {
          animation: counter 3s ease-in-out;
          counter-reset: num var(--num);;
          transition: --num 5s ease-in-out;
        }

        .counter::after {
          content: counter(num);
        }

        @keyframes counter {
          from {
            --num: 0;
          }
          to {
            --num: ${helped};
          }
        }
      `}</style>
    </div>
  )
}
