import React from "react";
import Sidebar from "./components/layout/sidebar";
import Router from "./Router";
import { useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";

const App = () => {
  const location = useLocation();
  const validRoutes = [
    "/",
    "/funcionarios",
    "/equipamentos",
    "/linhas",
    "/movimentacao",
    "/equipamentos/table",
    "/linhas/table",
    "/funcionarios/table",
  ];

  const isRouteValid = validRoutes.includes(location.pathname);

  return (
    <div className="w-screen h-screen p-4 bg-[var(--gray-700)]">
      <div className="w-full h-full bg-[var(--gray-800)] rounded-lg flex">
        {isRouteValid && <Sidebar />}
        {isRouteValid ? <Router /> : <NotFound />}
      </div>
    </div>
  );
};

export default App;
