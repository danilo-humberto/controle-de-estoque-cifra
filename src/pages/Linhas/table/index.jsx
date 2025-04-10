import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect } from "react";
import TableHeader from "./components/TableHeader";
import TableToolbar from "./components/TableToolbar";
import { useLinhasTable } from "./hooks/useLinhasTable";
import { useLinhasActions } from "./hooks/useLinhasActions";
import TableBody from "./components/TableBody";

const TableLinhas = () => {

  const {buscarLinhas, selecionarLinha, linhas} = useLinhasActions()
  const {operadora, resetFilters, searchTerm, setOperadora, setSearchTerm, setStatus, status, linhasFiltradas} = useLinhasTable(linhas)
  
  useEffect(() => {
    buscarLinhas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <TableToolbar 
                  operadora={operadora}
                  resetFilters={resetFilters}
                  searchTerm={searchTerm}
                  setOperadora={setOperadora}
                  setSearchTerm={setSearchTerm}
                  setStatus={setStatus}
                  status={status}
                />
              </div>
            </div>
            <div className="w-full border rounded-md border-[var(--gray-500)] ">
              <table className="w-full">
                <TableHeader />
                <tbody className="text-[var(--gray-300)]">
                  <TableBody linhas={linhasFiltradas} onSelect={selecionarLinha}/>
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
