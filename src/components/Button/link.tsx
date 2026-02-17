import { Link, type LinkComponentProps } from '@tanstack/react-router'
import type { CSSProperties } from 'react'
import { colorVar, type ColorToken } from 'utils/css/styles'
import type { ReactWithChildren } from 'utils/types/general'
import styles from './Button.module.css'

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type Button = ReactWithChildren<
  {
    color?: ColorToken
  } & LinkComponentProps
>

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const InternalLinkButton: Button = ({ children, color, ...props }) => {
  return (
    <div style={{ '--button-color': colorVar(color ?? 'cyan-600') } as CSSProperties} className={styles.buttonLink}>
      <Link {...props} preload="intent">
        {children}
      </Link>
    </div>
  )
}
