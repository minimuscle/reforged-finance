import { type ActionFunctionArgs } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { signUp } from '~/utils/db.server'
import { createUserSession } from '~/utils/session.server'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  console.log('got passed form data')
  const user = await signUp(email, password)
  const token = await user.getIdToken()
  console.log('got passed token')
  return createUserSession(token)
}

export default function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <Form method='post'>
        <label>
          Email
          <input type='email' name='email' required />
        </label>
        <label>
          Password
          <input type='password' name='password' required />
        </label>
        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}
