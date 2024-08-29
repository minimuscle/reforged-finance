import {
  Badge,
  Button,
  Divider,
  Flex,
  Group,
  List,
  Paper,
  Text,
  Title,
} from "@mantine/core"
import styles from "./premium.module.css"
import { Dispatch, SetStateAction } from "react"

type Props = {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  icon: React.ReactNode
  popular?: boolean
  title: string
  description: string
  price: number | "free"
  currentPlan?: boolean
  children: React.ReactNode
}

export default function Card({
  selected,
  setSelected,
  icon,
  popular = false,
  currentPlan = false,
  title,
  description,
  price,
  children,
}: Props) {
  return (
    <Paper
      withBorder
      bg={selected === title ? "violet" : ""}
      className={selected === title ? styles.white : ""}
      shadow="xl"
      p="xl"
      w="300px"
    >
      <Flex direction={"column"} h={"100%"}>
        <Group justify="space-between" mb="5px">
          {icon}
          {popular && (
            <Badge
              variant="gradient"
              gradient={{ from: "blue", to: "teal", deg: 90 }}
            >
              Most Popular
            </Badge>
          )}
        </Group>
        <Title>{title}</Title>
        <Text>{description}</Text>
        {price === "free" ? (
          <Text className={styles.free}>Free</Text>
        ) : (
          <Text
            className={`${styles.pricing} ${
              selected === title ? styles.white : ""
            }`}
          >
            <Text
              className={`${styles.dollar} ${
                selected === title ? styles.white : ""
              }`}
              span
            >
              $
            </Text>
            <Text
              className={`${styles.large} ${
                selected === title ? styles.white : ""
              }`}
              span
            >
              {price}
            </Text>
            <Text span>/ month</Text>
          </Text>
        )}

        <Divider m="10px 0 30px 0" />
        <Flex direction={"column"} justify={"space-between"} h={"100%"}>
          {children}
          <Button
            mt="30px"
            color="violet"
            variant={selected === title ? "white" : "filled"}
            fullWidth
            type={selected === title ? "submit" : "button"}
            disabled={currentPlan}
            onClick={() => setSelected(title)}
          >
            {currentPlan
              ? "Current Plan"
              : selected === title
              ? "Buy Now"
              : "Select"}
          </Button>
        </Flex>
      </Flex>
    </Paper>
  )
}
