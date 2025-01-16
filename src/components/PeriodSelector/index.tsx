import "./_PeriodSelector.css"
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function PeriodSelector() {
  /*********  RENDER  *********/
  return (
    <div className="PeriodSelector">
      <button className="PeriodSelector__button">1D</button>
      <button className="PeriodSelector__button">1W</button>
      <button className="PeriodSelector__button">1M</button>
      <button className="PeriodSelector__button">3M</button>
      <button className="PeriodSelector__button">1Y</button>
      <button className="PeriodSelector__button">ALL</button>
    </div>
  )
}
