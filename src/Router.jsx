import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Funcionarios from './pages/Funcionarios'
import Linhas from './pages/Linhas'
import Equipamentos from './pages/Equipamentos'
import TableEquipamentos from './pages/TableEquipamentos'
import TableLinhas from './pages/TableLinhas'
import TableFuncionarios from './pages/TableFuncionarios'
import Movimentacao from './pages/Movimentacao'

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
