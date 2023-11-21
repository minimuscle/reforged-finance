import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  InputBase,
  Modal,
  NumberInput,
  Select,
  Stack,
  Switch,
  Text,
  Title,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Form, useFetcher, useLoaderData, useNavigate } from "@remix-run/react"
import { useReducer, useState } from "react"
import { IMaskInput } from "react-imask"
import "../global.css"
import currency from "currency.js"
import { createServerClient, parse, serialize } from "@supabase/ssr"
import { redirect } from "@remix-run/node"

export const action = async ({ request }) => {
  const data = await request.formData()
  const cookies = parse(request.headers.get("Cookie") ?? "")
  const headers = new Headers()

  const supabase = createServerClient(
    process.env.DATABASE_URL,
    process.env.DB_KEY,
    {
      cookies: {
        get(key) {
          return cookies[key]
        },
        set(key, value, options) {
          headers.append("Set-Cookie", serialize(key, value, options))
        },
        remove(key, options) {
          headers.append("Set-Cookie", serialize(key, "", options))
        },
      },
    }
  )

  const { data: user, error: userError } = await supabase.auth.getUser()
  if (userError) {
    console.log(userError)
    return null
  }

  const id = user.user.id
  const name = data.get("name")
  const email = data.get("email")
  const employmentIncome = currency(data.get("employmentIncome")).value
  const netIncome = currency(data.get("netIncome")).value
  const salaryFrequency = data.get("salaryFrequency")
  const cashGoal = currency(data.get("cashGoal")).value
  const emergencyFundGoal = currency(data.get("emergencyFundGoal")).value
  const homeDeposit = data.get("homeDeposit")
  const depositAmount = currency(data.get("depositAmount")).value

  console.log("id ", id)
  console.log("name ", name)
  console.log("email ", email)
  console.log("employmentIncome ", employmentIncome)
  console.log("netIncome ", netIncome)
  console.log("salaryFrequency ", salaryFrequency)
  console.log("cashGoal ", cashGoal)
  console.log("emergencyFundGoal ", emergencyFundGoal)
  console.log("homeDeposit ", homeDeposit)
  console.log("depositAmount ", depositAmount)

  const { data: profile, error } = await supabase
    .from("profiles")
    .upsert(
      {
        id: id,
        name: name,
        email: email || null,
        employmentIncome: employmentIncome,
        currency: "AUD",
        netIncome: netIncome,
        salaryFrequency: salaryFrequency || "Monthly",
        cashGoal: cashGoal,
        emergencyFundGoal: emergencyFundGoal,
        homeDeposit: homeDeposit || false,
        depositAmount: depositAmount,
      },
      { onConflict: "id" }
    )
    .select()
  if (error) {
    console.log("error ", error)
    return null
  }

  return redirect("/")
}

const Setup = () => {
  const [step, setStep] = useState(0)
  const fetcher = useFetcher()

  return (
    <Modal opened withCloseButton={false} fullScreen centered>
      <Container>
        <Center h="90dvh">
          <Stack justify="center">
            <Title align="center">Setup Account</Title>
            <fetcher.Form method="post">
              <Step0
                className={step === 0 ? "" : "hideStep"}
                toggle={() => setStep(1)}
              />
              <Step1
                className={step === 1 ? "" : "hideStep"}
                back={() => setStep(0)}
                toggle={() => setStep(2)}
              />
              <Step2
                className={step === 2 ? "" : "hideStep"}
                back={() => setStep(1)}
                toggle={() => setStep(3)}
              />
              <Step3
                className={step === 3 ? "" : "hideStep"}
                back={() => setStep(2)}
                toggle={() => setStep(4)}
              />
              <Step4
                className={step === 4 ? "" : "hideStep"}
                back={() => setStep(3)}
                toggle={() => setStep(5)}
              />
              <Step5
                className={step === 5 ? "" : "hideStep"}
                back={() => setStep(4)}
                toggle={() => setStep(6)}
              />
              <Step6
                className={step === 6 ? "" : "hideStep"}
                back={() => setStep(5)}
                toggle={() => setStep(7)}
              />
              <Step7
                className={step === 7 ? "" : "hideStep"}
                back={() => setStep(6)}
                toggle={() => setStep(8)}
                fetcher={fetcher}
              />
            </fetcher.Form>
          </Stack>
        </Center>
      </Container>
    </Modal>
  )
}

export default Setup

const Step0 = ({ toggle, className }) => {
  return (
    <Box className={className}>
      <Text align="center">
        The next few steps will guide you through setting up an account with us
        for the first time. <br />
        Please make sure to not leave this page until its done, as anything
        entered won't be saved until you finish
      </Text>
      <Button mt={25} onClick={() => toggle()} fullWidth>
        Begin Setup
      </Button>
    </Box>
  )
}

const Step1 = ({ toggle, className }) => {
  const [content, setContent] = useState("")
  return (
    <Box className={className}>
      <Text align="center">First things first, we need to know your name.</Text>
      <Input
        autoFocus
        onChange={(e) => setContent(e.target.value)}
        value={content}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggle()
        }}
        mt="10px"
        name="name"
        placeholder="Your Name"
      />
      <Button
        disabled={!content}
        mt={25}
        onClick={() => toggle()}
        variant="light"
        fullWidth
      >
        Next
      </Button>
    </Box>
  )
}

