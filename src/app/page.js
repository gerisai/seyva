// src/app/page.js
"use client"; 

import React from 'react';
import Button from '../components/Button.jsx'; 

export default function Home() {
  const handleClick = (buttonName) => {
    alert(`¡Has clicado en el botón: ${buttonName}!`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center flex-col bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-4">Bienvenidos a Fundación Seyva</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Sitio en construcción. Aquí encontrarás próximamente información sobre nuestros proyectos, misión y formas de participar.
      </p>

      {/* Container for buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        {/* First button: Súmate (primary) */}
        <Button variant="primary" onClick={() => handleClick('Súmate')}>
          Súmate
        </Button>

        {/* Second button: Súmate (secondary) */}
        <Button variant="secondary" onClick={() => handleClick('Súmate')}>
          Súmate
        </Button>

        {/* Third button: Conoce más (primary) */}
        <Button variant="primary" onClick={() => handleClick('Conoce más')}>
          Conoce más
        </Button>

        {/* four bottom: Conoce más (secondary) */}
        <Button variant="secondary" onClick={() => handleClick('Conoce más')}>
          Conoce más
        </Button>
      </div>
    </main>
  );
}
