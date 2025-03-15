import "./_PeriodSelector.css"
import clsx from "clsx"
import { periods } from "utils/config"
import { usePeriod } from "utils/hooks/usePeriod"
import { Period } from "utils/types"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
/**
 * Selects the period for the data to be displayed.
 * Hooks into the usePeriod hook to manage the selected period.
 */
export function PeriodSelector() {
  /**********  HOOKS  **********/
  const { period: selectedPeriod, setPeriod } = usePeriod()

  /*********  RENDER  *********/
  return (
    <div className="PeriodSelector">
      {periods.map((period) => (
        <button
          key={period}
          className={clsx(
            "PeriodSelector__button",
            selectedPeriod === period && "PeriodSelector__button--active",
            period.length > 2 && "PeriodSelector__buttonLarge"
          )}
          onClick={() => setPeriod(period)}
        >
          {period}
        </button>
      ))}
    </div>
  )
}
