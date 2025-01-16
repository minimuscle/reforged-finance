import { AreaChart } from "@mantine/charts"
import { Button, Grid, GridCol } from "@mantine/core"
import { Card } from "components/Card"
import { PeriodSelector } from "components/PeriodSelector"
import { useState } from "react"
import { periods } from "utils/config"
import { filterData } from "utils/methods"
import { Periods } from "utils/types"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Networth() {
  /**********  HOOKS  **********/
  const [period, setPeriod] = useState<Periods>("1Y")

  const data = [
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

  const filteredData = filterData({ data, period })
  console.log(filteredData)

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
            h={300}
            data={filteredData}
            dataKey="date"
            series={[{ name: "Networth", color: "indigo.5" }]}
            curveType="monotone"
          />
        </GridCol>
      </Grid>
    </Card>
  )
}
