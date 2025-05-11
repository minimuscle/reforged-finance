import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react"
import { periods } from "utils/config"
import { Database } from "utils/types/database.types"

export type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>
export type Period = (typeof periods)[number]

export namespace DB {
  export type Public = Database["public"]
  export type Tables = {
    [K in keyof Public["Tables"]]: Public["Tables"][K]
  }
  export type Row<T extends keyof Tables> = Tables[T]["Row"]
  export type Insert<T extends keyof Tables> = Tables[T]["Insert"]
  export type Update<T extends keyof Tables> = Tables[T]["Update"]
}
