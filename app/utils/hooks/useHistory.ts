import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { history } from "../types"

export default function useHistory() {
  const data = useContext(DataContext) as any
  const history = data.history as history
  return { history }
}
