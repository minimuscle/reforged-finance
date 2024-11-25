import { Button } from "@mantine/core"
import { Card } from "components/Card"
import { Text } from "components/Text"
import "./_Dashboard.css"

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
        actions={<Button>Export</Button>}
      >
        <Text>This is the main content section</Text>
      </Card>
      <Card>
        <Text>This is the main content section</Text>
      </Card>
    </>
  )
}
