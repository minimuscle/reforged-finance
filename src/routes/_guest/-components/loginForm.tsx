import { useMutation } from '@tanstack/react-query'
import { Button } from 'components/Button'
import { useAppForm } from 'components/Form'
import { Form } from 'components/Form/form'
import { loginUser } from '../../../queries/auth/login'
import { createFormOptions } from 'components/Form/createFormOptions'
import z from 'zod'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const LoginForm = () => {
  const { mutateAsync: login } = useMutation(loginUser)

  const form = useAppForm({
    ...createFormOptions(
      z.object({
        email: z.email(),
        password: z.string(),
      }),
      { email: '', password: '' }
    ),
    onSubmit: ({ value }) => {
      console.log('Submitting login form with values:', value)
      login(value, {
        onSuccess: (data) => {
          console.log('Login successful:', data)
        },
      })
    },
  })

  console.log(form.state)

  /***** RENDER *****/
  return (
    <Form form={form}>
      <form.AppField name="email" children={(field) => <field.TextInput label="Email Address" autoComplete="email" />} />
      <form.AppField
        name="password"
        children={(field) => <field.TextInput label="Password" type="password" autoComplete="current-password" />}
      />
      <Button type="submit">Login</Button>
    </Form>
  )
}
