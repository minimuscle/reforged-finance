import { Badge, Space } from "@mantine/core"
import { Card } from "components/Card"
import { DataTable } from "components/DataTable"
import styles from "./_savingsTable.module.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function SavingsTable() {
  /**********  CONSTS  **********/
  const year = new Date().getFullYear()

  //TODO: when adding data, ensure if over 1 million that the cents are removed for padding

  /*********  RENDER  *********/
  return (
    <Card heading={`${year} Cash Savings`} smallHeader className={styles.savingsTable}>
      <Space h="md" />
      <DataTable>
        <DataTable.Body>
          <DataTable.Row>
            <DataTable.Col>Cash savings this month</DataTable.Col>
            <DataTable.Col>
              <Badge size="lg" variant="light" radius="sm" color="red">
                -$311,133,346
              </Badge>
            </DataTable.Col>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Col>Cash savings this year</DataTable.Col>
            <DataTable.Col>
              <Badge size="lg" variant="light" radius="sm" color="green">
                $1,311,133
              </Badge>
            </DataTable.Col>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Col>Average cash savings per month</DataTable.Col>
            <DataTable.Col>
              <Badge size="lg" variant="light" radius="sm" color="red">
                -$555,555.55
              </Badge>
            </DataTable.Col>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Col>Predicted cash savings EOY</DataTable.Col>
            <DataTable.Col>
              <Badge size="lg" variant="light" radius="sm" color="red">
                -$1,311.42
              </Badge>
            </DataTable.Col>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Col>Predicted total cash EOY</DataTable.Col>
            <DataTable.Col>
              <Badge size="lg" variant="light" radius="sm" color="green">
                $1,346.42
              </Badge>
            </DataTable.Col>
          </DataTable.Row>
        </DataTable.Body>
      </DataTable>
    </Card>
  )
}
