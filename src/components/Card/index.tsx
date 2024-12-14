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
  smallHeader?: boolean
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Card({ children, heading, subtitle, fullWidth, actions, className, smallHeader }: CardProps) {
  return (
    <div className={clsx("Panel", { fullWidth: fullWidth }, className)}>
      {(heading || subtitle || actions) && (
        <Flex direction="row" justify="space-between" className={clsx("Panel__header", { smallHeader: smallHeader })}>
          <Flex direction="column">
            <Text
              as="h2"
              size={smallHeader ? "sm" : "lg"}
              semiBold={!smallHeader}
              color={smallHeader ? "gray" : "default"}
              className="Panel__header--text"
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
