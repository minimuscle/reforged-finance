import {
  Button,
  Center,
  Group,
  NumberInput,
  Paper,
  Select,
  Space,
  Stack,
  Stepper,
  Switch,
  Text,
  TextInput,
  Title,
} from "@mantine/core"
import styles from "./setup.module.css"
import { FormEvent, useEffect, useReducer, useState } from "react"
import { Form, useSubmit } from "@remix-run/react"
import validate from "./validate"
import { ActionFunctionArgs, redirect } from "@remix-run/node"
import { supabaseCreate } from "~/utils/supabase"

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const supabase = supabaseCreate(request)
  const session = (await supabase.auth.getSession()).data.session?.user

  const isSaving = formData.get("isSaving") as unknown as boolean
  const deposit = isSaving === true ? formData.get("deposit") : 0

  const { error } = await supabase
    .from("profiles")
    .upsert(
      {
        id: session?.id,
        name: formData.get("name"),
        email: session?.email,
        employmentIncome: formData.get("gross"),
        currency: formData.get("currency"),
        netIncome: formData.get("net"),
        salaryFrequency: formData.get("frequency"),
        cashGoal: formData.get("goal"),
        emergencyFundGoal: formData.get("emergency"),
        homeDeposit: formData.get("isSaving"),
        depositAmount: deposit,
      },
      { onConflict: "id" }
    )
    .select()
  if (error) console.log(error)
  return redirect("/")
}

export type formDataProps = {
  name: string
  currency: string
  gross?: number | ""
  net?: number | ""
  frequency: string
  goal?: number | ""
  emergency?: number | ""
  isSaving: boolean
  deposit?: number | ""
}

const initialState: formDataProps = {
  name: "",
  currency: "",
  gross: "",
  net: "",
  frequency: "",
  goal: "",
  emergency: "",
  isSaving: false,
  deposit: "",
}

function formReducer(state: formDataProps, action) {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.fieldName]: action.payload }
    default:
      return state
  }
}

//TODO: Refactor this to use Remix State management using URL search params

