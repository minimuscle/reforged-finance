import { Center } from "@mantine/core"
import styles from "./login.module.css"
import LoginCard from "./components/LoginCard"
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node"
import LoginCardAction from "./components/LoginCardAction"
import { createServerClient, parse, serialize } from "@supabase/ssr"

export async function loader({ request }: LoaderFunctionArgs) {
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

  const session = await supabase.auth.getSession()
  const user = session?.data?.session?.user
  if (user) throw redirect("/")

  return null
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const errors = LoginCardAction(formData)
  if (errors) return { errors }

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

  const email = String(formData.get("email"))
  const password = String(formData.get("password"))
  const { data } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  console.log(data)

  if (!data.user) {
    return {
      status: 401,
      errors: { email: " ", password: "Invalid email or password" },
    }
  }

  return new Response(null, {
    headers,
  })
}

export default function Login() {
  return (
    <div className={styles.container}>
      <Center h={"100%"}>
        <LoginCard />
      </Center>
    </div>
  )
}
