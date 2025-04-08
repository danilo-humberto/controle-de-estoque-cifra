import React from "react";
import { useHomeData } from "../../hooks/useHomeData";
import statsItems from "./statsConfig";
import StatItem from "./StatItem";

const Statistic = () => {
  const { linhas, func, equip, filtrarEquipamentos } = useHomeData();

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
      <div className="grid 2xl:grid-cols-2 xl:grid-cols-3 justify-items-center 2xl:mt-8 xl:mt-5">
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
