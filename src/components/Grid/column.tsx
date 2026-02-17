import type { CSSProperties } from 'react'
import type { ReactWithChildren } from '../../utils/types/general'
import styles from './grid.module.css'
/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type GridColumn = ReactWithChildren<{
  span?: number
}>

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const InternalGridColumn: GridColumn = ({ children, span }) => {
  /***** RENDER *****/
  return (
    <div className={styles.GridColumn} style={{ '--span': `span ${span ?? 1}` } as CSSProperties}>
      {children}
    </div>
  )
}
