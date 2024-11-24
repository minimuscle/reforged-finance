import { Flex } from "components/Flex"
import { Text } from "components/Text"
import "./_Panel.css"
import clsx from "clsx"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface PanelProps {
  children: React.ReactNode
  heading?: string
  subtitle?: string
  actions?: React.ReactNode
  width?: 1 | 2 | 3
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Panel({ children, heading, subtitle, actions, width = 3 }: PanelProps) {
  return (
    <div className={clsx("Panel", `width--${width}`)}>
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
