import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  BarElement,
  LineElement,
  LineController,
  PointElement,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import zoomPlugin from "chartjs-plugin-zoom"

ChartJS.register(
  ArcElement,
  CategoryScale,
  LineElement,
  LinearScale,
  BarElement,
  LineController,
  PointElement,
  Tooltip,
  Legend,
  zoomPlugin
)

function getMonthName(monthNumber) {
  const date = new Date()
  date.setMonth(monthNumber - 1)

  return date.toLocaleString("en-US", {
    month: "long",
  })
}

export default function HistoricalNetWorthChart(data) {
  return (
    <Bar
      className="barChart"
      height="100px"
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart",
          },
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: "x",
            },
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      }}
      data={{
        labels: data.data.map(
          (item) => getMonthName(item.month) + " " + item.year
        ),
        datasets: [
          {
            type: "line",
            borderColor: "#F21616",
            borderWidth: 2,
            fill: false,
            label: "Total Net Worth",
            data: data.data.map((item) => item.cash + item.super + item.debts),
            backgroundColor: ["#F21616"],
            //borderColor: ["#1c7c54", "#ffcb77", "#ff847c"],
            //borderWidth: 1,
          },
          {
            type: "bar",
            label: "Cash",
            data: data.data.map((item) => item.cash),
            backgroundColor: ["#6BD731"],
            //borderColor: ["#1c7c54", "#ffcb77", "#ff847c"],
            //borderWidth: 1,
          },
          {
            type: "bar",
            label: "Super",
            data: data.data.map((item) => item.super),
            backgroundColor: ["#099CFF"],
            //borderColor: ["#1c7c54", "#ffcb77", "#ff847c"],
            //borderWidth: 1,
          },
          {
            type: "bar",
            label: "Debts",
            data: data.data.map((item) => item.debts),
            backgroundColor: ["#D9D02F"],
            //borderColor: ["#1c7c54", "#ffcb77", "#ff847c"],
            //borderWidth: 1,
          },
        ],
      }}
    />
  )
}
