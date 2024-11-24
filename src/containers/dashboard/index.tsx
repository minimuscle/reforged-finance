import { Button } from "@mantine/core"
import { Panel } from "components/Panel"
import { Text } from "components/Text"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Dashboard() {
  return (
    <Panel heading="Net Worth" subtitle="An overview of your progress" actions={<Button>Export</Button>}>
      <Text>This is the main content section</Text>
    </Panel>
  )
}
