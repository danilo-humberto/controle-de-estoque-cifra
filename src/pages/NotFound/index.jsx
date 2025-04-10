import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col text-[var(--gray-300)]">
        <h1 className="text-8xl">404</h1>
        <p>Página não encontrada</p>
        <Link to={"/"} className="mt-4 p-2 rounded-sm bg-[var(--gray-500)]">Voltar para o início</Link>
    </div>
  )
}

export default NotFound