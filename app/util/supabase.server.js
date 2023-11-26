import { createServerClient, parse, serialize } from "@supabase/ssr"

export const createSupabaseServerClient = ({request}) => {
  const cookies = parse(request.headers.get("Cookie") ?? "")
  const headers = new Headers()

  return createServerClient(
    process.env.DATABASE_URL,
    process.env.DB_KEY,
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
}


