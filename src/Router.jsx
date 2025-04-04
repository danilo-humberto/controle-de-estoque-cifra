import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Funcionarios from './views/Funcionarios'
import Linhas from './views/Linhas'
import Equipamentos from './views/Equipamentos'
import TableEquipamentos from './views/TableEquipamentos'
import TableLinhas from './views/TableLinhas'
import TableFuncionarios from './views/TableFuncionarios'
import Movimentacao from './views/Movimentacao'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/equipamentos" element={<Equipamentos />} />
            <Route path="/linhas" element={<Linhas />} />
            <Route path="/movimentacao" element={<Movimentacao />} />
            <Route path="/tableEquipamentos" element={<TableEquipamentos />} />
            <Route path="/tableLinhas" element={<TableLinhas />} />
            <Route path="/tableFuncionarios" element={<TableFuncionarios />} />
        </Routes>
    </>
  )
}

export default Router
