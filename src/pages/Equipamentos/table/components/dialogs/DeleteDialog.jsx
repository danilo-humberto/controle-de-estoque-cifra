import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useEquipmentActions } from "../../hooks/useEquipmentActions";
import { useEquipmentTable } from "../../hooks/useEquipmentTable";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const DeleteDialog = () => {

    const {handleDelete} = useEquipmentActions()
    const {equipamentoSelecionado} = useEquipmentTable()

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="h-[38px]" disabled={!equipamentoSelecionado[0]}>
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
          <AlertDialogAction onClick={() => handleDelete(equipamentoSelecionado[0]?.imei_serie)}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
