import { Outlet, useLocation } from "@tanstack/react-router"
import styles from "./_app.module.css"
import clsx from "clsx"
import { Sidebar } from "containers/app/sidebar"
import { useAppViewport } from "utils/hooks/useAppViewport"
import { bottonNavOptions, navOptions, otherNavOptions } from "containers/app/sidebar/consts"
import { Text } from "components/Text"
import { motion } from "motion/react"
import { useAppContext } from "containers/app/appContext"
import { Flex } from "components/Flex"
import { Button, ButtonGroup, Menu, Tooltip } from "@mantine/core"
import { IconPlus } from "@tabler/icons-react"
import { IconChevronDown } from "@tabler/icons-react"
import { IconFileExport } from "@tabler/icons-react"
import { IconReport } from "@tabler/icons-react"
import { Suspense } from "react"

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
    <motion.div className={clsx(styles.app, { [styles.mobile]: isMobile, [styles.sidebarHidden]: isSidebarHidden })}>
      {!isMobile && <Sidebar />}
      <div className={clsx(styles.content, { [styles.sidebarHidden]: isSidebarHidden })}>
        <Flex align="center" justify="space-between" className={styles.header}>
          <Text size="xxl" bold as="h1">
            {heading}
          </Text>
          <Flex gap={10}>
            <Button leftSection={<IconPlus />} variant="light" color="sky">
              New Month
            </Button>
            <Tooltip label="Coming soon to premium">
              <ButtonGroup>
                <Button disabled color="sky">
                  Export
                </Button>
                <Menu>
                  <Menu.Target>
                    <Button disabled color="sky" className={styles.button}>
                      <IconChevronDown />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item leftSection={<IconFileExport className={styles.icon} />} color="gray">
                      Export Page
                    </Menu.Item>
                    <Menu.Item leftSection={<IconReport className={styles.icon} />} color="gray">
                      Export All
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </ButtonGroup>
            </Tooltip>
          </Flex>
        </Flex>
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className={styles.outlet}>
            <Outlet />
          </div>
        </Suspense>
      </div>
    </motion.div>
  )
}
