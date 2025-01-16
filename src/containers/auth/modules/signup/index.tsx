import { FormProvider, useForm } from "react-hook-form"
import "./_signup.css"
import { Link } from "@tanstack/react-router"
import { auth } from "../../queries"
import { LogoCard } from "components/Logo"
import { Card } from "components/Card"
import { Text } from "components/Text"
import { Flex } from "components/Flex"
import { Input } from "components/Form/Input"
import { Button, Space } from "@mantine/core"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Signup() {
  /**********  HOOKS  **********/
  const methods = useForm()
  const { mutate: signupUser } = auth.signupUser.useMutation()

  /********  FUNCTIONS  ********/
  function handleSubmit(data: any) {
    signupUser(data)
  }

  /*********  RENDER  *********/
  return (
    <div className="login">
      <LogoCard className="login__logo" />
      <Card className="login__card">
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
