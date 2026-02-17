import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { Button } from 'components/Button'
import { Flex } from 'components/Flex'
import { useAppForm } from 'components/Form'
import { createFormOptions } from 'components/Form/createFormOptions'
import { Form } from 'components/Form/form'
import { Text } from 'components/Text'
import { loginUser } from 'queries/auth/login'
import z from 'zod'
import styles from './login.module.css'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const LoginForm = () => {
  /***** HOOKS *****/
  const { mutateAsync: login } = useMutation(loginUser)
  const navigate = useNavigate()

  const form = useAppForm({
    ...createFormOptions(
      z.object({
        email: z.email(),
        password: z.string(),
      }),
      { email: '', password: '' }
    ),
    onSubmit: async ({ value }) => {
      await login(value)
      return navigate({ to: '/' })
    },
  })

  /***** RENDER *****/
  return (
    <Form form={form}>
      <Flex direction="column" gap={20}>
        <form.AppField name="email" children={(field) => <field.TextInput label="Email Address" autoComplete="email" />} />
        <form.AppField
          name="password"
          children={(field) => <field.TextInput label="Password" type="password" autoComplete="current-password" />}
        />
        <Text size="xs" color="info" className={styles.forgot}>
          Forgot Password?
        </Text>
        <Button type="submit">Log In</Button>
      </Flex>
    </Form>
  )
}
