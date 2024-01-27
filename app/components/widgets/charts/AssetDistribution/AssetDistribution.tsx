import { DonutChart } from "@tremor/react"
export default function AssetDistribution() {
  const chartData = [
    {
      label: "Cash",
      value: 5000,
    },
    {
      label: "Super",
      value: 18000,
    },
  ]
  return (
    <DonutChart
      className="h-full"
      data={chartData}
      category="value"
      index="label"
      //valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
  )
}
