import {
  Box,
  Center,
  Container,
  Grid,
  RingProgress,
  SimpleGrid,
  Space,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core"
//import NetWorthChart from "../components/Charts/NetWorthChart"
//import HistoricalNetWorthChart from "../components/Charts/HistoricalNetWorthChart"
import {
  NetWorthChart,
  HistoricalNetWorthChart,
} from "../components/Charts/Charts"
import { Outlet, useLoaderData } from "@remix-run/react"
import { createServerClient, parse, serialize } from "@supabase/ssr"

export const meta = () => {
  return [{ title: "Dashboard | Personal Finance" }]
}

export const loader = async ({ request }) => {
  const cookies = parse(request.headers.get("Cookie") ?? "")
  const headers = new Headers()

  const supabase = createServerClient(
    process.env.DATABASE_URL,
    process.env.DB_KEY,
    {
      cookies: {
        get(key) {
          return cookies[key]
        },
        set(key, value, options) {
          headers.append("Set-Cookie", serialize(key, value, options))
        },
        remove(key, options) {
          headers.append("Set-Cookie", serialize(key, "", options))
        },
      },
    }
  )

  const { data } = await supabase.from("history").select("*")

  return {
    data,
    headers,
  }
}

const formatter = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  minimumFractionDigits: 0,
})

export default function Index() {
  const data = useLoaderData()

  const getNetWorth = () => {
    console.log(data.data)
    if (data.data.length <= 0) return formatter.format(0)
    const latest = data.data[data.data.length - 1]
    const netWorth = latest?.cash + latest?.super + latest?.debts
    return formatter.format(netWorth)
  }

  return (
    <>
      <Title align="center">Personal Finance Overview</Title>
      <Space h="xl" />

      <Grid>
        <Grid.Col span={4} justify="center" align="center">
          <Stack align="center" gap="1">
            <Title>Net Worth</Title>
            <Text>Total Net Worth</Text>
          </Stack>
          <Title>{getNetWorth()}</Title>
          {data.data.length > 0 && <NetWorthChart data={data.data} />}
        </Grid.Col>
        <Grid.Col span={8} justify="center" align="center">
          <Stack align="center" gap="1">
            <Title>Historical Net Worth</Title>
            <Text>Net Worth In The Last 5 Years</Text>
            <Outlet />
          </Stack>
          {data.data.length > 0 && <HistoricalNetWorthChart data={data.data} />}
        </Grid.Col>
      </Grid>
    </>
  )
}
