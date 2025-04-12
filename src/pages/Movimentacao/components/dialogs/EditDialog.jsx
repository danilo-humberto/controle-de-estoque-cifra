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
import { Pencil } from "lucide-react";

const EditDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[var(--gray-900)] hover:bg-[var(--gray-700)] h-[38px] text-[var(--gray-200)]">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
        <DialogHeader>
          <DialogTitle className="text-[var(--gray-300)]">
            Editar movimentação
          </DialogTitle>
          <DialogDescription>
            Atualize os dados. Clique em salvar quando finalizar.
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
  );
};

export default EditDialog;
