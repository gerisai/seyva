// src/components/HomePageButtons.js
"use client"; 

import React from 'react';
import Button from './Button';

export default function HomePageButtons() {
  const handleClick = (buttonName) => {
    alert(`¡Has clicado en el botón: ${buttonName}!`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      <Button variant="primary" onClick={() => handleClick('Súmate')}>
        Súmate
      </Button>

      <Button variant="secondary" onClick={() => handleClick('Súmate')}>
        Súmate
      </Button>

      <Button variant="primary" onClick={() => handleClick('Conoce más')}>
        Conoce más
      </Button>

      <Button variant="secondary" onClick={() => handleClick('Conoce más')}>
        Conoce más
      </Button>
    </div>
  );
}