import { Group, Paper, Stack, Title } from "@mantine/core"
import { LineChart } from "@mantine/charts"
import { useMemo } from "react"
import { history } from "~/utils/types"
import ChartFilters from "~/components/ChartFilters"

const SavingsHistory = ({
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
        return key > 0 ? item.cash - data[key - 1]?.cash : 0
      }),
    [data]
  )

  const percentage = useMemo(
    () =>
      gain.map((item, key) => {
        return key > 0 ? ((item / data[key - 1]?.income) * 100).toFixed(0) : 0
      }),
    [data, gain]
  ) as number[]

  //add gain to history
  const chartData = useMemo(
    () =>
      data.map((item, key) => {
        return { ...item, percentage: percentage[key] }
      }),
    [data, percentage]
  )

  const max = Math.max(...percentage)
  const min = Math.min(...percentage)

  return (
    <Paper shadow="md" p={10} withBorder>
      <Stack>
        <Group justify="space-between">
          <Title>Savings Rate</Title>
          <ChartFilters active={active} setActive={setActive} />
        </Group>
        <LineChart
          h={300}
          data={chartData}
          lineChartProps={{ syncId: "cash" }}
          dataKey="date"
          series={[{ name: "percentage", color: "cyan.6" }]}
          yAxisProps={{ domain: [min, max] }}
          tickLine="x"
        />
      </Stack>
    </Paper>
  )
}

export default SavingsHistory
