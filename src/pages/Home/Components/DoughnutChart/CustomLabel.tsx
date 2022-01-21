export function CustomLabel({
  viewBox,
  value,
  fill,
}: {
  value: string;
  fill: string;
  viewBox?: any;
}) {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      fill={fill}
      className="recharts-text recharts-label"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan alignmentBaseline="middle" fontSize="26">
        {value}
      </tspan>
    </text>
  );
}
