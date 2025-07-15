// src/components/Navbar.js
"use client"; 

import React from 'react';
import Button from './Button'; // Importa tu componente Button (está en la misma carpeta)
import Image from 'next/image'; // Importa Image de Next.js para el logo

export default function Navbar() {
  const handleNavClick = (pageName) => {
    alert(`Navegando a: ${pageName}`);
    // Aquí es donde en una aplicación real usarías el router de Next.js para navegar:
    // import { useRouter } from 'next/navigation';
    // const router = useRouter();
    // router.push(`/${pageName.toLowerCase().replace(' ', '-')}`); // Ejemplo de navegación
  };

  return (
    <header className="w-full flex justify-between items-center p-4 bg-white shadow-md">
      {/* Sección del Logo */}
      <div className="flex items-center">
        {/* Aquí puedes poner tu logo. Por ahora, asumiré que tienes una imagen en /public */}
        {/* Si tu logo es un archivo .png o .svg en la carpeta 'public', por ejemplo 'public/logo-seyva.png' */}
        <Image
          src="/logo-seyva.png" // <--- CAMBIA ESTA RUTA A LA DE TU LOGO REAL
          alt="Fundación Seyva Logo"
          width={150} // Ajusta el ancho según tu logo
          height={50} // Ajusta el alto según tu logo
          priority // Carga esta imagen con alta prioridad
        />
        {/* Si no tienes una imagen de logo aún, puedes usar texto: */}
        {/* <span className="text-xl font-bold text-sky-700 ml-2">Fundación Seyva</span> */}
      </div>

      {/* Sección de Botones de Navegación */}
      <nav className="flex space-x-4"> {/* space-x-4 añade espacio horizontal entre los elementos */}
        {/* Botones de Navegación (tipo "ghost" para enlaces de texto) */}
        <Button variant="ghost" onClick={() => handleNavClick('Inicio')}>
          Inicio
        </Button>
        <Button variant="ghost" onClick={() => handleNavClick('Experiencias')}>
          Experiencias
        </Button>
        <Button variant="ghost" onClick={() => handleNavClick('Conocenos')}>
          Conocenos
        </Button>

        {/* Botón "Súmate" (variante primary, azul sólido) */}
        <Button variant="primary" onClick={() => handleNavClick('Súmate')}>
          Súmate
        </Button>
      </nav>
    </header>
  );
}