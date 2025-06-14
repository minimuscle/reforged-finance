import { Button } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import styles from "./_buy.module.css"
import { Text } from "components/Text"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const Buy = () => (
  <div className={styles.buy}>
    <Text as="h1" color="info" size={48}>
      Thank You!
    </Text>
    <Text as="h2" color="gray" size={36}>
      We're so happy you want to support us.
    </Text>
    <Text color="gray" size="lg" alignCenter>
      However, at this stage, we are still working on core functionality, so it would not be right to offer a paid
      version.
      <br />
      We will continue to delieve everything we want to for FREE first.
      <br />
      <br />
      If you still wish to support us, we will be offerring a way shortly.
    </Text>
    <Link to="/">
      <Button color="sky" size="md">
        Return to Dashboard
      </Button>
    </Link>
  </div>
)
