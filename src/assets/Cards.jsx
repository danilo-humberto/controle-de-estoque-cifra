import React from 'react'

const Cards = ({span, icon, color}) => {
  return (
    <div 
        className={`${color} w-[200px] 2xl:h-24 xl:h-20 rounded-xl cursor-pointer transition-all duration-300`}
    >
      <div className='flex items-center justify-around h-full text-[var(--gray-300)]'>
        <span>{span}</span>
        {icon}
      </div>
    </div>
  )
}

export default Cards
