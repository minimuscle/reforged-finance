import { Flex, Menu, ThemeIcon } from "@mantine/core"
import styles from "../_app.module.css"
import {
  RiArrowRightSLine,
  RiArrowDownSLine,
  RiSettings3Line,
  RiQuestionLine,
  RiLogoutBoxLine,
} from "react-icons/ri/index.js"
import { useState } from "react"
import { Link } from "@remix-run/react"

interface UserMenuProps {
  children: React.ReactNode
}

export default function UserMenu({ children }: UserMenuProps) {
  const [opened, setOpened] = useState(false)
  return (
    <Menu opened={opened} onChange={setOpened} position="bottom-end" withArrow>
      <Menu.Target>
        <Flex align={"center"} className={styles.target}>
          {children}
          <ThemeIcon color="gray" variant="white" size={"md"}>
            {opened ? (
              <RiArrowDownSLine
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <RiArrowRightSLine style={{ width: "100%", height: "100%" }} />
            )}
          </ThemeIcon>
        </Flex>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          component={Link}
          to={"/settings"}
          prefetch="intent"
          className={styles.menuItem}
          leftSection={
            <RiSettings3Line style={{ width: "16px", height: "100%" }} />
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={
            <RiQuestionLine style={{ width: "16px", height: "100%" }} />
          }
        >
          Help
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item disabled>Dark Mode (Coming Soon)</Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color="blue"
          leftSection={
            <RiLogoutBoxLine style={{ width: "16px", height: "100%" }} />
          }
          component={Link}
          to={"/logout"}
          className={styles.menuItem}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
