import { Card } from "components/Card"
import { Flex } from "components/Flex"
import { Text } from "components/Text"
import { Assets } from "routes/_app/_index/-components/breakdown/assets"
import { Liabilities } from "routes/_app/_index/-components/breakdown/liabilities"
import styles from "./_breakdown.module.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Breakdown() {
  /*********  RENDER  *********/
  return (
    <Card
      fullWidth
      className={styles.breakdown}
      heading="Breakdown"
      subtitle="An overview of your assets and liabilities"
    >
      <Flex gap={20}>
        <Flex direction="column" gap={5} fullWidth>
          <Text size="xl">Assets</Text>
          <Assets />
        </Flex>
        <Flex direction="column" gap={5} fullWidth>
          <Text size="xl">Liabilities</Text>
          <Liabilities />
        </Flex>
      </Flex>
    </Card>
  )
}
