// src/app/page.js
import HomePageButtons from '../components/HomePageButtons'; 

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-4">Bienvenidos a Fundación Seyva</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Sitio en construcción. Aquí encontrarás próximamente información sobre nuestros proyectos, misión y formas de participar.
      </p>

      {/* Renderizamos el Componente de Cliente que contiene tus botones interactivos */}
      <HomePageButtons />
    </main>
  );
}

