import styles from "./_debts.module.css"
import { Flex } from "components/Flex"
import { AccountsList } from "containers/debts/components/accountsList"
import { SavingsTable } from "containers/debts/components/savingsTable"
import { CashValueHistoryChart } from "containers/debts/components/charts/cashValueHistory"
import { CashSavings } from "containers/debts/components/charts/cashSavings"
import { CashSavingsRate } from "containers/debts/components/charts/savingsRate"
import { CashSavingsBreakdown } from "containers/debts/components/charts/savingsBreakdown"
import { TotalDebts } from "containers/debts/components/totalDebts"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Debts() {
  /*********  RENDER  *********/
  return (
    <Flex fullWidth gap={15}>
      <Flex direction="column" fullWidth gap={15} className={styles.cash}>
        <TotalDebts />
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
