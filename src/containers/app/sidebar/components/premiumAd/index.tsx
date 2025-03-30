import { Text } from "components/Text"
import styles from "./_premiumAd.module.css"
import { IconSparkles } from "@tabler/icons-react"
import { Flex } from "components/Flex"
import { Button } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { useAppContext } from "containers/app/appContext"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function PremiumAd() {
  /**********  HOOKS  **********/
  const { isSidebarHidden } = useAppContext()

  /*********  RENDER  *********/
  if (isSidebarHidden) {
    return (
      <Link to="/premium" className={styles.premiumAdSmall}>
        <IconSparkles size={28} />
      </Link>
    )
  }

  return (
    <Flex direction="column" gap={10} className={styles.premiumAd}>
      <Flex gap={10}>
        <IconSparkles size={28} />
        <Text color="white-0" semiBold size="lg">
          Upgrade to Premium
        </Text>
      </Flex>
      <Text color="white" size="sm">
        Unlock all features and support the development of Reforged Finance
      </Text>
      <Link to="/premium">
        <Button color="indigo" size="xs">
          Learn More
        </Button>
      </Link>
    </Flex>
  )
}
