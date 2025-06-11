import React from 'react';

const Menu = ({ value, handleClick }) => {
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="w-5 h-5 bg-transparent rounded overflow-hidden flex flex-col justify-center items-center gap-[3px]">
        {/* Top Line */}
        <span
          className={`block w-5 h-0.5 bg-black rounded transform transition-all duration-300 ease-in-out ${
            value ? 'rotate-45 translate-y-[4px]' : ''
          }`}
        ></span>

        {/* Middle Line */}
        <span
          className={`block w-5 h-0.5 bg-black rounded transform transition-all duration-300 ease-in-out ${
            value ? 'opacity-0 translate-x-2' : ''
          }`}
        ></span>

        {/* Bottom Line */}
        <span
          className={`block w-5 h-0.5 bg-black rounded transform transition-all duration-300 ease-in-out ${
            value ? '-rotate-45 -translate-y-[4px]' : ''
          }`}
        ></span>
      </div>
    </div>
  );
};

export default Menu;