// src/components/Button.jsx
"use client";

import PropTypes from "prop-types"

export default function Button ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  additionalClasses,
  customColorClass, // Variable nueva creada para el color
})
{
  // Clases base de la variante primaria (sin el color de fondo aquí)
  const basePrimaryClasses = "text-white px-16 py-4 rounded-full text-lg";

  const backgroundColorClass = customColorClass
    ? customColorClass
    : (variant === "primary" ? "button-default-background-blue" : ""); 

  const borderColorClass = customColorClass
    ? customColorClass.replace('bg-', 'border-') 
    :  (variant === "primary" ? "button-default-border-blue" : ""); 

  return (
    <button
      className={`
        flex items-center justify-center border-3 ${borderColorClass}
        transition-colors duration-1000 ease-in-out
        ${variant === "primary" ? basePrimaryClasses : ""} 
        ${backgroundColorClass} 
        ${ disabled && "cursor-not-allowed opacity-70" || "hover:bg-white hover:text-sky-500" }
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
