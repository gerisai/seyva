"use client";

import Image from 'next/image'
import MediaIcon from '@/components/MediaIcon'
import { socialMedia } from '@/util/constants'

export default function Footer () {
  return (
    <footer className="w-full bg-blue text-white">
      <div className="flex h-4">
        <div className="bg-green w-1/4"></div>
        <div className="bg-orange w-1/4"></div>
        <div className="bg-purple w-1/4"></div>
        <div className="bg-pink w-1/4"></div>
      </div>

      <div className="mx-auto flex flex-col gap-2 px-16 pt-12 pb-6">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start text-center">
            <Image
              className="hidden md:block"
              src="/imagotipo_white.svg"
              alt="Logo"
              width={240}
              height={60}
            />
            <p className="hidden lg:flex whitespace-nowrap overflow-hidden text-ellipsis">
              Avenida Taxqueña #1355, Colonia Campestre Churubusco, Delegación Coyoacán
            </p>
          </div>

          <div className="flex flex-col items-end text-center">
            <p className="text-2xl mb-4">¡Síguenos!</p>
            <div className="flex space-x-3 mb-4">
              { socialMedia.map((social,index) => (
                <MediaIcon key={index} alt={social.name} link={social.link} icon={social.icon} width={social.size} height={social.size}/>
              )) }
            </div>
            <p className="text-xl">
              <a href="mailto:contacto@fseyva.mx" className="hover:underline">contacto@fseyva.mx</a>
            </p>
          </div>
        </div>

        <div className="text-sm xs:text-center lg:text-start"> 
          <p className="hidden leading-tight lg:inline">
            Este sitio web utiliza cookies para mejorar su experiencia. Si continúa navegando se entenderá que otorgó su consentimiento para el uso de dichas cookies, si desea obtener más información consulte nuestro{' '}
          </p>
          <a
            href="/aviso_privacidad.pdf"
            className="underline"
          >
              Aviso de Privacidad.
          </a>
        </div>
      </div> 
    </footer>
  );
};
