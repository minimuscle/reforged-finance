import { AppContext } from "containers/app/appContext"
import { useState } from "react"
import { query } from "src/queries/queryTree"

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarHidden, setSidebarHidden] = useState(false)
  // const {} = useSuspenseQueries()
  //TODO: add this to a useSuspenseQuerries once I have created a createQueryOptions hook
  const { data: profile_details } = query.user.profile.useSelectSuspenseQuery(void 0, ({ data }) => {
    if (!data) throw new Error("User Profile is blank")
    return data
  })
  const { data: user_data } = query.user.useSelectSuspenseQuery(void 0, ({ data: { user } }) => {
    if (!user) throw new Error("User is not authenticated")
    return user
  })

  return (
    <AppContext.Provider
      value={{
        isSidebarHidden,
        setSidebarHidden,
        isPremium: profile_details.premium,
        isLifetimePremium: profile_details.lifetime_premium,
        user_data: { ...profile_details, userId: user_data.id, email: user_data.email },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
