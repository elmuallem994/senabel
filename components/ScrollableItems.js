import React, { useRef } from 'react';
import Link from 'next/link';

const ScrollableItems = ({ items }) => {
  const scrollRef = useRef(null);

  const renderItem = (item, index) => (
    <Link key={index} href={`/product/${item.id}`}>
      <div className="flex-shrink-0 md:w-48 w-36 md:h-32 h-20 shadow-md cursor-pointer relative rounded-lg overflow-hidden scroll-container">
        <img
          src={item.imgUrl}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.7)]" />
        <h3 className="absolute bottom-2 w-full text-right text-lg font-semibold text-yellow-500 mb-1 pr-4 py-1 bg-opacity-0 z-20">
          {item.title}
        </h3>
      </div>
    </Link>
  );

  return (
    <div className="relative md:w-7/12 w-[120%] mx-auto md:-left-0 -left-9 md:mt-52 mt-32">
      <div ref={scrollRef} className="flex overflow-x-auto py-3 space-x-4">
        {items.map(renderItem)}
      </div>
      {/** <CustomArrow direction="left" onClick={() => scroll("left")} />
      <CustomArrow direction="right" onClick={() => scroll("right")} /> */}
    </div>
  );
};

export default ScrollableItems;
