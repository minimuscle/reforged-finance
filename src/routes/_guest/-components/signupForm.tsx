import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { Button } from 'components/Button'
import { Flex } from 'components/Flex'
import { useAppForm } from 'components/Form'
import { createFormOptions } from 'components/Form/createFormOptions'
import { Form } from 'components/Form/form'
import { Text } from 'components/Text'
import z from 'zod'
import { signupUser } from '../../../queries/auth/signup'
import styles from './login.module.css'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const SignupForm = () => {
  /***** HOOKS *****/
  const { mutateAsync: signup } = useMutation(signupUser)
  const navigate = useNavigate()

  const form = useAppForm({
    ...createFormOptions(
      z.object({
        email: z.email(),
        password: z.string(),
        repeat_password: z.string(),
      }),
      { email: '', password: '', repeat_password: '' }
    ),
    onSubmit: async ({ value }) => {
      await signup(value)
      return navigate({ to: '/' })
    },
  })

  /***** RENDER *****/
  return (
    <Form form={form}>
      <Flex direction="column" gap="xl">
        <form.AppField name="email" children={(field) => <field.TextInput label="Email Address" autoComplete="email" />} />
        <form.AppField
          name="password"
          children={(field) => <field.TextInput label="Password" type="password" autoComplete="new-password" />}
        />
        <form.AppField
          name="repeat_password"
          children={(field) => <field.TextInput label="Repeat Password" type="password" autoComplete="new-password" />}
        />
        <Text size="xs" color="info" className={styles.forgot}>
          Forgot Password?
        </Text>
        <Button type="submit">Sign Up</Button>
      </Flex>
    </Form>
  )
}
