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
    <div className="flex-shrink-0 overflow-hidden rounded-2xl
      2xl:w-100
      xl:w-90
      lg:w-80
      md:w-70
      sm:w-60
      xs:w-60
    ">
      <div className="relative w-full
        2xl:h-64
        xl:h-60
        lg:h-54
        md:h-50
        sm:h-48
        xs:h-48
      ">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-t-xl rounded-b-xl"
        />
      </div>
      <div className="py-5 text-left">
        <div className="
          lg:h-36
          md:h-40
          xs:h-40
        ">
          <h2 className="font-semibold text-black
            lg:text-3xl
            md:text-2xl
            xs:text-xl
          ">
            {title}
          </h2>
          <p className="mt-1 font-normal md:text-xl text-gray-700">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-6 gap-6"> 
          <div className={`h-2 w-3/4 rounded-full ${lineClasses}`} /> 
          <Button
            onClick={buttonClick}
            additionalClasses={`text-white text-nowrap rounded-full flex items-center justify-center ${buttonClasses}
              lg:px-6 lg:py-4
              md:px-4 md:py-2
              xs:px-2 xs:py-0
            `}>
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
