import { useState, useEffect, useMemo } from 'react';
import { getEquipamentos } from '@/services/equipamentoService';

export const useEquipmentData = () => {
  const [equipamentos, setEquipamentos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEquipamentos();
        setEquipamentos(data);
      } catch (error) {
        console.error("Erro ao buscar equipamentos:", error);
      }
    };

    fetchData();
  }, []);

  const filtrarEquipamento = (tipo) => {
    return equipamentos.filter(item => 
      item.status === "ATIVO" && item.equipamento === tipo
    ).length;
  };

  const totalCount = useMemo(() => equipamentos.length, [equipamentos]);

  return { equipamentos, filtrarEquipamento, totalCount };
};