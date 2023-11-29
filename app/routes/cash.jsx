import { Flex, Paper, Text, Title } from "@mantine/core"
import "../styles/styles.css"
import { createSupabaseServerClient } from "../util/supabase.server"
import Accounts from "../components/Widgets/Cash/Accounts"
import CashSavings from "../components/Widgets/Cash/CashSavings"

export const meta = () => {
  return [{ title: "Cash | WealthForge" }]
}

export const loader = async ({ request }) => {
  const supabase = createSupabaseServerClient({ request })

  const { data: auth } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from("profiles").select().single()
  const { data: history } = await supabase.from("history").select()
  const { data: cash } = await supabase
    .from("cash")
    .select("*")
    .order("weight", { ascending: true })
  return {
    history,
    auth,
    profile,
    cash,
  }
}

export const action = async ({ request }) => {
  console.log("running")
  const formData = await request.formData()
  const { _action, ...values } = Object.fromEntries(formData)
  const supabase = createSupabaseServerClient({ request })
  const { data: user } = await supabase.auth.getUser()

  switch (_action) {
    case "updateBankOrder":
      const { error: orderError } = await supabase
        .from("cash")
        .upsert(JSON.parse(values.accounts))
      if (orderError) {
        console.log("error ", orderError)
        return null
      }
      break
    case "updateBank":
      const { data: bank, error } = await supabase
        .from("cash")
        .upsert(
          {
            ...values,
            user_id: user.user.id,
          },
          { onConflict: "id" }
        )
        .select()
      if (error) {
        console.log("error ", error)
        return bank
      }
      break
    case "updateBankColour":
      const { error: colorError } = await supabase
        .from("cash")
        .upsert(
          {
            colour: values.colour,
            id: values.id,
            user_id: user.user.id,
          },
          { onConflict: "id" }
        )
        .select()
      if (colorError) {
        console.log("error ", colorError)
        return colorError
      }
      break
    case "delete":
      const { error: deleteError } = await supabase
        .from("cash")
        .delete()
        .eq("id", values.id)
      if (deleteError) {
        console.log("error ", deleteError)
        return null
      }
      break
    case "addBank":
      const { data: cash } = await supabase.from("cash").select("*")
      const { data: newBank, error: addError } = await supabase
        .from("cash")
        .insert({
          name: values.bank_name,
          balance: values.balance,
          currency: values.currency,
          weight: cash.length,
          user_id: user.user.id,
        })
      if (addError) {
        console.log("error ", addError)
        return null
      }
      break
    default:
      return null
  }

  return null
}

export default function Cash() {
  return (
    <Flex gap="md">
      <Accounts />
      <CashSavings />
    </Flex>
  )
}
