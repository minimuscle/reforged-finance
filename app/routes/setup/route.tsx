import {
  Button,
  Center,
  Group,
  InputBase,
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
import { FormEvent, useEffect, useReducer, useRef, useState } from "react"
import { Form, useSubmit } from "@remix-run/react"
import { IMaskInput } from "react-imask"
import { Validate } from "./validate"

type formDataProps = {
  name: string
  country: string
  gross: string
  net: string
  frequency: string
  goal: string
  emergency: string
  isSaving: boolean
  deposit: string
}

const initialState: formDataProps = {
  name: "",
  country: "",
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

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    switch (active) {
      case 0:
        if (formData.name?.length) {
          console.log(formData.name?.length)
          setDisabled(false)
        } else {
          setDisabled(true)
        }
        break
      case 1:
        if (formData.country) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
        break
      case 2:
        // eslint-disable-next-line no-case-declarations
        const gross = parseInt(formData.gross.split(",").join(""))
        if (gross >= 0 && gross) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
        break
      case 3:
        // eslint-disable-next-line no-case-declarations
        const net = parseInt(formData.net.split(",").join(""))
        if (formData.frequency && net >= 0) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
        break
      case 4:
        // eslint-disable-next-line no-case-declarations
        const goal = parseInt(formData.goal.split(",").join(""))
        // eslint-disable-next-line no-case-declarations
        const deposit = parseInt(formData.deposit.split(",").join(""))
        console.log(formData.isSaving)

        if (
          goal >= 0 &&
          parseInt(formData.emergency) >= 0 &&
          (formData.isSaving ? deposit >= 0 : true)
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
                      name="country"
                      placeholder="Pick Available Country"
                      value={formData.country}
                      onChange={handleInputChange("country")}
                      data={["Australia"]}
                    />
                  </Stack>
                </Center>
              </Stepper.Step>
              <Stepper.Step label="Step 3" description="Gross Income">
                <Center>
                  <Stack align="center">
                    <Title order={2}>Ooh, {formData.country}!</Title>
                    <Text align="center">
                      Next, what is your pre-tax (gross) yearly income?
                      <br />
                      Round to the nearest dollar if needed.
                    </Text>
                    <InputBase
                      name="gross"
                      w={"100%"}
                      component={IMaskInput}
                      mask={Number}
                      leftSection="$"
                      rightSection=".00"
                      thousandsSeparator=","
                      value={formData.gross}
                      onAccept={handleInputChange("gross")}
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
                    <InputBase
                      name="net"
                      w={"100%"}
                      component={IMaskInput}
                      mask={Number}
                      leftSection="$"
                      rightSection=".00"
                      thousandsSeparator=","
                      value={formData.net}
                      onAccept={handleInputChange("net")}
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
                    <InputBase
                      name="goal"
                      w={"100%"}
                      component={IMaskInput}
                      mask={Number}
                      leftSection="$"
                      rightSection=".00"
                      thousandsSeparator=","
                      value={formData.goal}
                      onAccept={handleInputChange("goal")}
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
                      value={formData.emergency}
                      onChange={handleInputChange("emergency")}
                      suffix={formData.emergency === 1 ? " Month" : " Months"}
                      placeholder="Emergency Fund"
                    />
                    <Text align="center">Are you saving for a home loan?</Text>
                    <Switch
                      name="isSaving"
                      checked={formData.isSaving}
                      onChange={(e) =>
                        dispatch({
                          type: "updateField",
                          fieldName: "isSaving",
                          payload: e.target.checked,
                        })
                      }
                      label="I am saving!"
                    />
                    <Text
                      align="center"
                      display={formData.isSaving ? "block" : "none"}
                    >
                      How much are you wanting to save?
                    </Text>
                    <InputBase
                      display={formData.isSaving ? "block" : "none"}
                      name="deposit"
                      w={"100%"}
                      component={IMaskInput}
                      mask={Number}
                      leftSection="$"
                      rightSection=".00"
                      thousandsSeparator=","
                      value={formData.deposit}
                      onAccept={handleInputChange("deposit")}
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
                <Button onClick={prevStep} variant="default">
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
