import { useSuspenseQueries } from "@tanstack/react-query"
import { useState } from "react"
import { AppContext } from "routes/-components/appContext"
import { query } from "src/queries/queryTree"

export function AppProvider({ children }: { children: React.ReactNode }) {
  /*****  HOOKS  *****/
  const [isSidebarHidden, setSidebarHidden] = useState(false)

  /*****  QUERIES  *****/
  const { profile_details, id, email } = useSuspenseQueries({
    queries: [query.user.profile.createQueryOptions(), query.user.createQueryOptions()],
    combine: (results) => ({
      profile_details: results[0].data.data,
      id: results[1].data.data?.user?.id ?? "",
      email: results[1].data.data?.user?.email ?? "",
    }),
  })

  /*****  RENDER  *****/
  return (
    <AppContext
      value={{
        isSidebarHidden,
        setSidebarHidden,
        isPremium: profile_details?.premium ?? false,
        isLifetimePremium: profile_details?.lifetime_premium ?? false,
        user_data: { ...profile_details, userId: id, email: email },
      }}
    >
      {children}
    </AppContext>
  )
}
