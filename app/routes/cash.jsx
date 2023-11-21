import React, { useState } from "react"
import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Group,
  Input,
  InputBase,
  List,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Space,
  Stack,
  Switch,
  Table,
  Text,
  Title,
  Tooltip,
} from "@mantine/core"
import { Form, useFetcher, useLoaderData } from "@remix-run/react"
import { IMaskInput } from "react-imask"
import "../styles/styles.css"
import {
  RiVipCrownLine,
  RiLifebuoyLine,
  RiBardLine,
} from "react-icons/ri/index.js"
import { createServerClient, parse, serialize } from "@supabase/ssr"
import currency from "currency.js"

export const meta = () => {
  return [{ title: "Cash | Personal Finance" }]
}

export const moneyFormatter = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  minimumFractionDigits: 0,
})

export const loader = async ({ request }) => {
  const cookies = parse(request.headers.get("Cookie") ?? "")
  const headers = new Headers()

  const supabase = createServerClient(
    process.env.DATABASE_URL,
    process.env.DB_KEY,
    {
      cookies: {
        get(key) {
          return cookies[key]
        },
        set(key, value, options) {
          headers.append("Set-Cookie", serialize(key, value, options))
        },
        remove(key, options) {
          headers.append("Set-Cookie", serialize(key, "", options))
        },
      },
    }
  )

  const { data: auth } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from("profiles").select().single()
  return {
    auth,
    profile,
    headers,
  }
}

export default function Cash() {
  const fetcher = useFetcher()
  const { auth, profile } = useLoaderData()
  return (
    <>
      <Grid pb="100px">
        <Grid.Col span={6}>
          <Paper shadow="xl" p="md" withBorder>
            <Stack>
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
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>2Up Account</Table.Td>
                    <Table.Td>
                      <Select
                        maw="85px"
                        value="AUD"
                        data={["AUD", "USD", "NZD", "EUR"]}
                        defaultValue={profile?.currency || "AUD"}
                        name="currency"
                        allowDeselect={false}
                      />
                    </Table.Td>
                    <Table.Td>$1305</Table.Td>
                  </Table.Tr>
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
