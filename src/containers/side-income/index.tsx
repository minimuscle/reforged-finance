import { Button } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import styles from "./_sideIncome.module.css"
import { Text } from "components/Text"

/******************************************************************
 *****  COMPONENT START                                       *****
 ******************************************************************/
export const SideIncome = () => {
  // *********  RENDER  *********
  return (
    <div className={styles.sideIncome}>
      <Text as="h1" color="info" size={48} alignCenter bold>
        Coming Soon!
      </Text>
      <Text as="h2" color="gray" size={36} alignCenter semiBold>
        Side income features are coming soon!
      </Text>
      <Text color="gray" size="lg" alignCenter>
        We're working hard to bring you powerful tools and insights for tracking your side income.
        <br />
        Stay tuned for updates!
      </Text>
      <Link to="/">
        <Button color="sky" size="md">
          Return to Dashboard
        </Button>
      </Link>
    </div>
  )
}
