import type { MarginProps } from 'components/Margin/types'
import type { CSSProperties } from 'react'
import styles from './margin.module.css'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Margin: MarginProps = ({ xy, x, y, top, bottom, left, right, children }) => {
  return (
    <div
      style={
        {
          '--margin-xy': xy && `${xy}px`,
          '--margin-x': x && `${x}px`,
          '--margin-y': y && `${y}px`,
          '--margin-top': top && `${top}px`,
          '--margin-bottom': bottom && `${bottom}px`,
          '--margin-left': left && `${left}px`,
          '--margin-right': right && `${right}px`,
        } as CSSProperties
      }
      className={styles.margin}
    >
      {children}
    </div>
  )
}
