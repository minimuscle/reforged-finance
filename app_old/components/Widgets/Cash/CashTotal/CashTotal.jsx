import { Badge, Paper, Stack, Text, Title } from "@mantine/core"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import { formatter } from "../../../../util"
import CashTotalChart from "../../../Charts/CashTotal"

const CashTotal = () => {
  return (
    <Paper shadow="xl" p="md" withBorder h="500px" w="400px">
      <Stack align="center" gap="1">
        <Title>Accounts Stack</Title>
      </Stack>
      <ClientOnly>{() => <CashTotalChart />}</ClientOnly>
    </Paper>
  )
}

export default CashTotal
