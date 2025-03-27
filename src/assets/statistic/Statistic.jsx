import React from 'react'
import './statistic.css'
import { Laptop, Smartphone, Users, Voicemail } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

const Statistic = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 1400})
  return (
    <div className='container-statistic'>
      <h2>Estatística do Estoque</h2>
      <div className='container-statistic-content'>
        <div>
            <Users size={isSmallScreen ? 30 : 50} style={{color: "var(--sky-700)"}}/>
            <p>Funcionários</p>
            <span>1</span>
            <span className='shadow-blue'></span>
        </div>
        <div>
            <Voicemail size={isSmallScreen ? 30 : 50} style={{color: "var(--pink-700)"}}/>
            <p>Linhas</p>
            <span>1</span>
            <span className='shadow-pink'></span>
        </div>
        <div>
            <Smartphone size={isSmallScreen ? 30 : 50} style={{color: "var(--emerald-700)"}}/>
            <p>Celulares</p>
            <span>1</span>
            <span className='shadow-emerald'></span>
        </div>
        <div>
            <Laptop size={isSmallScreen ? 30 : 50} style={{color: "var(--purple-700)"}}/>
            <p>Notebooks</p>
            <span>1</span>
            <span className='shadow-purple'></span>
        </div>
      </div>
    </div>
  )
}

export default Statistic
