import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { useEquipmentTable } from "./hooks/useEquipmentTable";
import TableToolbar from "./components/TableToolbar";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";

const TableEquipamentos = () => {

  const { equipFiltrado, selecionaLinha, buscarEquip } = useEquipmentTable()

  const [equipamento, setEquipamento] = useState("");
  const [modelo, setModelo] = useState("");
  const [imei1, setImei1] = useState("");
  const [imei2, setImei2] = useState("");
  const [tombamento, setTombamento] = useState("");

  useEffect(() => {
    buscarEquip()
  }, [buscarEquip])

  return (
    <div className="w-4/5 h-full p-4 mx-auto overflow-hidden">
      <div className="w-full h-full rounded-md mt-4">
        <Card className="bg-transparent border border-[var(--gray-700)] h-[96%] overflow-auto no-scrollbar">
          <CardHeader className="sticky top-0 z-10 bg-[var(--gray-800)]">
            <CardTitle className="text-[var(--gray-300)]">
              Tabela de Equipamentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TableToolbar 
              equipamento={equipamento}
              imei1={imei1}
              imei2={imei2}
              modelo={modelo}
              tombamento={tombamento}
              setEquipamento={setEquipamento}
              setModelo={setModelo}
              setImei1={setImei1}
              setImei2={setImei2}
              setTombamento={setTombamento}
            />
            <div className="w-full border rounded-md border-[var(--gray-500)]">
              <table className="w-full">
                <TableHeader />
                <TableBody 
                  equipFiltrado={equipFiltrado}
                  toggleSelection={selecionaLinha}
                />
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableEquipamentos;
