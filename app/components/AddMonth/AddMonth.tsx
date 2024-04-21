import { Button, Modal, Space, Stack, Switch, Text, Title } from "@mantine/core"
import { Form, useActionData } from "@remix-run/react"
import useCash from "~/utils/hooks/useCash"
import useSideIncome from "~/utils/hooks/useSideIncome"

export default function AddMonth({
  opened,
  toggleClose,
}: {
  opened: boolean
  toggleClose: () => void
}) {
  const data = useActionData<{ data?: string; status: number }>()
  const { cashTotal } = useCash()
  const { incomeDataTotal } = useSideIncome()
  return (
    <Modal opened={opened} onClose={toggleClose} title={"Add New Month"}>
      {data?.status != 200 ? (
        <>
          <Title>Confirm the below</Title>
          <Space h={20} />
          <Form method="POST">
            <Stack>
              <Switch
                name="cash"
                label={"The amount in your cash bank accounts is correct"}
              />
              <Switch name="super" label={"Your super is up to date"} />
              <Switch name="sideIncome" label={"Any side income is updated"} />
              <Switch name="debts" label={"All debts are up to date"} />
              <Text c="red">{data?.data}</Text>
              <Button type="submit">Add Month</Button>
            </Stack>
            <input type="hidden" name="totalCash" value={cashTotal} />
            <input type="hidden" name="totalSuper" value={cashTotal} />
            <input type="hidden" name="totalDebts" value={cashTotal} />
            <input
              type="hidden"
              name="totalSideIncome"
              value={incomeDataTotal}
            />
          </Form>
        </>
      ) : (
        <>
          <Title order={2}>Month added successfully</Title>
          <Space h={20} />
          <Button fullWidth onClick={toggleClose}>
            Close
          </Button>
        </>
      )}
    </Modal>
  )
}
