import { PieChart, Pie } from 'recharts';
import { ChartContainer, ChartTooltip, ChartLegend, ChartTooltipContent, ChartLegendContent } from '@/components/ui/chart';

export const EquipmentPieChart = ({ data, config }) => {
  return (
    <ChartContainer 
      config={config} 
      className="mx-auto aspect-square max-h-[260px] pb-0 [&_.recharts-pie-label-text]:fill-[var(--gray-300)] mt-2"
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={data}
          dataKey="visitors"
          nameKey="browser"
          label
          className="text-[var(--gray-300)]"
        />
        <ChartLegend
          content={<ChartLegendContent nameKey="browser" />} 
          className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-[var(--gray-300)] mt-1"
        />
      </PieChart>
    </ChartContainer>
  );
};