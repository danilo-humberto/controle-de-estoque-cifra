import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Funcionarios from './pages/Funcionarios/index'
import Linhas from './pages/Linhas/index'
import Equipamentos from './pages/Equipamentos/index'
import TableEquipamentos from './pages/Equipamentos/table/index'
import TableLinhas from './pages/Linhas/table/index'
import TableFuncionarios from './pages/Funcionarios/table'
import Movimentacao from './pages/Movimentação'
import NotFound from './pages/NotFound'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/equipamentos" element={<Equipamentos />} />
            <Route path="/linhas" element={<Linhas />} />
            <Route path="/movimentacao" element={<Movimentacao />} />
            <Route path="/equipamentos/table" element={<TableEquipamentos />} />
            <Route path="/linhas/table" element={<TableLinhas />} />
            <Route path="/funcionarios/table" element={<TableFuncionarios />} />
        </Routes>
    </>
  )
}

export default Router
