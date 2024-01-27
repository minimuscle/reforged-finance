import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { history } from "../types"

export default function useHistory() {
  const data = useContext(DataContext) as any
  let history = data.history as history[]

  //sort by date
  history.sort((a: history, b: history) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    return aDate.getTime() - bDate.getTime()
  })

  //combine cash and super, minus debts per item
  history = history.map((item: history) => {
    const { cash, super: superannuation, debts } = item
    let total = 0
    if (cash) total += cash
    if (superannuation) total += superannuation
    if (debts) total += debts
    return { ...item, netWorth: total }
  })

  return { history }
}
