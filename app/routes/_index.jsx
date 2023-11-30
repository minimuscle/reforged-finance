import { Badge, Grid, Space, Stack, Text, Title } from "@mantine/core"
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

  const { data } = await supabase.from("history").select("*")

  return {
    data,
  }
}

export default function Index() {
  const data = useLoaderData()

  return (
    <>
      <Title align="center">Personal Finance Overview</Title>
      <Space h="xl" />

      <Grid>
        <Grid.Col span={4} justify="center" align="center">
          <AssetDistribution />
        </Grid.Col>
        <Grid.Col span={8} justify="center" align="center">
          <Stack align="center" gap="1">
            <Title>Historical Net Worth</Title>
            <Text>Net Worth In The Last 5 Years</Text>
            {data.data.length > 0 && (
              <ClientOnly>
                {() => <HistoricalNetWorthChart data={data.data} />}
              </ClientOnly>
            )}
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  )
}
