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
import { getEquipamentos } from "@/data/api";

const Equipamentos = () => {
  const chartPizzaData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];

  const chartPizzaConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
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

  const [equip, setEquip] = useState([]);

  useEffect(() => {
    const getAllEquipamentos = async () => {
      const response = await getEquipamentos();
      setEquip(response)
    }

    getAllEquipamentos()
  }, [])

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
          <Card className="w-2/4 bg-[var(--gray-600)] border-none">
            <CardHeader>
              <CardTitle className="text-[var(--gray-300)] xl:text-base 2xl:text-2xl">
                Quantidade por Equipamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartPizzaConfig}
                className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-[var(--gray-300)]"
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
                    className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-[var(--gray-300)]"
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
                <div className="bg-orange-400 w-52 h-52 rounded-full flex items-center justify-center text-[var(--gray-300)] text-5xl font-bold">
                  <div className="bg-[var(--gray-600)] z-10 w-40 h-40 rounded-full flex items-center justify-center">
                    <span>
                      <CountUp 
                        start={0}
                        end={equip.length}
                        duration={2}
                        separator=","
                      />
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-2/4 bg-[var(--gray-600)] border-none">
            <CardHeader>
              <CardTitle className="text-[var(--gray-300)] xl:text-base 2xl:text-2xl">
                Quantidade de Equipamento por Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartPizzaConfig}
                className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-[var(--gray-300)]"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={chartPizzaData}
                    dataKey="visitors"
                    label
                    nameKey="browser"
                  />
                  <ChartLegend
                    content={<ChartLegendContent nameKey="browser" />}
                    className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-[var(--gray-300)]"
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
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
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
