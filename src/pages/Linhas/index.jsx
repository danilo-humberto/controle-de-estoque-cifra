import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Linhas = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1550 });
  return (
    <div
      className={`w-4/5 h-[96%] p-4 mx-auto no-scrollbar ${
        isSmallScreen ? "overflow-y-scroll" : "overflow-hidden "
      }`}
    >
      <div className="flex justify-between items-center text-[var(--gray-300)] h-12">
        <h2 className={`${isSmallScreen ? "text-2xl" : "text-3xl"} font-bold`}>
          Dashboard de Linhas
        </h2>
        <Link
          to={"/linhas/table"}
          className={`bg-[var(--gray-600)] hover:bg-[var(--gray-500)] px-4 rounded-md transition-all duration-300 ${
            isSmallScreen ? "text-sm py-2" : "text-lg py-3"
          }`}
        >
          Ver Tabela
        </Link>
      </div>
    </div>
  );
};

export default Linhas;
