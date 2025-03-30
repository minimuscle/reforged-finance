import { Divider } from "@mantine/core"
import styles from "./_sidebar.module.css"
import { NavButton } from "./components/navButton"
import { bottonNavOptions, navOptions } from "./consts"
import { Text } from "components/Text"
import { _Text } from "components/Text/_Text"
import clsx from "clsx"
import Logo from "assets/Images/Logo.png"
import { IconLayoutSidebarLeftCollapseFilled, IconLayoutSidebarLeftExpandFilled } from "@tabler/icons-react"
import { Flex } from "components/Flex"
import { AnimatePresence, motion } from "motion/react"
import { PremiumAd } from "containers/app/sidebar/components/premiumAd"
import { useAppContext } from "containers/app/appContext"
import { Link } from "@tanstack/react-router"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Sidebar() {
  /**********  HOOKS  **********/
  const { isSidebarHidden, setSidebarHidden } = useAppContext()

  /*********  RENDER  *********/
  return (
    <div className={clsx(styles.sidebar, { [styles.small]: isSidebarHidden })}>
      <div className={styles.toggle} onClick={() => setSidebarHidden(!isSidebarHidden)}>
        {isSidebarHidden ? <IconLayoutSidebarLeftExpandFilled /> : <IconLayoutSidebarLeftCollapseFilled />}
      </div>

      <div className={styles.item}>
        <Link to="/" className={styles.header}>
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
                    <Text className={styles.title}>Reforged Finance</Text>
                    <Text size="xs" color="gray" className={styles.subtitle}>
                      Personal Wealth Tracker
                    </Text>
                  </Flex>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Link>
        {navOptions.map((navOption) => (
          <NavButton key={navOption.label} {...navOption} isSidebarHidden={isSidebarHidden} />
        ))}
      </div>
      <div className={styles.item}>
        <PremiumAd />
        <Divider className={styles.divider} />
        {bottonNavOptions.map((navOption) => (
          <NavButton key={navOption.label} {...navOption} isSidebarHidden={isSidebarHidden} />
        ))}
      </div>
    </div>
  )
}
