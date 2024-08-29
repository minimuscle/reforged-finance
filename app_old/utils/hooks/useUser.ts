import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { userProfile } from "../types"

export default function useUser() {
  const data = useContext(DataContext) as any
  const user = data.user as userProfile

  return { user }
}
