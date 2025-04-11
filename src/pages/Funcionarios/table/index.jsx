import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFuncionariosTable } from "./hooks/useFuncionariosTable";
import { useFuncionariosActions } from "./hooks/useFuncionariosActions";
import AddDialog from "./components/dialogs/AddDialog";
import EditDialog from "./components/dialogs/EditDialog";
import DeleteDialog from "./components/dialogs/DeleteDialog";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";

const TableFuncionarios = () => {
  const {
    searchTerm,
    setSearchTerm,
    isCadastroOpen,
    openCadastroChange,
    nome,
    setNome,
    cpf,
    handleCpfChange,
    contrato,
    contratosUnicos,
    regiao,
    regioes,
    handleRegiaoChange,
    gerencia,
    handleGerenciaChange,
    gerencias,
    funcFiltrado,
    selecionarLinha,
    openEditarChange,
    handleContratoChange,
    isEditarOpen,
    setCpf,
    setContrato,
    setRegiao,
    setGerencia,
    setIsCadastroOpen,
    buscarFunc,
    setIsEditarOpen,
    funcionarioSelecionado,
    isDeleteOpen,
    openDeleteChange,
  } = useFuncionariosTable();

  const {handleCadastro, handleEditar, handleDelete} = useFuncionariosActions({setContrato, setCpf, setGerencia, setIsCadastroOpen, setNome, setRegiao, setIsEditarOpen, buscarFunc, funcionarioSelecionado})

  return (
    <div className="w-4/5 h-full p-4 mx-auto overflow-hidden">
      <div className="w-full h-full rounded-md mt-4">
        <Card className="bg-transparent border border-[var(--gray-700)] h-[96%] overflow-auto no-scrollbar">
          <CardHeader className="sticky top-0 z-10 bg-[var(--gray-800)]">
            <CardTitle className="text-[var(--gray-300)]">
              Tabela de Funcionários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between pb-4 items-center sticky top-[4.5rem] z-10 bg-[var(--gray-800)]">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquise ..."
                className="border border-[var(--gray-700)] outline-none bg-transparent p-2 rounded-md w-[25%] text-[var(--gray-300)] text-sm placeholder:text-sm placeholder:text-[var(--gray-500)] focus:border-[var(--gray-500)]"
              />
              <div className="flex items-center gap-4">
                <AddDialog 
                  contrato={contrato}
                  contratosUnicos={contratosUnicos}
                  cpf={cpf}
                  gerencia={gerencia}
                  gerencias={gerencias}
                  handleCadastro={handleCadastro}
                  handleContratoChange={handleContratoChange}
                  handleCpfChange={handleCpfChange}
                  handleGerenciaChange={handleGerenciaChange}
                  handleRegiaoChange={handleRegiaoChange}
                  isCadastroOpen={isCadastroOpen}
                  nome={nome}
                  openCadastroChange={openCadastroChange}
                  regiao={regiao}
                  regioes={regioes}
                  setNome={setNome}
                />
                
                <EditDialog 
                  contrato={contrato}
                  contratosUnicos={contratosUnicos}
                  cpf={cpf}
                  gerencia={gerencia}
                  gerencias={gerencias}
                  handleContratoChange={handleContratoChange}
                  handleCpfChange={handleCpfChange}
                  handleEditar={handleEditar}
                  handleGerenciaChange={handleGerenciaChange}
                  handleRegiaoChange={handleRegiaoChange}
                  isEditarOpen={isEditarOpen}
                  nome={nome}
                  openEditarChange={openEditarChange}
                  regiao={regiao}
                  regioes={regioes}
                  setNome={setNome}
                  funcionarioSelecionado={funcionarioSelecionado}
                />

                <DeleteDialog 
                  handleDelete={handleDelete}
                  isDeleteOpen={isDeleteOpen}
                  funcionarioSelecionado={funcionarioSelecionado}
                  openDeleteChange={openDeleteChange}
                />
                
              </div>
            </div>
            <div className="w-full border rounded-md border-[var(--gray-500)]">
              <table className="w-full">
                <TableHeader />
                <tbody className="text-[var(--gray-300)]">
                  <TableBody func={funcFiltrado} selecionarLinha={selecionarLinha} />
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableFuncionarios;
