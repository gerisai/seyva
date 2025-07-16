"use client";

import PropTypes from "prop-types"

export default function Button ({ 
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  additionalClasses
})
{
  return (
    <button
      className={`
        flex items-center justify-center border-3 border-sky-500
        transition-colors duration-1000 ease-in-out 
        ${ variant == "primary" && "bg-sky-500 text-white px-10 py-4 rounded-full text-2xl"}
        ${ disabled && "cursor-not-allowed opacity-70" || "hover:bg-white hover:text-sky-500" }
        ${additionalClasses}
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
  disabled: PropTypes.bool
}
