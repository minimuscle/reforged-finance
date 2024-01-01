import { useFetchers } from "@remix-run/react"

export default function usePendingDeletion() {
  return useFetchers()
    .filter((fetcher) => {
      if (!fetcher.formData) return false
      return fetcher.formData.get("intent") === "deleteBank"
    })
    .map((fetcher) => {
      return {
        id: String(fetcher.formData?.get("id")),
      }
    })
}
