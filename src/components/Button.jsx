// src/components/Button.jsx
"use client";

import PropTypes from "prop-types"

export default function Button ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  additionalClasses
})
{
  return (
    <button
      className={`
        text-white rounded-full text-lg
        flex items-center justify-center
        px-6 py-4 bg-sky-500
        ${ disabled && "cursor-not-allowed opacity-70" }
        ${additionalClasses || ''}
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary']),
  disabled: PropTypes.bool,
  additionalClasses: PropTypes.string,
  customColorClass: PropTypes.string, 
}
