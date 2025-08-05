// src/app/page.js
"use client"; 

import React from 'react';
import Image from 'next/image'

export default function Home() {

  return (
    <main className="min-h-screen flex items-center justify-center flex-col bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-4">Bienvenidos a Fundación Seyva</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Sitio en construcción. Aquí encontrarás próximamente información sobre nuestros proyectos, misión y formas de participar.
      </p>
      <Image alt='seyva-logo'src='/imagotipo.svg' width={250} height={250} />
    </main>
  );
}
