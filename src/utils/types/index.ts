import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react"
import { periods } from "utils/config"

export type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>
export type Period = (typeof periods)[number]
