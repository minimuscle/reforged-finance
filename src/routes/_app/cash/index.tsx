import { createFileRoute } from "@tanstack/react-router"
import styles from "./_Cash.module.css"
import { Flex } from "components/Flex"
import { TotalSavings } from "routes/_app/cash/-components/totalSavings"
import { SavingsTable } from "routes/_app/cash/-components/savingsTable"
import { AccountsList } from "routes/_app/cash/-components/accountsList"
import { CashSavingsBreakdown } from "routes/_app/cash/-components/charts/savingsBreakdown"
import { CashValueHistoryChart } from "routes/_app/cash/-components/charts/cashValueHistory"
import { CashSavings } from "routes/_app/cash/-components/charts/cashSavings"
import { CashSavingsRate } from "routes/_app/cash/-components/charts/savingsRate"
import { HistoryTable } from "routes/_app/cash/-components/historyTable"

export const Route = createFileRoute("/_app/cash/")({
  component: RouteComponent,
})

function RouteComponent() {
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
        <HistoryTable />
      </Flex>
    </Flex>
  )
}
