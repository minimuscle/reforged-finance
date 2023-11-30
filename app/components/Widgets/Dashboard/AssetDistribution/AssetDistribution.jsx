import { Badge, Stack, Text, Title } from "@mantine/core"
import NetworthChart from "../../../Charts/NetworthChart"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import { moneyFormatter } from "../../../../util/formatter"

const AssetDistribution = () => {
  const { data } = useLoaderData()
  console.log(data)

  const getNetWorth = () => {
    if (data.length <= 0) return 0
    const latest = data[data.length - 1]
    const netWorth = latest?.cash + latest?.super + latest?.debts

    return moneyFormatter.format(netWorth)
  }

  return (
    <>
      <Stack align="center" gap="1">
        <Title>Asset Distribution</Title>
        <Text>Total Net Worth</Text>
        <Badge p={"20"} size="xl" radius="sm" variant="light">
          <Title order={2}>{getNetWorth()}</Title>
        </Badge>
      </Stack>
      <ClientOnly>{() => <NetworthChart />}</ClientOnly>
    </>
  )
}

export default AssetDistribution
