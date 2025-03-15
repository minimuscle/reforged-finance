import { TotalSavings } from "containers/cash/components/totalSavings"
import "./_Cash.css"
import { Flex } from "components/Flex"
import { AccountsList } from "containers/cash/components/accountsList"
import { SavingsTable } from "containers/cash/components/savingsTable"
import { CashValueHistoryChart } from "containers/cash/components/charts/cashValueHistory"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Cash() {
  /*********  RENDER  *********/
  return (
    <Flex fullWidth gap={15}>
      <Flex direction="column" fullWidth gap={15} className="Cash">
        <TotalSavings />
        <SavingsTable />
        <AccountsList />
      </Flex>
      <Flex direction="column" fullWidth gap={15}>
        <CashValueHistoryChart />
        <CashValueHistoryChart />
        <CashValueHistoryChart />
        <CashValueHistoryChart />
      </Flex>
    </Flex>
  )
}
