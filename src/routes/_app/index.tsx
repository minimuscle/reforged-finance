import { createFileRoute } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { getSupabaseServerClient } from "utils/supabase/serverClient"

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
  loader: () => fetchUser(),
})
const fetchUser = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = getSupabaseServerClient()
  const { data, error: _error } = await supabase.auth.getUser()

  console.log(data)
  if (!data.user?.email) {
    return null
  }

  return {
    email: data.user.email,
  }
})

function RouteComponent() {
  return <div>Hello "/_app/"!</div>
}
