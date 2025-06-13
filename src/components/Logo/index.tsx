import Logo from "assets/Images/Logo.png"
import clsx from "clsx"
import { Flex } from "components/Flex"
import { Text } from "components/Text"
import styles from "./_Logo.module.css"
import { Badge } from "@mantine/core"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function LogoCard({ className }: { className?: string }) {
  const cls = clsx(styles.logo, className)
  /*********  RENDER  *********/
  return (
    <Flex direction="column" className={cls}>
      <Badge size="41px" color="pink" className={styles.versionTag}>
        Alpha
      </Badge>
      <img className={styles.image} src={Logo} alt="Reforged Finance Logo" />
      <Flex direction="column" gap={0}>
        <Text size="xxxl" alignCenter>
          Reforged Finance
        </Text>
        <Text size="xl" color="gray" className={styles.subtitle} alignCenter>
          Personal Wealth Tracker
        </Text>
      </Flex>
    </Flex>
  )
}
