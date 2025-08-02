import { Sparkline } from "@mantine/charts"
import { Badge, NumberFormatter } from "@mantine/core"
import { IconCircleArrowDown, IconCircleArrowUp } from "@tabler/icons-react"
import { Card } from "components/Card"
import { Flex } from "components/Flex"
import { Text } from "components/Text"
import React from "react"
import styles from "./_trendCard.module.css"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type TrendCard = React.FC<{
  onTrack?: boolean
  value: number
  percentage: number
  period?: "Since Last Month"
  title: string
  chartData: number[]
}>

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const TrendCard: TrendCard = ({ onTrack, title, value, chartData, percentage, period = "Since Last Month" }) => {
  /*********  RENDER  *********/
  return (
    <Card
      heading={title}
      smallHeader
      fullWidth
      actions={
        typeof onTrack === "boolean" &&
        (onTrack ? (
          <Badge size="md" variant="light" color="green" radius="sm">
            ON TRACK
          </Badge>
        ) : (
          <Badge size="md" variant="light" color="red" radius="sm">
            OFF TRACK
          </Badge>
        ))
      }
    >
      <Flex justify="space-between" align="center" className={styles.content} gap={10}>
        <div className={styles.value}>
          <Text size={32}>
            <NumberFormatter value={value} prefix={value >= 0 ? "+$" : "$"} thousandSeparator />
          </Text>
        </div>
        <div className={styles.chart}>
          <Sparkline
            h={50}
            w={"100%"}
            data={chartData}
            curveType="monotone"
            color="violet"
            fillOpacity={0.6}
            strokeWidth={2}
          />
        </div>
      </Flex>

      <Flex gap={5} align="center">
        <Badge
          size="lg"
          variant="light"
          color={percentage >= 0 ? "green" : "red"}
          radius="sm"
          leftSection={percentage >= 0 ? <IconCircleArrowUp size={16} /> : <IconCircleArrowDown size={16} />}
        >
          <NumberFormatter
            value={percentage}
            prefix={percentage >= 0 ? "+" : ""}
            suffix="%"
            decimalScale={2}
            fixedDecimalScale
          />
        </Badge>
        <Text size="sm" color="gray">
          {period}
        </Text>
      </Flex>
    </Card>
  )
}
