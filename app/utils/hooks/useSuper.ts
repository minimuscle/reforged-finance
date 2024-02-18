import { useFetchers } from "@remix-run/react"
import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"

//FIXME: Fix the flashing when adding new account and other optimistic ui
export default function useSuper() {
  const data = useContext(DataContext) as any
  const superData = data.super

  const superDataTotal =
    superData
      .reduce((acc: number, curr: any) => {
        return acc + curr.balance
      }, 0)
      .toFixed(2) || 0

  const fetchers = useFetchers()
  const createsuperData = fetchers
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "createsuperData"
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
    const exists = superData.find((item) => item.id === account.id)
    if (!exists) {
      superData.push({
        id: account.id,
        name: "New Account",
        currency: "AUD",
        balance: 0,
        colour: "var(--mantine-color-gray-3)",
        created_at: String(new Date()),
        user_id: "1",
        weight: superData.length,
        pending: true,
      })
    }
  })

  const updatesuperData = fetchers
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "updatesuperData"
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

  superData.forEach((account) => {
    //update each account with the updatesuperData only if the value inside updatesuperData is not null
    const exists = updatesuperData.find((item) => item.id === account.id)
    if (exists) {
      if (exists.created_at !== "null") account.created_at = exists.created_at
      if (exists.user_id !== "null") account.user_id = exists.user_id
      if (exists.name !== "null") account.name = exists.name
      if (exists.currency !== "null") account.currency = exists.currency
      if (exists.colour !== "null") account.colour = exists.colour
    }
  })
  superData.sort((a, b) => {
    return a.weight - b.weight
  })

  const deletesuperData = fetchers
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "deletesuperData"
    })
    .map((fetcher) => {
      return {
        id: String(fetcher.formData?.get("id")),
      }
    })

  superData.forEach((account) => {
    const exists = deletesuperData.find((item) => item.id === account.id)
    if (exists) {
      const index = superData.indexOf(account)
      superData.splice(index, 1)
    }
  })

  return { superData, superDataTotal }
}
