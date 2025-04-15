import { ChartLine, House, Package, Users, Voicemail } from "lucide-react";
import { Link } from "react-router-dom";
import SidebarIsLogged from "./SidebarIsLogged";
import SidebarIsNotLogged from "./SidebarIsNotLogged";
import SidebarTooltip from "./SidebarTooltip";

const SidebarNav = ({
  isSmallScreen,
  isCollapsed,
  isLoggedIn,
  toggleTheme,
  isLightMode,
  greeting,
}) => {
  return (
    <nav className="flex flex-col justify-between h-full w-full">
      <ul className={`flex flex-col ${isSmallScreen ? "gap-1" : "gap-4"}`}>
        <li>
          <Link
            to="/"
            className={`flex items-center ${
              isSmallScreen ? "px-[0.7rem]" : "p-2"
            } h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] transition-all duration-300 rounded-md ${
              isCollapsed ? "gap-0" : "gap-2"
            }`}
          >
            {isCollapsed ? (
              <SidebarTooltip
                icon={
                  <House
                    className="text-[var(--gray-400)]"
                    size={isSmallScreen ? 25 : 30}
                  />
                }
                label="Home"
                isSmallScreen={isSmallScreen}
              />
            ) : (
              <House
                className="text-[var(--gray-400)]"
                size={isSmallScreen ? 25 : 30}
              />
            )}
            <span
              className={`transition-all duration-300 ${
                isCollapsed
                  ? "text-[0px]"
                  : isSmallScreen
                  ? "text-sm"
                  : "text-base"
              }`}
            >
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/funcionarios"
            className={`flex items-center ${
              isSmallScreen ? "px-[0.7rem]" : "p-2"
            } h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] transition-all duration-300 rounded-md ${
              isCollapsed ? "gap-0" : "gap-2"
            }`}
          >
            {isCollapsed ? (
              <SidebarTooltip
                icon={
                  <Users
                    className="text-[var(--gray-400)]"
                    size={isSmallScreen ? 25 : 30}
                  />
                }
                label="Funcionários"
                isSmallScreen={isSmallScreen}
              />
            ) : (
              <Users
                className="text-[var(--gray-400)]"
                size={isSmallScreen ? 25 : 30}
              />
            )}
            <span
              className={`transition-all duration-300 ${
                isCollapsed
                  ? "text-[0px]"
                  : isSmallScreen
                  ? "text-sm"
                  : "text-base"
              }`}
            >
              Funcionários
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/equipamentos"
            className={`flex items-center ${
              isSmallScreen ? "px-[0.7rem]" : "p-2"
            } h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] transition-all duration-300 rounded-md ${
              isCollapsed ? "gap-0" : "gap-2"
            }`}
          >
            {isCollapsed ? (
              <SidebarTooltip
                icon={
                  <Package
                    className="text-[var(--gray-400)]"
                    size={isSmallScreen ? 25 : 30}
                  />
                }
                label="Equipamentos"
                isSmallScreen={isSmallScreen}
              />
            ) : (
              <Package
                className="text-[var(--gray-400)]"
                size={isSmallScreen ? 25 : 30}
              />
            )}
            <span
              className={`transition-all duration-300 ${
                isCollapsed
                  ? "text-[0px]"
                  : isSmallScreen
                  ? "text-sm"
                  : "text-base"
              }`}
            >
              Equipamentos
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/linhas"
            className={`flex items-center ${
              isSmallScreen ? "px-[0.7rem]" : "p-2"
            } h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] transition-all duration-300 rounded-md ${
              isCollapsed ? "gap-0" : "gap-2"
            }`}
          >
            {isCollapsed ? (
              <SidebarTooltip
                icon={
                  <Voicemail
                    className="text-[var(--gray-400)]"
                    size={isSmallScreen ? 25 : 30}
                  />
                }
                label="Linhas"
                isSmallScreen={isSmallScreen}
              />
            ) : (
              <Voicemail
                className="text-[var(--gray-400)]"
                size={isSmallScreen ? 25 : 30}
              />
            )}
            <span
              className={`transition-all duration-300 ${
                isCollapsed
                  ? "text-[0px]"
                  : isSmallScreen
                  ? "text-sm"
                  : "text-base"
              }`}
            >
              Linhas
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/movimentacao"
            className={`flex items-center ${
              isSmallScreen ? "px-[0.7rem]" : "p-2"
            } h-12 w-full text-[var(--gray-300)] hover:bg-[var(--gray-500)] transition-all duration-300 rounded-md ${
              isCollapsed ? "gap-0" : "gap-2"
            }`}
          >
            {isCollapsed ? (
              <SidebarTooltip
                icon={
                  <ChartLine
                    className="text-[var(--gray-400)]"
                    size={isSmallScreen ? 25 : 30}
                  />
                }
                label="Movimentação"
                isSmallScreen={isSmallScreen}
              />
            ) : (
              <ChartLine
                className="text-[var(--gray-400)]"
                size={isSmallScreen ? 25 : 30}
              />
            )}
            <span
              className={`transition-all duration-300 ${
                isCollapsed
                  ? "text-[0px]"
                  : isSmallScreen
                  ? "text-sm"
                  : "text-base"
              }`}
            >
              Movimentação
            </span>
          </Link>
        </li>
      </ul>
      {isLoggedIn ? (
        <SidebarIsLogged
          greeting={greeting}
          isCollapsed={isCollapsed}
          isLightMode={isLightMode}
          isSmallScreen={isSmallScreen}
          toggleTheme={toggleTheme}
        />
      ) : (
        <SidebarIsNotLogged
          isCollapsed={isCollapsed}
          isLightMode={isLightMode}
          isSmallScreen={isSmallScreen}
          toggleTheme={toggleTheme}
        />
      )}
    </nav>
  );
};

export default SidebarNav;
