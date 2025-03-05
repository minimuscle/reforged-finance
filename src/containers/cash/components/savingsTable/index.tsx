import { Card } from "components/Card"
import { Text } from "components/Text"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function SavingsTable() {
  /**********  CONSTS  **********/
  const year = new Date().getFullYear()

  /*********  RENDER  *********/
  return (
    <Card heading={`${year} Cash Savings`} smallHeader>
      <Text></Text>
    </Card>
  )
}
