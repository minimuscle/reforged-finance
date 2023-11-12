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

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
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
          <Title>$100,000</Title>
          <NetWorthChart />
        </Grid.Col>
        <Grid.Col span={8} justify="center" align="center">
          <Stack align="center" gap="1">
            <Title>Historical Net Worth</Title>
            <Text>Net Worth In The Last 5 Years</Text>
          </Stack>
          <HistoricalNetWorthChart />
        </Grid.Col>
      </Grid>
    </>
  )
}
