import { Link, useNavigate } from "@tanstack/react-router"
import { Card } from "components/Card"
import { useAppForm } from "components/Form/AppForm"
import { Form } from "components/Form/AppForm/Form"
import { LogoCard } from "components/Logo"
import { Text } from "components/Text"
import { query } from "src/queries/queryTree"
import * as z from "zod"
import styles from "./_login.module.css"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
const schema = z.object({
  email: z.email({ error: "Invalid email address" }),
  password: z.string().min(1, "Password is required"),
})

const defaultValues: z.input<typeof schema> = {
  email: "",
  password: "",
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Login() {
  /**********  HOOKS  **********/
  const navigate = useNavigate()
  const { mutateAsync: loginUserAsync } = query.auth.login.useMutation()
  const form = useAppForm({
    validators: { onChange: schema },
    defaultValues,
    onSubmit: async ({ value }) => {
      await loginUserAsync(value)
      return navigate({
        to: "/",
      })
    },
  })

  /*********  RENDER  *********/
  return (
    <Form form={form}>
      <div className={styles.login}>
        <LogoCard />
        <Card className={styles.card}>
          <Text as="h1" size="xxl" alignCenter>
            Login
          </Text>

          <form.AppField name="email" children={(field) => <field.Input label="Email" />} />
          <form.AppField name="password" children={(field) => <field.Input.Password label="Password" />} />
          <Text className={styles.forgot} size="sm" alignRight>
            <Link to="/">Forgot Password?</Link>
          </Text>
          <form.Submit label="Login" />
          <Text size="sm" color="gray">
            Not registered?<Link to="/signup"> Signup here</Link>
          </Text>
        </Card>
      </div>
    </Form>
  )
}
