"use client";

import PropTypes from 'prop-types';
import Button from './Button';
import Image from 'next/image';

export default function Card({
  imageSrc,
  iconSrc,
  mainText,
  secondaryText,
  amountText,
  descriptionText,
  panelColor,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="relative flex w-[800px] h-[450px] bg-white rounded-2xl overflow-hidden shadow-xl mx-auto my-8">
      {/* Panel Izquierdo (Texto e Icono) */}
      <div className={`w-1/2 p-8 flex flex-col justify-start ${panelColor} text-white`}> 
        {/* Icono */}
        {iconSrc && (
          <Image
            src={iconSrc}
            alt="Icono de la tarjeta"
            width={60}
            height={60}
            className="mb-4"
          />
        )}
        <div className="flex flex-col flex-grow pr-4 pt-4 pb-4 overflow-hidden">
          <h2 className="text-4xl font-bold mb-2 leading-tight">{mainText}</h2>
          <p className="text-xl font-semibold mb-1">{secondaryText}</p>
          <p className="text-3xl font-bold mb-4">{amountText}</p>
          <p className="text-lg leading-relaxed">{descriptionText}</p> 
        </div>
      </div>

      {/* Panel Derecho (Imagen y Botón) */}
      <div className="w-1/2 relative">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Imagen de la tarjeta"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
        {/* Botón "Conoce más" */}
        <Button
          onClick={onButtonClick}
          additionalClasses="absolute bottom-6 left-1/2 -translate-x-1/2 text-white"
          customColorClass={panelColor} // Pasamos el panelColor al prop customColorClass
          variant="primary"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string,
  iconSrc: PropTypes.string,
  mainText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  amountText: PropTypes.string,
  descriptionText: PropTypes.string,
  panelColor: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};