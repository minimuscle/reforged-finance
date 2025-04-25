import { Text } from "components/Text"
import styles from "./_AccountCard.module.css"
import { IconType } from "utils/types"
import { IconDotsVertical } from "@tabler/icons-react"
import { ActionIcon, ColorSwatch, Menu, NumberFormatter } from "@mantine/core"
import { useState } from "react"
import clsx from "clsx"
import { IconTrash } from "@tabler/icons-react"
import { IconPalette } from "@tabler/icons-react"
import { IconPlaneTilt } from "@tabler/icons-react"
import { IconEdit } from "@tabler/icons-react"
import { useDisclosure } from "@mantine/hooks"
import { SubMenu } from "components/AccountCard/subMenu"
import { Flex } from "components/Flex"

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
 *  CONSTS                                                        *
 ******************************************************************/
const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "gray",
  "transparent",
]
//TODO: check if this can be imported from the theme

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function AccountCard({ title, value, currency, icon: Icon }: AccountCardProps) {
  /**********  HOOKS  **********/
  const [isHovered, setIsHovered] = useState(false)
  const [isMainMenuOpened, mainMenu] = useDisclosure()
  const [isColorMenuOpened, colorMenu] = useDisclosure()
  const [isIconMenuOpened, iconMenu] = useDisclosure()

  /*********  RENDER  *********/
  return (
    <div
      className={styles.accountCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        switch (true) {
          case isMainMenuOpened:
          case isColorMenuOpened:
          case isIconMenuOpened:
            break
          default:
            setIsHovered(false)
            break
        }
      }}
    >
      <Icon className={styles.icon} />
      <Text color="gray-5">{title}</Text>
      <Text color="gray-8" size="xxl">
        <NumberFormatter prefix="$" value={value} thousandSeparator decimalScale={2} />
      </Text>
      <Text color="gray-4">
        {currency.name} - {currency.symbol}
      </Text>
      <Menu
        opened={isMainMenuOpened}
        onChange={mainMenu.toggle}
        closeOnEscape
        onClose={() => {
          setIsHovered(false)
          colorMenu.close()
          iconMenu.close()
        }}
      >
        <Menu.Target>
          <ActionIcon
            className={clsx(isHovered ? styles["menu--isHovered"] : styles.menu)}
            color="gray"
            variant="transparent"
          >
            <IconDotsVertical />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item leftSection={<IconEdit className={styles.dropdown} />} color="gray">
            Edit
          </Menu.Item>
          <SubMenu
            isMenuOpen={isIconMenuOpened}
            menuHandler={iconMenu}
            target={
              <Menu.Item leftSection={<IconPlaneTilt className={styles.dropdown} />} color="gray">
                Set Icon
              </Menu.Item>
            }
          >
            <div className="AccountCard__colorMenu">
              <Text color="gray">Select an Icon:</Text>
              <Flex gap={10} wrap="wrap">
                Coming Soon {/** //TODO: Add financial icons */}
              </Flex>
            </div>
          </SubMenu>
          <SubMenu
            isMenuOpen={isColorMenuOpened}
            menuHandler={colorMenu}
            target={
              <Menu.Item leftSection={<IconPalette className={styles.dropdown} />} color="gray">
                Colour
              </Menu.Item>
            }
          >
            <div className={styles.colorMenu}>
              <Text color="gray">Select a colour:</Text>
              <Flex gap={10} wrap="wrap">
                {colors.map((color) => (
                  <ColorSwatch
                    key={color}
                    component="button"
                    onClick={() => console.log(color, " clicked")}
                    color={`var(--mantine-color-${color}-5)`}
                  />
                ))}
              </Flex>
            </div>
          </SubMenu>
          <Menu.Item leftSection={<IconTrash />} color="red">
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}
