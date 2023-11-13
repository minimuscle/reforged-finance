import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend)

function NetWorthChart(data) {
  const latest = data.data[data.data.length - 1]

  return (
    <Doughnut
      data={{
        type: "pie",
        labels: ["Cash", "Super"],
        datasets: [
          {
            label: " Amount",
            data: [latest.cash, latest.super],
            backgroundColor: ["#6BD731", "#09B8FF", "#099CFF"],
            //borderColor: ["#1c7c54", "#ffcb77", "#ff847c"],
            //borderWidth: 1,
          },
        ],
      }}
    />
  )
}

export default NetWorthChart
