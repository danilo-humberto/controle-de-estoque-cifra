import React from "react";
import { useEquipmentTable } from "../hooks/useEquipmentTable";
import SearchFilter from "./filters/SearchFilter";
import TypeFilter from "./filters/TypeFilter";
import { Button } from "@/components/ui/button";
import AddDialog from "./dialogs/AddDialog";
import EditDialog from "./dialogs/EditDialog";
import DeleteDialog from "./dialogs/DeleteDialog";

const TableToolbar = ({
    equipamento,
    imei1,
    imei2,
    modelo,
    tombamento,
    setEquipamento,
    setModelo,
    setImei1,
    setImei2,
    setTombamento
}) => {

    const {setSearchTerm, setEquipSelect} = useEquipmentTable()

  return (
    <div className="flex justify-between pb-4 items-center sticky top-[4.5rem] z-10 bg-[var(--gray-800)]">
      <div className="flex items-center gap-4 w-full">
        <SearchFilter />
        <TypeFilter />

        <Button
          onClick={() => {
            setSearchTerm("");
            setEquipSelect("");
          }}
          className="bg-[var(--gray-900)] hover:bg-[var(--gray-700)] h-[38px] text-[var(--gray-200)]"
        >
          Limpar filtros
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <AddDialog
          equipamento={equipamento}
          imei1={imei1}
          imei2={imei2}
          modelo={modelo}
          setEquipamento={setEquipamento}
          setImei1={setImei1}
          setImei2={setImei2}
          setModelo={setModelo}
          setTombamento={setTombamento}
          tombamento={tombamento}
        />
        <EditDialog
          equipamento={equipamento}
          imei1={imei1}
          imei2={imei2}
          modelo={modelo}
          setEquipamento={setEquipamento}
          setImei1={setImei1}
          setImei2={setImei2}
          setModelo={setModelo}
          setTombamento={setTombamento}
          tombamento={tombamento}
        />
        <DeleteDialog />
      </div>
    </div>
  );
};

export default TableToolbar;
