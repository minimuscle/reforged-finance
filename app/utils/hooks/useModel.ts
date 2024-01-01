import { useOutletContext } from "@remix-run/react"
import { CashProps } from "../types"
import { formatter } from "../utils"
import usePendingItems from "./usePendingItems"
import usePendingDeletion from "./usePendingDeletion"
import usePendingChanges from "./usePendingChanges"

export function useModel() {
  const data = useOutletContext()
  const lastMonth = data.lastMonth
  const cashItems = data.cash || {}

  const pendingCashItems = usePendingItems()
  const pendingDeletion = usePendingDeletion()
  const pendingChanges = usePendingChanges()

  for (const item of pendingCashItems) {
    //check if item already exists
    const exists = cashItems.find(
      (cashItem: CashProps) => cashItem.id === item.id
    )
    if (!exists) {
      cashItems.push(item)
    }
  }

  for (const item of pendingDeletion) {
    //check if item already exists
    const exists = cashItems.find(
      (cashItem: CashProps) => cashItem.id === item.id
    )
    if (exists) {
      const index = cashItems.indexOf(exists)
      cashItems.splice(index, 1)
    }
  }

  for (const item of pendingChanges) {
    //check if item already exists
    const exists = cashItems.find(
      (cashItem: CashProps) => cashItem.id === item.id
    )
    if (exists) {
      const index = cashItems.indexOf(exists)
      cashItems[index].colour = item.colour
    }
  }

  let cashTotal =
    data.cash
      .reduce((acc: number, curr: CashProps) => {
        return acc + curr.balance
      }, 0)
      .toFixed(2) || 0
  cashTotal = formatter("AUD", cashTotal)

  return {
    lastMonth,
    cash: cashItems,
    cashTotal,
  }
}
