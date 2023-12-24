import { Avatar, Box, Flex, Space, Text } from "@mantine/core"
import UserMenu from "./UserMenu"
import { useLoaderData } from "@remix-run/react"
import { loader } from "../route"

export default function Header() {
  const data = useLoaderData<typeof loader>()
  console.log(data)
  return (
    <Flex p={"md"} h={"100%"} justify={"space-between"} align={"center"}>
      <Box>Logo</Box>
      <Box>
        <UserMenu>
          <Avatar />
          <Space w={10} />
          <Text>{data?.user?.email?.toString()}</Text>
        </UserMenu>
      </Box>
    </Flex>
  )
}
