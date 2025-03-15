import { Period } from "utils/types"

export declare namespace MethodTypes {
  interface FilterData {
    data: Array<{
      date: string
      [key: string]: string | number
    }>
    period: Period
  }
}
