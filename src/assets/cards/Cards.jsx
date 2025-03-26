import React from 'react'
import './cards.css'

const Cards = ({span, icon, color, hoverColor}) => {
  return (
    <div 
        className='container-card'
        style={{
            "--main-color": color,
            "--hover-color": hoverColor
        }}
    >
      <div className='container-card-content'>
        <span>{span}</span>
        {icon}
      </div>
    </div>
  )
}

export default Cards
