/**
 * 
 * The money util is used throughout this project to hold all the monetary options so that
 * I don't have to do the same calculation  in multiple places in different ways, possibly ending up
 * with the wrong information on one but not the other.
 * 
 * This util should make it much easier to fix my maths if it is incorrect. I am a web developer,
 * not an accountant.
 * 
 */

/**This gets the month based on the date, and the format which defaults to 2-digit
 * Its just a shorter version of the Intl.DateTimeFormat
 * 
 * Provide no parameters to get the current month
 */
const getMonth = (date: number = Date.now(), format: Intl.DateTimeFormatOptions['month'] = "2-digit") => {
  return Intl.DateTimeFormat('en-AU', { month: format }).format(date)
}

/**This gets the year based on the date, and the format which defaults to numeric (full)
 * Its just a shorter version of the Intl.DateTimeFormat
 * 
 * Provide no parameters to get the current year
 */
const getYear = (date: number = Date.now(), format: Intl.DateTimeFormatOptions['year'] = "numeric") => {
  return Intl.DateTimeFormat('en-AU', { year: format }).format(date)
}

/**This gets the last month from an array of data, it requires a month in 2-digit format, and a full year
 * As well as the actually array of course
 */
export const getLastMonthData = (data: any, month: string = getMonth(), year: string = getYear()) => {
  return data.find((item: any) => { 
    return item.month == (parseInt(month) - 1) && item.year == year
  })
}

export const getThisMonthData = (data: any, month: string = getMonth(), year: string = getYear()) => {
  return data.find(
    (item: any) => item.month == month && item.year == year
  )
}

export const getThisYearData = (data: any, year: any = getYear()) => {
  return data
    .filter(
      (item: any) => item.year == year || (item.month == 12 && item.year == year - 1)
    )
    .sort((a:any, b: any) => {
      // Custom sorting logic
      if (a.year == year - 1 && a.month == 12) {
        return -1 // Move items with month "12" and year "year - 1" to the front
      } else if (b.year == year - 1 && b.month == 12) {
        return 1 // Move items with month "12" and year "year - 1" to the front
      } else {
        // Normal sorting based on month
        return a.month - b.month
      }
    })
  }

export const getSortedData = (data: any) => {
  const year: any = getYear()
  return data.sort((a:any, b: any) => {
    // Custom sorting logic
    if (a.year == year - 1 && a.month == 12) {
      return -1 // Move items with month "12" and year "year - 1" to the front
    } else if (b.year == year - 1 && b.month == 12) {
      return 1 // Move items with month "12" and year "year - 1" to the front
    } else {
      // Normal sorting based on month
      return a.month - b.month
    }
  })
}

/**Money formatter gets money in the right format for the currency
 * 
 * Currently only supports AUD
 */
export const formatter = Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  minimumFractionDigits: 0,
})