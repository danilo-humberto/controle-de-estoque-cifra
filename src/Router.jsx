import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Funcionarios from './views/Funcionarios'
import Linhas from './views/Linhas'
import Equipamentos from './views/Equipamentos'
import TableEquipamentos from './views/TableEquipamentos'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/equipamentos" element={<Equipamentos />} />
            <Route path="/linhas" element={<Linhas />} />
            <Route path="/tableEquipamentos" element={<TableEquipamentos />} />
        </Routes>
    </>
  )
}

export default Router
