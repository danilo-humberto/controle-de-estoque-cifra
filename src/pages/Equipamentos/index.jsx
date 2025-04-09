 
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEquipmentData } from "./hooks/useEquipmentData";
import { TotalCountCard } from "./components/Charts/TotalCountCard";
import { EquipmentPieChart } from "./components/Charts/EquipmentPieChart";
import {chartBarConfig, chartBarData} from './components/Charts/config/BarChartConfig'
import {chartPizzaConfig, generatePieData} from './components/Charts/config/equipmentQuantityConfig'
import {equipmentByStatusConfig, generateEquipmentByStatus} from './components/Charts/config/equipmentByStatsConfig'
import { StatusPieChart } from "./components/Charts/StatusPieChart";
import ManagementBarChart from "./components/Charts/ManagementBarChart";

const Equipamentos = () => {
  const {totalCount, filtrarEquipamento} = useEquipmentData()
  const pieData = generatePieData(filtrarEquipamento)
  const equipmentByStatus = generateEquipmentByStatus(filtrarEquipamento)

  return (
    <div className="w-4/5 h-[96%] p-4 mx-auto xl:overflow-y-scroll 2xl:overflow-hidden no-scrollbar">
      <div className="flex justify-between items-center text-[var(--gray-300)] h-12">
        <h2 className="xl:text-2xl 2xl:text-3xl font-bold">Dashboard de Equipamentos</h2>
        <Link
          to={"/equipamentos/table"}
          className="bg-[var(--gray-600)] hover:bg-[var(--gray-500)] xl:py-2 2xl:py-3 px-4 rounded-md transition-all duration-300 xl:text-sm 2xl:text-lg"
        >
          Ver Tabela
        </Link>
      </div>
      <div className="w-full h-full flex flex-col gap-6 xl:mt-4 2xl:mt-8">
        <div className="flex gap-4">
          <Card className="w-2/4 bg-[var(--gray-600)] border-none 2xl:h-[354px] xl:h-[346px]">
            <CardHeader>
              <CardTitle className="text-[var(--gray-300)] xl:text-base 2xl:text-2xl">
                Quantidade por Equipamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <EquipmentPieChart data={pieData} config={chartPizzaConfig}/>
            </CardContent>
          </Card>

          <Card className="w-2/4 bg-[var(--gray-600)] border-none 2xl:h-[354px] xl:h-[346px]">
            <CardHeader>
              <CardTitle className="text-[var(--gray-300)] xl:text-base 2xl:text-2xl">
                Quantidade Total de Equipamentos
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[274px]">
              <TotalCountCard count={totalCount} />
            </CardContent>
          </Card>

          <Card className="w-2/4 bg-[var(--gray-600)] border-none 2xl:h-[354px] xl:h-[346px]">
            <CardHeader>
              <CardTitle className="text-[var(--gray-300)] xl:text-base 2xl:text-2xl">
                Quantidade de Equipamento por Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StatusPieChart config={equipmentByStatusConfig} data={equipmentByStatus}/>
            </CardContent>
          </Card>
        </div>
        <div className="w-full">
          <Card className="w-full h-full bg-[var(--gray-600)] border-none">
            <CardHeader>
              <CardTitle className="text-[var(--gray-300)]  xl:text-base 2xl:text-2xl">
                Quantidade de Equipamentos por Gerência
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ManagementBarChart data={chartBarData} config={chartBarConfig}/>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Equipamentos;
