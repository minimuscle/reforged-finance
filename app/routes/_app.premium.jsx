import React from "react"
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core"
import "../styles/styles.css"
import { RiBardFill, RiBardLine } from "react-icons/ri/index.js"

export const meta = () => {
  return [{ title: "Premium | Personal Finance" }]
}

const data = [
  {
    year: 2021,
    month: "January",
    cash: 9723,
    super: 6881,
    debts: -49435,
    income: 4888,
  },
  {
    year: 2021,
    month: "Febuary",
    cash: 5723,
    super: 6881,
    debts: -49435,
    income: 4888,
  },
  {
    year: 2021,
    month: "March",
    cash: 7646,
    super: 8881,
    debts: -46435,
    income: 5022,
  },
]

export default function Premium() {
  return (
    <>
      <Stack align="center" mb="50px">
        <Title>Premium</Title>
        <Text>Get Premium</Text>
      </Stack>
      <Flex justify="center" gap="xl" wrap="wrap">
        <Paper withBorder shadow="xl" p="xl" w="300px">
          <RiBardLine size="1.5em" />
          <Title>Base</Title>
          <Text>Free plan for starters</Text>
          <Text>
            $<Text span>0</Text>
          </Text>
          <Divider m="30px 0" />
          <Text>History</Text>
          <Button mt="30px" disabled fullWidth>
            Free
          </Button>
        </Paper>
        <Paper withBorder shadow="xl" p="xl" w="300px">
          <Title align="center">Monthly</Title>
          <Divider m="30px 0" />
          <Text>History</Text>
          <Button mt="30px" color="violet" fullWidth>
            $5 / month (AUD)
          </Button>
        </Paper>
        <Paper withBorder shadow="xl" p="xl" w="300px">
          <Title align="center">Lifetime</Title>
          <Divider m="30px 0" />
          <Text>History</Text>
          <Button mt="30px" color="violet" fullWidth>
            $60
          </Button>
        </Paper>
      </Flex>
    </>
  )
}
