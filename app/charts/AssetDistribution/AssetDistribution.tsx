import { Box, Group, Paper, Text, Title } from "@mantine/core"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { DonutChart } from "@tremor/react"
import { useState } from "react"
import type { loader } from "~/routes/_app/route"
import type { history } from "~/utils/supabase"

export default function AssetDistribution() {
  const data = useOutletContext<typeof loader>()
  const lastMonth = data.lastMonth as history
  const [value, setValue] = useState(lastMonth.cash + lastMonth.super)

  const label = () => {
    return value
  }

  const chartData = [
    {
      label: "Cash",
      value: lastMonth.cash,
    },
    {
      label: "Super",
      value: lastMonth.super,
    },
  ]

  return (
    <Box h={"100%"}>
      <Title>Asset Distribution</Title>
      <DonutChart
        label={label()}
        className="h-4/5 mt-4"
        data={chartData}
        category="value"
        index="label"
        showAnimation
        //colors={["violet", "indigo", "rose", "cyan", "amber"]}
        valueFormatter={valueFormatter}
        customTooltip={customTooltip}
        onValueChange={(v) => setValue(v)}
      />
    </Box>
  )
}

const valueFormatter = (number: number) =>
  `$${new Intl.NumberFormat("us").format(number).toString()}`

const customTooltip = ({
  payload,
  active,
}: {
  payload: any[]
  active: boolean
}) => {
  const categoryPayload = payload?.[0]
  if (!categoryPayload) return null
  return (
    <Paper shadow="xs" p="xs" withBorder>
      <Group>
        <div
          style={{ height: "25px" }}
          className={`w-2 flex flex-col bg-cyan-500 rounded`}
        />
        <Text>
          {categoryPayload.name}:{" "}
          <Text fw={700} span>
            {valueFormatter(categoryPayload.value)}
          </Text>
        </Text>
      </Group>
    </Paper>
  )
}
