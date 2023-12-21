import { useOutletContext } from "@remix-run/react"

type Cash =
  | {
      id: number
      created_at: string
      user_id: number
      name: string
      currency: string
      balance: number
      weight: number
      colour?: string
    }
  | undefined

type History =
  | {
      id: number
      created_at: string
      user_id: number
      cash: number
      super: number
      debts: number
      income: number
      date: string
    }
  | undefined

type Budget =
  | {
      id: number
      created_at: string
      user_id: number
      cash_id: number
      amount: number
      type: string
      description: string
    }
  | undefined

type Profiles =
  | {
      id: number
      created_at: string
      user_id: number
      cash_id: number
      amount: number
      type: string
      description: string
    }
  | undefined

export function useCash() {
  const data = useOutletContext<any>()
  const cash = data.cash as Cash[]
  return cash
}

export function useHistory() {
  const data = useOutletContext<any>()
  const history = data.history as History[]
  return history
}
