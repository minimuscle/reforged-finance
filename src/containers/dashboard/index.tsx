import { Button } from "@mantine/core"
import { Card } from "components/Card"
import { Text } from "components/Text"
import "./_Dashboard.css"
import { TrendCard } from "containers/dashboard/components/trendCard"
import { Flex } from "components/Flex"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Dashboard() {
  /*********  RENDER  *********/
  return (
    <>
      <Card
        fullWidth
        className="Dashboard__Networth"
        heading="Net Worth"
        subtitle="An overview of your progress"
        actions={<Button color="sky">Export</Button>}
      >
        <Text>This is the main content section</Text>
      </Card>
      <Flex gap={20} fullWidth>
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </Flex>
    </>
  )
}
