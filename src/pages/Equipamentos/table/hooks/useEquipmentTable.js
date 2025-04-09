import { useState, useMemo } from "react";
import { getEquipamentos } from "@/services/equipamentoService";

export const useEquipmentTable = () => {
  const [equip, setEquip] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [equipSelect, setEquipSelect] = useState("");

  const buscarEquip = async () => {
    try {
      const dados = await getEquipamentos();
      setEquip(dados.map((item) => ({ ...item, selecionado: false })));
    } catch (error) {
      console.error("Erro ao buscar equipamentos:", error);
    }
  };

  const equipFiltrado = useMemo(() => {
    return equip.filter((item) => {
      const matchesSearch = [
        "equipamento",
        "modelo",
        "imei_serie",
        "imei2",
        "tombamento",
      ].some((key) =>
        item[key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );

      const matchesType = !equipSelect || item.equipamento === equipSelect;

      return matchesSearch && matchesType;
    });
  }, [equip, searchTerm, equipSelect]);

  const tiposEquipamentos = useMemo(() => {
    const tipos = equip.map((item) => item.equipamento);
    return Array.from(new Set(tipos));
  }, [equip]);

  const selecionarLinha = (imei1) => {
    setEquip((prev) =>
      prev.map((item) =>
        item.imei_serie === imei1
          ? { ...item, selecionado: !item.selecionado }
          : item
      )
    );
  };

  const equipamentoSelecionado = useMemo(() => {
    const selecionados = equip.filter((item) => item.selecionado);
    return selecionados;
  }, [equip]);

  return {
    equip,
    equipFiltrado,
    searchTerm,
    setSearchTerm,
    equipSelect,
    setEquipSelect,
    tiposEquipamentos,
    buscarEquip,
    selecionarLinha,
    equipamentoSelecionado
  };
};
