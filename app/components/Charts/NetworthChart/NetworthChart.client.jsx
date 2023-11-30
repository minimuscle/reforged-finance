// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { Box } from "@mantine/core"
import { ResponsivePie } from "@nivo/pie"

const data = [
  {
    id: "lisp",
    label: "lisp",
    value: 420,
    color: "#ccc",
  },
  {
    id: "python",
    label: "python",
    value: 599,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 532,
    color: "hsl(264, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 91,
    color: "hsl(10, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 353,
    color: "hsl(233, 70%, 50%)",
  },
]
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
  />
)

function NetworthChart() {
  return (
    <div className="donut">
      <Box h={400}>
        <MyResponsivePie data={data} />
      </Box>
    </div>
  )
}

export default NetworthChart
