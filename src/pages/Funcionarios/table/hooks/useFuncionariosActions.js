import { toast } from "@/hooks/use-toast";
import { deleteFuncionarios, postFuncionarios, putFuncionarios } from "@/services/funcionariosService";

export const useFuncionariosActions = ({
    setNome,
    setCpf,
    setContrato,
    setRegiao,
    setGerencia,
    setIsCadastroOpen,
    buscarFunc,
    setIsEditarOpen,
    funcionarioSelecionado
}) => {
  const handleCadastro = async (nome, cpf, contrato, regiao, gerencia) => {
    try {
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("cpf", cpf);
      formData.append("contrato", contrato);
      formData.append("regiao", regiao);
      formData.append("gerencia", gerencia);

      await postFuncionarios(formData);

      toast({
        title: "Funcionário cadastrado com sucesso!",
        variant: "sucess",
      });
      setNome("");
      setCpf("");
      setContrato("");
      setRegiao("");
      setGerencia("");
      setIsCadastroOpen(false);

      buscarFunc();
    } catch {
      toast({
        title: "Erro ao cadastrar funcionário",
      });
      setIsCadastroOpen(false);
    }
  };

  const handleEditar = async (nome, cpf, contrato, regiao, gerencia) => {
      try {
        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("cpf", cpf);
        formData.append("contrato", contrato);
        formData.append("regiao", regiao);
        formData.append("gerencia", gerencia);
  
        const response = await putFuncionarios(formData);
  
        toast({
          title: response.mensagem,
          variant: "sucess",
        });
        setNome("");
        setCpf("");
        setContrato("");
        setRegiao("");
        setGerencia("");
        setIsEditarOpen(false);
  
        buscarFunc();
      } catch {
        toast({
          title: "Erro ao editar funcionário",
          variant: "sucess",
        });
        setIsEditarOpen(false);
      }
    };

    const handleDelete = async () => {
        try {
          await deleteFuncionarios(funcionarioSelecionado[0].cpf);
    
          toast({
            title: "Funcionário deletado com sucesso!",
            variant: "sucess",
          });
          buscarFunc();
        } catch {
          toast({
            title: "Erro ao deletar o funcionário!",
            variant: "sucess",
          });
        }
      };

  return {
    handleCadastro,
    handleEditar,
    handleDelete
  }
};
