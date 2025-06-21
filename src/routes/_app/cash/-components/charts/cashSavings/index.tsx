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
    Networth: -2345,
  },
  {
    date: "2024-01",
    Networth: -2355,
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
    Networth: 2423,
  },
  {
    date: "2024-09",
    Networth: -3232,
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
export function CashSavings() {
  /*********  RENDER  *********/
  return (
    <Card.Chart className="Cash__chart" heading="Cash Savings">
      <BarChart
        data={data}
        h={"300px"}
        getBarColor={(value) => (value > 0 ? "green.5" : "red.5")}
        series={[{ name: "Networth", label: "Cash", color: "violet.5" }]}
        dataKey="date"
      />
    </Card.Chart>
  )
}
