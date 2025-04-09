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
import { Plus } from "lucide-react";
import { useState } from "react";
import { useEquipmentActions } from "../../hooks/useEquipmentActions";

const AddDialog = ({
  setEquipamento,
  setModelo,
  setImei1,
  setImei2,
  setTombamento,
  equipamento,
  modelo,
  imei1,
  imei2,
  tombamento
}) => {
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const {handleCadastro} = useEquipmentActions({setIsCadastroOpen})

  const openCadastroChange = () => {
    setIsCadastroOpen(!isCadastroOpen);
    setEquipamento("");
    setModelo("");
    setImei1("");
    setImei2("");
    setTombamento("");
  };

  return (
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
            Preencha os campos abaixo e clique em salvar para adicionar um novo
            equipamento.
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
  );
};

export default AddDialog;
