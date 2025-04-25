import { PremiumCard } from "containers/premium/components/premiumCard"
import styles from "./_Premium.module.css"
import { Flex } from "components/Flex"
import { useAppContext } from "containers/app/appContext"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Premium() {
  /**********  HOOKS  **********/
  const { isPremium, isLifetimePremium } = useAppContext()

  /*********  RENDER  *********/
  return (
    <Flex fullWidth align="center" justify="center" gap={50} className={styles.premium}>
      <PremiumCard
        title="Free"
        description="Track your net worth effortlessly with essential tools to stay on top of your finances."
        features={[
          "Link and track your accounts",
          "View your net worth and calculations",
          "Basic charts and insights",
          "Secure and private data handling",
        ]}
        cost="Free"
        selected={!isPremium}
      />
      <PremiumCard
        title="Premium"
        description="Unlock powerful insights, convert currency, export your data, and access new beta features before free users."
        features={[
          "Everything from the free plan",
          "No ads",
          "Export your financial data",
          "Early access to beta features (e.g., superannuation tracking)",
          "Priority support",
        ]}
        cost={5}
        discountedCost={50}
        selected={isPremium}
      />
      <PremiumCard
        title="Lifetime"
        description="All the benefits of Premium, forever—no subscriptions, just full access for life."
        features={[
          "Everything in Premium, forever",
          "One-time payment, no recurring fees",
          "Lifetime access to all future premium features",
        ]}
        cost={60}
        selected={isLifetimePremium}
      />
    </Flex>
  )
}
