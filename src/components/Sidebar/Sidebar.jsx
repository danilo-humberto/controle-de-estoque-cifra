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
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);
  const navigate = useNavigate();

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
              <Link to="/home">
                <House
                  className="sidebar-icon"
                  size={isSmallScreen ? 25 : 30}
                />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/funcionarios">
                <Users className="sidebar-icon" size={isSmallScreen ? 25 : 30} />
                <span>Funcionários</span>
              </Link>
            </li>
            <li>
              <Link to="/equipamentos">
                <Package
                  className="sidebar-icon"
                  size={isSmallScreen ? 25 : 30}
                />
                <span>Equipamentos</span>
              </Link>
            </li>
            <li>
              <Link to="/linhas">
                <Voicemail
                  className="sidebar-icon"
                  size={isSmallScreen ? 25 : 30}
                />
                <span>Linhas</span>
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <ul>
              {isLightMode ? (
                <li onClick={toggleTheme} style={{paddingLeft: "0"}}>
                  <Link>
                    <Moon
                      className="sidebar-icon"
                      size={isSmallScreen ? 25 : 30}
                    />
                    <span>Modo escuro</span>
                  </Link>
                </li>
              ) : (
                <li onClick={toggleTheme} style={{paddingLeft: "0"}}>
                  <Link>
                    <Sun
                      className="sidebar-icon"
                      size={isSmallScreen ? 25 : 30}
                    />
                    <span>Modo claro</span>
                  </Link>
                </li>
              )}
              <li style={{ padding: "0.4rem" }}>
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
                <Link>
                  <LogOut
                    className="sidebar-icon"
                    size={isSmallScreen ? 25 : 30}
                  />
                  <span>Sair</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              {isLightMode ? (
                <li onClick={toggleTheme} style={{paddingLeft: "0"}}>
                  <Link>
                    <Moon
                      className="sidebar-icon"
                      size={isSmallScreen ? 25 : 30}
                    />
                    <span>Modo escuro</span>
                  </Link>
                </li>
              ) : (
                <li onClick={toggleTheme} style={{paddingLeft: "0"}}>
                  <Link>
                    <Sun
                      className="sidebar-icon"
                      size={isSmallScreen ? 25 : 30}
                    />
                    <span>Modo claro</span>
                  </Link>
                </li>
              )}
              <li>
                <Link>
                  <LogIn
                    size={isSmallScreen ? 25 : 30}
                    className="sidebar-icon"
                  />
                  <span>Entrar</span>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
