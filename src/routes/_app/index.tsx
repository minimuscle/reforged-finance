import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { getUserQueryOptions } from "api/supabase"
import { useEffect } from "react"
import { queryClient } from "utils/queryClient"

export const Route = createFileRoute("/_app/")({
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(getUserQueryOptions)
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSuspenseQuery(getUserQueryOptions)
  console.log(data)

  useEffect(() => {
    //timeout for 5 seconds then refetch
    const timeout = setTimeout(() => {
      console.log("Refetching user data...")
      //refetch the query
      queryClient.invalidateQueries({ queryKey: ["user"] })
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  return <div>Hello "/_app/"! {JSON.stringify(data)}</div>
}
