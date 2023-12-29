import {
  Avatar,
  Box,
  Flex,
  Group,
  Image,
  Space,
  Text,
  Title,
} from "@mantine/core"
import UserMenu from "./UserMenu"
import { Link, useLoaderData } from "@remix-run/react"
import { loader } from "../route"
import type { userProfile } from "~/utils/supabase"
import Logo from "~/assets/images/Logo.jpg"

export default function Header() {
  const data = useLoaderData<typeof loader>()
  const user = data.user as userProfile
  return (
    <Flex p={"md"} h={"100%"} justify={"space-between"} align={"center"}>
      <Link
        to={"/"}
        prefetch="intent"
        style={{ textDecoration: "none", color: "unset" }}
      >
        <Group>
          <Image h={"auto"} w={"35px"} src={Logo} />
          <Title size={"h2"}>WealthFire</Title>
        </Group>
      </Link>
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
