import Image from "next/image"

export default function Home() {
  return (
    <main className="h-lvh flex items-center justify-center flex-col bg-gray text-black">
      <h1 className="text-4xl font-bold mb-4">Bienvenidos a Fundación Seyva</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Pagina en construcción. Aquí encontrarás próximamente información sobre nuestros proyectos, misión y formas de participar.
      </p>
      <Image alt='seyva-logo'src='/imagotipo.svg' width={250} height={250} />
    </main>
  )
}
