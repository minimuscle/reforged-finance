import { Badge, Group, Paper, Space, Title } from "@mantine/core"
import NetWorth from "./charts/NetWorth"
import styles from "../_index.module.css"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md/index.js"
import useHistory from "~/utils/hooks/useHistory"
import { formatter } from "~/utils/utils"
import ChartFilters from "~/components/ChartFilters"
import { useEffect, useState } from "react"

const NetWorthContainer = () => {
  const { history } = useHistory()
  const [active, setActive] = useState("ALL")
  const netWorth = history[history.length - 1].netWorth || 0
  const [change, setChange] = useState({
    value: netWorth - (history[0].netWorth || 0),
    percent:
      (
        ((netWorth - (history[0].netWorth || 0)) / (history[0].netWorth || 0)) *
        100
      ).toFixed(2) + "%",
  })
  useEffect(() => {
    //filter change and change percent based on active
    let itemNumber = 0
    switch (active) {
      case "3M":
        itemNumber = history.length - 3 < 0 ? 0 : history.length - 3
        break
      case "6M":
        itemNumber = history.length - 6 < 0 ? 0 : history.length - 6
        break
      case "1Y":
        itemNumber = history.length - 12 < 0 ? 0 : history.length - 12
        break
      case "5Y":
        itemNumber = history.length - 60 < 0 ? 0 : history.length - 60
        break
      case "YTD":
        // eslint-disable-next-line no-case-declarations
        const today = new Date()
        itemNumber =
          history.findIndex(
            (item) => new Date(item.date).getFullYear() === today.getFullYear()
          ) || 0
        break
      case "ALL":
        itemNumber = 0
        break
    }

    setChange({
      value: netWorth - (history[itemNumber].netWorth || 0),
      percent:
        (
          ((netWorth - (history[itemNumber].netWorth || 0)) /
            Math.abs(history[itemNumber].netWorth || 0)) *
          100
        ).toFixed(2) + "%",
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  //Gets change in networth from first and last history entry currently displayed

  return (
    <Paper className={styles.netWorthContainer}>
      <Group className={styles.header}>
        <Title size={"sm"}>Total Net Worth</Title>
        <Badge
          leftSection={
            change.value > 0 ? (
              <MdKeyboardDoubleArrowUp />
            ) : (
              <MdKeyboardDoubleArrowDown />
            )
          }
          radius="md"
          color={change.value > 0 ? "teal" : "red"}
          size="lg"
          variant="light"
        >
          {formatter("AUD", change.value)} ({change.percent})
        </Badge>
      </Group>

      <Title>{formatter("AUD", netWorth)}</Title>
      <Group className={styles.filters}>
        <Space />
        <ChartFilters active={active} setActive={setActive} />
      </Group>
      <NetWorth filter={active} />
    </Paper>
  )
}

export default NetWorthContainer
