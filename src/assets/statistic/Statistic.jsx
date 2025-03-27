import React from 'react'
import './statistic.css'
import { BringToFront, Laptop, MonitorCheck, Printer, Smartphone, Tablet, Users, Voicemail } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

const Statistic = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 1400})
  return (
    <div className='container-statistic'>
      <h2>Estatística do Estoque</h2>
      <div className='container-statistic-content'>
        <div>
            <Users size={isSmallScreen ? 30 : 40} style={{color: "var(--sky-700)"}}/>
            <p>Funcionários</p>
            <span>1</span>
            <span className='shadow-blue'></span>
        </div>
        <div>
            <Voicemail size={isSmallScreen ? 30 : 40} style={{color: "var(--pink-700)"}}/>
            <p>Linhas</p>
            <span>1</span>
            <span className='shadow-pink'></span>
        </div>
        <div>
            <Smartphone size={isSmallScreen ? 30 : 40} style={{color: "var(--emerald-700)"}}/>
            <p>Celulares</p>
            <span>1</span>
            <span className='shadow-emerald'></span>
        </div>
        <div>
            <Laptop size={isSmallScreen ? 30 : 40} style={{color: "var(--purple-700)"}}/>
            <p>Notebooks</p>
            <span>1</span>
            <span className='shadow-purple'></span>
        </div>
        <div>
            <Tablet size={isSmallScreen ? 30 : 40} style={{color: "var(--purple-300)"}}/>
            <p>Tablet</p>
            <span>1</span>
            <span className='shadow-purple-300'></span>
        </div>
        <div>
            <Printer size={isSmallScreen ? 30 : 40} style={{color: "var(--yellow-200)"}}/>
            <p>Impressora</p>
            <span>1</span>
            <span className='shadow-yellow'></span>
        </div>
        <div>
            <MonitorCheck size={isSmallScreen ? 30 : 40} style={{color: "var(--indigo-600)"}}/>
            <p>Desktop</p>
            <span>1</span>
            <span className='shadow-indigo'></span>
        </div>
        <div>
            <BringToFront size={isSmallScreen ? 30 : 40} style={{color: "var(--rose-300)"}}/>
            <p>Acessórios</p>
            <span>1</span>
            <span className='shadow-rose'></span>
        </div>
      </div>
    </div>
  )
}

export default Statistic
