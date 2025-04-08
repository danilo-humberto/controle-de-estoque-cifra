 
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pie,
  PieChart,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { getEquipamentos } from "@/services/equipamentoService";

const Equipamentos = () => {
  const [equipamentos, setEquipamentos] = useState([]);

  useEffect(() => {
    const getAllEquipamentos = async () => {
      const response = await getEquipamentos();
      setEquipamentos(response)
    }

    getAllEquipamentos()
  }, [])

  const filtrarEquipamentos = (tipo) => {
    return equipamentos.filter(item => item.status === "ATIVO" && item.equipamento === tipo).length
  }

  const chartPizzaData = [
    { browser: "Celular", visitors: equipamentos ? filtrarEquipamentos("Celular") : 0, fill: "#4169E1" },
    { browser: "Notebooks", visitors: equipamentos ? filtrarEquipamentos("Notebook") : 0, fill: "#1E90FF" },
    { browser: "Tablet", visitors: equipamentos ? filtrarEquipamentos("Tablet") : 0, fill: "#00BFFF" },
    { browser: "Impressora", visitors: equipamentos ? filtrarEquipamentos("Impressora") : 0, fill: "#191970" },
    { browser: "Desktop", visitors: equipamentos ? filtrarEquipamentos("Desktop") : 0, fill: "#6A5ACD" },
    { browser: "Acessórios", visitors: equipamentos ? filtrarEquipamentos("Acessórios") : 0, fill: "	#ADD8E6" },
  ];

  const chartPizzaConfig = {
    visitors: {
      label: "Visitors",
    },
    Celular: {
      label: "Celular",
    },
    Notebooks: {
      label: "Notebooks",
    },
    Tablet: {
      label: "Tablet",
    },
    Impressora: {
      label: "Impressora",
    },
    Desktop: {
      label: "Desktop",
    },
    Acessórios: {
      label: "Acessórios",
    },
  };

  const chartBarData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

  const chartBarConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <div className="w-4/5 h-[96%] p-4 mx-auto xl:overflow-y-scroll 2xl:overflow-hidden no-scrollbar">
      <div className="flex justify-between items-center text-[var(--gray-300)] h-12">
        <h2 className="xl:text-2xl 2xl:text-3xl font-bold">Dashboard de Equipamentos</h2>
        <Link
          to={"/tableEquipamentos"}
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
              <ChartContainer
                config={chartPizzaConfig}
                className="mx-auto aspect-square max-h-[260px] pb-0 [&_.recharts-pie-label-text]:fill-[var(--gray-300)] mt-2"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={chartPizzaData}
                    dataKey="visitors"
                    label
                    nameKey="browser"
                    className="text-[var(--gray-300)]"
                  />
                  <ChartLegend
                    content={<ChartLegendContent nameKey="browser" />}
                    className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-[var(--gray-300)] mt-1"
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="w-2/4 bg-[var(--gray-600)] border-none 2xl:h-[354px] xl:h-[346px]">
            <CardHeader>
              <CardTitle className="text-[var(--gray-300)] xl:text-base 2xl:text-2xl">
                Quantidade Total de Equipamentos
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[274px]">
              <div className="w-full h-full flex items-center justify-center">
                <div className="bg-blue-600 w-52 h-52 rounded-full flex items-center justify-center text-[var(--gray-300)] text-5xl font-bold">
                  <div className="bg-[var(--gray-600)] z-10 w-40 h-40 rounded-full flex items-center justify-center">
                    <span>
                      <CountUp 
                        start={0}
                        end={equipamentos ? equipamentos.length : 0}
                        duration={2}
                        separator=","
                      />
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-2/4 bg-[var(--gray-600)] border-none 2xl:h-[354px] xl:h-[346px]">
            <CardHeader>
              <CardTitle className="text-[var(--gray-300)] xl:text-base 2xl:text-2xl">
                Quantidade de Equipamento por Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartPizzaConfig}
                className="mx-auto aspect-square max-h-[260px] pb-0 [&_.recharts-pie-label-text]:fill-[var(--gray-300)] mt-2"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={chartPizzaData}
                    dataKey="visitors"
                    label
                    nameKey="browser"
                    className="text-[var(--gray-300)]"
                  />
                  <ChartLegend
                    content={<ChartLegendContent nameKey="browser" />}
                    className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-[var(--gray-300)] mt-1"
                  />
                </PieChart>
              </ChartContainer>
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
              <ChartContainer
                config={chartBarConfig}
                className="h-[18rem] w-full"
              >
                <BarChart
                  accessibilityLayer
                  data={chartBarData}
                  margin={{
                    top: 20,
                  }}
                >
                  <CartesianGrid vertical={false} stroke="var(--gray-500)" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    style={{ fill: "var(--gray-300)" }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="desktop" fill="#4169E1" radius={8}>
                    <LabelList
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                      style={{ fill: "var(--gray-300)" }}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Equipamentos;
