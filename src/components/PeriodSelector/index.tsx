import "./_PeriodSelector.css"
import clsx from "clsx"
import { periods } from "utils/config"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface PeriodSelectorProps {
  onSelect: (period: string) => void
  selectedPeriod: string
}
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
/**
 * Selects the period for the data to be displayed.
 * Requires a function to handle the selected period, which should be tied to the parent and chart
 */
export function PeriodSelector({ onSelect, selectedPeriod }: PeriodSelectorProps) {
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
          onClick={() => onSelect(period)}
        >
          {period}
        </button>
      ))}
    </div>
  )
}
