import PropTypes from 'prop-types';
import Image from 'next/image';

export default function HorizontalCards({
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
      <div className="flex-1 px-7">
        <h2 className={`text-4xl font-bold ${colorClass}`}>
          {title}
        </h2>
        <p className="mt-4 text-2xl font-light leading-7 text-text-gray" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div className="w-3/5 relative h-52">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

HorizontalCards.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colorClass: PropTypes.string.isRequired,
  reverseLayout: PropTypes.bool,
};
