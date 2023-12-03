import { Flex } from "@mantine/core"
import { createSupabaseServerClient } from "../util/supabase.server"
import AssetDistribution from "../components/Widgets/Dashboard/AssetDistribution"
import NetWorth from "../components/Widgets/Dashboard/NetWorth"
import { isRouteErrorResponse, useRouteError } from "@remix-run/react"

export const meta = () => {
  return [{ title: "Dashboard | WealthFire" }]
}
export const ErrorBoundary = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    )
  } else {
    return <h1>Unknown Error</h1>
  }
}

export default function Index() {
  return (
    <>
      <Flex gap="md" wrap>
        <AssetDistribution />
        <NetWorth />
      </Flex>
    </>
  )
}
