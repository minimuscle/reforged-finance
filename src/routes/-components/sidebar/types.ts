import { LinkProps } from "@tanstack/react-router"
import { IconType } from "utils/types"

export interface NavButtonProps {
  icon: IconType
  label: string
  to: LinkProps["to"]
  isSidebarHidden?: boolean
  preload?: false | "intent"
  activeIcon?: IconType
}
