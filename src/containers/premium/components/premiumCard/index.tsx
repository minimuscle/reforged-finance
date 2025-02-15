import { Card } from "components/Card"
import "./_premiumCard.css"
import { Text } from "components/Text"
import { Button } from "@mantine/core"
import { useAppContext } from "containers/app/appContext"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface PremiumCardProps {
  title: string
  description: string
  features: string[]
  cost: string | number
  period?: "monthly" | "lifetime"
  discountedCost?: number
  selected?: boolean
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function PremiumCard({
  title,
  description,
  features,
  cost,
  discountedCost,
  selected = false,
}: PremiumCardProps) {
  /**********  HOOKS  **********/

  /*********  RENDER  *********/
  return (
    <Card className="premiumCard">
      <div className="premiumCard__header">
        <Text semiBold as="h2" size={"xxl"} color="gray" className="premiumCard__title">
          {title}
        </Text>
        <Text className="premiumCard__description">{description}</Text>
      </div>

      {typeof cost === "string" ? (
        <Text size={72} semiBold color="teal-6">
          {cost}
        </Text>
      ) : (
        <Text size={72} black color="teal-6" className="premiumCard__cost">
          <Text color="gray" className="premiumCard__costSign">
            $
          </Text>
          {cost}
          <Text color="gray">/month</Text>
        </Text>
      )}
      <div className="premiumCard__content">
        <Text>Features:</Text>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="premiumCard__footer">
        <Button disabled={selected} className="premiumCard__button" color="teal">
          {selected ? "Current Plan" : "Buy Now"}
        </Button>
      </div>
    </Card>
  )
}
