import clsx from "clsx"
import styles from "./_Flex.module.css"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface FlexProps {
  children: React.ReactNode
  className?: string
  justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
  align?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch"
  direction?: "row" | "row-reverse" | "column" | "column-reverse"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
  gap?: number | string
  fullWidth?: boolean
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Flex({ children, className, justify, align, direction, wrap, gap, fullWidth }: FlexProps) {
  /*********  RENDER  *********/
  return (
    <div
      className={clsx(
        styles.flex,
        justify && styles[`justify-${justify}`],
        align && styles[`align-${align}`],
        direction && styles[`direction-${direction}`],
        wrap && styles[`wrap-${wrap}`],
        fullWidth && styles.fullWidth,
        className
      )}
      style={{ gap }}
    >
      {children}
    </div>
  )
}
