import * as React from 'react'
import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'

/******************************************************
 *   ROOT ROUTE START
 ******************************************************/
export const Route = createRootRoute({
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
