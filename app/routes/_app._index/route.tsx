import type { MetaFunction } from "@remix-run/node"
import { isRouteErrorResponse, useRouteError } from "@remix-run/react"
import { Box, Button, Group, Title } from "@mantine/core"
import NetWorthContainer from "./components/NetWorthContainer"
import styles from "./_index.module.css"
import DataDefer from "~/components/DataDefer"
import AssetsContainer from "./components/AssetsContainer"
import { useDisclosure } from "@mantine/hooks"
import MonthModal from "./components/Modal/MonthModal"

export const meta: MetaFunction = () => {
  return [{ title: "Dashboard | Reforged Finance" }]
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
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <Box className={styles.container}>
      <MonthModal opened={opened} close={close} />
      <Group justify="space-between">
        <Title className={styles.title}>Dashboard</Title>
        <Button onClick={open}>Complete Month</Button>
      </Group>
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
