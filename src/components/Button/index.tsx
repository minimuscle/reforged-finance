import type { ButtonHTMLAttributes, CSSProperties } from 'react'
import { colorVar, type ColorToken } from 'utils/css/styles'
import type { ReactWithChildren } from 'utils/types/general'
import styles from './Button.module.css'

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type Button = ReactWithChildren<
  {
    color?: ColorToken
  } & ButtonHTMLAttributes<HTMLButtonElement>
>

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Button: Button = ({ children, color, ...props }) => {
  return (
    <div style={{ '--button-color': colorVar(color ?? 'cyan-600') } as CSSProperties}>
      <button className={styles.button} {...props}>
        {children}
      </button>
    </div>
  )
}
