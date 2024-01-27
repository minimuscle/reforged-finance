import { LineChart } from "@tremor/react"
import useHistory from "~/utils/hooks/useHistory"
import { history } from "~/utils/types"

const valueFormatter = (number: number) => {
  if (number < 0) {
    return `-$${new Intl.NumberFormat("us").format(number * -1).toString()}`
  } else {
    return `$${new Intl.NumberFormat("us").format(number).toString()}`
  }
}

const customTooltip = ({ payload, active }: any) => {
  if (!active || !payload) return null
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div
            className={`w-1 flex flex-col bg-${category.color}-500 rounded`}
          />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p className="font-medium text-tremor-content-emphasis">
              {valueFormatter(category.value)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

const transformData = (history: history[]) => {
  //convert date to date object
  history = history.map((item) => {
    const date = new Date(item.date)
    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    })
    return { ...item, date: formattedDate }
  })
  return history
}

const getLowestNetWorth = (history: history[]) => {
  const netWorths = history.map((item) => item.netWorth) as number[]
  return Math.min(...netWorths)
}

const getHighestNetWorth = (history: history[]) => {
  const netWorths = history.map((item) => item.netWorth) as number[]
  console.log(Math.max(...netWorths))
  return Math.max(...netWorths)
}

const NetWorth = () => {
  const { history } = useHistory()
  const historyData = transformData(history)

  //set minimum value to 1.5x the lowest net worth rounded to the nearest 1000
  const lowestNetWorth =
    Math.round((getLowestNetWorth(historyData) * 1.5) / 1000) * 1000
  const highestNetWorth =
    Math.round((getHighestNetWorth(historyData) * 1.5) / 1000) * 1000

  return (
    <LineChart
      className="mt-6"
      data={historyData}
      index="date"
      categories={["netWorth"]}
      colors={["emerald", "gray"]}
      valueFormatter={valueFormatter}
      customTooltip={customTooltip}
      yAxisWidth={75}
      showAnimation
      showLegend={false}
      minValue={lowestNetWorth}
      maxValue={highestNetWorth < 0 ? 0 : highestNetWorth}
      intervalType="preserveStartEnd"
    />
  )
}

export default NetWorth
