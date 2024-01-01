import { createServerClient, parse, serialize } from "@supabase/ssr"

export const supabaseCreate = (request: Request) => {
  const cookies = parse(request.headers.get("Cookie") ?? "")
  const headers = new Headers()

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(key) {
          return cookies[key]
        },
        set(key, value, options) {
          headers.append("Set-Cookie", serialize(key, value, options))
        },
        remove(key, options) {
          headers.append("Set-Cookie", serialize(key, "", options))
        },
      },
    }
  )

  return supabase
}

export const addBankAccount = async (request: Request, formData: any) => {
  const supabase = supabaseCreate(request)
  const user = (await supabase.auth.getSession()).data.session?.user.id
  const { count } = await supabase
    .from("cash")
    .select("*", { count: "exact", head: true })
  const { data, error } = await supabase
    .from("cash")
    .insert({
      id: formData.id,
      user_id: user,
      name: "New Account",
      currency: "AUD",
      balance: 0,
      colour: "var(--mantine-color-gray-3)",
      weight: count || 0,
    })
    .select()
}

export const updateBankOrder = async (request: Request, formData: string) => {
  const supabase = supabaseCreate(request)
  const form = JSON.parse(formData)
  const { data, error } = await supabase
    .from("cash")
    .upsert(form, { onConflict: "id" })
    .select()
  console.log(error)
  console.log(data)
}

export const deleteBank = async (request: Request, id: string) => {
  const supabase = supabaseCreate(request)
  await supabase.from("cash").delete().eq("id", id)
}

export const updateBankColour = async (
  request: Request,
  id: string,
  colour: string
) => {
  const supabase = supabaseCreate(request)
  await supabase.from("cash").update({ colour: colour }).eq("id", id)
}

export const updateCashField = async (request: Request, formData: any) => {
  const supabase = supabaseCreate(request)
  const form = Object.fromEntries(formData.entries())
  const user = (await supabase.auth.getSession()).data.session?.user.id

  const upsertData: {
    id?: string
    user_id: string
    name?: string
    currency?: string
    balance?: number
  } = {
    id: form?.id,
    user_id: user || "",
    name: form?.name,
    currency: form?.currency,
  }

  if (form?.balance) {
    upsertData.balance = parseFloat(form?.balance.replace(/[$,]/g, ""))
  }

  const { data, error } = await supabase
    .from("cash")
    .upsert(upsertData, { onConflict: "id" })
    .select()
  if (error) {
    console.log(error)
    return error
  }
  return data
}
