import { Badge, Paper, Stack, Text, Title } from "@mantine/core"
import AssetDistributionChart from "../../../Charts/AssetDistribution"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import { formatter, getThisMonthData } from "../../../../util"

const AssetDistribution = () => {
  const { history } = useLoaderData()
  const latest = getThisMonthData(history)

  const getAssets = () => {
    const netWorth = latest.cash + latest.super
    return formatter.format(netWorth)
  }

  return (
    <Paper shadow="xl" p="md" withBorder h="100%" miw="500px">
      <Stack align="center" gap="1">
        <Title>Asset Distribution</Title>
        <Text>Total Assets</Text>
        <Badge p={"20"} size="xl" radius="sm" variant="light">
          <Title order={2}>{getAssets()}</Title>
        </Badge>
      </Stack>
      <ClientOnly>{() => <AssetDistributionChart data={latest} />}</ClientOnly>
    </Paper>
  )
}

export default AssetDistribution
