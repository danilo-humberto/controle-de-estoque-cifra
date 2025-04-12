import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMovimentacaoTable } from "./hooks/useMovimentacaoTable";
import AddDialog from "./components/dialogs/AddDialog";
import EditDialog from "./components/dialogs/EditDialog";
import DeleteDialog from "./components/dialogs/DeleteDialog";
import SearchFilter from "./components/filters/SearchFilter";
import TableHead from "./components/TableHead";
import TableRow from "./components/TableRow";

const Movimentacao = () => {
  const { isCadastroOpen, searchTerm, setIsCadastroOpen, setSearchTerm } =
    useMovimentacaoTable();

  return (
    <div className="w-4/5 h-full p-4 mx-auto overflow-hidden">
      <div className="w-full h-full rounded-md mt-4">
        <Card className="bg-transparent border border-[var(--gray-700)] h-[96%] overflow-auto no-scrollbar">
          <CardHeader className="sticky top-0 z-10 bg-[var(--gray-800)]">
            <CardTitle className="text-[var(--gray-300)]">
              Movimentação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between pb-4 items-center sticky top-[4.5rem] z-10 bg-[var(--gray-800)]">
              <SearchFilter 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <div className="flex items-center gap-4">
                <AddDialog
                  isCadastroOpen={isCadastroOpen}
                  setIsCadastroOpen={setIsCadastroOpen}
                />
                <EditDialog />
                <DeleteDialog />
              </div>
            </div>
            <div className="w-full border rounded-md border-[var(--gray-500)]">
              <table className="w-full">
                <TableHead />
                <tbody className="text-[var(--gray-300)]">
                  <TableRow />
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Movimentacao;
