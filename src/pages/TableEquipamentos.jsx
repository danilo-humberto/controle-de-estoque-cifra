import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { deleteEquipamento, getEquipamentos, postEquipamentos, putEquipamentos } from "@/services/equipamentoService";

const TableEquipamentos = () => {
  const [equip, setEquip] = useState([]);
  const [equipFiltrado, setEquipFiltrado] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const [isEditarOpen, setIsEditarOpen] = useState(false);
  const { toast } = useToast();
  const [equipSelect, setEquipSelect] = useState("");

  // PARA CADASTRAR

  const [equipamento, setEquipamento] = useState("");
  const [modelo, setModelo] = useState("");
  const [imei1, setImei1] = useState("");
  const [imei2, setImei2] = useState("");
  const [tombamento, setTombamento] = useState("");

  const selecionarLinha = (imei1) => {
    setEquip((prev) =>
      prev.map((item) =>
        item.imei_serie === imei1
          ? { ...item, selecionado: !item.selecionado }
          : item
      )
    );
  };

  const buscarEquip = async () => {
    try {
      const dados = await getEquipamentos();
      setEquip(dados);
      setEquipFiltrado(dados);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEquipChange = (value) => {
    setEquipSelect(value === "limpar" ? "" : value);
  };

  useEffect(() => {
    buscarEquip();
  }, []);

  useEffect(() => {
    const result = equip.filter((equip) => {
      const matchesSearch =
        equip.equipamento.toLowerCase().includes(searchTerm.toLowerCase()) ||
        equip.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        equip.imei_serie.toLowerCase().includes(searchTerm.toLowerCase()) ||
        equip.tombamento.toLowerCase().includes(searchTerm.toLowerCase()) ||
        equip.imei2.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesEquip =
        !equipSelect ||
        equip.equipamento.toLowerCase() === equipSelect.toLowerCase();

      return matchesSearch && matchesEquip;
    });

    setEquipFiltrado(result);
  }, [equip, equipSelect, searchTerm]);

  const handleCadastro = async () => {
    try {
      const formData = new FormData();
      formData.append("equipamento", equipamento);
      formData.append("modelo", modelo);
      formData.append("imei_serie", imei1);
      formData.append("imei2", imei2);
      formData.append("tombamento", tombamento);

      const response = await postEquipamentos(formData);
      console.log(response);
      toast({
        title: response.mensagem,
        variant: "sucess",
      });
      setEquipamento("");
      setModelo("");
      setImei1("");
      setImei2("");
      setTombamento("");
      setIsCadastroOpen(false);

      buscarEquip();
    } catch {
      toast({
        title: "Falha ao cadastrar. Tente novamente mais tarde!",
      });
      setIsCadastroOpen(false);
    }
  };

  const handleEditar = async () => {
    try {
      const formData = new FormData();
      formData.append("equipamento", equipamento);
      formData.append("modelo", modelo);
      formData.append("imei_serie", imei1);
      formData.append("imei2", imei2);
      formData.append("tombamento", tombamento);

      const response = await putEquipamentos(formData);
      console.log(response);
      toast({
        title: response.mensagem,
        variant: "sucess",
      });
      setEquipamento("");
      setModelo("");
      setImei1("");
      setImei2("");
      setTombamento("");
      setIsEditarOpen(false);

      buscarEquip();
    } catch {
      setIsEditarOpen(false);
      toast({
        title: "Falha ao editar. Tente novamente mais tarde!",
      });
    }
  };

  const openCadastroChange = () => {
    setIsCadastroOpen(!isCadastroOpen);
    setEquipamento("");
    setModelo("");
    setImei1("");
    setImei2("");
    setTombamento("");
  };

  const equipamentoSelecionado = useMemo(() => {
    const selecionados = equip.filter((item) => item.selecionado);
    return selecionados;
  }, [equip]);

  const handleDelete = async () => {
    try {
      await deleteEquipamento(equipamentoSelecionado[0].imei_serie);

      buscarEquip();
    } catch {
      console.log("erro");
    }
  };

  const openEditarChange = () => {
    if (!equipamentoSelecionado[0]) return;

    setEquipamento(equipamentoSelecionado[0].equipamento);
    setModelo(equipamentoSelecionado[0].modelo);
    setImei1(equipamentoSelecionado[0].imei_serie);
    setImei2(equipamentoSelecionado[0].imei2 || "");
    setTombamento(equipamentoSelecionado[0].tombamento);

    setIsEditarOpen(!isEditarOpen);
  };

  const tiposEquipamentos = useMemo(() => {
    const tipos = equip.map((item) => item.equipamento);
    return Array.from(new Set(tipos));
  }, [equip]);

  return (
    <div className="w-4/5 h-full p-4 mx-auto overflow-hidden">
      <div className="w-full h-full rounded-md mt-4">
        <Card className="bg-transparent border border-[var(--gray-700)] h-[96%] overflow-auto no-scrollbar">
          <CardHeader className="sticky top-0 z-10 bg-[var(--gray-800)]">
            <CardTitle className="text-[var(--gray-300)]">
              Tabela de Equipamentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between pb-4 items-center sticky top-[4.5rem] z-10 bg-[var(--gray-800)]">
              <div className="flex items-center gap-4 w-full">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Pesquise ..."
                  className="border border-[var(--gray-700)] outline-none bg-transparent p-2 rounded-md w-[25%] text-[var(--gray-300)] text-sm placeholder:text-sm placeholder:text-[var(--gray-500)] focus:border-[var(--gray-500)]"
                />
                <Select onValueChange={handleEquipChange} value={equipSelect}>
                  <SelectTrigger className="w-[140px] bg-transparent border-[var(--gray-700)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
                    <SelectValue placeholder="Equipamento" />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                    <SelectGroup>
                      {tiposEquipamentos.map((tipo) => (
                        <SelectItem
                          key={tipo}
                          value={tipo}
                          className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                        >
                          {tipo}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                    <Separator className="bg-[var(--gray-500)]" />
                    <SelectGroup>
                      <SelectItem
                        value="limpar"
                        disabled={!equipSelect}
                        className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                          !equipSelect ? "opacity-50 cursor-not-allowed" : ""
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
                    setEquipSelect("");
                  }}
                  className="bg-[var(--gray-900)] hover:bg-[var(--gray-700)] h-[38px] text-[var(--gray-200)]"
                >
                  Limpar filtros
                </Button>
              </div>
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
                        Adicionar equipamento
                      </DialogTitle>
                      <DialogDescription>
                        Preencha os campos abaixo e clique em salvar para
                        adicionar um novo equipamento.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="w-full h-full flex flex-col gap-3 items-center mt-4 mb-2">
                      <input
                        type="text"
                        value={equipamento}
                        onChange={(e) => setEquipamento(e.target.value)}
                        placeholder="Equipamento"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                        placeholder="Modelo"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        value={imei1}
                        onChange={(e) => setImei1(e.target.value)}
                        placeholder="IMEI 1 / Série"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        value={imei2}
                        onChange={(e) => setImei2(e.target.value)}
                        placeholder="IMEI 2"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        value={tombamento}
                        onChange={(e) => setTombamento(e.target.value)}
                        placeholder="Tombamento"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
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
                        Editar equipamento
                      </DialogTitle>
                      <DialogDescription>
                        Atualize os dados do equipamento. Clique em salvar
                        quando finalizar.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="w-full h-full flex flex-col gap-3 items-center mt-4 mb-2">
                      <input
                        type="text"
                        placeholder="Equipamento"
                        value={equipamento}
                        onChange={(e) => setEquipamento(e.target.value)}
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Modelo"
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="IMEI 1"
                        disabled
                        value={imei1}
                        onChange={(e) => setImei1(e.target.value)}
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm opacity-50 cursor-not-allowed"
                      />
                      <input
                        type="text"
                        placeholder="IMEI 2"
                        value={imei2}
                        onChange={(e) => setImei2(e.target.value)}
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Tombamento"
                        value={tombamento}
                        onChange={(e) => setTombamento(e.target.value)}
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
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
                        Você tem certeza que quer apagar esse equipamento ?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Essa ação não pode ser revertida.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDelete}>
                        Confirmar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <div className="w-full border rounded-md border-[var(--gray-500)]">
              <table className="w-full">
                <thead className="border-b border-[var(--gray-500)] font-bold text-[var(--gray-400)]">
                  <tr>
                    <th align="left" className="w-[30px] p-2 opacity-0">x</th>
                    <th align="left" className="w-[180px]">
                      Equipamento
                    </th>
                    <th align="left" className="w-[300px]">
                      Modelo
                    </th>
                    <th align="left" className="w-[210px]">
                      IMEI 1 / Série
                    </th>
                    <th align="left">IMEI 2</th>
                    <th align="left" className="w-[180px]">
                      Tombamento
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[var(--gray-300)]">
                  {equipFiltrado && equipFiltrado.length > 0 ? (
                    equipFiltrado.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-[var(--gray-500)] text-sm"
                      >
                        <td align="center" className="w-[50px] p-2">
                          <input
                            type="checkbox"
                            checked={!!item.selecionado}
                            onChange={() => selecionarLinha(item.imei_serie)}
                            className="
                              appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
                              relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
                              checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
                            "
                          />
                        </td>
                        <td>{item.equipamento}</td>
                        <td>{item.modelo}</td>
                        <td>{item.imei_serie}</td>
                        <td>{item.imei2}</td>
                        <td>{item.tombamento}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} align="center" className="text-sm p-2">
                        Nenhum equipamento encontrado!
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

export default TableEquipamentos;
