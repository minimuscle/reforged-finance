import type { MethodTypes } from "utils/types/methodTypes"

/**
 * Filters data into the selected period, and adds a label
 */
export function filterData({ data, period }: MethodTypes.FilterData) {
  const filteredData = data.filter((d) => {
    const date = new Date(d.date)
    switch (period) {
      case "3M":
        return date > new Date(new Date().setMonth(date.getMonth() - 3))
      case "6M":
        return date > new Date(new Date().setMonth(date.getMonth() - 6))
      case "1Y":
        return date > new Date(new Date().setFullYear(date.getFullYear() - 1))
      case "5Y":
        return date > new Date(new Date().setFullYear(date.getFullYear() - 5))
      case "YTD":
        return date > new Date(new Date().getFullYear(), 0, 1)
      case "ALL":
        return true
    }
  })
  return filteredData
}
