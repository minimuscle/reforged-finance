import { Card, CardProps } from "components/Card"
import { PeriodSelector } from "components/PeriodSelector"
import styles from "./_ChartCard.module.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _ChartCard({ children, ...props }: CardProps) {
  /*********  RENDER  *********/
  return (
    <Card smallHeader {...props} className="chartCard">
      <PeriodSelector />
      <div className="chartCard__content">{children}</div>
    </Card>
  )
}
