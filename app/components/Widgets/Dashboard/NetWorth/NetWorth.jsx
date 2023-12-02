import { Badge, Paper, Stack, Text, Title } from "@mantine/core"
import NetWorthChart from "../../../Charts/NetWorth"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import { formatter, getThisMonthData } from "../../../../util"

const NetWorth = () => {
  const { history } = useLoaderData()

  const getNetWorth = () => {
    const latest = getThisMonthData(history)
    const netWorth = latest.cash + latest.super + latest.debts
    return formatter.format(netWorth)
  }

  return (
    <Paper shadow="xl" p="md" withBorder h="100%" miw="800px">
      <Stack align="center" gap="1">
        <Title>Historical Net Worth</Title>
        <Text>Current Net Worth</Text>
        <Badge p={"20"} size="xl" radius="sm" variant="light">
          <Title order={2}>{getNetWorth()}</Title>
        </Badge>
      </Stack>
      <ClientOnly>{() => <NetWorthChart data={history} />}</ClientOnly>
    </Paper>
  )
}

export default NetWorth
