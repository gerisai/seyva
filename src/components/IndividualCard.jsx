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
    <div className="flex-shrink-0 rounded-2xl overflow-hidden
      xl:w-80
      md:w-70
      xs:w-50
    ">
      <div className="relative
        2xl:h-64
        xl:h-60
        md:h-56
        sm:h-52
        xs:h-48
      ">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl rounded-b-xl" 
        />
      </div>
      <p className="text-sm text-gray-600 mb-2 mt-4">{date}</p>
      <div className="h-20">
        <h2 className="xl:text-2xl md:text-xl font-bold text-black mb-2">{title}</h2>
      </div>
      <div className="flex items-center justify-start gap-12">
        <div className={`h-2 w-6/10 ${lineClasses}`}></div>
        <Link href={buttonLink}>
          <span className="md:text-sm xs:text-xs text-black font-medium hover:underline cursor-pointer">
            {buttonText}
          </span>
        </Link>
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
