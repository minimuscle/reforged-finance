import { useFetchers, useOutletContext } from "@remix-run/react";
import { CashProps } from "../types";
import { formatter } from "../utils";

export default function useCash() {
  const data = useOutletContext() as any
  const cash: CashProps[] = data.cash || {}

  let cashTotal =
    data.cash
      .reduce((acc: number, curr: CashProps) => {
        return acc + curr.balance
      }, 0)
      .toFixed(2) || 0
  cashTotal = formatter("AUD", cashTotal)


  const fetchers = useFetchers()
  const createCash = fetchers.filter((fetcher) => {
    if (!fetcher.formData) return false
    return fetcher.formData.get("intent") === "createCash"
  }).map((fetcher) => {
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

  createCash.forEach(account => {
    const exists = cash.find((item) => item.id === account.id)
    console.log("exists: ", exists)
    if (!exists) {
        cash.push({
        id: account.id,
        name: "New Account",
        currency: "AUD",
        balance: 0,
        colour: "var(--mantine-color-gray-3)",
        created_at: String(new Date()),
        user_id: "1",
        weight: cash.length,
        pending: true,
      })
    }
  });

  const updateCash = fetchers.filter((fetcher) => {
    if (!fetcher.formData) return false
    return fetcher.formData.get("intent") === "updateCash"
  }
  ).map((fetcher): CashProps => {
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

  cash.forEach(account => {
    //update each account with the updateCash only if the value inside updateCash is not null
    const exists = updateCash.find((item) => item.id === account.id)
    if (exists) {
      if (exists.created_at !== "null") account.created_at = exists.created_at
      if (exists.user_id !== "null") account.user_id = exists.user_id
      if (exists.name !== "null") account.name = exists.name
      if (exists.currency !== "null") account.currency = exists.currency
      if (exists.colour !== "null") account.colour = exists.colour
    }
  })
  cash.sort((a: CashProps, b: CashProps) => {
    return a.weight - b.weight
  })

  const deleteCash = fetchers.filter((fetcher) => {
    if (!fetcher.formData) return false
    return fetcher.formData.get("intent") === "deleteCash"
  }
  ).map((fetcher) => {
    return {
      id: String(fetcher.formData?.get("id")),
    }
  })

  cash.forEach(account => {
    const exists = deleteCash.find((item) => item.id === account.id)
    if (exists) {
      const index = cash.indexOf(account)
      cash.splice(index, 1)
    }
  })

  return { cash, cashTotal }
}

