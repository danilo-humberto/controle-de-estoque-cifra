import React from 'react';
import { useMediaQuery } from 'react-responsive';

const StatItem = ({ icon, label, color, shadow, quantidade }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1550 });
  
  return (
    <div className={`flex flex-col items-center gap-2 select-none ${isSmallScreen ? "pb-4" : "pb-8" }`}>
      <div className={color}>
      {React.cloneElement(icon, { size: isSmallScreen ? 30 : 40 })}
      </div>
      <p className={`${isSmallScreen ? "text-sm" : "text-lg"}`}>{label}</p>
      <span className='text-xl font-bold'>{quantidade}</span>
      <span className={`w-10 h-2 ${shadow} blur-lg relative -top-20`}></span>
    </div>
  );
};

export default StatItem