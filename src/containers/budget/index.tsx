import styles from "./_budget.module.css"
import { Button } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { Text } from "components/Text"

/******************************************************************
 *****  COMPONENT START                                       *****
 ******************************************************************/
export const Budget = () => {
  /*********  RENDER  *********/
  return (
    <div className={styles.budget}>
      <Text as="h1" color="info" size={48} alignCenter bold>
        Coming Soon!
      </Text>
      <Text as="h2" color="gray" size={36} alignCenter semiBold>
        Budgeting features are coming soon!
      </Text>
      <Text color="gray" size="lg" alignCenter>
        We're working hard to bring you powerful tools and insights for managing your budget.
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
