import { Flex } from "components/Flex"
import { Text } from "components/Text"
import styles, { noSpacing } from "./_Card.module.css"
import clsx from "clsx"
import { _ChartCard } from "components/Card/ChartCard"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
export interface CardProps {
  children: React.ReactNode
  heading?: string
  subtitle?: string
  actions?: React.ReactNode
  className?: string
  fullWidth?: boolean
  smallHeader?: boolean
  noSpacing?: boolean
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
function _Card({ children, heading, subtitle, fullWidth, actions, className, smallHeader }: CardProps) {
  return (
    <div className={clsx(styles.card, { [styles.fullWidth]: fullWidth }, className)}>
      {(heading || subtitle || actions) && (
        <Flex
          direction="row"
          justify="space-between"
          className={clsx(styles.header, { [styles.smallHeader]: smallHeader, [styles.noSpacing]: noSpacing })}
        >
          <Flex direction="column">
            <Text
              as="h2"
              size={smallHeader ? "sm" : "lg"}
              semiBold={!smallHeader}
              color={smallHeader ? "gray" : "default"}
              className={styles.text}
            >
              {heading}
            </Text>
            <Text size="sm" color="gray">
              {subtitle}
            </Text>
          </Flex>
          <Flex direction="row">{actions}</Flex>
        </Flex>
      )}

      {children}
    </div>
  )
}

export const Card = Object.assign(_Card, {
  Chart: _ChartCard,
})
