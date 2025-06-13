import { Button } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import styles from "./_super.module.css"
import { Text } from "components/Text"

/******************************************************************
 *****  COMPONENT START                                       *****
 ******************************************************************/
export const Super = () => {
  /*********  RENDER  *********/
  return (
    <div className={styles.super}>
      <Text as="h1" color="info" size={48}>
        Coming Soon!
      </Text>
      <Text as="h2" color="gray" size={36}>
        Superannuation features are coming soon!
      </Text>
      <Text color="gray" size="lg" alignCenter>
        We're working hard to bring you powerful tools and insights for managing your super.
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
