import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

const AddDialog = ({
    isCadastroOpen,
    openCadastroChange,
    nome,
    setNome,
    cpf,
    handleCpfChange,
    contrato,
    handleContratoChange,
    regiao,
    handleRegiaoChange,
    gerencia,
    handleGerenciaChange,
    contratosUnicos,
    regioes,
    gerencias,
    handleCadastro
}) => {
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
            Adicionar funcionário
          </DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo e clique em salvar para adicionar um novo
            funcionário.
          </DialogDescription>
        </DialogHeader>
        <form
          method="POST"
          className="w-full h-full flex flex-col gap-3 items-center mt-4 mb-2"
        >
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
          />
          <input
            type="text"
            value={cpf}
            onChange={handleCpfChange}
            placeholder="CPF"
            className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
          />
          <Select value={contrato} onValueChange={handleContratoChange}>
            <SelectTrigger className="w-[80%] bg-transparent border-[var(--gray-600)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
              <SelectValue placeholder="Contrato" />
            </SelectTrigger>
            <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
              <SelectGroup>
                {contratosUnicos.map((contrato) => (
                  <SelectItem
                    key={contrato.id}
                    value={contrato.nome}
                    className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                  >
                    {contrato.nome}
                  </SelectItem>
                ))}
              </SelectGroup>
              <Separator className="bg-[var(--gray-500)]" />
              <SelectGroup>
                <SelectItem
                  value="limpar"
                  disabled={!contrato}
                  className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                    !contrato ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Limpar
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={regiao} onValueChange={handleRegiaoChange}>
            <SelectTrigger className="w-[80%] bg-transparent border-[var(--gray-600)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
              <SelectValue placeholder="Região" />
            </SelectTrigger>
            <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
              <SelectGroup>
                {regioes.map((regiao) => (
                  <SelectItem
                    key={regiao}
                    value={regiao}
                    className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                  >
                    {regiao}
                  </SelectItem>
                ))}
              </SelectGroup>
              <Separator className="bg-[var(--gray-500)]" />
              <SelectGroup>
                <SelectItem
                  value="limpar"
                  disabled={!regiao}
                  className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                    !regiao ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Limpar
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={gerencia} onValueChange={handleGerenciaChange}>
            <SelectTrigger className="w-[80%] bg-transparent border-[var(--gray-600)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
              <SelectValue placeholder="Gerência" />
            </SelectTrigger>
            <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
              <SelectGroup>
                {gerencias.map((gerencia) => (
                  <SelectItem
                    key={gerencia}
                    value={gerencia}
                    className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                  >
                    {gerencia}
                  </SelectItem>
                ))}
              </SelectGroup>
              <Separator className="bg-[var(--gray-500)]" />
              <SelectGroup>
                <SelectItem
                  value="limpar"
                  disabled={!gerencia}
                  className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                    !gerencia ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Limpar
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </form>
        <DialogFooter>
          <Button
            className="bg-[var(--gray-200)] hover:bg-[var(--gray-300)] text-[var(--gray-700)]"
            type="submit"
            onClick={() => handleCadastro(nome, cpf, contrato, regiao, gerencia)}
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddDialog;
