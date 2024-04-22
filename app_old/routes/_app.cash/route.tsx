import { ActionFunctionArgs } from "@remix-run/node"
import DataDefer from "~/components/DataDefer"
import { isRouteErrorResponse, useRouteError } from "@remix-run/react"
import { Box, Group, Stack } from "@mantine/core"
import styles from "./cash.module.css"
import Totals from "./components/Totals"
import CashHistory from "./components/CashHistory"
import ChartsContainer from "./components/ChartsContainer"
import SidebarContainer from "./components/SidebarContainer"
import { createItem, deleteItem, updateItem } from "~/utils/supabase"

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const intent = formData.get("intent")

  switch (intent) {
    case "createData":
      createItem(request, formData, "cash")
      break
    case "updateData":
      updateItem(request, formData, "cash")
      break
    case "deleteData":
      deleteItem(request, formData.get("id") as string, "cash")
      break
  }
  return null
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

export default function Cash() {
  return (
    <Group className={styles.cashContainer} gap={0}>
      <DataDefer>
        <SidebarContainer />
      </DataDefer>
      <Box className={styles.content}>
        <DataDefer>
          <Stack>
            <Totals />
            <CashHistory />
          </Stack>
        </DataDefer>
        <DataDefer>
          <ChartsContainer />
        </DataDefer>
      </Box>
    </Group>
  )
}
