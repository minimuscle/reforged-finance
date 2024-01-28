import type { MetaFunction } from "@remix-run/node"
import { isRouteErrorResponse, useRouteError } from "@remix-run/react"
import { Box, Group, Title } from "@mantine/core"
import NetWorthContainer from "./components/NetWorthContainer"
import styles from "./_index.module.css"
import DataDefer from "~/components/DataDefer"
import AssetsContainer from "./components/AssetsContainer"

export const meta: MetaFunction = () => {
  return [{ title: "Dashboard | Wealthfire" }]
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
    <Box className={styles.container}>
      <Title className={styles.title}>Dashboard</Title>
      <DataDefer>
        <Group gap={0}>
          <NetWorthContainer />
          <AssetsContainer />
        </Group>
        <Group>
          <p>Hi</p>
        </Group>
      </DataDefer>
    </Box>
  )
}