export default function Setup() {
  const [active, setActive] = useState(0)
  const [disabled, setDisabled] = useState(true)
  const [formData, dispatch] = useReducer(formReducer, initialState)
  const submit = useSubmit()
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current))
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))

  const handleInputChange = (fieldName: string) => (event: any) => {
    dispatch({
      type: "updateField",
      fieldName,
      payload: event.target ? event.target.value : event,
    })
  }

  const submitForm = (e: FormEvent) => {
    e.preventDefault()
    const isValid = validate(formData)
    if (isValid) {
      submit(formData, { method: "POST" })
    }
  }

  useEffect(() => {
    switch (active) {
      case 0:
        if (formData.name?.length) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
        break
      case 1:
        if (formData.currency) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
        break
      case 2:
        if (formData.gross && formData.gross >= 0) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
        break
      case 3:
        if (formData.frequency && formData.net && formData.net >= 0) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
        break
      case 4:
        if (
          formData.goal &&
          formData.goal >= 0 &&
          formData.emergency &&
          formData.emergency >= 0 &&
          (formData.isSaving ? formData.deposit && formData.deposit >= 0 : true)
        ) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
        break
      case 5:
        setDisabled(false)
        break
      default:
        setDisabled(true)
    }
  }, [formData, active])

  return (
    <div className={styles.container}>
      <Center h={"100%"} p={"xl"}>
        <Paper p="xl" shadow="md" w={"100%"} maw={1250}>
          <Center>
            <Title>Account Setup</Title>
          </Center>
          <Space h={"lg"} />
          <Form method="POST" onSubmit={(e) => submitForm(e)}>
            <Stepper color="teal" active={active}>
              <Stepper.Step label="Step 1" description="Name">
                <Center>
                  <Stack align="center">
                    <Title order={2}>Let&apos;s get some things setup</Title>
                    <Text>First things first, we need to know your name</Text>
                    <TextInput
                      w={"100%"}
                      onChange={handleInputChange("name")}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !disabled) {
                          nextStep()
                        }
                      }}
                      value={formData.name}
                      name="name"
                      placeholder="Name"
                    />
                  </Stack>
                </Center>
              </Stepper.Step>
              <Stepper.Step label="Step 2" description="Country">
                <Center>
                  <Stack align="center">
                    <Title order={2}>Hi {formData.name}!</Title>
                    <Text align="center">
                      Where are you from?
                      <br />
                      (More countries coming very soon!)
                    </Text>
                    <Select
                      name="currency"
                      placeholder="Pick Available Country"
                      value={formData.currency}
                      onChange={handleInputChange("currency")}
                      data={[{ label: "Australia", value: "AUD" }]}
                    />
                  </Stack>
                </Center>
              </Stepper.Step>
              <Stepper.Step label="Step 3" description="Gross Income">
                <Center>
                  <Stack align="center">
                    <Title order={2}>Ooh, I like that place!</Title>
                    <Text align="center">
                      Next, what is your pre-tax (gross) yearly income?
                      <br />
                      Round to the nearest dollar if needed.
                    </Text>
                    <NumberInput
                      name="gross"
                      w={"100%"}
                      leftSection="$"
                      thousandSeparator=","
                      decimalScale={2}
                      allowNegative={false}
                      value={formData.gross?.toString()}
                      onChange={handleInputChange("gross")}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !disabled) {
                          nextStep()
                        }
                      }}
                      placeholder="Gross Income"
                    />
                  </Stack>
                </Center>
              </Stepper.Step>
              <Stepper.Step label="Step 4" description="Net Income">
                <Center>
                  <Stack align="center">
                    <Title order={2}>Ok, help us out!!</Title>
                    <Text align="center">
                      Next, what is your post-tax (net) income?
                      <br />
                      This should be what you get in your account each pay
                      cycle.
                    </Text>
                    <NumberInput
                      name="net"
                      w={"100%"}
                      leftSection="$"
                      thousandSeparator=","
                      decimalScale={2}
                      allowNegative={false}
                      value={formData.net?.toString()}
                      onChange={handleInputChange("net")}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !disabled) {
                          nextStep()
                        }
                      }}
                      placeholder="Net Income"
                    />
                    <Text align="center">
                      And what is the frequency of this pay?
                    </Text>
                    <Select
                      name="frequency"
                      w={"100%"}
                      placeholder="Pay Cycle"
                      value={formData.frequency}
                      onChange={handleInputChange("frequency")}
                      data={["Monthly", "Fortnightly", "Weekly"]}
                    />
                  </Stack>
                </Center>
              </Stepper.Step>
              <Stepper.Step label="Step 5" description="Goals">
                <Center>
                  <Stack align="center">
                    <Title order={2}>Lookin' Good!</Title>
                    <Text align="center">
                      Now, let&apos;s get some goals.
                      <br />
                      Set a cash goal, something to work towwards. <br />
                      Unsure? We recommend about $10,000
                    </Text>
                    <NumberInput
                      name="goal"
                      w={"100%"}
                      leftSection="$"
                      thousandSeparator=","
                      decimalScale={2}
                      allowNegative={false}
                      value={formData.goal}
                      onChange={handleInputChange("goal")}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !disabled) {
                          nextStep()
                        }
                      }}
                      placeholder="Savings Goal"
                    />
                    <Text align="center">
                      Emergency Funds are essential for saving for a rainy day.
                      <br />
                      How long do you want to save for?
                    </Text>
                    <NumberInput
                      name="emergency"
                      w={"100%"}
                      min={1}
                      value={formData?.emergency}
                      onChange={handleInputChange("emergency")}
                      suffix={formData?.emergency === 1 ? " Month" : " Months"}
                      placeholder="Emergency Fund"
                    />
                    <Text align="center">Are you saving for a home loan?</Text>
                    <Switch
                      name="isSaving"
                      checked={formData.isSaving}
                      onChange={(e) => {
                        dispatch({
                          type: "updateField",
                          fieldName: "isSaving",
                          payload: e.target.checked,
                        })
                      }}
                      label="I am saving!"
                    />
                    <Text
                      align="center"
                      display={formData.isSaving ? "block" : "none"}
                    >
                      How much are you wanting to save?
                    </Text>
                    <NumberInput
                      display={formData.isSaving ? "block" : "none"}
                      name="deposit"
                      w={"100%"}
                      leftSection="$"
                      thousandSeparator=","
                      decimalScale={2}
                      allowNegative={false}
                      value={formData.deposit?.toString()}
                      onChange={handleInputChange("deposit")}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !disabled) {
                          nextStep()
                        }
                      }}
                      placeholder="Home Deposit"
                    />
                  </Stack>
                </Center>
              </Stepper.Step>
              <Stepper.Completed>
                <Center>
                  <Stack align="center">
                    <Title order={2}>Congratulations!</Title>
                    <Text align="center">
                      You&apos;re done! <br />
                      Click Finish to complete the setup
                    </Text>
                  </Stack>
                </Center>
              </Stepper.Completed>
            </Stepper>
            <Center pt={"xl"}>
              <Group>
                <Button
                  disabled={active === 0}
                  onClick={prevStep}
                  variant="default"
                >
                  Back
                </Button>
                <Button
                  color="teal"
                  disabled={disabled}
                  type={active === 5 ? "submit" : "button"}
                  onClick={nextStep}
                >
                  {active === 5 ? "Finish" : "Continue"}
                </Button>
              </Group>
            </Center>
          </Form>
        </Paper>
      </Center>
    </div>
  )
}
