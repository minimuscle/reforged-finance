import { Text } from "components/Text"
import "./_AccountCard.css"
import { IconType } from "utils/types"
import { IconDotsVertical } from "@tabler/icons-react"
import { ActionIcon, Menu, NumberFormatter } from "@mantine/core"
import { useState } from "react"
import clsx from "clsx"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface AccountCardProps {
  title: string
  value: number
  currency: {
    symbol: string
    name: string
  }
  icon: IconType
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function AccountCard({ title, value, currency, icon: Icon }: AccountCardProps) {
  /**********  HOOKS  **********/
  const [isHovered, setIsHovered] = useState(false)
  const [opened, setOpened] = useState(false)

  /*********  RENDER  *********/
  return (
    <div
      className="AccountCard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setOpened(false)
      }}
    >
      <Icon className="AccountCard__icon" />
      <Text color="gray-5">{title}</Text>
      <Text color="gray-8" size="xxl">
        <NumberFormatter prefix="$" value={value} thousandSeparator decimalScale={2} />
      </Text>
      <Text color="gray-4">
        {currency.name} - {currency.symbol}
      </Text>
      <Menu opened={opened} onChange={setOpened}>
        <Menu.Target>
          <ActionIcon
            onClick={() => setOpened((o) => !o)}
            className={clsx(isHovered ? "AccountCard__menu--isHovered" : "AccountCard__menu")}
            color="gray"
            variant="transparent"
          >
            <IconDotsVertical />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Select Colour</Menu.Item>
          <Menu.Item>Select Colour</Menu.Item>
          <Menu.Item>Select Colour</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}
