import {
  ActionIcon,
  Badge,
  Button,
  Flex,
  Grid,
  Input,
  Paper,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core"
import { formatter } from "../../../../util"
import SortableMonthlyBudget from "./SortableMonthlyBudget"
import { useState } from "react"
import { useFetcher, useOutletContext } from "@remix-run/react"
import { RiCheckFill } from "react-icons/ri/index.js"

const MonthlyBudget = () => {
  const data = useOutletContext()
  const budget = data.budget
  const [budgetItems, setBudgetItems] = useState(budget)
  const [editing, setEditing] = useState(false)
  const fetcher = useFetcher()
  return (
    <Paper shadow="xl" p="md" withBorder miw="900px" align="center">
      <Stack justify="flex-start">
        <Title>Monthly Budget</Title>
        <Grid>
          <Grid.Col span={2}>Item</Grid.Col>
          <Grid.Col span={2}>Monthly Cost</Grid.Col>
          <Grid.Col span={2}>Allocation</Grid.Col>
          <Grid.Col span={2}>Weekly Cost</Grid.Col>
          <Grid.Col span={2}>Yearly Cost</Grid.Col>
          <Grid.Col span={2}>Bank Account</Grid.Col>
        </Grid>
        {budgetItems?.map((account) => (
          <SortableMonthlyBudget
            key={account.id}
            {...account}
            handle
            isEdit={false}
          />
        ))}
        {editing ? (
          <Paper className="account" shadow="xs" withBorder p="sm" mb="10px">
            <fetcher.Form method="POST">
              <Grid>
                <Grid.Col span={2} align="left">
                  <Input name="bank_name" placeholder="Bank" />
                </Grid.Col>
                <Grid.Col span={2} align="left">
                  <Input name="balance" type="number" placeholder="0" />
                </Grid.Col>
                <Grid.Col span={2} align="center">
                  <input type="hidden" name="currency" value="AUD" />
                  <Text c="lightGray">AUD</Text>
                </Grid.Col>
                <Grid.Col span={2} align={"center"}>
                  <ActionIcon
                    color="green"
                    variant="light"
                    m={"0 -5px"}
                    type="submit"
                    name="_action"
                    value="addBank"
                  >
                    <RiCheckFill className="always" />
                  </ActionIcon>
                </Grid.Col>
              </Grid>
            </fetcher.Form>
          </Paper>
        ) : (
          <Flex>
            <Button
              size="xs"
              color="gray"
              variant="light"
              onClick={() => setEditing(true)}
            >
              Add Monthly Budget Item
            </Button>
          </Flex>
        )}
      </Stack>
    </Paper>
  )
}

export default MonthlyBudget
