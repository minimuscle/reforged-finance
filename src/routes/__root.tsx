import * as React from 'react'
import { createRootRouteWithContext, HeadContent, Outlet } from '@tanstack/react-router'
import type { RouterContext } from '../utils/types/router.ts'

/******************************************************
 *   ROOT ROUTE START
 ******************************************************/
export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      {
        title: 'Reforged Finance',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <Outlet />
    </React.Fragment>
  )
}
