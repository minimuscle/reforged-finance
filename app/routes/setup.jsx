import {
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
import { Form, useLoaderData, useNavigate } from "@remix-run/react"
import { useReducer, useState } from "react"
import { IMaskInput } from "react-imask"

const Setup = () => {
  const [step, setStep] = useState(0)

  return (
    <Modal opened withCloseButton={false} fullScreen centered>
      <Container>
        <Center h="90dvh">
          <Stack justify="center">
            <Title align="center">Setup Account</Title>
            <Form action="/" method="post">
              {step === 0 && <Step0 toggle={() => setStep(1)} />}
              {step === 1 && (
                <Step1 back={() => setStep(0)} toggle={() => setStep(2)} />
              )}
              {step === 2 && (
                <Step2 back={() => setStep(1)} toggle={() => setStep(3)} />
              )}
              {step === 3 && (
                <Step3 back={() => setStep(2)} toggle={() => setStep(4)} />
              )}
              {step === 4 && (
                <Step4 back={() => setStep(3)} toggle={() => setStep(5)} />
              )}
              {step === 5 && (
                <Step5 back={() => setStep(4)} toggle={() => setStep(6)} />
              )}
              {step === 6 && (
                <Step6 back={() => setStep(5)} toggle={() => setStep(7)} />
              )}
              {step === 7 && (
                <Step7 back={() => setStep(6)} toggle={() => setStep(8)} />
              )}
            </Form>
          </Stack>
        </Center>
      </Container>
    </Modal>
  )
}

export default Setup

const Step0 = ({ toggle }) => {
  return (
    <>
      <Text align="center">
        The next few steps will guide you through setting up an account with us
        for the first time. <br />
        Please make sure to not leave this page until its done, as anything
        entered won't be saved until you finish
      </Text>
      <Button mt={25} onClick={() => toggle()} fullWidth>
        Begin Setup
      </Button>
    </>
  )
}

const Step1 = ({ toggle }) => {
  return (
    <>
      <Text align="center">First things first, we need to know your name.</Text>
      <Input mt="10px" name="name" placeholder="Your Name" />
      <Button mt={25} onClick={() => toggle()} variant="light" fullWidth>
        Next
      </Button>
    </>
  )
}

const Step2 = ({ back, toggle }) => {
  return (
    <>
      <Text align="center">
        Perfect! Next, what is your pre-tax (gross) yearly income? <br />
        Round to the nearest dollar if needed.
      </Text>
      <InputBase
        name="employementIncome"
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
    </>
  )
}
const Step3 = ({ back, toggle }) => {
  return (
    <>
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
      <Button mt={10} onClick={() => toggle()} variant="light" fullWidth>
        Next
      </Button>
    </>
  )
}
const Step4 = ({ back, toggle }) => {
  return (
    <>
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
            thousandsSeparator: ",",
          },
        }}
        placeholder="Cash Goal"
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
    </>
  )
}
const Step5 = ({ back, toggle }) => {
  return (
    <>
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
    </>
  )
}
const Step6 = ({ back, toggle }) => {
  return (
    <>
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
      <Input name="depositAmount" placeholder="Deposit Amount" />
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
    </>
  )
}
const Step7 = ({ back, toggle }) => {
  return (
    <>
      <Text align="center">
        Amazing! Last one, promise!
        <br />
        <br />
        What email should we send things to? <br />
        This can be the same as your account or different. <br />
        You can leave it blank if you like
      </Text>
      <Input name="email" placeholder="Your Email Address" />
      <Button
        mt={15}
        onClick={() => back()}
        color="red"
        variant="light"
        fullWidth
      >
        Back
      </Button>
      <Button mt={10} type="submit" fullWidth>
        Submit
      </Button>
    </>
  )
}
