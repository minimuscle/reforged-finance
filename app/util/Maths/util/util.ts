import { DateTimeFormatOptions } from 'intl';

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
export const getMonth = (date: Date, format: DateTimeFormatOptions['month'] = "2-digit") => {
  return new Intl.DateTimeFormat('en-AU', { month: format }).format(date)
}