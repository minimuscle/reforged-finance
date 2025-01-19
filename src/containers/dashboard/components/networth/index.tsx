import { AreaChart, BarChart, DonutChart } from "@mantine/charts"
import { Button, Grid, GridCol } from "@mantine/core"
import { Card } from "components/Card"
import { Flex } from "components/Flex"
import { PeriodSelector } from "components/PeriodSelector"
import { useState } from "react"
import { filterData } from "utils/methods"
import { Periods } from "utils/types"
import "./_Networth.css"

const areaData = [
  {
    date: "2023-11",
    Networth: 1000,
  },
  {
    date: "2023-12",
    Networth: 1000,
  },
  {
    date: "2024-01",
    Networth: 1000,
  },
  {
    date: "2024-02",
    Networth: 2000,
  },
  {
    date: "2024-03",
    Networth: 1500,
  },
  {
    date: "2024-04",
    Networth: 1674,
  },
  {
    date: "2024-05",
    Networth: 1352,
  },
  {
    date: "2024-06",
    Networth: 4000,
  },
  {
    date: "2024-07",
    Networth: 3670,
  },
  {
    date: "2024-08",
    Networth: 6334,
  },
  {
    date: "2024-09",
    Networth: 7000,
  },
  {
    date: "2024-10",
    Networth: 6000,
  },
  {
    date: "2024-11",
    Networth: 5500,
  },
  {
    date: "2024-12",
    Networth: 7000,
  },
]

const donutData = [
  {
    name: "Super",
    value: 18463,
    color: "teal.7",
  },
  {
    name: "Cash",
    value: 9464,
    color: "teal.6",
  },
  {
    name: "Investments",
    value: 6584,
    color: "teal.5",
  },
]

const barData = [
  {
    name: "data",
    Super: 18463,
    Cash: 9464,
    Investments: 6584,
  },
]

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Networth() {
  /**********  HOOKS  **********/
  const [period, setPeriod] = useState<Periods>("1Y")

  const filteredData = filterData({ data: areaData, period })

  /*********  RENDER  *********/
  return (
    <Card
      fullWidth
      className="Dashboard__networth"
      heading="Net Worth"
      subtitle="An overview of your progress"
      actions={<Button color="sky">Export</Button>}
    >
      <Grid columns={3}>
        <GridCol span={2}>
          <PeriodSelector onSelect={setPeriod} selectedPeriod={period} />
          <AreaChart
            h={400}
            data={filteredData}
            dataKey="date"
            series={[{ name: "Networth", color: "indigo.5" }]}
            curveType="monotone"
          />
        </GridCol>
        <GridCol span={1}>
          <Flex direction="column" justify="center" align="center" gap={10}>
            <DonutChart className="Networth__donutChart" thickness={50} data={donutData} size={350} />
            <BarChart
              h={100}
              data={barData}
              type="percent"
              dataKey="name"
              orientation="vertical"
              series={[
                { name: "Super", label: "Super", color: "teal.7" },
                { name: "Cash", label: "Cash", color: "teal.6" },
                { name: "Investments", label: "Investments", color: "teal.5" },
              ]}
              tickLine="none"
              gridAxis="none"
              withXAxis={false}
              withYAxis={false}
            />
          </Flex>
        </GridCol>
      </Grid>
    </Card>
  )
}
