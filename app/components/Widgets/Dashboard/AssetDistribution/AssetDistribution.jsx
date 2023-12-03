import { Badge, Paper, Stack, Text, Title } from "@mantine/core"
import AssetDistributionChart from "../../../Charts/AssetDistribution"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import { formatter } from "../../../../util"

const AssetDistribution = () => {
  const data = useOutletContext()
  const history = data.history

  const latest = history[history.length - 1]
  const assets = formatter.format(latest.cash + latest.super)

  return (
    <Paper shadow="xl" p="md" withBorder h="100%" miw="500px">
      <Stack align="center" gap="1">
        <Title>Asset Distribution</Title>
        <Text>Total Assets</Text>
        <Badge p={"20"} size="xl" radius="sm" variant="light">
          <Title order={2}>{assets}</Title>
        </Badge>
      </Stack>
      <ClientOnly>{() => <AssetDistributionChart data={latest} />}</ClientOnly>
    </Paper>
  )
}

export default AssetDistribution
