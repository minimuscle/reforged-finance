import { useState } from "react"
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  List,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import {
  RiVipCrownLine,
  RiLifebuoyLine,
  RiBardLine,
} from "react-icons/ri/index.js"
import Card from "./Card"
import { Form, Link } from "@remix-run/react"

export const meta = () => {
  return [{ title: "Premium | WealthFire" }]
}

export default function Premium() {
  const [selected, setSelected] = useState("none")
  return (
    <Box>
      <Button
        component={Link}
        to={"/"}
        prefetch="intent"
        variant="light"
        m={"30px -30px -30px 30px"}
      >
        Back
      </Button>

      <Stack align="center" m="50px 0">
        <Title>Premium</Title>
        <Text>
          Premium unlocks the best of the best! Get all the latest features and
          the best support!
        </Text>
      </Stack>
      <Flex justify="center" gap="xl" wrap="wrap">
        <Card
          selected={selected}
          setSelected={setSelected}
          currentPlan
          icon={<RiBardLine size="1.5em" />}
          title="Base"
          description="Free plan for starters"
          price="free"
        >
          <List>
            <List.Item>Net Worth Overview</List.Item>
            <List.Item>Historical Data</List.Item>
            <List.Item>Basic Budget</List.Item>
            <List.Item>Liabilities / Debts Tracking</List.Item>
            <List.Item>Super Tracking</List.Item>
            <List.Item>Stocks</List.Item>
          </List>
        </Card>
        <Card
          selected={selected}
          setSelected={setSelected}
          popular
          icon={<RiVipCrownLine size="1.5em" />}
          title="Premium"
          description="A small fee, all the content"
          price={5}
        >
          <List>
            <List.Item>Dark Mode</List.Item>
            <List.Item>Detailed Budgeting System</List.Item>
            <List.Item>Export Overview as PDF</List.Item>
            <List.Item>Export History Details</List.Item>
            <List.Item>Live Stock Tracking</List.Item>
            <List.Item>FIRE Dashboard</List.Item>
            <List.Item>Premium Support</List.Item>
          </List>
        </Card>
        <Card
          selected={selected}
          setSelected={setSelected}
          icon={<RiLifebuoyLine size="1.5em" />}
          title="Lifetime"
          description="Premium, Forever."
          price={60}
        >
          <List>
            <List.Item>All Premium Features</List.Item>
            <List.Item>One-Time Fee</List.Item>
            <List.Item>No On-Going Costs</List.Item>
            <List.Item>Same Premium Support</List.Item>
          </List>
        </Card>
      </Flex>
    </Box>
  )
}
