import { Button } from "@mantine/core"
import { Card } from "components/Card"
import { Text } from "components/Text"
import styles from "./_History.module.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function History() {
  /*********  RENDER  *********/
  return (
    <>
      <Card
        fullWidth
        className={styles.history}
        heading="History"
        subtitle="An overview of your progress"
        actions={<Button>Export</Button>}
      >
        <Text>This is the main content section</Text>
      </Card>
    </>
  )
}
