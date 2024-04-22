import { Group, Paper, Stack, Title } from "@mantine/core"
import { AreaChart } from "@mantine/charts"
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
  return (
    <Paper shadow="md" p={10} withBorder>
      <Stack>
        <Group justify="space-between">
          <Title>Liabilities History</Title>
          <ChartFilters active={active} setActive={setActive} />
        </Group>
        <AreaChart
          h={300}
          data={data}
          dataKey="date"
          series={[{ name: "debts", color: "red.6" }]}
          tickLine="x"
          curveType="bump"
        />
      </Stack>
    </Paper>
  )
}

export default DebtsHistory
