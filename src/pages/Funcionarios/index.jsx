import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom'

const Funcionarios = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 1550 });

  return (
    <div className="w-4/5 h-[96%] p-4 mx-auto xl:overflow-y-scroll 2xl:overflow-hidden no-scrollbar">
      <div className="flex justify-between items-center text-[var(--gray-300)] h-12">
        <h2 className={`${isSmallScreen ? "text-2xl" : "text-3xl"} font-bold`}>
          Dashboard de Funcionários
        </h2>
        <Link
          to={"/funcionarios/table"}
          className={`bg-[var(--gray-600)] hover:bg-[var(--gray-500)] ${isSmallScreen ? "py-2 text-sm" : "py-3 text-lg"} px-4 rounded-md transition-all duration-300`}
        >
          Ver Tabela
        </Link>
      </div>
    </div>
  )
}

export default Funcionarios
