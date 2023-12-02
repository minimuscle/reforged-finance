import {
  Box,
  Button,
  Container,
  Group,
  Modal,
  ModalOverlay,
  Stack,
  Stepper,
  Text,
  Title,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { useNavigate } from "@remix-run/react"
import React, { useState } from "react"
import Accounts from "../components/Widgets/Cash/Accounts"
import { createSupabaseServerClient } from "../util/supabase.server"

export const meta = () => {
  return [{ title: "Add New Month | WealthForge" }]
}

export const action = async ({ request }) => {
  const supabase = createSupabaseServerClient({ request })

  const { error } = await supabase

  return null
}

export const loader = async ({ request }) => {
  const supabase = createSupabaseServerClient({ request })
  const { data: cash } = await supabase
    .from("cash")
    .select("*")
    .order("weight", { ascending: true })

  return {
    cash,
  }
}

/** //TODO: Check if the user has already added a month this year and
 * if so ask them "Whoa it looks like you have already submitted this month,
 * are you sure you want to continue?"
 *
 * If yes, then it will override the current data in this month.
 *
 */

export default function Debts() {
  const [opened, { open, close }] = useDisclosure(true)
  const navigate = useNavigate()
  const [active, setActive] = useState(0)
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current))
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))
  return (
    <Modal
      opened={opened}
      onClose={() => navigate("/")}
      fullScreen
      radius={0}
      transitionProps={{ transition: "fade", duration: 200 }}
    >
      <Title align="center">Add Month</Title>
      <Text align="center">Add a new month to your data</Text>
      <Stack mt="20px" align="center" justify="center">
        <Stepper
          w={1000}
          align="center"
          active={active}
          onStepClick={setActive}
        >
          <Stepper.Step label="Add Cash" description="Update Bank Accounts">
            <Text>
              Check to make sure that these are all correct and up to date
            </Text>
            <Box mt="10px" w="600px">
              <Accounts isEdit />
            </Box>
          </Stepper.Step>
          <Stepper.Step label="Add Super" description="Update Super">
            This step is coming soon. Please skip.
          </Stepper.Step>
          <Stepper.Step
            label="Add Debts"
            description="Update Debs / Liabilities"
          >
            This step is coming soon. Please skip.
          </Stepper.Step>
          <Stepper.Step
            label="Update Property"
            description="Update Property Values"
          >
            This step is coming soon. Please skip.
          </Stepper.Step>
          <Stepper.Completed>
            <Title>Completed!</Title>
          </Stepper.Completed>
        </Stepper>
        <Group justify="center" mt="xl" mb="xl">
          {active === 0 ? (
            <Button color="red" variant="light" onClick={() => navigate("/")}>
              Cancel
            </Button>
          ) : (
            <Button color="gray" variant="light" onClick={prevStep}>
              Back
            </Button>
          )}
          {active === 4 ? (
            <Button color="green" onClick={nextStep}>
              Complete Month
            </Button>
          ) : (
            <Button onClick={nextStep}>Next Step</Button>
          )}
        </Group>
      </Stack>
    </Modal>
  )
}
