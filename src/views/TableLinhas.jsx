import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { getLinhas } from "@/functions/api";
import React, { useEffect, useState } from "react";

const TableLinhas = () => {
  const [status, setStatus] = useState("");
  const [operadora, setOperadora] = useState("");
  const [linhas, setLinhas] = useState([]);
  const [linhasFiltradas, setLinhasFiltradas] = useState([]);
  const [selectedLinhas, setSelectedLinhas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleStatusChange = (value) => {
    setStatus(value === "limpar" ? "" : value);
  };

  const handleOperadoraChange = (value) => {
    setOperadora(value === "limpar" ? "" : value);
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      // Seleciona todos usando o índice
      setSelectedLinhas(linhas.map((_, index) => index));
    } else {
      setSelectedLinhas([]); // Desmarca todos
    }
  };

  const handleSelectLinha = (index) => {
    setSelectedLinhas((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    const buscarLinhas = async () => {
      try {
        const dados = await getLinhas();
        setLinhas(dados);
        setLinhasFiltradas(dados);
      } catch (error) {
        console.log(error);
      }
    };

    buscarLinhas();
  }, []);

  useEffect(() => {
    const resultados = linhas.filter((linha) => {
      const matchesSearch = linha.linha
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        !status || linha.status.toLowerCase() === status.toLowerCase();
      const matchesOperadora =
        !operadora || linha.operadora.toLowerCase() === operadora.toLowerCase();

      return matchesSearch && matchesStatus && matchesOperadora;
    });
    setLinhasFiltradas(resultados);
  }, [searchTerm, linhas, status, operadora]);

  return (
    <div className="w-4/5 h-full p-4 mx-auto overflow-hidden">
      <div className="w-full h-full rounded-md mt-4">
        <Card className="bg-transparent border border-[var(--gray-700)] h-[96%] overflow-auto no-scrollbar">
          <CardHeader className="sticky top-0 z-10 bg-[var(--gray-800)]">
            <CardTitle className="text-[var(--gray-300)]">
              Tabela de Linhas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between pb-4 items-center sticky top-[4.5rem] z-10 bg-[var(--gray-800)]">
              <div className="flex items-center gap-4 w-full">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setTimeout(() => {
                      setSearchTerm(e.target.value);
                    }, 300);
                  }}
                  placeholder="Pesquise ..."
                  className="border border-[var(--gray-700)] outline-none bg-transparent p-2 rounded-md w-[25%] text-[var(--gray-300)] text-sm placeholder:text-sm placeholder:text-[var(--gray-500)] focus:border-[var(--gray-500)]"
                />
                <Select onValueChange={handleOperadoraChange} value={operadora}>
                  <SelectTrigger className="w-[140px] bg-transparent border-[var(--gray-700)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
                    <SelectValue placeholder="Operadora" />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                    <SelectGroup>
                      <SelectItem
                        value="vivo"
                        className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                      >
                        Vivo
                      </SelectItem>
                      <SelectItem
                        value="claro"
                        className="focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer"
                      >
                        Claro
                      </SelectItem>
                    </SelectGroup>
                    <Separator className="bg-[var(--gray-500)]" />
                    <SelectGroup>
                      <SelectItem
                        value="limpar"
                        disabled={!operadora}
                        className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                          !operadora ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        Limpar
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select onValueChange={handleStatusChange} value={status}>
                  <SelectTrigger className="w-[140px] bg-transparent border-[var(--gray-700)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                    <SelectGroup>
                      <SelectItem
                        value="EM USO"
                        className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                      >
                        Em uso
                      </SelectItem>
                      <SelectItem
                        value="ATIVA"
                        className="focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer"
                      >
                        Ativa
                      </SelectItem>
                      <SelectItem
                        value="INATIVA"
                        className="focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer"
                      >
                        Inativa
                      </SelectItem>
                    </SelectGroup>
                    <Separator className="bg-[var(--gray-500)]" />
                    <SelectGroup>
                      <SelectItem
                        value="limpar"
                        disabled={!status}
                        className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                          !status ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        Limpar
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setStatus("");
                    setOperadora("");
                  }}
                  className="bg-[var(--gray-900)] hover:bg-[var(--gray-700)] h-[38px] text-[var(--gray-200)]"
                >
                  Limpar filtros
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[var(--gray-900)] hover:bg-[var(--gray-700)] h-[38px] w-[78px] text-[var(--gray-200)]">
                      Editar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
                    <DialogHeader>
                      <DialogTitle className="text-[var(--gray-300)]">
                        Editar linha
                      </DialogTitle>
                      <DialogDescription>
                        Atualize os dados da linha. Clique em salvar quando
                        finalizar.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="w-full h-full flex flex-col gap-3 items-center mt-4 mb-2">
                      <input
                        type="text"
                        placeholder="Número"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Operadora"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Status"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                    </form>
                    <DialogFooter>
                      <Button
                        className="bg-[var(--gray-200)] hover:bg-[var(--gray-300)] text-[var(--gray-700)]"
                        type="submit"
                      >
                        Salvar
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="h-[38px] w-[78px]">
                      Deletar
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-[var(--gray-300)]">
                        Você tem certeza que quer apagar essa linha ?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Essa ação não pode ser revertida.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction>Confirmar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <div className="w-full border rounded-md border-[var(--gray-500)]">
              <table className="w-full">
                <thead className="border-b border-[var(--gray-500)] font-bold text-[var(--gray-400)]">
                  <tr>
                    <th align="left" className="p-2 w-[40px]">
                      <input
                        type="checkbox"
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        checked={
                          selectedLinhas.length === linhas.length &&
                          linhas.length > 0
                        }
                        className="
                          appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
                          relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
                          checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
                        "
                      />
                    </th>
                    <th align="left">Linha</th>
                    <th align="left">Operadora</th>
                    <th align="left">Status</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--gray-300)]">
                  {linhasFiltradas && linhasFiltradas.length > 0 ? (
                    linhasFiltradas.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-[var(--gray-500)] text-sm"
                      >
                        <td className="p-2">
                          <input
                            type="checkbox"
                            checked={selectedLinhas.includes(index)}
                            onChange={() => handleSelectLinha(index)}
                            className="
                            appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
                            relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
                            checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
                          "
                          />
                        </td>
                        <td>{item.linha}</td>
                        <td
                          className={`${
                            item.operadora === "VIVO"
                              ? "text-purple-500"
                              : "text-red-500"
                          }`}
                        >
                          {item.operadora}
                        </td>
                        <td>{item.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} align="center" className="text-sm p-2">
                        Nenhuma linha encontrada!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableLinhas;
