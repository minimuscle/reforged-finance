import { history } from "./types"

export const formatter = (currency: string, amount: number) => {
  const formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency,
  })

  return formatter.format(amount)
}

export const transformData = (data: history[], filter: string) => {
  //convert date to date object
  data = data.map((item) => {
    const date = new Date(item.date)
    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    })
    return { ...item, date: formattedDate }
  })

  //filter data based on filter
  switch (filter) {
    case "3M":
      data = data.slice(-3)
      break
    case "6M":
      data = data.slice(-6)
      break
    case "1Y":
      data = data.slice(-12)
      break
    case "5Y":
      data = data.slice(-60)
      break
    case "YTD":
      data = data.filter((item) => {
        const date = new Date(item.date)
        const today = new Date()
        return date.getFullYear() === today.getFullYear()
      })
      break
    case "ALL":
      break
  }
  return data
}
