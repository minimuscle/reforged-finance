import { useOutletContext } from "@remix-run/react"
import { CashProps } from "../types"

export function useModel() {
  const data = useOutletContext()
  const lastMonth = data.lastMonth

  return {
    lastMonth,
    cash: data.cash as CashProps[],
  }
}
