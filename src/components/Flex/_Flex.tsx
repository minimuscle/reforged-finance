import clsx from "clsx"
import "./_Flex.css"

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
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Flex({ children, className, justify, align, direction, wrap, gap }: FlexProps) {
  /*********  RENDER  *********/
  return (
    <div
      className={clsx(
        "Flex",
        className,
        justify && `Flex--justify-${justify}`,
        align && `Flex--align-${align}`,
        direction && `Flex--direction-${direction}`,
        wrap && `Flex--wrap-${wrap}`
      )}
      style={{ gap }}
    >
      {children}
    </div>
  )
}
