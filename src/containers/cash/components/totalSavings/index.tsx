import { Badge } from "@mantine/core"
import { IconCircleArrowUp } from "@tabler/icons-react"
import { Card } from "components/Card"
import { Text } from "components/Text"

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
      <Text size={36} className="Cash__total">
        <Text color="gray" size={20} className="Cash__totalDollarSign">
          $
        </Text>
        25,945.23
      </Text>
    </Card>
  )
}
