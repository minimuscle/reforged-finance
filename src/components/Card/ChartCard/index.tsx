import { Flex } from "components/Flex"
import { Text } from "components/Text"
import "../_Card.css"
import clsx from "clsx"
import { Card, CardProps } from "components/Card"
import { PeriodSelector } from "components/PeriodSelector"
import { usePeriod } from "utils/hooks/usePeriod"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _ChartCard({ children, ...props }: CardProps) {
  /*********  RENDER  *********/
  return (
    <Card smallHeader {...props}>
      <PeriodSelector />
      {children}
    </Card>
  )
}
