import { AreaChart } from "@mantine/charts"
import { useMemo } from "react"
import useHistory from "~/utils/hooks/useHistory"
import { transformData } from "~/utils/utils"

//TODO: Stylize this correctly
const customTooltip = ({ payload, active }: any) => {}

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
