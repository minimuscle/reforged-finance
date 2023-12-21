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
  {
    country: "AE",
    "hot dog": 19,
    "hot dogColor": "hsl(236, 70%, 50%)",
    burger: 87,
    burgerColor: "hsl(269, 70%, 50%)",
    sandwich: 63,
    sandwichColor: "hsl(154, 70%, 50%)",
    kebab: 123,
    kebabColor: "hsl(149, 70%, 50%)",
    fries: 174,
    friesColor: "hsl(149, 70%, 50%)",
    donut: 71,
    donutColor: "hsl(350, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 179,
    "hot dogColor": "hsl(220, 70%, 50%)",
    burger: 61,
    burgerColor: "hsl(128, 70%, 50%)",
    sandwich: 87,
    sandwichColor: "hsl(102, 70%, 50%)",
    kebab: 178,
    kebabColor: "hsl(221, 70%, 50%)",
    fries: 84,
    friesColor: "hsl(150, 70%, 50%)",
    donut: 15,
    donutColor: "hsl(148, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 83,
    "hot dogColor": "hsl(163, 70%, 50%)",
    burger: 174,
    burgerColor: "hsl(18, 70%, 50%)",
    sandwich: 65,
    sandwichColor: "hsl(32, 70%, 50%)",
    kebab: 109,
    kebabColor: "hsl(164, 70%, 50%)",
    fries: 150,
    friesColor: "hsl(351, 70%, 50%)",
    donut: 54,
    donutColor: "hsl(283, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 175,
    "hot dogColor": "hsl(67, 70%, 50%)",
    burger: 100,
    burgerColor: "hsl(122, 70%, 50%)",
    sandwich: 194,
    sandwichColor: "hsl(199, 70%, 50%)",
    kebab: 69,
    kebabColor: "hsl(335, 70%, 50%)",
    fries: 90,
    friesColor: "hsl(319, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(3, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 16,
    "hot dogColor": "hsl(319, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(107, 70%, 50%)",
    sandwich: 27,
    sandwichColor: "hsl(284, 70%, 50%)",
    kebab: 24,
    kebabColor: "hsl(219, 70%, 50%)",
    fries: 6,
    friesColor: "hsl(129, 70%, 50%)",
    donut: 85,
    donutColor: "hsl(186, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 12,
    "hot dogColor": "hsl(172, 70%, 50%)",
    burger: 27,
    burgerColor: "hsl(266, 70%, 50%)",
    sandwich: 172,
    sandwichColor: "hsl(3, 70%, 50%)",
    kebab: 148,
    kebabColor: "hsl(277, 70%, 50%)",
    fries: 60,
    friesColor: "hsl(150, 70%, 50%)",
    donut: 148,
    donutColor: "hsl(120, 70%, 50%)",
  },
]

const HistoricalWorthChart = () => {
  const data = useOutletContext()
  const history = data.history
  return (
    <Box h={310}>
      <ResponsiveBar
        data={history}
        keys={["income", "super", "debts"]}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        //indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
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
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </Box>
  )
}

export default HistoricalWorthChart
