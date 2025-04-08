import {
  ChartLine,
  House,
  LogIn,
  LogOut,
  Moon,
  Package,
  Sun,
  Users,
  Voicemail,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);

  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour >= 6 && currentHour < 12) {
    greeting = "Bom dia";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Boa tarde";
  } else {
    greeting = "Boa noite";
  }

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.setAttribute("data-theme", isLightMode ? "dark" : "light");
  };

  return (
    <div
      className={`h-full border-r border-[var(--gray-500)] transition-all ease-in-out duration-300 ${
        isCollapsed ? "w-[80px]" : "xl:w-[250px] 2xl:w-[300px]"
      }`}
    >
      <div className="flex flex-col p-4 gap-7 2xl:gap-12 h-full">
        <div
          className="flex items-center gap-2 cursor-pointer h-12 w-full transition-all duration-300"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <img
            src="/logo.png"
            alt="logo da cifra"
            className="w-12 h-12 transition-all duration-300"
          />
          <h1
            className={`text-[var(--gray-300)] transition-all duration-300 cursor-pointer overflow-hidden ${
              isCollapsed ? "text-[0px]" : "text-base"
            }`}
          >
            Controle de Estoque
          </h1>
        </div>
        <nav className="flex flex-col justify-between h-full w-full">
          <ul className="flex flex-col xl:gap-1 2xl:gap-4">
            <li>
              <Link
                to="/"
                className={`flex items-center xl:px-[0.7rem] 2xl:p-2 h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] transition-all duration-300 rounded-md ${
                  isCollapsed ? "gap-0" : "gap-2"
                }`}
              >
                {isCollapsed ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <House
                          className="text-[var(--gray-400)]"
                          size={isSmallScreen ? 25 : 30}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                        <p className="text-[var(--gray-300)]">Home</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <House
                    className="text-[var(--gray-400)]"
                    size={isSmallScreen ? 25 : 30}
                  />
                )}
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "text-[0px]" : "text-base"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/funcionarios"
                className={`flex items-center xl:px-[0.7rem] 2xl:p-2 h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] transition-all duration-300 rounded-md ${
                  isCollapsed ? "gap-0" : "gap-2"
                }`}
              >
                {isCollapsed ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Users
                          className="text-[var(--gray-400)]"
                          size={isSmallScreen ? 25 : 30}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                        <p className="text-[var(--gray-300)]">Funcionários</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <Users
                    className="text-[var(--gray-400)]"
                    size={isSmallScreen ? 25 : 30}
                  />
                )}
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "text-[0px]" : "text-base"
                  }`}
                >
                  Funcionários
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/equipamentos"
                className={`flex items-center xl:px-[0.7rem] 2xl:p-2 h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] transition-all duration-300 rounded-md ${
                  isCollapsed ? "gap-0" : "gap-2"
                }`}
              >
                {isCollapsed ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Package
                          className="text-[var(--gray-400)]"
                          size={isSmallScreen ? 25 : 30}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                        <p className="text-[var(--gray-300)]">Equipamentos</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <Package
                    className="text-[var(--gray-400)]"
                    size={isSmallScreen ? 25 : 30}
                  />
                )}
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "text-[0px]" : "text-base"
                  }`}
                >
                  Equipamentos
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/linhas"
                className={`flex items-center xl:px-[0.7rem] 2xl:p-2 h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] transition-all duration-300 rounded-md ${
                  isCollapsed ? "gap-0" : "gap-2"
                }`}
              >
                {isCollapsed ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Voicemail
                          className="text-[var(--gray-400)]"
                          size={isSmallScreen ? 25 : 30}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                        <p className="text-[var(--gray-300)]">Linhas</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <Voicemail
                    className="text-[var(--gray-400)]"
                    size={isSmallScreen ? 25 : 30}
                  />
                )}
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "text-[0px]" : "text-base"
                  }`}
                >
                  Linhas
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/movimentacao"
                className={`flex items-center xl:px-[0.7rem] 2xl:p-2 h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] transition-all duration-300 rounded-md ${
                  isCollapsed ? "gap-0" : "gap-2"
                }`}
              >
                {isCollapsed ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <ChartLine
                          className="text-[var(--gray-400)]"
                          size={isSmallScreen ? 25 : 30}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                        <p className="text-[var(--gray-300)]">Movimentação</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <ChartLine
                    className="text-[var(--gray-400)]"
                    size={isSmallScreen ? 25 : 30}
                  />
                )}
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "text-[0px]" : "text-base"
                  }`}
                >
                  Movimentação
                </span>
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <ul className="flex flex-col xl:gap-1 2xl:gap-4">
              <li
                onClick={toggleTheme}
                className={`flex items-center xl:px-[0.7rem] 2xl:p-2 h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] rounded-md cursor-pointer transition-all duration-300 ${
                  isCollapsed ? "gap-0" : "gap-2"
                }`}
              >
                {isCollapsed ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {isLightMode ? (
                          <Moon
                            className="text-[var(--gray-400)]"
                            size={isSmallScreen ? 25 : 30}
                          />
                        ) : (
                          <Sun
                            className="text-[var(--gray-400)]"
                            size={isSmallScreen ? 25 : 30}
                          />
                        )}
                      </TooltipTrigger>
                      <TooltipContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                        <p className="text-[var(--gray-300)]">
                          {isLightMode ? "Modo escuro" : "Modo claro"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <div>
                    {isLightMode ? (
                      <Moon
                        className="text-[var(--gray-400)]"
                        size={isSmallScreen ? 25 : 30}
                      />
                    ) : (
                      <Sun
                        className="text-[var(--gray-400)]"
                        size={isSmallScreen ? 25 : 30}
                      />
                    )}
                  </div>
                )}
                <span
                  className={`transition-all duration-300 overflow-hidden ${
                    isCollapsed ? "text-[0px]" : "text-base"
                  }`}
                >
                  {isLightMode ? "Modo escuro" : "Modo claro"}
                </span>
              </li>
              <li
                className={`flex items-center p-[0.35rem] xl:ml-[0.1rem] h-12 w-full text-[var(--gray-300)] ${
                  isCollapsed ? "gap-0" : "gap-2"
                }`}
              >
                <div
                  className={`flex items-center ${
                    isCollapsed ? "gap-0" : "gap-2"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full border border-[var(--gray-200)] flex items-center justify-center p-[1px]">
                    <img
                      src="https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg"
                      alt="usuario"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p
                    className={`text-[var(--gray-300)] transition-all duration-300 overflow-hidden ${
                      isCollapsed ? "text-[0px]" : "text-base"
                    }`}
                  >
                    {greeting}, Eduardo
                  </p>
                </div>
              </li>
              <li>
                <Link
                  className={`flex items-center xl:px-[0.7rem] xl:ml-[0.08rem] 2xl:p-2 h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] rounded-md transition-all duration-300 ${
                    isCollapsed ? "gap-0" : "gap-2"
                  }`}
                  to="/sair"
                >
                  {isCollapsed ? (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <LogOut
                            className="text-red-500"
                            size={isSmallScreen ? 25 : 30}
                          />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                          <p className="text-[var(--gray-300)]">Sair</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <LogOut
                      className="text-red-500"
                      size={isSmallScreen ? 25 : 30}
                    />
                  )}
                  <span
                    className={`transition-all duration-300 overflow-hidden text-red-500 ${
                      isCollapsed ? "text-[0px]" : "text-base"
                    }`}
                  >
                    Sair
                  </span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col gap-4">
              <li
                onClick={toggleTheme}
                className={`flex items-center p-2 h-12 w-full transition-all duration-300 text-gray-300 hover:bg-gray-500 rounded-md cursor-pointer ${
                  isCollapsed ? "gap-0" : "gap-2"
                }`}
              >
                {isCollapsed ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {isLightMode ? (
                          <Moon
                            className="text-[var(--gray-400)] transition-all duration-300"
                            size={isSmallScreen ? 25 : 30}
                          />
                        ) : (
                          <Sun
                            className="text-[var(--gray-400)] transition-all duration-300"
                            size={isSmallScreen ? 25 : 30}
                          />
                        )}
                      </TooltipTrigger>
                      <TooltipContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                        <p className="text-[var(--gray-300)]">
                          {isLightMode ? "Modo escuro" : "Modo claro"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <div>
                    {isLightMode ? (
                      <Moon
                        className="text-[var(--gray-400)] transition-all duration-300"
                        size={isSmallScreen ? 25 : 30}
                      />
                    ) : (
                      <Sun
                        className="text-[var(--gray-400)] transition-all duration-300"
                        size={isSmallScreen ? 25 : 30}
                      />
                    )}
                  </div>
                )}
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "text-[0px]" : "text-base"
                  }`}
                >
                  {isLightMode ? "Modo escuro" : "Modo claro"}
                </span>
              </li>
              <li
                className={`flex items-center p-2 h-12 w-full transition-all duration-300 text-gray-300 hover:bg-gray-500 rounded-md ${
                  isCollapsed ? "gap-0" : "gap-2"
                }`}
              >
                {isCollapsed ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <LogIn
                          className="text-lime-500 transition-all duration-300"
                          size={isSmallScreen ? 25 : 30}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                        <p className="text-[var(--gray-300)]">Entrar</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <LogIn
                    className="text-lime-500 transition-all duration-300"
                    size={isSmallScreen ? 25 : 30}
                  />
                )}
                <span
                  className={`text-lime-500 transition-all duration-300 ${
                    isCollapsed ? "text-[0px]" : "text-base"
                  }`}
                >
                  Entrar
                </span>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
