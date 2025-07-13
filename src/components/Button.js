// src/components/Button.js
"use client"; 

import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false, className, ...rest }) => {
  let baseClasses = "flex items-center justify-center font-bold px-10 py-4 rounded-full transition-colors duration-200 ease-in-out outline-none text-2xl";

  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-sky-500 text-white hover:bg-sky-600";
  } else if (variant === "secondary") {
    variantClasses = "bg-white text-sky-500 border-4 border-sky-500 hover:bg-sky-50 hover:border-sky-600";
  }

  let disabledClasses = "";
  if (disabled) {
    disabledClasses = "cursor-not-allowed opacity-70";
    if (variant === "primary") {
      disabledClasses += " bg-gray-300 text-gray-500";
    } else if (variant === "secondary") {
      disabledClasses += " bg-gray-100 text-gray-500 border-gray-300";
    }
  }

  const finalClasses = `${baseClasses} ${variantClasses} ${disabledClasses} ${className || ''}`.trim();

  return (
    <button
      className={finalClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
