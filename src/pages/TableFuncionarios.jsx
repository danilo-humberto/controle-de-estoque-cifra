import React, { useEffect, useMemo, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { deleteFuncionarios, getFuncionarios, postFuncionarios, putFuncionarios } from "@/services/funcionariosService";
import { getUnidades } from "@/services/unidadeService";

const TableFuncionarios = () => {
  const [func, setFunc] = useState([]);
  const [funcFiltrado, setFuncFiltrado] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const [isEditarOpen, setIsEditarOpen] = useState(false);
  const [unidades, setUnidades] = useState([]);

  // PARA CADASTRAR

  const [contrato, setContrato] = useState("");
  const [cpf, setCpf] = useState("");
  const [gerencia, setGerencia] = useState("");
  const [nome, setNome] = useState("");
  const [regiao, setRegiao] = useState("");

  // PARA FILTRAR
  const [regioes, setRegioes] = useState([]);
  const [gerencias, setGerencias] = useState([]);

  const buscarFunc = async () => {
    try {
      const dados = await getFuncionarios();
      setFunc(dados);
      setFuncFiltrado(dados);
    } catch (error) {
      console.log(error);
    }
  };

  const buscarUnidades = async () => {
    try {
      const dados = await getUnidades();
      setUnidades(dados);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContratoChange = (value) => {
    setContrato(value === "limpar" ? "" : value);
    setRegiao("");
    setGerencia("");
    setGerencias([]);

    const regioesFiltradas = unidades
      .filter((u) => u.nome === value)
      .map((u) => u.nome_regiao);

    const regioesUnicas = [...new Set(regioesFiltradas)];
    setRegioes(regioesUnicas);
  };

  const handleRegiaoChange = (value) => {
    setRegiao(value === "limpar" ? "" : value);
    setGerencia("");

    const gerenciasFiltradas = unidades
      .filter(
        (u) =>
          u.nome.toLowerCase() === contrato.toLowerCase() &&
          u.nome_regiao.toLowerCase() === value.toLowerCase()
      )
      .map((u) => u.nome_gerencia);

    const gerenciasUnicas = [...new Set(gerenciasFiltradas)];
    setGerencias(gerenciasUnicas);
  };

  const handleGerenciaChange = (value) => {
    setGerencia(value === "limpar" ? "" : value);
  };

  const handleCpfChange = (e) => {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    setCpf(valor);
  };

  useEffect(() => {
    buscarFunc();
    buscarUnidades();
  }, []);

  useEffect(() => {
    const result = func.filter((func) => {
      const matchesSearch =
        func.cpf.toLowerCase().includes(searchTerm.toLowerCase()) ||
        func.gerencia.toLowerCase().includes(searchTerm.toLowerCase()) ||
        func.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        func.contrato.toLowerCase().includes(searchTerm.toLowerCase()) ||
        func.regiao.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSearch;
    });
    setFuncFiltrado(result);
  }, [func, searchTerm]);

  const handleCadastro = async () => {
    try {
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("cpf", cpf);
      formData.append("contrato", contrato);
      formData.append("regiao", regiao);
      formData.append("gerencia", gerencia);

      await postFuncionarios(formData);

      toast({
        title: "Funcionário cadastrado com sucesso!",
        variant: "sucess",
      });
      setNome("");
      setCpf("");
      setContrato("");
      setRegiao("");
      setGerencia("");
      setIsCadastroOpen(false);

      buscarFunc();
    } catch {
      toast({
        title: "Erro ao cadastrar funcionário",
      });
      setIsCadastroOpen(false);
    }
  };

  const handleEditar = async () => {
    try {
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("cpf", cpf);
      formData.append("contrato", contrato);
      formData.append("regiao", regiao);
      formData.append("gerencia", gerencia);

      const response = await putFuncionarios(formData);

      toast({
        title: response.mensagem,
        variant: "sucess",
      });
      setNome("");
      setCpf("");
      setContrato("");
      setRegiao("");
      setGerencia("");
      setIsEditarOpen(false);

      buscarFunc();
    } catch {
      toast({
        title: "Erro ao editar funcionário",
        variant: "sucess"
      });
      setIsEditarOpen(false);
    }
  };

  const contratosUnicos = Array.from(
    new Map(
      unidades.map((u) => [u.nome, { id: u.contratos_id, nome: u.nome }])
    ).values()
  );

  const openCadastroChange = () => {
    setIsCadastroOpen(!isCadastroOpen);
    setNome("");
    setCpf("");
    setContrato("");
    setRegiao("");
    setGerencia("");
  };

  const selecionarLinha = (cpf) => {
    setFunc((prev) =>
      prev.map((item) =>
        item.cpf === cpf ? { ...item, selecionado: !item.selecionado } : item
      )
    );
  };

  const funcionarioSelecionado = useMemo(() => {
    const selecionados = func.filter((item) => item.selecionado);
    return selecionados;
  }, [func]);

  const openEditarChange = () => {
    if (!funcionarioSelecionado[0]) return;

    const contratoSelecionado = funcionarioSelecionado[0].contrato;
    const regiaoSelecionada = funcionarioSelecionado[0].regiao;
    const gerenciaSelecionada = funcionarioSelecionado[0].gerencia;

    setContrato(contratoSelecionado);
    setGerencia(gerenciaSelecionada);
    setRegiao(regiaoSelecionada);
    setNome(funcionarioSelecionado[0].nome);
    setCpf(funcionarioSelecionado[0].cpf);

    const regioesFiltradas = unidades
      .filter((u) => u.nome === contratoSelecionado)
      .map((u) => u.nome_regiao);
    const regioesUnicas = [...new Set(regioesFiltradas)];
    setRegioes(regioesUnicas);

    const gerenciasFiltradas = unidades
      .filter(
        (u) =>
          u.nome.toLowerCase() === contratoSelecionado.toLowerCase() &&
          u.nome_regiao.toLowerCase() === regiaoSelecionada.toLowerCase()
      )
      .map((u) => u.nome_gerencia);
    const gerenciasUnicas = [...new Set(gerenciasFiltradas)];
    setGerencias(gerenciasUnicas);

    setIsEditarOpen(!isEditarOpen);
  };

  const handleDelete = async () => {
    try {
      await deleteFuncionarios(funcionarioSelecionado[0].cpf);

      toast({
        title: "Funcionário deletado com sucesso!",
        variant: "sucess",
      })
      buscarFunc()
    } catch {
      toast({
        title: "Erro ao deletar o funcionário!",
        variant: "sucess",
      })
    }
  }

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
                <Dialog open={isCadastroOpen} onOpenChange={openCadastroChange}>
                  <DialogTrigger asChild>
                    <Button className="bg-green-500 hover:bg-green-600 h-[38px] text-[var(--gray-200)]">
                      <Plus />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
                    <DialogHeader>
                      <DialogTitle className="text-[var(--gray-300)]">
                        Adicionar funcionário
                      </DialogTitle>
                      <DialogDescription>
                        Preencha os campos abaixo e clique em salvar para
                        adicionar um novo funcionário.
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      method="POST"
                      className="w-full h-full flex flex-col gap-3 items-center mt-4 mb-2"
                    >
                      <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        value={cpf}
                        onChange={handleCpfChange}
                        placeholder="CPF"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <Select
                        value={contrato}
                        onValueChange={handleContratoChange}
                      >
                        <SelectTrigger className="w-[80%] bg-transparent border-[var(--gray-600)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
                          <SelectValue placeholder="Contrato" />
                        </SelectTrigger>
                        <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                          <SelectGroup>
                            {contratosUnicos.map((contrato) => (
                              <SelectItem
                                key={contrato.id}
                                value={contrato.nome}
                                className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                              >
                                {contrato.nome}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                          <Separator className="bg-[var(--gray-500)]" />
                          <SelectGroup>
                            <SelectItem
                              value="limpar"
                              disabled={!contrato}
                              className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                                !contrato ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            >
                              Limpar
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select value={regiao} onValueChange={handleRegiaoChange}>
                        <SelectTrigger className="w-[80%] bg-transparent border-[var(--gray-600)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
                          <SelectValue placeholder="Região" />
                        </SelectTrigger>
                        <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                          <SelectGroup>
                            {regioes.map((regiao) => (
                              <SelectItem
                                key={regiao}
                                value={regiao}
                                className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                              >
                                {regiao}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                          <Separator className="bg-[var(--gray-500)]" />
                          <SelectGroup>
                            <SelectItem
                              value="limpar"
                              disabled={!regiao}
                              className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                                !regiao ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            >
                              Limpar
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select
                        value={gerencia}
                        onValueChange={handleGerenciaChange}
                      >
                        <SelectTrigger className="w-[80%] bg-transparent border-[var(--gray-600)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
                          <SelectValue placeholder="Gerência" />
                        </SelectTrigger>
                        <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                          <SelectGroup>
                            {gerencias.map((gerencia) => (
                              <SelectItem
                                key={gerencia}
                                value={gerencia}
                                className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                              >
                                {gerencia}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                          <Separator className="bg-[var(--gray-500)]" />
                          <SelectGroup>
                            <SelectItem
                              value="limpar"
                              disabled={!gerencia}
                              className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                                !gerencia ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            >
                              Limpar
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </form>
                    <DialogFooter>
                      <Button
                        className="bg-[var(--gray-200)] hover:bg-[var(--gray-300)] text-[var(--gray-700)]"
                        type="submit"
                        onClick={handleCadastro}
                      >
                        Salvar
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog open={isEditarOpen} onOpenChange={openEditarChange}>
                  <DialogTrigger asChild>
                    <Button className="bg-[var(--gray-900)] hover:bg-[var(--gray-700)] h-[38px] text-[var(--gray-200)]">
                      <Pencil />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
                    <DialogHeader>
                      <DialogTitle className="text-[var(--gray-300)]">
                        Editar funcionário
                      </DialogTitle>
                      <DialogDescription>
                        Atualize os dados do funcionário. Clique em salvar
                        quando finalizar.
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      method="POST"
                      className="w-full h-full flex flex-col gap-3 items-center mt-4 mb-2"
                    >
                      <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="CPF"
                        disabled
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm opacity-50 cursor-not-allowed"
                      />
                      <Select
                        value={contrato}
                        onValueChange={handleContratoChange}
                      >
                        <SelectTrigger className="w-[80%] bg-transparent border-[var(--gray-600)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
                          <SelectValue placeholder="Contrato" />
                        </SelectTrigger>
                        <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                          <SelectGroup>
                            {contratosUnicos.map((contrato) => (
                              <SelectItem
                                key={contrato.id}
                                value={contrato.nome}
                                className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                              >
                                {contrato.nome}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                          <Separator className="bg-[var(--gray-500)]" />
                          <SelectGroup>
                            <SelectItem
                              value="limpar"
                              disabled={!contrato}
                              className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                                !contrato ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            >
                              Limpar
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select value={regiao} onValueChange={handleRegiaoChange}>
                        <SelectTrigger className="w-[80%] bg-transparent border-[var(--gray-600)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
                          <SelectValue placeholder="Região" />
                        </SelectTrigger>
                        <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                          <SelectGroup>
                            {regioes.map((regiao) => (
                              <SelectItem
                                key={regiao}
                                value={regiao}
                                className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                              >
                                {regiao}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                          <Separator className="bg-[var(--gray-500)]" />
                          <SelectGroup>
                            <SelectItem
                              value="limpar"
                              disabled={!regiao}
                              className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                                !regiao ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            >
                              Limpar
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select
                        value={gerencia}
                        onValueChange={handleGerenciaChange}
                      >
                        <SelectTrigger className="w-[80%] bg-transparent border-[var(--gray-600)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
                          <SelectValue placeholder="Gerência" />
                        </SelectTrigger>
                        <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                          <SelectGroup>
                            {gerencias.map((gerencia) => (
                              <SelectItem
                                key={gerencia}
                                value={gerencia}
                                className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                              >
                                {gerencia}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                          <Separator className="bg-[var(--gray-500)]" />
                          <SelectGroup>
                            <SelectItem
                              value="limpar"
                              disabled={!gerencia}
                              className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                                !gerencia ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            >
                              Limpar
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </form>
                    <DialogFooter>
                      <Button
                        className="bg-[var(--gray-200)] hover:bg-[var(--gray-300)] text-[var(--gray-700)]"
                        type="submit"
                        onClick={handleEditar}
                      >
                        Salvar
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="h-[38px]">
                      <Trash2 />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-[var(--gray-300)]">
                        Você tem certeza que quer apagar esse funcionário ?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Essa ação não pode ser revertida.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDelete}>Confirmar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <div className="w-full border rounded-md border-[var(--gray-500)]">
              <table className="w-full">
                <thead className="border-b border-[var(--gray-500)] font-bold text-[var(--gray-400)]">
                  <tr>
                    <th align="left" className="w-[40px] opacity-0 p-2">
                      x
                    </th>
                    <th align="left" className="w-[350px]">
                      Contrato
                    </th>
                    <th align="left" className="w-[300px]">
                      Região
                    </th>
                    <th align="left" className="w-[250px]">
                      Gerência
                    </th>
                    <th align="left">Nome</th>
                    <th align="left" className="w-[200px]">
                      CPF
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--gray-300)]">
                  {funcFiltrado && funcFiltrado.length > 0 ? (
                    funcFiltrado.map((item) => (
                      <tr key={item.id} className="text-sm">
                        <td className="p-2" align="center">
                          <input
                            type="checkbox"
                            checked={!!item.selecionado}
                            onChange={() => selecionarLinha(item.cpf)}
                            className="
                          appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
                          relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
                          checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
                        "
                          />
                        </td>
                        <td>{item.contrato}</td>
                        <td>{item.regiao}</td>
                        <td>{item.gerencia}</td>
                        <td>{item.nome}</td>
                        <td>{item.cpf}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} align="center" className="text-sm p-2">
                        Nenhum funcionário encontrado!
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

export default TableFuncionarios;
