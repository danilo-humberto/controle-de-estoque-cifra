import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Funcionarios from './views/funcionarios/Funcionarios'
import Linhas from './views/linhas/Linhas'
import Equipamentos from './views/equipamentos/Equipamentos'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/equipamentos" element={<Equipamentos />} />
            <Route path="/linhas" element={<Linhas />} />
        </Routes>
    </>
  )
}

export default Router
