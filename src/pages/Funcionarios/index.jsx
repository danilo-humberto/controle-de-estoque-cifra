import React from 'react'
import { Link } from 'react-router-dom'

const Funcionarios = () => {
  return (
    <div className="w-4/5 h-[96%] p-4 mx-auto xl:overflow-y-scroll 2xl:overflow-hidden no-scrollbar">
      <div className="flex justify-between items-center text-[var(--gray-300)] h-12">
        <h2 className="xl:text-2xl 2xl:text-3xl font-bold">
          Dashboard de Funcionários
        </h2>
        <Link
          to={"/tableFuncionarios"}
          className="bg-[var(--gray-600)] hover:bg-[var(--gray-500)] xl:py-2 2xl:py-3 px-4 rounded-md transition-all duration-300 xl:text-sm 2xl:text-lg"
        >
          Ver Tabela
        </Link>
      </div>
    </div>
  )
}

export default Funcionarios
