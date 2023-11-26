import React, { useState } from "react"
import {
  Badge,
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
import "../styles/styles.css"
import {
  RiVipCrownLine,
  RiLifebuoyLine,
  RiBardLine,
} from "react-icons/ri/index.js"

export const meta = () => {
  return [{ title: "Premium | WealthForge" }]
}

export default function Premium() {
  const [selected, setSelected] = useState("none")
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
          <Text className="pricing">
            $
            <Text className="large" span>
              0
            </Text>
            <Text className="small" span>
              / free
            </Text>
          </Text>
          <Divider m="30px 0" />
          <List>
            <List.Item>Net Worth Overview</List.Item>
            <List.Item>Historical Data</List.Item>
            <List.Item>Basic Budget</List.Item>
            <List.Item>Liabilities / Debts Tracking</List.Item>
            <List.Item>Super Tracking</List.Item>
            <List.Item>Stocks</List.Item>
          </List>
          <Button mt="30px" disabled fullWidth>
            Current Plan
          </Button>
        </Paper>
        <Paper
          withBorder
          bg={selected === "premium" ? "violet" : ""}
          className={selected === "premium" ? "white" : ""}
          shadow="xl"
          p="xl"
          w="300px"
        >
          <Group justify="space-between" mb="5px">
            <RiVipCrownLine size="1.5em" />
            <Badge
              variant="gradient"
              gradient={{ from: "blue", to: "teal", deg: 90 }}
            >
              Most Popular
            </Badge>
          </Group>
          <Title>Premium</Title>
          <Text>A small fee, all the content</Text>
          <Text className="pricing">
            $
            <Text className="large" span>
              5
            </Text>
            <Text className="small" span>
              / month
            </Text>
          </Text>
          <Divider m="30px 0" />
          <List>
            <List.Item>Detailed Budgeting System</List.Item>
            <List.Item>Export Overview as PDF</List.Item>
            <List.Item>Export History Details</List.Item>
            <List.Item>Live Stock Tracking</List.Item>
            <List.Item>FIRE Dashboard</List.Item>
            <List.Item>Premium Support</List.Item>
          </List>
          <Button
            mt="30px"
            color="violet"
            variant={selected === "premium" ? "white" : "filled"}
            fullWidth
            onClick={() => setSelected("premium")}
          >
            Select{selected === "premium" ? "ed" : ""}
          </Button>
        </Paper>
        <Paper
          withBorder
          bg={selected === "lifetime" ? "violet" : ""}
          className={selected === "lifetime" ? "white" : ""}
          shadow="xl"
          p="xl"
          w="300px"
        >
          <RiLifebuoyLine size="1.5em" />
          <Title>Lifetime</Title>
          <Text>Premium Forever.</Text>
          <Text className="pricing">
            $
            <Text className="large" span>
              60
            </Text>
            <Text className="small" span>
              / lifetime
            </Text>
          </Text>
          <Divider m="30px 0" />
          <List>
            <List.Item>All Premium Features</List.Item>
            <List.Item>One-Time Fee</List.Item>
            <List.Item>No On-Going Costs</List.Item>
            <List.Item>Same Premium Support</List.Item>
          </List>
          <Button
            mt="80px"
            color="violet"
            variant={selected === "lifetime" ? "white" : "filled"}
            fullWidth
            onClick={() => setSelected("lifetime")}
          >
            Select{selected === "lifetime" ? "ed" : ""}
          </Button>
        </Paper>
      </Flex>
    </>
  )
}
