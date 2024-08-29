import { Text } from "@mantine/core"
import { RiCheckLine, RiCloseLine } from "react-icons/ri/index.js"

interface MatchItemProps {
  completed: boolean
  children: React.ReactNode
}

export default function MatchItem({ completed, children }: MatchItemProps) {
  return (
    <Text c={completed ? "green" : "red"}>
      {completed ? <RiCheckLine /> : <RiCloseLine />} {children}
    </Text>
  )
}
