"use client";

import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const DEFAULT_ITEMS_TO_SHOW = 11;
export default function PublicFileCard({
  title,
  icon,
  items,
  color,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const visibleItems = isExpanded ? items : items.slice(0, DEFAULT_ITEMS_TO_SHOW);

  return (
    <div className="w-fit h-fit rounded-4xl overflow-hidden shadow-lg border border-gray-200">
      {/* Header */}
      <div className={`flex items-center p-8 text-white bg-${color}
        sm:justify-between
        xs:justify-center
      `}>
        <h2 className="font-black text-5xl hidden
          sm:block
        ">
          {title}
        </h2>
        {icon && (
          <Image src={icon} alt={`${title} icon`} width={80} height={80} />
        )}
      </div>

      {/* Body */}
      <div className={`bg-white p-8 overflow-hidden transition-all duration-300 ease-in-out`}>
        <ul>
          { visibleItems.map((item, index) => (
            <li key={index} className="mb-2 text-black text-base">
              <a href="#" className="underline hover:no-underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 pt-0 text-right">
        <button onClick={toggleExpand} className={`text-lg text-${color} font-bold underline hover:no-underline`}>
          { isExpanded ? 'Ver menos' : 'Ver más' }
        </button>
      </div>
    </div>
  );
}

PublicFileCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string, 
};
