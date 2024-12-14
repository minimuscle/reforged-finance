import Logo from "assets/Images/Logo.png"
import clsx from "clsx"
import { Flex } from "components/Flex"
import { Text } from "components/Text"
import "./_Logo.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function LogoCard({ className }: { className?: string }) {
  const cls = clsx("Logo", className)
  /*********  RENDER  *********/
  return (
    <Flex direction="column" className={cls}>
      <img className="Logo__image" src={Logo} alt="Reforged Finance Logo" />
      <Flex direction="column" gap={0}>
        <Text className="Logo__title" size="xxxl" alignCenter>
          Reforged Finance
        </Text>
        <Text size="xl" color="gray" className="Logo__subtitle" alignCenter>
          Personal Wealth Tracker
        </Text>
      </Flex>
    </Flex>
  )
}
