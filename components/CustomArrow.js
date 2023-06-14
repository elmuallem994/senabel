import React, { useState } from 'react';

const CustomArrow = ({ direction, onClick }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className={`absolute ${
        direction === 'left' ? 'left-[-42px]' : 'right-[-40px]'
      } top-1/2 transform -translate-y-1/2  p-1 rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`h-12 w-12 ${direction === 'right' ? '-rotate-180' : ''}  ${
          hover ? 'text-gray-300' : 'text-white'
        }`}
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default CustomArrow;
