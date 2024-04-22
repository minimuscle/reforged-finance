import { ActionFunctionArgs } from "@remix-run/node"
import { Form } from "@remix-run/react"

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  return null
}

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Form method="post">
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}
