import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node"
import { isRouteErrorResponse, useRouteError } from "@remix-run/react"
import { Box, Button, Group } from "@mantine/core"
import NetWorthContainer from "./components/NetWorthContainer"
import classes from "./_index.module.css"
import DataDefer from "~/components/DataDefer"
import AssetsContainer from "./components/AssetsContainer"
import NetworthTrend from "./components/NetworthTrend"
import SafetyNet from "./components/SafetyNet"
import TotalSavingsRate from "./components/TotalSavingsRate"
import Breakdown from "./components/Breakdown/Breakdown"
import TilesSkeleton from "./components/TilesSkeleton"
import Heading from "~/components/Heading"
import BreakdownSkeleton from "./components/Breakdown/BreakdownSkeleton"
import NetWorthContainerSkeleton from "./components/NetWorthContainerSkeleton"
import AssetsContainerSkeleton from "./components/AssetsContainerSkeleton"
import { useDisclosure } from "@mantine/hooks"
import AddMonth from "~/components/AddMonth"
import { supabaseCreate } from "~/utils/supabase"

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

export const action = async ({ request }: ActionFunctionArgs) => {
  //get the formdata
  const formData = await request.formData()
  const cash = formData.get("cash")
  const superannuation = formData.get("super")
  const debts = formData.get("debts")
  const sideIncome = formData.get("sideIncome")

  if (cash && superannuation && debts && sideIncome) {
    //Post to supabase, add the data to a new row in the history table
    //Return the status code

    //set date in format YYYY-MM-DD but make DD always be the first
    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const formattedDate = `${year}-${month}-01`

    const supabase = supabaseCreate(request)
    const user = (await supabase.auth.getSession()).data.session?.user.id
    const { error } = await supabase.from("history").insert({
      user_id: user,
      date: formattedDate,
      cash: 0,
      super: 0,
      debts: 0,
      side_income: 0,
    })
    if (error) {
      console.error("error", error)
      return {
        status: 500,
        data: "Error adding month: " + error.message,
      }
    }

    return { status: 200 }
  } else {
    return {
      status: 400,
      data: "All items must be checked for you to submit a new month",
    }
  }
}

export default function Index() {
  const [opened, { toggle }] = useDisclosure()
  return (
    <Box className={classes.container}>
      <AddMonth opened={opened} toggleClose={toggle} />
      <Heading title="Dashboard">
        <Button color="dark" onClick={toggle}>
          Add Month
        </Button>
      </Heading>
      <DataDefer
        fallback={
          <Group className={classes.graph}>
            <NetWorthContainerSkeleton />
            <AssetsContainerSkeleton />
          </Group>
        }
      >
        <Group className={classes.graph}>
          <NetWorthContainer />
          <AssetsContainer />
        </Group>
      </DataDefer>
      <Group className={classes.tiles}>
        <DataDefer fallback={<TilesSkeleton />}>
          <NetworthTrend />
          <SafetyNet />
          <TotalSavingsRate />
        </DataDefer>
      </Group>
      <DataDefer fallback={<BreakdownSkeleton />}>
        <Breakdown />
      </DataDefer>
    </Box>
  )
}
