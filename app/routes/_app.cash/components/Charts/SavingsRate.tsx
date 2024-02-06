import { Paper, Stack, Title } from "@mantine/core"
import useHistory from "~/utils/hooks/useHistory"
import { LineChart } from "@mantine/charts"
import { useMemo } from "react"

const SavingsHistory = () => {
  const { history } = useHistory()
  const gain = useMemo(
    () =>
      history.map((item, key) => {
        return key > 0 ? item.cash - history[key - 1]?.cash : 0
      }),
    [history]
  )

  const percentage = useMemo(
    () =>
      gain.map((item, key) => {
        return key > 0 ? +((item / history[key - 1]?.cash) * 100).toFixed(0) : 0
      }),
    [history, gain]
  )

  //add gain to history
  const chartData = history.map((item, key) => {
    return { ...item, percentage: percentage[key] }
  })

  const max = Math.max(...percentage)
  const min = Math.min(...percentage)

  return (
    <Paper shadow="md" p={10} withBorder>
      <Stack>
        <Title>Savings Rate</Title>
        <LineChart
          h={300}
          data={chartData}
          dataKey="date"
          series={[{ name: "percentage", color: "red.6" }]}
          yAxisProps={{ domain: [min, max] }}
          tickLine="x"
        />
      </Stack>
    </Paper>
  )
}

export default SavingsHistory
