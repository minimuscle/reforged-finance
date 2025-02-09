import { PremiumCard } from "containers/premium/components/premiumCard"
import "./_Premium.css"
import { Flex } from "components/Flex"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Premium() {
  /*********  RENDER  *********/
  return (
    <Flex fullWidth align="center" justify="space-around" className="Premium">
      <PremiumCard />
      <PremiumCard />
      <PremiumCard />
    </Flex>
  )
}
