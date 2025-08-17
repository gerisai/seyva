import Image from "next/image"

const ribbon = [
  { name: 'Salud', image: '/health.svg', color: 'green'},
  { name: 'Educación', image: '/education.svg', color: 'orange'},
  { name: 'Vivienda', image: '/house.svg', color: 'purple'},
  { name: 'Alimentación', image: '/feed.svg', color: 'pink'}
]

export default function LogoRibbon() {
  return (
    <div className="w-full flex">
      { ribbon.map((block,index) => (
        <div key={index} className="w-1/4 overflow-hidden">
          <div className={`h-6 bg-${block.color} ${ block.name === 'Salud' ? 'mb-6' : 'mb-4' }`}/>
          <div className="animate-showfrombutton">
            <Image
              className="pt-6 px-8 mx-auto"
              src={block.image}
              alt={block.name}
              width={220}
              height={220}
            />
            <h1 className="mt-6 text-4xl text-center font-bold text-gray-800">{block.name}</h1>
          </div>
        </div>
      ))}
    <style>{`
    @keyframes showFromButton {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .animate-showfrombutton {
      animation: showFromButton 3s ease-in-out;
    }
    `}</style>
    </div>

  )
}
