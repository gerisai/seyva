// src/components/Button.jsx
"use client";

import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className,
  ...rest
}) => {

  const baseClasses = "flex items-center justify-center font-bold transition-colors duration-200 ease-in-out outline-none";

  return (
    <button
      className={`
        ${baseClasses}
        ${
          variant === "primary"
            ? "bg-sky-500 text-white hover:bg-sky-600 px-10 py-4 rounded-full text-2xl"
            : variant === "secondary"
                ? "bg-white text-sky-500 border-4 border-sky-500 hover:bg-sky-50 hover:border-sky-600 px-10 py-4 rounded-full text-2xl"
                : "bg-transparent text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg text-lg"
        }
        ${
          disabled
            ? "cursor-not-allowed opacity-70 " +
              (variant === "primary"
                ? "bg-gray-300 text-gray-500"
                : variant === "secondary"
                    ? "bg-gray-100 text-gray-500 border-gray-300"
                    : "text-gray-400 hover:bg-transparent"
              )
            : ""
        }
        ${className || ''}
      `.trim()}
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
