import { Outlet, useLocation } from "@tanstack/react-router"
import "./_app.css"
import { useContext, useState } from "react"
import clsx from "clsx"
import { Sidebar } from "containers/app/sidebar"
import { useAppViewport } from "utils/hooks/useAppViewport"
import { bottonNavOptions, navOptions, otherNavOptions } from "containers/app/sidebar/consts"
import { Text } from "components/Text"
import { motion } from "motion/react"
import { AppProvider, useAppContext } from "containers/app/appContext"
import { Flex } from "components/Flex"
import { ActionIcon, Button, ButtonGroup, Menu } from "@mantine/core"
import { IconPlus } from "@tabler/icons-react"
import { IconChevronDown } from "@tabler/icons-react"
import { IconFileExport } from "@tabler/icons-react"
import { IconReport } from "@tabler/icons-react"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function App() {
  /**********  HOOKS  **********/
  const isMobile = useAppViewport(["xs"])
  const location = useLocation()
  const { isSidebarHidden } = useAppContext()

  /**********  CONSTS  **********/
  const heading =
    navOptions.find((nav) => nav.to === location.pathname)?.label ??
    bottonNavOptions.find((nav) => nav.to === location.pathname)?.label ??
    otherNavOptions.find((nav) => nav.to === location.pathname)?.label ??
    ""

  /*********  RENDER  *********/
  return (
    <motion.div className={clsx("App", { mobile: isMobile, SidebarHidden: isSidebarHidden })}>
      {!isMobile && <Sidebar />}
      <div className={clsx("AppContent", { SidebarHidden: isSidebarHidden })}>
        <Flex align="center" justify="space-between" className="AppContent__header">
          <Text size="xxl" bold as="h1">
            {heading}
          </Text>
          <Flex gap={10}>
            <Button leftSection={<IconPlus />} variant="light" color="sky">
              New Month
            </Button>
            <ButtonGroup>
              <Button color="sky">Export</Button>
              <Menu>
                <Menu.Target>
                  <Button color="sky" className="AppContent__headerButton">
                    <IconChevronDown />
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item leftSection={<IconFileExport className="AppContent__headerButtonIcon" />} color="gray">
                    Export Page
                  </Menu.Item>
                  <Menu.Item leftSection={<IconReport className="AppContent__headerButtonIcon" />} color="gray">
                    Export All
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </ButtonGroup>
          </Flex>
        </Flex>
        <div className="AppContent__outlet">
          <Outlet />
        </div>
      </div>
    </motion.div>
  )
}