const Step2 = ({ back, toggle, className }) => {
  const [content, setContent] = useState("")
  return (
    <Box className={className}>
      <Text align="center">
        Perfect! Next, what is your pre-tax (gross) yearly income? <br />
        Round to the nearest dollar if needed.
      </Text>
      <InputBase
        name="employmentIncome"
        mt={3}
        component={IMaskInput}
        mask="$num"
        blocks={{
          num: {
            mask: Number,
            radix: ".",
            thousandsSeparator: ",",
          },
        }}
        placeholder="Your Gross Income"
        onAccept={(value, mask) => setContent(mask.unmaskedValue)}
        value={content}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggle()
        }}
      />
      <Button
        mt={15}
        onClick={() => back()}
        color="red"
        variant="light"
        fullWidth
      >
        Back
      </Button>
      <Button
        disabled={!content}
        mt={10}
        onClick={() => toggle()}
        variant="light"
        fullWidth
      >
        Next
      </Button>
    </Box>
  )
}
const Step3 = ({ back, toggle, className }) => {
  const [content, setContent] = useState("")
  return (
    <Box className={className}>
      <Text align="center">
        Great, now that what is the value that actually hits the bank? <br />{" "}
        Your Net Income
      </Text>
      <InputBase
        name="netIncome"
        mt={3}
        component={IMaskInput}
        mask="$num"
        blocks={{
          num: {
            mask: Number,
            radix: ".",
            thousandsSeparator: ",",
          },
        }}
        placeholder="Your Net Income"
        onAccept={(value, mask) => setContent(mask.unmaskedValue)}
        value={content}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggle()
        }}
      />
      <Text mt={20} align="center">
        Following this, how often do you get paid?
      </Text>
      <Select
        mt={3}
        name="salaryFrequency"
        data={["Monthly", "Fortnightly (2-Weeks)", "Weekly"]}
        placeholder="Select Frequency"
        allowDeselect={false}
      />
      <Button
        mt={15}
        onClick={() => back()}
        color="red"
        variant="light"
        fullWidth
      >
        Back
      </Button>
      <Button
        disabled={!content}
        mt={10}
        onClick={() => toggle()}
        variant="light"
        fullWidth
      >
        Next
      </Button>
    </Box>
  )
}
const Step4 = ({ back, toggle, className }) => {
  const [content, setContent] = useState("")
  console.log(content)
  return (
    <Box className={className}>
      <Text align="center">
        Lookin' Good! Lets set some goals!
        <br /> What is your cash goal? Something to work towards
      </Text>
      <InputBase
        name="cashGoal"
        mt={3}
        component={IMaskInput}
        mask="$num"
        blocks={{
          num: {
            mask: Number,
            unmask: true,
            thousandsSeparator: ",",
          },
        }}
        placeholder="Cash Goal"
        onAccept={(value, mask) => setContent(mask.unmaskedValue)}
        value={content}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggle()
        }}
      />
      <Button
        mt={15}
        onClick={() => back()}
        color="red"
        variant="light"
        fullWidth
      >
        Back
      </Button>
      <Button
        disabled={!content}
        mt={10}
        onClick={() => toggle()}
        variant="light"
        fullWidth
      >
        Next
      </Button>
    </Box>
  )
}
const Step5 = ({ back, toggle, className }) => {
  const [content, setContent] = useState("")
  return (
    <Box className={className}>
      <Text align="center">
        Emergency Funds are essential for saving for a rainy day. <br />
        How long do you want to save for?
      </Text>
      <NumberInput
        mt={3}
        name="emergencyFundGoal"
        placeholder={"Emergency Fund Length"}
        allowNegative={false}
        allowDecimal={false}
        suffix=" Months"
        onKeyDown={(e) => {
          if (e.key === "Enter") toggle()
        }}
      />
      <Button
        mt={15}
        onClick={() => back()}
        color="red"
        variant="light"
        fullWidth
      >
        Back
      </Button>
      <Button mt={10} onClick={() => toggle()} variant="light" fullWidth>
        Next
      </Button>
    </Box>
  )
}
const Step6 = ({ back, toggle, className }) => {
  const [content, setContent] = useState("")
  return (
    <Box className={className}>
      <Text align="center">Are you saving for a home deposit?</Text>
      <Switch
        mt={15}
        defaultChecked={false}
        name="homeDeposit"
        labelPosition="left"
        label="I am saving!"
      />
      <Text mt={15} align="center">
        If so, how much are you wanting to save?
      </Text>
      <Input
        name="depositAmount"
        onKeyDown={(e) => {
          if (e.key === "Enter") toggle()
        }}
        placeholder="Deposit Amount"
      />
      <Button
        mt={15}
        onClick={() => back()}
        color="red"
        variant="light"
        fullWidth
      >
        Back
      </Button>
      <Button mt={10} onClick={() => toggle()} variant="light" fullWidth>
        Next
      </Button>
    </Box>
  )
}
const Step7 = ({ back, toggle, className, fetcher }) => {
  const [content, setContent] = useState("")
  return (
    <Box className={className}>
      <Text align="center">
        Amazing! Last one, promise!
        <br />
        <br />
        What email should we send things to? <br />
        This can be the same as your account or different. <br />
        You can leave it blank if you like
      </Text>
      <Input
        name="email"
        onKeyDown={(e) => {
          if (e.key === "Enter") toggle()
        }}
        placeholder="Your Email Address"
      />
      <Button
        mt={15}
        onClick={() => back()}
        color="red"
        variant="light"
        fullWidth
      >
        Back
      </Button>
      <Button
        mt={10}
        onClick={(event) =>
          fetcher.submit(event.currentTarget.form, {
            method: "POST",
          })
        }
        fullWidth
      >
        Submit
      </Button>
    </Box>
  )
}
