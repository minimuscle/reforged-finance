import { Group, Paper, Stack, Title } from "@mantine/core"
import { BarChart } from "@mantine/charts"
import ChartFilters from "~/components/ChartFilters"
import { history } from "~/utils/types"

const CashValueHistory = ({
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
          <Title>Cash Value History</Title>
          <ChartFilters active={active} setActive={setActive} />
        </Group>

        <BarChart
          h={300}
          data={data}
          barChartProps={{ syncId: "cash" }}
          dataKey="date"
          series={[{ name: "cash", color: "violet.6" }]}
          tickLine="x"
        />
      </Stack>
    </Paper>
  )
}

export default CashValueHistory
