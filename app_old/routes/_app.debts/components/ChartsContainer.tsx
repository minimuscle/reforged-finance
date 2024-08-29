import useHistory from "~/utils/hooks/useHistory"
import DebtsHistory from "./Charts/DebtsHistory"
import { useMemo, useState } from "react"
import { transformData } from "~/utils/utils"
import { Stack } from "@mantine/core"
import classes from "../debts.module.css"
import LiabilitiesBreakdown from "./Charts/LiabilitiesBreakdown"

const ChartsContainer = () => {
  const { history } = useHistory()
  const [active, setActive] = useState("ALL")
  const historyData = useMemo(
    () => transformData(history, active),
    [history, active]
  )
  return (
    <Stack className={classes.charts}>
      <LiabilitiesBreakdown />
      <DebtsHistory data={historyData} active={active} setActive={setActive} />
    </Stack>
  )
}

export default ChartsContainer
