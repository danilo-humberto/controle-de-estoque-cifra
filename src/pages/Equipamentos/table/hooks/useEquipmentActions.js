import { useToast } from "@/hooks/use-toast";
import {
  postEquipamentos,
  putEquipamentos,
  deleteEquipamento,
} from "@/services/equipamentoService";
import { useEquipmentTable } from "./useEquipmentTable";

export const useEquipmentActions = (options = {}) => {
  const {
    setIsCadastroOpen = () => {},
    setIsEditarOpen = () => {},
  } = options
  const { toast } = useToast();
  const { buscarEquip } = useEquipmentTable();

  const handleCadastro = async ({
    equipamento,
    modelo,
    imei1,
    imei2,
    tombamento,
  }) => {
    try {
      const formData = new FormData();
      formData.append("equipamento", equipamento);
      formData.append("modelo", modelo);
      formData.append("imei_serie", imei1);
      formData.append("imei2", imei2);
      formData.append("tombamento", tombamento);

      const response = await postEquipamentos(formData);
      toast({
        title: response.mensagem,
        variant: "sucess",
      });

      setIsCadastroOpen(false);
      buscarEquip();
      return true;
    } catch {
      toast({
        title: "Falha ao cadastrar. Tente novamente mais tarde!",
      });
      setIsCadastroOpen(false);
      return false;
    }
  };

  const handleEditar = async ({
    equipamento,
    modelo,
    imei1,
    imei2,
    tombamento,
  }) => {
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
      setIsEditarOpen(false);

      buscarEquip();
      return true;
    } catch {
      toast({
        title: "Falha ao editar. Tente novamente mais tarde!",
      });
      setIsEditarOpen(false);
      return false;
    }
  };

  const handleDelete = async (imei1) => {
    try {
      await deleteEquipamento(imei1);
      toast({
        title: "Deletado com sucesso !",
        variant: "sucess",
      });
      return true;
    } catch {
      toast({
        title: "Erro ao deletar!",
        variant: "sucess",
      });
      return false;
    }
  };

  return { handleCadastro, handleEditar, handleDelete }
};
