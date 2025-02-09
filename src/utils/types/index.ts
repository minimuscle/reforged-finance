import { ForwardRefExoticComponent, RefAttributes } from "react"
import { periods } from "utils/config"

export type IconType = ForwardRefExoticComponent<any & RefAttributes<any>>
export type Periods = (typeof periods)[number]
