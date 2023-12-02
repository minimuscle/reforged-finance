import { Box } from "@mantine/core"
import { ResponsiveLine } from "@nivo/line"
import { formatter, getThisYearData } from "../../../util"

const formatData = (data) => {
  const formattedData = [
    {
      id: "Net Worth",
      data: [],
    },
    {
      id: "-Net Worth",
      data: [],
    },
  ]

  data.forEach((item) => {
    const netWorth = item.cash + item.super + item.debts
    // split negative and positive values into separate datasets
    if (netWorth < 0) {
      formattedData[0].data.push({
        x: `${item.year}-${item.month}-01`,
        y: null,
      })
      formattedData[1].data.push({
        x: `${item.year}-${item.month}-01`,
        y: netWorth,
      })
    } else if (netWorth < 1000 && netWorth > -1000) {
      formattedData[0].data.push({
        x: `${item.year}-${item.month}-01`,
        y: netWorth,
      })
      formattedData[1].data.push({
        x: `${item.year}-${item.month}-01`,
        y: netWorth,
      })
    } else {
      formattedData[0].data.push({
        x: `${item.year}-${item.month}-01`,
        y: netWorth,
      })
      formattedData[1].data.push({
        x: `${item.year}-${item.month}-01`,
        y: null,
      })
    }
  })

  return formattedData
}

const getHighestValue = (data) => {
  let max = 0

  data[0].data.forEach((item) => {
    if (item.y > max) {
      max = item.y
    }
  })

  return max > 0 ? max + 5000 : 0
}

const NetWorthChart = ({ data }) => {
  const thisYear = getThisYearData(data)
  const formattedData = formatData(thisYear)
  const max = getHighestValue(formattedData)

  return (
    <Box h={310}>
      <ResponsiveLine
        animate
        axisBottom={{
          format: "%b %y",
          legendOffset: -12,
          tickValues: "every month",
        }}
        axisLeft={{
          legendOffset: 12,
        }}
        curve="monotoneX"
        data={formattedData}
        height={300}
        margin={{
          bottom: 60,
          left: 80,
          right: 20,
          top: 40,
        }}
        width={700}
        xFormat="time:%Y-%m-%d"
        xScale={{
          format: "%Y-%m-%d",
          precision: "day",
          type: "time",
          useUTC: false,
        }}
        yScale={{
          min: "auto",
          max: max,
          type: "linear",
        }}
        enableSlices="x"
        enableArea
        areaOpacity={0.4}
        colors={["#20c997", "#ff6b6b"]}
        defs={[
          {
            colors: [
              {
                color: "inherit",
                offset: 0,
                opacity: 0,
              },
              {
                color: "inherit",
                offset: 100,
                opacity: 1,
              },
            ],
            id: "gradientA",
            type: "linearGradient",
          },
          {
            colors: [
              {
                color: "inherit",
                offset: 0,
                opacity: 1,
              },
              {
                color: "inherit",
                offset: 100,
                opacity: 0,
              },
            ],
            id: "gradientB",
            type: "linearGradient",
          },
        ]}
        fill={[
          {
            id: "gradientA",
            match: { id: "-Net Worth" },
          },
          {
            id: "gradientB",
            match: { id: "Net Worth" },
          },
        ]}
        yFormat={(value) => formatter.format(value)}
      />
    </Box>
  )
}

export default NetWorthChart
