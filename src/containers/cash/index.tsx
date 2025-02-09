import { Button } from "@mantine/core"
import { Card } from "components/Card"
import { Text } from "components/Text"
import "./_Cash.css"
import { AccountCard } from "components/AccountCard"
import { Flex } from "components/Flex"
import { IconPigMoney } from "@tabler/icons-react"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Cash() {
  /*********  RENDER  *********/
  return (
    <>
      <Card
        className="Cash__accounts"
        heading="Accounts"
        subtitle="Your Cash Accounts"
        actions={<Button>Export</Button>}
      >
        <Flex direction="column" gap={10}>
          <AccountCard
            title="2Up Savings Account"
            value={1000000.58}
            currency={{ name: "AUD", symbol: "$" }}
            icon={IconPigMoney}
          />
          <AccountCard
            title="2Up Savings Account"
            value={1000000}
            currency={{ name: "AUD", symbol: "$" }}
            icon={IconPigMoney}
          />
          <AccountCard
            title="2Up Savings Account"
            value={1000000}
            currency={{ name: "AUD", symbol: "$" }}
            icon={IconPigMoney}
          />
        </Flex>
      </Card>
    </>
  )
}
