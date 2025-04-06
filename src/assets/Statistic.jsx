import React, { useEffect, useState } from 'react'
import { BringToFront, Laptop, MonitorCheck, Printer, Smartphone, Tablet, Users, Voicemail } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'
import { getEquipamentos, getFuncionarios, getLinhas } from '@/data/api';

const Statistic = () => {

  const [linhas, setLinhas] = useState([]);
  const [func, setFunc] = useState([]);
  const [equip, setEquip] = useState([]);
  const isSmallScreen = useMediaQuery({ maxWidth: 1400})

  useEffect(() => {
    const buscarAll = async () => {
      try {
        const dadosLinhas = await getLinhas();
        const dadosFunc = await getFuncionarios();
        const dadosEquip = await getEquipamentos();
        setLinhas(dadosLinhas);
        setFunc(dadosFunc)
        setEquip(dadosEquip)
      } catch (error) {
        console.log(error);
      }
    };

    buscarAll();
  }, []);

  const filtrarEquipamentos = (tipo) => {
    return equip.filter(item => item.status === "ATIVO" && item.equipamento === tipo).length
  }

  const stats = [
    { icon: <Users />, label: "Funcionários", color: "text-sky-700", shadow: "bg-sky-700", quantidade: func ? func.length : 0 },
    { icon: <Voicemail />, label: "Linhas", color: "text-pink-700", shadow: "bg-pink-700", quantidade: linhas ? linhas.length : 0 },
    { icon: <Smartphone />, label: "Celulares", color: "text-emerald-700", shadow: "bg-emerald-700", quantidade: equip ? filtrarEquipamentos("Celular") : 0 },
    { icon: <Laptop />, label: "Notebooks", color: "text-purple-700", shadow: "bg-purple-700", quantidade: equip ? filtrarEquipamentos("Notebook") : 0 },
    { icon: <Tablet />, label: "Tablet", color: "text-purple-300", shadow: "bg-purple-300", quantidade: equip ? filtrarEquipamentos("Tablet") : 0 },
    { icon: <Printer />, label: "Impressora", color: "text-yellow-200", shadow: "bg-yellow-200", quantidade: equip ? filtrarEquipamentos("Impressora") : 0 },
    { icon: <MonitorCheck />, label: "Desktop", color: "text-indigo-600", shadow: "bg-indigo-600", quantidade: equip ? filtrarEquipamentos("Desktop") : 0 },
    { icon: <BringToFront />, label: "Acessórios", color: "text-rose-400", shadow: "bg-rose-400", quantidade: equip ? filtrarEquipamentos("Acessórios") : 0 },
  ];

  return (
    <div className='w-full h-full text-[var(--gray-300)] overflow-hidden'>
      <h2 className='text-center text-lg font-semibold'>Estatística do Estoque</h2>
      <div className='grid 2xl:grid-cols-2 xl:grid-cols-3 justify-items-center 2xl:mt-8 xl:mt-5'>
        {stats.map(({ icon, label, color, shadow, quantidade }, index) => (
          <div key={index} className='flex flex-col items-center gap-2 2xl:pb-8 xl:pb-2 last:pb-0 select-none'>
            <div className={`${color}`}>{React.cloneElement(icon, { size: isSmallScreen ? 30 : 40 })}</div>
            <p className='2xl:text-lg xl:text-sm'>{label}</p>
            <span className='2xl:text-xl xl:text-lg font-bold'>{quantidade}</span>
            <span className={`w-10 h-2 ${shadow} blur-lg relative -top-20`}></span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Statistic
