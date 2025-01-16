import { AreaChart } from "@mantine/charts"
import { Button, Grid, GridCol } from "@mantine/core"
import { Card } from "components/Card"
import { PeriodSelector } from "components/PeriodSelector"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Networth() {
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
          <PeriodSelector />
          <AreaChart
            h={300}
            data={[
              {
                date: "Jan 24",
                Networth: 1000,
              },
              {
                date: "Feb 24",
                Networth: 2000,
              },
              {
                date: "Mar 24",
                Networth: 1500,
              },
              {
                date: "Apr 24",
                Networth: 3000,
              },
              {
                date: "May 24",
                Networth: 2000,
              },
              {
                date: "Jun 24",
                Networth: 4000,
              },
              {
                date: "Jul 24",
                Networth: 5000,
              },
              {
                date: "Aug 24",
                Networth: 4534,
              },
              {
                date: "Sep 24",
                Networth: 9500,
              },
              {
                date: "Oct 24",
                Networth: 8000,
              },
              {
                date: "Nov 24",
                Networth: 9000,
              },
              {
                date: "Dec 24",
                Networth: 9473,
              },
            ]}
            dataKey="date"
            series={[{ name: "Networth", color: "indigo.5" }]}
            curveType="monotone"
          />
        </GridCol>
      </Grid>
    </Card>
  )
}
