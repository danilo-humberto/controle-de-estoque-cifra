import { House, LogOut, Package, Users, Voicemail } from "lucide-react";
import React, { useState } from "react";
import "./sidebar.css";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {

  const [isCollapsed, setIsCollapsed] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });

  return (
    <div className={`container-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="container-sidebar-content">
        <div className="container-sidebar-content-logo" onClick={() => setIsCollapsed(!isCollapsed)}>
          <img src="/logo.png" alt="logo da cifra" />
          <h1>Controle de Estoque</h1>
        </div>
        <nav className="container-sidebar-content-nav">
          <ul>
            <li>
              <House className="sidebar-icon" size={isSmallScreen ? 25 : 30}/>
              <a href="#">Home</a>
            </li>
            <li>
              <Users className="sidebar-icon" size={isSmallScreen ? 25 : 30}/>
              <a href="#">Funcionários</a>
            </li>
            <li>
              <Package className="sidebar-icon" size={isSmallScreen ? 25 : 30}/>
              <a href="#">Produtos</a>
            </li>
            <li>
              <Voicemail className="sidebar-icon" size={isSmallScreen ? 25 : 30}/>
              <a href="#">Linhas</a>
            </li>
          </ul>
          <ul>
            <li>
              <LogOut className="sidebar-icon" size={isSmallScreen ? 25 : 30}/>
              <a href="#">Sair</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
