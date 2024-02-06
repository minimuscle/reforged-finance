import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { budgetProps } from "../types"

export default function useBudget() {
  const data = useContext(DataContext) as any
  const budget = data.budget as budgetProps
  return { budget }
}
