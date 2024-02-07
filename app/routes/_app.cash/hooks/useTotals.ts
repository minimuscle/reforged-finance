import useHistory from "~/utils/hooks/useHistory"
import { history } from "~/utils/types"

export default function useTotals() {
  const { history } = useHistory()

  const lastMonth = history[history.length - 1] || { cash: 0 }
  const secondLastMonth = history[history.length - 2] || { cash: 0 }
  const year = new Date().getFullYear()
  const month = new Date(Date.now()).getMonth()
  //Gets the year to date
  const thisYear: history[] = history.filter(
    (item) => new Date(item.date).getFullYear() == year
  ) // gets just this year

  const monthlyCashSavings = lastMonth.cash - secondLastMonth.cash

  const yearlyCashSavings =
    (thisYear.length &&
      thisYear[thisYear.length - 1].cash - thisYear[0].cash) ||
    0

  const cashSavings = []
  for (let i = 1; i < thisYear.length; i++) {
    cashSavings.push(thisYear[i].cash - thisYear[i - 1].cash) || 0
  }
  const averageCashSavings = cashSavings.reduce((a, b) => a + b, 0)
  const averageMonthlyDifference =
    Math.round((averageCashSavings / thisYear.length) * 100) / 100 || 0

  //How much money you will have saved by the end of the year
  const predictedSavings =
    yearlyCashSavings + averageMonthlyDifference * (12 - month)
  const predictedCash = lastMonth.cash + predictedSavings

  return {
    lastMonth,
    monthlyCashSavings,
    yearlyCashSavings,
    averageCashSavings,
    averageMonthlyDifference,
    predictedSavings,
    predictedCash,
  }
}
