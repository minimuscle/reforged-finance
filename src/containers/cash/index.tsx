import { TotalSavings } from "containers/cash/components/totalSavings"
import "./_Cash.css"
import { Flex } from "components/Flex"
import { AccountsList } from "containers/cash/components/accountsList"
import { SavingsTable } from "containers/cash/components/savingsTable"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Cash() {
  /*********  RENDER  *********/
  return (
    <>
      <Flex direction="column" fullWidth gap={15} className="Cash">
        <TotalSavings />
        <SavingsTable />
        <AccountsList />
      </Flex>
    </>
  )
}
