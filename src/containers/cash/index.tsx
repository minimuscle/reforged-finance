import { Button } from "@mantine/core"
import { Card } from "components/Card"
import { Text } from "components/Text"
import "./_Cash.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Cash() {
  /*********  RENDER  *********/
  return (
    <>
      <Card fullWidth className="Cash" heading="Cash" subtitle="Cash" actions={<Button>Export</Button>}>
        <Text>This is the main content section</Text>
      </Card>
    </>
  )
}
