import { Badge, Paper, Stack, Text, Title } from "@mantine/core"
import NetworthChart from "../../../Charts/NetworthChart"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import { formatter, getThisMonthData } from "../../../../util"

const AssetDistribution = () => {
  const { history } = useLoaderData()
  const latest = getThisMonthData(history)

  const getNetWorth = () => {
    const netWorth = latest.cash + latest.super
    return formatter.format(netWorth)
  }

  return (
    <Paper shadow="xl" p="md" withBorder h="100%" miw="500px">
      <Stack align="center" gap="1">
        <Title>Asset Distribution</Title>
        <Text>Total Assets</Text>
        <Badge p={"20"} size="xl" radius="sm" variant="light">
          <Title order={2}>{getNetWorth()}</Title>
        </Badge>
      </Stack>
      <ClientOnly>{() => <NetworthChart data={latest} />}</ClientOnly>
    </Paper>
  )
}

export default AssetDistribution
