import clsx from "clsx"
import "./_Text.css"
import { Children, cloneElement, isValidElement, ReactElement } from "react"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
type TextSizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | number
type TextColors = "primary" | "secondary" | "default" | "gray" | "error" | "success" | "warning" | "info"
type TextWeights =
  | { bold: true; regular?: never; semiBold?: never; black?: never }
  | { regular: true; bold?: never; semiBold?: never; black?: never }
  | { semiBold: true; bold?: never; regular?: never; black?: never }
  | { black: true; bold?: never; regular?: never; semiBold?: never }
  | { bold?: never; regular?: never; semiBold?: never; black?: never }

type TextAlign =
  | { alignLeft: true; alignCenter?: never; alignRight?: never }
  | { alignCenter: true; alignLeft?: never; alignRight?: never }
  | { alignRight: true; alignLeft?: never; alignCenter?: never }
  | { alignLeft?: never; alignCenter?: never; alignRight?: never }

type TextProps = {
  children: React.ReactNode
  className?: string
  size?: TextSizes
  color?: TextColors
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
} & TextWeights &
  TextAlign

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Text({
  children,
  className,
  size = "md",
  color = "default",
  /**
   * Defines the component to render, purely for semantic purposes and accessibility
   */
  as: Component = "p",
  ...otherProps
}: TextProps) {
  const renderChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === _Text) {
      return cloneElement(child as ReactElement<TextProps>, { as: "span" })
    }
    return child
  })

  let weight = "regular"

  if (otherProps.bold) {
    weight = "bold"
  } else if (otherProps.semiBold) {
    weight = "semiBold"
  } else if (otherProps.black) {
    weight = "black"
  }

  let align = "alignLeft"

  if (otherProps.alignCenter) {
    align = "alignCenter"
  } else if (otherProps.alignRight) {
    align = "alignRight"
  }

  /*********  RENDER  *********/
  return (
    <Component
      className={clsx(
        "Text",
        typeof size === "string" && size && `Text--size-${size}`,
        color && `Text--color-${color}`,
        weight && `Text--weight-${weight}`,
        align && `Text--${align}`,
        className
      )}
      style={typeof size === "number" ? { fontSize: size } : undefined}
    >
      {renderChildren}
    </Component>
  )
}
