"use client";

import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '@/components/Button';

export default function JumboCard({
  image,
  icon,
  title,
  description,
  buttonText,
  buttonClick,
  buttonClasses,
  cardClasses,
}) {
  return (
    <div className={`flex rounded-2xl overflow-hidden mx-auto w-5xl ${cardClasses}`}>
      <div className={`w-1/2 p-8 flex flex-col justify-start text-white`}> 
        { icon && (
          <Image
            src={icon}
            alt="Card Icon"
            width={150}
            height={150}
            className="mb-4"
          />
        )}
        <div className="flex flex-col flex-grow p-4 pt-40 overflow-hidden">
          <h2 className="text-7xl font-bold mb-2 leading-tight">{title}</h2>
          { description && description }
        </div>
      </div>

      <div className="w-1/2 relative">
        { image && (
          <Image
            src={image}
            alt="Card image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
        <Button 
          onClick={buttonClick}
          additionalClasses={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white ${buttonClasses}`}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

JumboCard.propTypes = {
  image: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.element,
  background: PropTypes.string.isRequired,
  button: PropTypes.string,
  buttonText: PropTypes.func,
  buttonClasses: PropTypes.string,
  cardClasses: PropTypes.string
};
