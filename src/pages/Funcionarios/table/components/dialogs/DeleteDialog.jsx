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
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const DeleteDialog = ({
    handleDelete,
    openDeleteChange,
    isDeleteOpen,
    funcionarioSelecionado
}) => {
  return (
    <AlertDialog open={isDeleteOpen} onOpenChange={openDeleteChange}>
      <AlertDialogTrigger asChild>
        <Button disabled={funcionarioSelecionado} variant="destructive" className="h-[38px]">
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
          <AlertDialogAction onClick={handleDelete}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
