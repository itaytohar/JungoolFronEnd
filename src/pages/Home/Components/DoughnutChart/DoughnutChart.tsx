import React from "react";
import { Cell, Label, Pie, PieChart } from "recharts";

type Data = {
  name: string;
  value: number;
};

export interface DoughtnutChartProps {
  data: Data[];
  colors: string[];
}

export const DoughtnutChart: React.FC<DoughtnutChartProps> = ({
  data,
  colors,
}) => {
  const innerText = `${data[1].value}/${data[1].value + data[0].value}`;
  return (
    <PieChart width={120} height={120}>
      <Pie
        data={data}
        cx={60}
        cy={60}
        innerRadius={40}
        outerRadius={55}
        startAngle={360}
        endAngle={0}
        paddingAngle={0}
        blendStroke
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
        <Label fill={colors[0]} width={50} position="center">
          {innerText}
        </Label>
      </Pie>
    </PieChart>
  );
};
