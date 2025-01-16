import "./_Dashboard.css"
import { TrendCard } from "containers/dashboard/components/trendCard"
import { Flex } from "components/Flex"
import { Breakdown } from "containers/dashboard/components/breakdown"
import { Networth } from "containers/dashboard/components/networth"
import { AreaChart } from "@mantine/charts"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Dashboard() {
  /*********  RENDER  *********/
  return (
    <>
      <Networth />
      <Flex gap={20} fullWidth>
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </Flex>
      <Breakdown />
    </>
  )
}
