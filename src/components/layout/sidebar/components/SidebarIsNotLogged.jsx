import { LogIn, Moon, Sun } from "lucide-react";
import SidebarTooltip from "./SidebarTooltip";

const SidebarIsNotLogged = ({
  isSmallScreen,
  toggleTheme,
  isCollapsed,
  isLightMode,
}) => {
  return (
    <ul className={`flex flex-col ${isSmallScreen ? "gap-1" : "gap-4"}`}>
      <li
        onClick={toggleTheme}
        className={`flex items-center ${
          isSmallScreen ? "px-[0.7rem]" : "p-2"
        } h-12 w-full transition-all duration-300 text-gray-300 hover:bg-gray-500 rounded-md cursor-pointer ${
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
            isCollapsed ? "text-[0px]" : isSmallScreen ? "text-sm" : "text-base"
          }`}
        >
          {isLightMode ? "Modo escuro" : "Modo claro"}
        </span>
      </li>
      <li
        className={`flex items-center ${
          isSmallScreen ? "px-[0.55rem]" : "p-2"
        } h-12 w-full transition-all duration-300 text-gray-300 hover:bg-gray-500 rounded-md ${
          isCollapsed ? "gap-0" : "gap-2"
        }`}
      >
        {isCollapsed ? (
          <SidebarTooltip
            icon={
              <LogIn
                className="text-lime-500 transition-all duration-300"
                size={isSmallScreen ? 25 : 30}
              />
            }
            label="Entrar"
            isSmallScreen={isSmallScreen}
          />
        ) : (
          <LogIn
            className="text-lime-500 transition-all duration-300"
            size={isSmallScreen ? 25 : 30}
          />
        )}
        <span
          className={`text-lime-500 transition-all duration-300 ${
            isCollapsed ? "text-[0px]" : isSmallScreen ? "text-sm" : "text-base"
          }`}
        >
          Entrar
        </span>
      </li>
    </ul>
  );
};

export default SidebarIsNotLogged;
