import { Group, Paper, Stack, Title } from "@mantine/core"
import { BarChart } from "@mantine/charts"
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

  //add gain to history
  const chartData = data.map((item, key) => {
    return { ...item, gain: gain[key] }
  })

  return (
    <Paper shadow="md" p={10} withBorder>
      <Stack>
        <Group justify="space-between">
          <Title>Savings History</Title>
          <ChartFilters active={active} setActive={setActive} />
        </Group>
        <BarChart
          h={300}
          data={chartData}
          dataKey="date"
          series={[{ name: "gain", color: "green.6" }]}
          tickLine="x"
        />
      </Stack>
    </Paper>
  )
}

export default SavingsHistory
