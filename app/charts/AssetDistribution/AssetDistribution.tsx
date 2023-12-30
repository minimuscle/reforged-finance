import { Box, Title } from "@mantine/core"
import { useLoaderData } from "@remix-run/react"
import { Card, DonutChart } from "@tremor/react"
import type { loader } from "~/routes/_app/route"
import type { history } from "~/utils/supabase"

export default function AssetDistribution() {
  const data = useLoaderData<typeof loader>()
  const lastMonth = data?.lastMonth as history
  console.log(lastMonth)
  const chartData = [
    {
      label: "Cash",
      value: 5555,
    },
    {
      label: "Super",
      value: 5555,
    },
  ]

  const cities = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1398,
    },
  ]

  return (
    <Box h={"100%"}>
      <Title>Asset Distribution</Title>
      <Card className="max-w-lg">
        <Title>Sales</Title>
        <DonutChart
          className="mt-6"
          data={chartData}
          category="value"
          index="label"
          colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
        />
      </Card>
    </Box>
  )
}
