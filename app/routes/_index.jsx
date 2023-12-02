import { Badge, Flex, Grid, Space, Stack, Text, Title } from "@mantine/core"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils/client-only"
import HistoricalNetWorthChart from "../components/Charts/HistoricalNetWorthChart.client"
import { createSupabaseServerClient } from "../util/supabase.server"
import AssetDistribution from "../components/Widgets/Dashboard/AssetDistribution"

export const meta = () => {
  return [{ title: "Dashboard | WealthForge" }]
}

export const loader = async ({ request }) => {
  const supabase = createSupabaseServerClient({ request })
  const { data: history } = await supabase.from("history").select("*")
  return {
    history,
  }
}

export default function Index() {
  return (
    <>
      <Flex gap="md">
        <AssetDistribution />
      </Flex>

      <Grid>
        <Grid.Col span={4} justify="center" align="center"></Grid.Col>
        <Grid.Col span={8} justify="center" align="center">
          <Stack align="center" gap="1">
            <Title>Historical Net Worth</Title>
            <Text>Net Worth In The Last 5 Years</Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  )
}
