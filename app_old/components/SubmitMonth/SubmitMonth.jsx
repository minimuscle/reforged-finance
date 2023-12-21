import { Button } from "@mantine/core"
import { useFetcher, useLoaderData } from "@remix-run/react"

const SubmitMonth = () => {
  const { cash, profile } = useLoaderData()
  const totalBalance = cash.reduce((total, account) => {
    return total + account.balance
  }, 0)
  const month = new Date(Date.now()).getMonth() + 1
  const year = new Date(Date.now()).getFullYear()
  const date = `${year}-${month}-01`
  console.log(date)
  const fetcher = useFetcher()
  return (
    <fetcher.Form method="POST">
      <input type="hidden" name="cash" value={Math.round(totalBalance)} />
      <input type="hidden" name="super" value={21000} />
      <input type="hidden" name="debts" value={-55000} />
      <input
        type="hidden"
        name="income"
        value={Math.round((profile.netIncome * 52) / 12)}
      />
      <input type="hidden" name="date" value={date} />
      <Button color="green" type="submit" name="_action" value="completeForm">
        Complete Month
      </Button>
    </fetcher.Form>
  )
}

export default SubmitMonth
