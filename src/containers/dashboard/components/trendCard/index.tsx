import { Badge } from "@mantine/core"
import { IconArrowUpCircle, IconCircleArrowUp } from "@tabler/icons-react"
import { Card } from "components/Card"
import { Flex } from "components/Flex"
import { Text } from "components/Text"
import Chart from "react-apexcharts"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function TrendCard() {
  const options = {
    chart: {
      id: "apexchart-example",
    },
    sparkline: {
      enabled: true,
    },
    xaxis: {
      categories: [],
    },
  }
  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ]

  return (
    <Card heading="Networth Trend" smallHeader fullWidth>
      <Text size={32}>+$15,204</Text>
      {/* <Chart options={options} series={series} type="area" width={500} height={320} /> */}
      <Flex gap={5} align="center">
        <Badge size="lg" variant="light" color="green" radius="md" leftSection={<IconCircleArrowUp size={20} />}>
          25.35%
        </Badge>
        <Text size="sm" color="gray">
          Since Last Month
        </Text>
      </Flex>
    </Card>
  )
}
