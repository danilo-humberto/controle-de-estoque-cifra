import React from "react";
import { useHomeData } from "../../hooks/useHomeData";
import statsItems from "./statsConfig";
import StatItem from "./StatItem";
import { useMediaQuery } from "react-responsive";

const Statistic = () => {
  const { linhas, func, equip, filtrarEquipamentos } = useHomeData();
  const isSmallScreen = useMediaQuery({ maxWidth: 1550 });

  const getQuantidade = (item) => {
    if (item.tipo) return filtrarEquipamentos(equip, item.tipo);
    if (item.key) return item.key === "func" ? func.length : linhas.length;
    return 0;
  };

  return (
    <div className="w-full h-full text-[var(--gray-300)] overflow-hidden">
      <h2 className="text-center text-lg font-semibold">
        Estatística do Estoque
      </h2>
      <div className={`grid justify-items-center mt-8 ${isSmallScreen ? "grid-cols-3" : "grid-cols-2"}`}>
        {statsItems.map((item, index) => (
          <StatItem 
            key={index}
            icon={item.icon}
            label={item.label}
            color={item.color}
            shadow={item.shadow} 
            quantidade={getQuantidade(item)} />
        ))}
      </div>
    </div>
  );
};

export default Statistic;
