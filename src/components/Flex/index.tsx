import type { ReactWithChildren } from 'utils/types'
import styles from './Flex.module.css'

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type Flex = ReactWithChildren<{
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  wrap?: boolean
  className?: string
}>

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Flex: Flex = ({ children, justify, align, direction, gap, wrap, className: otherClassName }) => {
  const className = [
    styles.flex,
    styles[`justify-${justify}`],
    styles[`align-${align}`],
    styles[`direction-${direction}`],
    styles[`gap-${gap}`],
    wrap && styles.wrap,
    otherClassName,
  ]
    .filter(Boolean)
    .join(' ')
  return <div className={className}>{children}</div>
}
