import { createContext, useContext, useState } from "react"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface AppContext {
  isSidebarHidden: boolean
  setSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>
  isPremium: boolean
  isLifetimePremium: boolean
}

/******************************************************************
 *  CONTEXT START                                               *
 ******************************************************************/
const AppContext = createContext<AppContext | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarHidden, setSidebarHidden] = useState(false)
  const isPremium = false //TODO: This will be replaced with a call to the backend to check if the user is a premium user
  const isLifetimePremium = false //TODO: if the premium expiry is set to null, then the user is a lifetime premium user

  return (
    <AppContext.Provider value={{ isSidebarHidden, setSidebarHidden, isPremium, isLifetimePremium }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider")
  }
  return context
}
