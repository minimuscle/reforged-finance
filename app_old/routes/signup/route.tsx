import { Center } from "@mantine/core"
import styles from "./signup.module.css"
import SignupCard from "./components/SignupCard"
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node"
import SignupCardAction from "./components/SignupCardAction"
import { createServerClient, parse, serialize } from "@supabase/ssr"
import crypto from "crypto"

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
  const errors = SignupCardAction(formData)
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
  const hash = crypto.createHash("sha256").update(password).digest("hex")
  const { error } = await supabase.auth.signUp({
    email: email,
    password: hash,
  })
  if (error)
    return {
      errors: {
        email: " ",
        password: " ",
        confirmPassword: { error: error.message },
      },
    }

  return redirect("/", {
    headers,
  })
}

export default function Signup() {
  return (
    <div className={styles.container}>
      <Center h={"100%"}>
        <SignupCard />
      </Center>
    </div>
  )
}
