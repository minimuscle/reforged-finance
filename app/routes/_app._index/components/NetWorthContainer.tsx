import { Badge, Group, Paper, Title } from "@mantine/core"
import NetWorth from "~/components/widgets/charts/NetWorth"
import styles from "../_index.module.css"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md/index.js"
import useHistory from "~/utils/hooks/useHistory"
import { formatter } from "~/utils/utils"

const NetWorthContainer = () => {
  const { history } = useHistory()
  const netWorth = history[history.length - 1].netWorth || 0

  //Gets change in networth from first and last history entry currently displayed
  const change = netWorth - (history[0].netWorth || 0)
  const changePercent = (((change * -1) / netWorth) * 100).toFixed(2) + "%"

  return (
    <Paper className={styles.netWorthContainer}>
      <Group className={styles.heading}>
        <Title size={"sm"}>Total Net Worth</Title>
        <Badge
          leftSection={
            change > 0 ? (
              <MdKeyboardDoubleArrowUp />
            ) : (
              <MdKeyboardDoubleArrowDown />
            )
          }
          radius="md"
          color={change > 0 ? "teal" : "red"}
          size="lg"
          variant="light"
        >
          {formatter("AUD", change)} ({changePercent})
        </Badge>
      </Group>
      <Title>{formatter("AUD", netWorth)}</Title>
      <NetWorth />
    </Paper>
  )
}

export default NetWorthContainer
