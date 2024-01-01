import BankAccounts from "~/components/widgets/BankAccounts"
import Tile from "~/components/Tile"
import { ActionFunctionArgs } from "@remix-run/node"
import {
  addBankAccount,
  deleteBank,
  updateBankColour,
  updateCashField,
} from "~/utils/supabase"

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const intent = formData.get("intent")
  console.log(intent)

  switch (intent) {
    case "addBankAccount":
      addBankAccount(request, formData)
      break
    case "updateCashField":
      updateCashField(request, formData)
      break
    case "updateBankColour":
      updateBankColour(
        request,
        formData.get("id") as string,
        formData.get("colour") as string
      )
      break
    case "deleteBank":
      deleteBank(request, formData.get("id") as string)
      break
  }
  return null
}

export default function Cash() {
  return (
    <>
      <Tile rows={4} cols={3}>
        <BankAccounts />
      </Tile>
    </>
  )
}
