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
import { Doughnut, Bar } from "react-chartjs-2"
import { ClientOnly } from "remix-utils/client-only"

ChartJS.register(
  ArcElement,
  CategoryScale,
  LineElement,
  LinearScale,
  BarElement,
  LineController,
  PointElement,
  Tooltip,
  Legend
)

const data = [
  {
    name: "Cash",
    value: 9723,
  },
  {
    name: "Super",
    value: 6881,
  },
  {
    name: "Stocks",
    value: 1435,
  },
  {
    name: "Property",
    value: 9435,
  },
]

const formatter = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
})

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
}

function Fallback() {
  return <div>Generating Chart</div>
}

export function NetWorthChart(data) {
  const latest = data.data[data.data.length - 1]

  return (
    <ClientOnly fallback={<Fallback />}>
      {() => (
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
      )}
    </ClientOnly>
  )
}

function getMonthName(monthNumber) {
  const date = new Date()
  date.setMonth(monthNumber - 1)

  return date.toLocaleString("en-US", {
    month: "long",
  })
}

export function HistoricalNetWorthChart(data) {
  return (
    <ClientOnly fallback={<Fallback />}>
      {() => (
        <Bar
          className="barChart"
          height="100px"
          options={{
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
                data: data.data.map(
                  (item) => item.cash + item.super + item.debts
                ),
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
      )}
    </ClientOnly>
  )
}
