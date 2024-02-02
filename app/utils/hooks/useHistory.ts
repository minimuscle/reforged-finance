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

  //TODO: Fix these values as they are all wrong and the maths is wrong
  const lastMonth = history[history.length - 1]
  const secondLastMonth = history[history.length - 2]
  const year = new Date().getFullYear()
  const month = new Date(Date.now()).getMonth()
  //Gets the year to date
  const thisYear: history[] = history.filter(
    (item) => new Date(item.date).getFullYear() == year
  ) // gets just this year

  console.log(thisYear.length)

  const monthlyCashSavings = secondLastMonth.cash - lastMonth.cash

  const yearlyCashSavings =
    (thisYear.length &&
      thisYear[thisYear.length - 1].cash - thisYear[0].cash) ||
    0

  const cashSavings = []
  for (let i = 1; i < thisYear.length; i++) {
    cashSavings.push(thisYear[i].cash - thisYear[i - 1].cash) || 0
  }
  const averageCashSavings = cashSavings.reduce((a, b) => a + b, 0)
  const averageMonthlyDifference = Math.round(
    averageCashSavings / thisYear.length || 0
  )

  const predictedSavings =
    yearlyCashSavings + averageMonthlyDifference * (12 - month)
  const predictedCash = secondLastMonth.cash + averageMonthlyDifference

  return {
    history,
    monthlyCashSavings,
    yearlyCashSavings,
    cashSavings,
    averageMonthlyDifference,
    predictedSavings,
    predictedCash,
  }
}
