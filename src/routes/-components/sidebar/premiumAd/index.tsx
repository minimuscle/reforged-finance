import { Text } from "components/Text"
import styles from "./_premiumAd.module.css"
import { IconSparkles } from "@tabler/icons-react"
import { Flex } from "components/Flex"
import { Button } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { AppContext } from "routes/-components/appContext"
import { AnimatePresence, motion } from "motion/react"
import { use } from "react"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export function PremiumAd() {
  /*****  HOOKS  *****/
  const { isSidebarHidden } = use(AppContext)

  /*****  RENDER  *****/
  return (
    <>
      <AnimatePresence>
        {isSidebarHidden ? (
          <motion.div
            initial={{ x: -50, height: 40, opacity: 0 }}
            animate={{
              x: 0,
              height: 40,
              opacity: 1,
            }}
            exit={{ x: -50, opacity: 0, transition: { duration: 0.2 } }}
            className={styles.premiumAdSmall}
          >
            <Link to="/premium">
              <IconSparkles size={28} />
            </Link>
          </motion.div>
        ) : (
          <motion.div
            animate={{
              height: 160,
              x: 0,
              opacity: 1,
            }}
            exit={{ x: -50, opacity: 0, transition: { delay: 0, duration: 0.2 } }}
            className={styles.premiumAd}
          >
            <Flex direction="column" gap={10}>
              <Flex gap={10}>
                <IconSparkles size={28} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <Text color="white-0" semiBold size="lg">
                    Upgrade to Premium
                  </Text>
                </motion.div>
              </Flex>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <Flex direction="column" gap={10}>
                  <Text color="white" size="sm">
                    Unlock all features and support the development of Reforged Finance
                  </Text>
                  <Link to="/premium">
                    <Button color="indigo" size="xs">
                      Learn More
                    </Button>
                  </Link>
                </Flex>
              </motion.div>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
