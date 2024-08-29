import { useFetchers } from "@remix-run/react"
import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"

//FIXME: Fix the flashing when adding new account and other optimistic ui
export default function useSideIncome() {
  const data = useContext(DataContext) as any
  const incomeData = data.sideIncome
  const incomeDataTotal =
    incomeData
      .reduce((acc: number, curr: any) => {
        return acc + curr.balance
      }, 0)
      .toFixed(2) || 0

  const fetchers = useFetchers()
  const createsuperData = fetchers
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "createIncomeData"
    })
    .map((fetcher) => {
      return {
        id: String(fetcher.formData?.get("id")),
        name: "New Account",
        currency: "AUD",
        balance: 0,
        colour: "var(--mantine-color-gray-3)",
        created_at: String(new Date()),
        user_id: "1",
        pending: true,
      }
    })

  createsuperData.forEach((account) => {
    const exists = incomeData.find((item) => item.id === account.id)
    console.log("exists: ", exists)
    if (!exists) {
      superData.push({
        id: account.id,
        name: "New Account",
        currency: "AUD",
        balance: 0,
        colour: "var(--mantine-color-gray-3)",
        created_at: String(new Date()),
        user_id: "1",
        weight: incomeData.length,
        pending: true,
      })
    }
  })

  const updateIncomeData = fetchers
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "updateIncomeData"
    })
    .map((fetcher) => {
      return {
        id: String(fetcher.formData?.get("id")),
        created_at: String(fetcher.formData?.get("created_at")),
        user_id: String(fetcher.formData?.get("user_id")),
        name: String(fetcher.formData?.get("name")),
        currency: String(fetcher.formData?.get("currency")),
        balance: Number(fetcher.formData?.get("balance")),
        weight: Number(fetcher.formData?.get("weight")),
        colour: String(fetcher.formData?.get("colour")),
      }
    })

  incomeData.forEach((account) => {
    //update each account with the updatesuperData only if the value inside updatesuperData is not null
    const exists = updateIncomeData.find((item) => item.id === account.id)
    if (exists) {
      if (exists.created_at !== "null") account.created_at = exists.created_at
      if (exists.user_id !== "null") account.user_id = exists.user_id
      if (exists.name !== "null") account.name = exists.name
      if (exists.currency !== "null") account.currency = exists.currency
      if (exists.colour !== "null") account.colour = exists.colour
    }
  })
  incomeData.sort((a, b) => {
    return a.weight - b.weight
  })

  const deleteIncomeData = fetchers
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "deleteIncomeData"
    })
    .map((fetcher) => {
      return {
        id: String(fetcher.formData?.get("id")),
      }
    })

  incomeData.forEach((account) => {
    const exists = deleteIncomeData.find((item) => item.id === account.id)
    if (exists) {
      const index = incomeData.indexOf(account)
      incomeData.splice(index, 1)
    }
  })

  return { incomeData, incomeDataTotal }
}
