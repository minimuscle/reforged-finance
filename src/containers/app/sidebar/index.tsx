import { Divider } from "@mantine/core"
import "./_sidebar.css"
import { NavButton } from "./components/navButton"
import { bottonNavOptions, navOptions } from "./consts"
import { Text } from "components/Text"
import { _Text } from "components/Text/_Text"
import clsx from "clsx"
import Logo from "assets/Images/Logo.png"
import { IconLayoutSidebarLeftCollapseFilled, IconLayoutSidebarLeftExpandFilled } from "@tabler/icons-react"
import { Flex } from "components/Flex"
import { AnimatePresence, motion } from "motion/react"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface SidebarProps {
  isSidebarHidden: boolean
  setIsSidebarHidden: (isHidden: boolean) => void
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Sidebar({ isSidebarHidden, setIsSidebarHidden }: SidebarProps) {
  /*********  RENDER  *********/
  return (
    <div className={clsx("Sidebar", isSidebarHidden && "small")}>
      <div className="Sidebar__toggle" onClick={() => setIsSidebarHidden(!isSidebarHidden)}>
        {isSidebarHidden ? <IconLayoutSidebarLeftExpandFilled /> : <IconLayoutSidebarLeftCollapseFilled />}
      </div>

      <div className="Sidebar__item">
        <div className="Sidebar__header">
          <AnimatePresence>
            {!isSidebarHidden && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  <img src={Logo} alt="Reforged Finance Logo" />
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{ delay: 0.2 }}
                  exit={{ x: -50, opacity: 0, transition: { delay: 0, duration: 0.2 } }}
                >
                  <Flex direction="column" gap={0}>
                    <Text className="Sidebar__header--title">Reforged Finance</Text>
                    <Text size="xs" color="gray" className="Sidebar__header--subtitle">
                      Personal Wealth Tracker
                    </Text>
                  </Flex>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        {navOptions.map((navOption) => (
          <NavButton key={navOption.label} {...navOption} isSidebarHidden={isSidebarHidden} />
        ))}
      </div>
      <div className="Sidebar__item">
        <Divider className="Sidebar__divider" />
        {bottonNavOptions.map((navOption) => (
          <NavButton key={navOption.label} {...navOption} isSidebarHidden={isSidebarHidden} />
        ))}
      </div>
    </div>
  )
}
