import clsx from "clsx"
import "./_Text.css"
import { Children, cloneElement, isValidElement, ReactElement } from "react"
import { MantineColor, MantineColorShade } from "@mantine/core"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
type TextSizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | number
type TextColors = "primary" | "secondary" | "default" | "gray" | "error" | "success" | "warning" | "info"
type TextCustomColors = `${MantineColor}-${MantineColorShade}`
type TextWeights =
  | { bold: boolean; regular?: never; semiBold?: never; black?: never }
  | { regular: boolean; bold?: never; semiBold?: never; black?: never }
  | { semiBold: boolean; bold?: never; regular?: never; black?: never }
  | { black: boolean; bold?: never; regular?: never; semiBold?: never }
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
  color?: TextColors | TextCustomColors
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  uppercase?: boolean
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
  uppercase = false,
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

  function isCustomColor(color: string): color is TextCustomColors {
    return color.includes("-")
  }
  /*********  RENDER  *********/
  return (
    <Component
      className={clsx(
        "Text",
        typeof size === "string" && size && `Text--size-${size}`,
        color && !isCustomColor(color) && `Text--color-${color}`,
        weight && `Text--weight-${weight}`,
        align && `Text--${align}`,
        uppercase && "Text--uppercase",
        className
      )}
      style={{
        fontSize: typeof size === "number" ? size : undefined,
        color: color && isCustomColor(color) ? `var(--mantine-color-${color})` : undefined,
      }}
    >
      {renderChildren}
    </Component>
  )
}
