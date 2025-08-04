'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

export default function IndividualCard({
  image,
  title,
  date,
  buttonText,
  buttonLink = '#',
  lineClasses,
}) {
  return (
    <div className="w-fit size-fit rounded-2xl overflow-hidden">
      <div className="p-4">
        <div className="relative w-full h-64">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl rounded-b-xl" 
          />
        </div>
        <p className="text-sm text-gray-600 mb-2 mt-4">{date}</p> 
        <h2 className="text-lg font-bold text-black mb-2">{title}</h2>
        <div className="flex items-center justify-start gap-12">
          <div className={`h-2 w-6/10 ${lineClasses}`}></div>
          <Link href={buttonLink}>
            <span className="text-sm text-black font-medium hover:underline cursor-pointer">
              {buttonText}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

IndividualCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string,
  lineClasses: PropTypes.string,
};
