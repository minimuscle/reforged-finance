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
import {
  useNavigate,
  useFetcher,
  useLoaderData,
  useOutletContext,
} from "@remix-run/react"
import React, { useState } from "react"
import Accounts from "../components/Widgets/Cash/Accounts"
import { createSupabaseServerClient } from "../util/supabase.server"
import SubmitMonth from "../components/SubmitMonth"
import { redirect } from "@remix-run/node"

export const meta = () => {
  return [{ title: "Add New Month | WealthForge" }]
}

export const action = async ({ request }) => {
  const formData = await request.formData()
  const supabase = createSupabaseServerClient({ request })
  const { data: auth } = await supabase.auth.getUser()
  const { _action, ...values } = Object.fromEntries(formData)

  const { data: history } = await supabase
    .from("history")
    .select("*")
    .order("date", { ascending: true })

  const lastHistory = history.slice(-1)[0]
  const month = new Date(Date.now()).getMonth() + 1
  const year = new Date(Date.now()).getFullYear()
  const date = `${year}-${month}-01`
  let id
  if (date == lastHistory.date) {
    id = lastHistory.id
  }

  switch (_action) {
    case "completeForm":
      const { data, error } = await supabase
        .from("history")
        .upsert(
          { ...values, user_id: auth.user.id, id: id },
          { onConflict: "id" }
        )
        .select()
      if (error) console.log(error)
      return redirect("/")
    default:
      break
  }

  return null
}

/** //TODO: Check if the user has already added a month this year and
 * if so ask them "Whoa it looks like you have already submitted this month,
 * are you sure you want to continue?"
 *
 * If yes, then it will override the current data in this month.
 *
 */

export default function NewMonth() {
  const data = useOutletContext()
  const history = data.history
  const [opened, { open, close }] = useDisclosure(true)
  const navigate = useNavigate()
  const [active, setActive] = useState(0)
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current))
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))
  const lastHistory = history.slice(-1)[0]
  const month = new Date(Date.now()).getMonth() + 1
  const year = new Date(Date.now()).getFullYear()
  const date = `${year}-${month}-01`

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
            <Text>Click the complete button below to save the changes!</Text>
            {date == lastHistory.date && (
              <>
                <br />
                <Title order={2} c="red">
                  Whoa!
                </Title>
                <Text c="red">
                  It looks like you are submitting a month that you have already
                  submitted!
                  <br />
                  This will{" "}
                  <Text span fw={700}>
                    override
                  </Text>{" "}
                  the data that you have already.
                  <br />
                  If you are sure about that, then please continue.
                </Text>
              </>
            )}
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
            <SubmitMonth />
          ) : (
            <Button onClick={nextStep}>Next Step</Button>
          )}
        </Group>
      </Stack>
    </Modal>
  )
}
