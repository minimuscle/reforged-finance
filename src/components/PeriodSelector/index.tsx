import styles from "./_PeriodSelector.module.css"
import clsx from "clsx"
import { periods } from "utils/config"
import { usePeriod } from "utils/hooks/usePeriod"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface PeriodSelectorProps {
  withSubtitle?: boolean
  className?: string
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
/**
 * Selects the period for the data to be displayed.
 * Hooks into the usePeriod hook to manage the selected period.
 */
export function PeriodSelector({ withSubtitle, className }: PeriodSelectorProps) {
  /**********  HOOKS  **********/
  const { period: selectedPeriod, setPeriod } = usePeriod()

  /*********  RENDER  *********/
  return (
    <div className={clsx(styles.periodSelector, className, { [styles.withSubtitle]: withSubtitle })}>
      {periods.map((period) => (
        <button
          key={period}
          className={clsx(styles.button, {
            [styles.active]: selectedPeriod === period,
            [styles.large]: period.length > 2,
          })}
          onClick={() => setPeriod(period)}
        >
          {period}
        </button>
      ))}
    </div>
  )
}
