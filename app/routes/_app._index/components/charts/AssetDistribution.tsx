import { DonutChart } from "@mantine/charts"

export default function AssetDistribution() {
  const chartData = [
    {
      name: "Cash",
      value: 5000,
      color: "teal.6",
    },
    {
      name: "Super",
      value: 18000,
      color: "blue.6",
    },
  ]
  return (
    <DonutChart
      data={chartData}
      h={"90%"}
      size={300}
      thickness={50}
      w={"100%"}
      withLabels
      tooltipDataSource="segment"
      chartLabel={"$23,000"}
    />
  )
}
