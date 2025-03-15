import { Store, useStore } from "@tanstack/react-store"
import { Period } from "utils/types"

/******************************************************************
 *  TYPES                                                         *
 ******************************************************************/
interface PeriodStore {
  period: Period
}

/******************************************************************
 *  STORE                                                         *
 ******************************************************************/
const store = new Store<PeriodStore>({
  period: "1Y",
})

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function usePeriod() {
  const period = useStore(store, (state) => state.period)

  function setPeriod(newPeriod: Period) {
    store.setState((state) => {
      return { ...state, period: newPeriod }
    })
  }

  return { period, setPeriod } as const
}
