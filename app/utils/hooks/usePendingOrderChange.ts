import { useFetchers } from "@remix-run/react"

export default function usePendingOrderChange() {
  return useFetchers()
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "updateBankOrder"
    })
    .map((fetcher) => {
      return {
        id: String(fetcher.formData?.get("id")),
        colour: String(fetcher.formData?.get("colour")),
        name: String(fetcher.formData?.get("name")),
        currency: String(fetcher.formData?.get("currency")),
        balance: String(fetcher.formData?.get("balance")),
        weight: String(fetcher.formData?.get("weight")),
      }
    })
}
