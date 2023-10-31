"use client"
import { Text, Title as Heading, Flex } from "@mantine/core"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Cash Chart",
    },
  },
}

const labels = ["January", "February", "March", "April", "May"]

const data = {
  labels,
  datasets: [
    {
      label: "Cash",
      data: [9573, 2432, 3425, 5443, 2343],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
}

export default function HomePage() {
  return (
    <div>
      <Heading>Dashboard</Heading>
      <Text>Personal Finance Dashboard</Text>
      <Flex w="50%">
        <Line options={options} data={data} />
      </Flex>
    </div>
  )
}
