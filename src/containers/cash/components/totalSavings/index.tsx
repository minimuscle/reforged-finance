import { Badge } from "@mantine/core"
import { IconCircleArrowUp } from "@tabler/icons-react"
import { Card } from "components/Card"
import { Text } from "components/Text"
import styles from "./totalSavings.module.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function TotalSavings() {
  /*********  RENDER  *********/
  return (
    <Card
      heading="Total Cash Savings"
      smallHeader
      actions={
        <Badge size="lg" variant="light" color="green" radius="sm" leftSection={<IconCircleArrowUp size={16} />}>
          25.35%
        </Badge>
      }
    >
      <Text size={36} className={styles.total}>
        <Text color="gray" size={20} className={styles.dollarSign}>
          $
        </Text>
        25,945.23
      </Text>
    </Card>
  )
}
