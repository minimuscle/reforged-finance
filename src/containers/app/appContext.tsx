import { createContext, useContext, useState } from "react"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface AppContext {
  isSidebarHidden: boolean
  setSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>
}

/******************************************************************
 *  CONTEXT START                                               *
 ******************************************************************/
const AppContext = createContext<AppContext | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarHidden, setSidebarHidden] = useState(false)

  return <AppContext.Provider value={{ isSidebarHidden, setSidebarHidden }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within a SidebarProvider")
  }
  return context
}
