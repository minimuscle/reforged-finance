import { Badge } from "@mantine/core"
import { IconCircleArrowUp } from "@tabler/icons-react"
import { Card } from "components/Card"
import { Flex } from "components/Flex"
import { Text } from "components/Text"
import { Sparkline } from "@mantine/charts"
import "./_trendCard.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function TrendCard() {
  /*********  RENDER  *********/
  return (
    <Card
      heading="Networth Trend"
      smallHeader
      fullWidth
      actions={
        <Badge size="md" variant="light" color="green" radius="sm">
          ON TRACK
        </Badge>
      }
    >
      <Flex justify="space-between" align="center" className="TrendCard__content" gap={10}>
        <div className="TrendCard__content__value">
          <Text size={32}>+$1,034,232</Text>
        </div>
        <div className="TrendCard__content__chart">
          <Sparkline
            h={50}
            w={"100%"}
            data={[10, 20, 40, 20, 40, 10, 50]}
            curveType="monotone"
            color="violet"
            fillOpacity={0.6}
            strokeWidth={2}
          />
        </div>
      </Flex>

      <Flex gap={5} align="center">
        <Badge size="lg" variant="light" color="green" radius="sm" leftSection={<IconCircleArrowUp size={16} />}>
          25.35%
        </Badge>
        <Text size="sm" color="gray">
          Since Last Month
        </Text>
      </Flex>
    </Card>
  )
}
