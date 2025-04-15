import { Moon, Sun } from "lucide-react";
import SidebarTooltip from "./SidebarTooltip";

const SidebarIsLogged = ({
  isSmallScreen,
  toggleTheme,
  isCollapsed,
  isLightMode,
  greeting,
}) => {
  return (
    <ul className={`flex flex-col ${isSmallScreen ? "gap-1" : "gap-4"}`}>
      <li
        onClick={toggleTheme}
        className={`flex items-center ${
          isSmallScreen ? "px-[0.7rem]" : "p-2"
        } h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] rounded-md cursor-pointer transition-all duration-300 ${
          isCollapsed ? "gap-0" : "gap-2"
        }`}
      >
        {isCollapsed ? (
          <SidebarTooltip
            icon={
              isLightMode ? (
                <Moon
                  className="text-[var(--gray-400)] transition-all duration-300"
                  size={isSmallScreen ? 25 : 30}
                />
              ) : (
                <Sun
                  className="text-[var(--gray-400)] transition-all duration-300"
                  size={isSmallScreen ? 25 : 30}
                />
              )
            }
            isSmallScreen={isSmallScreen}
            label={isLightMode ? "Modo escuro" : "Modo claro"}
          />
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
            isCollapsed ? "text-[0px]" : isSmallScreen ? "text-sm" : "text-base"
          }`}
        >
          {isLightMode ? "Modo escuro" : "Modo claro"}
        </span>
      </li>
      <li
        className={`flex items-center p-[0.35rem] h-12 w-full text-[var(--gray-300)] ${
          isCollapsed ? "gap-0" : "gap-2"
        }`}
      >
        <div className={`flex items-center ${isCollapsed ? "gap-0" : "gap-2"}`}>
          <div className="w-8 h-8 rounded-full border border-[var(--gray-200)] flex items-center justify-center p-[1px]">
            <img
              src="https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg"
              alt="usuario"
              className="w-full h-full rounded-full"
            />
          </div>
          <p
            className={`text-[var(--gray-300)] transition-all duration-300 overflow-hidden ${
              isCollapsed
                ? "text-[0px]"
                : isSmallScreen
                ? "text-sm"
                : "text-base"
            }`}
          >
            {greeting}, Eduardo
          </p>
        </div>
      </li>
      <li>
        <Link
          className={`flex items-center ${
            isSmallScreen ? "px-[0.7rem] ml-[0.08rem]" : "p-2"
          }] h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] rounded-md transition-all duration-300 ${
            isCollapsed ? "gap-0" : "gap-2"
          }`}
          to="/sair"
        >
          {isCollapsed ? (
            <SidebarTooltip
              icon={
                <LogOut
                  className="text-red-500"
                  size={isSmallScreen ? 25 : 30}
                />
              }
              isSmallScreen={isSmallScreen}
              label="Sair"
            />
          ) : (
            <LogOut className="text-red-500" size={isSmallScreen ? 25 : 30} />
          )}
          <span
            className={`transition-all duration-300 overflow-hidden text-red-500 ${
              isCollapsed
                ? "text-[0px]"
                : isSmallScreen
                ? "text-sm"
                : "text-base"
            }`}
          >
            Sair
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default SidebarIsLogged;
