import { useFetchers } from "@remix-run/react"

export default function usePendingChanges() {
  return useFetchers()
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "updateBankColour"
    })
    .map((fetcher) => {
      return {
        id: String(fetcher.formData?.get("id")),
        colour: String(fetcher.formData?.get("colour")),
      }
    })
}
