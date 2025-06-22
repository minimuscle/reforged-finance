import { createContext, useContext } from "react"
import { DB } from "utils/types"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface AppContext {
  isSidebarHidden: boolean
  setSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>
  isPremium: boolean
  isLifetimePremium: boolean
  user_data: {
    userId: string
    email?: string | null
  } & Partial<DB.Row<"profile">>
}

/******************************************************************
 *  CONTEXT START                                               *
 ******************************************************************/
export const AppContext = createContext<AppContext | undefined>(undefined)

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider")
  }
  return context
}
