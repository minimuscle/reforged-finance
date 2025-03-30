import { FormProvider, useForm } from "react-hook-form"
import styles from "./_signup.module.css"
import { Link } from "@tanstack/react-router"
import { auth } from "../../queries"
import { LogoCard } from "components/Logo"
import { Card } from "components/Card"
import { Text } from "components/Text"
import { Flex } from "components/Flex"
import { Input } from "components/Form/Input"
import { Button, Space } from "@mantine/core"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

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
export function Signup() {
  /**********  HOOKS  **********/
  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
  })
  const { mutate: signupUser } = auth.signupUser.useMutation()

  /********  FUNCTIONS  ********/
  function handleSubmit(data: Schema) {
    signupUser(data)
  }

  /*********  RENDER  *********/
  return (
    <div className={styles.signup}>
      <LogoCard />
      <Card>
        <Text as="h1" size="xxl" alignCenter>
          Sign Up
        </Text>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <FormProvider {...methods}>
            <Flex direction="column" gap="10px">
              <Input.HookForm name="email" label="Email" />
              <Input.HookForm name="password" label="Password" type="password" />
              <Input.HookForm name="repeat_password" label="Repeat Password" type="password" />
              <Space h={10} />
              <Button color="sky" type="submit">
                Signup
              </Button>
              <Text size="sm" color="gray">
                Already registered? <Link to="/login">Login here</Link>
              </Text>
            </Flex>
          </FormProvider>
        </form>
      </Card>
    </div>
  )
}
