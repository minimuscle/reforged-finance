import { Button, Flex, Grid, Paper, Stack, Table, Title } from "@mantine/core"
import { useFetcher } from "@remix-run/react"
import "../styles/styles.css"
import { createServerClient, parse, serialize } from "@supabase/ssr"
import BankAccounts from "../components/Widgets/Bank/BankAccounts"
import { createSupabaseServerClient } from "../util/supabase.server"

export const meta = () => {
  return [{ title: "Cash | WealthForge" }]
}

export const loader = async ({ request }) => {
  const supabase = createSupabaseServerClient({ request })

  const { data: auth } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from("profiles").select().single()
  const { data: cash } = await supabase.from("cash").select("*")
  return {
    auth,
    profile,
    cash,
  }
}

export const action = async ({ request }) => {
  const data = await request.formData()
  const supabase = createSupabaseServerClient({ request })

  return null
}

export default function Cash() {
  return (
    <>
      <Grid pb="100px">
        <Grid.Col span={6}>
          <Paper shadow="xl" p="md" withBorder>
            <Stack pos={"relative"}>
              <Button pos={"absolute"} right={0}>
                Add Account
              </Button>
              <Title align="center">Bank Accounts</Title>
              <Table
                borderColor="blue"
                className="tableBanks"
                highlightOnHover
                verticalSpacing="lg"
                withRowBorders={false}
              >
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Account Name</Table.Th>
                    <Table.Th>Currency</Table.Th>
                    <Table.Th>Balance</Table.Th>
                    <Table.Th></Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <BankAccounts />
                </Table.Tbody>
              </Table>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
      <Flex bg={"blue"} gap={"lg"} wrap={"wrap"} justify={"center"}></Flex>
    </>
  )
}
