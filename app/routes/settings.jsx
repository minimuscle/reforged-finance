import React, { useState } from "react"
import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
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

export const meta = () => {
  return [{ title: "Settings | Personal Finance" }]
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

  const { data: user } = await supabase.auth.getUser()
  return {
    user,
    headers,
  }
}

export default function Settings() {
  const fetcher = useFetcher()
  const { user } = useLoaderData()
  return (
    <>
      <Stack align="center" mb="50px">
        <Title>Settings</Title>
        <Text>Change Base Settings Here</Text>
      </Stack>
      <fetcher.Form>
        <Flex gap={"lg"} wrap={"wrap"} justify={"center"}>
          <Stack miw={315} w="30%">
            <Title align="center">General</Title>
            <Flex gap={"md"} align={"center"}>
              <Input.Wrapper
                w={"65%"}
                label="Employement Income"
                description="Your pre-tax yearly income from your job."
                error=""
              >
                <InputBase
                  mt={3}
                  component={IMaskInput}
                  mask="$num"
                  blocks={{
                    num: {
                      mask: Number,
                      thousandsSeparator: ",",
                    },
                  }}
                  placeholder="Yearly Income"
                />
              </Input.Wrapper>
              <Select
                w={"30%"}
                label="Currency"
                data={["AUD ($)", "USD ($)", "NZD ($)", "EUR (€)"]}
                defaultValue="AUD ($)"
                allowDeselect={false}
                mt="17px"
              />
            </Flex>
            <Input.Wrapper
              label="Net Regular Income"
              description="Your post-tax income (how much you get each pay in your account)"
              error=""
            >
              <InputBase
                mt={3}
                component={IMaskInput}
                mask="$num"
                blocks={{
                  num: {
                    mask: Number,
                    radix: ".",
                    thousandsSeparator: ",",
                  },
                }}
                placeholder="Income"
              />
            </Input.Wrapper>
            <Select
              label="Salary Frequency"
              description="How often you get paid"
              data={["Monthly", "Fortnightly (2-Weeks)", "Weekly"]}
              defaultValue="Monthly"
              allowDeselect={false}
            />
          </Stack>
          <Divider orientation="vertical" />
          <Stack Stack miw={315} w="30%">
            <Title align="center">Targets</Title>
            <Input.Wrapper
              label="Cash Goal"
              description="Set a Cash Goal to work towards"
              error=""
            >
              <InputBase
                mt={3}
                component={IMaskInput}
                mask="$num"
                blocks={{
                  num: {
                    mask: Number,
                    thousandsSeparator: ",",
                  },
                }}
                placeholder="Cash Goal"
              />
            </Input.Wrapper>
            <NumberInput
              label="Emergency Fund Goal"
              description="How many months you want to save for. We recommend 12 months"
              placeholder="Fund Goal"
              allowNegative={false}
              allowDecimal={false}
              suffix=" Months"
            />
            <Switch
              defaultChecked
              labelPosition="left"
              label="Home Deposit"
              description="Are you saving for a home deposit?"
              className="switch"
              mt="15px"
            />
            <Input.Wrapper
              description="How much are you saving for a home deposit?"
              error=""
            >
              <Input placeholder="Deposit Amount" />
            </Input.Wrapper>
          </Stack>
          <Divider orientation="vertical" />
          <Stack Stack miw={315} w="30%">
            <Title align="center">Profile</Title>
            <Input.Wrapper
              label="Account"
              description="Used to login to this application"
              error=""
            >
              <Input disabled value={user?.user?.email} />
            </Input.Wrapper>
            <Input.Wrapper
              label="Email Delivery"
              description="The address we will send emails from inside this app to. This can be different from your account username"
              error=""
            >
              <Input placeholder="joshthiele@live.com.au" />
            </Input.Wrapper>
            <Input.Wrapper
              label="Name"
              description="Your name for use in this app, it can be anything you like"
              error=""
            >
              <Input placeholder="John Smith" />
            </Input.Wrapper>
          </Stack>
        </Flex>
        <Flex mt="50px" justify="center">
          <Button type="submit">Save Changes</Button>
        </Flex>
      </fetcher.Form>
    </>
  )
}
