import { Group, Paper, Stack, Title } from "@mantine/core"
import { BarChart } from "@mantine/charts"
import useDebts from "~/utils/hooks/useDebts"

const LiabilitiesBreakdown = () => {
  const { debts } = useDebts()
  return (
    <Paper shadow="md" p={10} withBorder>
      <Stack>
        <Group justify="space-between">
          <Title>Liabilities Breakdown</Title>
        </Group>

        <BarChart
          h={300}
          data={debts}
          type="stacked"
          dataKey="name"
          series={[
            { name: "balance", color: "grape" },
            { name: "balance_paid", color: "indigo" },
          ]}
          tickLine="x"
        />
      </Stack>
    </Paper>
  )
}

export default LiabilitiesBreakdown
