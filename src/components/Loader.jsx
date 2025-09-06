import Image from "next/image"

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100">
      <Image
        className="animate-rotate"
        src='/logo.svg'
        alt="SEyVA Logo"
        width={150}
        height={150}
      />

<style>{`
        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        .animate-rotate {
          animation: rotation 1s ease-in-out infinite reverse;
        }
      `}</style>
    </div>
  )
}
