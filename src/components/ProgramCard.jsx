'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '@/components/Button';

export default function IndividualCard({
  image,
  title,
  description,
  buttonText,
  lineClasses,
  buttonClasses,
  buttonClick,
}) {
  return (
    <div className="w-[508px] rounded-2xl overflow-hidden bg-white">
      <div className="relative w-full h-[360px]">
        <Image
          src={image}
          alt="Tarjeta de Programas"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl rounded-b-xl"
        />
      </div>
      <div className="px-0 py-5 text-left">
        <h2 className="text-3xl font-semibold text-black">{title}</h2>
        <p className="mt-1 font-normal text-xl leading-[25.7px] text-gray-700">{description}</p>
        <div className="flex items-center justify-between mt-6"> 
          <div className={`h-[9px] w-[340px] rounded-full ${lineClasses}`} /> 
          <Button
            onClick={buttonClick}
            additionalClasses={`text-white ${buttonClasses}`}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

IndividualCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  lineClasses: PropTypes.string,
  buttonClasses: PropTypes.string,
  buttonClick: PropTypes.func,
};
