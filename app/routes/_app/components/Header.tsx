import { Avatar, Box, Flex, Space, Text } from "@mantine/core"
import UserMenu from "./UserMenu"
import { useLoaderData } from "@remix-run/react"
import { loader } from "../route"
import type { userProfile } from "~/utils/supabase"

export default function Header() {
  const data = useLoaderData<typeof loader>()
  const user = data.user as userProfile
  return (
    <Flex p={"md"} h={"100%"} justify={"space-between"} align={"center"}>
      <Box>Logo</Box>
      <Box>
        <UserMenu>
          <Avatar />
          <Space w={10} />
          <Text>{user?.name}</Text>
        </UserMenu>
      </Box>
    </Flex>
  )
}
