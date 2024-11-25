import { Flex } from "components/Flex"
import { Text } from "components/Text"
import "./_Card.css"
import clsx from "clsx"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface CardProps {
  children: React.ReactNode
  heading?: string
  subtitle?: string
  actions?: React.ReactNode
  className?: string
  fullWidth?: boolean
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Card({ children, heading, subtitle, fullWidth, actions, className }: CardProps) {
  return (
    <div className={clsx("Panel", { fullWidth: fullWidth }, className)}>
      {(heading || subtitle || actions) && (
        <Flex direction="row" justify="space-between" className="Panel__header">
          <Flex direction="column">
            <Text as="h2" size="lg" semiBold className="Panel__header--text">
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
