import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1550 });
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

  return {
    isCollapsed,
    setIsCollapsed,
    isSmallScreen,
    isLoggedIn,
    isLightMode,
    greeting,
    toggleTheme,
    setIsLoggedIn,
  };
};
