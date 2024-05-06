import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useSubmit } from '@remix-run/react'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '~/utils/auth'
import { createUserSession } from '~/utils/session.server'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const token = formData.get('token') as string
  return createUserSession(token)
}

export default function Login() {
  const submit = useSubmit()

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email') as string
    const password = form.get('password') as string

    const { user } = await signInWithEmailAndPassword(auth, email, password)
    submit({ token: await user.getIdToken() }, { method: 'post' })
  }

  //TODO: This should check if user exists first, and if not, create a new user
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const { user } = await signInWithPopup(auth, provider)
    submit({ token: await user.getIdToken() }, { method: 'post' })
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => loginWithGoogle()}>Login with Google</button>
      <Form method='post' onSubmit={(e) => loginUser(e)}>
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
