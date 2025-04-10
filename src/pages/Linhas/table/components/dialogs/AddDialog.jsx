import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

const AddDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={openChange}>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-600 h-[38px] text-[var(--gray-200)]">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
        <DialogHeader>
          <DialogTitle className="text-[var(--gray-300)]">
            Adicionar linha
          </DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo e clique em salvar para adicionar uma nova
            linha.
          </DialogDescription>
        </DialogHeader>
        <form className="w-full h-full flex flex-col gap-3 items-center mt-4 mb-2">
          <input
            type="text"
            placeholder="Linha"
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

export default AddDialog;
