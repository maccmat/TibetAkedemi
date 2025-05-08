
'use client';

import React from 'react';

interface MarqueeTextProps {
  text: string;
  className?: string;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`relative flex overflow-x-hidden ${className}`}>
      {/* We need two instances of the text for a seamless loop */}
      <div className="animate-marquee whitespace-nowrap py-2">
        <span className="text-lg md:text-xl font-medium mx-4">{text}</span>
        <span className="text-lg md:text-xl font-medium mx-4">{text}</span>
        <span className="text-lg md:text-xl font-medium mx-4">{text}</span> {/* Added a third for wider screens/longer text */}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
        <span className="text-lg md:text-xl font-medium mx-4">{text}</span>
        <span className="text-lg md:text-xl font-medium mx-4">{text}</span>
        <span className="text-lg md:text-xl font-medium mx-4">{text}</span> {/* Added a third for wider screens/longer text */}
      </div>
    </div>
  );
};

export default MarqueeText;

