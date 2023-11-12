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

export function NetWorthChart() {
  return (
    <ClientOnly fallback={<Fallback />}>
      {() => (
        <Doughnut
          data={{
            type: "pie",
            labels: data.map((item) => item.name),
            datasets: [
              {
                label: " Amount",
                data: data.map((item) => item.value),
                backgroundColor: ["#6BD731", "#2BDD66", "#09B8FF", "#099CFF"],
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

export function HistoricalNetWorthChart() {
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
            labels: [
              "January",
              "Febuary",
              "March",
              "April",
              "May",
              "June",
              "January",
              "Febuary",
              "March",
              "April",
              "May",
              "June",
            ],
            datasets: [
              {
                type: "line",
                borderColor: "#F21616",
                borderWidth: 2,
                fill: false,
                label: "Total Net Worth",
                data: [9723, 5723, 7646, 7646, 7646, 7646],
                backgroundColor: ["#F21616"],
                //borderColor: ["#1c7c54", "#ffcb77", "#ff847c"],
                //borderWidth: 1,
              },
              {
                type: "bar",
                label: "Cash",
                data: [9723, 5723, 7646, 7646, 7646, 7646],
                backgroundColor: ["#6BD731"],
                //borderColor: ["#1c7c54", "#ffcb77", "#ff847c"],
                //borderWidth: 1,
              },
              {
                type: "bar",
                label: "Super",
                data: [723, 6881, 8881, 8881, 8881, 8881],
                backgroundColor: ["#099CFF"],
                //borderColor: ["#1c7c54", "#ffcb77", "#ff847c"],
                //borderWidth: 1,
              },
              {
                type: "bar",
                label: "Debts",
                data: [-9723, -5723, -7646, -7646, -7646, -7646],
                backgroundColor: ["#7B2EDA"],
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
