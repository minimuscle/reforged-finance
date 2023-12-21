import { Badge, Paper, Stack, Text, Title } from "@mantine/core"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import { formatter } from "../../../../util"
import HistoricalWorthChart from "../../../Charts/HistoricalWorth"

const HistoricalWorth = () => {
  const data = useOutletContext()
  const history = data.history

  const latest = history[history.length - 1]
  const netWorth = formatter.format(latest.cash + latest.super + latest.debts)

  return (
    <Paper shadow="xl" p="md" withBorder h="500px" w="100%">
      <Stack align="center" gap="1">
        <Title>Historical Net Worth</Title>
        <Text>Current Net Worth</Text>
        <Badge p={"20"} size="xl" radius="sm" variant="light">
          <Title order={2}>{netWorth}</Title>
        </Badge>
      </Stack>
      <ClientOnly>{() => <HistoricalWorthChart />}</ClientOnly>
    </Paper>
  )
}

export default HistoricalWorth
