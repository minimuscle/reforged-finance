import styles from "./_login.module.css"
import { Link, useNavigate } from "@tanstack/react-router"
import { Card } from "components/Card"
import { Text } from "components/Text"
import { Button } from "@mantine/core"
import * as z from "zod"
import { LogoCard } from "components/Logo"
import { query } from "src/queries/queryTree"
import { useAppForm } from "components/Form/AppForm"
import { Form } from "components/Form/AppForm/Form"

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
      console.log(value)
      // await loginUserAsync(value)
      // return navigate({
      //   to: "/"
      // })
    },
  })

  /*********  RENDER  *********/
  return (
    <Form onSubmit={form.handleSubmit}>
      <div className={styles.login}>
        <LogoCard />
        <Card className={styles.card}>
          <Text as="h1" size="xxl" alignCenter>
            Login
          </Text>

          <form.AppField name="email" children={(field) => <field.Input label="Email" autoComplete="email" />} />
          <form.AppField
            name="password"
            children={(field) => <field.Input label="Password" autoComplete="password" />}
          />
          <Text className={styles.forgot} size="sm" alignRight>
            <Link to="/">Forgot Password?</Link>
          </Text>
          <Button fullWidth color="sky" type="submit">
            Login
          </Button>
          <Text size="sm" color="gray">
            Not registered?<Link to="/signup"> Signup here</Link>
          </Text>
        </Card>
      </div>
    </Form>
  )
}
