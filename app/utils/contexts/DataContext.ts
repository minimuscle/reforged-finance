import { createContext } from "react"
import { OutletContext } from "../types"

export const DataContext = createContext<OutletContext | null>(null)
