import React from "react";
import { Link } from "react-router-dom";

export const NavCard = ({ span, icon, color, to, isSmallScreen }) => (
  <Link to={to}>
    <div
      className={`${color} w-[200px] ${
        isSmallScreen ? "h-20" : "h-24"
      } rounded-xl cursor-pointer transition-all duration-300`}
    >
      <div className="flex items-center justify-around h-full text-[var(--gray-300)]">
        <span>{span}</span>
        {icon}
      </div>
    </div>
  </Link>
);
