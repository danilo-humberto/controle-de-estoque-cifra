import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useLinhasActions } from "../../hooks/useLinhasActions";

const DeleteDialog = () => {

    const {handleDelete, linhaSelecionada} = useLinhasActions()

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="h-[38px]" disabled={!linhaSelecionada[0]}>
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[var(--gray-300)]">
            Você tem certeza que quer apagar essa linha ?
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
