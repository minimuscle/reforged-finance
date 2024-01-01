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

export const updateCashField = async (request: Request, formData: any) => {
  const supabase = supabaseCreate(request)
  const form = Object.fromEntries(formData.entries())
  const user = (await supabase.auth.getSession()).data.session?.user.id
  console.log(user)
  const { data, error } = await supabase
    .from("cash")
    .upsert(
      {
        id: form?.id,
        user_id: user,
        name: form?.name,
        currency: form?.currency,
        balance: form?.balance,
      },
      { onConflict: "id" }
    )
    .select()
  if (error) {
    console.log(error)
    return error
  }

  console.log(data)
  return data
}
