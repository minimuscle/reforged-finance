import { Paper, Stack, Title } from "@mantine/core"
import useHistory from "~/utils/hooks/useHistory"
import { BarChart } from "@mantine/charts"
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

  //add gain to history
  const chartData = history.map((item, key) => {
    return { ...item, gain: gain[key] }
  })

  return (
    <Paper shadow="md" p={10} withBorder>
      <Stack>
        <Title>Savings History</Title>
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
