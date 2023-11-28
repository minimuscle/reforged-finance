import { Button, Flex, Grid, Paper, Stack, Table, Title } from "@mantine/core"
import "../styles/styles.css"
import BankAccounts from "../components/Widgets/Accounts/BankAccounts"
import { createSupabaseServerClient } from "../util/supabase.server"
import Accounts from "../components/Widgets/Accounts"

export const meta = () => {
  return [{ title: "Cash | WealthForge" }]
}

export const loader = async ({ request }) => {
  const supabase = createSupabaseServerClient({ request })

  const { data: auth } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from("profiles").select().single()
  const { data: cash } = await supabase
    .from("cash")
    .select("*")
    .order("weight", { ascending: true })
  return {
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

  console.log(_action)
  console.log("value: ", values)
  switch (_action) {
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
      console.log("adding bank")
      const { data: newBank, error: addError } = await supabase
        .from("cash")
        .insert({
          name: values.name,
          balance: values.balance,
          currency: values.currency,
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
    <>
      <Grid pb="100px">
        <BankAccounts />
      </Grid>
      <Flex bg={"blue"} gap={"lg"} wrap={"wrap"} justify={"center"}></Flex>
      <Accounts />
    </>
  )
}
