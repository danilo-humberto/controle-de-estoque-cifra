import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEquipmentData } from "./hooks/useEquipmentData";
import { TotalCountCard } from "./components/Charts/TotalCountCard";
import { EquipmentPieChart } from "./components/Charts/EquipmentPieChart";
import {
  chartBarConfig,
  chartBarData,
} from "./components/Charts/config/BarChartConfig";
import {
  chartPizzaConfig,
  generatePieData,
} from "./components/Charts/config/equipmentQuantityConfig";
import {
  equipmentByStatusConfig,
  generateEquipmentByStatus,
} from "./components/Charts/config/equipmentByStatsConfig";
import { StatusPieChart } from "./components/Charts/StatusPieChart";
import ManagementBarChart from "./components/Charts/ManagementBarChart";
import { useMediaQuery } from "react-responsive";

const Equipamentos = () => {
  const { totalCount, filtrarEquipamento } = useEquipmentData();
  const pieData = generatePieData(filtrarEquipamento);
  const equipmentByStatus = generateEquipmentByStatus(filtrarEquipamento);
  const isSmallScreen = useMediaQuery({ maxWidth: 1550 });

  return (
    <div
      className={`w-4/5 h-[96%] p-4 mx-auto ${
        isSmallScreen ? "overflow-y-scroll" : "overflow-hidden"
      } no-scrollbar`}
    >
      <div className="flex justify-between items-center text-[var(--gray-300)] h-12">
        <h2 className={`${isSmallScreen ? "text-2xl" : "text-3xl"} font-bold`}>
          Dashboard de Equipamentos
        </h2>
        <Link
          to={"/equipamentos/table"}
          className={`bg-[var(--gray-600)] hover:bg-[var(--gray-500)] ${
            isSmallScreen ? "py-2 text-sm" : "py-3 text-lg"
          } px-4 rounded-md transition-all duration-300`}
        >
          Ver Tabela
        </Link>
      </div>
      <div
        className={`w-full h-full flex flex-col gap-6 ${
          isSmallScreen ? "mt-4" : "mt-8"
        }`}
      >
        <div className="flex gap-4">
          <Card
            className={`w-2/4 bg-[var(--gray-600)] border-none ${
              isSmallScreen ? "h-[346px]" : "h-[354px]"
            }`}
          >
            <CardHeader>
              <CardTitle
                className={`text-[var(--gray-300)] ${
                  isSmallScreen ? "text-xl" : "text-2xl"
                }`}
              >
                Quantidade por Equipamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <EquipmentPieChart data={pieData} config={chartPizzaConfig} />
            </CardContent>
          </Card>

          <Card
            className={`w-2/4 bg-[var(--gray-600)] border-none ${
              isSmallScreen ? "h-[346px]" : "h-[354px]"
            }`}
          >
            <CardHeader>
              <CardTitle
                className={`text-[var(--gray-300)] ${
                  isSmallScreen ? "text-xl" : "text-2xl"
                }`}
              >
                Quantidade Total de Equipamentos
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[274px]">
              <TotalCountCard count={totalCount} />
            </CardContent>
          </Card>

          <Card
            className={`w-2/4 bg-[var(--gray-600)] border-none ${
              isSmallScreen ? "h-[346px]" : "h-[354px]"
            }`}
          >
            <CardHeader>
              <CardTitle
                className={`text-[var(--gray-300)] ${
                  isSmallScreen ? "text-xl" : "text-2xl"
                }`}
              >
                Equipamento por Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StatusPieChart
                config={equipmentByStatusConfig}
                data={equipmentByStatus}
              />
            </CardContent>
          </Card>
        </div>
        <div className="w-full">
          <Card className="w-full h-full bg-[var(--gray-600)] border-none">
            <CardHeader>
              <CardTitle
                className={`text-[var(--gray-300)] ${
                  isSmallScreen ? "text-xl" : "text-2xl"
                }`}
              >
                Quantidade de Equipamentos por Gerência
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ManagementBarChart data={chartBarData} config={chartBarConfig} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Equipamentos;
