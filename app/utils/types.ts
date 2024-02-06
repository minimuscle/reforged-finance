export type CashProps = {
  id: string
  created_at: string
  user_id: string
  name: string
  currency: string
  balance: number
  weight: number
  colour: string
  pending?: boolean
}

export type userProfile = {
  id: string
  name: string
  created_at: string
  email: string | null
  employmentIncome: number
  currency: string
  netIncome: number
  salaryFrequency: string
  cashGoal: number | null
  emergencyFundGoal: number | null
  homeDeposit: boolean
  depositAmount: number | null
}

export type history = {
  id: number
  created_at: string
  user_id: string
  date: string
  cash: number
  super: number
  debts: number
  income: number
  netWorth?: number
}

export type budgetProps = {
  id: number
  created_at: string
  user_id: string
  name: string
  cost: number
  bank_id: string
}

export type OutletContext = {
  user: userProfile
  cash: CashProps[]
  history: history[]
  [key: string]: any
}
