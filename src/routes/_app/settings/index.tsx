import { createFileRoute } from '@tanstack/react-router'

/******************************************************
 *   ROUTE START
 ******************************************************/
export const Route = createFileRoute('/_app/settings/')({
  component: RouteComponent,
})

/******************************************************
 *   ROUTE COMPONENT START
 ******************************************************/
function RouteComponent() {
  /***** RENDER *****/
  return <div>Hello "/_app/settings/"!</div>
}
