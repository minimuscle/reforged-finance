import { Badge, Button } from "@mantine/core"
import { Card } from "components/Card"
import { Text } from "components/Text"
import "./_Cash.css"
import { AccountCard } from "components/AccountCard"
import { Flex } from "components/Flex"
import { IconPigMoney } from "@tabler/icons-react"
import { IconCashBanknote } from "@tabler/icons-react"
import { IconBuildingBank } from "@tabler/icons-react"
import { IconCircleArrowUp } from "@tabler/icons-react"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Cash() {
  /*********  RENDER  *********/
  return (
    <>
      <Flex direction="column" fullWidth gap={15} className="Cash">
        <Card
          heading="Total Cash Savings"
          smallHeader
          actions={
            <Badge size="lg" variant="light" color="green" radius="sm" leftSection={<IconCircleArrowUp size={16} />}>
              25.35%
            </Badge>
          }
        >
          <Text size={36} className="Cash__total">
            <Text color="gray" size={20} className="Cash__totalDollarSign">
              $
            </Text>
            25,945.23
          </Text>
        </Card>
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
      </Flex>
    </>
  )
}
