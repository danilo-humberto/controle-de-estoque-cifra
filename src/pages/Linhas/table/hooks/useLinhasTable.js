import { useEffect, useState } from "react";

export const useLinhasTable = (linhas) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [operadora, setOperadora] = useState("");
  const [linhasFiltradas, setLinhasFiltradas] = useState([]);

  useEffect(() => {
    if(!Array.isArray(linhas)) return

    const resultados = linhas.filter((linha) => {
      const matchesSearch = linha.linha
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus = !status || linha.status.toLowerCase() === status.toLowerCase();
      const matchesOperadora = !operadora || linha.operadora.toLowerCase() === operadora.toLowerCase();
      return matchesSearch && matchesStatus && matchesOperadora;
    });
    setLinhasFiltradas(resultados);
  }, [searchTerm, linhas, status, operadora]);

  const resetFilters = () => {
    setSearchTerm("");
    setStatus("");
    setOperadora("");
  };

  return {
    searchTerm,
    setSearchTerm,
    status,
    setStatus,
    operadora,
    setOperadora,
    linhasFiltradas,
    setLinhasFiltradas,
    resetFilters,
  };
};
