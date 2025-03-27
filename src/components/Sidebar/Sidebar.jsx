import {
  House,
  LogIn,
  LogOut,
  Moon,
  Package,
  Sun,
  Users,
  Voicemail,
} from "lucide-react";
import React, { useState } from "react";
import "./sidebar.css";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    <div className={`container-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="container-sidebar-content">
        <div
          className="container-sidebar-content-logo"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <img src="/logo.png" alt="logo da cifra" />
          <h1>Controle de Estoque</h1>
        </div>
        <nav className="container-sidebar-content-nav">
          <ul>
            <li>
              <House className="sidebar-icon" size={isSmallScreen ? 25 : 30} />
              <a href="#">Home</a>
            </li>
            <li>
              <Users className="sidebar-icon" size={isSmallScreen ? 25 : 30} />
              <a href="#">Funcionários</a>
            </li>
            <li>
              <Package
                className="sidebar-icon"
                size={isSmallScreen ? 25 : 30}
              />
              <a href="#">Equipamentos</a>
            </li>
            <li>
              <Voicemail
                className="sidebar-icon"
                size={isSmallScreen ? 25 : 30}
              />
              <a href="#">Linhas</a>
            </li>
          </ul>
          {isLoggedIn ? (
            <ul>
              {isLightMode ? (
                <li>
                  <Moon
                    className="sidebar-icon"
                    size={isSmallScreen ? 25 : 30}
                  />
                  <a href="#">Modo escuro</a>
                </li>
              ) : (
                <li>
                  <Sun
                    className="sidebar-icon"
                    size={isSmallScreen ? 25 : 30}
                  />
                  <a href="#">Modo claro</a>
                </li>
              )}
              <li>
                <div className="sidebar-greeting">
                  <div>
                    <img
                      src="https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg"
                      alt="usuario"
                    />
                  </div>
                  <p>{greeting}, Eduardo</p>
                </div>
              </li>
              <li>
                <LogOut
                  className="sidebar-icon"
                  size={isSmallScreen ? 25 : 30}
                />
                <a href="#">Sair</a>
              </li>
            </ul>
          ) : (
            <ul>
              {isLightMode ? (
                <li style={{padding: "0.5rem"}} onClick={toggleTheme}>
                  <Moon
                    className="sidebar-icon"
                    size={isSmallScreen ? 25 : 30}
                  />
                  <a href="#">Modo escuro</a>
                </li>
              ) : (
                <li style={{padding: "0.5rem"}} onClick={toggleTheme}>
                  <Sun
                    className="sidebar-icon"
                    size={isSmallScreen ? 25 : 30}
                  />
                  <a href="#">Modo claro</a>
                </li>
              )}
              <li style={{ padding: "0.5rem" }}>
                <LogIn
                  size={isSmallScreen ? 25 : 30}
                  className="sidebar-icon"
                />
                <a href="#">Entrar</a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
