import { Box, Paper, Text } from "@mantine/core"
import { ResponsivePie } from "@nivo/pie"
import { formatter } from "../../../util"

const formatData = (data) => {
  const formattedData = []

  data.cash &&
    formattedData.push({
      id: "Cash",
      value: data.cash,
    })
  data.super &&
    formattedData.push({
      id: "Super",
      value: data.super,
    })
  data.stocks &&
    formattedData.push({
      id: "Stocks",
      value: data.stocks,
    })
  data.property &&
    formattedData.push({
      id: "Property",
      value: data.property,
    })
  return formattedData
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    colors={{
      scheme: "paired",
    }}
    margin={{ top: 20, right: 100, bottom: 20, left: 110 }}
    theme={{
      text: {
        fontFamily: "Roboto Slab, serif",
        fontSize: "16px",
      },
    }}
    innerRadius={0.6}
    animate
    activeOuterRadiusOffset={8}
    padAngle={2}
    cornerRadius={3}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLinkLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 1.2]],
    }}
    //arcLabelsTextColor={{ from: "color", modifiers: [["brighter", 0.5]] }}
    valueFormat={(value) => formatter.format(value)}
    arcLabel={false}
  />
)

function AssetDistributionChart({ data }) {
  const chart = formatData(data)
  return (
    <div className="donut">
      <Box h={310}>
        <MyResponsivePie data={chart} />
      </Box>
    </div>
  )
}

export default AssetDistributionChart
