import { getEquipamentos } from "@/services/equipamentoService";
import { getFuncionarios } from "@/services/funcionariosService";
import { getLinhas } from "@/services/linhasService";
import { useState, useEffect } from "react";

export const useHomeData = () => {
  const [data, setData] = useState({
    linhas: [],
    func: [],
    equip: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [linhas, func, equip] = await Promise.all([
          getLinhas(),
          getFuncionarios(),
          getEquipamentos(),
        ]);
        setData({ linhas, func, equip });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const filtrarEquipamentos = (equip, tipo) => {
    return equip.filter(
      (item) => item.status === "ATIVO" && item.equipamento === tipo
    ).length;
  };

  return { ...data, filtrarEquipamentos };
};
