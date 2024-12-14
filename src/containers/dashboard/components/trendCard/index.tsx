import { Card } from "components/Card"
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
    <Card heading="Networth Trend" smallHeader>
      <Text size="xxxl">+$15,204</Text>
      {/* <Chart options={options} series={series} type="area" width={500} height={320} /> */}
    </Card>
  )
}
