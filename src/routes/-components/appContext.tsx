import { createContext } from "react"
import { DB } from "utils/types"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface AppContext {
  isSidebarHidden: boolean
  setSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>
  isPremium: boolean
  isLifetimePremium: boolean
  user_data:
    | ({
        userId: string
        email?: string | null
      } & Partial<DB.Row<"profile">>)
    | null
}

const defaultValues: AppContext = {
  isSidebarHidden: false,
  setSidebarHidden: () => {},
  isPremium: false,
  isLifetimePremium: false,
  user_data: null,
}

/******************************************************************
 *  CONTEXT START                                               *
 ******************************************************************/
export const AppContext = createContext<AppContext>(defaultValues)
