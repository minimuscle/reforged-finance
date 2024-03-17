import type { MetaFunction } from '@remix-run/node'
import { isRouteErrorResponse, useRouteError } from '@remix-run/react'
import { Box, Group } from '@mantine/core'
import NetWorthContainer from './components/NetWorthContainer'
import classes from './_index.module.css'
import DataDefer from '~/components/DataDefer'
import AssetsContainer from './components/AssetsContainer'
import NetworthTrend from './components/NetworthTrend'
import SafetyNet from './components/SafetyNet'
import TotalSavingsRate from './components/TotalSavingsRate'
import Breakdown from './components/Breakdown/Breakdown'
import TilesSkeleton from './components/TilesSkeleton'
import Heading from '~/components/Heading'
import BreakdownSkeleton from './components/Breakdown/BreakdownSkeleton'
import NetWorthContainerSkeleton from './components/NetWorthContainerSkeleton'
import AssetsContainerSkeleton from './components/AssetsContainerSkeleton'

export const meta: MetaFunction = () => {
  return [{ title: 'Dashboard | Reforged Finance' }]
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
    <Box className={classes.container}>
      <Heading title='Dashboard' buttonText='Add Month' />
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
