import type { CSSProperties } from 'react'
import type { ReactWithChildren } from '../../utils/types/general'
import styles from './grid.module.css'
/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type Grid = ReactWithChildren<{
  columns: string
  gap?: number
}>

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const InternalGrid: Grid = ({ children, columns, gap }) => {
  /***** RENDER *****/
  return (
    <div className={styles.Grid} style={{ '--columns': columns, '--gap': `${gap}px` } as CSSProperties}>
      {children}
    </div>
  )
}
