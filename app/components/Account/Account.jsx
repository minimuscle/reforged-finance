import { Avatar, Text } from "@mantine/core"
import { useLoaderData } from "@remix-run/react"

const Account = () => {
  const { user, auth } = useLoaderData()
  return (
    <>
      <Text align="right">{user?.name || auth?.user?.email}</Text>
      <Avatar variant="light" color={"blue"} radius="xl" src="">
        {user?.name?.charAt(0) || auth?.user?.email?.charAt(0)}
      </Avatar>
    </>
  )
}

export default Account
