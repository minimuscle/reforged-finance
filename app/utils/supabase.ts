import { createServerClient, parse, serialize } from "@supabase/ssr"
import { CashProps } from "./types"

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

export const createItem = async (
  request: Request,
  formData: any,
  item: string
) => {
  const supabase = supabaseCreate(request)
  const user = (await supabase.auth.getSession()).data.session?.user.id
  const { count } = await supabase
    .from(item)
    .select("*", { count: "exact", head: true })
  const { data, error } = await supabase
    .from(item)
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
  if (error) {
    console.log(error)
    return error
  }
  return data
}

export const deleteItem = async (
  request: Request,
  id: string,
  item: string
) => {
  const supabase = supabaseCreate(request)
  await supabase.from(item).delete().eq("id", id)
}

export const updateItem = async (
  request: Request,
  formData: any,
  item: string
) => {
  const supabase = supabaseCreate(request)
  const form = Object.fromEntries(formData.entries())
  //If intent is to reorder the cash accounts, ie. data fieled is there
  if (form?.data) {
    const items = JSON.parse(form?.data)
    items.forEach(async (rowItem: CashProps) => {
      const { data, error } = await supabase
        .from(item)
        .update({ weight: rowItem.weight })
        .eq("id", rowItem.id)
      if (error) {
        console.log(error)
        return error
      }
      return data
    })
  }

  //Only update the values that are not null
  let updateData = {}
  if (form?.name && form?.name !== "null")
    updateData = { ...updateData, name: form?.name }
  if (form?.currency && form?.currency !== "null")
    updateData = { ...updateData, currency: form?.currency }
  if (form?.balance && form?.balance !== "null") {
    updateData = {
      ...updateData,
      balance: parseFloat(form?.balance?.replace(/[$,]/g, "")),
    }
  }
  if (form?.colour && form?.colour !== "null")
    updateData = { ...updateData, colour: form?.colour }
  if (form?.weight && form?.weight !== "null")
    updateData = { ...updateData, weight: form?.weight }

  const { data, error } = await supabase
    .from(item)
    .update(updateData)
    .eq("id", form?.id)
  if (error) {
    console.log(error)
    return error
  }
  return data
}
