import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const TableEquipamentos = () => {
  const devices = [
    {
      status: "Em Uso",
      aparelho: "Smartphone",
      modelo: "Samsung Galaxy S21",
      imei1: "123456789012345",
      imei2: "987654321098765",
      tombamento: "001",
    },
    {
      status: "Em Manutenção",
      aparelho: "Notebook",
      modelo: "Lenovo Ideapad",
      imei1: "234567890123456",
      imei2: "876543210987654",
      tombamento: "002",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      status: "Disponível",
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
  ];

  return (
    <div className="w-4/5 h-[96%] p-4 mx-auto xl:overflow-y-scroll 2xl:overflow-hidden no-scrollbar">
      <div className="w-full rounded-md mt-4">
        <Card className="bg-[var(--gray-700)] border-none">
          <CardHeader>
            <CardTitle className="text-[var(--gray-300)]">
              Tabela de Equipamentos
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <div className="overflow-y-auto max-h-[500px]">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-[var(--gray-800)]">
                    <th className="border p-2 border-[var(--gray-100)] text-[var(--gray-200)]">
                      Status
                    </th>
                    <th className="border p-2 border-[var(--gray-100)] text-[var(--gray-200)]">
                      Aparelho
                    </th>
                    <th className="border p-2 border-[var(--gray-100)] text-[var(--gray-200)]">
                      Modelo
                    </th>
                    <th className="border p-2 border-[var(--gray-100)] text-[var(--gray-200)]">
                      IMEI 1
                    </th>
                    <th className="border p-2 border-[var(--gray-100)] text-[var(--gray-200)]">
                      IMEI 2
                    </th>
                    <th className="border p-2 border-[var(--gray-100)] text-[var(--gray-200)]">
                      Tombamento
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((device, index) => (
                    <tr
                      key={index}
                      className="bg-[var(--gray-800)] hover:bg-[var(--gray-700)]"
                    >
                      <td className="border border-[var(--gray-100)] p-2 text-[var(--gray-300)]">
                        {device.status}
                      </td>
                      <td className="border border-[var(--gray-100)] p-2 text-[var(--gray-300)]">
                        {device.aparelho}
                      </td>
                      <td className="border border-[var(--gray-100)] p-2 text-[var(--gray-300)]">
                        {device.modelo}
                      </td>
                      <td className="border border-[var(--gray-100)] p-2 text-[var(--gray-300)]">
                        {device.imei1}
                      </td>
                      <td className="border border-[var(--gray-100)] p-2 text-[var(--gray-300)]">
                        {device.imei2}
                      </td>
                      <td className="border border-[var(--gray-100)] p-2 text-[var(--gray-300)]">
                        {device.tombamento}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableEquipamentos;
