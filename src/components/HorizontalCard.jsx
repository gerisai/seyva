import PropTypes from 'prop-types';
import Image from 'next/image';

export default function HorizontalCard({
  image,
  title,
  description,
  colorClass,
  reverseLayout,
}) {
  return (
    <div
      className={`w-full flex ${
        reverseLayout ? 'flex-row-reverse' : 'flex-row'
      } items-center overflow-hidden gap-8`}
    >
      <div className="flex-1 px-7 xs:text-center md:text-start">
        <h2 className={`text-4xl font-bold ${colorClass}`}>
          {title}
        </h2>
        <p className="mt-4 font-light leading-7 text-text-gray
          md:text-2xl
          xs:text-xl
        ">
          {description}
        </p>
      </div>

      <div className="md:w-3/5 relative h-64 md:block hidden">
        <Image
          src={image}
          alt={title}
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
}

HorizontalCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colorClass: PropTypes.string.isRequired,
  reverseLayout: PropTypes.bool,
};
