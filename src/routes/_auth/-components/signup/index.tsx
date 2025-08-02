import { Link, useNavigate } from "@tanstack/react-router"
import { Card } from "components/Card"
import { useAppForm } from "components/Form/AppForm"
import { Form } from "components/Form/AppForm/Form"
import { createFormOptions } from "components/Form/AppForm/createFormOptions"
import { LogoCard } from "components/Logo"
import { Text } from "components/Text"
import { query } from "src/queries/queryTree"
import * as z from "zod"
import styles from "./_signup.module.css"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
const schema = z
  .object({
    email: z.email({ error: "Invalid email address" }),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Signup() {
  /**********  HOOKS  **********/
  const navigate = useNavigate()
  const { mutateAsync: signupUserAsync } = query.auth.signup.useMutation()
  const form = useAppForm({
    ...createFormOptions(schema, defaultValues),
    onSubmit: async ({ value }) => {
      await signupUserAsync(value)
      return navigate({
        to: "/",
      })
    },
  })

  /*********  RENDER  *********/
  return (
    <Form form={form}>
      <div className={styles.signup}>
        <LogoCard />
        <Card className={styles.card}>
          <Text as="h1" size="xxl" alignCenter>
            Sign Up
          </Text>

          <form.AppField name="email" children={(field) => <field.Input label="Email" />} />
          <form.AppField name="password" children={(field) => <field.Input.Password label="Password" />} />
          <form.AppField
            name="confirmPassword"
            children={(field) => <field.Input.Password label="Confirm Password" />}
          />
          <form.Submit label="Sign Up" />
          <Text size="sm" color="gray">
            Already registered?<Link to="/login"> Login here</Link>
          </Text>
        </Card>
      </div>
    </Form>
  )
}
