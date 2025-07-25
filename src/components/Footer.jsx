"use client";

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <footer className="bg-[var(--color-brand-primary-blue)] text-[var(--color-letter-white)] py-8 px-6">

      <div className="flex w-full h-4">
        <div className="bg-[var(--color-brand-primary-green)] flex-1"></div>
        <div className="bg-[var(--color-brand-primary-orange)] flex-1"></div>
        <div className="bg-[var(--color-brand-primary-purple)] flex-1"></div>
        <div className="bg-[var(--color-brand-primary-pink)] flex-1"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 lg:w-2/5">
            <Image
              src="/Seyva_white.svg"
              alt="Logo Fundación SEyVA"
              width={180}
              height={60}
              className="mb-4"
            />
              <p className="text-[var(--color-letter-white)] text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
              Avenida Taxqueña #1355, Colonia Campestre Churubusco, Delegación Coyoacán
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right md:w-1/2 lg:w-3/5 mt-6 md:mt-0">
            <h3 className="text-white text-lg mb-4">¡Síguenos!</h3>
            <div className="flex space-x-4 mb-4">
              <button onClick={() => handleSocialClick('http://youtube.com')} className="hover:opacity-80 transition-opacity duration-300 focus:outline-none">
                <Image src="/icons/SEYVA_ICONS_YT.svg" alt="YouTube" width={40} height={40} />
              </button>
              <button onClick={() => handleSocialClick('https://www.facebook.com')} className="hover:opacity-80 transition-opacity duration-300 focus:outline-none">
                <Image src="/icons/SEYVA_ICONS_FB.svg" alt="Facebook" width={36} height={36} />
              </button>
              <button onClick={() => handleSocialClick('https://www.instagram.com')} className="hover:opacity-80 transition-opacity duration-300 focus:outline-none">
                <Image src="/icons/SEYVA_ICONS_IG.svg" alt="Instagram" width={36} height={36} />
              </button>
              <button onClick={() => handleSocialClick('https://twitter.com')} className="hover:opacity-80 transition-opacity duration-300 focus:outline-none">
                <Image src="/icons/SEYVA_ICONS_X.svg" alt="X (Twitter)" width={36} height={36} />
              </button>
            </div>
            <p className="text-[var(--color-letter-white)] text-md md:text-lg">
              <a href="mailto:contacto@fseyva.mx" className="hover:underline">contacto@fseyva.mx</a>
            </p>
          </div>
        </div> 

        <div className="text-left text-xs md:text-sm pt-6 text-[var(--color-letter-white)] w-full"> 
          <p className="m-0 p-0 leading-tight inline">
            Este sitio web utiliza cookies para mejorar su experiencia. Si continúa navegando se entenderá que otorgó su consentimiento para el uso de dichas cookies, si desea obtener más información consulte nuestro{' '}
            <a
              href="/aviso-privacidad"
              className="underline text-[var(--color-letter-white)] hover:text-[var(--color-brand-primary-green)] whitespace-nowrap"
            >
              Aviso de Privacidad
            </a>
            .
          </p>
        </div>

      </div> 
    </footer>
  );
};

export default Footer;