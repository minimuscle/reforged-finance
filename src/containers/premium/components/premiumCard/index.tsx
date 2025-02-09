import { Card } from "components/Card"
import "./_premiumCard.css"
import { Text } from "components/Text"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function PremiumCard() {
  /*********  RENDER  *********/
  return (
    <Card className="premiumCard">
      <Text semiBold as="h2" size={"xxxl"} color="gray" className="premiumCard__title">
        Free
      </Text>
      <Text className="premiumCard__subtitle">All features unlocked</Text>
      <div className="premiumCard__header">
        <Text className="premiumCard__subtitle">
          Unlock all features and support the development of Reforged Finance
        </Text>
      </div>
      <div className="premiumCard__content">
        <ul>
          <li>Unlock all features</li>
          <li>Support the development of Reforged Finance</li>
        </ul>
      </div>
      <div className="premiumCard__footer">
        <button className="premiumCard__button">Learn More</button>
      </div>
    </Card>
  )
}
