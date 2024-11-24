import clsx from "clsx"
import "./_Text.css"
import { Children, cloneElement, isValidElement, ReactElement } from "react"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
type TextSizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"
type TextColors = "primary" | "secondary" | "default" | "gray"
type TextWeights = { bold: boolean } | { regular: boolean } | { semiBold: boolean } | { black: boolean }

type TextProps = {
  children: React.ReactNode
  className?: string
  size?: TextSizes
  color?: TextColors
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
} & Partial<TextWeights>

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

  const weight = (Object.keys(otherProps).find((key) => otherProps[key as keyof TextWeights]) ||
    "regular") as keyof TextWeights

  /*********  RENDER  *********/
  return (
    <Component
      className={clsx(
        "Text",
        size && `Text--size-${size}`,
        color && `Text--color-${color}`,
        weight && `Text--weight-${weight}`,
        className
      )}
    >
      {renderChildren}
    </Component>
  )
}
