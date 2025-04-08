import React from 'react';
import { useMediaQuery } from 'react-responsive';

const StatItem = ({ icon, label, color, shadow, quantidade }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });
  
  return (
    <div className='flex flex-col items-center gap-2 2xl:pb-8 xl:pb-2 select-none'>
      <div className={color}>
      {React.cloneElement(icon, { size: isSmallScreen ? 30 : 40 })}
      </div>
      <p className='2xl:text-lg xl:text-sm'>{label}</p>
      <span className='2xl:text-xl xl:text-lg font-bold'>{quantidade}</span>
      <span className={`w-10 h-2 ${shadow} blur-lg relative -top-20`}></span>
    </div>
  );
};

export default StatItem