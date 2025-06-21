import { Button } from "@mantine/core"
import { IconCashBanknote } from "@tabler/icons-react"
import { IconBuildingBank } from "@tabler/icons-react"
import { IconPigMoney } from "@tabler/icons-react"
import { AccountCard } from "components/AccountCard"
import { Card } from "components/Card"
import { Flex } from "components/Flex"
import { query } from "src/queries/queryTree"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function AccountsList() {
  /*****  QUERIES  *****/
  const { data: cash_accounts } = query.user.cash.useSelectSuspenseQuery(void 0, ({ data }) => {
    return data
  })

  /*********  RENDER  *********/
  return (
    <Card heading="Accounts" subtitle="Your Cash Accounts">
      <Flex direction="column" gap={10}>
        {cash_accounts?.map((account) => (
          <AccountCard
            key={account.id}
            title={account.name}
            value={account.amount}
            currency={{ name: account.currency, symbol: "$" }}
            icon={IconPigMoney}
            color={`var(--mantine-color-${account.color}-5)`}
          />
        ))}
        <Button className="Button__white">+ New Account</Button>
      </Flex>
    </Card>
  )
}
