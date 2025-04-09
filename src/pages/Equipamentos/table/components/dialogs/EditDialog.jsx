import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useEquipmentTable } from "../../hooks/useEquipmentTable";
import { useEquipmentActions } from "../../hooks/useEquipmentActions";

const EditDialog = ({
  equipamento,
  modelo,
  imei1,
  imei2,
  tombamento,
  setEquipamento,
  setModelo,
  setImei1,
  setImei2,
  setTombamento,
}) => {
  const [isEditarOpen, setIsEditarOpen] = useState(false);
  const { equipamentoSelecionado } = useEquipmentTable();
  const {handleEditar} = useEquipmentActions({setIsEditarOpen})

  const openEditarChange = () => {
    if (!equipamentoSelecionado[0]) return;

    setEquipamento(equipamentoSelecionado[0].equipamento);
    setModelo(equipamentoSelecionado[0].modelo);
    setImei1(equipamentoSelecionado[0].imei_serie);
    setImei2(equipamentoSelecionado[0].imei2 || "");
    setTombamento(equipamentoSelecionado[0].tombamento);

    setIsEditarOpen(!isEditarOpen);
  };
  return (
    <Dialog open={isEditarOpen} onOpenChange={openEditarChange}>
      <DialogTrigger asChild>
        <Button className="bg-[var(--gray-900)] hover:bg-[var(--gray-700)] h-[38px] text-[var(--gray-200)]" disabled={!equipamentoSelecionado[0]}>
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
        <DialogHeader>
          <DialogTitle className="text-[var(--gray-300)]">
            Editar equipamento
          </DialogTitle>
          <DialogDescription>
            Atualize os dados do equipamento. Clique em salvar quando finalizar.
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
  );
};

export default EditDialog;
