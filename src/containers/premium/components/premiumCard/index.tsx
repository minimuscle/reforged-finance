import { Card } from "components/Card"
import styles from "./_premiumCard.module.css"
import { Text } from "components/Text"
import { Button } from "@mantine/core"
import { Link } from "@tanstack/react-router"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface PremiumCardProps {
  title: string
  description: string
  features: string[]
  cost: string | number
  period?: "monthly" | "lifetime"
  selected?: boolean
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function PremiumCard({ title, description, features, cost, selected = false }: PremiumCardProps) {
  /**********  HOOKS  **********/

  /*********  RENDER  *********/
  return (
    <Card className={styles.premiumCard}>
      <div className={styles.header}>
        <Text semiBold as="h2" size={"xxl"} color="gray" className={styles.title}>
          {title}
        </Text>
        <Text>{description}</Text>
      </div>

      {typeof cost === "string" ? (
        <Text size={72} semiBold color="teal-6">
          {cost}
        </Text>
      ) : (
        <Text size={72} black color="teal-6" className={styles.cost}>
          <Text color="gray" className={styles.sign}>
            $
          </Text>
          {cost}
          <Text color="gray">/month</Text>
        </Text>
      )}
      <div className={styles.content}>
        <Text>Features:</Text>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <Button component={Link} to="/premium/buy" disabled={selected} className={styles.button} color="teal">
          {selected ? "Current Plan" : "Buy Now"}
        </Button>
      </div>
    </Card>
  )
}
