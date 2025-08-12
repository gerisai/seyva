export default function Statistics({ helped = 2759 }) {

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold text-blue counter">+</h1>
      <h1 className="text-5xl font-bold text-gray-700">Beneficiados</h1>

      <style jsx>{`
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
