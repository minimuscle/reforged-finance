import React, { useState } from "react"
import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Group,
  List,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Table,
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
  return [{ title: "Settings | Personal Finance" }]
}

export default function Settings() {
  return (
    <>
      <Stack align="center" mb="50px">
        <Title>Settings</Title>
        <Text>Change Base Settings Here</Text>
      </Stack>
      <Flex justify="center" gap="xl" wrap="wrap"></Flex>
    </>
  )
}
