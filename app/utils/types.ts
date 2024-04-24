/**
 * `User` is the main object that contains all the data for the user.
 * 
 *
 */
export interface User {
  name: string
  email: string
  country: string
  currency: Currency
  netIncome: number
  salaryFrequency: string
  cashGoal: number
  emergencyFundGoal: number
  savingForHomeDeposit: boolean
  homeDepositGoal: number
  super?: Map
  cash?: Map
  debts?: Map
  sideIncome?: Map
  taxSystemB?: Map
}
/**
 * `Map` is an object that stores `Accounts`
 */
interface Map {
  [key: number]: Account | DebtAccount
}

/**
 * All `Accounts` have a name, currency and balance
 */
interface Account {
  name: string
  currency: Currency
  balance: number
}

/**
 * `DebtAccount` extends Account and has additional properties for debts
 */
interface DebtAccount extends Account {
  startDate: Date
  interestFrequency: number
  annualInterest: number
  startingBalance: number
  regularPayment: number
  balancePaid: number
}

/**
 * `Currency` is the list of supported currencies in the app
 */
export const Currency = {
  AUD: 'AUD',
  USD: 'USD',
} as const
export type Currency = typeof Currency[keyof typeof Currency]