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
      data = data.slice(-4)
      break
    case "6M":
      data = data.slice(-7)
      break
    case "1Y":
      data = data.slice(-13)
      break
    case "5Y":
      data = data.slice(-61)
      break
    case "YTD":
      //find first index of the current year
      // eslint-disable-next-line no-case-declarations
      const firstIndex = data.findIndex((item) => {
        const date = new Date(item.date)
        const today = new Date()
        return date.getFullYear() === today.getFullYear()
      })
      data = data.slice(firstIndex - 1)

      break
    case "ALL":
      break
  }
  return data
}
