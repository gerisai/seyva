"use client";

import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const DEFAULT_ITEMS_TO_SHOW = 11; 

const backgroundToTextColorMap = {
  'bg-green': 'var(--brand-primary-green)',
  'bg-orange': 'var(--brand-primary-orange)',
  'bg-purple': 'var(--brand-primary-purple)',
  'bg-pink': 'var(--brand-primary-pink)',
};

export default function PublicFileCard({
  title,
  icon,
  items,
  cardClasses, 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const visibleItems = isExpanded ? items : items.slice(0, DEFAULT_ITEMS_TO_SHOW);
  const showToggleButton = items.length > DEFAULT_ITEMS_TO_SHOW;
  const buttonColor = backgroundToTextColorMap[cardClasses];

  return (
    <div className="w-full rounded-4xl overflow-hidden shadow-lg border border-gray-200">
      {/* Header */}
      <div className={`flex justify-between items-center p-8 text-white ${cardClasses}`}>
        <h2 className="text-5xl font-black">{title}</h2>
        {icon && (
          <Image src={icon} alt={`${title} icon`} width={80} height={80} />
        )}
      </div>

      {/* Body */}
      <div className={`bg-white p-8 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'h-full' : 'h-3/4'}`}>
        <ul className="list-none p-0 m-0">
          {visibleItems.map((item, index) => (
            <li key={index} className="mb-2 text-black text-base">
              <a href="#" className="underline hover:no-underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Expand/Collapse */}
      {showToggleButton && (
        <div className="bg-white p-8 pt-0 text-right">
          <button onClick={toggleExpand} className={`text-lg font-bold underline hover:no-underline`} style={{ color: buttonColor }}>
            {isExpanded ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      )}
    </div>
  );
}

PublicFileCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  cardClasses: PropTypes.string, 
};