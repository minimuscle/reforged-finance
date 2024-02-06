import { AreaChart } from "@mantine/charts"
import { useMemo } from "react"
import useHistory from "~/utils/hooks/useHistory"
import { history } from "~/utils/types"

//TODO: Stylize this correctly
const customTooltip = ({ payload, active }: any) => {}

const transformData = (data: history[], filter: string) => {
  //convert date to date object
  data = data.map((item) => {
    const date = new Date(item.date)
    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    })
    return { ...item, date: formattedDate }
  })

  //filter data based on filter
  switch (filter) {
    case "3M":
      data = data.slice(-3)
      break
    case "6M":
      data = data.slice(-6)
      break
    case "1Y":
      data = data.slice(-12)
      break
    case "5Y":
      data = data.slice(-60)
      break
    case "YTD":
      data = data.filter((item) => {
        const date = new Date(item.date)
        const today = new Date()
        return date.getFullYear() === today.getFullYear()
      })
      break
    case "ALL":
      break
  }
  return data
}

const NetWorth = ({ filter }: { filter: string }) => {
  const { history } = useHistory()
  const historyData = useMemo(
    () => transformData(history, filter),
    [history, filter]
  )

  //TODO: Change this to an area chart with the negative red and positive green from Mantine
  return (
    <AreaChart
      h={"80%"}
      data={historyData}
      dataKey="date"
      series={[{ name: "netWorth", color: "red.6" }]}
      curveType="linear"
    />
  )
}

export default NetWorth
