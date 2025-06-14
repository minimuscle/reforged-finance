import { Button } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import styles from "./_comingSoon.module.css"
import { Text } from "components/Text"
import React from "react"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type ComingSoon = React.FC<{
  title: string
  description: string
}>

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const ComingSoon: ComingSoon = ({ title, description }) => (
  <div className={styles.comingSoon}>
    <Text as="h1" color="info" size={48}>
      Coming Soon!
    </Text>
    <Text as="h2" color="gray" size={36}>
      {title} features are coming soon!
    </Text>
    <Text color="gray" size="lg" alignCenter>
      We're working hard to bring you powerful tools and insights for {description}.
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
