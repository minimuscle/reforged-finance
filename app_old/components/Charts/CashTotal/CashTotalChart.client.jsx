import { Box } from "@mantine/core"
import { ResponsiveBar } from "@nivo/bar"
import { useOutletContext } from "@remix-run/react"

const data = [
  {
    country: "AD",
    "hot dog": 80,
    "hot dogColor": "hsl(52, 70%, 50%)",
    burger: 74,
    burgerColor: "hsl(199, 70%, 50%)",
    sandwich: 12,
    sandwichColor: "hsl(291, 70%, 50%)",
    kebab: 119,
    kebabColor: "hsl(243, 70%, 50%)",
    fries: 27,
    friesColor: "hsl(94, 70%, 50%)",
    donut: 46,
    donutColor: "hsl(303, 70%, 50%)",
  },
]

const convertData = (data) => {
  //converts data into format for nivo bar chart
  const newData = data.reduce((accumulator, currentItem) => {
    accumulator[currentItem.name] = currentItem.balance
    accumulator[`${currentItem.name}Color`] = currentItem.colour
    return accumulator
  }, {})

  return Object.keys(newData).reduceRight((accumulator, key) => {
    accumulator[key] = newData[key]
    return accumulator
  }, {})
}

const CashTotalChart = () => {
  const data = useOutletContext()
  const cash = convertData(data.cash)
  const keys = Object.keys(cash).filter((key) => !key.includes("Color"))
  return (
    <Box h={400}>
      <ResponsiveBar
        data={[cash]}
        keys={keys}
        //indexBy={Object.keys(cash)}
        margin={{ top: 50, right: 150, bottom: 50, left: 50 }}
        //valueScale={{ type: "linear" }}
        //indexScale={{ type: "band", round: true }}
        colors={({ id, data }) => String(data[`${id}Color`])}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 0,
          tickRotation: 0,
          legend: "Income",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        //labelSkipWidth={12}
        //labelSkipHeight={12}
        enableLabel={false}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 4,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  )
}

export default CashTotalChart
