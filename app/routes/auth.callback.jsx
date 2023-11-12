import { redirect } from "@remix-run/node"
import { createServerClient, parse, serialize } from "@supabase/ssr"

export async function loader({ request }) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const next = requestUrl.searchParams.get("next") || "/"

  if (code) {
    const cookies = parse(request.headers.get("Cookie") ?? "")
    const headers = new Headers()

    const supabase = createServerClient(
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

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return redirect(next, { headers })
    }
  }

  // return the user to an error page with instructions
  return redirect("/auth/auth-code-error")
}
