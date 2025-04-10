import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const Filtros = ({
  searchTerm,
  setSearchTerm,
  operadora,
  setOperadora,
  status,
  setStatus,
  resetFilters,
}) => {
  const handleStatusChange = (value) => {
    setStatus(value === "limpar" ? "" : value);
  };

  const handleOperadoraChange = (value) => {
    setOperadora(value === "limpar" ? "" : value);
  };
  return (
    <div className="flex gap-4 flex-1">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pesquise ..."
        className="border border-[var(--gray-700)] outline-none bg-transparent p-2 rounded-md w-[25%] text-[var(--gray-300)] text-sm placeholder:text-sm placeholder:text-[var(--gray-500)] focus:border-[var(--gray-500)]"
      />
      <Select onValueChange={handleOperadoraChange} value={operadora}>
        <SelectTrigger className="w-[140px] bg-transparent border-[var(--gray-700)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
          <SelectValue placeholder="Operadora" />
        </SelectTrigger>
        <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
          <SelectGroup>
            <SelectItem
              value="vivo"
              className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
            >
              Vivo
            </SelectItem>
            <SelectItem
              value="claro"
              className="focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer"
            >
              Claro
            </SelectItem>
          </SelectGroup>
          <Separator className="bg-[var(--gray-500)]" />
          <SelectGroup>
            <SelectItem
              value="limpar"
              disabled={!operadora}
              className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                !operadora ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Limpar
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={handleStatusChange} value={status}>
        <SelectTrigger className="w-[140px] bg-transparent border-[var(--gray-700)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
          <SelectGroup>
            <SelectItem
              value="EM USO"
              className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
            >
              Em uso
            </SelectItem>
            <SelectItem
              value="ATIVA"
              className="focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer"
            >
              Ativa
            </SelectItem>
            <SelectItem
              value="INATIVA"
              className="focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer"
            >
              Inativa
            </SelectItem>
          </SelectGroup>
          <Separator className="bg-[var(--gray-500)]" />
          <SelectGroup>
            <SelectItem
              value="limpar"
              disabled={!status}
              className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
                !status ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Limpar
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        onClick={() => {
          resetFilters()
        }}
        className="bg-[var(--gray-900)] hover:bg-[var(--gray-700)] h-[38px] text-[var(--gray-200)]"
      >
        Limpar filtros
      </Button>
    </div>
  );
};

export default Filtros;
