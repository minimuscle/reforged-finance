import BankAccounts from "~/components/widgets/BankAccounts"
import Tile from "~/components/Tile"
import { ActionFunctionArgs } from "@remix-run/node"
import { createCash, deleteCash, updateCash } from "~/utils/supabase"
import DataDefer from "~/components/DataDefer"
import { useOutletContext } from "@remix-run/react"

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const intent = formData.get("intent")
  console.log(intent)

  switch (intent) {
    case "createCash":
      createCash(request, formData)
      break
    case "updateCash":
      updateCash(request, formData)
      break
    case "deleteCash":
      deleteCash(request, formData.get("id") as string)
      break
  }
  return null
}

export default function Cash() {
  const data = useOutletContext()
  return (
    <>
      <Tile rows={4} cols={3}>
        <DataDefer data={data}>
          <BankAccounts />
        </DataDefer>
      </Tile>
    </>
  )
}
