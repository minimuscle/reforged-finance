import type { PaddingProps } from 'components/Padding/types'
import type { CSSProperties } from 'react'
import styles from './padding.module.css'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Padding: PaddingProps = ({ xy, x, y, top, bottom, left, right, children }) => {
  return (
    <div
      style={
        {
          '--padding-xy': xy && `${xy}px`,
          '--padding-x': x && `${x}px`,
          '--padding-y': y && `${y}px`,
          '--padding-top': top && `${top}px`,
          '--padding-bottom': bottom && `${bottom}px`,
          '--padding-left': left && `${left}px`,
          '--padding-right': right && `${right}px`,
        } as CSSProperties
      }
      className={styles.padding}
    >
      {children}
    </div>
  )
}
