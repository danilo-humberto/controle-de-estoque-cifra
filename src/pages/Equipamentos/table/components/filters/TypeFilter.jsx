import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useEquipmentTable } from "../../hooks/useEquipmentTable";

const TypeFilter = () => {
  const { tiposEquipamentos, equipSelect, setEquipSelect } =
    useEquipmentTable();

  const handleEquipChange = (value) => {
    setEquipSelect(value === "limpar" ? "" : value);
  };

  return (
    <Select onValueChange={handleEquipChange} value={equipSelect}>
      <SelectTrigger className="w-[140px] bg-transparent border-[var(--gray-700)] outline-none ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:outline-none focus:border-[var(--gray-500)] data-[placeholder]:text-[var(--gray-400)] text-[var(--gray-300)]">
        <SelectValue placeholder="Equipamento" />
      </SelectTrigger>
      <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
        <SelectGroup>
          {tiposEquipamentos.map((tipo) => (
            <SelectItem
              key={tipo}
              value={tipo}
              className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
            >
              {tipo}
            </SelectItem>
          ))}
        </SelectGroup>
        <Separator className="bg-[var(--gray-500)]" />
        <SelectGroup>
          <SelectItem
            value="limpar"
            disabled={!equipSelect}
            className={`focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer ${
              !equipSelect ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Limpar
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default TypeFilter;
