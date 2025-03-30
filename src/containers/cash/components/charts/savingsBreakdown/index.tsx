import { BarChart } from "@mantine/charts"
import { Card } from "components/Card"

/******************************************************************
 *  CONSTS                                                        *
 ******************************************************************/
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
    Networth: 5000,
  },
]

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function CashSavingsBreakdown() {
  /*********  RENDER  *********/
  return (
    <Card.Chart className="Cash__chart" heading="Cash Value History">
      <BarChart
        data={data}
        h={"100%"}
        dataKey="name"
        series={[{ name: "Networth", label: "Super", color: "violet.5" }]}
      />
    </Card.Chart>
  )
}
