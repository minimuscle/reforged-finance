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
 */
export const getMonth = (date: Date, format: Intl.DateTimeFormatOptions['month'] = "2-digit"): number | string => {
  return Intl.DateTimeFormat('en-AU', { month: format }).format(date)
}

/**This gets the year based on the date, and the format which defaults to numeric (full)
 * Its just a shorter version of the Intl.DateTimeFormat
 */
export const getYear = (date: Date, format: Intl.DateTimeFormatOptions['year'] = "numeric"): number => {
  const year = Intl.DateTimeFormat('en-AU', { year: format }).format(date)
}

/**This gets the last month from an array of data, it requires a month in 2-digit format, and a full year
 * As well as the actually array of course
 */
type LastMonthData = {
  month: string,
  year: string,
  data: object
}
export const getLastMonthData = (data:any, month: number, year: number) => {
  console.log(data)
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