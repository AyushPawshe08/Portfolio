// components/Pressedbtn.jsx
import React from 'react';

const PressedButton = ({ children, onClick, className = "" }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      {/* Bottom shadow layer */}
      <button
        className="absolute top-1 left-1 w-full h-full bg-gray-300 border-2 rounded"
        aria-hidden="true"
      ></button>

      {/* Top main button */}
      <button
        onClick={onClick}
        className="relative border-2 p-2 bg-white rounded transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-1 flex items-center gap-2"
      >
        {children}
      </button>
    </div>
  );
};

export default PressedButton;
