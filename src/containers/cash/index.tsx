import { TotalSavings } from "containers/cash/components/totalSavings"
import styles from "./_Cash.module.css"
import { Flex } from "components/Flex"
import { AccountsList } from "containers/cash/components/accountsList"
import { SavingsTable } from "containers/cash/components/savingsTable"
import { CashValueHistoryChart } from "containers/cash/components/charts/cashValueHistory"
import { CashSavings } from "containers/cash/components/charts/cashSavings"
import { CashSavingsRate } from "containers/cash/components/charts/savingsRate"
import { CashSavingsBreakdown } from "containers/cash/components/charts/savingsBreakdown"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Cash() {
  /*********  RENDER  *********/
  return (
    <Flex fullWidth gap={15}>
      <Flex direction="column" fullWidth gap={15} className={styles.cash}>
        <TotalSavings />
        <SavingsTable />
        <AccountsList />
        <CashSavingsBreakdown />
      </Flex>
      <Flex direction="column" fullWidth gap={15}>
        <CashValueHistoryChart />
        <CashSavings />
        <CashSavingsRate />
      </Flex>
    </Flex>
  )
}
