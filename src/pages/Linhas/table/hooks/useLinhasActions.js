import { useState } from "react";
import { getLinhas, deleteLinhas } from "@/services/linhasService";
import { toast } from "@/hooks/use-toast";
import { useLinhasTable } from "./useLinhasTable";

export const useLinhasActions = () => {
  const [linhas, setLinhas] = useState([]);
  const {setLinhasFiltradas} = useLinhasTable()

  const buscarLinhas = async () => {
    try {
      const dados = await getLinhas();
      setLinhas(dados);
      setLinhasFiltradas(dados)
    } catch (error) {
      console.error(error);
    }
  };

  const selecionarLinha = (number) => {
    console.log("linha selecionada:", number)
    setLinhas((prev) =>
      prev.map((item) =>
        item.linha === number ? { ...item, selecionado: !item.selecionado } : item
      )
    );
  };

  const linhaSelecionada = () => linhas.filter((item) => item.selecionado);

  const handleDelete = async () => {
    try {
      await deleteLinhas(linhaSelecionada()[0].linha);
      toast({ title: "Linha deletada com sucesso!", variant: "success" });
      buscarLinhas();
    } catch {
      toast({ title: "Erro ao deletar linha!", variant: "error" });
    }
  };

  return {
    linhas,
    setLinhas,
    selecionarLinha,
    linhaSelecionada,
    handleDelete,
    buscarLinhas,
  };
};
