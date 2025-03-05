import { Button } from "@mantine/core"
import { IconCashBanknote } from "@tabler/icons-react"
import { IconBuildingBank } from "@tabler/icons-react"
import { IconPigMoney } from "@tabler/icons-react"
import { AccountCard } from "components/AccountCard"
import { Card } from "components/Card"
import { Flex } from "components/Flex"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function AccountsList() {
  /*********  RENDER  *********/
  return (
    <Card
      className="Cash__accounts"
      heading="Accounts"
      subtitle="Your Cash Accounts"
      actions={<Button color="sky">Export</Button>}
    >
      <Flex direction="column" gap={10}>
        <AccountCard
          title="2Up Savings Account"
          value={1000000.58}
          currency={{ name: "AUD", symbol: "$" }}
          icon={IconPigMoney}
        />
        <AccountCard
          title="Up Savings"
          value={1000000}
          currency={{ name: "AUD", symbol: "$" }}
          icon={IconCashBanknote}
        />
        <AccountCard
          title="2Up Savings Account"
          value={56534.75}
          currency={{ name: "AUD", symbol: "$" }}
          icon={IconBuildingBank}
        />
        <Button className="Button__white">+ New Account</Button>
      </Flex>
    </Card>
  )
}
