'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '@/components/Button';

export default function ProgramCard({
  image,
  title,
  description,
  buttonText,
  lineClasses,
  buttonClasses,
  buttonClick,
}) {
  return (
    <div className="w-1/2 rounded-2xl">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-t-xl rounded-b-xl"
        />
      </div>
      <div className="py-5 text-left">
        <h2 className="text-3xl font-semibold text-black">{title}</h2>
        <p className="mt-1 font-normal text-xl text-gray-700">{description}</p>
        <div className="flex items-center justify-between mt-6 gap-6"> 
          <div className={`h-2 w-3/4 rounded-full ${lineClasses}`} /> 
          <Button
            onClick={buttonClick}
            additionalClasses={`text-white text-nowrap rounded-full flex items-center justify-center ${buttonClasses}`}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

ProgramCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  lineClasses: PropTypes.string,
  buttonClasses: PropTypes.string,
  buttonClick: PropTypes.func,
};
