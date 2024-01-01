import {
  Avatar,
  Box,
  Flex,
  Group,
  Image,
  Space,
  Stack,
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
        prefetch="intent"
        to={"/"}
        style={{ textDecoration: "none", color: "unset" }}
      >
        <Group>
          <Image h={"auto"} w={"35px"} src={Logo} />
          <Title size={"h2"}>WealthFire</Title>
        </Group>
      </Link>
      <Box>
        <UserMenu>
          <Avatar mr={10} />
          <Stack gap={0}>
            <Title mb={-5} order={5}>
              {user.name}
            </Title>
            <Text c={"gray"} size="xs">
              {user.email}
            </Text>
          </Stack>
        </UserMenu>
      </Box>
    </Flex>
  )
}
