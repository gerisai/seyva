import React from 'react';
import PropTypes from 'prop-types';

export default function Paragraph({ title, content }) {
  return (
    <div className="flex flex-col max-w-2xl mx-auto p-4">
      <h2 className="text-5xl font-bold text-blue mb-5">{title}</h2>
      <p className="text-lg text-gray-800">{content}</p>
    </div>
  );
}

Paragraph.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}