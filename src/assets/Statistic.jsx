import React from 'react'
import { BringToFront, Laptop, MonitorCheck, Printer, Smartphone, Tablet, Users, Voicemail } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

const Statistic = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 1400})

  const stats = [
    { icon: <Users />, label: "Funcionários", color: "text-sky-700", shadow: "bg-sky-700" },
    { icon: <Voicemail />, label: "Linhas", color: "text-pink-700", shadow: "bg-pink-700" },
    { icon: <Smartphone />, label: "Celulares", color: "text-emerald-700", shadow: "bg-emerald-700" },
    { icon: <Laptop />, label: "Notebooks", color: "text-purple-700", shadow: "bg-purple-700" },
    { icon: <Tablet />, label: "Tablet", color: "text-purple-300", shadow: "bg-purple-300" },
    { icon: <Printer />, label: "Impressora", color: "text-yellow-200", shadow: "bg-yellow-200" },
    { icon: <MonitorCheck />, label: "Desktop", color: "text-indigo-600", shadow: "bg-indigo-600" },
    { icon: <BringToFront />, label: "Acessórios", color: "text-rose-400", shadow: "bg-rose-400" },
  ];

  return (
    <div className='w-full h-full p-4 text-[var(--gray-300)] overflow-hidden'>
      <h2 className='text-center text-lg font-semibold'>Estatística do Estoque</h2>
      <div className='grid lg:grid-cols-2 md:grid-cols-3 justify-items-center lg:mt-12 md:mt-6'>
        {stats.map(({ icon, label, color, shadow }, index) => (
          <div key={index} className='flex flex-col items-center gap-2 pb-8 last:pb-0'>
            <div className={`${color}`}>{React.cloneElement(icon, { size: isSmallScreen ? 30 : 40 })}</div>
            <p className='text-sm md:text-base'>{label}</p>
            <span className='text-xl font-bold'>1</span>
            <span className={`w-10 h-2 ${shadow} blur-lg relative -top-20`}></span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Statistic
