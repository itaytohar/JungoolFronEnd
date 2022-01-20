import React from "react";
import { Cell, Label, Pie, PieChart } from "recharts";
import { CustomLabel } from "./CustomLabel";

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
  const fakeEmptyData = [
    { name: "finished", value: 0 },
    { name: "total", value: 1 },
  ];

  const isEmpty = data[1].value === 0 && data[0].value === 0;
  return (
    <PieChart width={140} height={140}>
      <Pie
        data={isEmpty ? fakeEmptyData : data}
        cx={"50%"}
        cy={"50%"}
        innerRadius={45}
        outerRadius={58}
        paddingAngle={-10}
        cornerRadius={10}
        blendStroke
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
        <Label
          width={50}
          position="center"
          content={<CustomLabel fill={colors[1]} value={innerText} />}
        />
      </Pie>
      <Pie
        data={[{ name: "x", value: 1 }]}
        dataKey="value"
        cx={"50%"}
        cy={"50%"}
        innerRadius={65}
        outerRadius={66}
        fill="#82ca9d"
        blendStroke
      />
    </PieChart>
  );
};
