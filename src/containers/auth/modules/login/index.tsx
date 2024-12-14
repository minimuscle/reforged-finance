import { FormProvider, useForm } from "react-hook-form"
import "./_login.css"
import { Link } from "@tanstack/react-router"
import { auth } from "containers/auth/queries"
import { Card } from "components/Card"
import { Text } from "components/Text"
import { Flex } from "components/Flex"
import { Button } from "@mantine/core"
import { Input } from "components/Form/Input"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { LogoCard } from "components/Logo"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
const schema = z.object({
  email: z.string({ message: "Email is required" }).email({ message: "Invalid email address" }),
  password: z.string().min(1, "Password is required"),
})

type Schema = z.infer<typeof schema>
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Login() {
  /**********  HOOKS  **********/
  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
  })
  const { mutate: loginUser } = auth.loginUser.useMutation()

  /********  FUNCTIONS  ********/
  function handleSubmit(data: Schema) {
    loginUser(data)
  }

  /*********  RENDER  *********/
  return (
    <div className="login">
      <LogoCard className="login__logo" />
      <Card className="login__card">
        <Text as="h1" size="xxl" alignCenter>
          Login
        </Text>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <FormProvider {...methods}>
            <Flex direction="column" gap="10px">
              <Input.HookForm name="email" label="Email" />
              <Input.HookForm name="password" label="Password" type="password" />

              <Text className="login__forgot" size="sm" alignRight>
                <Link to="/">Forgot Password?</Link>
              </Text>

              <Button color="sky" type="submit">
                Login
              </Button>
              <Text size="sm" color="gray">
                Not registered? <Link to="/signup">Signup here</Link>
              </Text>
            </Flex>
          </FormProvider>
        </form>
      </Card>
    </div>
  )
}
