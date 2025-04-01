import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

const TableLinhas = () => {
  const [status, setStatus] = useState("");

  const handleSelectChange = (value) => {
    if (value === "limpar") {
      setStatus(undefined);
    } else {
      setStatus(value);
    }
  };

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
              Tabela de Linhas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between pb-4 items-center sticky top-[4.5rem] z-10 bg-[var(--gray-800)]">
              <div className="flex items-center gap-4 w-full">
                <input
                  type="text"
                  placeholder="Pesquise ..."
                  className="border border-[var(--gray-700)] outline-none bg-transparent p-2 rounded-md w-[25%] text-[var(--gray-300)] text-sm placeholder:text-sm placeholder:text-[var(--gray-300)] focus:border-[var(--gray-500)]"
                />
                <Select
                  className="focus:ring-0"
                  onValueChange={handleSelectChange}
                  value={status}
                >
                  <SelectTrigger className="w-[140px] bg-transparent border-[var(--gray-700)] outline-none focus:border-[var(--gray-500)]">
                    <SelectValue placeholder="Status"/>
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
                    <SelectGroup>
                      <SelectItem
                        value="emUso"
                        className="hover:bg-[var(--gray-500)] focus:bg-[var(--gray-500)] cursor-pointer text-[var(--gray-300)] focus:text-[var(--gray-300)]"
                      >
                        Em uso
                      </SelectItem>
                      <SelectItem
                        value="semUso"
                        className="focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer"
                      >
                        Sem uso
                      </SelectItem>
                    </SelectGroup>
                    <Separator className="bg-[var(--gray-500)]"/>
                    <SelectGroup>
                      <SelectItem
                        value="limpar"
                        className="focus:bg-[var(--gray-500)] text-[var(--gray-300)] focus:text-[var(--gray-300)] cursor-pointer"
                      >
                        Limpar
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
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
                        placeholder="Número"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Operadora"
                        className="w-[80%] px-4 py-2 bg-transparent border border-[var(--gray-600)] focus:border-[var(--gray-500)] rounded-md text-[var(--gray-300)] text-sm outline-none placeholder:text-sm"
                      />
                      <input
                        type="text"
                        placeholder="IMEI 1"
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive" className="h-[38px] w-[78px]">
                      Deletar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[var(--gray-800)] border-[var(--gray-400)]">
                    <DialogHeader>
                      <DialogTitle className="text-[var(--gray-300)]">
                        Você tem certeza que quer deletar essa linha ?
                      </DialogTitle>
                      <DialogDescription>
                        Essa ação não pode ser revertida!
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="destructive" type="submit">
                        Deletar
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="w-full border rounded-md border-[var(--gray-500)]">
              <table className="w-full">
                <thead className="border-b border-[var(--gray-500)] font-bold text-[var(--gray-400)]">
                  <tr>
                    <th align="left" className="p-2 w-[40px]">
                      <input
                        type="checkbox"
                        className="
                          appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
                          relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
                          checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
                        "
                      />
                    </th>
                    <th align="left">Número</th>
                    <th align="left">Operadora</th>
                    <th align="left">Status</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--gray-300)]">
                  <tr>
                    <td className="p-2">
                      <input
                        type="checkbox"
                        className="
                          appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
                          relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
                          checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
                        "
                      />
                    </td>
                    <td>Número</td>
                    <td>Operadora</td>
                    <td>Status</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TableLinhas;
