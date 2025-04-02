import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const TableEquipamentos = () => {
  const [dados, setDados] = useState([
    {
      id: 1,
      aparelho: "Smartphone",
      modelo: "Samsung Galaxy S21",
      imei1: "123456789012345",
      imei2: "987654321098765",
      tombamento: "001",
    },
    {
      id: 2,
      aparelho: "Notebook",
      modelo: "Lenovo Ideapad",
      imei1: "234567890123456",
      imei2: "876543210987654",
      tombamento: "002",
    },
    {
      id: 3,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      id: 4,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      id: 5,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      id: 6,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      id: 7,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      id: 8,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      id: 9,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      id: 10,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      id: 11,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      id: 12,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
    {
      id: 13,
      aparelho: "Tablet",
      modelo: "iPad Pro",
      imei1: "345678901234567",
      imei2: "765432109876543",
      tombamento: "003",
    },
  ]);

  const selecionarLinha = (id) => {
    setDados((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selecionado: !item.selecionado } : item
      )
    );
  };

  const selecionarTudo = (event) => {
    const marcado = event.target.checked;
    setDados((prev) => prev.map((item) => ({ ...item, selecionado: marcado })));
  };

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
            <div className="flex justify-between pb-4 items-center sticky top-[4.5rem] z-10 bg-[var(--gray-800)]">
              <input
                type="text"
                placeholder="Pesquise ..."
                className="border border-[var(--gray-700)] outline-none bg-transparent p-2 rounded-md w-[25%] text-[var(--gray-300)] text-sm placeholder:text-sm placeholder:text-[var(--gray-500)] focus:border-[var(--gray-500)]"
              />
              <div className="flex items-center gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[var(--gray-900)] hover:bg-[var(--gray-700)] h-[38px] w-[78px] text-[var(--gray-200)]">
                      Editar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
                    <DialogHeader>
                      <DialogTitle className="text-[var(--gray-300)]">
                        Editar linha
                      </DialogTitle>
                      <DialogDescription>
                        Atualize os dados da linha. Clique em salvar quando
                        finalizar.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="w-full h-full flex flex-col gap-3 items-center mt-4 mb-2">
                      <input
                        type="text"
                        placeholder="Aparelho"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Modelo"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="IMEI 1"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="IMEI 2"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Tombamento"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                    </form>
                    <DialogFooter>
                      <Button
                        className="bg-[var(--gray-200)] hover:bg-[var(--gray-300)] text-[var(--gray-700)]"
                        type="submit"
                      >
                        Salvar
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="h-[38px] w-[78px]">
                      Deletar
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
                      <AlertDialogAction>Confirmar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <div className="w-full border rounded-md border-[var(--gray-500)]">
              <table className="w-full">
                <thead className="border-b border-[var(--gray-500)] font-bold text-[var(--gray-400)]" >
                  <tr>
                    <th align="left" className="p-2">
                      <input
                        type="checkbox"
                        onChange={selecionarTudo}
                        checked={dados.every((item) => item.selecionado)}
                        className="
                          appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
                          relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
                          checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
                        "
                      />
                    </th>
                    <th align="left">Aparelho</th>
                    <th align="left">Modelo</th>
                    <th align="left">IMEI 1</th>
                    <th align="left">IMEI 2</th>
                    <th align="left">Tombamento</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--gray-300)]">
                  {dados.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-[var(--gray-500)] text-sm"
                    >
                      <td className="p-2">
                        <input
                          type="checkbox"
                          checked={item.selecionado}
                          onChange={() => selecionarLinha(item.id)}
                          className="
                            appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
                            relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
                            checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
                          "
                        />
                      </td>
                      <td>{item.aparelho}</td>
                      <td>{item.modelo}</td>
                      <td>{item.imei1}</td>
                      <td>{item.imei2}</td>
                      <td>{item.tombamento}</td>
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
