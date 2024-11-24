import clsx from "clsx"
import "./_Text.scss"
import { Children, cloneElement, isValidElement, ReactElement } from "react"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
type TextSizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"
type TextColors = "primary" | "secondary" | "default" | "gray"
type TextWeights = "regular" | "bold" | "black"

interface TextProps {
  children: React.ReactNode
  className?: string
  size?: TextSizes
  color?: TextColors
  weight?: TextWeights
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Text({
  children,
  className,
  size = "md",
  color = "default",
  weight = "regular",
  /**
   * Defines the component to render, purely for semantic purposes and accessibility
   */
  as: Component = "p",
}: TextProps) {
  const renderChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === _Text) {
      return cloneElement(child as ReactElement<TextProps>, { as: "span" })
    }
    return child
  })

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
