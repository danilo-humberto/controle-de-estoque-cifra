import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const AddDialog = ({ isCadastroOpen, setIsCadastroOpen }) => {
  return (
    <Dialog open={isCadastroOpen} onOpenChange={setIsCadastroOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-green-500 hover:bg-green-600 h-[38px] text-[var(--gray-200)]"
          onClick={() => setIsCadastroOpen(true)}
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
        <DialogHeader>
          <DialogTitle className="text-[var(--gray-300)]">
            Adicionar movimentação
          </DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo e clique em salvar para adicionar uma nova
            movimentação.
          </DialogDescription>
        </DialogHeader>
        <form
          method="POST"
          className="w-full h-full flex flex-col gap-3 items-center mt-4 mb-2"
        >
          <input
            type="text"
            placeholder="Contrato"
            className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
          />
          <input
            type="text"
            placeholder="CPF"
            className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
          />
          <input
            type="text"
            placeholder="Gerência"
            className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
          />
          <input
            type="text"
            placeholder="Nome"
            className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
          />
          <input
            type="text"
            placeholder="Região"
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
  );
};

export default AddDialog;
