import { useFetchers } from "@remix-run/react"

export default function usePendingItems() {
  return useFetchers()
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "addBankAccount"
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
}
