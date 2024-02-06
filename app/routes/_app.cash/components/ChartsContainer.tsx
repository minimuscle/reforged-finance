import useHistory from "~/utils/hooks/useHistory"
import CashValueHistory from "./Charts/CashValueHistory"
import SavingsHistory from "./Charts/SavingsHistory"
import SavingsRate from "./Charts/SavingsRate"
import { useMemo, useState } from "react"
import { transformData } from "~/utils/utils"
import { Stack } from "@mantine/core"
import classes from "../cash.module.css"

const ChartsContainer = () => {
  const { history } = useHistory()
  const [active, setActive] = useState("ALL")
  const historyData = useMemo(
    () => transformData(history, active),
    [history, active]
  )
  return (
    <Stack className={classes.charts}>
      <CashValueHistory
        data={historyData}
        active={active}
        setActive={setActive}
      />
      <SavingsHistory
        data={historyData}
        active={active}
        setActive={setActive}
      />
      <SavingsRate data={historyData} active={active} setActive={setActive} />
    </Stack>
  )
}

export default ChartsContainer
