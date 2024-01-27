import { LineChart } from "@tremor/react"
import useHistory from "~/utils/hooks/useHistory"

const chartdata = [
  {
    year: 1970,
    "Export Growth Rate": 2.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Export Growth Rate": 1.88,
    "Import Growth Rate": 1.67,
  },
]

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

const NetWorth = () => {
  const { history } = useHistory()
  return (
    <LineChart
      className="mt-6"
      data={history}
      index="date"
      categories={["netWorth"]}
      colors={["emerald", "gray"]}
      valueFormatter={valueFormatter}
      customTooltip={customTooltip}
      yAxisWidth={75}
      intervalType="preserveStartEnd"
    />
  )
}

export default NetWorth
