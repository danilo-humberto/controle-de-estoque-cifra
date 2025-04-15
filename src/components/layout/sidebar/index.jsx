import React from "react";
import { useSidebar } from "./hooks/useSidebar";
import SidebarHeader from "./components/SidebarHeader";
import SidebarNav from "./components/SidebarNav";

const Sidebar = () => {
  const {
    greeting,
    isCollapsed,
    isLightMode,
    isLoggedIn,
    isSmallScreen,
    setIsCollapsed,
    toggleTheme,
  } = useSidebar();

  return (
    <div
      className={`h-full border-r border-[var(--gray-500)] transition-all ease-in-out duration-300 ${
        isCollapsed ? "w-[80px]" : isSmallScreen ? "w-[250px]" : "w-[300px]"
      }`}
    >
      <div
        className={`flex flex-col p-4 h-full ${
          isSmallScreen ? "gap-8" : "gap-12"
        }`}
      >
        <SidebarHeader
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <SidebarNav
          greeting={greeting}
          isCollapsed={isCollapsed}
          isLightMode={isLightMode}
          isLoggedIn={isLoggedIn}
          isSmallScreen={isSmallScreen}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
};

export default Sidebar;
