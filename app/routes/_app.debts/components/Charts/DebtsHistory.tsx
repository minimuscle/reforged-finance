import { Group, Paper, Stack, Title } from "@mantine/core"
import { BarChart } from "@mantine/charts"
import { useMemo } from "react"
import { history } from "~/utils/types"
import ChartFilters from "~/components/ChartFilters"

const DebtsHistory = ({
  data,
  active,
  setActive,
}: {
  data: history[]
  active: string
  setActive: React.Dispatch<React.SetStateAction<string>>
}) => {
  const gain = useMemo(
    () =>
      data.map((item, key) => {
        return key > 0
          ? Math.round(
              (item.super - data[key - 1]?.super + Number.EPSILON) * 100
            ) / 100
          : 0
      }),
    [data]
  )

  //add gain to history
  const chartData = useMemo(
    () =>
      data.map((item, key) => {
        if (gain[key] >= 0) {
          return { ...item, positive: gain[key] }
        } else {
          return { ...item, negative: gain[key] }
        }
      }),
    [data, gain]
  )

  return (
    <Paper shadow="md" p={10} withBorder>
      <Stack>
        <Group justify="space-between">
          <Title>Liabilities History</Title>
          <ChartFilters active={active} setActive={setActive} />
        </Group>
        <BarChart
          h={300}
          type="stacked"
          data={chartData.slice(1)}
          dataKey="date"
          barChartProps={{ syncId: "super" }}
          series={[
            { name: "positive", color: "green.6" },
            { name: "negative", color: "red.6" },
          ]}
          tickLine="x"
        />
      </Stack>
    </Paper>
  )
}

export default DebtsHistory
