import { useFetchers } from "@remix-run/react"
import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"

//FIXME: Fix the flashing when adding new account and other optimistic ui
export default function useDebts() {
  const data = useContext(DataContext) as any
  const debts = data.debts

  const debtsTotal =
    debts
      .reduce((acc: number, curr) => {
        return acc + curr.balance
      }, 0)
      .toFixed(2) || 0

  const fetchers = useFetchers()
  const createdebts = fetchers
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "createdebts"
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

  createdebts.forEach((account) => {
    const exists = debts.find((item) => item.id === account.id)
    console.log("exists: ", exists)
    if (!exists) {
      debts.push({
        id: account.id,
        name: "New Account",
        currency: "AUD",
        balance: 0,
        colour: "var(--mantine-color-gray-3)",
        created_at: String(new Date()),
        user_id: "1",
        weight: debts.length,
        pending: true,
      })
    }
  })

  const updatedebts = fetchers
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "updatedebts"
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

  debts.forEach((account) => {
    //update each account with the updatedebts only if the value inside updatedebts is not null
    const exists = updatedebts.find((item) => item.id === account.id)
    if (exists) {
      if (exists.created_at !== "null") account.created_at = exists.created_at
      if (exists.user_id !== "null") account.user_id = exists.user_id
      if (exists.name !== "null") account.name = exists.name
      if (exists.currency !== "null") account.currency = exists.currency
      if (exists.colour !== "null") account.colour = exists.colour
    }
  })
  debts.sort((a, b) => {
    return a.weight - b.weight
  })

  const deletedebts = fetchers
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "deletedebts"
    })
    .map((fetcher) => {
      return {
        id: String(fetcher.formData?.get("id")),
      }
    })

  debts.forEach((account) => {
    const exists = deletedebts.find((item) => item.id === account.id)
    if (exists) {
      const index = debts.indexOf(account)
      debts.splice(index, 1)
    }
  })

  return { debts, debtsTotal }
}
