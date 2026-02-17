import type { CSSProperties } from 'react'
import type { ReactWithChildren } from 'utils/types/general'
import styles from './Flex.module.css'

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type Flex = ReactWithChildren<{
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  gap?: number
  wrap?: boolean
  className?: string
  fullWidth?: boolean
  fullHeight?: boolean
}>

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Flex: Flex = ({ children, justify, align, direction, gap, wrap, fullHeight, fullWidth, className: otherClassName }) => {
  const className = [
    styles.flex,
    styles[`justify-${justify}`],
    styles[`align-${align}`],
    styles[`direction-${direction}`],
    gap && styles.gap,
    wrap && styles.wrap,
    fullHeight && styles.fullHeight,
    fullWidth && styles.fullWidth,
    otherClassName,
  ]
    .filter(Boolean)
    .join(' ')

  /***** RENDER *****/
  return (
    <div className={className} style={{ '--gap': `${gap}px` } as CSSProperties}>
      {children}
    </div>
  )
}
