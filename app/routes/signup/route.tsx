import { type ActionFunctionArgs } from '@remix-run/node'
import { Form, useSubmit } from '@remix-run/react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '~/utils/auth'
import { createUserSession } from '~/utils/session.server'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const token = formData.get('token') as string
  return createUserSession(token)
}

export default function Signup() {
  const submit = useSubmit()

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email') as string
    const password = form.get('password') as string

    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    submit({ token: await user.getIdToken() }, { method: 'post' })
  }

  return (
    <div>
      <h1>Signup</h1>
      <Form method='post' onSubmit={(e) => createUser(e)}>
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
