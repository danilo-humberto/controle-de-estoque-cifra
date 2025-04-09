import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import React from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const ManagementBarChart = ({config, data}) => {
  return (
    <ChartContainer config={config} className="h-[18rem] w-full">
      <BarChart
        accessibilityLayer
        data={data}
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
  );
};

export default ManagementBarChart;
