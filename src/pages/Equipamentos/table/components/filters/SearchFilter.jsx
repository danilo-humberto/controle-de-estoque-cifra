import React from "react";
import { useEquipmentTable } from "../../hooks/useEquipmentTable";

const SearchFilter = () => {

    const {searchTerm, setSearchTerm} = useEquipmentTable()

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Pesquise ..."
      className="border border-[var(--gray-700)] outline-none bg-transparent p-2 rounded-md w-[25%] text-[var(--gray-300)] text-sm placeholder:text-sm placeholder:text-[var(--gray-500)] focus:border-[var(--gray-500)]"
    />
  );
};

export default SearchFilter;
