import { useForm } from "react-hook-form"
import "./_login.css"
import { Link } from "@tanstack/react-router"
import { auth } from "containers/auth/queries"
import { Card } from "components/Card"
import { Text } from "components/Text"
import { Flex } from "components/Flex"
import { Button } from "@mantine/core"
import { Input } from "components/Form/Input"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Login() {
  /**********  HOOKS  **********/
  const methods = useForm()
  const { mutate: loginUser } = auth.loginUser.useMutation()

  /********  FUNCTIONS  ********/
  function handleSubmit(data: any) {
    loginUser(data)
  }

  /*********  RENDER  *********/
  return (
    <div className="login">
      <Card className="login__card">
        <Text as="h1" size="xxl" alignCenter>
          Login
        </Text>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <Flex direction="column" gap="10px">
            <Input.HookForm name="email" label="Email" />
            <Input.HookForm name="password" label="Password" type="password" />

            <Text className="login__forgot" size="sm">
              <Link to="/">Forgot Password?</Link>
            </Text>
            <Button color="emerald" type="submit">
              Login
            </Button>
            <Text size="sm" color="gray">
              Not registered? <Link to="/signup">Signup here</Link>
            </Text>
          </Flex>
        </form>
      </Card>
    </div>
  )
}
