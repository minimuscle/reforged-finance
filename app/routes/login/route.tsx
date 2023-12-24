import { Center } from "@mantine/core"
import styles from "./login.module.css"
import LoginCard from "./components/LoginCard"
import { ActionFunctionArgs } from "@remix-run/node"
import type { LinksFunction } from "@remix-run/node"
import LoginCardAction from "./components/LoginCardAction"

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  console.log("we got")
  const errors = LoginCardAction(formData)
  console.log("we got here")
  return { errors: errors }
}

export default function Login() {
  return (
    <div className={styles.container}>
      <Center h={"100%"}>
        <LoginCard />
      </Center>
    </div>
  )
}
